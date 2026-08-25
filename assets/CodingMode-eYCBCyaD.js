import{t as e}from"./Mode-BgC9PqDe.js";var t=[`JavaScript`,`TypeScript`,`HTML/CSS/JS (Web)`,`Python`,`Java`,`C`,`C++`,`C#`,`Go`,`Rust`,`PHP`,`Swift`,`Kotlin`,`SQL`,`Bash`],n=class extends e{activate(){this.renderControl(`
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
      <p class="hint">Runs through the same text-provider fallback chain as Text &amp; Voice — any capable model can write code, so no separate setup is needed beyond your usual text provider key. For Python, the "Run" button on generated code works for free with no setup at all (runs client-side via Pyodide); other languages need a Code Execution provider configured under Keys &amp; Providers.</p>
      ${this.renderPipelineHint(`text`)}
      <button class="run-btn" id="runBtn">▸ Generate Code</button>
    `),document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleRun()))}async handleRun(){let e=document.getElementById(`promptInput`)?.value.trim();if(!e){alert(`Describe what you want to build.`);return}let t=document.getElementById(`codingLanguage`)?.value||`JavaScript`,n=this.outputPanel.querySelector(`.stage`);n&&this.renderLoading(`Writing code…`);let r={id:`coding-`+Date.now(),name:`Coding`,graph:{nodes:[{id:`code1`,type:`coding`,label:`Code Generator`,config:{language:t},inputs:{prompt:e},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let i=(await this.kernel.getWorkflowEngine().execute(r,{prompt:e},(e,t)=>this.appendLog(e,t))).finalOutput||`No output`,a=`code-${Date.now()}`;n&&(n.innerHTML=`<div class="result-text">${this.renderMarkdown(i)}</div>${this.renderSaveBar(a)}`,this.wireCodeCopyButtons(n),this.wireSaveBar(n,a,`code`,()=>`[${t}] ${e.slice(0,60)}`,()=>i,{parameters:{language:t}})),this.kernel.getStore().getActions().addHistoryEntry({mode:`coding`,prompt:`[${t}] ${e}`,result:i,resultType:`text`})}catch(e){this.renderError(e)}}deactivate(){}getTitle(){return`Code Output`}};export{n as CodingMode};