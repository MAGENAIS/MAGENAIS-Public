function e(e,t){return`Here is the complete current HTML/JS source of a small browser game:

\`\`\`html
${e}
\`\`\`

Apply this change request to it: "${t}"

Output ONLY the full, complete, updated HTML document (starting with <!DOCTYPE html>, ending with </html>) with the requested change applied — no explanation, no markdown code fences. Keep everything else about the game working exactly as before unless the change naturally requires touching it. Make sure the result is still a single self-contained file.`}function t(e){let t=e.trim(),n=t.match(/```(?:html)?\s*([\s\S]*?)```/);n&&(t=n[1].trim());let r=t.search(/<!DOCTYPE html>/i);r>0&&(t=t.slice(r));let i=/<!DOCTYPE html>/i.test(t),a=/<\/html>/i.test(t);if(!i||!a){let t=e.trim().slice(0,140).replace(/\s+/g,` `);throw Error(`Not a complete HTML document (${i?`found a start but the document never closed with </html> (likely cut off)`:`no <!DOCTYPE html> found anywhere in the response`}). What came back started with: "${t}${e.length>140?`…`:``}"`)}return t}function n(e){let t=e.trim(),n=t.match(/```(?:js|javascript|html)?\s*([\s\S]*?)```/);return n&&(t=n[1].trim()),t}function r(e){if(!/THREE\.(Scene|WebGLRenderer|PerspectiveCamera)/.test(e))throw Error(`3D engine was requested but the generated code has no Three.js scene/renderer/camera setup.`);if(!/THREE\.(AmbientLight|DirectionalLight|PointLight|SpotLight|HemisphereLight)/.test(e))throw Error(`3D scene has no lighting (THREE.*Light) — meshes would render flat/unlit regardless of geometry.`);let t=/MeshStandardMaterial|MeshPhongMaterial|MeshLambertMaterial|MeshPhysicalMaterial/.test(e);if(/MeshBasicMaterial/.test(e)&&!t)throw Error(`3D scene only uses MeshBasicMaterial, which ignores lighting and renders flat/2D-looking.`);if(!/THREE\.PlaneGeometry/.test(e))throw Error(`3D scene has no ground/floor plane (THREE.PlaneGeometry) — entities would appear to float in empty space with nothing to stand on.`);if(!/camera\.lookAt\s*\(/.test(e))throw Error(`3D scene never calls camera.lookAt(...) — the camera would keep its default orientation instead of framing the ground/action, which is what makes scenes look like they're pointed at empty sky.`);if([...e.matchAll(/camera\.position\.(?:set\s*\(\s*[^,]+,\s*(-?\d+(?:\.\d+)?)|y\s*=\s*(-?\d+(?:\.\d+)?))/g)].some(e=>{let t=parseFloat(e[1]??e[2]);return!isNaN(t)&&t>40}))throw Error(`Camera is positioned unrealistically high above the scene (Y > 40), which fills most of the frame with empty sky instead of the ground/action.`);return e}async function i(e,t,n,r,i,a=3){let o;for(let s=1;s<=a;s++)try{s>1&&r(`${i} — retry ${s}/${a}…`,`warn`);let o=s>1?`\n\n(attempt id: ${Math.random().toString(36).slice(2)} — ignore this line, it's only here to ensure a fresh response)`:``;return t(await n(e()+o,{temperature:.7}))}catch(e){o=e,r(`${i} attempt ${s} failed: ${e.message}`,`error`)}throw o}function a(e){return e.engine===`3d`?`
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2035);
scene.fog = new THREE.Fog(0x1a2035, 15, 60);
const container = document.getElementById('gameContainer') || document.body;
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 6, 12);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0x8899aa, 0.5));
const sun = new THREE.DirectionalLight(0xffffff, 1.1);
sun.position.set(8, 15, 6);
scene.add(sun);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(120, 120),
  new THREE.MeshStandardMaterial({ color: 0x2f6b3c })
);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

const player = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 24, 24),
  new THREE.MeshStandardMaterial({ color: 0x4fc3f7 })
);
player.position.set(0, 0.6, 0);
scene.add(player);

const targets = [];
for (let i = 0; i < 8; i++) {
  const t = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xffb74d })
  );
  t.position.set((Math.random() - 0.5) * 40, 0.5, (Math.random() - 0.5) * 40 - 10);
  scene.add(t);
  targets.push(t);
}

let score = 0;
const scoreEl = document.getElementById('score') || (function () {
  const el = document.createElement('div');
  el.id = 'score';
  el.style.cssText = 'position:fixed;top:12px;left:12px;color:#fff;font:16px sans-serif;z-index:10;';
  document.body.appendChild(el);
  return el;
})();
function updateScore() { scoreEl.textContent = 'Score: ' + score + ' / ' + targets.length; }
updateScore();

const keys = {};
window.addEventListener('keydown', (e) => { keys[e.key.toLowerCase()] = true; });
window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
document.querySelectorAll('[id*="left"],[class*="left"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowleft'] = true); b.addEventListener('touchend', () => keys['arrowleft'] = false); });
document.querySelectorAll('[id*="right"],[class*="right"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowright'] = true); b.addEventListener('touchend', () => keys['arrowright'] = false); });
document.querySelectorAll('[id*="up"],[class*="up"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowup'] = true); b.addEventListener('touchend', () => keys['arrowup'] = false); });
document.querySelectorAll('[id*="down"],[class*="down"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowdown'] = true); b.addEventListener('touchend', () => keys['arrowdown'] = false); });

function animate() {
  requestAnimationFrame(animate);
  const speed = 0.18;
  if (keys['arrowleft'] || keys['a']) player.position.x -= speed;
  if (keys['arrowright'] || keys['d']) player.position.x += speed;
  if (keys['arrowup'] || keys['w']) player.position.z -= speed;
  if (keys['arrowdown'] || keys['s']) player.position.z += speed;
  camera.position.x = player.position.x;
  camera.position.z = player.position.z + 12;
  camera.lookAt(player.position.x, 0, player.position.z);
  for (let i = targets.length - 1; i >= 0; i--) {
    if (player.position.distanceTo(targets[i].position) < 1) {
      scene.remove(targets[i]);
      targets.splice(i, 1);
      score++;
      updateScore();
    }
  }
  renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});`:`
const canvas = document.getElementById('gameCanvas') || (function () {
  const c = document.createElement('canvas');
  c.id = 'gameCanvas';
  document.body.appendChild(c);
  return c;
})();
const ctx = canvas.getContext('2d');
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

let player = { x: 100, y: 100, size: 32 };
let score = 0;
let targets = [];
for (let i = 0; i < 8; i++) {
  targets.push({ x: Math.random() * 800 + 50, y: Math.random() * 500 + 50, taken: false, emoji: '⭐' });
}

const keys = {};
window.addEventListener('keydown', (e) => { keys[e.key.toLowerCase()] = true; });
window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
document.querySelectorAll('[id*="left"],[class*="left"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowleft'] = true); b.addEventListener('touchend', () => keys['arrowleft'] = false); });
document.querySelectorAll('[id*="right"],[class*="right"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowright'] = true); b.addEventListener('touchend', () => keys['arrowright'] = false); });
document.querySelectorAll('[id*="up"],[class*="up"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowup'] = true); b.addEventListener('touchend', () => keys['arrowup'] = false); });
document.querySelectorAll('[id*="down"],[class*="down"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowdown'] = true); b.addEventListener('touchend', () => keys['arrowdown'] = false); });

const scoreEl = document.getElementById('score') || (function () {
  const el = document.createElement('div');
  el.id = 'score';
  el.style.cssText = 'position:fixed;top:12px;left:12px;color:#fff;font:16px sans-serif;z-index:10;';
  document.body.appendChild(el);
  return el;
})();

function loop() {
  requestAnimationFrame(loop);
  const speed = 4;
  if (keys['arrowleft'] || keys['a']) player.x -= speed;
  if (keys['arrowright'] || keys['d']) player.x += speed;
  if (keys['arrowup'] || keys['w']) player.y -= speed;
  if (keys['arrowdown'] || keys['s']) player.y += speed;
  player.x = Math.max(0, Math.min(canvas.width, player.x));
  player.y = Math.max(0, Math.min(canvas.height, player.y));

  for (const t of targets) {
    if (!t.taken && Math.hypot(t.x - player.x, t.y - player.y) < 28) {
      t.taken = true;
      score++;
    }
  }

  ctx.fillStyle = '#1a2035';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '32px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (const t of targets) {
    if (!t.taken) ctx.fillText(t.emoji, t.x, t.y);
  }
  ctx.fillText('🙂', player.x, player.y);
  scoreEl.textContent = 'Score: ' + score + ' / ' + targets.length;
}
loop();`}function o(e){if(!/getContext\s*\(\s*['"]2d['"]\s*\)/.test(e))throw Error(`2D engine was requested but the generated code never calls canvas.getContext("2d").`);if(!/requestAnimationFrame/.test(e))throw Error(`2D game has no requestAnimationFrame game loop — it would only ever draw a single static frame.`);if(!/fillText\s*\(/.test(e))throw Error(`2D game never calls ctx.fillText — entities would not be drawn as the required emoji/Unicode sprites (likely rendering as plain shapes or nothing).`);return e}function s(e){return`Write ONLY the HTML structure, CSS styling, and UI scaffolding (no game logic JS yet) for a simple browser game. ${e.engine===`3d`?`This will be a 3D game using Three.js. Include exactly this script tag in the <head>: <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>`:`This will be a 2D game using the HTML5 Canvas API — include a <canvas id="gameCanvas"></canvas> element.`}

Game concept: "${e.concept}"

Output a complete HTML document with:
- <!DOCTYPE html>, <head> with <meta charset="UTF-8"> as its very first child (the game logic will draw emoji/unicode characters as sprites — this MUST be present and correct for those to render properly instead of as garbled text), then <style>, and <body>
- The canvas (2D) or an empty <div id="gameContainer"></div> (3D, Three.js will inject its own canvas there)
- Background/page CSS colors that thematically fit the concept above (e.g. a pond-and-lily-pad green for a frog game, a desert palette for a sand/dune game) — this is scaffolding, but the color palette must already look like it belongs to THIS concept, not a generic gray placeholder
- On-screen touch control buttons using position:fixed, anchored with pixel offsets (e.g. bottom:16px), each at least 56px square — NOT percentage-centered, so they can't be pushed off-screen
- html, body { margin:0; height:100%; overflow:hidden; touch-action:none; }
- A simple score/lives/status display positioned with fixed top offsets
- A single empty <script> tag at the very end of <body> containing only this exact comment and nothing else: // GAME_LOGIC_PLACEHOLDER

Keep the CSS concise — this is scaffolding only, the JS pass adds the actual characters/objects — but the color palette and any decorative touches must already clearly fit "${e.concept}", not look like an unthemed generic template. Output ONLY the HTML document, starting with <!DOCTYPE html> and ending with </html>. No explanation, no markdown fences.`}function c(e,t){let n=e.engine===`3d`?`Every distinct entity type from the concept (player, obstacles, collectibles, enemies, etc.) must be visually distinguishable and thematically appropriate — use different mesh shapes/colors/proportions per entity type that clearly suggest what they represent (e.g. a green rounded/squashed shape for a frog, gray irregular boxes for stones), not identical plain cubes for everything.

REQUIRED for a scene that actually looks 3D (not flat/cartoonish — this is the single biggest quality issue to avoid):
- Add real lighting: at least one THREE.AmbientLight (low intensity, for fill) PLUS one THREE.DirectionalLight or THREE.PointLight (higher intensity, positioned off-axis so it casts visible shading across faces) added to the scene.
- Use THREE.MeshStandardMaterial or THREE.MeshPhongMaterial for every mesh (NOT MeshBasicMaterial, which ignores lighting entirely and renders as flat, unlit color — this alone is what makes a scene look 2D/flat even with real 3D geometry).
- Set scene.background to a THREE.Color (not left black/default) and add THREE.Fog for depth cueing on anything with distance (roads, terrain, skies).
- Position the camera with a real perspective vantage (THREE.PerspectiveCamera, FOV 50-75, positioned above/behind the action, angled downward) rather than a flat frontal/orthographic-looking view — the ground plane should visibly recede toward a horizon.
- Give the ground/floor plane visible width via THREE.PlaneGeometry, rotated flat with rotation.x = -Math.PI / 2, with the material rules above so it catches light and shows perspective, instead of a bare colored background.
- GROUNDING (avoid the "everything floats in empty space" look): every entity's Y position must rest it ON the ground plane — set position.y to roughly half that mesh's own height/radius (e.g. a box of height 1 sits at y=0.5, a sphere of radius 0.6 sits at y=0.6), not a fixed arbitrary height like y=5 or y=10 that leaves it hovering above the floor with visible empty space underneath. Only things that are meant to fly (birds, drones, projectiles) should be elevated, and even then only modestly above the ground they fly over, not scattered randomly through the sky.
- CAMERA AIM: set camera.position and call camera.lookAt(...) once during setup, and again every frame in the animation loop, targeting the player/action's current position (not the origin if the player moves). Keep the camera LOW and CLOSE: position it roughly 5-10 units above the ground and 8-15 units back from the player, never higher — a camera positioned much higher than this, or angled steeply downward at the horizon instead of at the player, is what causes the frame to fill mostly with empty sky/background instead of the ground and entities, which is a common failure to avoid here.`:`Every distinct entity type from the concept (player, obstacles, collectibles, enemies, etc.) MUST be drawn as a large, readable emoji or Unicode symbol via ctx.font (e.g. "32px serif") + ctx.fillText at its position — pick the emoji that actually matches what the concept describes (a frog game's player should visibly be a frog emoji like 🐸, its obstacles should visibly be stones like 🪨, etc.), not a plain filled rectangle/circle. This is the single most important requirement: the concept must be immediately recognizable just by looking at the game, not just functionally implemented.`,r=e.engine===`3d`?`Three.js (r128 — no OrbitControls, no CapsuleGeometry; use BoxGeometry/SphereGeometry/CylinderGeometry and manual camera control)`:`the HTML5 Canvas 2D API`,i=e.genre?` Genre direction: ${e.genre}.`:``,a=e.complexity===`minimal`?` Keep it minimal: just the core playable loop, one win/lose condition.`:e.complexity===`rich`?` Add modest depth: simple scoring/progression and a couple of varied obstacle/enemy types, but stay realistic for one pass.`:` Standard scope: a clear core loop and one simple scoring or win condition.`;return`Here is the HTML/CSS scaffolding already built for a browser game (DO NOT repeat or rewrite this — you're only writing the JS that goes where the placeholder comment is):

\`\`\`html
${t}
\`\`\`

Game concept: "${e.concept}" using ${r}.${i}${a}

VISUAL REQUIREMENT (read carefully — this is what makes the game actually match the concept instead of looking like an unthemed template): ${n}

Write ONLY the JavaScript game logic that replaces the comment "// GAME_LOGIC_PLACEHOLDER" — initialize the renderer/canvas, set up keyboard (arrow keys/WASD) AND the on-screen touch buttons already present in the HTML (wire up click/touchstart listeners on their existing IDs/classes), implement the game loop, scoring, and win/lose condition described above, drawing every entity per the visual requirement above. Reference the canvas/container element already defined in the HTML above by its existing id. Assume the script runs after the DOM above has loaded (it's the last tag in <body>).

Output ONLY the raw JavaScript code — no <script> tags, no explanation, no markdown fences, just the code that goes inside the script tag.`}async function l(l,d,f){if(l.iterate&&l.previousCode){d(`Applying your change request to the existing game…`);let n=e(l.previousCode,l.concept);return u(await i(()=>n,e=>{let n=t(e);return l.engine===`3d`?r(n):o(n)},f,d,`Iteration`))}d(`Stage 1/2 — structure agent: building HTML/CSS scaffolding…`);let p=await i(()=>s(l),t,f,d,`Structure agent`);p.includes(`GAME_LOGIC_PLACEHOLDER`)||d(`Structure agent didn't include the expected placeholder — proceeding anyway, logic agent will target the last <script> tag.`,`warn`),d(`Stage 2/2 — logic agent: writing the ${l.engine===`3d`?`3D`:`2D`} game loop…`);let m;try{m=await i(()=>c(l,p),l.engine===`3d`?e=>r(n(e)):e=>o(n(e)),f,d,`Logic agent`)}catch(e){d(`Logic agent could not produce a validated ${l.engine===`3d`?`3D`:`2D`} game after retries (${e?.message||e}) — using a guaranteed-working fallback game loop instead so you still get something playable.`,`warn`),m=a(l)}let h=p.includes(`GAME_LOGIC_PLACEHOLDER`)?p.replace(`// GAME_LOGIC_PLACEHOLDER`,()=>m):p.replace(/<script>\s*<\/script>/i,()=>`<script>${m}<\/script>`);return d(`Assembled final game from both stages.`,`info`),u(h)}function u(e){return/<\/body>/i.test(e)?e.replace(/<\/body>/i,()=>`<script>
window.addEventListener('error', function(e) {
  var el = document.getElementById('__gameErrorBanner');
  if (!el) {
    el = document.createElement('div');
    el.id = '__gameErrorBanner';
    el.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#c4644a;color:#fff;font:12px/1.5 monospace;padding:10px 14px;white-space:pre-wrap;';
    document.body.appendChild(el);
  }
  el.textContent = 'Game script error: ' + (e.message || e) + (e.lineno ? (' (line ' + e.lineno + ')') : '');
});
<\/script></body>`):e+`<script>
window.addEventListener('error', function(e) {
  var el = document.getElementById('__gameErrorBanner');
  if (!el) {
    el = document.createElement('div');
    el.id = '__gameErrorBanner';
    el.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:99999;background:#c4644a;color:#fff;font:12px/1.5 monospace;padding:10px 14px;white-space:pre-wrap;';
    document.body.appendChild(el);
  }
  el.textContent = 'Game script error: ' + (e.message || e) + (e.lineno ? (' (line ' + e.lineno + ')') : '');
});
<\/script>`}export{l as generateGame};