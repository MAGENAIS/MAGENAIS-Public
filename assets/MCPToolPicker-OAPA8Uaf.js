import{y as e}from"./main-C_uT3PWb.js";function t(e){let t=document.createElement(`div`);return t.textContent=e??``,t.innerHTML}function n(e){let n=e?.properties||{},r=e?.required||[],i=Object.keys(n);if(i.length===0){let e=`mcp-args-raw`;return{html:`<div class="field"><label class="field-label">Arguments (JSON) <span class="opt">optional</span></label><textarea id="${e}" rows="3" placeholder="{}"></textarea></div>`,readValues:()=>{let t=document.getElementById(e)?.value.trim();if(!t)return{};try{return JSON.parse(t)}catch{return{__rawError:`Arguments must be valid JSON.`}}}}}return{html:i.map(e=>{let i=n[e]||{},a=`mcp-arg-${e}`,o=r.includes(e),s=`${t(i.title||e)}${o?` *`:``}${i.description?` <span class="opt">${t(i.description.slice(0,80))}</span>`:``}`;return i.type===`boolean`?`<label style="display:flex; align-items:center; gap:6px; margin:8px 0;"><input type="checkbox" id="${a}" style="width:auto;"> <span class="field-label" style="margin:0;">${s}</span></label>`:i.enum&&Array.isArray(i.enum)?`<div class="field"><label class="field-label">${s}</label><select id="${a}">${i.enum.map(e=>`<option value="${t(String(e))}">${t(String(e))}</option>`).join(``)}</select></div>`:i.type===`number`||i.type===`integer`?`<div class="field"><label class="field-label">${s}</label><input type="number" id="${a}" placeholder="${i.default===void 0?``:t(String(i.default))}"></div>`:i.type===`array`||i.type===`object`?`<div class="field"><label class="field-label">${s} <span class="opt">JSON</span></label><textarea id="${a}" rows="2" placeholder="${i.type===`array`?`[]`:`{}`}"></textarea></div>`:`<div class="field"><label class="field-label">${s}</label><input type="text" id="${a}" placeholder="${i.default===void 0?``:t(String(i.default))}"></div>`}).join(``),readValues:()=>{let e={};for(let t of i){let r=n[t]||{},i=document.getElementById(`mcp-arg-${t}`);if(i){if(r.type===`boolean`)e[t]=i.checked;else if(r.type===`number`||r.type===`integer`)i.value!==``&&(e[t]=Number(i.value));else if(r.type===`array`||r.type===`object`){let n=i.value.trim();if(n)try{e[t]=JSON.parse(n)}catch{return{__rawError:`"${t}" must be valid JSON.`}}}else i.value!==``&&(e[t]=i.value)}}return e}}}function r(e){let t=e?.content;if(Array.isArray(t)){let e=t.map(e=>e.type===`text`?e.text:e.type===`resource`&&e.resource?.text?e.resource.text:`[${e.type} content]`).join(`
`);if(e.trim())return e}return JSON.stringify(e,null,2)}function i(i){return new Promise(a=>{let o=i.getProviderManager(),s=o.getMCPProviders(!0).filter(e=>(e.mcpCapabilities?.tools.length||0)>0),c=document.createElement(`div`);c.className=`modal-backdrop open`;let l=e=>{c.remove(),a(e)};if(c.addEventListener(`click`,e=>{e.target===c&&l(null)}),s.length===0){c.innerHTML=`
        <div class="modal" style="max-width:440px;">
          <button class="modal-close" id="mcp-empty-close">×</button>
          <h3>MCP Tools</h3>
          <p class="hint">No connected MCP server has any discovered tools yet. Open Keys &amp; Providers → MCP, add or enable a server, and click <b>Test</b> to discover its tools.</p>
          <button class="ghost-btn" id="mcp-empty-open-settings">Open Keys &amp; Providers</button>
        </div>`,c.querySelector(`#mcp-empty-close`)?.addEventListener(`click`,()=>l(null)),c.querySelector(`#mcp-empty-open-settings`)?.addEventListener(`click`,()=>{i.getEventBus().emit(`ui:openProviderType`,`mcp`),l(null)}),document.body.appendChild(c);return}let u=null,d=null,f=e=>(s.find(t=>t.id===e)?.mcpCapabilities?.tools||[]).map(e=>`<option value="${t(e.name)}">${t(e.name)}</option>`).join(``);c.innerHTML=`
      <div class="modal" style="max-width:560px;">
        <button class="modal-close" id="mcp-close">×</button>
        <h3>Use an MCP Tool</h3>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Server</label>
            <select id="mcp-server">${s.map(e=>`<option value="${e.id}">${t(e.name)}</option>`).join(``)}</select>
          </div>
          <div class="field">
            <label class="field-label">Tool</label>
            <select id="mcp-tool">${f(s[0].id)}</select>
          </div>
        </div>
        <div id="mcp-tool-desc" class="hint" style="margin:2px 0 10px;"></div>
        <div id="mcp-risk-badge" style="margin-bottom:10px;"></div>
        <div id="mcp-args-container"></div>
        <label id="mcp-confirm-row" style="display:none; align-items:center; gap:6px; margin:10px 0; cursor:pointer;">
          <input type="checkbox" id="mcp-confirm" style="width:auto;">
          <span class="field-label" style="margin:0;">I understand this tool can change data — run it anyway</span>
        </label>
        <div id="mcp-result" style="display:none; margin-top:12px;">
          <label class="field-label">Result</label>
          <pre id="mcp-result-text" style="max-height:220px; overflow:auto; white-space:pre-wrap; font-size:12px; padding:8px; background:var(--panel, #1a1a1a); border-radius:6px;"></pre>
        </div>
        <div class="hint" id="mcp-error" style="color:var(--rust); display:none; margin-top:8px;"></div>
        <div style="display:flex; gap:8px; margin-top:14px;">
          <button class="run-btn" id="mcp-run" style="flex:1;">▸ Run Tool</button>
          <button class="ghost-btn" id="mcp-insert" style="display:none;">Insert Result</button>
        </div>
      </div>`;let p=c.querySelector(`#mcp-server`),m=c.querySelector(`#mcp-tool`),h=c.querySelector(`#mcp-tool-desc`),g=c.querySelector(`#mcp-risk-badge`),_=c.querySelector(`#mcp-args-container`),v=c.querySelector(`#mcp-confirm-row`),y=c.querySelector(`#mcp-confirm`),b=c.querySelector(`#mcp-run`),x=c.querySelector(`#mcp-insert`),S=c.querySelector(`#mcp-result`),C=c.querySelector(`#mcp-result-text`),w=c.querySelector(`#mcp-error`),T=``,E=()=>{u=s.find(e=>e.id===p.value)?.mcpCapabilities?.tools.find(e=>e.name===m.value)||null,h.textContent=u?.description||``;let r=u?e(u):null;g.innerHTML=r?r.risk===`read-only`?`<span style="color:var(--moss);">● Read-only</span> <span class="opt">${t(r.reason)}</span>`:`<span style="color:var(--rust);">▲ Write / action</span> <span class="opt">${t(r.reason)}</span>`:``,v.style.display=r?.risk===`write`?`flex`:`none`,y.checked=!1,d=n(u?.inputSchema),_.innerHTML=d.html,S.style.display=`none`,x.style.display=`none`,w.style.display=`none`};p.addEventListener(`change`,()=>{m.innerHTML=f(p.value),E()}),m.addEventListener(`change`,E),E(),c.querySelector(`#mcp-close`)?.addEventListener(`click`,()=>l(null)),b.addEventListener(`click`,async()=>{if(!u)return;let t=d?.readValues()??{};if(t.__rawError){w.textContent=t.__rawError,w.style.display=`block`;return}if(e(u).risk===`write`&&!y.checked){w.textContent=`Check the confirmation box above before running a write/action tool.`,w.style.display=`block`;return}w.style.display=`none`,b.disabled=!0,b.textContent=`Running…`;try{T=r(await o.callMCPTool(p.value,u.name,t,{confirmed:y.checked})),C.textContent=T,S.style.display=`block`,x.style.display=`inline-block`}catch(e){w.textContent=e?.message||`Tool call failed.`,w.style.display=`block`}finally{b.disabled=!1,b.textContent=`▸ Run Tool`}}),x.addEventListener(`click`,()=>{let e=`[MCP: ${s.find(e=>e.id===p.value)?.name} → ${u?.name}]`;l(`${e}\n${T}`)}),document.body.appendChild(c)})}export{i as openMCPToolPicker};