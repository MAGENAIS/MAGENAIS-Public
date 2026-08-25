import{t as e}from"./Mode-D11W5XNf.js";var t=class extends e{sourceImageUrl=null;sourceImageLabel=null;activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Prompt <span id="promptLabelSuffix" style="text-transform:none;color:var(--ink-faint);"></span></label>
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
      <details class="adv" id="animateSection">
        <summary>Animate an Image <span style="text-transform:none;color:var(--ink-faint);">(image-to-video)</span></summary>
        <div class="adv-body">
          <div class="field">
            <div class="dropzone" id="animateDropzone">
              <div class="dz-icon">⎘</div>
              <div class="dz-text">Click or drag an image to animate</div>
              <div class="dz-sub">PNG or JPEG — describe the motion in Prompt above, then Generate</div>
            </div>
            <input type="file" id="animateFileInput" accept=".png,.jpg,.jpeg,.webp" style="display:none;">
            <div id="animatePreviewWrap"></div>
          </div>
        </div>
      </details>
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
            <p class="hint" style="color:var(--ink-faint);">Only used for text-to-video — Animate an Image always races your configured image-to-video provider(s) instead (see Keys &amp; Providers).</p>
          </div>
          <label class="field-label" style="cursor:pointer; flex-direction:row; justify-content:flex-start; gap:6px;">
            <input type="checkbox" id="vidFallbackOK" checked style="width:auto;">Allow Ken-Burns fallback if no video model responds
          </label>
        </div>
      </details>
      <div id="vidKeyWarning"></div>
      ${this.renderPipelineHint(`video`)}
      <button class="run-btn" id="runBtn">▸ Generate Video</button>
    `);let e=document.getElementById(`vidDuration`),t=document.getElementById(`vidDurationVal`);e?.addEventListener(`input`,()=>{t&&(t.textContent=e.value+`s`)}),document.querySelectorAll(`#vidAspectChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#vidAspectChips .chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})}),this.wireAnimateDropzone(),this.updateAnimateModeUI();let n=document.getElementById(`vidKeyWarning`);if(n){let e=this.kernel.getProviderManager().getProviders(`video`,!0).filter(e=>e.adapterId!==`internal-fallback`);n.innerHTML=e.some(e=>e.noKeyNeeded||!!e.apiKey)?`<p class="hint" style="color:var(--ink-faint);">${e.filter(e=>e.noKeyNeeded||!!e.apiKey).length} real video provider(s) configured (${e.filter(e=>e.noKeyNeeded||!!e.apiKey).map(e=>e.name).join(`, `)}) — generation will use these first and only fall back to a panned still image if all of them fail.</p>`:`<p class="hint" style="color:var(--rust); border:1px solid var(--rust); border-radius:var(--radius); padding:8px 10px;">No real video provider is configured — every generation will fall back to a panned still image. Add a key for Hugging Face, Pollinations Video, or another video provider in Keys &amp; Providers.</p>`}document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleGenerate()))}wireAnimateDropzone(){let e=document.getElementById(`animateDropzone`),t=document.getElementById(`animateFileInput`);!e||!t||(e.addEventListener(`click`,()=>t.click()),t.addEventListener(`change`,()=>{t.files&&t.files[0]&&this.loadSourceImageFile(t.files[0])}),e.addEventListener(`dragover`,t=>{t.preventDefault(),e.classList.add(`drag`)}),e.addEventListener(`dragleave`,()=>e.classList.remove(`drag`)),e.addEventListener(`drop`,t=>{t.preventDefault(),e.classList.remove(`drag`),t.dataTransfer?.files[0]&&this.loadSourceImageFile(t.dataTransfer.files[0])}))}loadSourceImageFile(e){if(!e.type.startsWith(`image/`)){alert(`Please choose an image file (PNG or JPEG).`);return}let t=new FileReader;t.onload=()=>this.setSourceImage(String(t.result),e.name),t.onerror=()=>alert(`Could not read that image file.`),t.readAsDataURL(e)}setSourceImage(e,t){this.sourceImageUrl=e,this.sourceImageLabel=e?t:null;let n=document.getElementById(`animateSection`);n&&e&&(n.open=!0),this.renderAnimatePreview(),this.updateAnimateModeUI()}renderAnimatePreview(){let e=document.getElementById(`animatePreviewWrap`);if(e){if(!this.sourceImageUrl){e.innerHTML=``;return}e.innerHTML=`
      <div class="file-chip" style="align-items:center; gap:10px;">
        <img src="${this.sourceImageUrl}" alt="Source image" style="width:44px; height:44px; object-fit:cover; border-radius:6px;">
        <span>${this.escapeHtml(this.sourceImageLabel||`Source image`)}</span>
        <button title="Remove">×</button>
      </div>`,e.querySelector(`button`)?.addEventListener(`click`,()=>this.setSourceImage(null,``))}}updateAnimateModeUI(){let e=document.getElementById(`promptLabelSuffix`),t=document.getElementById(`runBtn`);this.sourceImageUrl?(e&&(e.textContent=`(motion description)`),t&&(t.textContent=`▸ Animate Image`)):(e&&(e.textContent=``),t&&(t.textContent=`▸ Generate Video`))}async handleGenerate(){let e=document.getElementById(`promptInput`)?.value.trim();if(!e){alert(this.sourceImageUrl?`Describe the motion you want.`:`Enter a prompt.`);return}let t=parseInt(document.getElementById(`vidDuration`)?.value||`4`),n=document.querySelector(`#vidAspectChips .chip.active`)?.dataset.val||`16:9`,r=document.getElementById(`vidModel`)?.value||`wan`,i=document.getElementById(`vidFallbackOK`)?.checked??!0,a=!!this.sourceImageUrl,o={id:`vid-`+Date.now(),name:a?`Image-to-Video Animation`:`Video Generation`,graph:{nodes:[{id:`vid1`,type:`video`,label:a?`Video Animator`:`Video Generator`,config:{model:r,duration:t,aspect:n,allowFallback:i},inputs:{prompt:e,sourceImage:this.sourceImageUrl||void 0},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},s=this.outputPanel.querySelector(`.stage`);s&&this.renderLoading(a?`Animating your image (may take 30–90s)...`:`Generating video (may take 30–90s)...`);try{let t=await this.kernel.getWorkflowEngine().execute(o,{prompt:e,sourceImage:this.sourceImageUrl||void 0},(e,t)=>this.appendLog(e,t)),n=t.finalOutput,r=n&&typeof n==`object`?n.url:n,i=t.nodeResults.some(e=>e.nodeId===`vid1`&&e.output?.isFallback),a=`video-${Date.now()}`;s&&(s.innerHTML=`
          <div class="result-media">
            ${i?`<div class="hint" style="color:var(--rust); border:1px solid var(--rust); border-radius:var(--radius); padding:8px 10px; margin-bottom:4px;"><b>This is a panned still image, not real AI-generated video.</b></div>`:`<div class="hint" style="color:var(--moss);">✓ Real AI-generated video</div>`}
            <video src="${r}" controls autoplay loop muted></video>
            <div class="result-actions">
              <a href="${r}" download="magen-video.webm"><button class="ghost-btn">Download Video</button></a>
            </div>
          </div>
          ${this.renderSaveBar(a)}`,this.wireSaveBar(s,a,`video`,()=>e.slice(0,80),()=>this.toPersistentUrl(r),{prompt:e})),this.kernel.getStore().getActions().addHistoryEntry({mode:`video`,prompt:e,result:r,resultType:`video`})}catch(e){this.renderError(e)}}deactivate(){}getTitle(){return`Video Output`}};export{t as VideoMode};