function e(e,t){return`Here is the complete current HTML/JS source of a small browser game:

\`\`\`html
${e}
\`\`\`

Apply this change request to it: "${t}"

Output ONLY the full, complete, updated HTML document (starting with <!DOCTYPE html>, ending with </html>) with the requested change applied — no explanation, no markdown code fences. Keep everything else about the game working exactly as before unless the change naturally requires touching it. Make sure the result is still a single self-contained file.`}function t(e){let t=e.trim(),n=t.match(/```(?:html)?\s*([\s\S]*?)```/);n&&(t=n[1].trim());let r=t.search(/<!DOCTYPE html>/i);r>0&&(t=t.slice(r));let i=/<!DOCTYPE html>/i.test(t),a=/<\/html>/i.test(t);if(!i||!a){let t=e.trim().slice(0,140).replace(/\s+/g,` `);throw Error(`Not a complete HTML document (${i?`found a start but the document never closed with </html> (likely cut off)`:`no <!DOCTYPE html> found anywhere in the response`}). What came back started with: "${t}${e.length>140?`…`:``}"`)}return t}function n(e){let t=e.trim(),n=t.match(/```(?:js|javascript|html)?\s*([\s\S]*?)```/);return n&&(t=n[1].trim()),t}function r(e){if(!/THREE\.(Scene|WebGLRenderer|PerspectiveCamera)/.test(e))throw Error(`3D engine was requested but the generated code has no Three.js scene/renderer/camera setup.`);if(!/THREE\.(AmbientLight|DirectionalLight|PointLight|SpotLight|HemisphereLight)/.test(e))throw Error(`3D scene has no lighting (THREE.*Light) — meshes would render flat/unlit regardless of geometry.`);let t=/MeshStandardMaterial|MeshPhongMaterial|MeshLambertMaterial|MeshPhysicalMaterial/.test(e);if(/MeshBasicMaterial/.test(e)&&!t)throw Error(`3D scene only uses MeshBasicMaterial, which ignores lighting and renders flat/2D-looking.`);if(!/THREE\.PlaneGeometry/.test(e))throw Error(`3D scene has no ground/floor plane (THREE.PlaneGeometry) — entities would appear to float in empty space with nothing to stand on.`);if(!/camera\.lookAt\s*\(/.test(e))throw Error(`3D scene never calls camera.lookAt(...) — the camera would keep its default orientation instead of framing the ground/action, which is what makes scenes look like they're pointed at empty sky.`);if([...e.matchAll(/camera\.position\.(?:set\s*\(\s*[^,]+,\s*(-?\d+(?:\.\d+)?)|y\s*=\s*(-?\d+(?:\.\d+)?))/g)].some(e=>{let t=parseFloat(e[1]??e[2]);return!isNaN(t)&&t>40}))throw Error(`Camera is positioned unrealistically high above the scene (Y > 40), which fills most of the frame with empty sky instead of the ground/action.`);if(i(e),!/requestAnimationFrame|setAnimationLoop/.test(e))throw Error(`3D game has no render loop (requestAnimationFrame / setAnimationLoop) — it would only ever draw a single static frame.`);if(!/OrbitControls\.js|examples\/js|\/jsm\//.test(e)){let t=e.match(/new\s+THREE\.(CapsuleGeometry|CapsuleBufferGeometry|OrbitControls|TrackballControls|PointerLockControls|FlyControls|GLTFLoader|OBJLoader|FBXLoader|EffectComposer|UnrealBloomPass)\b/);if(t)throw Error(`THREE.${t[1]} does not exist in Three.js r128 (no addons/examples are loaded) — constructing it would throw at startup. Use core primitives and manual camera control.`)}if([...e.matchAll(/mapSize\.(?:width|height)\s*=\s*(\d+)|mapSize\.set\s*\(\s*(\d+)/g)].map(e=>parseInt(e[1]??e[2],10)).some(e=>e>2048))throw Error(`Shadow map size above 2048 is too expensive for a browser game — use 1024 (max 2048).`);return e}function i(e){let t=/<!DOCTYPE html>|<script[\s>]/i.test(e)?[...e.matchAll(/<script(?![^>]*\bsrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi)].map(e=>e[1]):[e];for(let e of t)if(e.trim())try{Function(e)}catch(e){if(e instanceof SyntaxError)throw Error(`Generated 3D game code has a syntax error (${e.message}) — likely truncated or malformed.`)}}function a(e){return e.replace(/setPixelRatio\s*\(\s*(?:window\.)?devicePixelRatio(?:\s*\|\|\s*1)?\s*\)/g,`setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))`)}async function o(e,t,n,r,i,a=3){let o;for(let s=1;s<=a;s++)try{s>1&&r(`${i} — retry ${s}/${a}…`,`warn`);let o=s>1?`\n\n(attempt id: ${Math.random().toString(36).slice(2)} — ignore this line, it's only here to ensure a fresh response)`:``;return t(await n(e()+o,{temperature:.7}))}catch(e){o=e,r(`${i} attempt ${s} failed: ${e.message}`,`error`)}throw o}function s(e){return e.engine===`3d`?`
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2035);
scene.fog = new THREE.Fog(0x1a2035, 15, 60);
const container = document.getElementById('gameContainer') || document.body;
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 6, 12);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xaabbdd, 0x2a3a2a, 0.6));
const sun = new THREE.DirectionalLight(0xffffff, 1.0);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -24; sun.shadow.camera.right = 24;
sun.shadow.camera.top = 24; sun.shadow.camera.bottom = -24;
sun.shadow.camera.near = 1; sun.shadow.camera.far = 60;
scene.add(sun);
scene.add(sun.target);

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(120, 120),
  new THREE.MeshStandardMaterial({ color: 0x2f6b3c })
);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

