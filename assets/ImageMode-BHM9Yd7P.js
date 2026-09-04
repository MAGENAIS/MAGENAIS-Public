import{t as e}from"./Mode-GEMYOo3Y.js";var t=class extends e{sourceImageUrl=null;sourceImageLabel=null;activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Prompt <span id="promptLabelSuffix" style="text-transform:none;color:var(--ink-faint);"></span></label>
        <textarea id="promptInput" rows="5" placeholder="A low-poly Achaemenid palace at golden hour..."></textarea>
      </div>
      <div class="field">
        <label class="field-label">Style</label>
        <div class="chip-group" id="imageStyleChips">
          <span class="chip active" data-val="">None</span>
          <span class="chip" data-val="photorealistic, ultra detailed, 8k, sharp focus, professional photography">Photoreal</span>
          <span class="chip" data-val="anime style, cel shaded, vibrant colors, detailed line art">Anime</span>
          <span class="chip" data-val="oil painting, fine art, painterly brushstrokes, gallery quality">Painterly</span>
          <span class="chip" data-val="low poly 3d render, clean geometry, soft studio lighting">Low-poly 3D</span>
          <span class="chip" data-val="pixel art, 16-bit, crisp pixels, retro game aesthetic">Pixel art</span>
        </div>
      </div>
      <div class="field-row">
        <div class="field">
          <label class="field-label">Width</label>
          <select id="imgWidth">
            <option value="768">768</option>
            <option value="1024" selected>1024</option>
            <option value="1280">1280</option>
          </select>
        </div>
        <div class="field">
          <label class="field-label">Height</label>
          <select id="imgHeight">
            <option value="768">768</option>
            <option value="1024" selected>1024</option>
            <option value="1280">1280</option>
            <option value="720">720</option>
          </select>
        </div>
      </div>
      <details class="adv" id="editSection">
        <summary>Edit Existing Image <span style="text-transform:none;color:var(--ink-faint);">(image-to-image)</span></summary>
        <div class="adv-body">
          <div class="field">
            <div class="dropzone" id="editDropzone">
              <div class="dz-icon">⎘</div>
              <div class="dz-text">Click or drag an image to edit</div>
              <div class="dz-sub">PNG or JPEG — describe the change in Prompt above, then Generate</div>
            </div>
            <input type="file" id="editFileInput" accept=".png,.jpg,.jpeg,.webp" style="display:none;">
            <div id="editPreviewWrap"></div>
          </div>
        </div>
      </details>
      <details class="adv" open>
        <summary>Quality</summary>
        <div class="adv-body">
          <div class="field">
            <label class="field-label">Model</label>
            <select id="imgModel">
              <option value="flux" selected>flux (best quality, recommended)</option>
              <option value="gptimage">gptimage (high fidelity, needs key)</option>
              <option value="turbo">turbo (fast, lower detail)</option>
            </select>
          </div>
          <div class="field">
            <label class="field-label">Seed <span style="text-transform:none;color:var(--ink-faint);">blank = random</span></label>
            <input type="text" id="imgSeed" placeholder="e.g. 42" autocomplete="off" inputmode="numeric" pattern="[0-9]*">
            <p class="hint" id="imgSeedWarning" style="display:none; color:var(--warn, #d9a441);"></p>
          </div>
        </div>
      </details>
      ${this.renderPipelineHint(`image`)}
      <button class="run-btn" id="runBtn">▸ Generate Image</button>
    `),this.wireChips(),this.wireEditDropzone(),this.updateEditModeUI(),document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleGenerate()))}wireChips(){document.querySelectorAll(`#imageStyleChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#imageStyleChips .chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})})}wireEditDropzone(){let e=document.getElementById(`editDropzone`),t=document.getElementById(`editFileInput`);!e||!t||(e.addEventListener(`click`,()=>t.click()),t.addEventListener(`change`,()=>{t.files&&t.files[0]&&this.loadSourceImageFile(t.files[0])}),e.addEventListener(`dragover`,t=>{t.preventDefault(),e.classList.add(`drag`)}),e.addEventListener(`dragleave`,()=>e.classList.remove(`drag`)),e.addEventListener(`drop`,t=>{t.preventDefault(),e.classList.remove(`drag`),t.dataTransfer?.files[0]&&this.loadSourceImageFile(t.dataTransfer.files[0])}))}loadSourceImageFile(e){if(!e.type.startsWith(`image/`)){alert(`Please choose an image file (PNG or JPEG).`);return}let t=new FileReader;t.onload=()=>this.setSourceImage(String(t.result),e.name),t.onerror=()=>alert(`Could not read that image file.`),t.readAsDataURL(e)}setSourceImage(e,t){this.sourceImageUrl=e,this.sourceImageLabel=e?t:null;let n=document.getElementById(`editSection`);n&&e&&(n.open=!0),this.renderEditPreview(),this.updateEditModeUI()}renderEditPreview(){let e=document.getElementById(`editPreviewWrap`);if(e){if(!this.sourceImageUrl){e.innerHTML=``;return}e.innerHTML=`
      <div class="file-chip" style="align-items:center; gap:10px;">
        <img src="${this.sourceImageUrl}" alt="Source image" style="width:44px; height:44px; object-fit:cover; border-radius:6px;">
        <span>${this.escapeHtml(this.sourceImageLabel||`Source image`)}</span>
        <button title="Remove">×</button>
      </div>`,e.querySelector(`button`)?.addEventListener(`click`,()=>this.setSourceImage(null,``))}}updateEditModeUI(){let e=document.getElementById(`promptLabelSuffix`),t=document.getElementById(`runBtn`);this.sourceImageUrl?(e&&(e.textContent=`(edit instruction)`),t&&(t.textContent=`▸ Generate Edit`)):(e&&(e.textContent=``),t&&(t.textContent=`▸ Generate Image`))}async handleGenerate(){let e=document.getElementById(`promptInput`)?.value.trim();if(!e){alert(this.sourceImageUrl?`Enter an edit instruction.`:`Enter a prompt.`);return}let t=document.querySelector(`#imageStyleChips .chip.active`)?.dataset.val||``,n=t?`${e}, ${t}`:e,r=document.getElementById(`imgWidth`)?.value||`1024`,i=document.getElementById(`imgHeight`)?.value||`1024`,a=document.getElementById(`imgModel`)?.value||`flux`,o=document.getElementById(`imgSeed`)?.value.trim()||``,s=document.getElementById(`imgSeedWarning`),c;o&&!/^\d+$/.test(o)?(c=void 0,s&&(s.textContent=`"${o}" isn't a valid seed (digits only) — ignoring it and using a random seed instead.`,s.style.display=``)):(c=o||void 0,s&&(s.style.display=`none`));let l=!!this.sourceImageUrl,u={id:`img-`+Date.now(),name:l?`Image Editing`:`Image Generation`,graph:{nodes:[{id:`img1`,type:`image`,label:l?`Image Editor`:`Image Generator`,config:{model:a,width:parseInt(r),height:parseInt(i),seed:c},inputs:{prompt:n,sourceImage:this.sourceImageUrl||void 0},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},d=this.outputPanel.querySelector(`.stage`);d&&this.renderLoading(l?`Applying edit…`:`Generating image...`);try{let e=!1,t=(await this.kernel.getWorkflowEngine().execute(u,{prompt:n,sourceImage:this.sourceImageUrl||void 0},(t,n)=>{/Pollinations \(Free Image, no key\) succeeded/i.test(t)&&(e=!0),this.appendLog(t,n)})).finalOutput,r=`image-${Date.now()}`;d&&(d.innerHTML=`
          <div class="result-media">
            <img src="${t}" alt="${l?`Edited image`:`Generated image`}">
            <div class="result-actions">
              <a href="${t}" download="magen-image.png"><button class="ghost-btn">Download PNG</button></a>
              <button class="ghost-btn" id="editThisBtn">Edit This Image</button>
              <button class="ghost-btn" id="regenBtn">${l?`Edit Again`:`Regenerate`}</button>
            </div>
          </div>
          ${this.renderSaveBar(r)}
          ${e?`
          <p class="hint" style="color:var(--warn, #d9a441);">
            This came from Pollinations' free, no-key endpoint. As of mid-2026 that anonymous tier has gotten
            unreliable — it can return HTTP 200 with a real image that just doesn't match your prompt, with no
            error to catch. If this doesn't look right, hit Regenerate (different image each time), or for
            consistent results get a free API key at
            <a href="https://enter.pollinations.ai" target="_blank" rel="noopener">enter.pollinations.ai</a>
            and add it to the "Pollinations Flux Image" entry in Keys &amp; Providers.
          </p>`:``}
        `,document.getElementById(`regenBtn`)?.addEventListener(`click`,()=>this.runGuarded(`regenBtn`,()=>this.handleGenerate())),document.getElementById(`editThisBtn`)?.addEventListener(`click`,()=>{this.setSourceImage(t,l?`Edited result`:`Generated result`);let e=document.getElementById(`promptInput`);e&&(e.value=``,e.focus()),document.getElementById(`editSection`)?.scrollIntoView({behavior:`smooth`,block:`nearest`})}),this.wireSaveBar(d,r,`image`,()=>n.slice(0,80),()=>this.toPersistentUrl(t),{prompt:n})),this.kernel.getStore().getActions().addHistoryEntry({mode:`image`,prompt:n,result:t,resultType:`image`})}catch(e){this.renderError(e)}}deactivate(){}getTitle(){return`Image Output`}};export{t as ImageMode};