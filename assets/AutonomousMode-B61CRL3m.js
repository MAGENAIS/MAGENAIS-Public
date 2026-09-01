import{C as e,E as t,I as n,J as r,S as i,T as a,V as o,W as s,Y as c,b as l,d as u,j as d,q as f,w as p,x as m}from"./main-BYkT4agt.js";import{n as h,r as g,t as _}from"./modes-BTY6ZXLY.js";import{t as v}from"./Mode-D1nQaoS_.js";import{t as y}from"./VoiceInput-CvaLwtaL.js";import{t as b}from"./RosbridgeConnector-B1_aHESj.js";function x(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function S(e){return new Promise(t=>{let n=document.getElementById(`autonomousModelConsentModal`);n&&n.remove();let r=document.createElement(`div`);r.className=`modal-backdrop open`,r.id=`autonomousModelConsentModal`,r.innerHTML=`
      <div class="modal" style="max-width:420px;">
        <button class="modal-close" id="autoConsentClose" aria-label="Close">×</button>
        <h3>Enable on-device perception?</h3>
        <p class="hint" style="margin-top:4px;">
          Autonomous perception needs a small on-device object-detection model
          (<b>${x(e)}</b>) to run.
        </p>
        <ul class="hint" style="margin:8px 0 0; padding-left:18px;">
          <li>Runs 100% in your browser (OpenPilot-style local default) — no API key, nothing leaves your device.</li>
          <li>One-time download (a few MB to tens of MB depending on the model), then cached for every future session.</li>
        </ul>
        <p class="hint" style="margin-top:10px;">
          Whatever you choose is remembered permanently on this device — this won't be asked again either way.
        </p>
        <div style="display:flex; gap:8px; margin-top:14px;">
          <button class="run-btn" id="autoConsentDownload" style="flex:1;">Download &amp; Enable</button>
          <button class="ghost-btn" id="autoConsentSkip">Not now</button>
        </div>
        <p class="hint" style="margin-top:10px;">
          Skipping doesn't break the tab — Analyze Frame still tries any cloud provider you've
          configured in Keys &amp; Providers, and you can download this any time from
          Local Models in the Universal Provider Manager.
        </p>
      </div>
    `,document.body.appendChild(r);let i=e=>{r.remove(),t({consented:e})};r.querySelector(`#autoConsentClose`)?.addEventListener(`click`,()=>i(!1)),r.querySelector(`#autoConsentSkip`)?.addEventListener(`click`,()=>i(!1)),r.querySelector(`#autoConsentDownload`)?.addEventListener(`click`,()=>i(!0)),r.addEventListener(`click`,e=>{e.target===r&&i(!1)})})}function C(e){return new Promise(t=>{let n=document.getElementById(`autonomousRoutingGapModal`);n&&n.remove();let r=document.createElement(`div`);r.className=`modal-backdrop open`,r.id=`autonomousRoutingGapModal`,r.innerHTML=`
      <div class="modal" style="max-width:440px;">
        <button class="modal-close" id="autoGapClose" aria-label="Close">×</button>
        <h3>Autonomous can't run in "${x(e)}" mode</h3>
        <p class="hint" style="margin-top:4px;">
          Routing mode is set to <b>${x(e)}</b> in Keys &amp; Providers, but the only
          Autonomous provider currently enabled is the free on-device perception model — which that
          routing mode excludes. Nothing can answer Analyze Frame until one of these changes.
        </p>
        <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px;">
          <button class="run-btn" id="autoGapSwitchHybrid">Switch to Hybrid mode &amp; continue <span class="opt">recommended — enables the free local model, changes nothing else</span></button>
          <button class="ghost-btn" id="autoGapOpenProviders">Open Keys &amp; Providers <span class="opt">enable a cloud Autonomous provider instead</span></button>
          <button class="ghost-btn" id="autoGapCancel">Cancel</button>
        </div>
      </div>
    `,document.body.appendChild(r);let i=e=>{r.remove(),t(e)};r.querySelector(`#autoGapClose`)?.addEventListener(`click`,()=>i(`cancel`)),r.querySelector(`#autoGapCancel`)?.addEventListener(`click`,()=>i(`cancel`)),r.querySelector(`#autoGapSwitchHybrid`)?.addEventListener(`click`,()=>i(`switch-hybrid`)),r.querySelector(`#autoGapOpenProviders`)?.addEventListener(`click`,()=>i(`open-providers`)),r.addEventListener(`click`,e=>{e.target===r&&i(`cancel`)})})}function w(e,t){return e===`hybrid`||t.some(t=>{let n=f.has(t.adapterId);return e===`local`?n:!n&&(t.noKeyNeeded||!!(t.apiKey&&t.apiKey.trim()))})?{ready:!0}:{ready:!1,modeLabel:e===`cloud`?`Cloud Only`:`Local Only`}}var T=`magenais.consent.v1.`;function E(e){return`${T}${e}`}function D(e){try{if(typeof localStorage>`u`)return`UNKNOWN`;let t=localStorage.getItem(E(e));return t===`ACCEPTED`||t===`DECLINED`||t===`DOWNLOADING`||t===`READY`?t:`UNKNOWN`}catch{return`UNKNOWN`}}function O(e,t){try{if(typeof localStorage>`u`)return;t===`UNKNOWN`?localStorage.removeItem(E(e)):localStorage.setItem(E(e),t)}catch{}}var k={get(e){return D(e)},hasAnswered(e){return D(e)!==`UNKNOWN`},accept(e){O(e,`ACCEPTED`)},decline(e){O(e,`DECLINED`)},startDownload(e){O(e,`DOWNLOADING`)},markReady(e){O(e,`READY`)},downloadFailed(e){O(e,`ACCEPTED`)},reset(e){O(e,`UNKNOWN`)}},A=1e3,j=new Set([`person`,`bicycle`,`car`,`motorcycle`,`bus`,`truck`,`boat`,`train`,`dog`,`cat`]),M=[{task:`Object Detection`,status:`READY`,note:`Real in-browser detection (TFJS/COCO-SSD), same engine as the rest of Autonomous.`},{task:`Object Tracking`,status:`PLANNED`,note:`Needs frame-to-frame identity association on top of per-frame detection.`},{task:`Lane Detection`,status:`REQUIRES MODEL`,note:`Needs a dedicated lane-segmentation model — COCO-SSD only classifies objects, not road markings.`},{task:`Road Detection`,status:`REQUIRES MODEL`,note:`Needs semantic/drivable-surface segmentation.`},{task:`Free Space Detection`,status:`REQUIRES MODEL`,note:`Needs depth or occupancy estimation, not just bounding boxes.`},{task:`Traffic Signs`,status:`REQUIRES MODEL`,note:`COCO-SSD's 80 classes don't include traffic-sign categories.`},{task:`Traffic Lights`,status:`REQUIRES MODEL`,note:`Needs a traffic-light state (red/yellow/green) classifier.`},{task:`Pedestrians`,status:`READY`,note:`Covered by Object Detection's "person" class today.`},{task:`Cyclists`,status:`READY`,note:`Covered by Object Detection's "bicycle" class today.`},{task:`Collision Prediction`,status:`PLANNED`,note:`Needs velocity/trajectory estimation across frames, not just current-frame boxes.`},{task:`Trajectory Prediction`,status:`PLANNED`,note:`Needs multi-frame motion modeling of other agents.`},{task:`Route Planning`,status:`REQUIRES EXTERNAL PROVIDER`,note:`Needs real map/routing data — no fabricated routing engine here.`},{task:`Parking`,status:`SIMULATION-ONLY`,note:`Could be demonstrated in CARLA-style simulation; no real parking maneuver control exists in-browser.`},{task:`Emergency Braking`,status:`SIMULATION-ONLY`,note:`The decision engine can emit an emergency_stop command; there is no real vehicle actuator behind it without an external bridge (see Autonomous Ecosystems below).`},{task:`Passenger Pickup/Dropoff`,status:`SIMULATION-ONLY`,note:`Workflow/state concept only — no real ride-hailing dispatch integration.`}],N=[{name:`comma.ai / openpilot`,status:`CONNECTED`,note:`Already integrated — see the built-in browser perception engine above and the optional real-hardware bridge preset in Keys & Providers → Autonomous.`,url:`https://github.com/commaai/openpilot`},{name:`Waymo`,status:`NO PUBLIC API`,note:`Closed commercial robotaxi fleet — no public developer API.`,url:`https://waymo.com/`},{name:`Zoox`,status:`NO PUBLIC API`,note:`Closed commercial robotaxi fleet (Amazon) — no public developer API.`,url:`https://zoox.com/`},{name:`NVIDIA DRIVE`,status:`INSTALL REQUIRED`,note:`SDK/hardware platform for AV OEMs — gated behind NVIDIA DRIVE AGX SDK Developer Program membership.`,url:`https://developer.nvidia.com/drive`},{name:`Mobileye`,status:`NO PUBLIC API`,note:`ADAS/AV chip + software supplier to OEMs — no public consumer developer API.`,url:`https://www.mobileye.com/`},{name:`Aurora`,status:`NO PUBLIC API`,note:`Commercial driverless trucking operator — no public developer API.`,url:`https://aurora.tech/`},{name:`Waabi`,status:`NO PUBLIC API`,note:`Commercial autonomous trucking developer — no public developer API.`,url:`https://waabi.ai/`},{name:`Tesla (autonomous-driving ecosystem)`,status:`NO PUBLIC API`,note:`Vehicle-embedded FSD stack — no public developer AI API.`,url:`https://www.tesla.com/AI`}],P=[{name:`CARLA`,env:`Local`,license:`Open Source · Free`,note:`Widely used open-source autonomous-driving simulator, install required.`,url:`https://carla.org/`},{name:`NVIDIA DRIVE Sim`,env:`External`,license:`Gated · Developer Program`,note:`Omniverse-based AV simulator — gated behind NVIDIA DRIVE Developer Program membership.`,url:`https://developer.nvidia.com/drive/simulation`},{name:`Autoware simulation (AWSIM)`,env:`Local`,license:`Open Source · Free`,note:`Simulation environment built around the open-source Autoware AV stack.`,url:`https://autoware.org/`}],F=[{stage:`Sensors`,operational:!0,note:`Camera / simulated feed / uploaded image.`},{stage:`Perception`,operational:!0,note:`Real object detection (TFJS/COCO-SSD).`},{stage:`Tracking`,operational:!1,note:`Not yet implemented — see Robotaxi Object Tracking status.`},{stage:`Localization`,operational:!1,note:`GPS display only — no real localization/odometry fusion.`},{stage:`Mapping`,operational:!1,note:`Not implemented.`},{stage:`Prediction`,operational:!1,note:`Not implemented — see Trajectory/Collision Prediction status.`},{stage:`Behavior Planning`,operational:!0,note:`Rule-based decision engine (decisionEngine.ts) picks a motion command from detections.`},{stage:`Motion Planning`,operational:!1,note:`No trajectory generation — decision engine outputs a discrete command, not a path.`},{stage:`Control`,operational:!1,note:`No real vehicle control loop — optional external bridge only (see Hardware Link / Autonomous Ecosystems).`},{stage:`Simulation`,operational:!1,note:`No in-app AV simulator — see Autonomous Simulation for external options.`},{stage:`Evaluation`,operational:!1,note:`Not implemented.`}],I=class extends v{stream=null;videoEl=null;overlayEl=null;simCanvasEl=null;liveInterval=null;simDrawInterval=null;simulating=!1;simTick=0;analyzing=!1;selectedMode=`car`;events=[];messages=[];diagnostics=[];lastInferenceMs=null;frameTimestamps=[];speedKmh=0;headingDeg=0;steerDeg=0;gear=`D`;stopPct=0;throttlePct=0;muteVoice=!0;largeCaptions=!1;hardwareStatus=`No connection`;gpsStatus=`GPS: —`;modelBootstrap=null;loggedCocoSsdCooldownUntil=null;routingGapAcknowledged=!1;modelBootstrapYolos=null;async ensureYolosModelReady(){let e=this.kernel.getProviderManager().getProvider(`preset-transformers-autonomous`);if(!e||!e.enabled)return!1;let t=s(`object-detection`)||e.defaultModel||`Xenova/yolos-tiny`;if(n(t,`object-detection`))return!0;if(this.modelBootstrapYolos)return this.modelBootstrapYolos;let r=`preset-transformers-autonomous:${t}`;if(k.get(r)===`DECLINED`)return!1;let i=o(t)?.displayName||t.split(`/`).pop()||t;this.modelBootstrapYolos=(async()=>{if(!k.hasAnswered(r)){let{consented:e}=await S(i);if(!e)return k.decline(r),this.logDiagnostic(`Download declined — this won't be asked again. Analyze Frame will try any other configured provider instead. Open Local Models in the Universal Provider Manager any time to download "${i}".`),!1;k.accept(r)}k.startDownload(r);let e=document.getElementById(`autoAnalyzeBtn`);e&&(e.disabled=!0,e.textContent=`⬇ Downloading model — please wait…`),this.logDiagnostic(`⬇ Downloading "${i}" (on-device object detection) — one-time only, then cached by the browser for every future session. Please wait…`);try{return await d(t,`object-detection`,void 0,e=>this.logDiagnostic(e)),k.markReady(r),this.logDiagnostic(`✓ "${i}" ready — Autonomous tab is fully set up. Starting analysis…`),!0}catch(e){return k.downloadFailed(r),this.logDiagnostic(`✗ Download failed (${e?.message||e}). Open Local Models in the Universal Provider Manager to retry.`),!1}finally{this.syncLiveButtons()}})();try{return await this.modelBootstrapYolos}finally{this.modelBootstrapYolos=null}}activate(){this.renderOutputShell(),this.logDiagnostic(`OpenPilot dash initialized — built-in perception is ready now. Choose a mode, then enable the camera or a simulated feed to begin. If COCO-SSD or YOLOS/DETR is enabled and fully downloaded (Local Models), it's used automatically for real class-labeled detection (person, car, etc.); otherwise OpenPilot's built-in motion/edge engine covers you with zero setup.`),this.renderDash(),this.ensureOnDeviceConsentReady(),this.ensureDefaultModelReady(),this.ensureYolosModelReady()}async ensureDefaultModelReady(){let n=this.kernel.getProviderManager().getProvider(`builtin-transformers-autonomous`);if(n&&!n.enabled)return!1;if(a())return!0;if(e()){let e=m();return this.loggedCocoSsdCooldownUntil!==e&&(this.loggedCocoSsdCooldownUntil=e??null,this.logDiagnostic(`COCO-SSD is cooling down (${l()} left) after: ${i()||`a recent failure`}. Skipping retry until then — Analyze Frame will try any other configured provider instead (including the built-in OpenPilot engine, unaffected by this cooldown).`)),!1}if(this.loggedCocoSsdCooldownUntil=null,this.modelBootstrap)return this.modelBootstrap;let r=`builtin-transformers-autonomous`;if(k.get(r)===`DECLINED`)return!1;let o=p();this.modelBootstrap=(async()=>{let e=`COCO-SSD`;if(!o&&!k.hasAnswered(r)){let{consented:t}=await S(e);if(!t)return k.decline(r),this.logDiagnostic(`Download declined — this won't be asked again. Analyze Frame will try any other configured provider instead. Open Local Models in the Universal Provider Manager any time to download the default detector.`),!1;k.accept(r)}k.startDownload(r);let n=document.getElementById(`autoAnalyzeBtn`);n&&(n.disabled=!0,n.textContent=o?`⬇ Reloading model — please wait…`:`⬇ Downloading model — please wait…`),this.logDiagnostic(o?`Reloading "${e}" for this session (already installed on this device — no re-download, just the in-memory setup step). Please wait…`:`⬇ Downloading "${e}" (real class-labeled on-device object detection — a Downloadable alternative to the built-in OpenPilot engine) — one-time only (~6MB), then cached by the browser for every future session. This usually takes just a few seconds. Please wait…`);try{return await t(e=>this.logDiagnostic(e)),k.markReady(r),this.logDiagnostic(`✓ Object detection model ready — Autonomous tab is fully set up. Starting analysis…`),!0}catch(e){return k.downloadFailed(r),this.logDiagnostic(`✗ Download failed (${e?.message||e}). Open Local Models in the Universal Provider Manager to retry.`),!1}finally{this.syncLiveButtons()}})();try{return await this.modelBootstrap}finally{this.modelBootstrap=null}}dispatchActionCommand(e,t){let n=[`preset-openpilot-bridge`,`preset-robot-bridge`,`preset-drone-bridge`],r=this.kernel.getProviderManager();for(let i of n){let n=r.getProvider(i);if(!n||!n.enabled)continue;let a=`${n.baseUrl.replace(/\/$/,``)}/actions`,o=new AbortController,s=setTimeout(()=>o.abort(),3e3);fetch(a,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({command:e,reason:t,mode:this.selectedMode,timestamp:Date.now()}),signal:o.signal}).catch(e=>{console.debug(`[Autonomous] Action dispatch to "${n.name}" (${a}) failed — bridge unreachable or not implementing /actions yet: ${e?.message||e}`)}).finally(()=>clearTimeout(s))}}renderDash(){let e=g(this.selectedMode);this.renderControl(`
      ${this.maybeRenderDisclaimer()}
      <div class="chip-group" id="autoModeChips" style="margin-bottom:10px;">
        ${_.map(e=>`<span class="chip${e.id===this.selectedMode?` active`:``}" data-val="${e.id}">${e.icon} ${e.label}</span>`).join(``)}
      </div>

      <div style="display:flex; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
        <button class="ghost-btn" id="autoToggleCameraBtn">${this.stream?`Disable Camera`:`Enable Camera`}</button>
        <button class="ghost-btn" id="autoToggleSimBtn">${this.simulating?`Stop Simulated Feed`:`Use Simulated Feed`}</button>
        <button class="ghost-btn" id="autoUploadBtn">Upload Image</button>
        <input type="file" id="autoFileInput" accept="image/*" style="display:none;">
      </div>
      <p class="hint" style="margin:-6px 0 10px;">Live feed and detection overlay are shown at the top of the Autonomous Dashboard on the right.</p>

      <div style="display:flex; gap:8px; margin-bottom:10px;">
        <div style="flex:1; border:1px solid var(--line-bright); border-radius:var(--radius); padding:8px;">
          <div class="field-label" style="margin-bottom:2px;">Speed</div>
          <div style="font-size:20px; color:var(--ink);">${this.speedKmh.toFixed(0)} <span style="font-size:11px; color:var(--ink-faint);">km/h</span></div>
          <div class="hint" style="margin:0;">HDG ${this.headingDeg.toFixed(0)}°</div>
        </div>
        <div style="flex:1; border:1px solid var(--line-bright); border-radius:var(--radius); padding:8px;">
          <div class="field-label" style="margin-bottom:2px;">GPS</div>
          <div class="hint" style="margin:0;" id="autoGpsStatus">${this.gpsStatus}</div>
          <button class="ghost-btn small" id="autoGpsBtn" style="margin-top:4px;">Locate</button>
        </div>
      </div>

      <div class="chip-group" id="autoFeatureChips" style="margin-bottom:10px;">
        <span class="chip${this.muteVoice?``:` active`}" id="autoVoiceChip">🔊 Voice ${this.muteVoice?`(muted)`:`(on)`}</span>
        <span class="chip${this.largeCaptions?` active`:``}" id="autoCaptionsChip">🔤 Large Captions</span>
      </div>

      <div class="field" style="margin-bottom:10px;">
        <label class="field-label">Scene Interpretation</label>
        <div style="display:flex; gap:6px;">
          ${[`left`,`center`,`right`].map(e=>`<div style="flex:1; border:1px solid var(--line-bright); border-radius:var(--radius); padding:6px; text-align:center;"><div class="hint" style="margin:0 0 2px;">${e.toUpperCase()}</div><div id="autoZone${e}" style="font-size:12px; color:var(--ink);">—</div></div>`).join(``)}
        </div>
        <div style="display:flex; gap:8px; margin-top:6px;">
          <div style="flex:1; border:1px solid var(--line-bright); border-radius:var(--radius); padding:8px;">
            <div class="hint" style="margin:0 0 4px;">Detect Confidence</div>
            <div style="font-size:16px; color:var(--ink);" id="autoConfidenceText">—</div>
            <div style="height:5px; background:var(--line-bright); border-radius:3px; margin-top:4px; overflow:hidden;"><div id="autoConfidenceBar" style="height:100%; width:0%; background:#39d98a;"></div></div>
          </div>
          <div style="flex:1; border:1px solid var(--line-bright); border-radius:var(--radius); padding:8px;">
            <div class="hint" style="margin:0 0 4px;">Closest Hazard</div>
            <div style="font-size:14px; color:var(--ink);" id="autoClosestHazard">none</div>
          </div>
        </div>
      </div>

      <div class="field" style="margin-bottom:10px;">
        <label class="field-label">Pedals &amp; Gear</label>
        <div style="display:flex; gap:14px; align-items:flex-end;">
          <div style="text-align:center;">
            <div style="width:26px; height:70px; border:1px solid var(--line-bright); border-radius:4px; position:relative; overflow:hidden;"><div id="autoStopBar" style="position:absolute; bottom:0; width:100%; height:${this.stopPct}%; background:#ff5d5d;"></div></div>
            <div class="hint" style="margin:2px 0 0;">STOP</div>
            <div style="font-size:12px;" id="autoStopPct">${this.stopPct}%</div>
          </div>
          <div style="text-align:center;">
            <div style="width:26px; height:70px; border:1px solid var(--line-bright); border-radius:4px; position:relative; overflow:hidden;"><div id="autoThrottleBar" style="position:absolute; bottom:0; width:100%; height:${this.throttlePct}%; background:#39d98a;"></div></div>
            <div class="hint" style="margin:2px 0 0;">THROTTLE</div>
            <div style="font-size:12px;" id="autoThrottlePct">${this.throttlePct}%</div>
          </div>
          <div>
            <svg id="autoWheel" width="90" height="90" viewBox="0 0 100 100" style="transform:rotate(${this.steerDeg}deg); transition:transform 0.25s;">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line-bright)" stroke-width="4"/>
              <line x1="50" y1="50" x2="50" y2="10" stroke="var(--ink-faint)" stroke-width="4"/>
              <line x1="50" y1="50" x2="18" y2="68" stroke="var(--ink-faint)" stroke-width="4"/>
              <line x1="50" y1="50" x2="82" y2="68" stroke="var(--ink-faint)" stroke-width="4"/>
              <circle cx="50" cy="50" r="8" fill="var(--ink-faint)"/>
              <circle cx="50" cy="12" r="3" fill="orange"/>
            </svg>
            <div class="hint" style="text-align:center;">steer</div>
          </div>
        </div>
        <div class="chip-group" id="autoGearChips" style="margin-top:8px;">
          ${[`P`,`R`,`N`,`D`].map(e=>`<span class="chip${this.gear===e?` active`:``}" data-gear="${e}">${e}</span>`).join(``)}
        </div>
      </div>

      <div class="field" style="margin-bottom:10px;">
        <label class="field-label">Hardware Link</label>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="ghost-btn small" id="autoUsbBtn">⏻ USB Serial</button>
          <button class="ghost-btn small" id="autoBtBtn">⚡ Bluetooth</button>
        </div>
        <div class="hint" id="autoHardwareStatus" style="margin-top:4px;">${this.hardwareStatus}</div>
      </div>

      <div class="field" style="margin-bottom:10px;">
        <label class="field-label">Motion Command Console</label>
        <textarea id="autoPrompt" rows="2" placeholder="${e.placeholderPrompt}"></textarea>
        <button class="ghost-btn" id="autoCommandBtn" style="align-self:flex-start; margin-top:6px;">Send to Agent</button>
      </div>

      ${this.renderPipelineHint(`autonomous`)}
      <!--
        BUGFIX (user-reported: the separate "Live mode" checkbox was
        redundant next to Analyze Frame — Autonomous perception is
        inherently a real-time/continuous task, not a one-shot one):
        Analyze Frame now directly starts the continuous real-time loop
        (what the checkbox used to gate), and Stop ends it. Same
        toggleLiveMode()/handleLiveAnalyze() machinery underneath — this
        is a UI simplification, not a behavior change.
      -->
      <div style="display:flex; gap:8px;">
        <button class="run-btn" id="autoAnalyzeBtn" style="flex:1;" ${this.liveInterval?`disabled`:``}>▸ Analyze Frame</button>
        <button class="ghost-btn" id="autoStopBtn" style="border-color:var(--rust); color:var(--rust);" ${this.liveInterval?``:`disabled`}>■ Stop</button>
      </div>

      <!--
        Interactive scene Q&A — deliberately separate from the real-time
        detection loop above, not a per-frame feature: COCO-SSD detection
        is fast/light enough to run every ~100ms on essentially any
        device (see the class list note below), but a natural-language
        description needs a real vision-capable model (cloud, or a local
        VLM if configured) — that's an inherently heavier, higher-latency
        call. Running THAT every frame would either force this tab to
        wait on a slow cloud round-trip before every detection (killing
        the "real-time" part) or require a beefy local GPU (killing the
        "any device" part). Keeping it on-demand — click when you want an
        answer — gets both: real-time detection stays real-time and
        light everywhere, and this button still gives a genuine
        conversational read on the scene whenever you want one, using
        whatever vision provider is already configured in Keys & Providers.
      -->
      <div style="display:flex; gap:8px; margin-top:8px;">
        <input type="text" id="autoAskInput" placeholder="Ask about this frame (optional) — e.g. 'is it safe to move forward?'" style="flex:1;">
        <button class="ghost-btn" id="autoAskBtn">💬 Ask</button>
      </div>

      <!--
        Interactive Conversation (item 3) — talk instead of type, hear the
        answer instead of only reading it. Deliberately reuses the exact
        same askAboutFrame() call the typed Ask button already makes (same
        vision provider chain, same Messages panel, same consent/governance
        rules) rather than a parallel code path — this is a second INPUT/
        OUTPUT method for the identical feature, not a new feature. The mic
        capture itself reuses VoiceInput.ts's wireMicButton (browser
        SpeechRecognition first, falls back to the configured audio/STT
        provider chain — same mic pipeline already used by the Text tab),
        and the spoken reply reuses the same 'speech' workflow node +
        browser-TTS-sentinel pattern already used for Live-mode narration
        below (see the !this.muteVoice block in runAnalysis) — so a
        configured TTS provider (e.g. ElevenLabs) is honored automatically,
        with the free browser voice as the fallback, exactly like every
        other voice output in this app.
      -->
      <div style="display:flex; gap:8px; margin-top:8px; align-items:center;">
        <button class="ghost-btn" id="autoTalkBtn" title="Talk — ask about this frame by voice and hear the answer back">🎙 Talk</button>
        <span id="autoTalkStatus" class="hint" style="margin:0;">Click, then speak your question about the current frame.</span>
      </div>

      <p class="hint" style="margin-top:10px;">Perception tasks targeted for <b>${e.label}</b> mode: ${e.tasks.join(`, `)}. Object Detection is real (TensorFlow.js + COCO-SSD, no key, runs on essentially any device — see roadmap for the rest).</p>

      ${this.selectedMode===`robotaxi`?this.renderRobotaxiTaskStatus():``}
      ${this.renderAvEcosystems()}
      ${this.renderAvSimulators()}
      ${this.renderAutonomousPipeline()}
    `),this.wireDash(),this.renderMessagesAndTimeline()}ecoStatusColor(e){return e===`READY`||e===`CONNECTED`||e===`LOCAL`?`var(--moss)`:e===`INSTALL REQUIRED`||e===`API KEY REQUIRED`||e===`PREVIEW`?`var(--amber)`:e===`EXTERNAL`||e===`NO PUBLIC API`?`var(--azure)`:`var(--rust)`}robotaxiStatusColor(e){return e===`READY`?`var(--moss)`:e===`PLANNED`||e===`SIMULATION-ONLY`?`var(--amber)`:`var(--azure)`}renderRobotaxiTaskStatus(){return`
      <details class="adv" style="margin-top:10px;" open>
        <summary>Robotaxi task status (${M.filter(e=>e.status===`READY`).length}/${M.length} implemented today)</summary>
        <div class="adv-body">
          ${M.map(e=>`
            <div style="padding:6px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
              <div><b>${this.escapeHtml(e.task)}</b><div class="hint">${this.escapeHtml(e.note)}</div></div>
              <div style="color:${this.robotaxiStatusColor(e.status)}; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.04em; white-space:nowrap;">${e.status}</div>
            </div>`).join(``)}
        </div>
      </details>`}renderAvEcosystems(){return`
      <details class="adv" style="margin-top:10px;">
        <summary>Autonomous Ecosystems</summary>
        <div class="adv-body">
          <p class="hint">Verified AV ecosystems. MAGENAIS never fakes calling any of these — each links to the provider's own site/docs; status reflects real public developer-access as of the last audit.</p>
          ${N.map(e=>`
            <div style="padding:8px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
              <div><b>${this.escapeHtml(e.name)}</b><div class="hint">${this.escapeHtml(e.note)}</div></div>
              <div style="text-align:right; white-space:nowrap;">
                <div style="color:${this.ecoStatusColor(e.status)}; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.04em;">${e.status}</div>
                <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="ghost-btn" style="margin-top:4px;">Documentation</a>
              </div>
            </div>`).join(``)}
        </div>
      </details>`}renderAvSimulators(){return`
      <details class="adv" style="margin-top:10px;">
        <summary>Autonomous Simulation</summary>
        <div class="adv-body">
          ${P.map(e=>`
            <div style="padding:8px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
              <div><b>${this.escapeHtml(e.name)}</b> <span class="hint">· ${e.env} · ${this.escapeHtml(e.license)}</span><div class="hint">${this.escapeHtml(e.note)}</div></div>
              <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="ghost-btn">Documentation</a>
            </div>`).join(``)}
          <p class="hint" style="margin-top:8px;">AWSIM/Autoware are ROS2-native — if you have <a href="https://github.com/RobotWebTools/rosbridge_suite" target="_blank" rel="noopener noreferrer">rosbridge_suite</a> running locally, MAGENAIS can open a real WebSocket to check reachability (same connector RoboticsMode's Simulation tab uses — not duplicated):</p>
          <div style="display:flex; gap:6px; align-items:center;">
            <input type="text" id="avRosbridgeUrl" placeholder="localhost:9090" style="flex:1;">
            <button type="button" class="ghost-btn" id="avRosbridgeConnectBtn">Connect</button>
          </div>
          <p class="hint" id="avRosbridgeStatus" style="margin-top:6px;"></p>
        </div>
      </details>`}async handleAvRosbridgeConnect(){let e=this.controlPanel.querySelector(`#avRosbridgeUrl`)?.value||``,t=this.controlPanel.querySelector(`#avRosbridgeStatus`),n=this.controlPanel.querySelector(`#avRosbridgeConnectBtn`);t&&(t.textContent=`Connecting…`),n&&(n.disabled=!0);let r=new b(e);try{await r.connect(),t&&(t.innerHTML=`<span style="color:var(--moss);">Connected</span> to ${this.escapeHtml(r.url)}.`),r.disconnect()}catch(e){t&&(t.innerHTML=`<span style="color:var(--rust);">Not reachable:</span> ${this.escapeHtml(e?.message||String(e))}`)}finally{n&&(n.disabled=!1)}}renderAutonomousPipeline(){return`
      <details class="adv" style="margin-top:10px;">
        <summary>Autonomous Pipeline (${F.filter(e=>e.operational).length}/${F.length} stages operational today)</summary>
        <div class="adv-body">
          <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;">
            ${F.map((e,t)=>`<span class="hint" style="border:1px solid ${e.operational?`var(--moss)`:`var(--line-bright)`}; color:${e.operational?`var(--moss)`:`var(--ink-dim)`}; border-radius:var(--radius); padding:3px 8px;">${e.stage}</span>${t<F.length-1?`<span class="hint">→</span>`:``}`).join(``)}
          </div>
          ${F.map(e=>`<div class="hint" style="margin-bottom:2px;"><b style="color:${e.operational?`var(--moss)`:`var(--ink-dim)`};">${e.stage}</b> — ${this.escapeHtml(e.note)}</div>`).join(``)}
        </div>
      </details>`}renderOutputShell(){this.renderOutput(`
      <div id="autoCameraStageWrap" style="margin-bottom:16px;"></div>
      <div id="autoMessagesWrap"></div>
    `),this.renderCameraStage()}renderCameraStage(){let e=document.getElementById(`autoCameraStageWrap`);e&&(e.innerHTML=`
      <div class="doc-summary-block">
        <p class="field-label" style="margin-bottom:6px;">Live Camera Feed</p>
        <div id="autoDropZone" style="position:relative; border:1px solid var(--line-bright); border-radius:var(--radius); overflow:hidden; background:var(--bg);">
          <video id="autoVideo" autoplay playsinline muted style="width:100%; display:${this.simulating?`none`:`block`}; max-height:360px; object-fit:cover;"></video>
          <canvas id="autoSimCanvas" width="640" height="360" style="width:100%; display:${this.simulating?`block`:`none`}; max-height:360px; object-fit:cover;"></canvas>
          <canvas id="autoOverlay" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;"></canvas>
          <div id="autoCameraOff" style="display:${this.stream||this.simulating?`none`:``}; padding:40px 10px 20px; text-align:center;">
            <div class="empty-text" style="margin-bottom:10px;">Camera powers real-time obstacle detection.<br>Without it, the dashboard runs on a synthetic scene (no scripted hazards — whatever the detector actually sees in the drawing).<br>Use Enable Camera / Use Simulated Feed / Upload Image on the left to begin.</div>
          </div>
        </div>
      </div>
    `,this.videoEl=document.getElementById(`autoVideo`),this.overlayEl=document.getElementById(`autoOverlay`),this.simCanvasEl=document.getElementById(`autoSimCanvas`),this.videoEl&&this.stream&&(this.videoEl.srcObject=this.stream),this.wireDragAndDrop())}wireDash(){document.getElementById(`avRosbridgeConnectBtn`)?.addEventListener(`click`,()=>this.handleAvRosbridgeConnect()),document.querySelectorAll(`#autoModeChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{this.selectedMode=e.dataset.val,this.renderDash()})}),document.getElementById(`autoToggleCameraBtn`)?.addEventListener(`click`,()=>this.toggleCamera()),document.getElementById(`autoToggleSimBtn`)?.addEventListener(`click`,()=>this.toggleSimulatedFeed()),document.getElementById(`autoUploadBtn`)?.addEventListener(`click`,()=>document.getElementById(`autoFileInput`)?.click()),document.getElementById(`autoFileInput`)?.addEventListener(`change`,e=>{let t=e.target.files?.[0];t&&this.analyzeUploadedFile(t)}),document.getElementById(`autoAnalyzeBtn`)?.addEventListener(`click`,()=>this.toggleLiveMode(!0)),document.getElementById(`autoStopBtn`)?.addEventListener(`click`,()=>this.toggleLiveMode(!1)),document.getElementById(`autoAskBtn`)?.addEventListener(`click`,()=>this.runGuarded(`autoAskBtn`,()=>this.askAboutFrame())),document.getElementById(`autoAskInput`)?.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.runGuarded(`autoAskBtn`,()=>this.askAboutFrame())});let e=document.getElementById(`autoTalkBtn`),t=document.getElementById(`autoTalkStatus`);e&&y(this.kernel,e,t,e=>{let t=document.getElementById(`autoAskInput`);t&&(t.value=e),this.runGuarded(`autoTalkBtn`,()=>this.askAboutFrame(!0))}),document.getElementById(`autoCommandBtn`)?.addEventListener(`click`,()=>this.runGuarded(`autoCommandBtn`,()=>this.handleAgentCommand())),document.getElementById(`autoGpsBtn`)?.addEventListener(`click`,()=>this.locateGps()),document.getElementById(`autoVoiceChip`)?.addEventListener(`click`,()=>{this.muteVoice=!this.muteVoice,this.renderDash()}),document.getElementById(`autoCaptionsChip`)?.addEventListener(`click`,()=>{this.largeCaptions=!this.largeCaptions,this.renderDash()}),document.getElementById(`autoUsbBtn`)?.addEventListener(`click`,()=>this.connectUsbSerial()),document.getElementById(`autoBtBtn`)?.addEventListener(`click`,()=>this.connectBluetooth()),document.querySelectorAll(`#autoGearChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{this.gear=e.dataset.gear,this.logDiagnostic(`Gear set to ${this.gear}.`),this.renderDash()})})}maybeRenderDisclaimer(){return`
      <div id="autoDisclaimer" style="border:1px solid var(--line-bright); border-radius:var(--radius); padding:12px; margin-bottom:14px; background:var(--bg);">
        <p class="field-label" style="margin-bottom:6px;">Research &amp; Educational Use Notice</p>
        <p class="hint" style="margin-bottom:0;">
          The Autonomous module is intended primarily for research, education, simulation, AI development, and experimentation.
          Any use involving real-world vehicles, robots, drones, boats, industrial machines, medical systems, or other autonomous
          platforms is entirely the responsibility of the user. MAGENAIS provides AI-generated perception and decision-support
          tools only and does not guarantee safety or regulatory compliance. Users are solely responsible for verifying,
          validating, and testing all outputs before any real-world deployment.
        </p>
      </div>`}log(e){this.messages.unshift({t:Date.now(),text:e}),this.messages=this.messages.slice(0,50),this.appendLog(e),this.renderMessagesAndTimeline()}logDiagnostic(e){this.diagnostics.unshift({t:Date.now(),text:e}),this.diagnostics=this.diagnostics.slice(0,50),this.appendLog(e),this.renderMessagesAndTimeline()}logStructured(e,t){this.logDiagnostic(`[${e}] ${t}`)}async ensureOnDeviceConsentReady(){let e=`on-device-perception`;if(k.hasAnswered(e))return;let{consented:t}=await S(`OpenPilot + Browser Vision (built-in — nothing to download)`);t?(k.accept(e),k.markReady(e),this.logStructured(`SUCCESS`,`On-device perception enabled — the built-in OpenPilot engine is active. This won't be asked again.`)):(k.decline(e),this.logStructured(`INFO`,`On-device perception declined. Analyze Frame will rely on any cloud provider configured in Keys & Providers instead. Change this any time from Local Models in the Universal Provider Manager.`))}renderMessagesAndTimeline(){let e=document.getElementById(`autoMessagesWrap`);if(e||=(this.renderOutputShell(),document.getElementById(`autoMessagesWrap`)),!e)return;let t=this.largeCaptions?`15px`:`12px`,n=this.events.map(e=>({t:e.timestamp,html:`<div style="padding:4px 0; border-bottom:1px solid var(--line-bright);"><b>${new Date(e.timestamp).toLocaleTimeString()}</b> — ${h[e.command]||e.command}: ${this.escapeHtml(e.reason)}<br><span style="color:var(--ink-faint); font-size:11px;">${this.escapeHtml(e.detectionSummary)}</span></div>`})).sort((e,t)=>t.t-e.t).slice(0,40),r=this.diagnostics.map(e=>`<div style="padding:4px 0; border-bottom:1px solid var(--line-bright); color:var(--ink-faint);"><b>${new Date(e.t).toLocaleTimeString()}</b> — ${this.escapeHtml(e.text)}</div>`).join(``);e.innerHTML=`
      <div class="doc-summary-block" style="margin-bottom:16px;">
        <p class="field-label" style="margin-bottom:6px;">Messages</p>
        <div class="result-text" style="max-height:160px; overflow-y:auto; font-size:${t};">
          ${this.messages.length?this.messages.map(e=>`<div>${new Date(e.t).toLocaleTimeString()} ${this.escapeHtml(e.text)}</div>`).join(``):`<span class="empty-text">No messages yet — scene descriptions and answers to "Ask about this frame" appear here.</span>`}
        </div>
      </div>
      <div class="doc-summary-block" style="margin-bottom:16px;">
        <p class="field-label" style="margin-bottom:6px;">Event Timeline</p>
        <div class="result-text" style="max-height:220px; overflow-y:auto; font-size:${t};">
          ${n.length?n.map(e=>e.html).join(``):`<span class="empty-text">Analyze a frame to populate the timeline.</span>`}
        </div>
      </div>
      <div class="doc-summary-block" style="margin-bottom:16px;">
        <p class="field-label" style="margin-bottom:6px;">Diagnostics</p>
        <div class="result-text" style="max-height:180px; overflow-y:auto; font-size:${t};">
          ${r||`<span class="empty-text">No diagnostics yet — provider selection, fallback, and error explanations appear here.</span>`}
        </div>
      </div>
      <div class="doc-summary-block">
        <p class="field-label" style="margin-bottom:6px;">Status Bar</p>
        <div class="result-text" style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px;">
          <span>MODE: ${this.gear===`D`?`AUTONOMOUS (`+g(this.selectedMode).label.toUpperCase()+`)`:`MANUAL OVERRIDE`}</span>
          <span>${this.speedKmh.toFixed(0)} km/h</span>
          <span id="autoFps">${this.frameTimestamps.length>1?this.currentFps().toFixed(0):`—`} fps</span>
        </div>
      </div>
    `}currentFps(){let e=this.frameTimestamps;if(e.length<2)return 0;let t=e[e.length-1]-e[0];return t<=0?0:(e.length-1)/t*1e3}wireDragAndDrop(){let e=document.getElementById(`autoDropZone`);if(!e)return;let t=t=>{e.style.outline=t?`2px dashed var(--accent, #6b8afd)`:`none`};e.addEventListener(`dragover`,e=>{e.preventDefault(),t(!0)}),e.addEventListener(`dragleave`,()=>t(!1)),e.addEventListener(`drop`,e=>{e.preventDefault(),t(!1);let n=Array.from(e.dataTransfer?.files??[]).find(e=>e.type.startsWith(`image/`));n&&this.analyzeUploadedFile(n)})}async toggleCamera(){if(this.stream){this.stream.getTracks().forEach(e=>e.stop()),this.stream=null,this.videoEl&&(this.videoEl.srcObject=null),this.clearOverlay(),this.toggleLiveMode(!1),this.logDiagnostic(`Camera disabled.`),this.renderDash(),this.renderCameraStage();return}this.simulating&&this.toggleSimulatedFeed();try{this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,frameRate:{ideal:15},width:{ideal:960},height:{ideal:540}}}),this.logDiagnostic(`Camera enabled.`)}catch(e){this.logDiagnostic(`Couldn't access the camera — ${e.message}`)}this.renderDash(),this.renderCameraStage()}toggleSimulatedFeed(){if(this.simulating){this.simulating=!1,this.simDrawInterval&&=(clearInterval(this.simDrawInterval),null),this.logDiagnostic(`Simulated feed stopped.`),this.renderDash(),this.renderCameraStage();return}this.stream&&=(this.stream.getTracks().forEach(e=>e.stop()),null),this.simulating=!0,this.logDiagnostic(`Simulated feed started — synthetic scene, no scripted hazards; detections reflect what the model actually sees drawn on the canvas.`),this.renderDash(),this.renderCameraStage(),this.simDrawInterval=window.setInterval(()=>this.drawSimulatedFrame(),200)}drawSimulatedFrame(){let e=this.simCanvasEl;if(!e)return;let t=e.getContext(`2d`);if(!t)return;this.simTick++;let n=e.width,r=e.height;t.fillStyle=`#87CEEB`,t.fillRect(0,0,n,r*.55),t.fillStyle=`#555`,t.fillRect(0,r*.55,n,r*.45),t.strokeStyle=`#fff`,t.lineWidth=4,t.setLineDash([20,16]);let i=this.simTick*6%36;t.beginPath(),t.moveTo(n/2,r*.55+i-36),t.lineTo(n/2,r),t.stroke(),t.setLineDash([]);let a=(Math.sin(this.simTick/20)*.5+.5)*(n-80);t.fillStyle=`#c0392b`,t.fillRect(a,r*.62,70,50)}analyzeUploadedFile(e){let t=new FileReader;t.onload=()=>this.runAnalysis(t.result),t.readAsDataURL(e)}async askAboutFrame(e=!1){let t=document.getElementById(`autoAskInput`),n=t?.value.trim(),r=this.captureFrameAsDataUrl(768);if(!r){this.logDiagnostic(`Enable the camera, start the simulated feed, or upload an image first.`);return}let i=n||`Describe what you see in this frame from a moving platform's point of view: what obstacles or points of interest are present, and is it currently safe to move forward? Answer in 2-3 concise sentences.`;this.log(n?`💬 Asking: "${n}"…`:`💬 Asking for a scene description…`);try{let n=await this.kernel.getProviderManager().callVision(r,i,this.kernel.getRouter(),e=>this.logDiagnostic(e));this.log(`💬 ${n}`),t&&(t.value=``),e&&await this.speakText(n)}catch(t){let n=`✗ Couldn't get an answer (${t?.message||t}). This needs a vision-capable provider configured in Keys & Providers (e.g. Gemini, Groq Vision, or any OpenAI-compatible vision model) — the free local detector above only detects object classes, it doesn't describe scenes in natural language.`;this.logDiagnostic(n),e&&await this.speakText(`Sorry, I couldn't get an answer. Check that a vision provider is configured in Keys and Providers.`)}}async speakText(e){if(e)try{let t={id:`auto-talk-speech-`+Date.now(),name:`Autonomous Talk Voice`,graph:{nodes:[{id:`speech1`,type:`speech`,label:`Speak Reply`,config:{},inputs:{text:e},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},n=(await this.kernel.getWorkflowEngine().execute(t,{text:e})).finalOutput;window.speechSynthesis?.cancel(),n===`__BROWSER_TTS_PENDING__`||!n?window.speechSynthesis?.speak(new SpeechSynthesisUtterance(u(e))):new Audio(n).play()}catch{window.speechSynthesis?.speak(new SpeechSynthesisUtterance(u(e)))}}captureFrameAsDataUrl(e=640){return this.simulating&&this.simCanvasEl?this.downscaleToDataUrl(this.simCanvasEl,this.simCanvasEl.width,this.simCanvasEl.height,e):!this.videoEl||!this.stream?null:this.downscaleToDataUrl(this.videoEl,this.videoEl.videoWidth||640,this.videoEl.videoHeight||480,e)}downscaleToDataUrl(e,t,n,r){let i=Math.min(1,r/Math.max(t,n)),a=document.createElement(`canvas`);a.width=Math.max(1,Math.round(t*i)),a.height=Math.max(1,Math.round(n*i));let o=a.getContext(`2d`);return o?(o.drawImage(e,0,0,a.width,a.height),a.toDataURL(`image/jpeg`,.85)):null}clearOverlay(){this.overlayEl&&this.overlayEl.getContext(`2d`)?.clearRect(0,0,this.overlayEl.width,this.overlayEl.height)}drawOverlay(e,t,n){let r=this.simulating?this.simCanvasEl:this.videoEl;if(!this.overlayEl||!r)return;let i=r.clientWidth||t,a=r.clientHeight||n;this.overlayEl.width=i,this.overlayEl.height=a;let o=this.overlayEl.getContext(`2d`);if(!o||!t||!n)return;o.clearRect(0,0,i,a);let s=i/t,c=a/n;o.lineWidth=2,o.font=`12px sans-serif`,e.forEach(e=>{let t=e.box.xmin*s,n=e.box.ymin*c,r=(e.box.xmax-e.box.xmin)*s,i=(e.box.ymax-e.box.ymin)*c;o.strokeStyle=`#39d98a`,o.strokeRect(t,n,r,i);let a=`${e.label} ${(e.score*100).toFixed(0)}%`,l=o.measureText(a).width+6;o.fillStyle=`rgba(0,0,0,0.65)`,o.fillRect(t,Math.max(0,n-16),l,16),o.fillStyle=`#39d98a`,o.fillText(a,t+3,Math.max(11,n-4))})}locateGps(){if(!navigator.geolocation){this.gpsStatus=`GPS: unsupported in this browser`,this.logDiagnostic(this.gpsStatus),this.updateGpsDom();return}this.gpsStatus=`GPS: locating…`,this.updateGpsDom(),navigator.geolocation.getCurrentPosition(e=>{this.gpsStatus=`GPS: ${e.coords.latitude.toFixed(4)}, ${e.coords.longitude.toFixed(4)}`,typeof e.coords.heading==`number`&&!Number.isNaN(e.coords.heading)&&(this.headingDeg=e.coords.heading),this.logDiagnostic(this.gpsStatus),this.updateGpsDom()},e=>{this.gpsStatus=`GPS: denied (${e.message})`,this.logDiagnostic(this.gpsStatus),this.updateGpsDom()},{timeout:8e3})}updateGpsDom(){let e=document.getElementById(`autoGpsStatus`);e&&(e.textContent=this.gpsStatus)}async connectUsbSerial(){let e=navigator;if(!e.serial){this.hardwareStatus=`Web Serial not supported in this browser (Chrome/Edge only)`,this.logDiagnostic(this.hardwareStatus),this.updateHardwareDom();return}try{await(await e.serial.requestPort()).open({baudRate:115200}),this.hardwareStatus=`USB Serial: connected`,this.logDiagnostic(`USB Serial device connected.`)}catch(e){this.hardwareStatus=`USB Serial: ${e.message||`connection cancelled`}`,this.logDiagnostic(this.hardwareStatus)}this.updateHardwareDom()}async connectBluetooth(){let e=navigator;if(!e.bluetooth){this.hardwareStatus=`Web Bluetooth not supported in this browser (Chrome/Edge only)`,this.logDiagnostic(this.hardwareStatus),this.updateHardwareDom();return}try{let t=await e.bluetooth.requestDevice({acceptAllDevices:!0});this.hardwareStatus=`Bluetooth: paired with ${t.name||`device`}`,this.logDiagnostic(this.hardwareStatus)}catch(e){this.hardwareStatus=`Bluetooth: ${e.message||`connection cancelled`}`,this.logDiagnostic(this.hardwareStatus)}this.updateHardwareDom()}updateHardwareDom(){let e=document.getElementById(`autoHardwareStatus`);e&&(e.textContent=this.hardwareStatus)}async handleLiveAnalyze(){let e=this.captureFrameAsDataUrl(480);e&&await this.runAnalysis(e)}syncLiveButtons(){let e=document.getElementById(`autoAnalyzeBtn`),t=document.getElementById(`autoStopBtn`),n=this.liveInterval!==null;e&&(e.disabled=n,e.textContent=n?`▸ Running…`:`▸ Analyze Frame`),t&&(t.disabled=!n)}toggleLiveMode(e){if(this.liveInterval&&=(clearInterval(this.liveInterval),null),e){if(!this.stream&&!this.simulating){this.logDiagnostic(`Enable the camera or the simulated feed first.`),this.syncLiveButtons();return}this.liveInterval=window.setInterval(()=>{this.analyzing||this.handleLiveAnalyze()},A),this.handleLiveAnalyze()}this.syncLiveButtons()}applyVehiclePhysics(e){switch(g(this.selectedMode),e){case`accelerate`:this.speedKmh=Math.min(56,this.speedKmh+8),this.throttlePct=80,this.stopPct=0;break;case`move_forward`:this.speedKmh=Math.min(40,this.speedKmh+4),this.throttlePct=50,this.stopPct=0;break;case`slow_down`:this.speedKmh=Math.max(0,this.speedKmh-6),this.throttlePct=15,this.stopPct=20;break;case`avoid_obstacle`:this.speedKmh=Math.max(0,this.speedKmh-4),this.throttlePct=20,this.stopPct=10,this.steerDeg=this.steerDeg===0?15:this.steerDeg;break;case`stop`:case`emergency_stop`:case`land`:case`dock`:this.speedKmh=Math.max(0,this.speedKmh-15),this.throttlePct=0,this.stopPct=100;break;case`reverse`:this.speedKmh=Math.max(-15,this.speedKmh-6),this.throttlePct=30,this.stopPct=0;break;case`turn_left`:this.steerDeg=-25,this.throttlePct=Math.max(this.throttlePct,30),this.stopPct=0;break;case`turn_right`:this.steerDeg=25,this.throttlePct=Math.max(this.throttlePct,30),this.stopPct=0;break;case`hover`:case`follow_target`:case`search_area`:case`inspect_object`:this.throttlePct=25,this.stopPct=0;break;default:this.throttlePct=Math.max(20,this.throttlePct),this.stopPct=0}e!==`turn_left`&&e!==`turn_right`&&(this.steerDeg*=.4),Math.abs(this.steerDeg)<1&&(this.steerDeg=0)}async resolveRoutingGapIfAny(){let e=r();if(e===`hybrid`||this.routingGapAcknowledged)return!0;let t=w(e,this.kernel.getProviderManager().getProviders(`autonomous`,!0));if(t.ready)return!0;let n=t.modeLabel,i=await C(n);return i===`switch-hybrid`?(c(`hybrid`),this.logDiagnostic(`Routing mode switched to Hybrid — the free local perception model is available again.`),!0):(this.routingGapAcknowledged=!0,i===`open-providers`?this.kernel.getEventBus().emit(`ui:openProviderType`,`autonomous`):this.logDiagnostic(`Analyze Frame will keep failing until routing mode changes from "${n}" or a matching provider is enabled in Keys & Providers.`),!1)}async runAnalysis(e){if(this.analyzing)return;this.analyzing=!0;let t=performance.now(),n=this.liveInterval!==null;if(!await this.resolveRoutingGapIfAny()){this.analyzing=!1;return}await this.ensureOnDeviceConsentReady(),await this.ensureDefaultModelReady(),await this.ensureYolosModelReady();let r={id:`auto-`+Date.now(),name:`Autonomous`,graph:{nodes:[{id:`auto1`,type:`autonomous`,label:`Perception + Decision`,config:{mode:this.selectedMode},inputs:{imageBase64:e},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let i=(await this.kernel.getWorkflowEngine().execute(r,{imageBase64:e})).finalOutput;if(this.lastInferenceMs=Math.round(performance.now()-t),this.frameTimestamps.push(Date.now()),this.frameTimestamps=this.frameTimestamps.slice(-20),this.drawOverlay(i.detections||[],i.frameWidth,i.frameHeight),this.applyVehiclePhysics(i.command),this.updateSceneZones(i.detections||[],i.frameWidth,i.confidence),this.dispatchActionCommand(i.command,i.reason),this.events.unshift({timestamp:i.timestamp,command:i.command,reason:i.reason,detectionSummary:(i.detections||[]).slice(0,5).map(e=>`${e.label} (${(e.score*100).toFixed(0)}%)`).join(`, `)||`none`}),this.events=this.events.slice(0,25),this.syncPedalDom(),this.renderMessagesAndTimeline(),!this.muteVoice){if(n)window.speechSynthesis?.cancel(),window.speechSynthesis?.speak(new SpeechSynthesisUtterance(u(i.narration)));else try{let e={id:`auto-speech-`+Date.now(),name:`Autonomous Voice`,graph:{nodes:[{id:`speech1`,type:`speech`,label:`Narrate`,config:{},inputs:{text:i.narration},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},t=(await this.kernel.getWorkflowEngine().execute(e,{text:i.narration})).finalOutput;t===`__BROWSER_TTS_PENDING__`?window.speechSynthesis?.speak(new SpeechSynthesisUtterance(u(i.narration))):t&&new Audio(t).play()}catch{}}}catch(e){this.logDiagnostic(`Error: ${e?.message||String(e)}`)}finally{this.analyzing=!1}}updateSceneZones(e,t,n){let r={left:[],center:[],right:[]},i=null;e.forEach(e=>{let n=(e.box.xmin+e.box.xmax)/2,a=t?n<t/3?`left`:n<t*2/3?`center`:`right`:`center`;r[a].push(e.label);let o=(e.box.xmax-e.box.xmin)*(e.box.ymax-e.box.ymin);j.has(e.label)&&(!i||o>i.area)&&(i={label:e.label,area:o})}),[`left`,`center`,`right`].forEach(e=>{let t=document.getElementById(`autoZone${e}`);t&&(t.textContent=r[e].length?Array.from(new Set(r[e])).slice(0,3).join(`, `):`—`)});let a=document.getElementById(`autoConfidenceText`),o=document.getElementById(`autoConfidenceBar`);a&&(a.textContent=`${Math.round(n*100)}%`),o&&(o.style.width=`${Math.round(n*100)}%`);let s=document.getElementById(`autoClosestHazard`);s&&(s.textContent=i?i.label:`none`)}syncPedalDom(){let e=document.getElementById(`autoStopBar`),t=document.getElementById(`autoThrottleBar`),n=document.getElementById(`autoStopPct`),r=document.getElementById(`autoThrottlePct`),i=document.getElementById(`autoWheel`);e&&(e.style.height=`${this.stopPct}%`),t&&(t.style.height=`${this.throttlePct}%`),n&&(n.textContent=`${this.stopPct}%`),r&&(r.textContent=`${this.throttlePct}%`),i&&(i.style.transform=`rotate(${this.steerDeg}deg)`)}async handleAgentCommand(){let e=document.getElementById(`autoPrompt`)?.value.trim();if(!e){this.logDiagnostic(`Type an instruction first.`);return}let t=g(this.selectedMode);this.logDiagnostic(`Command sent to agent: "${e}"`);let n=`You are the decision engine for an autonomous ${t.label.toLowerCase()} platform (research/educational context only). Available motion commands: ${t.commands.map(e=>h[e]).join(`, `)}. Instruction: "${e}". Explain the plan in plain language and list the motion commands (from the available list only) in the order you'd execute them.`,r={id:`auto-cmd-`+Date.now(),name:`Autonomous Command`,graph:{nodes:[{id:`cmd1`,type:`agents`,label:`Decision Agent`,config:{},inputs:{task:n},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let e=await this.kernel.getWorkflowEngine().execute(r,{}),t=typeof e.finalOutput==`string`?e.finalOutput:JSON.stringify(e.finalOutput);this.logDiagnostic(`Agent plan received — see Messages above for the summary; full text logged.`),this.messages.unshift({t:Date.now(),text:`Agent plan: ${t.slice(0,400)}${t.length>400?`…`:``}`}),this.renderMessagesAndTimeline()}catch(e){this.logDiagnostic(`Agent error: ${e?.message||String(e)}`)}}deactivate(){this.toggleLiveMode(!1),this.simDrawInterval&&=(clearInterval(this.simDrawInterval),null),this.stream?.getTracks().forEach(e=>e.stop()),this.stream=null,typeof window<`u`&&window.speechSynthesis&&window.speechSynthesis.cancel()}getTitle(){return`Autonomous Dashboard`}};export{I as AutonomousMode};