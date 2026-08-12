import{t as e}from"./Mode-CJtHVb22.js";var t=[`JavaScript`,`TypeScript`,`HTML/CSS/JS (Web)`,`Python`,`Java`,`C`,`C++`,`C#`,`Go`,`Rust`,`PHP`,`Swift`,`Kotlin`,`SQL`,`Bash`],n=class extends e{activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">What do you want to build?</label>
        <textarea id="promptInput" rows="6" placeholder="e.g. A function that validates an email address, with unit tests."></textarea>
      </div>
      <div class="field">
        <label class="field-label">Language</label>
        <select id="codingLanguage">
          ${t.map(e=>`<option value="${e}">${e}</option>`).join(``)}
        </select>
      </div>
      <p class="hint">Runs through the same text-provider fallback chain as Text &amp; Voice — any capable model can write code, so no separate setup is needed beyond your usual text provider key.</p>
      ${this.renderPipelineHint(`text`)}
      <button class="run-btn" id="runBtn">▸ Generate Code</button>
    `),document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleRun()))}async handleRun(){let e=document.getElementById(`promptInput`)?.value.trim();if(!e){alert(`Describe what you want to build.`);return}let t=document.getElementById(`codingLanguage`)?.value||`JavaScript`,n=this.outputPanel.querySelector(`.stage`);n&&this.renderLoading(`Writing code…`);let r={id:`coding-`+Date.now(),name:`Coding`,graph:{nodes:[{id:`code1`,type:`coding`,label:`Code Generator`,config:{language:t},inputs:{prompt:e},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let i=(await this.kernel.getWorkflowEngine().execute(r,{prompt:e},(e,t)=>this.appendLog(e,t))).finalOutput||`No output`;n&&(n.innerHTML=`<div class="result-text">${this.renderMarkdown(i)}</div>`,this.wireCodeCopyButtons(n)),this.kernel.getStore().getActions().addHistoryEntry({mode:`coding`,prompt:`[${t}] ${e}`,result:i,resultType:`text`})}catch(e){this.renderError(e)}}deactivate(){}getTitle(){return`Code Output`}};export{n as CodingMode};