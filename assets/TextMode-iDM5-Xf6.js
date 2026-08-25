import{d as e}from"./main-lbRyivoB.js";import{t}from"./Mode-D11W5XNf.js";import{t as n}from"./VoiceInput-CvaLwtaL.js";var r=class extends t{promptInput=null;activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Prompt <span style="text-transform:none;letter-spacing:0;">tap mic to speak it</span></label>
        <textarea id="promptInput" rows="6" placeholder="Write a short story..."></textarea>
        <div class="mic-row">
          <button class="mic-btn" id="micBtn" title="Speak your prompt">🎙</button>
          <span class="hint" id="micStatus">Voice input: tap to speak</span>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Style / system tone <span style="text-transform:none; letter-spacing:0; color:var(--ink-faint);">optional</span></label>
        <input type="text" id="textStyle" placeholder="e.g. concise, technical, playful, formal" autocomplete="off">
      </div>
      <details class="adv">
        <summary>Advanced</summary>
        <div class="adv-body">
          <div class="field">
            <label class="field-label">Preferred model</label>
            <select id="textModel">
              <option value="openai">openai (general)</option>
              <option value="mistral">mistral</option>
              <option value="claude">claude</option>
              <option value="deepseek">deepseek</option>
              <option value="qwen-coder">qwen-coder</option>
            </select>
          </div>
          <div class="slider-row">
            <label class="field-label" style="min-width:90px;">Temperature</label>
            <input type="range" id="textTemp" min="0" max="2" step="0.1" value="0.8">
            <span class="slider-val" id="textTempVal">0.8</span>
          </div>
        </div>
      </details>
      ${this.renderPipelineHint(`text`)}
      <button class="run-btn" id="runBtn">▸ Generate</button>
    `),this.promptInput=document.getElementById(`promptInput`);let e=document.getElementById(`runBtn`);e&&e.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleGenerate()));let t=document.getElementById(`textTemp`),r=document.getElementById(`textTempVal`);t&&r&&t.addEventListener(`input`,()=>{r.textContent=t.value});let i=document.getElementById(`micBtn`),a=document.getElementById(`micStatus`);i&&n(this.kernel,i,a,e=>{let t=this.promptInput||document.getElementById(`promptInput`);t&&(t.value=(t.value?t.value+` `:``)+e)})}deactivate(){typeof window<`u`&&window.speechSynthesis&&window.speechSynthesis.cancel()}getTitle(){return`Text / Voice Output`}async handleGenerate(){let t=this.promptInput?.value||``;if(!t)return;let n=this.kernel.getWorkflowEngine();this.kernel.getStore();let r=this.outputPanel.querySelector(`.stage`);r&&this.renderLoading(`Generating...`);try{let i={id:`temp-`+Date.now(),name:`Text Generation`,graph:{nodes:[{id:`text1`,type:`text`,label:`Text Generator`,config:{model:document.getElementById(`textModel`)?.value||`openai`,temperature:parseFloat(document.getElementById(`textTemp`)?.value||`0.8`)},inputs:{prompt:t},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},a=(await n.execute(i,{prompt:t},(e,t)=>this.appendLog(e,t))).finalOutput||`No output`,o=`text-${Date.now()}`;r&&(r.innerHTML=`
          <div class="result-text">${this.renderMarkdown(a)}</div>
          ${this.renderReadAloudBlock(e(a))}
          ${this.renderSaveBar(o)}`,this.wireReadAloudControls(),this.wireCodeCopyButtons(r),this.wireSaveBar(r,o,`text`,()=>t.slice(0,80),()=>a)),this.kernel.getStore().getActions().addHistoryEntry({mode:`text`,prompt:t,result:a,resultType:`text`})}catch(e){this.renderError(e)}}};export{r as TextMode};