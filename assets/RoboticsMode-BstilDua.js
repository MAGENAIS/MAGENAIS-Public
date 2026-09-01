import{t as e}from"./Mode-D1nQaoS_.js";import{i as t,r as n}from"./SymbiosisHandoff-DkpRyW56.js";import{t as r}from"./RosbridgeConnector-B1_aHESj.js";function i(e,t,n,r){let i={x:e*Math.cos(n),y:e*Math.sin(n)};return{elbow:i,endEffector:{x:i.x+t*Math.cos(n+r),y:i.y+t*Math.sin(n+r)}}}function a(e,t,n){let r=Math.hypot(n.x,n.y);if(r>e+t||r<Math.abs(e-t))return null;let i=(r*r-e*e-t*t)/(2*e*t),a=Math.acos(Math.min(1,Math.max(-1,i))),o=e+t*Math.cos(a),s=t*Math.sin(a),c=Math.atan2(n.y,n.x)-Math.atan2(s,o),l=Math.atan2(n.y,n.x)-Math.atan2(-s,o);return{elbowDown:[c,a],elbowUp:[l,-a]}}function o(e){return e*180/Math.PI}function s(e){return e*Math.PI/180}var c=[`Python (ROS 2 rclpy)`,`C++ (ROS 2 rclcpp)`,`MicroPython (Arduino/ESP32)`,`Python (raw, no framework)`],l=[`Humanoid`,`Manipulator`,`Quadruped`,`Mobile Robot`,`Industrial Robot`,`Drone`,`Custom`],u=[{label:`Walk`,prompt:`Walk forward 3 meters across a flat indoor floor, then stop.`},{label:`Navigate`,prompt:`Navigate from the current position to a marked waypoint, avoiding any obstacles detected along the way.`},{label:`Pick & Place`,prompt:`Pick up an object from location A and place it precisely at location B.`},{label:`Object Detection`,prompt:`Continuously detect and classify objects in the robot's camera view.`},{label:`Object Tracking`,prompt:`Track a specific moving object in view and keep it centered in the camera frame.`},{label:`Obstacle Avoidance`,prompt:`Move toward a goal position while detecting and avoiding both static and dynamic obstacles.`},{label:`Manipulation`,prompt:`Grasp an irregularly shaped object and reorient it to a target pose without dropping it.`},{label:`Inspection`,prompt:`Visually inspect a series of parts on a line and flag any that show visible defects.`},{label:`Human-Robot Interaction`,prompt:`Safely hand an object to a nearby person, waiting for their grip before releasing.`},{label:`Multi-Robot Coordination`,prompt:`Coordinate with a second robot so the two together carry a long object through a doorway.`}],d=[{name:`NVIDIA Isaac`,org:`NVIDIA`,status:`INSTALL REQUIRED`,note:`Robotics platform/SDK umbrella (perception, manipulation, navigation stacks).`,url:`https://developer.nvidia.com/isaac`},{name:`Isaac Sim`,org:`NVIDIA`,status:`INSTALL REQUIRED`,note:`Omniverse-based robot simulator. Local GPU install, not browser-runnable.`,url:`https://developer.nvidia.com/isaac/sim`},{name:`Isaac Lab`,org:`NVIDIA`,status:`INSTALL REQUIRED`,note:`GPU-accelerated robot learning framework built on Isaac Sim.`,url:`https://developer.nvidia.com/isaac/lab`},{name:`Isaac GR00T (N1.7)`,org:`NVIDIA`,status:`INSTALL REQUIRED`,note:`Open-weight humanoid foundation model — GA release, download from GitHub/Hugging Face and run locally (needs a GPU).`,url:`https://github.com/NVIDIA/Isaac-GR00T`},{name:`Gemini Robotics (VLA)`,org:`Google DeepMind`,status:`NO PUBLIC API`,note:`Whole-body vision-language-action model — early-access/trusted-tester partners only, no public API yet.`,url:`https://deepmind.google/models/gemini-robotics/`},{name:`Gemini Robotics-ER`,org:`Google DeepMind`,status:`API KEY REQUIRED`,note:`Genuinely wired in — enable "Google Gemini Robotics-ER" under Keys & Providers → Robotics and Task Planner will call it directly for image-grounded spatial reasoning.`,url:`https://ai.google.dev/gemini-api/docs/robotics-overview`},{name:`Gemini Robotics On-Device`,org:`Google DeepMind`,status:`NO PUBLIC API`,note:`On-device VLA for offline robots — trusted testers only.`,url:`https://deepmind.google/models/model-cards/gemini-robotics-on-device-2/`},{name:`Figure / Helix`,org:`Figure AI`,status:`NO PUBLIC API`,note:`Proprietary, in-house humanoid model — no public developer API.`,url:`https://www.figure.ai/`},{name:`1X / NEO`,org:`1X Technologies`,status:`NO PUBLIC API`,note:`Consumer humanoid platform — no public developer API.`,url:`https://www.1x.tech/`},{name:`Hugging Face robotics models`,org:`Hugging Face`,status:`READY`,note:`Open, browsable robotics/VLA model hub (e.g. LeRobot) — downloadable, no gatekeeping. For text-reasoning via the Inference API specifically, enable "Hugging Face (Robotics Q&A / Reasoning)" under Keys & Providers → Robotics.`,url:`https://huggingface.co/lerobot`}],f=[{name:`Boston Dynamics`,org:`Boston Dynamics`,status:`UNAVAILABLE`,note:`Commercial robot platforms (Atlas, Spot) — no public developer AI API.`,url:`https://bostondynamics.com/`},{name:`Unitree`,org:`Unitree Robotics`,status:`UNAVAILABLE`,note:`Quadruped/humanoid hardware maker — SDK is device-specific, not a hosted AI API.`,url:`https://www.unitree.com/`},{name:`ANYbotics`,org:`ANYbotics`,status:`UNAVAILABLE`,note:`Industrial quadruped inspection robots — no public AI API.`,url:`https://www.anybotics.com/`},{name:`Agility Robotics`,org:`Agility Robotics`,status:`UNAVAILABLE`,note:`Digit humanoid — no public AI API.`,url:`https://agilityrobotics.com/`},{name:`Sanctuary AI`,org:`Sanctuary AI`,status:`UNAVAILABLE`,note:`Humanoid + Carbon AI control system — no public API.`,url:`https://sanctuary.ai/`},{name:`Apptronik`,org:`Apptronik`,status:`UNAVAILABLE`,note:`Apollo humanoid — no public developer AI API of its own.`,url:`https://apptronik.com/`},{name:`Open VLA models`,org:`Open-source community`,status:`READY`,note:`OpenVLA and similar open vision-language-action models — downloadable weights, local inference.`,url:`https://openvla.github.io/`}],p=[{name:`NVIDIA Isaac Sim`,env:`Local`,license:`Free · Installation Required`,note:`GPU-accelerated Omniverse simulator, local install required.`,url:`https://developer.nvidia.com/isaac/sim`},{name:`NVIDIA Isaac Lab`,env:`Local`,license:`Free · Installation Required`,note:`Robot learning framework on top of Isaac Sim, local install required.`,url:`https://developer.nvidia.com/isaac/lab`},{name:`MuJoCo`,env:`Local`,license:`Open Source · Free`,note:`High-fidelity physics engine widely used for robot learning, maintained by Google DeepMind.`,url:`https://mujoco.org/`},{name:`MuJoCo Playground`,env:`Local`,license:`Open Source · Free (GPU required)`,note:`GPU-accelerated robot-learning framework (JAX/MJX) — Python install, not a browser demo despite the name.`,url:`https://playground.mujoco.org/`},{name:`MuJoCo WASM (official bindings)`,env:`Browser`,license:`Open Source · Free`,note:`DeepMind's own in-browser WASM build of MuJoCo — genuinely real, not yet wired into a working in-app preview (needs a build-tooling + runtime-testing pass this environment can't verify).`,url:`https://github.com/google-deepmind/mujoco/blob/main/wasm/README.md`},{name:`Gazebo`,env:`Local`,license:`Open Source · Free`,note:`ROS-ecosystem physics simulator, install required.`,url:`https://gazebosim.org/`},{name:`Webots`,env:`Local`,license:`Open Source · Free`,note:`Cross-platform open-source robot simulator, install required.`,url:`https://cyberbotics.com/`}],m=class extends e{activeTab=`plan`;inspectImageBase64=null;activate(){this.renderControl(this.controlMarkup()),this.wireTabs(),this.wirePlanTab(),this.wireCodeTab(),this.wireKinematicsTab(),this.wireInspectTab(),this.renderKinematicsPreview(.5,.4,s(45),s(-30))}deactivate(){}getTitle(){return`Robotics`}controlMarkup(){return`
      <div class="field">
        <div class="chip-group" id="roboticsTabs" role="tablist" aria-label="Robotics tools">
          <button class="chip active" data-tab="plan" role="tab" aria-selected="true">Task Planner</button>
          <button class="chip" data-tab="code" role="tab" aria-selected="false">Code Generator</button>
          <button class="chip" data-tab="kinematics" role="tab" aria-selected="false">Kinematics</button>
          <button class="chip" data-tab="inspect" role="tab" aria-selected="false">Inspection</button>
          <button class="chip" data-tab="intel" role="tab" aria-selected="false">Robot Intelligence</button>
          <button class="chip" data-tab="sim" role="tab" aria-selected="false">Simulation</button>
        </div>
      </div>

      <div id="roboticsPlanPanel" class="field">
        <label class="field-label">Robot platform</label>
        <select id="roboticsPlatform">
          ${l.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
        <label class="field-label" style="margin-top:8px;">Quick task templates</label>
        <div class="chip-group" id="roboticsTaskTemplates" role="group" aria-label="Robot task templates">
          ${u.map(e=>`<button type="button" class="chip" data-task="${this.escapeHtml(e.label)}">${this.escapeHtml(e.label)}</button>`).join(``)}
        </div>
        <label class="field-label" style="margin-top:8px;">Describe the robot task or goal</label>
        <textarea id="roboticsPlanInput" rows="6" placeholder="e.g. A mobile robot needs to navigate from the loading dock to shelf B3, avoiding the two static obstacles, and pick up a box."></textarea>
        <p class="hint">Uses your enabled Robotics reasoning provider (Gemini Robotics-ER / HF Robotics Q&amp;A, Keys &amp; Providers → Robotics) if you've configured one; otherwise falls back to the same text-provider chain as Text &amp; Voice, with a robotics-planning system prompt.</p>
        ${this.renderPipelineHint(`text`)}
        <button class="run-btn" id="roboticsPlanBtn">▸ Generate Plan</button>
      </div>

      <div id="roboticsCodePanel" class="field" style="display:none;">
        <label class="field-label">Robot platform</label>
        <select id="roboticsCodePlatform">
          ${l.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
        <label class="field-label" style="margin-top:8px;">What should the robot code do?</label>
        <textarea id="roboticsCodeInput" rows="6" placeholder="e.g. Subscribe to /scan, stop the robot if an obstacle is within 0.3m, otherwise drive forward at 0.2 m/s."></textarea>
        <label class="field-label">Target</label>
        <select id="roboticsCodeTarget">
          ${c.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
        <p class="hint">Reuses the Coding tab's text-provider pipeline with a robotics/ROS-specialized prompt.</p>
        ${this.renderPipelineHint(`text`)}
        <button class="run-btn" id="roboticsCodeBtn">▸ Generate Code</button>
      </div>

      <div id="roboticsKinematicsPanel" class="field" style="display:none;">
        <p class="hint">Local, instant, zero-AI 2-link planar arm calculator — no provider needed.</p>
        <label class="field-label">Link 1 length (m)</label>
        <input type="number" id="kL1" value="0.5" step="0.05" min="0.01">
        <label class="field-label">Link 2 length (m)</label>
        <input type="number" id="kL2" value="0.4" step="0.05" min="0.01">
        <details class="adv" open>
          <summary>Forward kinematics (angles → position)</summary>
          <div class="adv-body">
            <label class="field-label">Joint 1 angle (°)</label>
            <input type="number" id="kTheta1" value="45" step="1">
            <label class="field-label">Joint 2 angle (°)</label>
            <input type="number" id="kTheta2" value="-30" step="1">
            <button class="run-btn" id="kForwardBtn">▸ Compute Forward Kinematics</button>
          </div>
        </details>
        <details class="adv">
          <summary>Inverse kinematics (target → angles)</summary>
          <div class="adv-body">
            <label class="field-label">Target X (m)</label>
            <input type="number" id="kTargetX" value="0.6" step="0.05">
            <label class="field-label">Target Y (m)</label>
            <input type="number" id="kTargetY" value="0.2" step="0.05">
            <button class="run-btn" id="kInverseBtn">▸ Compute Inverse Kinematics</button>
          </div>
        </details>
      </div>

      <div id="roboticsInspectPanel" class="field" style="display:none;">
        <p class="hint">Runs your own trained Roboflow model — different from Autonomous's built-in general object detector, this recognizes whatever you trained it on (a part, a defect class, etc.).</p>
        <input type="file" id="inspectFileInput" accept="image/*">
        <div id="inspectPreviewWrap" style="margin-top:8px;"></div>
        <label class="field-label" style="margin-top:8px;">Confidence threshold (%)</label>
        <input type="number" id="inspectConfidence" value="40" min="0" max="100" step="5">
        <button class="run-btn" id="inspectRunBtn" style="margin-top:10px;">▸ Detect</button>
      </div>

      <div id="roboticsIntelPanel" class="field" style="display:none;">
        <p class="hint">Verified robot-intelligence ecosystems. MAGENAIS never fakes calling any of these — each links straight to the provider's own documentation; status reflects each provider's real public-access tier as of the last audit.</p>
        ${this.renderIntelCards(d)}
        <details class="adv" style="margin-top:10px;"><summary>Future / roadmap ecosystems (not yet integrated)</summary><div class="adv-body">${this.renderIntelCards(f)}</div></details>
      </div>

      <div id="roboticsSimPanel" class="field" style="display:none;">
        <p class="hint">Verified robot simulators. MAGENAIS keeps the app lightweight — nothing here is launched in-browser except where explicitly marked Browser; every other entry opens the simulator's own site/docs to install or run.</p>
        ${this.renderSimCards()}
        ${this.renderRosbridgePanel()}
      </div>
    `}renderRosbridgePanel(){return`
      <details class="adv" style="margin-top:10px;" open>
        <summary>Connect to a local simulator via ROS/ROS2 bridge</summary>
        <div class="adv-body">
          <p class="hint">Webots, Gazebo, and Isaac Sim/Lab can all be driven through a ROS/ROS2 node. If you have <a href="https://github.com/RobotWebTools/rosbridge_suite" target="_blank" rel="noopener noreferrer">rosbridge_suite</a> running locally (e.g. <code>ros2 launch rosbridge_server rosbridge_websocket_launch.xml</code>), MAGENAIS can open a real WebSocket to it — this only checks reachability, it doesn't launch or control anything on its own yet.</p>
          <div style="display:flex; gap:6px; align-items:center;">
            <input type="text" id="roboRosbridgeUrl" placeholder="localhost:9090" style="flex:1;">
            <button type="button" class="ghost-btn" id="roboRosbridgeConnectBtn">Connect</button>
          </div>
          <p class="hint" id="roboRosbridgeStatus" style="margin-top:6px;"></p>
        </div>
      </details>`}statusColor(e){return e===`READY`||e===`CONNECTED`||e===`LOCAL`?`var(--moss)`:e===`INSTALL REQUIRED`||e===`API KEY REQUIRED`||e===`PREVIEW`?`var(--amber)`:e===`EXTERNAL`||e===`NO PUBLIC API`?`var(--azure)`:`var(--rust)`}renderIntelCards(e){let t=new Set([`Gemini Robotics-ER`,`Hugging Face robotics models`]);return e.map(e=>`
      <div style="padding:8px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <b>${this.escapeHtml(e.name)}</b> <span class="hint">· ${this.escapeHtml(e.org)}</span>
          <div class="hint">${this.escapeHtml(e.note)}</div>
        </div>
        <div style="text-align:right; white-space:nowrap;">
          <div style="color:${this.statusColor(e.status)}; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.04em;">${e.status}</div>
          <div style="margin-top:4px; display:flex; gap:6px; justify-content:flex-end;">
            ${t.has(e.name)?`<button type="button" class="ghost-btn" data-open-provider-type="robotics">Configure</button>`:``}
            <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="ghost-btn">Documentation</a>
          </div>
        </div>
      </div>`).join(``)}renderSimCards(){return p.map(e=>`
      <div style="padding:8px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <b>${this.escapeHtml(e.name)}</b> <span class="hint">· ${e.env} · ${this.escapeHtml(e.license)}</span>
          <div class="hint">${this.escapeHtml(e.note)}</div>
        </div>
        <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="ghost-btn">${e.env===`Browser`?`Launch`:`Open`}</a>
      </div>`).join(``)}wireTabs(){let e=this.controlPanel.querySelectorAll(`#roboticsTabs .chip`);e.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.tab;this.activeTab=n,e.forEach(e=>{e.classList.toggle(`active`,e===t),e.setAttribute(`aria-selected`,String(e===t))}),this.controlPanel.querySelector(`#roboticsPlanPanel`).style.display=n===`plan`?``:`none`,this.controlPanel.querySelector(`#roboticsCodePanel`).style.display=n===`code`?``:`none`,this.controlPanel.querySelector(`#roboticsKinematicsPanel`).style.display=n===`kinematics`?``:`none`,this.controlPanel.querySelector(`#roboticsInspectPanel`).style.display=n===`inspect`?``:`none`,this.controlPanel.querySelector(`#roboticsIntelPanel`).style.display=n===`intel`?``:`none`,this.controlPanel.querySelector(`#roboticsSimPanel`).style.display=n===`sim`?``:`none`})}),this.controlPanel.querySelectorAll(`#roboticsTaskTemplates .chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=u.find(t=>t.label===e.dataset.task);if(!t)return;let n=this.controlPanel.querySelector(`#roboticsPlanInput`);n&&(n.value=t.prompt,n.focus())})}),this.controlPanel.querySelectorAll(`[data-open-provider-type]`).forEach(e=>{e.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`ui:openProviderType`,e.dataset.openProviderType)})}),this.controlPanel.querySelector(`#roboRosbridgeConnectBtn`)?.addEventListener(`click`,()=>this.handleRosbridgeConnect())}async handleRosbridgeConnect(){let e=this.controlPanel.querySelector(`#roboRosbridgeUrl`)?.value||``,t=this.controlPanel.querySelector(`#roboRosbridgeStatus`),n=this.controlPanel.querySelector(`#roboRosbridgeConnectBtn`);t&&(t.textContent=`Connecting…`),n&&(n.disabled=!0);let i=new r(e);try{await i.connect(),t&&(t.innerHTML=`<span style="color:var(--moss);">Connected</span> to ${this.escapeHtml(i.url)}.`),i.disconnect()}catch(e){t&&(t.innerHTML=`<span style="color:var(--rust);">Not reachable:</span> ${this.escapeHtml(e?.message||String(e))}`)}finally{n&&(n.disabled=!1)}}wireInspectTab(){let e=this.controlPanel.querySelector(`#inspectFileInput`);e?.addEventListener(`change`,()=>{let t=e.files?.[0];if(!t)return;let n=new FileReader;n.onload=()=>{let e=n.result;this.inspectImageBase64=e.split(`,`)[1]||null;let t=this.controlPanel.querySelector(`#inspectPreviewWrap`);t&&(t.innerHTML=`<img src="${e}" style="max-width:100%; max-height:160px; border-radius:var(--radius); border:1px solid var(--line-bright);">`)},n.readAsDataURL(t)}),this.controlPanel.querySelector(`#inspectRunBtn`)?.addEventListener(`click`,()=>this.runGuarded(`inspectRunBtn`,()=>this.handleInspect()))}findRoboflowProvider(){return this.kernel.getProviderManager().getProviders(`robotics`,!0).find(e=>e.adapterId===`roboflow`&&e.enabled)}findRoboticsReasoningProvider(){return this.kernel.getProviderManager().getProviders(`robotics`,!0).filter(e=>e.enabled&&e.adapterId!==`roboflow`).sort((e,t)=>(e.priority??100)-(t.priority??100))[0]}async handleInspect(){if(!this.inspectImageBase64){alert(`Choose an image first.`);return}let e=this.findRoboflowProvider();if(!e){let e=this.outputPanel.querySelector(`.stage`);e&&(e.innerHTML=`<p class="hint" style="padding:20px;">Enable and configure the Roboflow provider under Keys &amp; Providers → Robotics first (needs your own trained model + API key — see that provider's notes).</p>`);return}let t=this.kernel.getProviderRegistry().getAdapter(e.adapterId);if(!t?.call){alert(`Roboflow adapter is not available.`);return}let n=this.numVal(`#inspectConfidence`,40);this.renderLoading(`Running inspection…`);try{let r=await t.call(e,{imageBase64:this.inspectImageBase64,confidence:n}),i=r?.predictions||[],a=this.outputPanel.querySelector(`.stage`);a&&(a.innerHTML=`
          <div class="result-text">
            <p><b>${i.length} detection${i.length===1?``:`s`}</b> (confidence ≥ ${n}%)</p>
            ${i.length===0?`<p class="hint">No detections above this confidence threshold.</p>`:i.map(e=>`
              <div style="padding:6px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px;">
                <b>${this.escapeHtml(e.class||`object`)}</b> — ${((e.confidence||0)*100).toFixed(1)}%
                ${e.x===void 0?``:`<span class="hint"> · center (${Math.round(e.x)}, ${Math.round(e.y)}), size ${Math.round(e.width)}×${Math.round(e.height)}</span>`}
              </div>`).join(``)}
            <details class="adv" style="margin-top:8px;"><summary>Raw response</summary><div class="adv-body"><pre>${this.escapeHtml(JSON.stringify(r,null,2))}</pre></div></details>
          </div>`),this.kernel.getStore().getActions().addHistoryEntry({mode:`robotics`,prompt:`[Inspect] ${i.length} detections`,result:JSON.stringify(i),resultType:`text`})}catch(e){this.renderError(e)}}wirePlanTab(){this.controlPanel.querySelector(`#roboticsPlanBtn`)?.addEventListener(`click`,()=>this.runGuarded(`roboticsPlanBtn`,()=>this.handlePlan()))}async handlePlan(){let e=this.controlPanel.querySelector(`#roboticsPlanInput`)?.value.trim();if(!e){alert(`Describe the robot task or goal.`);return}let r=this.controlPanel.querySelector(`#roboticsPlatform`)?.value||l[0];this.renderLoading(`Planning…`);let i=`You are an expert robotics systems engineer. Given the following task or goal for a ${r} robot, produce:\n1. A clear, numbered step-by-step task/motion plan.\n2. The key sensors/capabilities each step depends on (e.g. LIDAR, camera, IMU, gripper).\n3. Any safety or failure-mode considerations worth flagging.\n\nRobot platform: ${r}\nTask: "${e}"\n\nBe concrete and practical — this plan should be directly usable by an engineer implementing it, not generic advice.`,a=this.findRoboticsReasoningProvider();if(a){let r=this.kernel.getProviderRegistry().getAdapter(a.adapterId);if(r?.call)try{let o=await r.call(a,{prompt:i}),s=this.outputPanel.querySelector(`.stage`);s&&(s.innerHTML=`<div class="result-text">${this.renderMarkdown(String(o))}</div><p class="hint" style="margin-top:6px;">Generated via ${this.escapeHtml(a.name)} (Keys &amp; Providers → Robotics).</p><div class="studio-quick-actions" style="margin-top:8px;">${n(`Discuss in Symbiosis`)}</div>`,this.wireCodeCopyButtons(s),t(this.kernel,s,()=>({sourceTab:`Robotics`,title:`Plan: ${e}`.slice(0,80),content:String(o)}))),this.kernel.getStore().getActions().addHistoryEntry({mode:`robotics`,prompt:`[Plan] ${e}`,result:String(o),resultType:`text`});return}catch(e){this.appendLog(`${a.name} failed (${e?.message||e}) — falling back to the regular text provider chain.`,`warn`)}}let o={id:`robotics-plan-`+Date.now(),name:`Robotics Task Planner`,graph:{nodes:[{id:`plan1`,type:`text`,label:`Task Planner`,config:{},inputs:{prompt:i},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let r=(await this.kernel.getWorkflowEngine().execute(o,{prompt:i},(e,t)=>this.appendLog(e,t))).finalOutput||`No output`,a=this.outputPanel.querySelector(`.stage`);a&&(a.innerHTML=`<div class="result-text">${this.renderMarkdown(r)}</div><div class="studio-quick-actions" style="margin-top:8px;">${n(`Discuss in Symbiosis`)}</div>`,this.wireCodeCopyButtons(a),t(this.kernel,a,()=>({sourceTab:`Robotics`,title:`Plan: ${e}`.slice(0,80),content:r}))),this.kernel.getStore().getActions().addHistoryEntry({mode:`robotics`,prompt:`[Plan] ${e}`,result:r,resultType:`text`})}catch(e){this.renderError(e)}}wireCodeTab(){this.controlPanel.querySelector(`#roboticsCodeBtn`)?.addEventListener(`click`,()=>this.runGuarded(`roboticsCodeBtn`,()=>this.handleCode()))}async handleCode(){let e=this.controlPanel.querySelector(`#roboticsCodeInput`)?.value.trim();if(!e){alert(`Describe what the robot code should do.`);return}let t=this.controlPanel.querySelector(`#roboticsCodeTarget`)?.value||c[0],n=this.controlPanel.querySelector(`#roboticsCodePlatform`)?.value||l[0];this.renderLoading(`Writing code…`);let r={id:`robotics-code-`+Date.now(),name:`Robotics Code Generator`,graph:{nodes:[{id:`code1`,type:`coding`,label:`Robotics Code Generator`,config:{language:t},inputs:{prompt:`Robot platform: ${n}\n\n${e}`},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let i=(await this.kernel.getWorkflowEngine().execute(r,{prompt:`Robot platform: ${n}\n\n${e}`},(e,t)=>this.appendLog(e,t))).finalOutput||`No output`,a=this.outputPanel.querySelector(`.stage`);a&&(a.innerHTML=`<div class="result-text">${this.renderMarkdown(i)}</div>`,this.wireCodeCopyButtons(a)),this.kernel.getStore().getActions().addHistoryEntry({mode:`robotics`,prompt:`[${t}] ${e}`,result:i,resultType:`text`})}catch(e){this.renderError(e)}}wireKinematicsTab(){this.controlPanel.querySelector(`#kForwardBtn`)?.addEventListener(`click`,()=>{let e=this.numVal(`#kL1`,.5),t=this.numVal(`#kL2`,.4),n=s(this.numVal(`#kTheta1`,0)),r=s(this.numVal(`#kTheta2`,0));this.renderKinematicsPreview(e,t,n,r)}),this.controlPanel.querySelector(`#kInverseBtn`)?.addEventListener(`click`,()=>{let e=this.numVal(`#kL1`,.5),t=this.numVal(`#kL2`,.4),n=this.numVal(`#kTargetX`,0),r=this.numVal(`#kTargetY`,0),i=a(e,t,{x:n,y:r}),s=this.outputPanel.querySelector(`.stage`);if(!s)return;if(!i){s.innerHTML=`<p class="hint">Target (${n}, ${r}) is unreachable with link lengths ${e}m + ${t}m — it's either too far away or inside the arm's dead zone.</p>`;return}let[c,l]=i.elbowDown,[u,d]=i.elbowUp;s.innerHTML=`
        <div class="result-text">
          <p><b>Inverse kinematics for target (${n}, ${r})</b></p>
          <p><b>Elbow-down solution:</b> θ1 = ${o(c).toFixed(2)}°, θ2 = ${o(l).toFixed(2)}°</p>
          <p><b>Elbow-up solution:</b> θ1 = ${o(u).toFixed(2)}°, θ2 = ${o(d).toFixed(2)}°</p>
        </div>`,this.renderKinematicsPreview(e,t,c,l,{x:n,y:r})})}numVal(e,t){let n=this.controlPanel.querySelector(e),r=parseFloat(n?.value||``);return Number.isFinite(r)?r:t}renderKinematicsPreview(e,t,n,r,a){let o=this.outputPanel.querySelector(`.stage`);if(!o)return;let{elbow:s,endEffector:c}=i(e,t,n,r),l=e=>({x:220+e.x*150,y:220-e.y*150}),u={x:220,y:220},d=l(s),f=l(c),p=a?l(a):null;o.innerHTML=`
      <div class="result-text">
        <svg viewBox="0 0 440 440" width="100%" style="max-width:440px; background:var(--bg-raised); border:1px solid var(--line); border-radius:var(--radius-lg);">
          <line x1="${u.x}" y1="${u.y}" x2="${d.x}" y2="${d.y}" stroke="var(--amber)" stroke-width="4" stroke-linecap="round"/>
          <line x1="${d.x}" y1="${d.y}" x2="${f.x}" y2="${f.y}" stroke="var(--azure)" stroke-width="4" stroke-linecap="round"/>
          <circle cx="${u.x}" cy="${u.y}" r="6" fill="var(--ink)"/>
          <circle cx="${d.x}" cy="${d.y}" r="5" fill="var(--ink-dim)"/>
          <circle cx="${f.x}" cy="${f.y}" r="6" fill="var(--moss)"/>
          ${p?`<circle cx="${p.x}" cy="${p.y}" r="7" fill="none" stroke="var(--rust)" stroke-width="2" stroke-dasharray="3,3"/>`:``}
        </svg>
        <p><b>Elbow:</b> (${s.x.toFixed(3)}, ${s.y.toFixed(3)}) m &nbsp; <b>End effector:</b> (${c.x.toFixed(3)}, ${c.y.toFixed(3)}) m</p>
      </div>`}};export{m as RoboticsMode};