// Scenery: two instanced props (2 draw calls), matrices written once.
const obstacles = [];
const dummy = new THREE.Object3D();
function scatter(geo, mat, count, height, radius) {
  const inst = new THREE.InstancedMesh(geo, mat, count);
  for (let i = 0; i < count; i++) {
    let x, z;
    do { x = (Math.random() - 0.5) * 100; z = (Math.random() - 0.5) * 100; } while (Math.abs(x) < 6 && Math.abs(z) < 6);
    const sc = 0.8 + Math.random() * 0.8;
    dummy.position.set(x, (height * sc) / 2, z);
    dummy.rotation.y = Math.random() * 6.28;
    dummy.scale.setScalar(sc);
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
    obstacles.push({ x: x, z: z, r: radius * sc });
  }
  scene.add(inst);
}
scatter(new THREE.ConeGeometry(1.2, 3.2, 7), new THREE.MeshStandardMaterial({ color: 0x1f5a35 }), 36, 3.2, 1.0);
scatter(new THREE.DodecahedronGeometry(0.8), new THREE.MeshStandardMaterial({ color: 0x7a7f88 }), 22, 1.4, 0.8);

const player = new THREE.Mesh(
  new THREE.SphereGeometry(0.6, 24, 24),
  new THREE.MeshStandardMaterial({ color: 0x4fc3f7 })
);
player.castShadow = true;
player.position.set(0, 0.6, 0);
scene.add(player);

const gemGeo = new THREE.OctahedronGeometry(0.5);
const gemMat = new THREE.MeshStandardMaterial({ color: 0xffb74d, emissive: 0x552200 });
const targets = [];
for (let i = 0; i < 8; i++) {
  const t = new THREE.Mesh(gemGeo, gemMat);
  t.position.set((Math.random() - 0.5) * 40, 0.9, (Math.random() - 0.5) * 40 - 10);
  t.castShadow = true;
  scene.add(t);
  targets.push(t);
}

// Recycled particle pool (never recreated per pickup).
const sparkGeo = new THREE.SphereGeometry(0.12, 6, 6);
const sparkMat = new THREE.MeshStandardMaterial({ color: 0xffe082, emissive: 0xffb300 });
const sparks = [];
for (let i = 0; i < 16; i++) {
  const m = new THREE.Mesh(sparkGeo, sparkMat);
  m.visible = false;
  scene.add(m);
  sparks.push({ mesh: m, vx: 0, vy: 0, vz: 0, life: 0 });
}
let sparkNext = 0;
function burst(x, y, z) {
  for (let i = 0; i < 8; i++) {
    const sp = sparks[sparkNext++ % sparks.length];
    sp.mesh.position.set(x, y, z);
    sp.vx = (Math.random() - 0.5) * 5; sp.vy = 2 + Math.random() * 3; sp.vz = (Math.random() - 0.5) * 5;
    sp.life = 0.6;
    sp.mesh.visible = true;
  }
}

