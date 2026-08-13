function e(e){let t=document.createElement(`div`);return t.textContent=e??``,t.innerHTML}function t(e){let t=Math.floor((Date.now()-e)/1e3);if(t<60)return`just now`;let n=Math.floor(t/60);if(n<60)return`${n}m ago`;let r=Math.floor(n/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}var n=class{kernel;onReload;constructor(e,t){this.kernel=e,this.onReload=t}open(){this.ensureDom(),this.render(),document.getElementById(`historyModal`)?.classList.add(`open`)}close(){document.getElementById(`historyModal`)?.classList.remove(`open`)}ensureDom(){if(document.getElementById(`historyModal`))return;let e=document.createElement(`div`);e.className=`modal-backdrop`,e.id=`historyModal`,e.innerHTML=`
      <div class="modal" style="max-width:720px;">
        <button class="modal-close" id="closeHistory">×</button>
        <h3>Generation History</h3>
        <p class="hint">Stored only on this device (browser local storage). Click any item to reload it.</p>
        <div id="historyGrid" style="display:flex; flex-direction:column; gap:8px; max-height:420px; overflow-y:auto;"></div>
        <div class="divider"></div>
        <button class="ghost-btn small" id="clearHistoryBtn" style="border-color:var(--rust); color:var(--rust);">Clear history</button>
      </div>
    `,document.body.appendChild(e),e.querySelector(`#closeHistory`)?.addEventListener(`click`,()=>this.close()),e.addEventListener(`click`,t=>{t.target===e&&this.close()}),e.querySelector(`#clearHistoryBtn`)?.addEventListener(`click`,()=>{confirm(`Clear all generation history on this device?`)&&(this.kernel.getStore().getActions().clearHistory(),this.render())})}render(){let n=document.getElementById(`historyGrid`);if(!n)return;let r=this.kernel.getStore().getState().history||[];if(r.length===0){n.innerHTML=`<p class="hint">Nothing generated yet — your history will appear here after you run something.</p>`;return}n.innerHTML=``,r.forEach(r=>{let i=document.createElement(`div`);i.className=`provider-row`,i.style.cursor=`pointer`;let a=``;r.resultType===`image`&&typeof r.result==`string`?a=`<img src="${r.result}" style="max-height:64px; border-radius:4px; margin-top:6px;">`:r.resultType===`video`&&typeof r.result==`string`?a=`<video src="${r.result}" style="max-height:64px; border-radius:4px; margin-top:6px;" muted></video>`:r.resultType===`audio`&&typeof r.result==`string`?a=`<audio src="${r.result}" controls style="height:32px; margin-top:6px; max-width:100%;"></audio>`:typeof r.result==`string`&&!r.result.startsWith(`data:`)&&(a=`<div class="provider-meta" style="margin-top:4px; -webkit-line-clamp:2; display:-webkit-box; -webkit-box-orient:vertical; overflow:hidden;">${e(r.result.slice(0,180))}</div>`),i.innerHTML=`
        <div class="provider-row-top">
          <div style="display:flex; flex-direction:column; gap:2px; overflow:hidden;">
            <span class="provider-name">${e(r.mode)} · ${e((r.prompt||``).slice(0,60))}</span>
            <span class="provider-meta">${t(r.timestamp)}</span>
          </div>
        </div>
        ${a}
      `,i.addEventListener(`click`,()=>{this.onReload?.(r),this.close()}),n.appendChild(i)})}};export{n as HistoryModal};