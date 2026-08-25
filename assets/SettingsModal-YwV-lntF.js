import{t as e}from"./Environment-DAaQRBRU.js";import{$ as t,A as n,B as r,C as i,E as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,O as p,P as m,Q as h,R as g,T as _,U as v,V as y,W as b,X as x,Y as S,Z as C,_ as w,a as T,c as E,et as D,f as O,i as k,j as A,k as j,l as M,n as N,o as P,p as F,q as I,r as L,s as R,t as z,tt as B,v as V,w as H,z as U}from"./main-CRkdCVp7.js";var W=[{match:/ollama/i,links:{website:`https://ollama.com`,docs:`https://github.com/ollama/ollama/blob/main/docs/api.md`}},{match:/webllm/i,links:{website:`https://webllm.mlc.ai`,docs:`https://webllm.mlc.ai/docs/`}},{match:/transformers/i,links:{website:`https://huggingface.co/docs/transformers.js`,docs:`https://huggingface.co/docs/transformers.js`}},{match:/puter/i,links:{website:`https://puter.com`,docs:`https://docs.puter.com/`}},{match:/browser-speech|browser speech/i,links:{website:`https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API`,docs:`https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API`}},{match:/kenburns/i,links:{}},{match:/wikipedia/i,links:{website:`https://www.wikipedia.org`,docs:`https://www.mediawiki.org/wiki/API:Main_page`}},{match:/tavily/i,links:{website:`https://tavily.com`,docs:`https://docs.tavily.com`,apiKeyUrl:`https://app.tavily.com/home`}},{match:/pollinations/i,links:{website:`https://pollinations.ai`,docs:`https://github.com/pollinations/pollinations/blob/master/APIDOCS.md`}},{match:/openrouter/i,links:{website:`https://openrouter.ai`,docs:`https://openrouter.ai/docs`,apiKeyUrl:`https://openrouter.ai/keys`}},{match:/github models|github-models/i,links:{website:`https://github.com/marketplace/models`,docs:`https://docs.github.com/en/github-models`,apiKeyUrl:`https://github.com/settings/tokens`}},{match:/cloudflare/i,links:{website:`https://www.cloudflare.com`,docs:`https://developers.cloudflare.com/workers-ai/`,apiKeyUrl:`https://dash.cloudflare.com/profile/api-tokens`}},{match:/nvidia/i,links:{website:`https://build.nvidia.com`,docs:`https://docs.nvidia.com/nim/`,apiKeyUrl:`https://build.nvidia.com`}},{match:/huggingface|hugging face/i,links:{website:`https://huggingface.co`,docs:`https://huggingface.co/docs/api-inference`,apiKeyUrl:`https://huggingface.co/settings/tokens`}},{match:/openai/i,links:{website:`https://openai.com`,docs:`https://platform.openai.com/docs`,apiKeyUrl:`https://platform.openai.com/api-keys`}},{match:/anthropic|claude/i,links:{website:`https://www.anthropic.com`,docs:`https://docs.claude.com`,apiKeyUrl:`https://console.anthropic.com/settings/keys`}},{match:/gemini|google/i,links:{website:`https://ai.google.dev`,docs:`https://ai.google.dev/gemini-api/docs`,apiKeyUrl:`https://aistudio.google.com/apikey`}},{match:/groq/i,links:{website:`https://groq.com`,docs:`https://console.groq.com/docs`,apiKeyUrl:`https://console.groq.com/keys`}},{match:/cerebras/i,links:{website:`https://www.cerebras.ai`,docs:`https://inference-docs.cerebras.ai`,apiKeyUrl:`https://cloud.cerebras.ai`}},{match:/sambanova/i,links:{website:`https://sambanova.ai`,docs:`https://docs.sambanova.ai`,apiKeyUrl:`https://cloud.sambanova.ai/apis`}},{match:/moonshot|kimi/i,links:{website:`https://www.moonshot.ai`,docs:`https://platform.moonshot.ai/docs`,apiKeyUrl:`https://platform.moonshot.ai/console/api-keys`}},{match:/deepseek/i,links:{website:`https://www.deepseek.com`,docs:`https://api-docs.deepseek.com`,apiKeyUrl:`https://platform.deepseek.com/api_keys`}},{match:/qwen|dashscope/i,links:{website:`https://www.alibabacloud.com/en/product/modelstudio`,docs:`https://www.alibabacloud.com/help/en/model-studio`,apiKeyUrl:`https://bailian.console.alibabacloud.com`}},{match:/together/i,links:{website:`https://www.together.ai`,docs:`https://docs.together.ai`,apiKeyUrl:`https://api.together.ai/settings/api-keys`}},{match:/deepinfra/i,links:{website:`https://deepinfra.com`,docs:`https://deepinfra.com/docs`,apiKeyUrl:`https://deepinfra.com/dash/api_keys`}},{match:/xai|grok/i,links:{website:`https://x.ai`,docs:`https://docs.x.ai`,apiKeyUrl:`https://console.x.ai`}},{match:/mistral|pixtral/i,links:{website:`https://mistral.ai`,docs:`https://docs.mistral.ai`,apiKeyUrl:`https://console.mistral.ai/api-keys`}},{match:/fal\.?ai|\bfal-ai\b/i,links:{website:`https://fal.ai`,docs:`https://fal.ai/docs`,apiKeyUrl:`https://fal.ai/dashboard/keys`}},{match:/replicate/i,links:{website:`https://replicate.com`,docs:`https://replicate.com/docs`,apiKeyUrl:`https://replicate.com/account/api-tokens`}},{match:/stability|stable[\s-]?audio/i,links:{website:`https://platform.stability.ai`,docs:`https://platform.stability.ai/docs`,apiKeyUrl:`https://platform.stability.ai/account/keys`}},{match:/novita/i,links:{website:`https://novita.ai`,docs:`https://novita.ai/docs`,apiKeyUrl:`https://novita.ai/settings/key-management`}},{match:/deepgram/i,links:{website:`https://deepgram.com`,docs:`https://developers.deepgram.com`,apiKeyUrl:`https://console.deepgram.com`}},{match:/assemblyai/i,links:{website:`https://www.assemblyai.com`,docs:`https://www.assemblyai.com/docs`,apiKeyUrl:`https://www.assemblyai.com/app/api-keys`}},{match:/elevenlabs/i,links:{website:`https://elevenlabs.io`,docs:`https://elevenlabs.io/docs`,apiKeyUrl:`https://elevenlabs.io/app/settings/api-keys`}},{match:/playht/i,links:{website:`https://play.ht`,docs:`https://docs.play.ht`,apiKeyUrl:`https://play.ht/app/api-access`}},{match:/kokoro|piper/i,links:{website:`https://huggingface.co`,docs:`https://huggingface.co/docs/api-inference`,apiKeyUrl:`https://huggingface.co/settings/tokens`}},{match:/openpilot/i,links:{website:`https://comma.ai/openpilot`,docs:`https://docs.comma.ai`}},{match:/custom-mcp|\bmcp\b/i,links:{website:`https://modelcontextprotocol.io`,docs:`https://modelcontextprotocol.io/introduction`}},{match:/quantum.?sim|local quantum/i,links:{}},{match:/ibm.?quantum/i,links:{website:`https://quantum.ibm.com`,docs:`https://quantum.cloud.ibm.com/docs`,apiKeyUrl:`https://quantum.ibm.com`}},{match:/piston/i,links:{website:`https://github.com/engineer-man/piston`,docs:`https://github.com/engineer-man/piston/blob/master/docs/api-v2.md`}},{match:/judge0/i,links:{website:`https://judge0.com`,docs:`https://ce.judge0.com/`}},{match:/roboflow/i,links:{website:`https://roboflow.com`,docs:`https://docs.roboflow.com`,apiKeyUrl:`https://app.roboflow.com/settings/api`}},{match:/\bexa\b/i,links:{website:`https://exa.ai`,docs:`https://docs.exa.ai`,apiKeyUrl:`https://dashboard.exa.ai/api-keys`}},{match:/perplexity|sonar/i,links:{website:`https://www.perplexity.ai`,docs:`https://docs.perplexity.ai`,apiKeyUrl:`https://www.perplexity.ai/settings/api`}},{match:/glot\.?io/i,links:{website:`https://glot.io`,docs:`https://github.com/prasmussen/glot-run/blob/master/api_docs/run.md`,apiKeyUrl:`https://glot.io/account/token`}}];function G(e){let t=`${e.id} ${e.name}`,n={};for(let e of W)if(e.match.test(t)){n=e.links;break}if(Object.keys(n).length===0){for(let t of W)if(t.match.test(e.adapterId)){n=t.links;break}}return e.customLinks?{website:e.customLinks.website||n.website,docs:e.customLinks.docs||n.docs,apiKeyUrl:e.customLinks.apiKeyUrl||n.apiKeyUrl}:n}var K=[{value:`all`,label:`All`},{value:`text`,label:`Text`},{value:`image`,label:`Image`},{value:`video`,label:`Video`},{value:`audio`,label:`Audio (STT)`},{value:`speech`,label:`Speech (TTS)`},{value:`music`,label:`Music`},{value:`coding`,label:`Coding`},{value:`vision`,label:`Vision`},{value:`agents`,label:`Agents`},{value:`mcp`,label:`MCP`},{value:`research`,label:`Research`},{value:`autonomous`,label:`Autonomous`},{value:`gamegen`,label:`Game Generation`},{value:`quantum`,label:`Quantum`},{value:`codeexec`,label:`Code Execution`},{value:`robotics`,label:`Robotics`}];function q(e){return e.visionOnly===!0}function J(e){return q(e)?`vision`:e.type}var Y=`openai-compatible.openai.groq.together.deepinfra.openrouter.falai.replicate.deepgram.assemblyai.playht.huggingface.pollinations.anthropic.gemini.elevenlabs.puter.browser-speech.internal-fallback.ollama.webllm.transformers.coco-ssd.openpilot.browser-vision.pollinations-free.wikipedia.tavily.quantum-sim.ibm-quantum.piston-compatible.roboflow`.split(`.`);function X(e){let t=document.createElement(`div`);return t.textContent=e??``,t.innerHTML}function Z(e){let t=Math.floor((Date.now()-e)/1e3);if(t<60)return`just now`;let n=Math.floor(t/60);if(n<60)return`${n}m ago`;let r=Math.floor(n/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function Q(e){if(!isFinite(e)||e<0)return`—`;if(e<5)return`a few seconds`;if(e<60)return`${Math.round(e)}s`;let t=Math.round(e/60);return t<60?`${t}m`:`${Math.floor(t/60)}h ${t%60}m`}var $={auth:`Invalid API Key`,not_found:`Invalid Model`,billing:`Credits Exhausted`,rate_limited:`Busy (Rate Limited)`,timeout:`Timeout`,network:`Network Error`,unsupported_operation:`Unsupported Operation`,other:`Error`};function ee(e,t){if(!e.enabled)return{label:`Disabled`,color:`var(--ink-faint)`};let n=o(e);if(!n.available)return{label:n.disabledReason||`Unavailable in this environment`,color:`var(--amber, #d8a23f)`};if(!e.noKeyNeeded&&!e.apiKey)return{label:`Missing API Key`,color:`var(--amber, #d8a23f)`};if(/\/([A-Z][A-Z0-9_]{3,})(?:\/|$)/.test(e.baseUrl||``))return{label:`Configuration Missing`,color:`var(--amber, #d8a23f)`};if(t){let n=e.defaultModel||s(t.task,t.role),r=(n?f(n,t.task,t.role):void 0)?.status||`not-installed`;if(r===`not-installed`||r===`error`)return{label:`Download Required`,color:`var(--amber, #d8a23f)`};if(r===`downloading`||r===`queued`)return{label:`Downloading…`,color:`var(--azure)`};if(r===`paused`)return{label:`Download Paused`,color:`var(--amber, #d8a23f)`};if(r===`corrupted`)return{label:`Download Corrupted`,color:`var(--rust)`}}let r=e.health;if(!r||r.status===`unknown`)return{label:`Not tested yet`,color:`var(--ink-faint)`};if(r.status===`healthy`)return{label:`Healthy`,color:`var(--sage, #4a9d6a)`};let i=x(r.lastError),a=i===`rate_limited`||i===`timeout`||i===`network`?`var(--amber, #d8a23f)`:`var(--rust)`;return{label:$[i],color:a}}function te(e=`text`){return{id:`custom-`+Date.now()+`-`+Math.random().toString(36).slice(2,7),name:`New Provider`,type:e,adapterId:`openai-compatible`,baseUrl:``,authType:`bearer`,authHeaderName:`Authorization`,defaultModel:``,timeoutMs:3e4,retries:1,priority:50,enabled:!1,isBuiltIn:!1,isPreset:!1,noKeyNeeded:!1}}var ne=class{kernel;activeFilter=`all`;unsubscribeManifest=null;webllmUnsub=null;healthUpdateHandler=null;constructor(e){this.kernel=e}open(){if(this.ensureDom(),this.renderSetupStatus(),this.renderList(),this.renderLocalModelsList(),this.renderStorageInfo(),this.renderDiagnostics(),document.getElementById(`settingsModal`)?.classList.add(`open`),this.unsubscribeManifest||=c(()=>{this.renderLocalModelsList(),this.renderDiagnostics(),this.renderStorageInfo()}),!this.healthUpdateHandler){let e=null;this.healthUpdateHandler=()=>{e||=window.setTimeout(()=>{e=null,this.renderDiagnostics()},400)},this.kernel.getEventBus().on(`provider:health-updated`,this.healthUpdateHandler)}}focusLocalModel(e){this.open();let t=document.getElementById(`localModelsDetails`);t&&(t.open=!0),requestAnimationFrame(()=>{let t=document.querySelector(`[data-local-model-id="${CSS.escape(e)}"]`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),t.classList.add(`flash-highlight`),setTimeout(()=>t.classList.remove(`flash-highlight`),2e3))})}focusProviderType(e){this.open(),document.querySelector(`#providerTypeFilterChips .chip[data-val="${CSS.escape(e)}"]`)?.click()}close(){document.getElementById(`settingsModal`)?.classList.remove(`open`),this.unsubscribeManifest?.(),this.unsubscribeManifest=null,this.healthUpdateHandler&&=(this.kernel.getEventBus().off(`provider:health-updated`,this.healthUpdateHandler),null)}ensureDom(){if(document.getElementById(`settingsModal`))return;let t=document.createElement(`div`);t.className=`modal-backdrop`,t.id=`settingsModal`,t.innerHTML=`
      <div class="modal settings-modal" style="max-width:760px;">
        <button class="modal-close" id="closeSettings">×</button>
        <h3>Universal Provider Manager</h3>

        <div class="settings-pinned">
          <div class="ai-setup-status-panel">
            <div class="ai-setup-status-header">
              <span class="field-label" style="margin:0;">AI Setup Status</span>
              <button class="ghost-btn small" id="reopenSetupWizardBtn" title="Run the beginner-friendly setup guide again">Setup Guide</button>
            </div>
            <div id="aiSetupStatusList" class="ai-setup-status-list"></div>
          </div>

          <p class="hint">Every provider — built-in, preset, or custom — lives in one registry. Add, edit, duplicate, or delete anything.
            <b style="color:var(--ink-dim);">Keys are saved on this device (browser local storage)</b>
            so you don't need to re-enter them next time — they're only ever sent directly to the
            provider you're calling. On a shared computer, use "Clear device data" before you leave.</p>

          <div class="field" style="margin-bottom:0;">
            <label class="field-label">Routing mode <span class="opt">which providers are allowed to race for each request</span></label>
            <div class="chip-group" id="routingModeChips">
              <span class="chip" data-mode="hybrid" title="Race every enabled, valid provider in parallel — first response wins. Default; nothing changes for existing setups.">Hybrid (race)</span>
              <span class="chip" data-mode="local" title="Only Transformers.js/WebLLM/Ollama/on-device speech race. Nothing else is contacted, even if enabled.">Local only</span>
              <span class="chip" data-mode="cloud" title="Only non-local (API-key) providers race.">Cloud only</span>
            </div>
          </div>

          <div class="chip-group" id="providerTypeFilterChips">
            ${K.map(e=>`<span class="chip${e.value===`all`?` active`:``}" data-val="${e.value}">${e.label}</span>`).join(``)}
          </div>

          <div id="providerList" class="settings-provider-list"></div>

          <button class="ghost-btn" id="addProviderBtn" style="width:100%;">+ Add custom provider</button>

          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="ghost-btn small" id="resetProvidersBtn">Reset to defaults</button>
            <button class="ghost-btn small" id="clearDeviceDataBtn" style="border-color:var(--rust); color:var(--rust);">Clear device data</button>
          </div>

        </div>

        <div class="settings-accordions">
          <details class="log-details settings-accordion" id="localModelsDetails">
            <summary>Local models (Transformers.js, in-browser)</summary>
            <div class="settings-accordion-body">
              <p class="hint">These run entirely on-device — no key, no signup. The main text/vision/audio/embeddings
                models are edited from their provider row above ("Edit" → "Default model"); the three below are
                sub-tasks that share a provider with something else, so they're configured here instead.</p>
              <p class="hint" style="color:var(--amber, #d8a23f);">On a larger model, your browser may briefly show its own
                "Page Unresponsive" warning while the model finishes initializing after downloading — this is expected on
                slower hardware, not a crash. <b>Don't force-close the tab</b> if you see it; that's the one thing that
                actually loses progress. Just wait, or dismiss the browser's dialog if it offers a "Wait" option.</p>
              <div id="localModelsStorageInfo" class="hint" style="margin:0;"></div>
              <div id="localModelsList" style="display:flex; flex-direction:column; gap:10px;"></div>
            </div>
          </details>

          <details class="log-details settings-accordion" id="visionSettingsDetails">
            <summary>Vision settings</summary>
            <div class="settings-accordion-body">
              <p class="hint">Applies to every Vision provider (built-in and custom) and to the Camera tab's continuous analysis loop.</p>
              <div class="field-row">
                <div class="field">
                  <label class="field-label">Max image size (px, longest edge)</label>
                  <input type="number" id="vs-maxImageSizePx" min="128" step="64">
                </div>
                <div class="field">
                  <label class="field-label">JPEG quality <span class="opt">0-1</span></label>
                  <input type="number" id="vs-jpegQuality" min="0.1" max="1" step="0.05">
                </div>
              </div>
              <div class="field-row">
                <div class="field">
                  <label class="field-label">Camera FPS</label>
                  <input type="number" id="vs-cameraFps" min="1" max="60">
                </div>
                <div class="field">
                  <label class="field-label">Continuous analysis interval (ms)</label>
                  <input type="number" id="vs-continuousIntervalMs" min="1000" step="1000">
                </div>
              </div>
              <div class="field">
                <label class="field-label">Max upload size (MB)</label>
                <input type="number" id="vs-maxUploadSizeMB" min="1">
              </div>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer; margin:8px 0;">
                <input type="checkbox" id="vs-autoResize" style="width:auto;">
                <span>Auto-resize images larger than the max size above before sending</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="checkbox" id="vs-pngSupport" style="width:auto;">
                <span>Keep PNG uploads as PNG <span class="opt">off re-encodes everything to JPEG during resize, for smaller payloads</span></span>
              </label>
            </div>
          </details>

          <details class="log-details settings-accordion" id="diagnosticsDetails">
            <summary>Diagnostics</summary>
            <div class="settings-accordion-body">
              <div id="diagnosticsBuildInfo" class="hint" style="margin:0; font-family:var(--mono); font-size:11px;"></div>
              <div id="diagnosticsDeviceInfo" class="hint" style="margin:0;"></div>
              <div id="diagnosticsTable" style="display:flex; flex-direction:column; gap:6px;"></div>

              <div class="divider"></div>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="checkbox" id="debugModeToggle">
                <span>Debug mode — verbose logging in the browser console (request IDs, provider/model, latency, tokens, retries, failure reasons)</span>
              </label>
              <p class="hint">Off by default to keep the console quiet during normal use. A failed provider call is always logged
                regardless of this setting — this only adds the successful-call detail on top, for troubleshooting.</p>
            </div>
          </details>

          <details class="log-details settings-accordion" id="externalProxyDetails">
            <summary>External CORS Proxy (optional — only needed for Cloudflare Workers AI, Moonshot, fal.ai, Replicate)</summary>
            <div class="settings-accordion-body">
              <p class="hint">Almost every provider works directly from the browser. A small handful (Cloudflare Workers
                AI, Moonshot/Kimi, fal.ai, Replicate) don't send the headers browsers require for a direct call, so on a
                plain static deployment (like GitHub Pages) they need a tiny relay to work at all — <code>npm start</code>
                provides one automatically when self-hosting; this field is the equivalent for a static deployment.
                Deploy your own free copy of <code>server/cloudflare-worker-proxy.js</code> to Cloudflare Workers
                (instructions are in that file's own comments) and paste its URL here. Nothing else changes — every
                other provider is completely unaffected whether this is set or not, and only your own MAGENAIS ever
                talks to your own Worker.</p>
              <div class="field">
                <label class="field-label" for="externalProxyUrlInput">Worker URL</label>
                <input type="text" id="externalProxyUrlInput" placeholder="https://magenais-proxy.yoursubdomain.workers.dev" autocomplete="off">
              </div>
              <div style="display:flex; gap:8px;">
                <button class="ghost-btn small" id="saveExternalProxyBtn">Save</button>
                <button class="ghost-btn small" id="testExternalProxyBtn">Test</button>
                <button class="ghost-btn small" id="clearExternalProxyBtn">Clear</button>
              </div>
              <p class="hint" id="externalProxyStatus"></p>
            </div>
          </details>
        </div>
      </div>
    `,document.body.appendChild(t),t.querySelector(`#closeSettings`)?.addEventListener(`click`,()=>this.close()),t.addEventListener(`click`,e=>{e.target===t&&this.close()}),t.querySelectorAll(`#providerTypeFilterChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{t.querySelectorAll(`#providerTypeFilterChips .chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.activeFilter=e.dataset.val,this.renderList()})});let n=t.querySelectorAll(`#routingModeChips .chip`),r=I();n.forEach(e=>{let t=e;t.classList.toggle(`active`,t.dataset.mode===r),t.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),l(t.dataset.mode)})}),t.querySelector(`#addProviderBtn`)?.addEventListener(`click`,()=>{let e=te(this.activeFilter===`all`||this.activeFilter===`vision`?`text`:this.activeFilter);this.activeFilter===`vision`&&(e.visionOnly=!0),this.openEditor(e,!0)}),t.querySelector(`#reopenSetupWizardBtn`)?.addEventListener(`click`,()=>{this.close(),this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})}),t.querySelector(`#resetProvidersBtn`)?.addEventListener(`click`,()=>this.handleReset()),t.querySelector(`#clearDeviceDataBtn`)?.addEventListener(`click`,()=>this.handleClearData());let i=t.querySelector(`#externalProxyUrlInput`),a=t.querySelector(`#externalProxyStatus`);i&&(i.value=e.getExternalProxyUrl()||``),t.querySelector(`#saveExternalProxyBtn`)?.addEventListener(`click`,()=>{let t=i?.value.trim()||``;if(t&&!/^https:\/\//i.test(t)){a&&(a.textContent=`Must be an https:// URL.`,a.style.color=`var(--rust)`);return}e.setExternalProxyUrl(t||null),a&&(a.textContent=t?`Saved — Cloudflare Workers AI/Moonshot/fal.ai/Replicate will now route through your Worker.`:`Cleared.`,a.style.color=`var(--moss)`)}),t.querySelector(`#clearExternalProxyBtn`)?.addEventListener(`click`,()=>{e.setExternalProxyUrl(null),i&&(i.value=``),a&&(a.textContent=`Cleared.`,a.style.color=`var(--moss)`)});let o=t.querySelector(`#testExternalProxyBtn`);o?.addEventListener(`click`,async()=>{let e=(i?.value.trim()||``).replace(/\/+$/,``);if(!e){a&&(a.textContent=`Enter a Worker URL first.`,a.style.color=`var(--rust)`);return}if(!/^https:\/\//i.test(e)){a&&(a.textContent=`Must be an https:// URL.`,a.style.color=`var(--rust)`);return}let t=o.textContent??`Test`;o.disabled=!0,o.textContent=`Testing…`,a&&(a.textContent=`Testing — sending a real request through your Worker…`,a.style.color=`var(--ink-faint)`);let n=new AbortController,r=setTimeout(()=>n.abort(),1e4);try{let t=await fetch(e,{method:`GET`,headers:{[w]:`https://api.github.com/zen`},signal:n.signal}),r=await t.text();t.ok&&r.trim().length>0?a&&(a.textContent=`✓ Working — Worker forwarded a real request and returned a live response ("${r.trim().slice(0,60)}").`,a.style.color=`var(--moss)`):a&&(a.textContent=`✗ Worker responded but with HTTP ${t.status} — check it was deployed exactly as in server/cloudflare-worker-proxy.js.`,a.style.color=`var(--rust)`)}catch(e){if(a){let t=e?.name===`AbortError`?`timed out after 10s`:e?.message||String(e);a.textContent=`✗ Couldn't reach the Worker (${t}) — double-check the URL and that it's deployed and enabled in your Cloudflare dashboard.`,a.style.color=`var(--rust)`}}finally{clearTimeout(r),o.disabled=!1,o.textContent=t}});let s=t.querySelector(`#debugModeToggle`);s&&(M.load().then(e=>{s.checked=e.logLevel===`debug`}),s.addEventListener(`change`,async()=>{let e=await M.load();e.logLevel=s.checked?`debug`:`info`,await M.save(e),B.configure(e.logLevel)})),this.wireVisionSettings(t)}wireVisionSettings(e){let t=[`maxImageSizePx`,`jpegQuality`,`cameraFps`,`continuousIntervalMs`,`maxUploadSizeMB`],n=[`autoResize`,`pngSupport`];M.load().then(r=>{t.forEach(t=>{let n=e.querySelector(`#vs-${t}`);n&&(n.value=String(r.vision[t]))}),n.forEach(t=>{let n=e.querySelector(`#vs-${t}`);n&&(n.checked=!!r.vision[t])})});let r=async(t,n)=>{let r=e.querySelector(`#vs-${t}`);if(!r)return;let i=await M.load(),a=n(r.value);Number.isFinite(a)&&(i.vision={...i.vision,[t]:a},await M.save(i))};t.forEach(t=>{e.querySelector(`#vs-${t}`)?.addEventListener(`change`,()=>r(t,t===`jpegQuality`?parseFloat:e=>parseInt(e,10)))}),n.forEach(t=>{let n=e.querySelector(`#vs-${t}`);n?.addEventListener(`change`,async()=>{let e=await M.load();e.vision={...e.vision,[t]:n.checked},await M.save(e)})})}renderSetupStatus(){let e=document.getElementById(`aiSetupStatusList`);if(!e)return;let t={ready:{dot:`ai-status-ready`,label:`Ready`},"needs-configuration":{dot:`ai-status-needs-config`,label:`Needs Configuration`},"no-provider":{dot:`ai-status-none`,label:`No Provider`}};e.innerHTML=this.kernel.getProviderManager().getSetupStatus().map(e=>{let n=t[e.status];return`
        <div class="ai-setup-status-row">
          <span class="ai-setup-status-label">${X(e.label)}</span>
          <span class="ai-setup-status-value"><span class="status-dot ${n.dot}"></span>${n.label}</span>
        </div>
      `}).join(``)}renderList(){this.renderSetupStatus();let n=document.getElementById(`providerList`);if(!n)return;let r=this.kernel.getProviderManager(),s;if(this.activeFilter===`vision`)s=r.getProviders(`text`).filter(q);else if(this.activeFilter===`text`||this.activeFilter===`gamegen`||this.activeFilter===`coding`){let e=r.getProviders(`text`).filter(e=>!q(e));if(this.activeFilter===`coding`){let t=r.getProviders(`coding`).filter(t=>!e.some(e=>e.id===t.id));s=e.concat(t)}else s=e}else s=this.activeFilter===`all`?r.getProviders():r.getProviders(this.activeFilter);s=s.sort((e,t)=>e.priority-t.priority||e.name.localeCompare(t.name));let c=s.filter(e=>!e.downloadable),l=s.filter(e=>e.downloadable),d=c.length>0&&l.length>0;if(s=d?[...c,...l]:s,s.length===0){n.innerHTML=`<p class="hint">${{mcp:`MCP (Model Context Protocol) is a standard way to give an AI extra abilities — reading your files, browsing the web, remembering things between chats, and more — through small helper programs called "servers."
          <br><br><b>Common MCP servers:</b>
          <div style="margin:8px 0; display:flex; flex-direction:column; gap:3px;">
            ${[{name:`Filesystem`,blurb:`Lets an AI read and edit files on your own computer.`,kind:`local`},{name:`GitHub`,blurb:`Lets an AI look at and manage repositories, issues, and pull requests.`,kind:`local`},{name:`Fetch`,blurb:`Lets an AI fetch and read web pages on request.`,kind:`local`},{name:`Browser`,blurb:`Lets an AI click around and read a real browser window.`,kind:`local`},{name:`Memory`,blurb:`Gives an AI a persistent notebook it can save things to between chats.`,kind:`local`},{name:`SQLite`,blurb:`Lets an AI query a local database file.`,kind:`local`},{name:`Sequential Thinking`,blurb:`Helps an AI break a hard problem into smaller reasoning steps.`,kind:`local`},{name:`Playwright`,blurb:`Lets an AI drive a real browser to test or automate websites.`,kind:`local`}].map(e=>`<div><b>${X(e.name)}</b> — ${X(e.blurb)}</div>`).join(``)}
          </div>
          Most of these run as a small program on your own computer, which a browser tab can't start by itself for security reasons — they'd need a small companion app running alongside MAGENAIS to connect. That companion piece isn't built yet, so adding one of these here won't do anything useful <i>yet</i> — this list is here so you know what's coming and can ask for the ones you actually want built first.
          <br><br>If you already have a remote MCP server reachable over a web address (not one you run locally), tell me its URL and I can look at making that one actually work sooner, since those don't need a local companion app.`,gamegen:`Game Generation uses your configured <b>Text</b> providers (two AI passes: HTML/CSS scaffolding, then game-loop JavaScript) — add or enable a provider on the Text tab and it appears here too.`}[this.activeFilter]||`No providers in this category yet.`}</p>`;return}n.innerHTML=this.activeFilter===`gamegen`?`<p class="hint" style="margin-bottom:10px;">Game Generation uses your configured <b>Text</b> providers below (two AI passes: HTML/CSS scaffolding, then game-loop JavaScript) — this is the same list as the Text tab.</p>`:``;let p=(e,t)=>{let r=document.createElement(`div`);r.className=`provider-group-header`,r.style.cssText=`margin:14px 0 6px; padding-top:10px; border-top:1px solid var(--border, #333);`,r.innerHTML=`<div style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-faint);">${X(e)}</div><p class="hint" style="margin:2px 0 0;">${X(t)}</p>`,n.appendChild(r)},m=!1;s.forEach(s=>{d&&s===c[0]&&p(`Built-in Providers`,`Zero-download, ready the instant you enable them.`),d&&!m&&s===l[0]&&(p(`Downloadable Providers`,`Real model weights — one-time download, then cached by the browser. Manage the actual download for each one right here.`),m=!0);let g=document.createElement(`div`);g.className=`provider-row`;let v=o(s),y=N(s),b=y&&s.defaultModel?f(s.defaultModel,y.task,y.role):null,x=s.adapterId===`coco-ssd`?i():!y||!!b&&b.bytesTotal>0&&b.bytesDownloaded>=b.bytesTotal,S=s.enabled&&(s.noKeyNeeded||!!s.apiKey)&&v.available&&x,w=!x&&s.enabled||!v.available&&s.enabled?`var(--amber, #d8a23f)`:S?`var(--moss)`:s.enabled?`var(--rust)`:`var(--ink-faint)`,T=x?s.noKeyNeeded?`<span class="key-status set">no key needed</span>`:s.apiKey?`<span class="key-status set">key set</span>`:`<span class="key-status unset">no key set — add one below to activate</span>`:`<span class="key-status" style="color:var(--amber, #d8a23f);">not downloaded yet — see Local models below</span>`,E=s.isBuiltIn?` · <span style="color:var(--azure);">built-in</span>`:``,O=u.has(s.adapterId)?` · <span style="color:var(--sage, #4a9d6a);">local</span>`:``,k=(s.type===`image`||s.type===`video`)&&s.capabilities?.length?`<div class="provider-meta" style="margin-top:2px;">
            ${s.capabilities.includes(`text-to-image`)?`<span style="color:var(--moss);">✓ Text → Image</span>`:``}
            ${s.capabilities.includes(`image-to-image`)?` &nbsp;<span style="color:var(--moss);">✓ Image → Image</span>`:``}
            ${s.capabilities.includes(`image-to-video`)?`<span style="color:var(--moss);">✓ Image → Video</span>`:``}
          </div>`:``,A=v.environmentBadge&&v.environmentBadge!==`Browser`?` · <span style="color:var(--ink-faint);" title="This provider's declared requirements are best suited to a ${v.environmentBadge.toLowerCase()} runtime.">${X(v.environmentBadge)}</span>`:``,j=v.available?``:` · <span style="color:var(--amber, #d8a23f);" title="Running on ${e.current} — this provider's requirements aren't met here.">${X(v.disabledReason||`unavailable here`)}</span>`,M=s.health?.failureCategory,P=t(s.health)?M&&D(M)?` · <span style="color:var(--amber, #d8a23f);" title="A temporary failure — this provider is being skipped until it cools down on its own, so it doesn't keep failing the same way on every request.">cooling down (${h(s.health)} left) — ${X(C(M))}</span>`:` · <span style="color:var(--rust);" title="This needs a person to fix it — it will keep being skipped on every request until you update its configuration below and it succeeds again, not automatically.">needs reconfiguring — ${X(C(M||`other`))}</span>`:``,F=G(s),I=[];F.website&&I.push(`<a href="${X(F.website)}" target="_blank" rel="noopener">Official Website</a>`),F.docs&&I.push(`<a href="${X(F.docs)}" target="_blank" rel="noopener">Documentation</a>`),s.noKeyNeeded?I.push(`<span class="key-status set">No API Key Required</span>`):F.apiKeyUrl&&I.push(`<a href="${X(F.apiKeyUrl)}" target="_blank" rel="noopener">Get API Key</a>`);let L=I.length>0?`<div class="provider-meta provider-links">${I.join(` · `)}</div>`:``,R=!!y||s.adapterId===`coco-ssd`,z=s.lastTestResult&&!(R&&!x)?`<div class="provider-meta" data-test-result style="margin-top:2px; color:${s.lastTestResult.ok?`var(--moss)`:`var(--rust)`};">
            ${s.lastTestResult.ok?`✓`:`✗`} ${X(s.lastTestResult.message)}
            ${s.lastTestResult.latencyMs===void 0?``:` · ${s.lastTestResult.latencyMs}ms`}
            ${s.lastTestResult.healthScore===void 0?``:` · health ${s.lastTestResult.healthScore}/100`}
            · tested ${Z(s.lastTestResult.testedAt)}
          </div>`:s.lastTestResult&&R&&!x?`<div class="provider-meta" data-test-result style="margin-top:2px; color:var(--ink-faint);">Tested ${Z(s.lastTestResult.testedAt)}, but the model isn't currently installed on this device — download it below, then Test again to confirm.</div>`:`<div class="provider-meta" data-test-result></div>`;g.innerHTML=`
        <div class="provider-row-top">
          <div style="display:flex; flex-direction:column; gap:2px; overflow:hidden;">
            <span class="provider-name" style="color:${w};">${X(s.name)}</span>
            <span class="provider-meta">${X(J(s))} · priority ${s.priority} · ${T}${E}${O}${A}${j}${P}</span>
            ${k}
            ${L}
            ${z}
          </div>
          <label style="display:flex; align-items:center; gap:5px; cursor:pointer; flex-shrink:0;" title="${s.noKeyNeeded||s.isBuiltIn||s.apiKey?`Enable or disable this provider`:`Enabled providers activate automatically once you add an API key below`}">
            <input type="checkbox" data-action="toggle" ${s.enabled?`checked`:``} style="width:auto;">
          </label>
        </div>
        ${s.noKeyNeeded?``:`
        <div class="key-row">
          <div style="display:flex; gap:6px;">
            <input type="password" data-action="apiKey" placeholder="API key" value="${X(s.apiKey||``)}" style="flex:1;">
            <button class="ghost-btn small" data-action="toggleVisibility" type="button" title="Show or hide the key">👁</button>
          </div>
        </div>`}
        <div style="display:flex; gap:6px;">
          <button class="ghost-btn small" data-action="edit">Edit</button>
          <button class="ghost-btn small" data-action="test">Test</button>
          <button class="ghost-btn small" data-action="duplicate">Duplicate</button>
          ${s.isBuiltIn?``:`<button class="ghost-btn small" data-action="delete">Delete</button>`}
        </div>
        ${s.downloadable?`<div data-download-status style="margin-top:8px; padding-top:8px; border-top:1px dashed var(--border, #333);"></div>`:``}
      `,g.querySelector(`[data-action="toggle"]`)?.addEventListener(`change`,e=>{let t=e.target.checked;s.adapterId===`puter`&&s.isBuiltIn?r.setPuterEnabledEverywhere(t):r.setEnabled(s.id,t),this.renderList()});let V=g.querySelector(`[data-action="apiKey"]`);V&&(V.addEventListener(`blur`,()=>{let e=V.value.trim();if(e===(s.apiKey||``))return;r.updateProvider(s.id,{apiKey:e}),s.apiKey=e;let t=s.enabled&&(s.noKeyNeeded||!!s.apiKey),n=g.querySelector(`.provider-name`);n&&(n.style.color=t?`var(--moss)`:s.enabled?`var(--rust)`:`var(--ink-faint)`);let i=g.querySelector(`.key-status`);i&&(i.textContent=s.apiKey?`key set`:`no key set — add one below to activate`,i.className=s.apiKey?`key-status set`:`key-status unset`)}),V.addEventListener(`keydown`,e=>{e.key===`Enter`&&V.blur()})),g.querySelector(`[data-action="toggleVisibility"]`)?.addEventListener(`click`,()=>{V&&(V.type=V.type===`password`?`text`:`password`)}),g.querySelector(`[data-action="edit"]`)?.addEventListener(`click`,()=>this.openEditor(s,!1));let U=g.querySelector(`[data-action="test"]`);U?.addEventListener(`click`,async()=>{let e=g.querySelector(`[data-test-result]`);U.disabled=!0,U.textContent=`Testing…`,e&&(e.style.color=`var(--ink-faint)`,e.textContent=`Testing…`);try{let t=await r.testProvider(s.id);s.lastTestResult=t,e&&(e.style.color=t.ok?`var(--moss)`:`var(--rust)`,e.textContent=`${t.ok?`✓`:`✗`} ${t.message}`+(t.latencyMs===void 0?``:` · ${t.latencyMs}ms`)+(t.healthScore===void 0?``:` · health ${t.healthScore}/100`)+` · tested just now`)}finally{U.disabled=!1,U.textContent=`Test`}}),g.querySelector(`[data-action="duplicate"]`)?.addEventListener(`click`,()=>{let e={...s,id:`custom-`+Date.now()+`-`+Math.random().toString(36).slice(2,7),name:s.name+` (copy)`,isBuiltIn:!1,isPreset:!1};r.addProvider(e),this.renderList()}),g.querySelector(`[data-action="delete"]`)?.addEventListener(`click`,()=>{confirm(`Delete "${s.name}"? This can't be undone.`)&&(r.removeProvider(s.id),this.renderList())});let W=g.querySelector(`[data-download-status]`);if(W&&s.downloadable){if(s.adapterId===`coco-ssd`){let e=()=>{let t=H()||i();W.innerHTML=t?`<div style="display:flex; align-items:center; gap:8px;"><span style="color:var(--sage, #4a9d6a); font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.04em;">Installed</span><span class="hint" style="margin:0;">~6MB</span><button class="ghost-btn small" data-action="coco-inline-delete" style="margin-left:auto;">Delete</button></div>`:`<div style="display:flex; align-items:center; gap:8px;"><span style="color:var(--ink-faint); font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.04em;">Not installed</span><span class="hint" style="margin:0;">~6MB</span><button class="ghost-btn small" data-action="coco-inline-download" style="margin-left:auto;">Download</button></div>`,W.querySelector(`[data-action="coco-inline-download"]`)?.addEventListener(`click`,async t=>{let n=t.currentTarget;n.disabled=!0,n.textContent=`Downloading…`;try{await _(e=>B.info(e)),r.updateProvider(s.id,{enabled:!0})}catch(e){B.warn(`COCO-SSD install failed: ${e?.message||e}`)}finally{e()}}),W.querySelector(`[data-action="coco-inline-delete"]`)?.addEventListener(`click`,()=>{confirm(`Delete the downloaded COCO-SSD model? You'll go through the one-time load again next time.`)&&(a(),e())})};e()}else y&&s.defaultModel&&(W.innerHTML=this.renderLocalModelStatus(s.defaultModel,y.task,y.role),this.wireLocalModelStatusButtons(W,s.defaultModel,y.task,y.role))}n.appendChild(g)})}async renderDiagnostics(){let t=document.getElementById(`diagnosticsDeviceInfo`),n=document.getElementById(`diagnosticsTable`);if(!t||!n)return;let r=document.getElementById(`diagnosticsBuildInfo`);r&&(r.textContent=`Build: 1912799 · ${new Date(`2026-08-25T20:04:03.352Z`).toLocaleString()} · ${e.current}`+(e.isSecureContext?` · https`:` · http`)),t.textContent===``&&(t.textContent=`Detecting GPU/WebGPU support…`);let i=await O(),a=performance.memory?.usedJSHeapSize?`${(performance.memory.usedJSHeapSize/1048576).toFixed(0)}MB`:null;t.innerHTML=`Transformers.js backend: <b style="color:${i===`webgpu`?`var(--sage, #4a9d6a)`:`var(--ink)`};">${i===`webgpu`?`WebGPU (accelerated)`:`WASM/CPU`}</b>`+(a?` · JS heap: ${a} <span class="opt">(Chrome only, approximate — doesn't include WASM/GPU memory)</span>`:` · Memory usage: not exposed by this browser`),n.innerHTML=this.kernel.getProviderManager().getProviders().sort((e,t)=>e.priority-t.priority||e.name.localeCompare(t.name)).map(e=>{let t=e.successRate===void 0?`—`:`${Math.round(e.successRate*100)}%`,n=e.averageLatency===void 0?`—`:`${Math.round(e.averageLatency)}ms`,r=e.timeoutCount||0,i=e.health,a=i?.lastError?x(i.lastError):null,o=i?.cooldownUntil&&i.cooldownUntil>Date.now()&&a&&D(a)?` · cooling down (${h(i)})`:i?.cooldownUntil&&i.cooldownUntil>Date.now()?` · will be skipped until reconfigured`:``,s=i?.lastError?X(i.lastError.slice(0,80))+(i.lastError.length>80?`…`:``):``,c=ee(e,N(e));return`
        <div style="display:flex; flex-direction:column; gap:1px; padding:6px 8px; border-radius:6px; background:var(--panel-2, rgba(127,127,127,0.06));">
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <span style="width:7px; height:7px; border-radius:50%; background:${c.color}; flex-shrink:0;"></span>
            <b style="font-size:12px;">${X(e.name)}</b>
            <span class="hint" style="margin:0; color:${c.color};">${c.label}</span>
            <span class="hint" style="margin:0;">${X(J(e))}${o}</span>
          </div>
          <div class="hint" style="margin:0; font-family:var(--mono); font-size:10px;">
            success ${t} · avg latency ${n} · timeouts ${r}${s?` · last error: ${s}`:``}
          </div>
        </div>
      `}).join(``)}async renderStorageInfo(){let e=document.getElementById(`localModelsStorageInfo`);if(!e)return;let t=await m();if(!t.supported){e.textContent=`This browser doesn't report storage usage — models are still cached normally, just without a usage/quota readout here.`;return}let n=t.quotaBytes>0?Math.round(t.usageBytes/t.quotaBytes*100):0,r=t.persisted?`<span style="color:var(--sage, #4a9d6a);">protected from automatic eviction</span>`:`<span style="color:var(--amber, #d8a23f);">NOT protected</span> — the browser may silently clear cached models under low disk space, which is the most common cause of a download appearing to "restart from scratch"`;e.innerHTML=`Storage used by this site: ${A(t.usageBytes)} of ${A(t.quotaBytes)} available (${n}%) · ${r}.`}renderLocalModelsList(){let e=document.getElementById(`localModelsList`);if(!e)return;let t=this.kernel.getProviderManager(),i=[];t.getProviders(`text`).concat(t.getProviders(`audio`),t.getProviders(`music`),t.getProviders(`embeddings`),t.getProviders(`autonomous`)).filter(e=>e.adapterId===`transformers`).forEach(e=>{let t=N(e);t&&i.push({label:`${e.name}`,task:t.task,role:t.role,providerId:e.id})}),i.push({label:`Summarization (used by Documents/Research when summarizing text)`,task:`summarization`},{label:`Translation (English source only, see model notes)`,task:`translation`},{label:`OCR (reading text in images, used by Vision)`,task:`image-to-text`,role:`ocr`}),e.innerHTML=``;let a=i.some(({task:e,role:n,providerId:r})=>{let i=y(e,n),a=r?t.getProviders().find(e=>e.id===r):void 0,o=a?a.defaultModel||s(e,n)||i[0]?.id:v(e,n);return f(o||``,e,n)?.status===`ready`}),o=s(`text-generation`),c=!!o&&[`downloading`,`queued`,`paused`].includes(f(o,`text-generation`)?.status||``);if(!a&&!c){let t=s(`text-generation`),i=t?r(t):void 0;if(i){let t=document.createElement(`div`);t.className=`local-model-row`,t.style.cssText=`border:1px solid var(--sage, #4a9d6a); background:color-mix(in srgb, var(--sage, #4a9d6a) 10%, transparent);`,t.innerHTML=`
          <label class="field-label" style="color:var(--sage, #4a9d6a);">Recommended for most MAGENAIS features</label>
          <p class="hint" style="margin:4px 0 8px;"><strong>${X(i.displayName)}</strong> — small download, fast inference, good quality, and the best balance for most MAGENAIS features running entirely on this device.</p>
          <ul class="hint" style="margin:0 0 8px 18px; padding:0;">
            <li>Small download (~${i.downloadSizeMB}MB)</li>
            <li>Fast inference</li>
            <li>Good quality for its size</li>
            <li>Best balance for most MAGENAIS features</li>
          </ul>
          <button class="ghost-btn small" id="recommendedModelInstallBtn">Install now</button>
        `,t.querySelector(`#recommendedModelInstallBtn`)?.addEventListener(`click`,e=>{let t=e.currentTarget;t.disabled=!0,t.textContent=`Starting…`,n(i.id,`text-generation`)}),e.appendChild(t)}}let l=!1,u=!1,d=()=>{if(l)return;l=!0;let t=document.createElement(`div`);t.style.cssText=`margin:14px 0 6px; padding-top:10px; border-top:1px solid var(--border, #333);`,t.innerHTML=`<div style="font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.06em; color:var(--ink-faint);">Autonomous — Object Detection</div><p class="hint" style="margin:2px 0 0;">Used by the Autonomous tab's Downloadable providers (COCO-SSD, YOLOS/DETR) — the built-in OpenPilot/Browser Vision engines need none of this.</p>`,e.appendChild(t)};i.forEach(({label:n,task:i,role:a,providerId:o})=>{let c=y(i,a);if(c.length===0)return;i===`object-detection`&&d();let l=o?t.getProviders().find(e=>e.id===o):void 0,f=l?l.defaultModel||s(i,a)||c[0]?.id:v(i,a),p=r(f||``)||c[0],m=document.createElement(`div`);m.className=`local-model-row`,m.dataset.localModelId=p?.id||``,m.innerHTML=`
        <label class="field-label">${X(n)}</label>
        <select data-task="${i}" ${a?`data-role="${a}"`:``} ${o?`data-provider-id="${X(o)}"`:``}>
          ${c.map(e=>`<option value="${X(e.id)}" ${e.id===f?`selected`:``}>${X(e.displayName)}${e.recommended?` (recommended)`:``}</option>`).join(``)}
        </select>
        <p class="hint" data-meta style="margin-top:4px;"></p>
        <div data-status-area style="margin-top:6px;"></div>
      `;let h=m.querySelector(`select`),g=m.querySelector(`[data-meta]`),_=m.querySelector(`[data-status-area]`),x=()=>{let e=r(h.value);g.textContent=e?`~${e.downloadSizeMB}MB download · ~${e.ramRequirementMB}MB RAM · ${e.quantization}${e.notes?` — ${e.notes}`:``}`:``},S=()=>{let e=r(h.value);if(!e){_.innerHTML=``;return}_.innerHTML=this.renderLocalModelStatus(e.id,i,a),this.wireLocalModelStatusButtons(_,e.id,i,a)};x(),S(),h.addEventListener(`change`,()=>{let e=f;o?t.updateProvider(o,{defaultModel:h.value}):b(i,h.value,a),m.dataset.localModelId=h.value,x(),S(),e&&e!==h.value&&F(e)}),e.appendChild(m),i===`object-detection`&&!u&&(u=!0,this.renderCocoSsdRow(e))}),this.renderWebLLMRow(e),u||this.renderCocoSsdRow(e)}renderCocoSsdRow(e){if(!this.kernel.getProviderManager().getProvider(`builtin-transformers-autonomous`))return;let t=document.createElement(`div`);t.className=`local-model-row`,t.dataset.cocoSsdRow=`true`;let n=()=>{let e=``;e=H()||i()?`
          <span class="hint" style="color:var(--sage, #4a9d6a);">INSTALLED</span>
          <button class="ghost-btn small" data-action="coco-delete" style="margin-left:8px;">Delete</button>
        `:`<button class="ghost-btn small" data-action="coco-install">Install now</button>`,t.innerHTML=`
        <label class="field-label">COCO-SSD — TensorFlow.js Object Detection (Downloadable)</label>
        <p class="hint" style="margin:4px 0 8px;">Real class-labeled object detection (person, car, dog, etc.) for the Autonomous tab — an alternative to the built-in OpenPilot/Browser Vision engines (which detect "something is there" but can't name it) or YOLOS/DETR below. ~6MB, downloaded once and cached by the browser.</p>
        <div data-coco-status>${e}</div>
      `,t.querySelector(`[data-action="coco-install"]`)?.addEventListener(`click`,async e=>{let t=e.currentTarget;t.disabled=!0,t.textContent=`Downloading…`;try{await _(e=>B.info(e)),this.kernel.getProviderManager().updateProvider(`builtin-transformers-autonomous`,{enabled:!0})}catch(e){B.warn(`COCO-SSD install failed: ${e?.message||e}`)}finally{n()}}),t.querySelector(`[data-action="coco-delete"]`)?.addEventListener(`click`,()=>{confirm(`Delete the downloaded COCO-SSD model? This clears its installed state — you'll go through the one-time load again next time.`)&&(a(),n())})};n(),e.appendChild(t)}renderWebLLMRow(e){let t=typeof navigator<`u`&&!!navigator.gpu,n=this.kernel.getProviderManager().getProviders().find(e=>e.adapterId===`webllm`&&!e.visionOnly)?.defaultModel||`Llama-3.2-1B-Instruct-q4f16_1-MLC`,r=document.createElement(`div`);r.className=`local-model-row`,r.dataset.webllmRow=`true`;let i=()=>{let e=P(n),i=``;i=t?e.status===`ready`?`
          <span class="hint" style="color:var(--sage, #4a9d6a);">INSTALLED${e.installedAt?` · installed ${Z(e.installedAt)}`:``}</span>
          <button class="ghost-btn small" data-action="webllm-delete" style="margin-left:8px;">Delete</button>
        `:e.status===`downloading`?`
          <div style="margin-top:4px;">
            <span class="hint">DOWNLOADING… ${e.percent}%${e.statusText?` · ${X(e.statusText)}`:``}</span>
            <div style="height:4px; background:var(--border,#333); border-radius:2px; margin-top:4px; overflow:hidden;">
              <div style="height:100%; width:${e.percent}%; background:var(--sage,#4a9d6a);"></div>
            </div>
            <button class="ghost-btn small" data-action="webllm-cancel" style="margin-top:6px;" title="WebLLM can't truly abort an in-progress download — this hides it from view and clears whatever partial cache exists so far, but a substantially-underway download may still finish in the background.">Cancel</button>
          </div>
        `:e.status===`error`?`
          <span class="hint" style="color:var(--rust);">Install failed${e.lastError?`: ${X(e.lastError)}`:``}</span>
          <button class="ghost-btn small" data-action="webllm-install" style="margin-left:8px;">Retry</button>
          <button class="ghost-btn small" data-action="webllm-delete" style="margin-left:8px;">Delete</button>
        `:`<button class="ghost-btn small" data-action="webllm-install">Install now</button>`:`<span class="hint" style="color:var(--rust);">This browser doesn't expose WebGPU — WebLLM can't run here.</span>`,r.innerHTML=`
        <label class="field-label">WebLLM (Browser, WebGPU)</label>
        <p class="hint" style="margin:4px 0 8px;">WebLLM and Transformers.js Text above are independent alternatives — you only need ONE installed to use Local AI, not both. WebLLM generally gives better answers and needs a WebGPU-capable browser (current Chrome/Edge); Transformers.js is smaller and works via WASM on any modern browser, including ones without WebGPU. Install whichever fits this device — or both, if you switch between browsers/devices often.</p>
        <p class="hint" style="margin:0 0 8px;">Model: <strong>${X(n)}</strong> — roughly 700MB-1GB, downloaded once and cached by the browser.</p>
        <div data-webllm-status>${i}</div>
      `,r.querySelector(`[data-action="webllm-install"]`)?.addEventListener(`click`,async e=>{let t=e.currentTarget;t.disabled=!0,t.textContent=`Starting…`;try{await T(n,e=>B.info(e))}catch{}}),r.querySelector(`[data-action="webllm-delete"]`)?.addEventListener(`click`,async e=>{if(!confirm(`Delete the downloaded WebLLM model? This frees its storage — you'll need to download it again to use it.`))return;let t=e.currentTarget;t.disabled=!0,await k(n,e=>B.info(e))}),r.querySelector(`[data-action="webllm-cancel"]`)?.addEventListener(`click`,async()=>{await L(n,e=>B.info(e))})};i(),e.appendChild(r),E(n).then(()=>i()),this.webllmUnsub?.(),this.webllmUnsub=R(()=>i())}renderLocalModelStatus(e,t,n){let r=f(e,t,n),i=r?.status||`not-installed`,a={"not-installed":`var(--ink-faint)`,queued:`var(--azure)`,downloading:`var(--azure)`,paused:`var(--amber, #d8a23f)`,ready:`var(--sage, #4a9d6a)`,error:`var(--rust)`,corrupted:`var(--rust)`},o={"not-installed":`Not installed`,queued:`Queued…`,downloading:`Downloading…`,paused:`Paused`,ready:`Installed`,error:`Failed`,corrupted:`Corrupted`},s=r&&r.bytesTotal>0?Math.round(r.bytesDownloaded/r.bytesTotal*100):0,c=r&&r.bytesTotal>0?` (${A(r.bytesDownloaded)} / ${A(r.bytesTotal)})`:``,l=i===`downloading`&&r?.bytesPerSecond?` · ${A(r.bytesPerSecond)}/s`:``,u=i===`downloading`&&r?.etaSeconds!==void 0?` · ${Q(r.etaSeconds)} left`:``,d=i===`ready`&&r?.installedAt?` · installed ${Z(r.installedAt)}`:``,p=(i===`error`||i===`corrupted`)&&r?.lastError?` — ${X(r.lastError)}`:``,m=[];(i===`not-installed`||i===`error`||i===`corrupted`)&&m.push(`<button class="ghost-btn small" data-action="download">Download</button>`),(i===`downloading`||i===`queued`)&&m.push(`<button class="ghost-btn small" data-action="pause">Pause</button>`,`<button class="ghost-btn small" data-action="cancel">Cancel</button>`),i===`paused`&&m.push(`<button class="ghost-btn small" data-action="resume">Resume</button>`,`<button class="ghost-btn small" data-action="cancel">Cancel</button>`),i===`ready`&&m.push(`<button class="ghost-btn small" data-action="verify">Verify</button>`,`<button class="ghost-btn small" data-action="delete">Delete</button>`),(i===`paused`||i===`error`||i===`corrupted`)&&m.push(`<button class="ghost-btn small" data-action="delete">Delete</button>`);let h=i===`downloading`||i===`queued`?`<div class="local-model-progress"><div class="local-model-progress-fill" style="width:${s}%;"></div></div>`:``;return`
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span style="color:${a[i]}; font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.04em;">${o[i]}</span>
        <span class="hint" style="margin:0;">${s>0&&(i===`downloading`||i===`queued`)?`${s}%${c}${l}${u}`:``}${d}${p}</span>
        <div style="display:flex; gap:6px; margin-left:auto;">${m.join(``)}</div>
      </div>
      ${h}
    `}wireLocalModelStatusButtons(e,t,r,i){e.querySelector(`[data-action="download"]`)?.addEventListener(`click`,()=>{n(t,r,i).catch(()=>{})}),e.querySelector(`[data-action="resume"]`)?.addEventListener(`click`,()=>{g(t,r,i).catch(()=>{})}),e.querySelector(`[data-action="pause"]`)?.addEventListener(`click`,()=>d(t,r,i)),e.querySelector(`[data-action="cancel"]`)?.addEventListener(`click`,()=>p(t,r,i)),e.querySelector(`[data-action="delete"]`)?.addEventListener(`click`,async e=>{if(!confirm(`Delete the downloaded "${t.split(`/`).pop()}" model? This frees its storage — you'll need to download it again to use it.`))return;let n=e.currentTarget;n.disabled=!0,n.textContent=`Deleting…`,await j(t,r,i)}),e.querySelector(`[data-action="verify"]`)?.addEventListener(`click`,async e=>{let n=e.currentTarget,a=n.textContent;n.disabled=!0,n.textContent=`Verifying…`;let o=await U(t,r,i);n.disabled=!1,n.textContent=a,alert(o.message)})}openEditor(e,t){let n=document.getElementById(`providerEditModal`);n&&n.remove();let i=N(e);n=document.createElement(`div`),n.className=`modal-backdrop`,n.id=`providerEditModal`,n.innerHTML=`
      <div class="modal" style="max-width:560px;">
        <button class="modal-close" id="closeProviderEdit">×</button>
        <h3>${t?`Add Provider`:`Edit Provider`}</h3>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Name</label>
            <input type="text" id="pe-name" value="${X(e.name)}">
          </div>
          <div class="field">
            <label class="field-label">Priority <span class="opt">lower runs first</span></label>
            <input type="number" id="pe-priority" value="${e.priority}">
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Type</label>
            <select id="pe-type">
              ${K.filter(e=>e.value!==`all`).map(t=>`<option value="${t.value}" ${t.value===e.type?`selected`:``}>${t.label}</option>`).join(``)}
            </select>
          </div>
          <div class="field">
            <label class="field-label">Adapter</label>
            <select id="pe-adapterId">
              ${Y.map(t=>`<option value="${t}" ${t===e.adapterId?`selected`:``}>${t}</option>`).join(``)}
            </select>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Base URL</label>
          <input type="text" id="pe-baseUrl" value="${X(e.baseUrl||``)}" placeholder="https://api.example.com/v1">
        </div>
        <div class="field">
          <label class="field-label">API key <span class="opt">leave blank if not required</span></label>
          <input type="password" id="pe-apiKey" value="${X(e.apiKey||``)}">
        </div>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Auth type</label>
            <select id="pe-authType">
              <option value="bearer" ${e.authType===`bearer`?`selected`:``}>Bearer token</option>
              <option value="header" ${e.authType===`header`?`selected`:``}>Custom header</option>
              <option value="query" ${e.authType===`query`?`selected`:``}>Query param</option>
              <option value="none" ${e.authType===`none`?`selected`:``}>None</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Auth field name</label>
            <input type="text" id="pe-authFieldName" value="${X(e.authHeaderName||e.authQueryParam||`Authorization`)}">
          </div>
        </div>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Default model${i?` <span class="opt">from the Local Model Registry</span>`:``}</label>
            ${i?`<select id="pe-defaultModel">
                  ${y(i.task,i.role).map(t=>`<option value="${X(t.id)}" ${(e.defaultModel||``)===t.id?`selected`:``}>${X(t.displayName)}${t.recommended?` (recommended)`:``}</option>`).join(``)}
                </select>
                <p class="hint" id="pe-defaultModel-meta" style="margin-top:4px;"></p>`:`<div style="display:flex; gap:6px;">
                  <input type="text" id="pe-defaultModel" value="${X(e.defaultModel||``)}" style="flex:1;" list="pe-defaultModel-discovered">
                  ${this.kernel.getProviderManager().adapterSupportsModelDiscovery(e.adapterId)?`<button type="button" class="ghost-btn small" id="pe-discoverModels">Discover</button>`:``}
                </div>
                <datalist id="pe-defaultModel-discovered"></datalist>
                <p class="hint" id="pe-discover-status" style="margin-top:4px;"></p>`}
          </div>
          <div class="field">
            <label class="field-label">Timeout (ms)</label>
            <input type="number" id="pe-timeoutMs" value="${e.timeoutMs||3e4}">
          </div>
        </div>
        <label style="display:flex; align-items:center; gap:6px; margin:10px 0; cursor:pointer;">
          <input type="checkbox" id="pe-noKeyNeeded" style="width:auto;" ${e.noKeyNeeded?`checked`:``}>
          <span class="field-label" style="margin:0;">No API key needed</span>
        </label>
        <label style="display:flex; align-items:center; gap:6px; margin:10px 0; cursor:pointer;" title="For providers that can ONLY caption/analyze images, not answer general text prompts. Keeps it out of the Text fallback chain and lists it under the Vision filter instead.">
          <input type="checkbox" id="pe-visionOnly" style="width:auto;" ${e.visionOnly?`checked`:``}>
          <span class="field-label" style="margin:0;">Vision-only <span class="opt">image captioning/analysis, not general text</span></span>
        </label>
        <label style="display:flex; align-items:center; gap:6px; margin:10px 0; cursor:pointer;" title="Route this provider's requests through the app's own local CORS proxy instead of calling it directly from the browser. Needed for APIs that don't send CORS headers for browser calls (e.g. api.cloudflare.com, fal.run, replicate.com) — without it those fail with a generic, contextless 'Failed to fetch' before the request ever leaves the browser. Turn off if you've set up your own proxy/CORS workaround for this provider.">
          <input type="checkbox" id="pe-requiresServerProxy" style="width:auto;" ${e.requiresServerProxy?`checked`:``}>
          <span class="field-label" style="margin:0;">Route through local CORS proxy <span class="opt">needed for APIs with no browser CORS support</span></span>
        </label>
        <div class="field">
          <label class="field-label">Extra headers <span class="opt">optional — JSON object, sent on every request to this provider</span></label>
          <textarea id="pe-headers" rows="2" placeholder='{"Service-CRN": "crn:v1:...", "IBM-API-Version": "2026-04-15"}'>${X(typeof e.headers==`string`?e.headers:e.headers?JSON.stringify(e.headers):``)}</textarea>
          <p class="hint" id="pe-headers-error" style="margin-top:4px; display:none; color:var(--rust);"></p>
          <p class="hint" style="margin-top:4px;">Some providers need a header beyond the API key/Bearer token above — e.g. IBM Quantum's required "Service-CRN". Leave blank if this provider doesn't need one (most don't).</p>
        </div>
        <div class="field">
          <label class="field-label">Notes <span class="opt">optional</span></label>
          <textarea id="pe-notes" rows="2">${X(e.notes||``)}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Links <span class="opt">optional — shown under this provider in Keys &amp; Providers</span></label>
          <div class="field-row">
            <div class="field">
              <input type="text" id="pe-website" value="${X(e.customLinks?.website||``)}" placeholder="Official website URL">
            </div>
            <div class="field">
              <input type="text" id="pe-docs" value="${X(e.customLinks?.docs||``)}" placeholder="Documentation URL">
            </div>
          </div>
          <input type="text" id="pe-apiKeyUrl" value="${X(e.customLinks?.apiKeyUrl||``)}" placeholder="Get API key URL" style="margin-top:6px;">
          <p class="hint" style="margin-top:4px;">Only needed for a provider we don't already recognize — known vendors (Mistral, DeepSeek, etc.) already show correct links automatically.</p>
        </div>
        <button class="run-btn" id="saveProviderBtn">${t?`Add provider`:`Save changes`}</button>
      </div>
    `,document.body.appendChild(n),n.classList.add(`open`);let a=n;a.querySelector(`#closeProviderEdit`)?.addEventListener(`click`,()=>a.remove()),a.addEventListener(`click`,e=>{e.target===a&&a.remove()});let o=a.querySelector(`#pe-type`),s=a.querySelector(`#pe-visionOnly`),c=()=>{if(!o||!s)return;let e=o.value===`vision`;e&&(s.checked=!0),s.disabled=e};if(c(),o?.addEventListener(`change`,c),i){let t=a.querySelector(`#pe-defaultModel`),n=a.querySelector(`#pe-defaultModel-meta`),i=e.defaultModel,o=()=>{if(!t||!n)return;let e=r(t.value);n.textContent=e?`~${e.downloadSizeMB}MB download · ~${e.ramRequirementMB}MB RAM · ${e.quantization} · ${e.backendCompatibility===`webgpu`?`WebGPU required`:e.backendCompatibility===`both`?`WebGPU or WASM/CPU`:`WASM/CPU`}${e.notes?` — ${e.notes}`:``}`:``};o(),t?.addEventListener(`change`,()=>{o(),i&&i!==t?.value&&F(i)})}a.querySelector(`#pe-discoverModels`)?.addEventListener(`click`,async t=>{let n=t.currentTarget,r=a.querySelector(`#pe-discover-status`),i=a.querySelector(`#pe-defaultModel-discovered`);n.disabled=!0;let o=n.textContent;n.textContent=`Discovering…`;try{let t=await this.kernel.getProviderManager().fetchModelsFor(e.id);i&&(i.innerHTML=t.map(e=>`<option value="${X(e)}">`).join(``)),r&&(r.textContent=t.length>0?`Found ${t.length} installed model(s) — start typing in the field above to see suggestions.`:`Connected, but no models are installed yet.`)}catch(e){r&&(r.textContent=e?.message||`Could not discover models — is the service running?`)}finally{n.disabled=!1,n.textContent=o}}),a.querySelector(`#saveProviderBtn`)?.addEventListener(`click`,()=>{let n=document.getElementById(`pe-authType`).value,r=document.getElementById(`pe-authFieldName`).value.trim(),i=document.getElementById(`pe-headers`).value.trim(),o=document.getElementById(`pe-headers-error`),s;if(i)try{let e=JSON.parse(i);if(!e||typeof e!=`object`||Array.isArray(e))throw Error(`must be a JSON object, e.g. {"Header-Name": "value"}`);s=e,o&&(o.style.display=`none`)}catch(e){o&&(o.textContent=`Extra headers: invalid JSON — ${e.message||e}`,o.style.display=`block`);return}let c=document.getElementById(`pe-type`).value,l=c===`vision`,u={...e,name:document.getElementById(`pe-name`).value.trim()||`Unnamed Provider`,priority:parseInt(document.getElementById(`pe-priority`).value,10)||50,type:l?`text`:c,adapterId:document.getElementById(`pe-adapterId`).value,baseUrl:document.getElementById(`pe-baseUrl`).value.trim(),apiKey:document.getElementById(`pe-apiKey`).value.trim()||void 0,authType:n,authHeaderName:n===`header`||n===`bearer`?r:e.authHeaderName,authQueryParam:n===`query`?r:e.authQueryParam,defaultModel:document.getElementById(`pe-defaultModel`).value.trim()||void 0,timeoutMs:parseInt(document.getElementById(`pe-timeoutMs`).value,10)||3e4,noKeyNeeded:document.getElementById(`pe-noKeyNeeded`).checked,headers:s,visionOnly:l||document.getElementById(`pe-visionOnly`).checked||void 0,requiresServerProxy:document.getElementById(`pe-requiresServerProxy`).checked||void 0,notes:document.getElementById(`pe-notes`).value.trim()||void 0,enabled:t?!0:e.enabled},d=document.getElementById(`pe-website`).value.trim(),f=document.getElementById(`pe-docs`).value.trim(),p=document.getElementById(`pe-apiKeyUrl`).value.trim();u.customLinks=d||f||p?{website:d||void 0,docs:f||void 0,apiKeyUrl:p||void 0}:void 0;let m=S.validate(u);if(!m.valid){alert(`Please fix the following before saving:

`+m.errors.join(`
`));return}let h=this.kernel.getProviderManager();if(t){h.addProvider(u);let e=this.activeFilter===`vision`&&q(u);this.activeFilter!==`all`&&!e&&this.activeFilter!==u.type&&(this.activeFilter=u.visionOnly?`vision`:u.type,document.querySelectorAll(`#providerTypeFilterChips .chip`).forEach(e=>{e.classList.toggle(`active`,e.dataset.val===this.activeFilter)}))}else h.updateProvider(e.id,u);a.remove(),this.renderList()})}handleReset(){confirm(`Reset all providers to defaults? Any custom providers and saved API keys will be lost.`)&&this.kernel.getProviderManager().resetToDefaults(V).then(()=>{z(this.kernel),this.renderList(),this.close(),this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})})}handleClearData(){confirm(`Clear all saved provider data (including API keys) from this device? This cannot be undone.`)&&this.kernel.getProviderManager().clearAllData().then(()=>{this.renderList(),this.close(),this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})})}};export{ne as SettingsModal};