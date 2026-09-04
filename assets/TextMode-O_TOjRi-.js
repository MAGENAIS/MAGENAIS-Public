import{d as e}from"./main-Cg9pGr5h.js";import{t}from"./Mode-xmVbXuqX.js";import{i as n,r}from"./SymbiosisHandoff-DkpRyW56.js";import{t as i}from"./VoiceInput-CvaLwtaL.js";var a=class extends t{promptInput=null;activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Prompt <span style="text-transform:none;letter-spacing:0;">tap mic to speak it</span></label>
        <textarea id="promptInput" rows="6" placeholder="Write a short story..."></textarea>
        <div class="mic-row">
          <button class="mic-btn" id="micBtn" title="Speak your prompt">🎙</button>
          <span class="hint" id="micStatus">Voice input: tap to speak</span>
          <button class="ghost-btn small" id="mcpToolBtn" type="button" title="Run an MCP tool and insert its result here as context" style="margin-left:auto;">🔌 MCP Tool</button>
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
    `),this.promptInput=document.getElementById(`promptInput`);let e=document.getElementById(`runBtn`);e&&e.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleGenerate()));let t=document.getElementById(`textTemp`),n=document.getElementById(`textTempVal`);t&&n&&t.addEventListener(`input`,()=>{n.textContent=t.value}),document.getElementById(`mcpToolBtn`)?.addEventListener(`click`,async()=>{let e=await this.openMCPToolPicker();if(e){let t=this.promptInput||document.getElementById(`promptInput`);t&&(t.value=(t.value?t.value+`

`:``)+e)}});let r=document.getElementById(`micBtn`),a=document.getElementById(`micStatus`);r&&i(this.kernel,r,a,e=>{let t=this.promptInput||document.getElementById(`promptInput`);t&&(t.value=(t.value?t.value+` `:``)+e)})}deactivate(){typeof window<`u`&&window.speechSynthesis&&window.speechSynthesis.cancel()}getTitle(){return`Text / Voice Output`}async handleGenerate(){let t=this.promptInput?.value||``;if(!t)return;let i=this.kernel.getWorkflowEngine();this.kernel.getStore();let a=this.outputPanel.querySelector(`.stage`);a&&this.renderLoading(`Generating...`);try{let o={id:`temp-`+Date.now(),name:`Text Generation`,graph:{nodes:[{id:`text1`,type:`text`,label:`Text Generator`,config:{model:document.getElementById(`textModel`)?.value||`openai`,temperature:parseFloat(document.getElementById(`textTemp`)?.value||`0.8`)},inputs:{prompt:t},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},s=(await i.execute(o,{prompt:t},(e,t)=>this.appendLog(e,t))).finalOutput||`No output`,c=`text-${Date.now()}`;a&&(a.innerHTML=`
          <div class="result-text">${this.renderMarkdown(s)}</div>
          ${this.renderReadAloudBlock(e(s))}
          ${this.renderSaveBar(c)}
          <div class="studio-quick-actions" style="margin-top:8px;">${r(`Send to Symbiosis`)}</div>`,this.wireReadAloudControls(),this.wireCodeCopyButtons(a),this.wireSaveBar(a,c,`text`,()=>t.slice(0,80),()=>s),n(this.kernel,a,()=>({sourceTab:`Text`,title:t.slice(0,80)||`Text result`,content:s}))),this.kernel.getStore().getActions().addHistoryEntry({mode:`text`,prompt:t,result:s,resultType:`text`})}catch(e){this.renderError(e)}}};export{a as TextMode};