let score = 0;
let won = false;
const scoreEl = document.getElementById('score') || (function () {
  const el = document.createElement('div');
  el.id = 'score';
  el.style.cssText = 'position:fixed;top:12px;left:12px;color:#fff;font:16px sans-serif;z-index:10;';
  document.body.appendChild(el);
  return el;
})();
function updateScore() {
  scoreEl.textContent = won ? 'You win! Press R to play again' : 'Gems: ' + score + ' / ' + targets.length;
}
updateScore();
function restart() {
  score = 0; won = false;
  targets.forEach(function (t) { t.visible = true; });
  player.position.set(0, 0.6, 0);
  updateScore();
}

const keys = {};
window.addEventListener('keydown', (e) => { keys[e.key.toLowerCase()] = true; if (e.key.toLowerCase() === 'r') restart(); });
window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
document.querySelectorAll('[id*="left"],[class*="left"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowleft'] = true); b.addEventListener('touchend', () => keys['arrowleft'] = false); });
document.querySelectorAll('[id*="right"],[class*="right"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowright'] = true); b.addEventListener('touchend', () => keys['arrowright'] = false); });
document.querySelectorAll('[id*="up"],[class*="up"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowup'] = true); b.addEventListener('touchend', () => keys['arrowup'] = false); });
document.querySelectorAll('[id*="down"],[class*="down"]').forEach(b => { b.addEventListener('touchstart', () => keys['arrowdown'] = true); b.addEventListener('touchend', () => keys['arrowdown'] = false); });
renderer.domElement.addEventListener('pointerdown', () => { if (won) restart(); });

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  const speed = 10 * dt;
  if (!won) {
    if (keys['arrowleft'] || keys['a']) player.position.x -= speed;
    if (keys['arrowright'] || keys['d']) player.position.x += speed;
    if (keys['arrowup'] || keys['w']) player.position.z -= speed;
    if (keys['arrowdown'] || keys['s']) player.position.z += speed;
    player.position.x = Math.max(-58, Math.min(58, player.position.x));
    player.position.z = Math.max(-58, Math.min(58, player.position.z));
    for (let i = 0; i < obstacles.length; i++) {
      const o = obstacles[i];
      const dx = player.position.x - o.x, dz = player.position.z - o.z;
      const min = o.r + 0.6, d2 = dx * dx + dz * dz;
      if (d2 < min * min && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        player.position.x = o.x + (dx / d) * min;
        player.position.z = o.z + (dz / d) * min;
      }
    }
  }
  camera.position.x += (player.position.x - camera.position.x) * Math.min(1, dt * 5);
  camera.position.z += (player.position.z + 12 - camera.position.z) * Math.min(1, dt * 5);
  camera.lookAt(player.position.x, 0, player.position.z);
  sun.position.set(player.position.x + 8, 15, player.position.z + 6);
  sun.target.position.copy(player.position);
  for (let i = 0; i < targets.length; i++) {
    const g = targets[i];
    if (!g.visible) continue;
    g.rotation.y = t * 2 + i;
    g.position.y = 0.9 + Math.sin(t * 2 + i) * 0.15;
    if (!won && player.position.distanceTo(g.position) < 1.1) {
      g.visible = false;
      burst(g.position.x, g.position.y, g.position.z);
      score++;
      if (score >= targets.length) won = true;
      updateScore();
    }
  }
  for (let i = 0; i < sparks.length; i++) {
    const sp = sparks[i];
    if (sp.life <= 0) continue;
    sp.life -= dt;
    sp.vy -= 9 * dt;
    sp.mesh.position.x += sp.vx * dt; sp.mesh.position.y += sp.vy * dt; sp.mesh.position.z += sp.vz * dt;
    if (sp.life <= 0) sp.mesh.visible = false;
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
loop();`}function c(e){if(!/getContext\s*\(\s*['"]2d['"]\s*\)/.test(e))throw Error(`2D engine was requested but the generated code never calls canvas.getContext("2d").`);if(!/requestAnimationFrame/.test(e))throw Error(`2D game has no requestAnimationFrame game loop — it would only ever draw a single static frame.`);if(!/fillText\s*\(/.test(e))throw Error(`2D game never calls ctx.fillText — entities would not be drawn as the required emoji/Unicode sprites (likely rendering as plain shapes or nothing).`);return e}function l(e){return`Write ONLY the HTML structure, CSS styling, and UI scaffolding (no game logic JS yet) for a simple browser game. ${e.engine===`3d`?`This will be a 3D game using Three.js. Include exactly this script tag in the <head>: <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>`:`This will be a 2D game using the HTML5 Canvas API — include a <canvas id="gameCanvas"></canvas> element.`}

Game concept: "${e.concept}"

Output a complete HTML document with:
- <!DOCTYPE html>, <head> with <meta charset="UTF-8"> as its very first child (the game logic will draw emoji/unicode characters as sprites — this MUST be present and correct for those to render properly instead of as garbled text), then <style>, and <body>
- The canvas (2D) or an empty <div id="gameContainer"></div> (3D, Three.js will inject its own canvas there)
- Background/page CSS colors that thematically fit the concept above (e.g. a pond-and-lily-pad green for a frog game, a desert palette for a sand/dune game) — this is scaffolding, but the color palette must already look like it belongs to THIS concept, not a generic gray placeholder
- On-screen touch control buttons using position:fixed, anchored with pixel offsets (e.g. bottom:16px), each at least 56px square — NOT percentage-centered, so they can't be pushed off-screen
- html, body { margin:0; height:100%; overflow:hidden; touch-action:none; }
- A simple score/lives/status display positioned with fixed top offsets${e.engine===`3d`?` plus, under it, a short objective/hint line (id="objective") and one extra round 56px+ touch button (id="btnAction") for the concept's main action (jump/shoot/boost/interact)`:``}
- A single empty <script> tag at the very end of <body> containing only this exact comment and nothing else: // GAME_LOGIC_PLACEHOLDER

Keep the CSS concise — this is scaffolding only, the JS pass adds the actual characters/objects — but the color palette and any decorative touches must already clearly fit "${e.concept}", not look like an unthemed generic template. Output ONLY the HTML document, starting with <!DOCTYPE html> and ending with </html>. No explanation, no markdown fences.`}function u(e,t){let n=e.engine===`3d`?`Every distinct entity type from the concept (player, obstacles, collectibles, enemies, etc.) must be visually distinguishable and thematically appropriate — use different mesh shapes/colors/proportions per entity type that clearly suggest what they represent (e.g. a green rounded/squashed shape for a frog, gray irregular boxes for stones), not identical plain cubes for everything.

REQUIRED for a scene that actually looks 3D (not flat/cartoonish — this is the single biggest quality issue to avoid):
- Add real lighting: at least one THREE.AmbientLight (low intensity, for fill) PLUS one THREE.DirectionalLight or THREE.PointLight (higher intensity, positioned off-axis so it casts visible shading across faces) added to the scene.
- Use THREE.MeshStandardMaterial or THREE.MeshPhongMaterial for every mesh (NOT MeshBasicMaterial, which ignores lighting entirely and renders as flat, unlit color — this alone is what makes a scene look 2D/flat even with real 3D geometry).
- Set scene.background to a THREE.Color (not left black/default) and add THREE.Fog for depth cueing on anything with distance (roads, terrain, skies).
- Position the camera with a real perspective vantage (THREE.PerspectiveCamera, FOV 50-75, positioned above/behind the action, angled downward) rather than a flat frontal/orthographic-looking view — the ground plane should visibly recede toward a horizon.
- Give the ground/floor plane visible width via THREE.PlaneGeometry, rotated flat with rotation.x = -Math.PI / 2, with the material rules above so it catches light and shows perspective, instead of a bare colored background.
- GROUNDING (avoid the "everything floats in empty space" look): every entity's Y position must rest it ON the ground plane — set position.y to roughly half that mesh's own height/radius (e.g. a box of height 1 sits at y=0.5, a sphere of radius 0.6 sits at y=0.6), not a fixed arbitrary height like y=5 or y=10 that leaves it hovering above the floor with visible empty space underneath. Only things that are meant to fly (birds, drones, projectiles) should be elevated, and even then only modestly above the ground they fly over, not scattered randomly through the sky.
- CAMERA AIM: set camera.position and call camera.lookAt(...) once during setup, and again every frame in the animation loop, targeting the player/action's current position (not the origin if the player moves). Follow the player smoothly (ease camera.position toward its target offset each frame instead of snapping). For chase/overview views keep the camera LOW and CLOSE: roughly 4-12 units above the ground and 8-15 units back from the player, with any literal camera Y never above 35 — a camera much higher than this, or angled at the horizon instead of at the player, fills the frame with empty sky instead of the ground and entities. For first-person views use eye height ~1.7 looking along the player's facing direction.

CONCEPT ADAPTATION (decide this silently BEFORE writing code, then build it — the scene must be unmistakably THIS concept, not a generic arena with cubes; this applies to every genre: racing, FPS, RPG, adventure, horror, strategy, platformer, space, flight, underwater, simulation, sports, fantasy, sci-fi or something original):
- Perspective: chase/third-person behind the player (vehicles, action, RPG, adventure, sports, platformer), first-person (FPS, horror, exploration), high angled overview (strategy, simulation, tower defense), or a low chase camera behind a craft (space, flight, underwater). Controls must fit it (steer+accelerate, walk/strafe/turn, jump with simple gravity, fly with pitch/yaw, or click/tap select via THREE.Raycaster) — always support WASD/arrow keys AND wire the on-screen touch buttons already in the HTML, including an element with id="btnAction" and id="objective" if they exist. Mouse-look is optional (no pointer lock needed); give keyboard turn keys.
- Environment: a 3-4 colour palette from the concept; scene.background and scene.fog in the same hue family; a ground/floor THREE.PlaneGeometry that fits the setting (asphalt, grass, dungeon stone, snow, seabed, sea surface, alien dust, arena floor, launch pad, or a dark grid floor for open space); and set dressing that tells the story (trees, rocks, ruins, pillars, buildings, crates, coral, asteroids, goal posts, walls, lamps, pylons — whatever belongs). Scatter repeated props with THREE.InstancedMesh (one draw call per prop type, matrices set once). Add sky/horizon depth: bright sky colour + fog, or a dark backdrop with a few hundred THREE.Points stars, or two contrasting hemisphere-light colours.
- Characters and objects: build the player and every enemy/pickup/goal as a small THREE.Group of 2-6 primitives (body + head/wheels/wings/fins/turret/eyes/glow parts) with distinct silhouettes and colours, never one bare box. Give glowing things (goals, pickups, lamps, lasers) an emissive colour.
- Objective and stakes matching the concept (reach, collect, survive, defend, escape, score, lap, land, deliver): a visible HUD line for score/health/timer/objective text using the existing HUD elements, a win state, a lose state, and restart on the R key or a tap.
- Interactions: pickups, hazards, and enemies with simple steering (patrol/chase/approach); projectiles or an action key (Space) where the genre calls for it; goals/triggers. Collisions are simple circle/box overlap tests on the XZ plane (distance < sum of radii) that block or damage the player — no physics engine.
- Animation from elapsed time: bobbing/spinning pickups, swaying or waddling characters, spinning wheels/propellers, pulsing lights, drifting water/clouds/stars, small camera FOV/shake feedback on speed or impact. Move with a clamped delta time (THREE.Clock, dt <= 0.05s) plus acceleration/friction so motion feels smooth, not teleporting.
- Effects stay lightweight: a small fixed pool of reusable particles (small meshes or one THREE.Points, recycled and never recreated per hit), emissive/light-intensity flashes, fog. No post-processing, no external textures/models/images (colours, vertex colours, or a tiny THREE.CanvasTexture for signs/patterns only).

PERFORMANCE AND MEMORY (mandatory — a smooth 60fps scene matters more than extra detail):
- Write small helpers once and reuse them (e.g. a material factory that caches THREE.MeshStandardMaterial by colour, a part() helper for group pieces, a scatter() helper for InstancedMesh, a burst() helper for the particle pool). Create each geometry and material ONCE and share it; never create THREE geometries/materials/meshes/vectors/colors inside the animation loop (except recycling a bounded pool) — reuse temporary vectors.
- renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); exactly one requestAnimationFrame loop; a window 'resize' handler that updates camera.aspect, calls camera.updateProjectionMatrix() and renderer.setSize(...).
- Shadows: at most ONE shadow-casting THREE.DirectionalLight with shadow.mapSize 1024 (never above 2048), renderer.shadowMap.enabled = true only when the complexity below allows shadows; castShadow only on the player and a few key objects, receiveShadow on the ground, a tight shadow camera that follows the player. Never shadow-cast from Point/Spot lights; use at most 3 lights in total.
- Respawn by recycling (visible=false, reposition) rather than deleting and rebuilding. Anything unique that is removed for good gets scene.remove(...) plus geometry.dispose() and material.dispose(); shared geometry/material are never disposed while in use.
- Use only Three.js r128 core APIs (no addons, no loaders, no EffectComposer). Write compact code (roughly 250-450 lines) built from the helpers above rather than repeating boilerplate, and finish the whole program — never leave it truncated.`:`Every distinct entity type from the concept (player, obstacles, collectibles, enemies, etc.) MUST be drawn as a large, readable emoji or Unicode symbol via ctx.font (e.g. "32px serif") + ctx.fillText at its position — pick the emoji that actually matches what the concept describes (a frog game's player should visibly be a frog emoji like 🐸, its obstacles should visibly be stones like 🪨, etc.), not a plain filled rectangle/circle. This is the single most important requirement: the concept must be immediately recognizable just by looking at the game, not just functionally implemented.`,r=e.engine===`3d`?`Three.js (r128 core only — no OrbitControls, no CapsuleGeometry, no loaders/addons/post-processing; use procedural Box/Sphere/Cylinder/Cone/Octahedron/Torus geometries, InstancedMesh, and manual camera control)`:`the HTML5 Canvas 2D API`,i=e.genre?` Genre direction: ${e.genre}.`:``,a=e.engine===`3d`?e.complexity===`minimal`?` Keep it minimal: one compact themed scene (about 50 meshes/draw calls at most), NO shadows and NO particles, one objective, simple win/lose with restart.`:e.complexity===`rich`?` Rich scope: a fully themed scene with instanced scenery, one shadow-casting light, 3+ entity types including a second enemy/hazard behaviour or mechanic, progression (waves/levels/laps/timer/difficulty ramp), a pooled particle effect of at most 48 particles, camera FOV/shake feedback and ambient animation (drifting clouds/water/stars) — still under roughly 200 draw calls and one pass of code.`:` Standard scope: a themed scene with instanced scenery (under roughly 120 draw calls), one shadow-casting light, 2-3 entity types with simple behaviours, a clear objective with win/lose and restart, and a tiny pooled effect (at most 24 particles) on pickups/hits.`:e.complexity===`minimal`?` Keep it minimal: just the core playable loop, one win/lose condition.`:e.complexity===`rich`?` Add modest depth: simple scoring/progression and a couple of varied obstacle/enemy types, but stay realistic for one pass.`:` Standard scope: a clear core loop and one simple scoring or win condition.`;return`Here is the HTML/CSS scaffolding already built for a browser game (DO NOT repeat or rewrite this — you're only writing the JS that goes where the placeholder comment is):

