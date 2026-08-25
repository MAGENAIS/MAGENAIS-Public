import{d as e}from"./main-L10RF2M6.js";import{t}from"./Mode-BWw8Ks99.js";var n=[{key:`semanticscholar`,label:`Semantic Scholar`},{key:`openalex`,label:`OpenAlex`},{key:`arxiv`,label:`arXiv`}],r=class extends t{activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Research question</label>
        <textarea id="promptInput" rows="4" placeholder="e.g. What's the current evidence on CRISPR-based gene therapy for sickle cell disease?"></textarea>
      </div>
      <div class="field">
        <label class="field-label">Sources to query <span style="text-transform:none;color:var(--ink-faint);">each runs independently, in parallel</span></label>
        <div class="chip-group" id="researchSourceChips">
          ${n.map(e=>`<span class="chip active" data-val="${e.key}">${e.label}</span>`).join(``)}
        </div>
      </div>
      <div class="field">
        <label class="field-label">Papers per source</label>
        <div class="slider-row">
          <input type="range" id="researchCount" min="3" max="15" step="1" value="6">
          <span class="slider-val" id="researchCountVal">6</span>
        </div>
      </div>
      <p class="hint">Each enabled source acts as an independent agent gathering real papers from free public APIs; results are merged, de-duplicated, and ranked by citation count before a synthesis pass writes the final answer.</p>
      ${this.renderPipelineHint(`research`)}
      <button class="run-btn" id="runBtn">▸ Run Research</button>
    `),document.querySelectorAll(`#researchSourceChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=document.querySelectorAll(`#researchSourceChips .chip.active`).length;e.classList.contains(`active`)&&t<=1||e.classList.toggle(`active`)})});let e=document.getElementById(`researchCount`);e?.addEventListener(`input`,()=>{let t=document.getElementById(`researchCountVal`);t&&(t.textContent=e.value)}),document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleRun()))}async handleRun(){let e=document.getElementById(`promptInput`)?.value.trim();if(!e){alert(`Enter a research question.`);return}let t=Array.from(document.querySelectorAll(`#researchSourceChips .chip.active`)).map(e=>e.dataset.val).filter(Boolean),n=parseInt(document.getElementById(`researchCount`)?.value||`6`,10);this.outputPanel.querySelector(`.stage`)&&this.renderLoading(`Gathering sources…`);let r={id:`research-`+Date.now(),name:`Research`,graph:{nodes:[{id:`research1`,type:`research`,label:`Research Agent`,config:{sources:t,limitPerSource:n},inputs:{query:e},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let t=await this.kernel.getWorkflowEngine().execute(r,{query:e},(e,t)=>this.appendLog(e,t));this.renderResult(t.finalOutput,e),this.kernel.getStore().getActions().addHistoryEntry({mode:`research`,prompt:e,result:t.finalOutput?.summary,resultType:`text`})}catch(e){this.renderError(e)}}renderResult(t,n){let r=this.outputPanel.querySelector(`.stage`);if(!r)return;let{papers:i,sourceStatus:a,summary:o}=t||{},s=``;a&&(s+=`<div class="chip-group" style="margin-bottom:12px;">${a.map(e=>`<span class="chip ${e.status===`ok`?`active`:``}" style="${e.status===`fail`?`opacity:.5;`:``}">${e.name} ${e.status===`ok`?`✓`:`✕`}</span>`).join(``)}</div>`),o&&(s+=`<div class="doc-summary-block" style="margin-bottom:18px;"><div class="result-text">${this.renderMarkdown(o)}</div>${this.renderReadAloudBlock(e(o),`Read Summary Aloud`)}</div>`),i?.length&&(s+=`<p class="field-label">Sources (${i.length})</p>`,s+=i.slice(0,20).map(e=>`
        <div class="paper-card" style="border:1px solid var(--line); border-radius:8px; padding:10px 12px; margin-bottom:8px;">
          <div style="font-weight:600;">${this.escapeHtml(e.title||`Untitled`)}</div>
          <div style="color:var(--ink-faint); font-size:.85em;">${this.escapeHtml(e.authors||`Unknown authors`)} · ${this.escapeHtml(String(e.year||`n.d.`))} · ${this.escapeHtml(String(e.source))}${e.citations==null?``:` · `+this.escapeHtml(String(e.citations))+` citations`}</div>
          ${e.url?`<a href="${this.escapeHtml(e.url)}" target="_blank" rel="noopener">View source →</a>`:``}
        </div>
      `).join(``));let c=`research-${Date.now()}`,l=!!(o||i?.length);l&&(s+=this.renderSaveBar(c)),r.innerHTML=s||`<div class="empty-text">No results.</div>`,this.wireReadAloudControls(),this.wireCodeCopyButtons(r),l&&this.wireSaveBar(r,c,`research`,()=>n||`Research result`,()=>({summary:o,papers:i,sourceStatus:a}))}deactivate(){typeof window<`u`&&window.speechSynthesis&&window.speechSynthesis.cancel()}getTitle(){return`Research`}};export{r as ResearchMode};