# Self-hosting the OpenPilot-style Perception model (COCO-SSD)

> **This is now automatic.** `npm run build` runs
> `scripts/self-host-coco-ssd.mjs` first, which does exactly the steps
> below and is a no-op if the files are already present (e.g. already
> committed from a previous run). You only need to follow the manual steps
> below if you're troubleshooting that script or want to run it in
> isolation.

By default, the Autonomous tab's default detector (`builtin-transformers-autonomous`,
adapter: `coco-ssd`) downloads its model from Google's public model storage
(`storage.googleapis.com/tfjs-models/...`) the first time it's used. That
host is outside MAGENAIS's control — it has been observed returning a
transient `403` on individual weight-shard files (confirmed via a live
DevTools Network capture: `model.json` and 4 of 5 shards succeeded, one
shard 403'd), which fails the whole model load even though nothing is
wrong with MAGENAIS itself.

Running the steps below **once**, with normal internet access, self-hosts
the model as a static asset in this repo. `CocoSsdState.ts`'s
`resolveModelUrl()` already checks for these files first (a single HEAD
request, resolves in well under a second if absent) and uses them instead
of the CDN whenever present — same pattern as the reference `openlane-v4`
project's `loadModelPreferLocal()`. If these files aren't here, nothing
breaks: it silently falls back to the CDN exactly as before.

Because this lives under `public/`, it's included automatically in both
the private and public (GitHub Pages) deployments via the existing
two-repo sync — no separate publishing step needed.

## Step 1 — install `jq` if you don't have it

```bash
apt install jq -y      # Debian/Ubuntu/Termux
brew install jq        # macOS
```

## Step 2 — run this from the repo root

```bash
mkdir -p public/models/coco-ssd/lite_mobilenet_v2
cd public/models/coco-ssd/lite_mobilenet_v2

BASE_URL="https://storage.googleapis.com/tfjs-models/savedmodel/lite_mobilenet_v2"

# 1. Get the manifest
curl -sL "$BASE_URL/model.json" -o model.json

# 2. Read the exact weight-shard filenames out of the manifest itself —
#    avoids hardcoding a shard count that might not match this model version.
SHARDS=$(jq -r '.weightsManifest[].paths[]' model.json)

# 3. Download every shard the manifest actually references. Retries a few
#    times per shard since this is exactly the request type observed
#    403ing intermittently — a plain single curl (like the CDN load path
#    that's failing today) has no retry of its own.
for f in $SHARDS; do
  echo "Downloading $f ..."
  for attempt in 1 2 3; do
    curl -sL --fail "$BASE_URL/$f" -o "$f" && break
    echo "  attempt $attempt failed, retrying in 2s..."
    sleep 2
  done
done

echo "Done. Files in $(pwd):"
ls -la
```

## Step 3 — verify

You should see `model.json` plus several files named like
`group1-shard1of5`, `group1-shard2of5`, etc.

## Step 4 — reload the app

On the next load, the Autonomous tab's Diagnostics panel will show:

```
Self-hosted model files found — loading without depending on Google's model storage.
```

If you ever want to go back to the CDN-hosted default, just delete this
`public/models/coco-ssd/lite_mobilenet_v2/` folder.