\`\`\`html
${t}
\`\`\`

Game concept: "${e.concept}" using ${r}.${i}${a}

VISUAL REQUIREMENT (read carefully — this is what makes the game actually match the concept instead of looking like an unthemed template): ${n}

Write ONLY the JavaScript game logic that replaces the comment "// GAME_LOGIC_PLACEHOLDER" — initialize the renderer/canvas, set up keyboard (arrow keys/WASD) AND the on-screen touch buttons already present in the HTML (wire up click/touchstart listeners on their existing IDs/classes), implement the game loop, scoring, and win/lose condition described above, drawing every entity per the visual requirement above. Reference the canvas/container element already defined in the HTML above by its existing id. Assume the script runs after the DOM above has loaded (it's the last tag in <body>).

Output ONLY the raw JavaScript code — no <script> tags, no explanation, no markdown fences, just the code that goes inside the script tag.`}async function d(i,d,p){if(i.iterate&&i.previousCode){d(`Applying your change request to the existing game…`);let n=e(i.previousCode,i.concept);return f(await o(()=>n,e=>{let n=t(e);return i.engine===`3d`?r(n):c(n)},p,d,`Iteration`))}d(`Stage 1/2 — structure agent: building HTML/CSS scaffolding…`);let m=await o(()=>l(i),t,p,d,`Structure agent`);m.includes(`GAME_LOGIC_PLACEHOLDER`)||d(`Structure agent didn't include the expected placeholder — proceeding anyway, logic agent will target the last <script> tag.`,`warn`),d(`Stage 2/2 — logic agent: writing the ${i.engine===`3d`?`3D`:`2D`} game loop…`);let h;try{h=await o(()=>u(i,m),i.engine===`3d`?e=>r(n(e)):e=>c(n(e)),p,d,`Logic agent`)}catch(e){d(`Logic agent could not produce a validated ${i.engine===`3d`?`3D`:`2D`} game after retries (${e?.message||e}) — using a guaranteed-working fallback game loop instead so you still get something playable.`,`warn`),h=s(i)}i.engine===`3d`&&(h=a(h));let g=m.includes(`GAME_LOGIC_PLACEHOLDER`)?m.replace(`// GAME_LOGIC_PLACEHOLDER`,()=>h):m.replace(/<script>\s*<\/script>/i,()=>`<script>${h}<\/script>`);return d(`Assembled final game from both stages.`,`info`),f(g)}function f(e){return/<\/body>/i.test(e)?e.replace(/<\/body>/i,()=>`<script>
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
<\/script>`}export{d as generateGame};