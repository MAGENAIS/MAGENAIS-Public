import{t as e}from"./Mode-BiZxIkxj.js";var t=class extends e{activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Prompt</label>
        <textarea id="promptInput" rows="5" placeholder="A drone shot slowly rising over a misty mountain valley..."></textarea>
      </div>
      <div class="field">
        <label class="field-label">Duration</label>
        <div class="slider-row">
          <input type="range" id="vidDuration" min="2" max="8" step="1" value="4">
          <span class="slider-val" id="vidDurationVal">4s</span>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Aspect ratio</label>
        <div class="chip-group" id="vidAspectChips">
          <span class="chip active" data-val="16:9">16:9</span>
          <span class="chip" data-val="9:16">9:16</span>
          <span class="chip" data-val="1:1">1:1</span>
        </div>
      </div>
      <details class="adv" open>
        <summary>Quality</summary>
        <div class="adv-body">
          <div class="field">
            <label class="field-label">Model</label>
            <select id="vidModel">
              <option value="wan" selected>wan (best free-tier real video)</option>
              <option value="seedance">seedance (higher quality, may require paid credits)</option>
              <option value="nova-reel">nova-reel (Amazon, longer clips up to 120s)</option>
              <option value="veo">veo (Google, alpha – often paid-only)</option>
            </select>
          </div>
          <label class="field-label" style="cursor:pointer; flex-direction:row; justify-content:flex-start; gap:6px;">
            <input type="checkbox" id="vidFallbackOK" checked style="width:auto;">Allow Ken-Burns fallback if no video model responds
          </label>
        </div>
      </details>
      <div id="vidKeyWarning"></div>
      ${this.renderPipelineHint(`video`)}
      <button class="run-btn" id="runBtn">▸ Generate Video</button>
    `);let e=document.getElementById(`vidDuration`),t=document.getElementById(`vidDurationVal`);e?.addEventListener(`input`,()=>{t&&(t.textContent=e.value+`s`)}),document.querySelectorAll(`#vidAspectChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#vidAspectChips .chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})});let n=document.getElementById(`vidKeyWarning`);if(n){let e=this.kernel.getProviderManager().getProviders(`video`,!0).filter(e=>e.adapterId!==`internal-fallback`);n.innerHTML=e.some(e=>e.noKeyNeeded||!!e.apiKey)?`<p class="hint" style="color:var(--ink-faint);">${e.filter(e=>e.noKeyNeeded||!!e.apiKey).length} real video provider(s) configured (${e.filter(e=>e.noKeyNeeded||!!e.apiKey).map(e=>e.name).join(`, `)}) — generation will use these first and only fall back to a panned still image if all of them fail.</p>`:`<p class="hint" style="color:var(--rust); border:1px solid var(--rust); border-radius:var(--radius); padding:8px 10px;">No real video provider is configured — every generation will fall back to a panned still image. Add a key for Hugging Face, Pollinations Video, or another video provider in Keys &amp; Providers.</p>`}document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleGenerate()))}async handleGenerate(){let e=document.getElementById(`promptInput`)?.value.trim();if(!e){alert(`Enter a prompt.`);return}let t=parseInt(document.getElementById(`vidDuration`)?.value||`4`),n=document.querySelector(`#vidAspectChips .chip.active`)?.dataset.val||`16:9`,r=document.getElementById(`vidModel`)?.value||`wan`,i=document.getElementById(`vidFallbackOK`)?.checked??!0,a={id:`vid-`+Date.now(),name:`Video Generation`,graph:{nodes:[{id:`vid1`,type:`video`,label:`Video Generator`,config:{model:r,duration:t,aspect:n,allowFallback:i},inputs:{prompt:e},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},o=this.outputPanel.querySelector(`.stage`);o&&this.renderLoading(`Generating video (may take 30–90s)...`);try{let t=await this.kernel.getWorkflowEngine().execute(a,{prompt:e},(e,t)=>this.appendLog(e,t)),n=t.finalOutput,r=n&&typeof n==`object`?n.url:n,i=t.nodeResults.some(e=>e.nodeId===`vid1`&&e.output?.isFallback);o&&(o.innerHTML=`
          <div class="result-media">
            ${i?`<div class="hint" style="color:var(--rust); border:1px solid var(--rust); border-radius:var(--radius); padding:8px 10px; margin-bottom:4px;"><b>This is a panned still image, not real AI-generated video.</b></div>`:`<div class="hint" style="color:var(--moss);">✓ Real AI-generated video</div>`}
            <video src="${r}" controls autoplay loop muted></video>
            <div class="result-actions">
              <a href="${r}" download="magen-video.webm"><button class="ghost-btn">Download Video</button></a>
            </div>
          </div>`),this.kernel.getStore().getActions().addHistoryEntry({mode:`video`,prompt:e,result:r,resultType:`video`})}catch(e){this.renderError(e)}}deactivate(){}getTitle(){return`Video Output`}};export{t as VideoMode};