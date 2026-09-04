const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocxExporter-DBM0V1Yx.js","assets/rolldown-runtime-Dd_uD5pT.js","assets/main-Bb4QPNqr.js","assets/Environment-DAaQRBRU.js","assets/main-DM-5SoV6.css","assets/MathExtract-fn-3BPbL.js","assets/MarkdownBlocks-8Awqw2di.js","assets/PdfExporter-CfuqJ4qq.js","assets/MarkdownToHtml-DjTgo5jm.js","assets/MathRenderer-CzWLPTWK.js","assets/doc-DurgSM1f.js"])))=>i.map(i=>d[i]);
import{O as e,u as t}from"./main-Bb4QPNqr.js";import{t as n}from"./Mode-NaHOtIFU.js";import{n as r}from"./SymbiosisHandoff-DkpRyW56.js";import{t as i}from"./StudioIcons-D7K8v_Y3.js";var a=new class{apps=new Map;register(e){this.apps.has(e.id)&&console.warn(`StudioRegistry: app "${e.id}" already registered, overwriting.`),this.apps.set(e.id,e)}getAll(){return Array.from(this.apps.values())}getById(e){return this.apps.get(e)}getByCategory(e){return this.getAll().filter(t=>t.category===e)}search(e){let t=e.trim().toLowerCase();if(!t)return this.getAll();let n=t.split(/\s+/).filter(e=>e.length>1);if(n.length===0)return[];let r=[];for(let e of this.getAll()){let i=[e.title.toLowerCase(),e.description.toLowerCase(),e.id.toLowerCase(),...(e.keywords||[]).map(e=>e.toLowerCase())],a=i.some(e=>e.includes(t)),o=new Set(n.filter(e=>i.some(t=>t.includes(e)))).size+(a?10:0);o>0&&r.push({app:e,score:o})}return r.sort((e,t)=>t.score-e.score).map(e=>e.app)}};function o(e){a.register(e)}var s=[{id:`symbiosis`,title:`Symbiosis`,description:`Bring two or more AI perspectives — and your own — into one structured, human-controlled discussion.`,category:`core`,icon:`symbiosis`,status:`available`,action:e=>e.openMode(`symbiosis`),keywords:[`council`,`discussion`,`debate`,`multi-provider`,`roles`]},{id:`text`,title:`Text & Voice`,description:`Write, converse, translate, and reason with text & voice AI.`,category:`core`,icon:`text`,status:`available`,action:e=>e.openMode(`text`)},{id:`image`,title:`Image`,description:`Create and edit images with AI.`,category:`core`,icon:`image`,status:`available`,action:e=>e.openMode(`image`)},{id:`video`,title:`Video`,description:`Generate and process AI video.`,category:`core`,icon:`video`,status:`available`,action:e=>e.openMode(`video`)},{id:`audio`,title:`Audio & Music`,description:`Speech, music, podcasts, and voice conversation.`,category:`core`,icon:`audio`,status:`available`,action:e=>e.openMode(`audio`)},{id:`data`,title:`Data Analytics`,description:`Visualize and analyze data with AI-assisted insight.`,category:`core`,icon:`data`,status:`available`,action:e=>e.openMode(`data`),keywords:[`analytics`,`charts`,`spreadsheet`,`csv`]},{id:`doc`,title:`Documents`,description:`Analyze, summarize, translate, and compare documents.`,category:`core`,icon:`doc`,status:`available`,action:e=>e.openMode(`doc`),keywords:[`pdf`,`word`,`files`]},{id:`research`,title:`Research`,description:`AI-powered research and knowledge synthesis.`,category:`core`,icon:`research`,status:`available`,action:e=>e.openMode(`research`)},{id:`game`,title:`Game`,description:`Build interactive AI-generated games.`,category:`core`,icon:`game`,status:`available`,action:e=>e.openMode(`game`)},{id:`coding`,title:`Coding`,description:`AI pair-programming and code generation.`,category:`core`,icon:`coding`,status:`available`,action:e=>e.openMode(`coding`),keywords:[`code`,`programming`,`dev`]},{id:`vision`,title:`Vision`,description:`Image and camera understanding, OCR, and object detection.`,category:`core`,icon:`vision`,status:`available`,action:e=>e.openMode(`vision`),keywords:[`ocr`,`detect`,`camera`]},{id:`agents`,title:`Agents`,description:`Multi-step AI agents with planning and memory.`,category:`core`,icon:`agents`,status:`available`,action:e=>e.openMode(`agents`)},{id:`autonomous`,title:`Autonomous`,description:`Real-time perception and autonomous decision-making.`,category:`core`,icon:`autonomous`,status:`available`,action:e=>e.openMode(`autonomous`),keywords:[`robot`,`robotics`,`self-driving`,`car`,`drone`]},{id:`robotics`,title:`Robotics`,description:`Task/motion planning, ROS code generation, and kinematics — free & paid AI providers.`,category:`core`,icon:`robotics`,status:`available`,action:e=>e.openMode(`robotics`),keywords:[`robot`,`ros`,`kinematics`,`arm`]},{id:`quantum`,title:`Quantum`,description:`Design and simulate quantum circuits free, or run them on real IBM Quantum hardware.`,category:`core`,icon:`quantum`,status:`available`,action:e=>e.openMode(`quantum`),keywords:[`qubit`,`circuit`,`qiskit`,`ibm`]}],c=[{id:`problem`,title:`Problem Solver`,description:`Describe a real-world problem and let MAGENAIS determine the required capabilities and solution path.`,category:`intelligence`,icon:`problem`,status:`available`,action:()=>{},keywords:[`problem`,`solve`,`analyze`,`plan`,`goal`]},{id:`decision`,title:`Decision Intelligence`,description:`Compare alternatives using evidence, cost, risk, uncertainty, and expected outcomes.`,category:`intelligence`,icon:`decision`,status:`available`,action:()=>{},keywords:[`decision`,`decide`,`compare`,`choose`,`tradeoff`,`alternatives`]},{id:`knowledge`,title:`Knowledge`,description:`Explore what MAGENAIS already knows about your current project — documents, research, data, and results.`,category:`intelligence`,icon:`knowledge`,status:`available`,action:()=>{},keywords:[`knowledge`,`notes`,`wiki`,`sources`,`documents`,`research`]},{id:`verification`,title:`Verification`,description:`Check a claim or statement against supplied evidence and sources — Supported, Contradicted, or Unverified. Not a universal truth detector.`,category:`intelligence`,icon:`verification`,status:`available`,action:()=>{},keywords:[`verify`,`fact-check`,`evidence`,`claim`,`contradiction`,`source`]},{id:`diagnosis`,title:`Diagnosis`,description:`Investigate why something is not working — weigh possible causes against evidence in a Hypothesis Table. Not a definitive answer.`,category:`intelligence`,icon:`diagnosis`,status:`available`,action:()=>{},keywords:[`diagnose`,`root cause`,`troubleshoot`,`debug`,`hypothesis`,`symptom`]},{id:`inspection`,title:`Inspection`,description:`Inspect an image, document, or data reading for anomalies and defects against an objective you define — never a certain result, only Possible/Likely/Detected/Not detected/Unable to determine.`,category:`intelligence`,icon:`inspection`,status:`available`,action:()=>{},keywords:[`inspect`,`defect`,`anomaly`,`vision`,`quality`]},{id:`optimization`,title:`Optimization`,description:`Improve a measurable objective under constraints — real arithmetic on Current vs Target when the numbers are there, structured trade-offs otherwise. Never a fake optimal value.`,category:`intelligence`,icon:`optimization`,status:`available`,action:()=>{},keywords:[`optimize`,`efficiency`,`cost`,`reduce`,`improve`,`throughput`]}],l=!1;function u(){l||(l=!0,[...s,...c].forEach(o))}function d(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function f(e,t,n,r){let a=document.getElementById(`askMagenaisGuideModal`);a&&a.remove();let o=n.slice(0,4);a=document.createElement(`div`),a.className=`modal-backdrop open`,a.id=`askMagenaisGuideModal`,a.innerHTML=`
    <div class="modal" style="max-width:480px;">
      <button class="modal-close" id="askGuideClose">×</button>
      <h3>${i(`ask`,16)} Ask MAGENAIS</h3>
      <p class="hint" style="margin:4px 0 12px;">"${d(t)}"</p>

      ${o.length>0?`
        <p class="field-label">Best matches in MAGENAIS</p>
        <div class="studio-mini-list" style="margin-bottom:14px;">
          ${o.map(e=>`
            <button class="studio-mini-item" data-open-id="${e.id}" title="${d(e.description)}">
              <span class="studio-mini-icon">${i(e.icon,15)}</span>
              <span class="studio-mini-title">${d(e.title)}</span>
            </button>`).join(``)}
        </div>`:`<p class="hint" style="margin-bottom:14px;">No exact match found in MAGENAIS's own apps/services for this — see the AI guide below instead.</p>`}

      <p class="field-label">AI Guide</p>
      <div id="askGuideAiAnswer" class="result-text" style="min-height:24px;"><span class="hint">Asking your enabled AI provider for a short answer…</span></div>
    </div>
  `,document.body.appendChild(a);let s=()=>a?.remove();a.querySelector(`#askGuideClose`)?.addEventListener(`click`,s),a.addEventListener(`click`,e=>{e.target===a&&s()}),a.querySelectorAll(`[data-open-id]`).forEach(e=>{e.addEventListener(`click`,()=>{s(),r(e.dataset.openId)})});let c=a.querySelector(`#askGuideAiAnswer`),l=`You are a short, friendly in-app assistant for MAGENAIS, a browser-based multi-tab AI platform with tabs for Text, Image, Video, Audio, Data, Documents, Research, Game, Coding, Vision, Agents, Autonomous, Robotics, and Quantum, plus a Studio desktop with Problem Solver / Decision Intelligence / Knowledge project tools. A user typed this into the "Ask MAGENAIS" box: "${t}".${o.length?` MAGENAIS's own search already found these matching built-in apps: ${o.map(e=>e.title).join(`, `)}.`:``} In 2-3 short sentences, tell them what to do next and, if relevant, which tab/tool to open. Be concrete, not generic.`;e.getProviderManager().callWithFallback(`text`,e.getRouter(),{prompt:l},{},()=>{}).then(e=>{let t=typeof e==`string`?e:e?.finalOutput??String(e);c.innerHTML=d(t).replace(/\n/g,`<br>`)}).catch(e=>{c.innerHTML=`<span class="hint">Couldn't reach an AI provider for a guide answer (${d(e?.message||String(e))}) — enable one under Keys &amp; Providers, or use a match above if one was found.</span>`})}var p=new Set([`text`,`agent`,`research`,`document`,`code`,`data`,`quantum`,`vision`,`config`,`robotics`,`autonomous`]);function m(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function h(e){let t=Math.round((Date.now()-e)/6e4);if(t<1)return`just now`;if(t<60)return`${t}m ago`;let n=Math.round(t/60);return n<24?`${n}h ago`:new Date(e).toLocaleDateString()}function ee(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.click(),URL.revokeObjectURL(n)}function g(t,n={}){let r=document.getElementById(`studioOpenPanelModal`);r&&r.remove(),r=document.createElement(`div`),r.className=`modal-backdrop open`,r.id=`studioOpenPanelModal`,r.innerHTML=`
    <div class="modal" style="max-width:560px; max-height:80vh; display:flex; flex-direction:column;">
      <button class="modal-close" id="studioOpenPanelClose">×</button>
      <h3>Open</h3>
      <div class="chip-group" id="studioOpenTabs" style="margin:6px 0 12px;">
        <button class="chip${n.focus===`assets`?``:` active`}" data-open-tab="projects">Projects</button>
        <button class="chip${n.focus===`assets`?` active`:``}" data-open-tab="assets">Saved Content</button>
      </div>
      <div id="studioOpenBody" style="overflow-y:auto; flex:1; min-height:120px;"></div>
    </div>
  `,document.body.appendChild(r);let i=()=>r?.remove();r.querySelector(`#studioOpenPanelClose`)?.addEventListener(`click`,i),r.addEventListener(`click`,e=>{e.target===r&&i()});let a=r.querySelector(`#studioOpenBody`),o=()=>{let e=t.getProjectManager().getProjects().sort((e,t)=>t.updatedAt-e.updatedAt),n=t.getProjectManager().getCurrentProject()?.id;if(e.length===0){a.innerHTML=`<p class="hint" style="padding:12px 0;">No projects yet — use "New Project" to create one.</p>`;return}a.innerHTML=e.map(e=>`
      <div style="padding:8px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <b>${m(e.name)}</b>${e.id===n?` <span class="hint" style="color:var(--moss);">(current)</span>`:``}
          <div class="hint">${e.assets.length} asset${e.assets.length===1?``:`s`} · updated ${h(e.updatedAt)}</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="ghost-btn small" data-open-project="${e.id}">Open</button>
          <button class="ghost-btn small" data-delete-project="${e.id}">Delete</button>
        </div>
      </div>`).join(``),a.querySelectorAll(`[data-open-project]`).forEach(e=>{e.addEventListener(`click`,()=>{t.getProjectManager().setCurrentProject(e.dataset.openProject),i()})}),a.querySelectorAll(`[data-delete-project]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.deleteProject,r=t.getProjectManager().getProject(n);confirm(`Delete project "${r?.name}"? This also deletes its ${r?.assets.length??0} associated asset(s). This cannot be undone.`)&&(t.getProjectManager().deleteProject(n),o())})})},s=()=>{let n=t.getAssetManager().getAssets().sort((e,t)=>t.updatedAt-e.updatedAt);if(n.length===0){a.innerHTML=`<p class="hint" style="padding:12px 0;">Nothing saved yet — use the Save button under any generated result in Text, Image, Robotics, etc.</p>`;return}a.innerHTML=n.map(e=>`
      <div style="padding:8px 10px; border:1px solid var(--line-bright); border-radius:var(--radius); margin-bottom:6px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
          <div>
            <b>${m(e.name)}</b> <span class="hint">· ${m(e.type)}</span>
            <div class="hint">Saved ${h(e.createdAt)}</div>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="ghost-btn small" data-view-asset="${e.id}">Open</button>
            ${p.has(e.type)?`
              <button class="ghost-btn small" data-export-docx="${e.id}">Word</button>
              <button class="ghost-btn small" data-export-pdf="${e.id}">PDF</button>`:``}
            <button class="ghost-btn small" data-delete-asset="${e.id}">Delete</button>
          </div>
        </div>
        <div data-asset-viewer="${e.id}" style="display:none; margin-top:8px; max-height:220px; overflow:auto; border-top:1px solid var(--line-bright); padding-top:8px;"></div>
      </div>`).join(``),a.querySelectorAll(`[data-view-asset]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.viewAsset,r=a.querySelector(`[data-asset-viewer="${n}"]`);if(r.style.display!==`none`){r.style.display=`none`;return}let i=t.getAssetManager().getAsset(n);i&&(r.innerHTML=typeof i.data==`string`&&(i.data.startsWith(`data:image`)||i.data.startsWith(`blob:`))?`<img src="${i.data}" style="max-width:100%; border-radius:var(--radius);">`:`<pre style="white-space:pre-wrap; margin:0;">${m(typeof i.data==`string`?i.data:JSON.stringify(i.data,null,2))}</pre>`,r.style.display=`block`)})}),a.querySelectorAll(`[data-delete-asset]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.deleteAsset;confirm(`Delete this saved item? This cannot be undone.`)&&(t.getAssetManager().deleteAsset(n),s())})}),a.querySelectorAll(`[data-export-docx]`).forEach(n=>{n.addEventListener(`click`,async()=>{let r=t.getAssetManager().getAsset(n.dataset.exportDocx);if(r){n.disabled=!0,n.textContent=`Word…`;try{let{exportTextToDocx:t}=await e(async()=>{let{exportTextToDocx:e}=await import(`./DocxExporter-DBM0V1Yx.js`).then(e=>e.t);return{exportTextToDocx:e}},__vite__mapDeps([0,1,2,3,4,5,6])),{assetToExportText:n}=await e(async()=>{let{assetToExportText:e}=await import(`./AssetToText-DAj4sKKZ.js`);return{assetToExportText:e}},[]);ee(await t(r.name,n(r)),`${r.name.replace(/[^\w.-]+/g,`_`)}.docx`)}catch(e){alert(`Couldn't create Word document: ${e?.message||e}`)}finally{n.disabled=!1,n.textContent=`Word`}}})}),a.querySelectorAll(`[data-export-pdf]`).forEach(n=>{n.addEventListener(`click`,async()=>{let r=t.getAssetManager().getAsset(n.dataset.exportPdf);if(r){n.disabled=!0,n.textContent=`PDF…`;try{let{exportTextToPdf:t}=await e(async()=>{let{exportTextToPdf:e}=await import(`./PdfExporter-CfuqJ4qq.js`).then(e=>e.t);return{exportTextToPdf:e}},__vite__mapDeps([7,1,2,3,4,5,6,8,9])),{assetToExportText:n}=await e(async()=>{let{assetToExportText:e}=await import(`./AssetToText-DAj4sKKZ.js`);return{assetToExportText:e}},[]);ee(await t(r.name,n(r)),`${r.name.replace(/[^\w.-]+/g,`_`)}.pdf`)}catch(e){alert(`Couldn't create PDF: ${e?.message||e}`)}finally{n.disabled=!1,n.textContent=`PDF`}}})})};r.querySelectorAll(`[data-open-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{r.querySelectorAll(`[data-open-tab]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),e.dataset.openTab===`projects`?o():s()})}),n.focus===`assets`?s():o()}var te=new Set(`a.an.the.i.want.to.and.or.of.for.with.my.me.this.that.is.are.be.on.in.it.need.help.please.can.you.about.into.from.some.how.do.does.so.at.as.up.if`.split(`.`));function _(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,` `).split(/\s+/).filter(e=>e.length>1&&!te.has(e))}var ne={robot:[`robotics`,`autonomous`],robots:[`robotics`,`autonomous`],causes:[`diagnosis`],cause:[`diagnosis`],broken:[`diagnosis`,`vision`],defect:[`vision`],defects:[`vision`],anomaly:[`vision`],inspect:[`vision`],inspecting:[`vision`],drone:[`autonomous`,`robotics`,`vision`],drones:[`autonomous`,`robotics`,`vision`],ros:[`robotics`],fact:[`verification`],facts:[`verification`],claim:[`verification`],source:[`verification`],sources:[`verification`],choose:[`decision`],choice:[`decision`],alternatives:[`decision`],tradeoff:[`decision`],scientific:[`research`,`doc`,`verification`],investigate:[`research`],spreadsheet:[`data`],csv:[`data`],chart:[`data`],photo:[`vision`,`image`],picture:[`vision`,`image`],camera:[`vision`],ocr:[`vision`],program:[`coding`],script:[`coding`],build:[`coding`],qubit:[`quantum`],circuit:[`quantum`]},re={image:[`create an image`,`edit a picture`,`analyze an image`,`generate an image`],video:[`generate video`,`analyze video`,`edit video`],audio:[`generate music`,`text to speech`,`speech to text`],data:[`analyze csv`,`analyze spreadsheet`,`analyze dataset`],doc:[`summarize pdf`,`analyze document`,`extract information`],research:[`research topic`,`find papers`,`investigate question`],coding:[`write code`,`build application`,`build an app`],vision:[`object detection`,`visual inspection`,`camera analysis`,`inspect a photo`],robotics:[`robotic arm`],autonomous:[`autonomous vehicle`,`robot navigation`]};function ie(e){let t=a.getById(e);if(!t)return new Set;let n=[t.title,t.description,t.id,...t.keywords||[]].join(` `);return new Set(_(n))}function v(e){let t=[e.goal,e.context,...e.constraints||[]].filter(Boolean).join(` `).toLowerCase(),n=_(t);if(n.length===0)return[];let r=new Map,i=(e,t)=>{a.getById(e)&&r.set(e,(r.get(e)||0)+t)};for(let[e,n]of Object.entries(re))for(let r of n)t.includes(r)&&i(e,3);for(let e of n){for(let t of a.getAll())ie(t.id).has(e)&&i(t.id,2);for(let t of ne[e]||[])i(t,2)}let o=e=>e===`available`||e===`experimental`?0:1;return Array.from(r.entries()).filter(([e])=>e!==`problem`).map(([e,t])=>({app:a.getById(e),score:t})).sort((e,t)=>t.score-e.score||o(e.app.status)-o(t.app.status)).slice(0,8)}function y(e){if(e.length===0)return null;let t=e[0].score;return t>=4?`High`:t>=2?`Medium`:`Low`}function b(e){if(e.length===0)return`MAGENAIS could not confidently map this goal to an existing capability yet.`;let t=e.slice(0,3).map(e=>e.app.title);if(t.length===1)return`This looks like a job for ${t[0]}.`;let n=t[t.length-1];return`This looks like it will need ${t.slice(0,-1).join(`, `)} and ${n} working together.`}function ae(e){let t=new Set,n=[];for(let r of(e||``).split(`
`)){let e=r.trim();!e||t.has(e)||(t.add(e),n.push({name:e}))}return n}function oe(e){return(e||``).split(`
`).map(e=>e.trim()).filter(e=>e.length>0)}var se={strong:`Strong`,high:`Strong`,good:`Strong`,excellent:`Strong`,best:`Strong`,great:`Strong`,moderate:`Moderate`,medium:`Moderate`,ok:`Moderate`,okay:`Moderate`,average:`Moderate`,fair:`Moderate`,weak:`Weak`,low:`Weak`,poor:`Weak`,bad:`Weak`,worst:`Weak`},ce=new Set([`unknown`,`unk`,`n/a`,`na`,`tbd`,`?`,`unclear`]),le=/\(\s*(lower|higher)(?:\s+is\s+better)?\s*\)\s*$/i,ue=[`cost`,`price`,`latency`,`response time`,`weight`,`defect rate`,`error rate`,`downtime`],de=[`performance`,`battery life`,`battery`,`throughput`,`accuracy`,`reliability`,`uptime`];function x(e,t){return RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}\\b`).test(e)}function fe(e){let t=e.match(le);if(t)return{name:e.slice(0,t.index).trim(),direction:t[1].toLowerCase()};let n=e.toLowerCase();return ue.some(e=>x(n,e))?{name:e,direction:`lower`}:de.some(e=>x(n,e))?{name:e,direction:`higher`}:{name:e,direction:void 0}}function pe(e,t){let n=t.map(e=>e.name),r=[],i=[];for(let t of(e||``).split(`
`)){let e=t.trim();if(!e)continue;let a=e.split(`|`).map(e=>e.trim()).filter(e=>e.length>0);if(a.length===0)continue;let o=a[0];if(!o)continue;let{name:s,direction:c}=fe(o);if(!s)continue;let l=1,u;if(a.length>=2){let e=Number(a[1]);a[1]!==``&&!Number.isNaN(e)?(l=e,u=a[2]):u=a[1]}(!Number.isFinite(l)||l<=0)&&(l=1);let d={name:s,weight:l,direction:c};r.push(d);let f={};for(let e of n)f[e]={kind:`unknown`};if(u)for(let e of u.split(`,`).map(e=>e.trim()).filter(Boolean)){let t=e.indexOf(`=`);if(t===-1)continue;let r=e.slice(0,t).trim(),i=e.slice(t+1).trim(),a=n.find(e=>e.toLowerCase()===r.toLowerCase());if(!a||!i||ce.has(i.toLowerCase()))continue;let o=Number(i);if(!Number.isNaN(o))f[a]={kind:`score`,score:o};else{let e=se[i.toLowerCase()];e&&(f[a]={kind:`qualitative`,label:e})}}i.push({criterion:d,cells:f})}return{criteria:r,rows:i}}function me(e){let t=[];for(let n of(e||``).split(`
`)){let e=n.trim();if(!e)continue;let r=e.split(`|`).map(e=>e.trim()),i=r[0];if(!i)continue;let a=r[1]||`Unspecified`,o=(r[2]||``).toLowerCase(),s=o===`high`?`High`:o===`medium`?`Medium`:o===`low`?`Low`:`Unknown`;t.push({claim:i,source:a,confidence:s})}return t}function he(e,t){if(t.length===0||e.length===0)return[];let n=new Map;for(let r of t)n.set(r.name,{alternative:r.name,total:0,coveredCriteria:0,totalCriteria:e.length});let r=!1;for(let i of e)for(let e of t){let t=i.cells[e.name];if(t?.kind===`score`&&typeof t.score==`number`&&Number.isFinite(t.score)){let a=n.get(e.name);a.total+=t.score*i.criterion.weight,a.coveredCriteria+=1,r=!0}}return r?Array.from(n.values()):[]}function ge(e){let t=e.filter(e=>e.coveredCriteria>0);if(t.length===0)return null;let n=[...t].sort((e,t)=>t.total-e.total);return n.length===1||n[0].total>n[1].total?n[0].alternative:null}function _e(e,t,n){return e.alternatives.length<2||e.criteria.length===0?`INSUFFICIENT DATA`:t.length===0?`NO CLEAR LEAD`:n?t.every(e=>e.coveredCriteria===e.totalCriteria)?`CLEAR LEAD`:`TENTATIVE LEAD`:`TIE`}var ve={Strong:2,Moderate:1,Weak:0};function ye(e,t){let n=t.map(t=>({name:t.name,cell:e.cells[t.name]})).filter(e=>!!e.cell&&e.cell.kind!==`unknown`);if(n.length<2)return{best:null,worst:null};let r=n.every(e=>e.cell.kind===`score`),i=n.every(e=>e.cell.kind===`qualitative`);if(!r&&!i)return{best:null,worst:null};let a=e=>r?e.score:ve[e.label],o=t=>e.criterion.direction===`lower`?-a(t):a(t),s=[...n].sort((e,t)=>o(t.cell)-o(e.cell));return{best:o(s[0].cell)>o(s[s.length-1].cell)?s[0].name:null,worst:o(s[s.length-1].cell)<o(s[0].cell)?s[s.length-1].name:null}}function be(e,t){if(t.length<2||e.length===0)return[];let n=new Map,r=new Map;for(let e of t)n.set(e.name,[]),r.set(e.name,[]);let i=0;for(let a of e){let{best:e,worst:o}=ye(a,t);e&&(n.get(e).push(a.criterion.name),i+=1),o&&r.get(o).push(a.criterion.name)}if(i===0)return[];let a=t.some(e=>n.get(e.name).length===i),o=[];a||o.push(`No single alternative leads on every compared criterion — the choice involves a real trade-off.`);for(let e of t){let t=n.get(e.name),i=r.get(e.name);t.length&&i.length?o.push(`${e.name} leads on ${t.join(`, `)}, but trails on ${i.join(`, `)}.`):t.length&&!i.length?o.push(`${e.name} leads on ${t.join(`, `)}, with no criterion where it's the clear weakest.`):i.length&&!t.length&&o.push(`${e.name} trails on ${i.join(`, `)}, with no criterion where it's the clear leader.`)}return o}function xe(e){let t=[];e.constraints.length>0&&t.push(`${e.constraints.length} stated constraint${e.constraints.length===1?``:`s`} cannot be automatically verified against the alternatives — confirm manually: ${e.constraints.join(`; `)}.`);let n=e.evidence.filter(e=>e.confidence===`Low`||e.confidence===`Unknown`);return n.length>0&&t.push(`${n.length} piece${n.length===1?``:`s`} of supplied evidence ${n.length===1?`has`:`have`} low or unestablished confidence — relying on ${n.length===1?`it`:`them`} as-is carries risk.`),e.alternatives.length===1&&t.push(`Only one alternative was supplied — this is not yet a comparison, and any recommendation would be arbitrary.`),e.criteria.length===0&&e.alternatives.length>0&&t.push(`No criteria were supplied — without a basis for comparison, alternatives cannot be meaningfully ranked.`),t}function Se(e,t){let n=[];for(let r of t){let t=e.alternatives.filter(e=>(r.cells[e.name]?.kind??`unknown`)===`unknown`).map(e=>e.name);t.length>0&&n.push(`"${r.criterion.name}" is not yet assessed for: ${t.join(`, `)}.`)}for(let t of e.evidence)t.confidence===`Unknown`&&n.push(`Evidence "${t.claim}" (source: ${t.source}) has no established confidence level.`);return t.length===0&&e.alternatives.length>0&&n.push(`No criteria/scores were supplied yet, so overall fit for each alternative is unassessed.`),n}function Ce(e,t,n,r){return e.alternatives.length===0?`Add at least one alternative to compare.`:e.criteria.length===0?`Add at least one criterion (optionally with weights and scores) to get a structured comparison.`:n?`Based on the supplied criteria, ${n} currently appears preferable, but ${r.length>0?`${r.length} open point${r.length===1?``:`s`} (see Uncertainties) remain${r.length===1?`s`:``} unresolved`:`a few assumptions in the criteria/weights above are still worth double-checking`}.`:t.length>0?`The supplied scores do not clearly favor one alternative (a tie, or too few scores to separate them) — add more scores or resolve the tie manually before deciding.`:`No numeric scores were supplied, so no ranked recommendation can be calculated — review the qualitative comparison below, or add weights/scores for a clearer signal.`}function we(e,t,n){let r=v({goal:e,context:t,constraints:n}).filter(e=>e.app.id!==`decision`).find(e=>e.app.status===`available`||e.app.status===`experimental`);return r?a.getById(r.app.id).id:null}function Te(e){let t=he(e.comparisonRows,e.alternatives),n=ge(t),r=_e(e,t,n),i=be(e.comparisonRows,e.alternatives),a=xe(e),o=Se(e,e.comparisonRows),s=Ce(e,t,n,o),c=we(e.question,e.context,e.constraints);return{input:e,hasComparisonTable:e.alternatives.length>0&&e.criteria.length>0,weightedTotals:t,leadingAlternative:n,resultLabel:r,tradeOffs:i,risks:a,uncertainties:o,nextStep:s,suggestedCapabilityId:c}}var Ee={document:`Document`,research:`Research`,image:`Image`,video:`Video`,audio:`Audio`,game:`Game`,url:`Web Source`,text:`Text`,data:`Data`,chart:`Chart`,code:`Code`,agent:`Agent Output`,vision:`Vision`,robotics:`Robotics`,autonomous:`Autonomous`,quantum:`Quantum`,config:`Configuration`,other:`Other`};function S(e){return Ee[e]||`Other`}function De(e){return e.type===`url`?`external`:typeof e.data==`string`&&e.data.trim()?`available`:`metadata_only`}function C(e,t){return{assetId:e.id,name:e.name,assetType:e.type,typeLabel:S(e.type),createdAt:e.createdAt,updatedAt:e.updatedAt,projectName:t.name,sourceUrl:e.type===`url`?e.metadata?.sourceUrl:void 0,status:De(e)}}function w(e,t){return[...e.assets].map(n=>C(t?.(n.id)||n,e)).sort((e,t)=>(t.updatedAt||t.createdAt)-(e.updatedAt||e.createdAt))}function T(e,t=5){return e.slice(0,t)}function E(e){return!e||!Number.isFinite(e)?`unknown date`:new Date(e).toISOString().slice(0,10)}function Oe(e,t){let n=[];if(n.push(`Project: ${e.name}.`),n.push(e.description?`Description: ${e.description}`:`No project description has been set.`),n.push(`${t.length} source${t.length===1?``:`s`} currently linked to this project.`),t.length>0){let e=t[0];n.push(`Most recently touched source: "${e.name}" (${e.typeLabel}, ${E(e.updatedAt)}).`)}return n.push(`Project last updated ${E(e.updatedAt)}.`),n}function ke(e){let t=new Map;for(let n of e)t.set(n.typeLabel,(t.get(n.typeLabel)||0)+1);let n=Array.from(t.entries()).map(([e,t])=>({typeLabel:e,count:t})).sort((e,t)=>t.count-e.count||e.typeLabel.localeCompare(t.typeLabel)),r=[];if(e.length===0)r.push(`No sources are linked to this project yet.`);else{r.push(`${e.length} source${e.length===1?``:`s`} total — ${n.map(e=>`${e.count} ${e.typeLabel}${e.count===1?``:`s`}`).join(`, `)}.`);for(let t of e){let e=t.status===`available`?`content available`:t.status===`external`?`external link — content not yet retrieved`:t.status===`unavailable`?`content could not be retrieved`:`metadata only — no content stored`;r.push(`"${t.name}" — ${t.typeLabel}, last updated ${E(t.updatedAt)} (${e}).`)}e.some(e=>e.status!==`available`)&&r.push(`Only source metadata is available for one or more sources above; their content could not be accessed for this summary.`)}return{totalSources:e.length,byTypeLabel:n,facts:r}}function D(e,t){let n=[];if(t.length===0)n.push(`No sources are linked to this project yet — add documents, research, or other project assets to build a knowledge base.`);else{let e=new Set(t.map(e=>e.typeLabel));e.has(`Document`)||n.push(`No Documents are linked to this project — if reference material exists, it has not been added here yet.`),e.has(`Research`)||n.push(`No Research sources are linked to this project — prior research findings, if any, are not yet captured here.`)}return(!e.description||!e.description.trim())&&n.push(`This project has no description set — MAGENAIS can only infer its purpose from source names.`),n.push(`Source content itself is not indexed by Knowledge as a database — relevant content is read on demand (when you ask a question, find information, or summarize sources), and external links are only fetched when needed. Use "Ask About This Project" for a content-grounded, clearly-labeled AI interpretation.`),{hasSources:t.length>0,openQuestions:n}}var Ae=new Set(`a.an.the.i.want.to.and.or.of.for.with.my.me.this.that.is.are.be.on.in.it.need.help.please.can.you.about.into.from.some.how.do.does.so.at.as.up.if.what.does`.split(`.`));function O(e){return(e||``).toLowerCase().replace(/[^a-z0-9\s-]/g,` `).split(/\s+/).filter(e=>e.length>1&&!Ae.has(e))}function je(e,t){let n=new Set(O(e));return n.size===0?[]:t.filter(e=>O(e.name).some(e=>n.has(e)))}function Me(e,t){let n=v({goal:e,context:t}).filter(e=>e.app.id!==`knowledge`).find(e=>e.app.status===`available`||e.app.status===`experimental`);return n?a.getById(n.app.id).id:null}function Ne(e,t,n){let r=e.trim(),i=je(r,t);return{question:r,known:i.length>0?[{text:`${i.length} source${i.length===1?``:`s`} in this project reference terms from your question.`,confidence:`known`,sources:i}]:[],unknownNote:i.length===0?t.length===0?`This project has no linked sources yet, so nothing can be confirmed against current sources.`:`No current sources reference the terms in your question.`:null,inferred:null,suggestedCapabilityId:Me(r,n.description)}}var k=6e3,Pe=12e3;async function Fe(t,n){let{Environment:r}=await e(async()=>{let{Environment:e}=await import(`./Environment-DAaQRBRU.js`).then(e=>e.n);return{Environment:e}},__vite__mapDeps([3,1]));if(!r.hasAnyProxy())return null;let{toProxiedRequest:i}=await e(async()=>{let{toProxiedRequest:e}=await import(`./main-Bb4QPNqr.js`).then(e=>e.g);return{toProxiedRequest:e}},__vite__mapDeps([2,1,3,4]));return i(t,{signal:n})}var A=new Map;function Ie(){A.clear()}async function j(e,t,n){let r=await n(e,t);if(!r.ok)throw Error(`HTTP ${r.status}`);return r.text()}async function Le(e,n,r,i){let a=A.get(e);if(a)return a;let o=new AbortController,s=()=>o.abort();i?.addEventListener(`abort`,s);let c=setTimeout(()=>o.abort(),Pe),l;try{let i;try{i=await j(e,{signal:o.signal},n)}catch(t){let a=await r(e,o.signal);if(a)i=await j(a.url,a.init,n);else throw t}let a=t(i).slice(0,k);l=a?{content:a}:{error:`The page returned no readable text content.`}}catch(e){l={error:e?.name===`AbortError`?`Request timed out.`:e?.message||`Could not reach this URL.`}}finally{clearTimeout(c),i?.removeEventListener(`abort`,s)}return A.set(e,l),l}async function Re(e,t,n={}){let r=n.fetchImpl||fetch,i=n.proxyFallback||Fe;if(e.assetType===`url`){if(!e.sourceUrl)return{source:e,status:`unavailable`,content:null,error:`No URL is recorded for this source.`};let t=await Le(e.sourceUrl,r,i,n.signal);return`content`in t?{source:e,status:`available`,content:t.content}:{source:e,status:`unavailable`,content:null,error:t.error}}let a=t(e.assetId);return a&&typeof a.data==`string`&&a.data.trim()?{source:e,status:`available`,content:a.data.trim().slice(0,k)}:{source:e,status:`metadata_only`,content:null}}async function M(e,t,n={}){let r=n.limit??6,i=e.slice(0,Math.max(0,r));return Promise.all(i.map(e=>Re(e,t,n)))}function N(e){let t=[],n=0;for(let r of e){let e=`Source: "${r.source.name}" (${r.source.typeLabel}${r.source.sourceUrl?`, ${r.source.sourceUrl}`:``})`,i;if(i=r.status===`available`&&r.content?`${e}\nStatus: content available\nContent:\n${r.content}`:r.status===`unavailable`?`${e}\nStatus: could not be read (${r.error||`unknown error`}) — do not claim to know its content.`:`${e}\nStatus: metadata only — name/type/date known, content not available — do not claim to know its content.`,n+i.length>18e3)break;t.push(i),n+=i.length}return t.join(`

---

`)}var ze=new Set([`supports`,`support`,`confirms`,`confirm`,`consistent`,`agrees`,`agree`,`yes`]),Be=new Set([`contradicts`,`contradict`,`conflicts`,`conflict`,`refutes`,`refute`,`disagrees`,`disagree`,`no`]);function Ve(e){let t=e.trim().toLowerCase();return ze.has(t)?`Supports`:Be.has(t)?`Contradicts`:`Unclear`}function He(e){let t=[];for(let n of(e||``).split(`
`)){let e=n.trim();if(!e)continue;let r=e.split(`|`).map(e=>e.trim()),i=r[0];if(!i)continue;let a=r[1]||`Unspecified`,o=Ve(r[2]||``);t.push({text:i,source:a,stance:o})}return t}var Ue=new Set(`a.an.the.i.want.to.and.or.of.for.with.my.me.this.that.is.are.be.on.in.it.need.help.please.can.you.about.into.from.some.how.do.does.so.at.as.up.if.what.verify`.split(`.`));function P(e){return(e||``).toLowerCase().replace(/[^a-z0-9\s-]/g,` `).split(/\s+/).filter(e=>e.length>1&&!Ue.has(e))}function We(e,t){let n=new Set(P(e));return n.size===0?[]:t.filter(e=>P(e.name).some(e=>n.has(e)))}function Ge(e,t){let n=e.filter(e=>e.stance===`Supports`).length,r=e.filter(e=>e.stance===`Contradicts`).length;return e.length===0&&t===0?`INSUFFICIENT EVIDENCE`:n>0&&r>0?`PARTIALLY SUPPORTED`:r>0?`CONTRADICTED`:n>0?`SUPPORTED`:`UNVERIFIED`}var Ke=6;function qe(e){let t=e.filter(e=>e.stance===`Supports`),n=e.filter(e=>e.stance===`Contradicts`),r=[];for(let e of n)for(let n of t)if(r.push({sourceA:n.source,claimA:n.text,sourceB:e.source,claimB:e.text}),r.length>=Ke)return r;return r}function Je(e,t,n,r){let i=[];t.length===0&&i.push(`No evidence was supplied for this claim.`);let a=t.filter(e=>e.stance===`Unclear`);return a.length>0&&i.push(`${a.length} supplied evidence item${a.length===1?``:`s`} ${a.length===1?`does`:`do`} not clearly support or contradict the claim: ${a.map(e=>`"${e.text}"`).join(`; `)}.`),n.length===0&&t.every(e=>e.source===`Unspecified`)&&i.push(`No supplied evidence names a traceable source, and no related project source was found by name.`),r.length>0&&i.push(`Conflicting evidence was found — see Contradictions below. This has not been resolved.`),(!e.context||!e.context.trim())&&i.push(`No additional project/research context was supplied.`),i}function Ye(e,t,n){let r=t.filter(e=>e.stance===`Supports`).length,i=t.filter(e=>e.stance===`Contradicts`).length;switch(e){case`INSUFFICIENT EVIDENCE`:return`No evidence or related project sources were supplied for this claim — nothing can be concluded yet. Add evidence, attach a source, or use Research Further.`;case`CONTRADICTED`:return`${i} supplied evidence item${i===1?``:`s`} conflict${i===1?`s`:``} with this claim, and none support it. Treat the claim as unconfirmed pending further review.`;case`PARTIALLY SUPPORTED`:return`Some supplied evidence (${r} item${r===1?``:`s`}) supports this claim while other evidence (${i} item${i===1?``:`s`}) contradicts it — see Contradictions below (${n.length} identified). The claim is not uniformly supported.`;case`SUPPORTED`:return`${r} supplied evidence item${r===1?``:`s`} support${r===1?`s`:``} this claim and none contradict it. This reflects only the evidence supplied — it is not an independent fact-check.`;default:return`The supplied evidence does not clearly establish or refute this claim. More specific, direct evidence is needed.`}}function Xe(e,t){let n=v({goal:e,context:t}).filter(e=>e.app.id!==`verification`).find(e=>e.app.status===`available`||e.app.status===`experimental`);return n?a.getById(n.app.id).id:null}function Ze(e,t){let n=We(e.claim,t),r=Ge(e.evidence,n.length),i=qe(e.evidence);return{input:e,status:r,contradictions:i,missingInformation:Je(e,e.evidence,n,i),conclusion:Ye(r,e.evidence,i),relatedSources:n,suggestedCapabilityId:Xe(e.claim,e.context)}}function F(e){return(e||``).split(`
`).map(e=>e.trim()).filter(e=>e.length>0)}function Qe(e){let t=new Map,n=[];for(let r of(e||``).split(`
`)){let e=r.trim();if(!e)continue;let i=e.split(`|`).map(e=>e.trim()),a=i[0];if(!a)continue;let o=a.toLowerCase();if(t.has(o))continue;let s=i[1]||void 0;t.set(o,{name:a,suggestedTest:s}),n.push(o)}return n.map(e=>t.get(e))}var $e=new Set([`supports`,`support`,`confirms`,`confirm`,`consistent`,`agrees`,`agree`,`yes`]),et=new Set([`contradicts`,`contradict`,`conflicts`,`conflict`,`refutes`,`refute`,`rules out`,`ruled out`,`disagrees`,`disagree`,`no`]);function tt(e){let t=e.trim().toLowerCase();return $e.has(t)?`Supports`:et.has(t)?`Contradicts`:`Unclear`}function nt(e){let t=[];for(let n of(e||``).split(`
`)){let e=n.trim();if(!e)continue;let r=e.split(`|`).map(e=>e.trim()),i=r[0],a=r[1];if(!i||!a)continue;let o=r[2]||`Unspecified`,s=tt(r[3]||``);t.push({text:i,hypothesis:a,source:o,stance:s})}return t}var rt=new Set(`a.an.the.i.want.to.and.or.of.for.with.my.me.this.that.is.are.be.on.in.it.need.help.please.can.you.about.into.from.some.how.do.does.so.at.as.up.if.what.why.not.working.wrong.broken.issue.problem`.split(`.`));function I(e){return(e||``).toLowerCase().replace(/[^a-z0-9\s-]/g,` `).split(/\s+/).filter(e=>e.length>1&&!rt.has(e))}function it(e,t,n){let r=new Set([...I(e),...t.flatMap(I)]);return r.size===0?[]:n.filter(e=>I(e.name).some(e=>r.has(e)))}function at(e,t){return e.length===0?`NO HYPOTHESES YET`:t.length===0?`HYPOTHESES LISTED — NO EVIDENCE YET`:`EVIDENCE GATHERED — NOT CONCLUSIVE`}function L(e,t){let n=e.trim().toLowerCase(),r=t.trim().toLowerCase();return!n||!r?!1:n===r||n.includes(r)||r.includes(n)}var R=`No test supplied yet — add one to Possible Causes (Name | Test), or use AI Assist for a suggestion.`;function ot(e,t){return e.map(e=>{let n=t.filter(t=>L(t.hypothesis,e.name));return{hypothesis:e,supportingEvidence:n.filter(e=>e.stance===`Supports`),contradictingEvidence:n.filter(e=>e.stance===`Contradicts`),unclearEvidence:n.filter(e=>e.stance===`Unclear`),recommendedTest:e.suggestedTest?.trim()||R}})}function st(e,t){return t.filter(t=>!e.some(e=>L(t.hypothesis,e.name)))}function ct(e,t,n,r){let i=[];if(e.symptoms.length===0&&e.observations.length===0&&(!e.attachedAssetIds||e.attachedAssetIds.length===0)&&i.push(`No symptoms, observed data, or attached sources were supplied — only the problem statement itself.`),e.hypotheses.length===0)i.push(`No possible causes have been listed yet — add at least one hypothesis to investigate.`);else{let e=t.filter(e=>e.supportingEvidence.length===0&&e.contradictingEvidence.length===0&&e.unclearEvidence.length===0);e.length>0&&i.push(`${e.length} hypothesis${e.length===1?``:`es`} ${e.length===1?`has`:`have`} no evidence yet: ${e.map(e=>`"${e.hypothesis.name}"`).join(`, `)}.`);let n=t.filter(e=>e.recommendedTest===R);n.length>0&&i.push(`${n.length} hypothesis${n.length===1?``:`es`} ${n.length===1?`has`:`have`} no suggested test yet.`)}let a=t.reduce((e,t)=>e+t.unclearEvidence.length,0);return a>0&&i.push(`${a} supplied evidence item${a===1?``:`s`} do${a===1?`es`:``} not clearly support or contradict the hypothesis it was attached to.`),n.length>0&&i.push(`${n.length} evidence line${n.length===1?``:`s`} named a hypothesis that doesn't match any in Possible Causes: ${n.map(e=>`"${e.hypothesis}"`).join(`, `)}.`),r.length===0&&(!e.attachedAssetIds||e.attachedAssetIds.length===0)&&i.push(`No related project source was found by name, and none were attached.`),(!e.context||!e.context.trim())&&i.push(`No additional context was supplied (when this started, what changed recently, environment, etc.).`),i}function lt(e,t){switch(e){case`NO HYPOTHESES YET`:return`List at least one possible cause in Possible Causes before evidence can be organized into a Hypothesis Table.`;case`HYPOTHESES LISTED — NO EVIDENCE YET`:{let e=t[0]?.hypothesis.name;return e?`Run the simplest test for one hypothesis at a time, starting with "${e}" (or whichever is safest/cheapest to check), and add the result as evidence.`:`Run the simplest test for one hypothesis at a time and add the result as evidence.`}default:{let e=t.filter(e=>e.supportingEvidence.length===0&&e.contradictingEvidence.length===0),n=t.filter(e=>e.contradictingEvidence.length>0&&e.supportingEvidence.length===0);return e.length>0?`Continue testing the remaining untested hypothes${e.length===1?`is`:`es`} (${e.map(e=>e.hypothesis.name).join(`, `)}) before ruling anything in or out.`:n.length>0&&n.length<t.length?`${n.length} of ${t.length} hypotheses now have contradicting evidence and no supporting evidence — consider deprioritizing those and gathering more evidence on the rest. This is not a final answer.`:`Review the Hypothesis Table below — no single cause has been established. Gather more evidence or consult Research/AI Assist for additional angles.`}}}function ut(e,t){let n=v({goal:e,context:t}).filter(e=>e.app.id!==`diagnosis`).find(e=>e.app.status===`available`||e.app.status===`experimental`);return n?a.getById(n.app.id).id:null}function dt(e,t){let n=it(e.problem,e.symptoms,t),r=at(e.hypotheses,e.evidence),i=ot(e.hypotheses,e.evidence),a=st(e.hypotheses,e.evidence);return{input:e,stage:r,hypothesisRows:i,unmatchedEvidence:a,missingInformation:ct(e,i,a,n),nextAction:lt(r,i),relatedSources:n,suggestedCapabilityId:ut(e.problem,e.context)}}var z=[`Possible`,`Likely`,`Detected`,`Not detected`,`Unable to determine`];function ft(e,t){let{objective:n,context:r,inputs:i}=e,a=i.filter(e=>!!e.textContent),o=i.filter(e=>e.unreadable);return[`You are performing a professional inspection for MAGENAIS, a multimodal AI platform. Follow the objective below and report findings ONLY as far as the evidence actually supports — this is a structured inspection, not a casual description.`,`Inspection objective: ${n}`,r?`Additional context: ${r}`:``,t?`An image is attached separately for you to inspect directly against the objective above.`:``,a.length?`Attached text/data input(s):\n${a.map(e=>`--- ${e.name} (${e.kind}) ---\n${e.textContent}`).join(`

`)}`:``,o.length?`Also referenced by name only (their content is not available to you — do not describe or infer their content): ${o.map(e=>`"${e.name}" (${e.kind})`).join(`, `)}.`:``,``,`RULES (follow strictly):`,`- Never state a precise measurement (exact millimeters, exact percentages, exact counts) unless it was explicitly given to you in the input above — describe qualitatively instead (e.g. "a small surface mark" rather than inventing a size).`,`- Never claim certainty the evidence does not support.`,`- Use EXACTLY one of these five words for CONFIDENCE on every finding, chosen honestly for how strong the evidence actually is: ${z.join(`, `)}.`,`- Only include a SEVERITY line when there is a genuinely clear basis for rating it — omit the line entirely otherwise, rather than guessing.`,`- If nothing notable is found, report exactly one FINDING with CONFIDENCE: Not detected rather than inventing a defect.`,`- Never invent a location, a piece of evidence, or a measurement that isn't actually present in what was given to you.`,``,`Respond in EXACTLY this repeating plain-text format (repeat the FINDING block once per finding, at least one FINDING block total, then the two closing lines):`,`FINDING:`,`CONFIDENCE: <${z.join(`|`)}>`,`DESCRIPTION: <one clear sentence>`,`LOCATION: <where in the input this applies, or omit this line entirely if not identifiable>`,`EVIDENCE: <specifically what was observed that supports this finding>`,`SEVERITY: <Low|Medium|High — omit this line entirely if not supported>`,`NEXT STEP: <one honest recommended next step for this specific finding>`,``,`OVERALL: <one or two honest sentences summarizing the inspection as a whole>`,`NEXT ACTION: <one honest sentence — the single overall recommended next action>`].filter(e=>e!==``).join(`
`)}var pt=[`confidence`,`description`,`location`,`evidence`,`severity`,`next step`],mt=/^(finding|confidence|description|location|evidence|severity|next step|overall|next action)\s*:\s*(.*)$/i;function ht(e){let t=(e||``).trim().toLowerCase();return z.find(e=>e.toLowerCase()===t)||`Unable to determine`}function gt(e){let t=(e||``).trim().toLowerCase();return t===`low`?`Low`:t===`medium`?`Medium`:t===`high`?`High`:null}function _t(e){let t=[],n=null,r=null,i=[],a=[],o=null,s=()=>{if(!n)return;let e=(n.description||``).trim(),i=(n.evidence||``).trim();e&&i&&t.push({description:e,location:(n.location||``).trim()||null,evidence:i,severity:gt(n.severity),confidence:ht(n.confidence),recommendedNextStep:(n[`next step`]||``).trim()||`No specific next step was supplied for this finding.`}),n=null,r=null};for(let t of(e||``).split(`
`)){let e=t.trim();if(!e)continue;let c=e.match(mt);if(c){let e=c[1].toLowerCase(),t=c[2].trim();if(e===`finding`){s(),n={},r=null,o=null;continue}if(e===`overall`){s(),o=`overall`,r=null,t&&i.push(t);continue}if(e===`next action`){s(),o=`action`,r=null,t&&a.push(t);continue}n&&pt.includes(e)&&(n[e]=t,r=e,o=null);continue}o===`overall`?i.push(e):o===`action`?a.push(e):n&&r&&(n[r]=`${n[r]||``} ${e}`.trim())}return s(),{findings:t,overallAssessment:i.join(` `).trim()||(t.length>0?`No overall assessment was supplied by the AI provider.`:`No findings or overall assessment were returned.`),recommendedNextAction:a.join(` `).trim()||`No recommended next action was supplied — review the findings above manually.`}}function vt(e,t,n){let r=[],i=e.inputs.filter(e=>e.unreadable);i.length>0&&r.push(`${i.length} attached input${i.length===1?``:`s`} could not be read and ${i.length===1?`was`:`were`} not analyzed: ${i.map(e=>`"${e.name}" (${e.kind})`).join(`, `)}.`);let a=e.inputs.filter(e=>e.kind===`video`);if(a.length>0&&r.push(`${a.length} video input${a.length===1?``:`s`} ${a.length===1?`was`:`were`} referenced by name only — MAGENAIS does not extract and analyze video frames yet. Capture a still frame (e.g. via the Vision tab) and attach it as an image for direct analysis.`),t.length===0)r.push(`No findings were returned — review the objective and attached input(s), or try again.`);else{let e=t.filter(e=>e.confidence===`Unable to determine`||e.confidence===`Possible`);e.length>0&&r.push(`${e.length} of ${t.length} finding${t.length===1?``:`s`} ${e.length===1?`has`:`have`} low confidence (Possible / Unable to determine) — treat as a lead to verify, not a confirmed result.`);let n=t.filter(e=>e.severity===null);n.length>0&&r.push(`${n.length} finding${n.length===1?``:`s`} ${n.length===1?`has`:`have`} no supported severity rating.`)}return(!e.context||!e.context.trim())&&r.push(`No additional context was supplied (e.g. expected tolerances, known history, prior inspection results).`),n===`text`&&r.push(`No image was analyzed for this run — findings are based on document/sensor-data text input only.`),r}function yt(e,t){let n=v({goal:e,context:t}).filter(e=>e.app.id!==`inspection`).find(e=>e.app.status===`available`||e.app.status===`experimental`);return n?a.getById(n.app.id).id:null}function bt(e,t,n){let{findings:r,overallAssessment:i,recommendedNextAction:a}=_t(t);return{input:e,findings:r,overallAssessment:i,missingInformation:vt(e,r,n),recommendedNextAction:a,analyzedVia:n,suggestedCapabilityId:yt(e.objective,e.context)}}function xt(e){return e.inputs.some(e=>!!e.imageDataUrl||!!e.textContent)}function St(e){return e.inputs.some(e=>e.kind===`image`&&!!e.imageDataUrl)}function B(e){return(e||``).split(`
`).map(e=>e.trim()).filter(e=>e.length>0)}function V(e){let t=(e||``).trim();if(!t)return{raw:t,numeric:null,unit:null};let n=t.match(/^([$€£]?)\s*(-?[\d,]+(?:\.\d+)?)\s*(%)?\s*([a-zA-Z][a-zA-Z0-9/ ]*)?$/);if(!n)return{raw:t,numeric:null,unit:null};let r=n[1]||``,i=Number(n[2].replace(/,/g,``));if(!Number.isFinite(i))return{raw:t,numeric:null,unit:null};let a=n[3]||``,o=(n[4]||``).trim();return{raw:t,numeric:i,unit:r||(a?`%`:o||null)}}function H(e,t){let n=Math.round(e*100)/100,r=Number.isInteger(n)?String(n):n.toFixed(2).replace(/0$/,``).replace(/\.$/,``);return t&&/^[$€£]/.test(t)?`${t}${r}`:t?`${r}${t===`%`?`%`:` ${t}`}`:r}function Ct(e,t){return(e||``).trim().toLowerCase()===(t||``).trim().toLowerCase()}function U(e,t){if(e.numeric===null||t.numeric===null)return{current:e,target:t,deltaAbsolute:null,deltaPercent:null,comparable:!1,note:`Not enough numeric information to calculate a gap — provide a numeric Current value and Target (e.g. "$500" and "$400").`};if(!Ct(e.unit,t.unit))return{current:e,target:t,deltaAbsolute:null,deltaPercent:null,comparable:!1,note:`Current (${e.unit||`no unit`}) and Target (${t.unit||`no unit`}) use different units — use matching units to calculate a gap.`};let n=t.numeric-e.numeric,r=e.numeric===0?null:n/e.numeric*100,i=n<0?`decrease`:n>0?`increase`:`no change`;return{current:e,target:t,deltaAbsolute:n,deltaPercent:r,comparable:!0,note:n===0?`Current value already meets the target — no change needed.`:r===null?`Target requires a ${i} of ${H(Math.abs(n),e.unit)} from the current value (current value is 0, so a percentage change is undefined).`:`Target requires a ${Math.abs(r).toFixed(1)}% ${i} from the current value (${H(Math.abs(n),e.unit)}).`}}var wt=/\b(reduce|reducing|decrease|decreasing|cut|cutting|drop|dropping|lower|lowering)\b/i,Tt=/\b(increase|increasing|raise|raising|grow|growing|boost|boosting|add|adding)\b/i;function Et(e,t){let n=(t||``).trim();if(!n)return{question:n,deterministic:!1,projectedValue:null,explanation:`Describe what changes, e.g. "reduce by 20%" or "increase by $50".`};if(e.numeric===null)return{question:n,deterministic:!1,projectedValue:null,explanation:`A numeric Current value is needed to calculate a what-if scenario deterministically — provide one, or ask AI Assist to reason about it qualitatively.`};let r=wt.test(n),i=Tt.test(n),a=r?-1:i?1:null;if(a!==null){let t=n.match(/(\d+(?:\.\d+)?)\s*%/);if(t){let i=Number(t[1]),o=e.numeric*(1+a*i/100);return{question:n,deterministic:!0,projectedValue:{raw:H(o,e.unit),numeric:o,unit:e.unit},explanation:`A ${i}% ${r?`decrease`:`increase`} from ${e.raw} gives ${H(o,e.unit)}.`}}let i=n.match(/([$€£]?)\s*([\d,]+(?:\.\d+)?)/);if(i){let t=Number(i[2].replace(/,/g,``));if(Number.isFinite(t)){let o=e.numeric+a*t;return{question:n,deterministic:!0,projectedValue:{raw:H(o,e.unit),numeric:o,unit:e.unit},explanation:`A ${r?`decrease`:`increase`} of ${i[0].trim()} from ${e.raw} gives ${H(o,e.unit)}.`}}}}let o=n.match(/\b(?:to|target)\b\s*([$€£]?)\s*([\d,]+(?:\.\d+)?)/i);if(o){let t=Number(o[2].replace(/,/g,``));if(Number.isFinite(t)){let r=U(e,{raw:String(t),numeric:t,unit:e.unit});return{question:n,deterministic:!0,projectedValue:{raw:H(t,e.unit),numeric:t,unit:e.unit},explanation:r.note}}}return{question:n,deterministic:!1,projectedValue:null,explanation:`Could not parse a numeric change from this question — try phrasing like "reduce by 20%", "increase by $50", or "target 400".`}}function W(e){return new Set(e.toLowerCase().match(/[a-z0-9]{4,}/g)||[])}function Dt(e,t,n){return e.map(e=>{let r=W(e);return{description:e,relatedConstraints:t.filter(e=>[...W(e)].some(e=>r.has(e))),relatedVariables:n.filter(e=>[...W(e)].some(e=>r.has(e)))}})}function Ot(e){return e.length===0?[]:e.map(e=>{let t=[];e.relatedConstraints.length&&t.push(`relates to constraint(s): ${e.relatedConstraints.join(`; `)}`),e.relatedVariables.length&&t.push(`relates to variable(s): ${e.relatedVariables.join(`; `)}`);let n=t.length?` — ${t.join(`; `)}`:``;return`${e.description}${n}. Actual cost/effort/risk trade-offs require judgement this structural check can't provide — use AI Assist for a fuller comparison, or weigh it yourself against your constraints.`})}function kt(e,t,n){return n?e.constraints.length===0?`Add your constraints so the listed options can be checked against them before picking one to pilot.`:t&&t.comparable?`${t.note} Compare the listed options against your constraints (see Trade-offs) and pilot the one that best closes this gap without violating a constraint.`:`Compare the listed options against your constraints (see Trade-offs) and pilot the one that fits best before committing fully.`:`List a few candidate strategies (Options) so they can be compared against your constraints — or use AI Assist to suggest some.`}function At(e,t){let n=[];return e.constraints.length===0&&n.push(`No constraints were supplied — without them, options can't be checked for what they might break.`),e.variables.length===0&&n.push(`No variables were supplied — naming what can actually be changed helps narrow which options are realistic.`),e.options.length===0&&n.push(`No candidate options/strategies were supplied yet.`),!e.currentValue&&!e.target?n.push(`No current value or target was supplied — a numeric gap can't be calculated without them.`):t&&!t.comparable?n.push(t.note):(!e.currentValue||!e.target)&&n.push(`No ${e.currentValue?`target`:`current value`} was supplied — a numeric gap can't be calculated without both.`),(!e.context||!e.context.trim())&&n.push(`No additional context was supplied (e.g. timeline, budget, who else is affected).`),n}function jt(e,t){let n=v({goal:e,context:t}).filter(e=>e.app.id!==`optimization`).find(e=>e.app.status===`available`||e.app.status===`experimental`);return n?a.getById(n.app.id).id:null}function Mt(e){let t=e.currentValue&&e.target?U(e.currentValue,e.target):null,n=Dt(e.options,e.constraints,e.variables),r=Ot(n);return{input:e,currentStateSummary:e.currentValue?`Current: ${e.currentValue.raw}${e.target?` — Target: ${e.target.raw}`:``}`:`No current value was supplied.`,gap:t,options:n,tradeOffs:r,recommendedNextStep:kt(e,t,e.options.length>0),missingInformation:At(e,t),suggestedCapabilityId:jt(e.objective,e.context)}}function G(e,t){return{kind:`intelligence-result`,sourceStudio:e,...t?{parentResultId:t}:{}}}function Nt(e){return e.length===0?`(none matched)`:e.map(e=>`- ${e.app.title} (${e.app.status})`).join(`
`)}function K(e,t,n,r){return{title:`Problem Solver: ${e.goal}`.slice(0,120),content:[`Goal: ${e.goal}`,e.context?`Context: ${e.context}`:``,e.constraints?.length?`Constraints: ${e.constraints.join(`; `)}`:``,``,`Understanding: ${r}`,n?`Confidence: ${n}`:``,``,`Recommended capabilities:`,Nt(t)].filter(e=>e!==``).join(`
`)}}function Pt(e){let{input:t}=e,n=`Decision: ${t.question}`.slice(0,120),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:`${e}: (none identified)`;return{title:n,content:[`Question: ${t.question}`,`Result: ${e.resultLabel}`,e.leadingAlternative?`Leading alternative: ${e.leadingAlternative}`:``,t.alternatives.length?`Alternatives: ${t.alternatives.map(e=>e.name).join(`, `)}`:``,t.criteria.length?`Criteria: ${t.criteria.map(e=>e.name).join(`, `)}`:``,``,r(`Trade-offs`,e.tradeOffs),r(`Risks`,e.risks),r(`Uncertainties`,e.uncertainties),``,`Recommended next step: ${e.nextStep}`].filter(e=>e!==``).join(`
`)}}function Ft(e,t,n,r){let i=n.slice(0,5).map(e=>e.app.title),a=[t,e.context||``,i.length?`Capabilities Problem Solver identified: ${i.join(`, `)}.`:``,r&&!r.loading&&r.answer?`AI Guide (unverified, AI-generated): ${r.answer}`:``].filter(Boolean);return{question:e.goal,context:a.join(` `)}}function It(e,t){let{input:n}=e,r=t?[t.criteria.length?`criteria to consider: ${t.criteria.join(`; `)}`:``,t.tradeOffs.length?`possible trade-offs: ${t.tradeOffs.join(`; `)}`:``,t.risks.length?`possible risks: ${t.risks.join(`; `)}`:``,t.questions.length?`open questions: ${t.questions.join(`; `)}`:``].filter(Boolean).join(` | `):``,i=[n.alternatives.length?`Weighing: ${n.alternatives.map(e=>e.name).join(`, `)}.`:``,`Decision result so far: ${e.resultLabel}.`,e.nextStep,r?`AI Suggestions (unverified, AI-generated) — ${r}.`:``].filter(Boolean);return{goal:n.question,context:i.join(` `)}}function Lt(e){let{input:t}=e,n=`Verification: ${t.claim}`.slice(0,120),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:`${e}: (none)`,i=t.evidence.length?t.evidence.map(e=>`- [${e.stance}] ${e.text} (source: ${e.source})`).join(`
`):`(none supplied)`,a=e.contradictions.length?e.contradictions.map(e=>`- "${e.claimA}" (${e.sourceA}) vs. "${e.claimB}" (${e.sourceB})`).join(`
`):`(none identified)`;return{title:n,content:[`Claim: ${t.claim}`,t.context?`Context: ${t.context}`:``,`Status: ${e.status}`,``,`Evidence:\n${i}`,``,`Contradictions:\n${a}`,``,r(`Missing Information`,e.missingInformation),``,`Conclusion: ${e.conclusion}`].filter(e=>e!==``).join(`
`)}}function Rt(e,t){let n=t?[t.statusReading?`AI's read: ${t.statusReading}`:``,t.evidence.length?`AI-identified evidence: ${t.evidence.join(`; `)}`:``,t.contradictions.length?`AI-identified contradictions: ${t.contradictions.join(`; `)}`:``,t.missing.length?`AI-identified missing info: ${t.missing.join(`; `)}`:``,t.conclusion?`AI conclusion: ${t.conclusion}`:``].filter(Boolean).join(` | `):``,r=[`Verification result so far: ${e.status}.`,e.conclusion,n?`AI Verification Assist (unverified, AI-generated) — ${n}.`:``].filter(Boolean);return{goal:e.input.claim,context:r.join(` `)}}function zt(e){let{input:t}=e,n=`Diagnosis: ${t.problem}`.slice(0,120),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:`${e}: (none)`,i=e=>`    - ${e.text} (source: ${e.source})`,a=e.hypothesisRows.length?e.hypothesisRows.map(e=>[`- ${e.hypothesis.name}`,`  Supporting evidence:${e.supportingEvidence.length?``:` (none)`}`,...e.supportingEvidence.map(i),`  Contradicting evidence:${e.contradictingEvidence.length?``:` (none)`}`,...e.contradictingEvidence.map(i),`  Test: ${e.recommendedTest}`].join(`
`)).join(`
`):`(no possible causes supplied)`;return{title:n,content:[`Problem: ${t.problem}`,t.context?`Context: ${t.context}`:``,`Stage: ${e.stage}`,``,r(`Symptoms`,t.symptoms),r(`Observations`,t.observations),``,`Hypothesis Table:\n${a}`,``,r(`Missing Information`,e.missingInformation),``,`Next Action: ${e.nextAction}`].filter(e=>e!==``).join(`
`)}}function Bt(e,t,n,r,i){let a=K(e,t,n,r),o=i&&!i.loading&&i.answer?`\n\n---\n\nAI Guide (unverified, AI-generated):\n${i.answer}`:``;return{title:a.title,content:a.content+o}}function Vt(e,t){let n=Pt(e),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:``,i=t?[`

---

AI Suggestions (unverified, AI-generated — not part of the deterministic analysis above):`,r(`Additional criteria to consider`,t.criteria),r(`Possible hidden trade-offs`,t.tradeOffs),r(`Possible risks`,t.risks),r(`Questions worth investigating`,t.questions)].filter(e=>e!==``).join(`
`):``;return{title:n.title,content:n.content+i}}function Ht(e,t){let n=Lt(e),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:``,i=t?[`

---

AI Verification Assist (unverified, AI-generated — never automatically authoritative):`,t.statusReading?`AI's own read of the status: ${t.statusReading}`:``,r(`Evidence the AI identified`,t.evidence),r(`Contradictions the AI identified`,t.contradictions),r(`Missing information the AI identified`,t.missing),t.conclusion?`AI summary of reasoning: ${t.conclusion}`:``].filter(e=>e!==``).join(`
`):``;return{title:n.title,content:n.content+i}}function Ut(e,t){let n=zt(e),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:``,i=t?[`

---

AI Diagnosis Assist (unverified, AI-generated — never a definitive diagnosis):`,r(`Additional possible causes to consider`,t.additionalCauses),r(`Additional observations the AI identified`,t.observations),r(`Suggested tests`,t.recommendedTests),r(`Missing information the AI identified`,t.missing),t.summary?`AI summary: ${t.summary}`:``].filter(e=>e!==``).join(`
`):``;return{title:n.title,content:n.content+i}}function Wt(e,t){let n=t?[t.additionalCauses.length?`possible causes: ${t.additionalCauses.join(`; `)}`:``,t.observations.length?`observations: ${t.observations.join(`; `)}`:``,t.recommendedTests.length?`suggested tests: ${t.recommendedTests.join(`; `)}`:``,t.missing.length?`missing info: ${t.missing.join(`; `)}`:``,t.summary?`summary: ${t.summary}`:``].filter(Boolean).join(` | `):``,r=[`Diagnosis so far: ${e.stage}.`,e.nextAction,n?`AI Diagnosis Assist (unverified, AI-generated) — ${n}.`:``].filter(Boolean);return{goal:e.input.problem,context:r.join(` `)}}function Gt(e){let{input:t}=e,n=`Inspection: ${t.objective}`.slice(0,120),r=t.inputs.length?t.inputs.map(e=>`- ${e.name} (${e.kind}${e.unreadable?` — not readable, not analyzed`:``})`).join(`
`):`(none attached)`,i=e.findings.length?e.findings.map((e,t)=>[`${t+1}. [${e.confidence}] ${e.description}`,e.location?`   Location: ${e.location}`:``,`   Evidence: ${e.evidence}`,e.severity?`   Severity: ${e.severity}`:``,`   Recommended next step: ${e.recommendedNextStep}`].filter(e=>e!==``).join(`
`)).join(`
`):`(no findings returned)`;return{title:n,content:[`Objective: ${t.objective}`,t.context?`Context: ${t.context}`:``,`Analyzed via: ${e.analyzedVia===`vision`?`Vision (image analysis)`:`Text (document/sensor-data analysis)`}`,``,`Attached input(s):\n${r}`,``,`Findings:\n${i}`,``,`Overall assessment: ${e.overallAssessment}`,``,((e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:`${e}: (none)`)(`Missing Information`,e.missingInformation),``,`Recommended Next Action: ${e.recommendedNextAction}`].filter(e=>e!==``).join(`
`)}}function q(e,t){let n=Gt(e),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:``,i=t?[`

---

AI Inspection Assist (unverified, AI-generated — never a substitute for the Findings above):`,r(`Additional checks worth doing`,t.additionalChecks),r(`Possible underlying causes`,t.possibleCauses),r(`Missing information the AI identified`,t.missing),t.summary?`AI summary: ${t.summary}`:``].filter(e=>e!==``).join(`
`):``;return{title:n.title,content:n.content+i}}function Kt(e,t){let n=e.findings.length?`${e.findings.length} finding${e.findings.length===1?``:`s`} reported (${e.findings.map(e=>e.confidence).join(`, `)}).`:`No findings were reported.`,r=t?[t.additionalChecks.length?`additional checks: ${t.additionalChecks.join(`; `)}`:``,t.possibleCauses.length?`possible causes: ${t.possibleCauses.join(`; `)}`:``,t.missing.length?`missing info: ${t.missing.join(`; `)}`:``,t.summary?`summary: ${t.summary}`:``].filter(Boolean).join(` | `):``,i=[n,e.overallAssessment,e.recommendedNextAction,r?`AI Inspection Assist (unverified, AI-generated) — ${r}.`:``].filter(Boolean);return{goal:e.input.objective,context:i.join(` `)}}function qt(e){let{input:t}=e,n=`Optimization: ${t.objective}`.slice(0,120),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:`${e}: (none supplied)`,i=e.options.length?e.options.map((e,t)=>`${t+1}. ${e.description}`).join(`
`):`(none supplied)`;return{title:n,content:[`CURRENT STATE\n${e.currentStateSummary}${e.gap?`\n${e.gap.note}`:``}`,``,`OBJECTIVE\n${t.objective}`,t.context?`\nContext: ${t.context}`:``,``,r(`CONSTRAINTS`,t.constraints),``,r(`VARIABLES`,t.variables),``,`OPTIONS\n${i}`,``,r(`TRADE-OFFS`,e.tradeOffs),``,r(`MISSING INFORMATION`,e.missingInformation),``,`RECOMMENDED NEXT STEP\n${e.recommendedNextStep}`].filter(e=>e!==``).join(`
`)}}function Jt(e,t){let n=qt(e),r=(e,t)=>t.length?`${e}:\n${t.map(e=>`- ${e}`).join(`
`)}`:``,i=t?[`

---

AI Optimization Assist (unverified, AI-generated — never a substitute for the deterministic sections above):`,r(`Trade-off analysis`,t.tradeOffAnalysis),r(`Risks`,t.risks),r(`Additional options to consider`,t.additionalOptions),t.summary?`AI summary: ${t.summary}`:``].filter(e=>e!==``).join(`
`):``;return{title:n.title,content:n.content+i}}function Yt(e,t){let n=t?[t.tradeOffAnalysis.length?`trade-offs: ${t.tradeOffAnalysis.join(`; `)}`:``,t.risks.length?`risks: ${t.risks.join(`; `)}`:``,t.additionalOptions.length?`additional options: ${t.additionalOptions.join(`; `)}`:``,t.summary?`summary: ${t.summary}`:``].filter(Boolean).join(` | `):``,r=[e.currentStateSummary,e.gap?e.gap.note:``,e.recommendedNextStep,n?`AI Optimization Assist (unverified, AI-generated) — ${n}.`:``].filter(Boolean);return{goal:e.input.objective,context:r.join(` `)}}u();var Xt={core:`Core AI`,intelligence:`Intelligence`},Zt=[`core`,`intelligence`],J={question:``,alternatives:``,criteria:``,constraints:``,context:``,evidence:``},Y={claim:``,evidence:``,context:``},X={problem:``,symptoms:``,observations:``,hypotheses:``,evidence:``,context:``},Qt={objective:``,context:``,sensorData:``},Z={objective:``,variables:``,constraints:``,currentValue:``,target:``,options:``,context:``},$t={speech:`audio`,music:`audio`,podcast:`audio`};function Q(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function en(e){try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`?t:null}catch{return null}}function tn(e){let t=e.pathname&&e.pathname!==`/`?e.pathname.replace(/\/+$/,``):``;return`${e.hostname}${t}`||e.href}var nn={Document:`doc`,Research:`research`,Image:`image`,Video:`video`,Audio:`audio`,Game:`game`,"Web Source":`link`,Other:`app`,Text:`text`,Data:`data`,Chart:`chart`,Code:`coding`,"Agent Output":`agents`,Vision:`vision`,Robotics:`robotics`,Autonomous:`autonomous`,Quantum:`quantum`,Configuration:`config`},rn={available:{label:`AVAILABLE`,cls:`available`},external:{label:`EXTERNAL`,cls:`external`},unavailable:{label:`UNAVAILABLE`,cls:`unavailable`},metadata_only:{label:`METADATA ONLY`,cls:`metadata`}},an={"CLEAR LEAD":`clear`,"TENTATIVE LEAD":`tentative`,"NO CLEAR LEAD":`no-clear`,"INSUFFICIENT DATA":`insufficient`,TIE:`tie`},on={SUPPORTED:`clear`,CONTRADICTED:`insufficient`,UNVERIFIED:`no-clear`,"PARTIALLY SUPPORTED":`tentative`,"INSUFFICIENT EVIDENCE":`tie`},sn={"NO HYPOTHESES YET":`tie`,"HYPOTHESES LISTED — NO EVIDENCE YET":`no-clear`,"EVIDENCE GATHERED — NOT CONCLUSIVE":`tentative`},cn={Detected:`insufficient`,Likely:`tentative`,Possible:`no-clear`,"Not detected":`clear`,"Unable to determine":`tie`},ln={High:`insufficient`,Medium:`tentative`,Low:`clear`},$={available:`Available`,experimental:`Experimental`,"coming-soon":`Coming Soon`,offline:`Unavailable`,disabled:`Disabled`},un=class extends n{favorites=[];searchQuery=``;noticeTimeout=null;lastProblemSolverResult=null;problemSolverPrefill=null;handoffNote=null;lastDecisionRaw=J;lastDecisionAnalysis=null;decisionAiSuggestions=null;decisionAiLoading=!1;decisionAiError=null;lastVerificationRaw=Y;lastVerificationAnalysis=null;verificationAiAssist=null;verificationAiLoading=!1;verificationAiError=null;lastDiagnosisRaw=X;lastDiagnosisAnalysis=null;diagnosisAiAssist=null;diagnosisAiLoading=!1;diagnosisAiError=null;lastInspectionRaw=Qt;inspectionAttachedInputs=[];inspectionDocExtracting=!1;inspectionDocStatus=null;inspectionDocError=null;lastInspectionAnalysis=null;inspectionAnalyzing=!1;inspectionError=null;inspectionAiAssist=null;inspectionAiLoading=!1;inspectionAiError=null;lastOptimizationRaw=Z;lastOptimizationAnalysis=null;optimizationAiAssist=null;optimizationAiLoading=!1;optimizationAiError=null;optimizationWhatIfs=[];knowledgeActivePanel=`none`;lastKnowledgeQuestion=``;lastKnowledgeFindQuery=``;knowledgeAnswer=null;knowledgeFindResults=null;knowledgeFindLoading=!1;knowledgeSummary=null;knowledgeGaps=null;knowledgeAddSourceMode=`text`;knowledgeAddSourceDraft={name:``,type:`document`,content:``,urls:``};knowledgeEditProjectDraft={name:``,description:``};knowledgeUrlAddNotice=null;knowledgeUploadedFile=null;knowledgeFileExtracting=!1;knowledgeFileStatus=null;knowledgeFileError=null;knowledgeAiAnswer=null;knowledgeAiLoading=!1;knowledgeAiError=null;knowledgeResolvedSources=null;onKeydown=e=>this.handleGridKeydown(e);activeWorkspace=`desktop`;onProjectChanged=()=>{this.activeWorkspace===`knowledge`?this.renderKnowledgeWorkspace():this.activeWorkspace===`decision`?this.renderDecisionWorkspace():this.activeWorkspace===`verification`?this.renderVerificationWorkspace():this.activeWorkspace===`diagnosis`?this.renderDiagnosisWorkspace():this.activeWorkspace===`inspection`?this.renderInspectionWorkspace():this.activeWorkspace===`optimization`?this.renderOptimizationWorkspace():this.activeWorkspace===`problem`&&this.patchIntelligenceProjectDisplay()};patchIntelligenceProjectDisplay(){let e=this.outputPanel.querySelector(`.stage`);if(!e)return;let t=this.kernel.getProjectManager(),n=t.getProjects(),r=t.getCurrentProject(),i=e.querySelector(`#studioIntelProjectSelect`);i&&(i.innerHTML=`
        ${n.length===0?`<option value="">No Project Selected</option>`:``}
        ${n.map(e=>`<option value="${Q(e.id)}" ${e.id===r?.id?`selected`:``}>${Q(e.name)}</option>`).join(``)}
        <option value="__new__">+ New Project&hellip;</option>`);let a=e.querySelector(`.studio-project-context`);a&&r&&(a.innerHTML=`Project context: <b>${Q(r.name)}</b>`)}activate(){this.favorites=this.getPersistedFavorites(),this.renderControlPanel(),this.renderDesktop(),this.wireControlPanelEvents(),this.kernel.getEventBus().emit(`studio:opened`),this.outputPanel.addEventListener(`keydown`,this.onKeydown),this.kernel.getEventBus().on(`project:created`,this.onProjectChanged),this.kernel.getEventBus().on(`project:selected`,this.onProjectChanged),this.kernel.getEventBus().on(`project:deleted`,this.onProjectChanged)}onReselect(){this.renderDesktop()}deactivate(){this.outputPanel.removeEventListener(`keydown`,this.onKeydown),this.noticeTimeout&&window.clearTimeout(this.noticeTimeout),this.kernel.getEventBus().off(`project:created`,this.onProjectChanged),this.kernel.getEventBus().off(`project:selected`,this.onProjectChanged),this.kernel.getEventBus().off(`project:deleted`,this.onProjectChanged)}getTitle(){return`Studio — MAGENAIS Desktop`}getPersistedFavorites(){let e=this.kernel.getStore().getState().userPreferences?.studioFavorites;return Array.isArray(e)?e.filter(e=>typeof e==`string`):[]}setFavorites(e){this.favorites=e,this.kernel.getStore().getActions().setUserPreference(`studioFavorites`,e),this.kernel.getEventBus().emit(`studio:favoriteChanged`,e)}toggleFavorite(e){let t=this.favorites.includes(e)?this.favorites.filter(t=>t!==e):[...this.favorites,e];this.setFavorites(t),this.renderFavoritesList(),this.syncFavoriteButtons()}getRecentAppIds(){let e=this.kernel.getStore().getState().history||[],t=new Set,n=[];for(let r of e){let e=$t[r.mode]||r.mode;if(!t.has(e)&&(t.add(e),a.getById(e)&&n.push(e),n.length>=5))break}return n}renderControlPanel(){this.renderControl(`
      <div class="studio-control">
        <div class="studio-search-wrap">
          <div class="studio-search-row">
            <span class="studio-search-icon">${i(`search`,16)}</span>
            <input type="text" id="studioSearchInput" class="studio-search-input"
                   placeholder="Search MAGENAIS..." aria-label="Search MAGENAIS applications and services"
                   autocomplete="off" role="combobox" aria-expanded="false" aria-controls="studioSearchResults">
            <button type="button" id="studioSearchClear" class="studio-search-clear" aria-label="Clear search" title="Clear search" hidden>&#10005;</button>
            <kbd class="studio-search-kbd" id="studioSearchKbd">${navigator.platform.toLowerCase().includes(`mac`)?`⌘K`:`Ctrl+K`}</kbd>
          </div>
          <div id="studioSearchResults" class="studio-search-results studio-mini-list" role="listbox" hidden></div>
        </div>

        <div class="studio-section">
          <p class="field-label">Quick Actions</p>
          <div class="studio-quick-actions">
            <button class="ghost-btn small" id="studioSymbiosisBtn">${i(`symbiosis`,13)} Symbiosis</button>
            <button class="ghost-btn small" id="studioNewProjectBtn">${i(`plus`,13)} New Project</button>
            <button class="ghost-btn small" id="studioOpenProjectBtn">${i(`folder`,13)} Open Project</button>
            <button class="ghost-btn small" id="studioDeleteProjectBtn">${i(`trash`,13)} Delete Project</button>
            <button class="ghost-btn small" id="studioNewWorkflowBtn">${i(`workflow`,13)} New Workflow</button>
            <button class="ghost-btn small" id="studioOpenHistoryBtn">${i(`history`,13)} Open History</button>
          </div>
        </div>

        <div class="studio-section">
          <p class="field-label">Ask MAGENAIS</p>
          <p class="hint" style="margin-bottom:6px;">What do you want to accomplish?</p>
          <div class="studio-ask-row">
            <input type="text" id="studioAskInput" placeholder="e.g. Analyze this image" aria-label="Describe what you want to accomplish">
            <button class="ghost-btn small" id="studioAskBtn">${i(`ask`,13)}</button>
          </div>
          <div id="studioAskResult"></div>
        </div>

        <div class="studio-section">
          <p class="field-label">Favorites</p>
          <div id="studioFavoritesList" class="studio-mini-list"></div>
        </div>

        <div class="studio-section">
          <p class="field-label">Recent</p>
          <div id="studioRecentList" class="studio-mini-list"></div>
        </div>
      </div>
    `),this.renderFavoritesList(),this.renderRecentList()}miniListMarkup(e,t){return e.length===0?`<p class="hint">${t}</p>`:e.map(e=>{let t=a.getById(e);return t?`
          <button class="studio-mini-item" data-open-id="${t.id}" title="${Q(t.description)}">
            <span class="studio-mini-icon">${i(t.icon,15)}</span>
            <span class="studio-mini-title">${Q(t.title)}</span>
          </button>`:``}).join(``)}renderFavoritesList(){let e=this.controlPanel.querySelector(`#studioFavoritesList`);e&&(e.innerHTML=this.miniListMarkup(this.favorites,`Star an app on the desktop to pin it here.`),e.querySelectorAll(`[data-open-id]`).forEach(e=>{e.addEventListener(`click`,()=>this.activateApp(e.dataset.openId))}))}renderRecentList(){let e=this.controlPanel.querySelector(`#studioRecentList`);e&&(e.innerHTML=this.miniListMarkup(this.getRecentAppIds(),`Nothing generated yet this session.`),e.querySelectorAll(`[data-open-id]`).forEach(e=>{e.addEventListener(`click`,()=>this.activateApp(e.dataset.openId))}))}renderSearchResultsDropdown(){let e=this.controlPanel.querySelector(`#studioSearchResults`),t=this.controlPanel.querySelector(`#studioSearchInput`);if(!e)return;let n=this.searchQuery.trim();if(!n){e.hidden=!0,e.innerHTML=``,t?.setAttribute(`aria-expanded`,`false`);return}let r=a.search(n);e.innerHTML=r.length===0?`<p class="hint" style="padding:6px 8px;">No matches for "${Q(n)}".</p>`:this.miniListMarkup(r.map(e=>e.id),``),e.hidden=!1,t?.setAttribute(`aria-expanded`,`true`),e.querySelectorAll(`[data-open-id]`).forEach(e=>{e.addEventListener(`mousedown`,e=>e.preventDefault()),e.addEventListener(`click`,()=>{this.activateApp(e.dataset.openId),t&&(t.value=``,t.blur()),this.searchQuery=``,this.renderSearchResultsDropdown()})})}wireControlPanelEvents(){let e=this.controlPanel.querySelector(`#studioSearchInput`),t=this.controlPanel.querySelector(`#studioSearchClear`),n=this.controlPanel.querySelector(`#studioSearchKbd`),r=()=>{let r=!!e?.value;t&&(t.hidden=!r),n&&(n.hidden=r)};e?.addEventListener(`input`,()=>{this.searchQuery=e.value,r(),this.kernel.getEventBus().emit(`studio:search`,this.searchQuery),this.renderDesktop(),this.renderSearchResultsDropdown()}),e?.addEventListener(`focus`,()=>this.renderSearchResultsDropdown()),e?.addEventListener(`blur`,()=>{let t=this.controlPanel.querySelector(`#studioSearchResults`);t&&(t.hidden=!0,e.setAttribute(`aria-expanded`,`false`))}),e?.addEventListener(`keydown`,t=>{t.key===`Escape`&&(e.value=``,this.searchQuery=``,r(),this.renderDesktop(),this.renderSearchResultsDropdown(),e.blur())}),t?.addEventListener(`click`,()=>{e&&(e.value=``,this.searchQuery=``,r(),this.renderDesktop(),this.renderSearchResultsDropdown(),e.focus())}),r(),this.controlPanel.querySelector(`#studioSymbiosisBtn`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:openMode`,`symbiosis`)}),this.controlPanel.querySelector(`#studioNewProjectBtn`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)}),this.controlPanel.querySelector(`#studioOpenProjectBtn`)?.addEventListener(`click`,()=>{g(this.kernel,{focus:`projects`})}),this.controlPanel.querySelector(`#studioDeleteProjectBtn`)?.addEventListener(`click`,()=>{g(this.kernel,{focus:`projects`})}),this.controlPanel.querySelector(`#studioNewWorkflowBtn`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newWorkflow`)}),this.controlPanel.querySelector(`#studioOpenHistoryBtn`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`openHistory`)});let i=this.controlPanel.querySelector(`#studioAskInput`),a=()=>this.handleAskMagenais(i?.value||``);this.controlPanel.querySelector(`#studioAskBtn`)?.addEventListener(`click`,a),i?.addEventListener(`keydown`,e=>{e.key===`Enter`&&a()})}handleAskMagenais(e){let t=this.controlPanel.querySelector(`#studioAskResult`),n=e.trim();if(!n){t&&(t.innerHTML=``);return}let r=a.search(n).filter(e=>e.category===`core`);t&&(t.innerHTML=``),f(this.kernel,n,r,e=>this.activateApp(e))}renderDesktop(){this.activeWorkspace=`desktop`,this.handoffNote=null;let e=this.outputPanel.querySelector(`.stage`);if(!e)return;let t=this.searchQuery.trim()?a.search(this.searchQuery):a.getAll(),n=new Map;for(let e of Zt)n.set(e,[]);for(let e of t)n.get(e.category)?.push(e);e.innerHTML=`
      <div class="studio-desktop">
        <div class="studio-desktop-header">
          <div class="studio-desktop-title">MAGENAIS<span>&nbsp;GENAI OPERATING SYSTEM</span></div>
          <div class="studio-desktop-subtitle">Studio Desktop</div>
        </div>
        <div id="studioNotice" class="studio-notice" hidden></div>
        ${Zt.map(e=>{let t=n.get(e)||[];return t.length===0?``:`
        <section class="studio-category" aria-label="${Xt[e]}">
          <h3 class="studio-category-title">${Xt[e]}</h3>
          ${this.categoryBodyMarkup(t)}
        </section>`}).join(``)||`<p class="hint" style="padding:20px;">No applications or services match your search.</p>`}
      </div>
    `,e.querySelectorAll(`.studio-tile`).forEach(e=>{e.addEventListener(`click`,()=>this.activateApp(e.dataset.appId))}),e.querySelectorAll(`.studio-tile-fav`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),this.toggleFavorite(e.dataset.favId)})})}categoryBodyMarkup(e){return`<div class="studio-grid" role="grid">${e.map(e=>this.tileMarkup(e)).join(``)}</div>`}tileMarkup(e){let t=this.favorites.includes(e.id),n=e.status===`available`||e.status===`experimental`,r=$[e.status]||e.status;return`
      <div class="studio-tile-wrap">
        <button class="studio-tile studio-status-${e.status}" data-app-id="${e.id}" role="gridcell"
                aria-label="${Q(e.title)} — ${r}" title="${Q(e.description)}">
          <span class="studio-tile-icon">${i(e.icon,22)}</span>
          <span class="studio-tile-title">${Q(e.title)}</span>
          <span class="studio-tile-desc">${Q(e.description)}</span>
          <span class="studio-tile-footer">
            <span class="studio-status-pill studio-status-pill-${e.status}">${r}</span>
            ${e.badge?`<span class="studio-tile-badge">${Q(e.badge)}</span>`:``}
            ${e.shortcut?`<kbd class="studio-tile-shortcut">${Q(e.shortcut)}</kbd>`:``}
          </span>
          ${n?``:`<span class="studio-tile-lock">`+i(`lock`,12)+`</span>`}
        </button>
        <button class="studio-tile-fav" data-fav-id="${e.id}" aria-pressed="${t}"
                aria-label="${t?`Remove `+Q(e.title)+` from favorites`:`Add `+Q(e.title)+` to favorites`}">
          ${i(`star`,13)}
        </button>
      </div>`}syncFavoriteButtons(){this.outputPanel.querySelectorAll(`.studio-tile-fav`).forEach(e=>{let t=e.dataset.favId,n=this.favorites.includes(t);e.setAttribute(`aria-pressed`,String(n)),e.classList.toggle(`is-favorite`,n)})}activateApp(e){let t=a.getById(e);if(t){if(t.status!==`available`&&t.status!==`experimental`){this.showNotice(`${t.title} — Coming in a future version.`);return}if(this.kernel.getEventBus().emit(`studio:appOpened`,e),e===`problem`){this.renderProblemSolver();return}if(e===`decision`){this.renderDecisionWorkspace();return}if(e===`knowledge`){this.renderKnowledgeWorkspace();return}if(e===`verification`){this.renderVerificationWorkspace();return}if(e===`diagnosis`){this.renderDiagnosisWorkspace();return}if(e===`inspection`){this.renderInspectionWorkspace();return}if(e===`optimization`){this.renderOptimizationWorkspace();return}t.action({openMode:e=>this.kernel.getEventBus().emit(`studio:openMode`,e),quickAction:e=>this.kernel.getEventBus().emit(`studio:quickAction`,e)})}}intelligenceTopbarMarkup(e){let t=this.kernel.getProjectManager(),n=t.getProjects(),r=t.getCurrentProject();return`
      <div class="studio-intel-topbar">
        <div class="studio-intel-topbar-row">
          <button type="button" class="ghost-btn small" id="studioIntelHome">&larr; Studio</button>
          <div class="studio-intel-tabs" role="tablist" aria-label="Intelligence workspaces">${a.getByCategory(`intelligence`).filter(e=>e.status===`available`||e.status===`experimental`).map(t=>`
        <button type="button" class="studio-intel-tab ${t.id===e?`active`:``}" data-intel-tab="${t.id}"
                role="tab" aria-selected="${t.id===e}" title="${Q(t.description)}">
          ${i(t.icon,14)}<span>${Q(t.title)}</span>
        </button>`).join(``)}</div>
        </div>
        <div class="studio-intel-project">
          <label class="hint" for="studioIntelProjectSelect">Project</label>
          <select id="studioIntelProjectSelect" aria-label="Active project">
            ${n.length===0?`<option value="">No Project Selected</option>`:``}
            ${n.map(e=>`<option value="${Q(e.id)}" ${e.id===r?.id?`selected`:``}>${Q(e.name)}</option>`).join(``)}
            <option value="__new__">+ New Project&hellip;</option>
          </select>
          <button type="button" class="ghost-btn small" id="studioIntelStartSymbiosis" title="Bring this into a Symbiosis discussion">🧬 Start Symbiosis</button>
        </div>
        ${this.handoffNoteMarkup()}
      </div>`}handoffNoteMarkup(){return this.handoffNote?`<div class="studio-notice-inline" style="margin-top:0;">${Q(this.handoffNote)}</div>`:``}wireIntelligenceTopbar(e){e.querySelector(`#studioIntelHome`)?.addEventListener(`click`,()=>this.renderDesktop()),e.querySelector(`#studioIntelStartSymbiosis`)?.addEventListener(`click`,()=>{r(this.kernel)}),e.querySelectorAll(`[data-intel-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.intelTab;t!==this.activeWorkspace&&this.activateApp(t)})});let t=e.querySelector(`#studioIntelProjectSelect`);t?.addEventListener(`change`,()=>{let e=t.value;if(e===`__new__`){t.value=this.kernel.getProjectManager().getCurrentProject()?.id||``,this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`);return}e&&this.switchActiveProject(e)})}switchActiveProject(e){this.activeWorkspace===`knowledge`&&this.resetKnowledgeQuestionState(),this.kernel.getProjectManager().setCurrentProject(e)}renderProblemSolver(e){this.activeWorkspace=`problem`;let t=this.outputPanel.querySelector(`.stage`);if(!t)return;let n=e?null:this.problemSolverPrefill;n&&(this.problemSolverPrefill=null);let r=e?.kind===`empty`?``:e?.ctx.goal??n?.goal??``,a=e?.kind===`empty`?``:e?.ctx.context??n?.context??``,o=this.kernel.getProjectManager().getCurrentProject();t.innerHTML=`
      <div class="studio-workspace">
        ${this.intelligenceTopbarMarkup(`problem`)}
        <div class="studio-workspace-header">
          <div>
            <div class="studio-workspace-title">${i(`problem`,20)} MAGENAIS Intelligence — Problem Solver</div>
            <p class="hint">Describe what you're trying to accomplish. MAGENAIS will suggest which existing capabilities can help — nothing runs automatically.</p>
            ${o?`<p class="studio-project-context">Project context: <b>${Q(o.name)}</b></p>`:``}
          </div>
        </div>

        <div class="studio-section">
          <p class="field-label">What are you trying to accomplish?</p>
          <textarea id="studioPsGoal" rows="2" placeholder="e.g. I want to analyze this CSV" aria-label="Goal">${Q(r)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Context / constraints <span class="hint">(optional)</span></p>
          <textarea id="studioPsContext" rows="2" placeholder="Any extra detail, constraints, or requirements..." aria-label="Context and constraints">${Q(a)}</textarea>
        </div>
        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioPsAnalyze">${i(`problem`,14)} Analyze Goal</button>
          <button type="button" class="ghost-btn" id="studioPsClear">Clear</button>
        </div>

        <div id="studioPsResult">${e?this.problemSolverViewMarkup(e):``}</div>
      </div>`,this.wireIntelligenceTopbar(t);let s=t.querySelector(`#studioPsGoal`),c=t.querySelector(`#studioPsContext`);t.querySelector(`#studioPsAnalyze`)?.addEventListener(`click`,()=>this.runProblemSolver(s?.value||``,c?.value||``)),t.querySelector(`#studioPsClear`)?.addEventListener(`click`,()=>{this.handoffNote=null,this.lastProblemSolverResult=null,this.renderProblemSolver()}),s?.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),this.runProblemSolver(s.value,c?.value||``))}),this.lastProblemSolverResult=e?.kind===`result`?e:null,e&&e.kind!==`empty`&&this.wireProblemSolverResult(),(!e||e.kind===`empty`)&&s?.focus()}runProblemSolver(e,t){this.handoffNote=null;let n=e.trim();if(!n){this.renderProblemSolver({kind:`empty`}),this.outputPanel.querySelector(`#studioPsGoal`)?.focus();return}let r={goal:n,context:t.trim()||void 0,projectId:this.kernel.getProjectManager().getCurrentProject()?.id},i=v(r);if(this.kernel.getEventBus().emit(`studio:problemSolverRun`,{goal:n,resultCount:i.length}),i.length===0){let e={kind:`result`,ctx:r,matches:i,confidence:y(i),understanding:b(i),aiFallback:{loading:!0}};this.renderProblemSolver(e);let t=`You are MAGENAIS's Problem Solver. A user described this goal: "${n}"${r.context?` (context: "${r.context}")`:``}. MAGENAIS's own local capability matcher found no built-in tab/tool that clearly fits. MAGENAIS has these tabs: Text, Image, Video, Audio, Data Analytics, Documents, Research, Game, Coding, Vision, Agents, Autonomous, Robotics, Quantum. In 2-4 short sentences, suggest the closest-fitting tab(s) if any genuinely apply, or explain what the person could try instead (rephrasing, combining tabs, etc). Be concrete, not generic filler.`;this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:t},{},()=>{}).then(t=>{if(this.lastProblemSolverResult?.ctx!==r)return;let n=typeof t==`string`?t:t?.finalOutput??String(t);this.renderProblemSolver({...e,aiFallback:{loading:!1,answer:n}})}).catch(t=>{this.lastProblemSolverResult?.ctx===r&&this.renderProblemSolver({...e,aiFallback:{loading:!1,error:t?.message||String(t)}})});return}this.renderProblemSolver({kind:`result`,ctx:r,matches:i,confidence:y(i),understanding:b(i)})}problemSolverViewMarkup(e){return e.kind===`empty`?`
        <div class="studio-result-card studio-result-warn">
          <p>Please describe what you're trying to accomplish before analyzing.</p>
        </div>`:this.problemSolverResultMarkup(e.ctx,e.matches,e.confidence,e.understanding,e.aiFallback)}problemSolverResultMarkup(e,t,n,r,a){if(t.length===0)return`
        <div class="studio-result-card">
          <p class="field-label">Goal</p>
          <p>${Q(e.goal)}</p>
          <p class="field-label" style="margin-top:14px;">MAGENAIS could not determine a suitable built-in capability yet.</p>
          <p class="field-label" style="margin-top:10px;">AI Guide</p>
          <div class="result-text">${!a||a.loading?`<span class="hint">Asking your enabled AI provider for a suggestion…</span>`:a.error?`<span class="hint">Couldn't reach an AI provider (${Q(a.error)}) — enable one under Keys &amp; Providers.</span>`:Q(a.answer||``).replace(/\n/g,`<br>`)}</div>
          <p class="hint" style="margin-top:10px;">Or mention what kind of content or task is involved (e.g. "image", "document", "robot", "data"), or use Studio search below to browse everything MAGENAIS can do.</p>
          <div class="studio-ps-actions">
            <button type="button" class="ghost-btn" id="studioPsTryAgain">Try Again</button>
          </div>
          <p class="field-label" style="margin-top:14px;">Export</p>
          ${this.renderSaveBar(`studio-problem`)}
        </div>`;let o=t[0].app,s=t.filter(e=>e.app.status===`available`||e.app.status===`experimental`),c=o.status===`available`||o.status===`experimental`?o:s[0]?.app,l=!this.kernel.getProviderManager().hasAnyUsableProvider(),u=t.map(({app:e})=>{let t=e.status===`available`||e.status===`experimental`,n=$[e.status]||e.status;return`
        <button type="button" class="studio-capability-chip studio-status-${e.status}" data-cap-id="${e.id}" ${t?``:`disabled`}
                title="${Q(e.description)}">
          ${i(e.icon,15)}
          <span>${Q(e.title)}</span>
          <span class="studio-status-pill studio-status-pill-${e.status}">${n}</span>
        </button>`}).join(``),d=s.length>1;return`
      <div class="studio-result-card">
        <p class="field-label">Goal</p>
        <p>${Q(e.goal)}</p>
        ${e.context?`<p class="field-label" style="margin-top:8px;">Context</p><p class="hint">${Q(e.context)}</p>`:``}

        <p class="field-label" style="margin-top:14px;">Understanding</p>
        <p class="hint">${Q(r)}</p>

        <div class="studio-caps-row">
          <p class="field-label">Recommended capabilities</p>
          ${n?`<span class="studio-confidence-pill studio-confidence-${n.toLowerCase()}">Confidence: ${n}</span>`:``}
        </div>
        <div class="studio-capability-list">${u}</div>

        ${l?`
          <div class="studio-notice-inline">
            No AI provider is configured yet — Core AI capabilities above will need one set up first.
            <button type="button" class="ghost-btn small" id="studioPsSetupAi">Set Up AI</button>
          </div>`:``}

        <p class="field-label" style="margin-top:14px;">Suggested next step</p>
        <p>Open <b>${Q(o.title)}</b>${o.status!==`available`&&o.status!==`experimental`?` (coming soon)`:``}</p>
        <div class="studio-ps-actions">
          ${c?`<button type="button" class="run-btn" id="studioPsOpenTop" data-open-id="${c.id}">Open ${Q(c.title)}</button>`:``}
          ${d?`<button type="button" class="ghost-btn" id="studioPsWorkflow">Create Workflow</button>`:``}
        </div>

        <p class="field-label" style="margin-top:14px;">AI Answer <span class="hint">(optional)</span></p>
        <div id="studioPsAiBlock">${this.problemSolverAiBlockMarkup(a)}</div>

        <p class="field-label" style="margin-top:14px;">Continue this result</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioPsSendDecision">${i(`decision`,13)} Send to Decision Intelligence</button>
          <button type="button" class="ghost-btn" id="studioPsSaveKnowledge">${i(`knowledge`,13)} Save to Knowledge</button>
        </div>

        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-problem`)}
      </div>`}problemSolverAiBlockMarkup(e){return e?e.loading?`<div class="studio-ai-suggestions"><p class="hint">Asking your enabled AI provider…</p></div>`:e.error?`
        <div class="studio-ai-suggestions">
          <p class="hint" style="color:var(--rust);">AI Answer failed: ${Q(e.error)} — enable a provider under Keys &amp; Providers.</p>
          <button type="button" class="ghost-btn small" id="studioPsAiRetry">Try Again</button>
        </div>`:`
      <div class="studio-ai-suggestions">
        <p class="field-label">AI Answer <span class="hint">— unverified, AI-generated</span></p>
        <div class="result-text">${Q(e.answer||``).replace(/\n/g,`<br>`)}</div>
      </div>`:`
        <div class="studio-ai-suggestions">
          <button type="button" class="ghost-btn small" id="studioPsAiAsk">${i(`ask`,13)} Get AI Answer</button>
          <p class="hint" style="margin-top:6px;">Optional — asks the configured AI provider for its own take on this goal. Never changes the Recommended capabilities above.</p>
        </div>`}wireProblemSolverAiBlock(){let e=this.outputPanel.querySelector(`#studioPsResult`);e&&(e.querySelector(`#studioPsAiAsk`)?.addEventListener(`click`,()=>this.fetchProblemSolverAiAnswer()),e.querySelector(`#studioPsAiRetry`)?.addEventListener(`click`,()=>this.fetchProblemSolverAiAnswer()))}async fetchProblemSolverAiAnswer(){let e=this.lastProblemSolverResult;if(!e||e.matches.length===0)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}let t=e.ctx;e.aiFallback={loading:!0};let n=this.outputPanel.querySelector(`#studioPsAiBlock`);n&&(n.innerHTML=this.problemSolverAiBlockMarkup(e.aiFallback)),this.wireProblemSolverAiBlock();let r=e.matches.slice(0,5).map(e=>e.app.title),i=`You are MAGENAIS's Problem Solver. A user described this goal: "${t.goal}"${t.context?` (context: "${t.context}")`:``}. MAGENAIS's own local capability matcher recommended: ${r.join(`, `)||`(none)`}. In 2-4 short sentences, give your own independent take: does this recommendation seem right, what would you add or do differently, or any tips for approaching this goal. Be concrete, not generic filler.`;try{let n=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:i},{},()=>{});if(this.lastProblemSolverResult?.ctx!==t)return;e.aiFallback={loading:!1,answer:typeof n==`string`?n:n?.finalOutput??String(n)}}catch(n){if(this.lastProblemSolverResult?.ctx!==t)return;e.aiFallback={loading:!1,error:n?.message||String(n)}}let a=this.outputPanel.querySelector(`#studioPsAiBlock`);a&&(a.innerHTML=this.problemSolverAiBlockMarkup(e.aiFallback)),this.wireProblemSolverAiBlock()}wireProblemSolverResult(){let e=this.outputPanel.querySelector(`#studioPsResult`);if(!e)return;e.querySelectorAll(`.studio-capability-chip:not([disabled])`).forEach(e=>{e.addEventListener(`click`,()=>this.activateApp(e.dataset.capId))}),e.querySelector(`#studioPsOpenTop`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.openId;t&&this.activateApp(t)}),e.querySelector(`#studioPsWorkflow`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newWorkflow`)}),e.querySelector(`#studioPsSetupAi`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})}),e.querySelector(`#studioPsTryAgain`)?.addEventListener(`click`,()=>{let e=this.outputPanel.querySelector(`#studioPsGoal`);e?.focus(),e?.select()}),e.querySelector(`#studioPsSendDecision`)?.addEventListener(`click`,()=>this.sendProblemResultToDecision()),e.querySelector(`#studioPsSaveKnowledge`)?.addEventListener(`click`,()=>this.saveProblemResultToKnowledge()),this.wireProblemSolverAiBlock();let t=this.lastProblemSolverResult;t&&this.wireSaveBar(this.outputPanel,`studio-problem`,`document`,()=>Bt(t.ctx,t.matches,t.confidence,t.understanding,t.aiFallback).title,()=>Bt(t.ctx,t.matches,t.confidence,t.understanding,t.aiFallback).content,G(`problem`))}sendProblemResultToDecision(){let e=this.lastProblemSolverResult;if(!e)return;let{question:t,context:n}=Ft(e.ctx,e.understanding,e.matches,e.aiFallback);this.lastDecisionRaw={...J,question:t,context:n},this.lastDecisionAnalysis=null,this.decisionAiSuggestions=null,this.decisionAiError=null,this.handoffNote=`Prefilled from Problem Solver — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`problem`,to:`decision`}),this.activateApp(`decision`)}saveProblemResultToKnowledge(){let e=this.lastProblemSolverResult;if(!e)return;let t=this.kernel.getProjectManager().getCurrentProject();if(!t){this.handoffNote=`Select or create a project first, then save again.`,this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`),this.renderProblemSolver(e);return}let{title:n,content:r}=K(e.ctx,e.matches,e.confidence,e.understanding),i=this.kernel.getAssetManager().createAsset(n,`other`,r,G(`problem`),t.id);this.kernel.getProjectManager().addAssetToProject(t.id,i.id),this.kernel.getEventBus().emit(`studio:resultSaved`,{studio:`problem`,assetId:i.id,projectId:t.id}),this.handoffNote=`Saved to Knowledge as "${n}".`,this.renderProblemSolver(e)}renderDecisionWorkspace(e){this.activeWorkspace=`decision`;let t=this.outputPanel.querySelector(`.stage`);if(!t)return;let n=this.lastDecisionRaw,r=this.kernel.getProjectManager().getCurrentProject(),a=(r?.assets||[]).filter(e=>e.type===`document`||e.type===`research`);t.innerHTML=`
      <div class="studio-workspace studio-workspace-wide">
        ${this.intelligenceTopbarMarkup(`decision`)}
        <div class="studio-workspace-header">
          <div>
            <div class="studio-workspace-title">${i(`decision`,20)} MAGENAIS Intelligence — Decision Intelligence</div>
            <p class="hint">Describe a decision and the alternatives you're weighing. MAGENAIS structures the comparison transparently — it never claims to know the objectively correct choice.</p>
            ${r?`<p class="studio-project-context">Project context: <b>${Q(r.name)}</b></p>`:``}
          </div>
        </div>

        <div class="studio-section">
          <p class="field-label">What decision are you trying to make?</p>
          <textarea id="studioDecQuestion" rows="2" placeholder="e.g. Which laptop should I buy for video editing?" aria-label="Decision question">${Q(n.question)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Alternatives <span class="hint">(optional — one per line)</span></p>
          <textarea id="studioDecAlternatives" rows="3" placeholder="MacBook Pro 16 in&#10;Dell XPS 15&#10;ASUS ProArt Studiobook" aria-label="Alternatives">${Q(n.alternatives)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Criteria <span class="hint">(optional — one per line: Name | weight | Alt=score or Alt=Strong/Moderate/Weak. Add "(lower)" after a name like "Cost (lower)" if a smaller number is better — MAGENAIS also recognizes common terms like Cost/Latency/Battery life automatically)</span></p>
          <textarea id="studioDecCriteria" rows="4" placeholder="Battery life | 3 | MacBook Pro 16 in=8, Dell XPS 15=6&#10;Price (lower) | 2 | MacBook Pro 16 in=2499, Dell XPS 15=1899&#10;GPU performance" aria-label="Criteria">${Q(n.criteria)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Constraints <span class="hint">(optional — one per line)</span></p>
          <textarea id="studioDecConstraints" rows="2" placeholder="Budget under $2500&#10;Must be available within 2 weeks" aria-label="Constraints">${Q(n.constraints)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Context <span class="hint">(optional)</span></p>
          <textarea id="studioDecContext" rows="2" placeholder="Any extra detail that would help structure the comparison..." aria-label="Context">${Q(n.context)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Evidence <span class="hint">(optional — one per line: Claim | Source | Confidence)</span></p>
          <textarea id="studioDecEvidence" rows="2" placeholder="Reviewers report 18h battery life | TechRadar review | Medium" aria-label="Evidence">${Q(n.evidence)}</textarea>
          ${a.length>0?`
            <div class="studio-mini-list" style="margin-top:4px;">
              ${a.map(e=>`<button type="button" class="studio-mini-item" data-attach-asset="${Q(e.name)}"><span class="studio-mini-title">+ ${Q(e.name)}</span></button>`).join(``)}
            </div>
            <p class="hint">Adds a template line citing this project asset by name — fill in the actual claim yourself; MAGENAIS never invents evidence content.</p>`:``}
        </div>

        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioDecAnalyze">${i(`decision`,14)} Analyze Decision</button>
          <button type="button" class="ghost-btn" id="studioDecClear">Clear</button>
        </div>

        <div id="studioDecResult">${e?this.decisionViewMarkup(e):``}</div>
      </div>`,this.wireIntelligenceTopbar(t);let o=[[`question`,`studioDecQuestion`],[`alternatives`,`studioDecAlternatives`],[`criteria`,`studioDecCriteria`],[`constraints`,`studioDecConstraints`],[`context`,`studioDecContext`],[`evidence`,`studioDecEvidence`]],s=()=>{let e={...J};for(let[n,r]of o)e[n]=t.querySelector(`#`+r)?.value||``;return e};t.querySelector(`#studioDecAnalyze`)?.addEventListener(`click`,()=>this.runDecisionAnalysis(s())),t.querySelector(`#studioDecClear`)?.addEventListener(`click`,()=>{this.lastDecisionRaw=J,this.lastDecisionAnalysis=null,this.decisionAiSuggestions=null,this.decisionAiError=null,this.handoffNote=null,this.renderDecisionWorkspace()}),t.querySelectorAll(`[data-attach-asset]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=t.querySelector(`#studioDecEvidence`);if(!n)return;let r=e.dataset.attachAsset,i=`Describe the claim from "${r}" here | ${r} | Unknown`;n.value=n.value?`${n.value}\n${i}`:i,n.focus()})});let c=t.querySelector(`#studioDecQuestion`);e&&e.kind!==`empty`&&this.wireDecisionResult(),(!e||e.kind===`empty`)&&c?.focus()}runDecisionAnalysis(e){this.handoffNote=null,this.lastDecisionRaw=e;let t=e.question.trim();if(!t){this.renderDecisionWorkspace({kind:`empty`}),this.outputPanel.querySelector(`#studioDecQuestion`)?.focus();return}let n=ae(e.alternatives),{criteria:r,rows:i}=pe(e.criteria,n),a=Te({question:t,alternatives:n,criteria:r,comparisonRows:i,constraints:oe(e.constraints),context:e.context.trim()||void 0,evidence:me(e.evidence)});this.lastDecisionAnalysis=a,this.decisionAiSuggestions=null,this.decisionAiError=null,this.kernel.getEventBus().emit(`studio:decisionAnalyzed`,{question:t,alternativeCount:n.length,criteriaCount:r.length,hasTable:a.hasComparisonTable}),this.renderDecisionWorkspace({kind:`result`,analysis:a})}decisionViewMarkup(e){return e.kind===`empty`?`
        <div class="studio-result-card studio-result-warn">
          <p>Please describe the decision you're trying to make before analyzing.</p>
        </div>`:this.decisionResultMarkup(e.analysis)}formatWeight(e){return(Math.round(e*100)/100).toString()}comparisonCellMarkup(e){return!e||e.kind===`unknown`?`<span class="studio-cell-unknown">Unknown</span>`:e.kind===`score`?`<span class="studio-cell-score">${this.escapeHtml(String(e.score))}</span>`:`<span class="studio-cell-qual studio-cell-qual-${(e.label||``).toLowerCase()}">${this.escapeHtml(e.label||``)}</span>`}comparisonTableMarkup(e){if(!e.hasComparisonTable)return`<p class="hint">Add at least one alternative and one criterion to see a structured comparison table.</p>`;let{alternatives:t,comparisonRows:n}=e.input;return`
      <div class="studio-table-scroll">
        <table class="studio-comparison-table">
          <thead>${`<tr><th>Criterion</th>${t.map(e=>`<th>${this.escapeHtml(e.name)}</th>`).join(``)}</tr>`}</thead>
          <tbody>${n.map(e=>{let n=e.criterion.direction===`lower`?` <span class="hint">(lower is better)</span>`:e.criterion.direction===`higher`?` <span class="hint">(higher is better)</span>`:``;return`
      <tr>
        <td>${this.escapeHtml(e.criterion.name)}${e.criterion.weight===1?``:` <span class="hint">(weight ${this.formatWeight(e.criterion.weight)})</span>`}${n}</td>
        ${t.map(t=>`<td>${this.comparisonCellMarkup(e.cells[t.name])}</td>`).join(``)}
      </tr>`}).join(``)}${e.weightedTotals.length>0?`
      <tr class="studio-comparison-totals">
        <td>Weighted Total <span class="hint">(sum of score &times; weight; blank/qualitative cells excluded)</span></td>
        ${e.weightedTotals.map(e=>`<td>${this.escapeHtml(String(Math.round(e.total*100)/100))} <span class="hint">(${e.coveredCriteria}/${e.totalCriteria} scored)</span></td>`).join(``)}
      </tr>`:``}</tbody>
        </table>
      </div>`}bulletListMarkup(e,t){return e.length===0?`<p class="hint">${this.escapeHtml(t)}</p>`:`<ul class="studio-bullet-list">${e.map(e=>`<li>${this.escapeHtml(e)}</li>`).join(``)}</ul>`}decisionResultMarkup(e){let{input:t}=e,n=!this.kernel.getProviderManager().hasAnyUsableProvider(),r=e.suggestedCapabilityId?a.getById(e.suggestedCapabilityId):null;return`
      <div class="studio-result-card">
        <div class="studio-caps-row" style="margin-top:0;">
          <p class="field-label" style="margin-top:0;">Decision Question</p>
          <span class="studio-decision-label studio-decision-label-${an[e.resultLabel]}">${e.resultLabel}</span>
        </div>
        <p>${this.escapeHtml(t.question)}</p>

        <p class="field-label" style="margin-top:14px;">Alternatives</p>
        ${t.alternatives.length>0?`<div class="studio-chip-row">${t.alternatives.map(e=>`<span class="studio-chip">${this.escapeHtml(e.name)}</span>`).join(``)}</div>`:`<p class="hint">No alternatives supplied yet.</p>`}

        <p class="field-label" style="margin-top:14px;">Criteria</p>
        ${t.criteria.length>0?`<div class="studio-chip-row">${t.criteria.map(e=>`<span class="studio-chip">${this.escapeHtml(e.name)}${e.weight===1?``:` &times;${this.formatWeight(e.weight)}`}</span>`).join(``)}</div>`:`<p class="hint">No criteria supplied yet.</p>`}

        <p class="field-label" style="margin-top:14px;">Comparison</p>
        ${this.comparisonTableMarkup(e)}

        <p class="field-label" style="margin-top:14px;">Trade-offs</p>
        ${this.bulletListMarkup(e.tradeOffs,`Not enough comparable data yet to identify trade-offs.`)}

        <p class="field-label" style="margin-top:14px;">Risks</p>
        ${this.bulletListMarkup(e.risks,`No specific risks identified from the supplied information.`)}

        <p class="field-label" style="margin-top:14px;">Uncertainties</p>
        ${this.bulletListMarkup(e.uncertainties,`No open uncertainties identified from the supplied information.`)}

        <p class="field-label" style="margin-top:14px;">Recommended Next Step</p>
        <p>${this.escapeHtml(e.nextStep)}</p>

        <div id="studioDecAiBlock">${this.decisionAiBlockMarkup()}</div>

        ${n?`
          <div class="studio-notice-inline">
            No AI provider is configured — AI Suggestions and Core AI capabilities below will need one set up first.
            <button type="button" class="ghost-btn small" id="studioDecSetupAi">Set Up AI</button>
          </div>`:``}

        <p class="field-label" style="margin-top:14px;">Next actions</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioDecResearch">${i(`research`,13)} Research This</button>
          <button type="button" class="ghost-btn" id="studioDecNewProject">${i(`plus`,13)} Create Project</button>
          ${r?`<button type="button" class="ghost-btn" id="studioDecOpenCapability" data-open-id="${r.id}">${i(r.icon,13)} Open ${this.escapeHtml(r.title)}</button>`:``}
        </div>

        <p class="field-label" style="margin-top:14px;">Continue this result</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioDecSendProblem">${i(`problem`,13)} Send to Problem Solver</button>
          <button type="button" class="ghost-btn" id="studioDecSaveKnowledge">${i(`knowledge`,13)} Save to Knowledge</button>
        </div>

        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-decision`)}
      </div>`}decisionAiBlockMarkup(){if(this.decisionAiLoading)return`<div class="studio-ai-suggestions"><p class="hint">Asking the configured AI provider for additional criteria, trade-offs, risks, and open questions…</p></div>`;if(this.decisionAiSuggestions){let e=this.decisionAiSuggestions,t=(e,t)=>t.length?`<p class="field-label" style="margin-top:8px;">${e}</p>${this.bulletListMarkup(t,``)}`:``;return`
        <div class="studio-ai-suggestions">
          <p class="field-label">AI suggestions <span class="hint">— unverified, not part of the deterministic analysis above</span></p>
          ${t(`Additional criteria to consider`,e.criteria)}
          ${t(`Possible hidden trade-offs`,e.tradeOffs)}
          ${t(`Possible risks`,e.risks)}
          ${t(`Questions worth investigating`,e.questions)}
          ${!e.criteria.length&&!e.tradeOffs.length&&!e.risks.length&&!e.questions.length?`<p class="hint">The AI provider didn't return any structured suggestions.</p>`:``}
        </div>`}return this.decisionAiError?`
        <div class="studio-ai-suggestions">
          <p class="hint" style="color:var(--rust);">AI suggestions failed: ${this.escapeHtml(this.decisionAiError)}</p>
          <button type="button" class="ghost-btn small" id="studioDecAiRetry">Try Again</button>
        </div>`:`
      <div class="studio-ai-suggestions">
        <button type="button" class="ghost-btn small" id="studioDecAiAsk">${i(`ask`,13)} Get AI Suggestions</button>
        <p class="hint" style="margin-top:6px;">Optional — asks the configured AI provider for extra criteria, hidden trade-offs, risks, and questions to investigate. The comparison and totals above are calculated without AI and never change based on this.</p>
      </div>`}wireDecisionResult(){let e=this.outputPanel.querySelector(`#studioDecResult`);if(!e)return;e.querySelector(`#studioDecResearch`)?.addEventListener(`click`,()=>this.activateApp(`research`)),e.querySelector(`#studioDecNewProject`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)}),e.querySelector(`#studioDecOpenCapability`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.openId;t&&this.activateApp(t)}),e.querySelector(`#studioDecSetupAi`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})}),e.querySelector(`#studioDecSendProblem`)?.addEventListener(`click`,()=>this.sendDecisionResultToProblem()),e.querySelector(`#studioDecSaveKnowledge`)?.addEventListener(`click`,()=>this.saveDecisionResultToKnowledge()),this.wireDecisionAiBlock();let t=this.lastDecisionAnalysis;t&&this.wireSaveBar(this.outputPanel,`studio-decision`,`document`,()=>Vt(t,this.decisionAiSuggestions).title,()=>Vt(t,this.decisionAiSuggestions).content,G(`decision`))}wireDecisionAiBlock(){let e=this.outputPanel.querySelector(`#studioDecResult`);e&&(e.querySelector(`#studioDecAiAsk`)?.addEventListener(`click`,()=>this.fetchDecisionAiSuggestions()),e.querySelector(`#studioDecAiRetry`)?.addEventListener(`click`,()=>this.fetchDecisionAiSuggestions()))}sendDecisionResultToProblem(){let e=this.lastDecisionAnalysis;if(!e)return;let{goal:t,context:n}=It(e,this.decisionAiSuggestions);this.problemSolverPrefill={goal:t,context:n},this.lastProblemSolverResult=null,this.handoffNote=`Prefilled from Decision Intelligence — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`decision`,to:`problem`}),this.activateApp(`problem`)}saveDecisionResultToKnowledge(){let e=this.lastDecisionAnalysis;if(!e)return;let t=this.kernel.getProjectManager().getCurrentProject();if(!t){this.handoffNote=`Select or create a project first, then save again.`,this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`),this.renderDecisionWorkspace({kind:`result`,analysis:e});return}let{title:n,content:r}=Pt(e),i=this.kernel.getAssetManager().createAsset(n,`other`,r,G(`decision`),t.id);this.kernel.getProjectManager().addAssetToProject(t.id,i.id),this.kernel.getEventBus().emit(`studio:resultSaved`,{studio:`decision`,assetId:i.id,projectId:t.id}),this.handoffNote=`Saved to Knowledge as "${n}".`,this.renderDecisionWorkspace({kind:`result`,analysis:e})}async fetchDecisionAiSuggestions(){let e=this.lastDecisionAnalysis;if(!e)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}this.decisionAiLoading=!0,this.decisionAiError=null;let t=this.outputPanel.querySelector(`#studioDecAiBlock`);t&&(t.innerHTML=this.decisionAiBlockMarkup());let{input:n}=e,r=[`You are helping structure a decision. Do NOT decide which option is best — only suggest additional angles the person may have missed.`,`Decision: ${n.question}`,n.alternatives.length?`Alternatives: ${n.alternatives.map(e=>e.name).join(`, `)}`:``,n.criteria.length?`Criteria already listed: ${n.criteria.map(e=>e.name).join(`, `)}`:``,n.constraints.length?`Constraints: ${n.constraints.join(`; `)}`:``,n.context?`Context: ${n.context}`:``,``,`Respond in EXACTLY this plain-text format, with each line under its heading (omit a heading entirely if you have nothing to add, and never add extra commentary):`,`CRITERIA:`,`- ...`,`TRADEOFFS:`,`- ...`,`RISKS:`,`- ...`,`QUESTIONS:`,`- ...`].filter(Boolean).join(`
`);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:r},{temperature:.4,maxTokens:700});this.decisionAiSuggestions=this.parseAiSuggestionsReply(String(e))}catch(e){this.decisionAiError=e?.message||String(e)}finally{this.decisionAiLoading=!1;let e=this.outputPanel.querySelector(`#studioDecAiBlock`);e&&(e.innerHTML=this.decisionAiBlockMarkup(),this.wireDecisionAiBlock())}}parseAiSuggestionsReply(e){let t={criteria:[],tradeOffs:[],risks:[],questions:[]},n={criteria:`criteria`,tradeoffs:`tradeOffs`,"trade-offs":`tradeOffs`,risks:`risks`,questions:`questions`},r=null;for(let i of e.split(`
`)){let e=i.trim();if(!e)continue;let a=e.replace(/:$/,``).toLowerCase();if(n[a]){r=n[a];continue}if(!r)continue;let o=e.replace(/^[-*•]\s*/,``).trim();o&&t[r].push(o)}return t}renderVerificationWorkspace(e){this.activeWorkspace=`verification`;let t=this.outputPanel.querySelector(`.stage`);if(!t)return;let n=this.lastVerificationRaw,r=this.kernel.getProjectManager().getCurrentProject(),a=(r?.assets||[]).filter(e=>e.type===`document`||e.type===`research`||e.type===`other`||e.type===`text`);t.innerHTML=`
      <div class="studio-workspace studio-workspace-wide">
        ${this.intelligenceTopbarMarkup(`verification`)}
        <div class="studio-workspace-header">
          <div>
            <div class="studio-workspace-title">${i(`verification`,20)} MAGENAIS Intelligence — Verification</div>
            <p class="hint">Check a claim or statement against evidence and sources you supply. This is not a universal truth detector — every result is relative to the evidence actually provided.</p>
            ${r?`<p class="studio-project-context">Project context: <b>${Q(r.name)}</b></p>`:``}
          </div>
        </div>

        <div class="studio-section">
          <p class="field-label">What would you like to verify?</p>
          <textarea id="studioVerClaim" rows="2" placeholder="e.g. This library reduces bundle size by 30%." aria-label="Claim or statement">${Q(n.claim)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Evidence <span class="hint">(optional — one per line: Text | Source | Supports/Contradicts/Unclear)</span></p>
          <textarea id="studioVerEvidence" rows="3" placeholder="Benchmark shows a 12% reduction, not 30% | internal benchmark doc | Contradicts&#10;Maintainer changelog claims ~30% | project CHANGELOG | Supports" aria-label="Evidence">${Q(n.evidence)}</textarea>
          ${a.length>0?`
            <div class="studio-mini-list" style="margin-top:4px;">
              ${a.map(e=>`<button type="button" class="studio-mini-item" data-attach-asset="${Q(e.name)}"><span class="studio-mini-title">+ ${Q(e.name)}</span></button>`).join(``)}
            </div>
            <p class="hint">Adds a template line citing this project source by name — fill in the actual text and stance yourself; MAGENAIS never invents evidence content.</p>`:``}
        </div>
        <div class="studio-section">
          <p class="field-label">Project / research context <span class="hint">(optional)</span></p>
          <textarea id="studioVerContext" rows="2" placeholder="Any extra detail that would help — where this claim came from, what it's being used for..." aria-label="Context">${Q(n.context)}</textarea>
        </div>

        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioVerAnalyze">${i(`verification`,14)} Verify</button>
          <button type="button" class="ghost-btn" id="studioVerClear">Clear</button>
        </div>

        <div id="studioVerResult">${e?this.verificationViewMarkup(e):``}</div>
      </div>`,this.wireIntelligenceTopbar(t);let o=[[`claim`,`studioVerClaim`],[`evidence`,`studioVerEvidence`],[`context`,`studioVerContext`]],s=()=>{let e={...Y};for(let[n,r]of o)e[n]=t.querySelector(`#`+r)?.value||``;return e};t.querySelector(`#studioVerAnalyze`)?.addEventListener(`click`,()=>this.runVerificationAnalysis(s())),t.querySelector(`#studioVerClear`)?.addEventListener(`click`,()=>{this.lastVerificationRaw=Y,this.lastVerificationAnalysis=null,this.verificationAiAssist=null,this.verificationAiError=null,this.handoffNote=null,this.renderVerificationWorkspace()}),t.querySelectorAll(`[data-attach-asset]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=t.querySelector(`#studioVerEvidence`);if(!n)return;let r=e.dataset.attachAsset,i=`Describe the relevant text from "${r}" here | ${r} | Unclear`;n.value=n.value?`${n.value}\n${i}`:i,n.focus()})});let c=t.querySelector(`#studioVerClaim`);e&&e.kind!==`empty`&&this.wireVerificationResult(),(!e||e.kind===`empty`)&&c?.focus()}runVerificationAnalysis(e){this.handoffNote=null,this.lastVerificationRaw=e;let t=e.claim.trim();if(!t){this.renderVerificationWorkspace({kind:`empty`}),this.outputPanel.querySelector(`#studioVerClaim`)?.focus();return}let n=He(e.evidence),r=e.context.trim()||void 0,i=this.kernel.getProjectManager().getCurrentProject(),a=i?w(i,e=>this.kernel.getAssetManager().getAsset(e)):[],o=Ze({claim:t,evidence:n,context:r},a);this.lastVerificationAnalysis=o,this.verificationAiAssist=null,this.verificationAiError=null,this.kernel.getEventBus().emit(`studio:verificationAnalyzed`,{claim:t,evidenceCount:n.length,status:o.status,contradictionCount:o.contradictions.length}),this.renderVerificationWorkspace({kind:`result`,analysis:o})}verificationViewMarkup(e){return e.kind===`empty`?`
        <div class="studio-result-card studio-result-warn">
          <p>Please describe what you'd like to verify before checking.</p>
        </div>`:this.verificationResultMarkup(e.analysis)}evidenceStanceBadgeMarkup(e){return`<span class="studio-cell-qual studio-cell-qual-${e===`Supports`?`strong`:e===`Contradicts`?`weak`:`moderate`}">${Q(e)}</span>`}verificationResultMarkup(e){let{input:t}=e,n=!this.kernel.getProviderManager().hasAnyUsableProvider(),r=e.suggestedCapabilityId?a.getById(e.suggestedCapabilityId):null,o=t.evidence.length>0?`<div class="studio-source-list">${t.evidence.map(e=>`
          <div class="studio-source-item">
            <div class="studio-source-main">
              <span class="studio-source-name">${Q(e.text)}</span>
              <div class="studio-source-meta-row">${this.evidenceStanceBadgeMarkup(e.stance)}<span class="hint">source: ${Q(e.source)}</span></div>
            </div>
          </div>`).join(``)}</div>`:`<p class="hint">No evidence was supplied for this claim.</p>`,s=e.relatedSources.length>0?`<p class="field-label" style="margin-top:14px;">Related project sources <span class="hint">(matched by name — not automatically counted as evidence)</span></p>${this.knowledgeSourcesListMarkup(e.relatedSources,5,!1)}`:``,c=e.contradictions.length>0?e.contradictions.map(e=>`
          <div class="studio-verify-contradiction">
            <p><span class="field-label" style="margin-top:0;">Source A</span> — ${Q(e.sourceA)}</p>
            <p class="hint">"${Q(e.claimA)}"</p>
            <p><span class="field-label">Source B</span> — ${Q(e.sourceB)}</p>
            <p class="hint">"${Q(e.claimB)}"</p>
            <p class="field-label">Conflict</p>
            <p>This evidence was marked Supports for Source A and Contradicts for Source B on the same claim — MAGENAIS does not pick a winner.</p>
          </div>`).join(``):`<p class="hint">No conflicting evidence identified from what was supplied.</p>`;return`
      <div class="studio-result-card">
        <div class="studio-caps-row" style="margin-top:0;">
          <p class="field-label" style="margin-top:0;">Claim</p>
          <span class="studio-decision-label studio-decision-label-${on[e.status]}">${e.status}</span>
        </div>
        <p>${Q(t.claim)}</p>
        ${t.context?`<p class="field-label" style="margin-top:8px;">Context</p><p class="hint">${Q(t.context)}</p>`:``}

        <p class="field-label" style="margin-top:14px;">Evidence</p>
        ${o}
        ${s}

        <p class="field-label" style="margin-top:14px;">Contradictions</p>
        ${c}
        ${e.contradictions.length>0?`<div class="studio-ps-actions" style="margin-top:8px;"><button type="button" class="ghost-btn small" id="studioVerResearchFurther">${i(`research`,13)} Research Further</button></div>`:``}

        <p class="field-label" style="margin-top:14px;">Missing Information</p>
        ${this.bulletListMarkup(e.missingInformation,`Nothing further identified as missing from what was supplied.`)}

        <p class="field-label" style="margin-top:14px;">Conclusion</p>
        <p>${Q(e.conclusion)}</p>

        <div id="studioVerAiBlock">${this.verificationAiBlockMarkup()}</div>

        ${n?`
          <div class="studio-notice-inline">
            No AI provider is configured — AI Assist and Core AI capabilities below will need one set up first.
            <button type="button" class="ghost-btn small" id="studioVerSetupAi">Set Up AI</button>
          </div>`:``}

        <p class="field-label" style="margin-top:14px;">Next actions</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioVerResearch">${i(`research`,13)} Research Further</button>
          <button type="button" class="ghost-btn" id="studioVerNewProject">${i(`plus`,13)} Create Project</button>
          ${r?`<button type="button" class="ghost-btn" id="studioVerOpenCapability" data-open-id="${r.id}">${i(r.icon,13)} Open ${Q(r.title)}</button>`:``}
        </div>

        <p class="field-label" style="margin-top:14px;">Continue this result</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioVerSendProblem">${i(`problem`,13)} Send to Problem Solver</button>
          <button type="button" class="ghost-btn" id="studioVerSaveKnowledge">${i(`knowledge`,13)} Save to Knowledge</button>
        </div>

        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-verification`)}
      </div>`}verificationAiBlockMarkup(){if(this.verificationAiLoading)return`<div class="studio-ai-suggestions"><p class="hint">Asking the configured AI provider to read the claim, evidence, and any resolvable source content…</p></div>`;if(this.verificationAiAssist){let e=this.verificationAiAssist,t=(e,t)=>t.length?`<p class="field-label" style="margin-top:8px;">${e}</p>${this.bulletListMarkup(t,``)}`:``;return`
        <div class="studio-ai-suggestions">
          <p class="field-label">AI verification assist <span class="hint">— unverified, not automatically authoritative, and never replaces the STATUS above</span></p>
          ${e.statusReading?`<p class="hint" style="margin-top:6px;">AI's own read of the status: ${Q(e.statusReading)}</p>`:``}
          ${t(`Evidence the AI identified`,e.evidence)}
          ${t(`Contradictions the AI identified`,e.contradictions)}
          ${t(`Missing information the AI identified`,e.missing)}
          ${e.conclusion?`<p class="field-label" style="margin-top:8px;">AI summary of reasoning</p><p class="hint">${Q(e.conclusion)}</p>`:``}
          ${!e.statusReading&&!e.evidence.length&&!e.contradictions.length&&!e.missing.length&&!e.conclusion?`<p class="hint">The AI provider didn't return any structured assist.</p>`:``}
        </div>`}return this.verificationAiError?`
        <div class="studio-ai-suggestions">
          <p class="hint" style="color:var(--rust);">AI assist failed: ${Q(this.verificationAiError)}</p>
          <button type="button" class="ghost-btn small" id="studioVerAiRetry">Try Again</button>
        </div>`:`
      <div class="studio-ai-suggestions">
        <button type="button" class="ghost-btn small" id="studioVerAiAsk">${i(`ask`,13)} Get AI Assist</button>
        <p class="hint" style="margin-top:6px;">Optional — asks the configured AI provider to extract claims, identify supporting/contradicting evidence, and summarize its reasoning from resolvable sources. The STATUS, Evidence, and Contradictions above are calculated without AI and never change based on this.</p>
      </div>`}wireVerificationResult(){let e=this.outputPanel.querySelector(`#studioVerResult`);if(!e)return;e.querySelector(`#studioVerResearch`)?.addEventListener(`click`,()=>this.activateApp(`research`)),e.querySelector(`#studioVerResearchFurther`)?.addEventListener(`click`,()=>this.activateApp(`research`)),e.querySelector(`#studioVerNewProject`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)}),e.querySelector(`#studioVerOpenCapability`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.openId;t&&this.activateApp(t)}),e.querySelector(`#studioVerSetupAi`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})}),e.querySelector(`#studioVerSendProblem`)?.addEventListener(`click`,()=>this.sendVerificationResultToProblem()),e.querySelector(`#studioVerSaveKnowledge`)?.addEventListener(`click`,()=>this.saveVerificationResultToKnowledge()),this.wireVerificationAiBlock();let t=this.lastVerificationAnalysis;t&&this.wireSaveBar(this.outputPanel,`studio-verification`,`document`,()=>Ht(t,this.verificationAiAssist).title,()=>Ht(t,this.verificationAiAssist).content,G(`verification`))}wireVerificationAiBlock(){let e=this.outputPanel.querySelector(`#studioVerResult`);e&&(e.querySelector(`#studioVerAiAsk`)?.addEventListener(`click`,()=>this.fetchVerificationAiAssist()),e.querySelector(`#studioVerAiRetry`)?.addEventListener(`click`,()=>this.fetchVerificationAiAssist()))}sendVerificationResultToProblem(){let e=this.lastVerificationAnalysis;if(!e)return;let{goal:t,context:n}=Rt(e,this.verificationAiAssist);this.problemSolverPrefill={goal:t,context:n},this.lastProblemSolverResult=null,this.handoffNote=`Prefilled from Verification — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`verification`,to:`problem`}),this.activateApp(`problem`)}saveVerificationResultToKnowledge(){let e=this.lastVerificationAnalysis;if(!e)return;let t=this.kernel.getProjectManager().getCurrentProject();if(!t){this.handoffNote=`Select or create a project first, then save again.`,this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`),this.renderVerificationWorkspace({kind:`result`,analysis:e});return}let{title:n,content:r}=Lt(e),i=this.kernel.getAssetManager().createAsset(n,`other`,r,G(`verification`),t.id);this.kernel.getProjectManager().addAssetToProject(t.id,i.id),this.kernel.getEventBus().emit(`studio:resultSaved`,{studio:`verification`,assetId:i.id,projectId:t.id}),this.handoffNote=`Saved to Knowledge as "${n}".`,this.renderVerificationWorkspace({kind:`result`,analysis:e})}async fetchVerificationAiAssist(){let e=this.lastVerificationAnalysis;if(!e)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}this.verificationAiLoading=!0,this.verificationAiError=null;let t=this.outputPanel.querySelector(`#studioVerAiBlock`);t&&(t.innerHTML=this.verificationAiBlockMarkup());let{input:n}=e,r=``;try{e.relatedSources.length>0&&(r=N(await M(e.relatedSources,e=>this.kernel.getAssetManager().getAsset(e))))}catch{}let i=[`You are assisting with claim verification. Extract the core claim, identify which supplied evidence supports or contradicts it, note any contradictions between pieces of evidence, and summarize your reasoning. Do NOT declare the claim objectively "true" or "false" — describe only what the evidence shows or fails to show.`,`Claim: ${n.claim}`,n.context?`Context: ${n.context}`:``,n.evidence.length?`Supplied evidence:\n${n.evidence.map(e=>`- [${e.stance}] ${e.text} (source: ${e.source})`).join(`
`)}`:`No evidence was supplied.`,r?`Related project source content:\n${r}`:``,``,`Respond in EXACTLY this plain-text format, with each line under its heading (omit a heading entirely if you have nothing to add, and never add extra commentary):`,`STATUS:`,`(one short sentence describing what the evidence shows, not a single word verdict)`,`EVIDENCE:`,`- ...`,`CONTRADICTIONS:`,`- ...`,`MISSING:`,`- ...`,`CONCLUSION:`,`(one or two sentences)`].filter(Boolean).join(`
`);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:i},{temperature:.3,maxTokens:700});this.verificationAiAssist=this.parseVerificationAiReply(String(e))}catch(e){this.verificationAiError=e?.message||String(e)}finally{this.verificationAiLoading=!1;let e=this.outputPanel.querySelector(`#studioVerAiBlock`);e&&(e.innerHTML=this.verificationAiBlockMarkup(),this.wireVerificationAiBlock())}}parseVerificationAiReply(e){let t={statusReading:null,evidence:[],contradictions:[],missing:[],conclusion:null},n={status:`status`,evidence:`evidence`,contradictions:`contradictions`,missing:`missing`,"missing information":`missing`,conclusion:`conclusion`},r=null,i=[],a=[];for(let o of e.split(`
`)){let e=o.trim();if(!e)continue;let s=e.replace(/:$/,``).toLowerCase();if(n[s]){r=n[s];continue}if(!r)continue;let c=e.replace(/^[-*•]\s*/,``).trim();c&&(r===`status`?i.push(c):r===`conclusion`?a.push(c):t[r].push(c))}return t.statusReading=i.length?i.join(` `):null,t.conclusion=a.length?a.join(` `):null,t}renderDiagnosisWorkspace(e){this.activeWorkspace=`diagnosis`;let t=this.outputPanel.querySelector(`.stage`);if(!t)return;let n=this.lastDiagnosisRaw,r=this.kernel.getProjectManager().getCurrentProject(),a=(r?.assets||[]).filter(e=>e.type===`document`||e.type===`research`||e.type===`other`||e.type===`text`||e.type===`image`||e.type===`data`);t.innerHTML=`
      <div class="studio-workspace studio-workspace-wide">
        ${this.intelligenceTopbarMarkup(`diagnosis`)}
        <div class="studio-workspace-header">
          <div>
            <div class="studio-workspace-title">${i(`diagnosis`,20)} MAGENAIS Intelligence — Diagnosis</div>
            <p class="hint">Investigate why something is not working. This is not a definitive-answer tool — every result is Evidence &rarr; Hypotheses &rarr; Tests &rarr; Next action, never a single declared cause.</p>
            ${r?`<p class="studio-project-context">Project context: <b>${Q(r.name)}</b></p>`:``}
          </div>
        </div>

        <div class="studio-section">
          <p class="field-label">What is wrong? <span class="hint">(the problem)</span></p>
          <textarea id="studioDiagProblem" rows="2" placeholder="e.g. Robot stops unexpectedly during runs." aria-label="Problem">${Q(n.problem)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Symptoms <span class="hint">(optional — one per line)</span></p>
          <textarea id="studioDiagSymptoms" rows="2" placeholder="Stops after ~10 minutes of runtime&#10;No error shown on the display" aria-label="Symptoms">${Q(n.symptoms)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Observed data <span class="hint">(optional — measurements, logs, readings, one per line)</span></p>
          <textarea id="studioDiagObservations" rows="2" placeholder="Battery reads 11.9V right before the stop&#10;Motor temp logged at 68C at last stop" aria-label="Observed data">${Q(n.observations)}</textarea>
          ${a.length>0?`
            <div class="studio-mini-list" style="margin-top:4px;">
              ${a.map(e=>`<button type="button" class="studio-mini-item" data-attach-diag-asset="${Q(e.name)}"><span class="studio-mini-title">+ ${Q(e.name)}</span></button>`).join(``)}
            </div>
            <p class="hint">Attaches this project source (image, document, log, or data) by name as an observation — MAGENAIS never invents its content.</p>`:``}
        </div>
        <div class="studio-section">
          <p class="field-label">Possible causes <span class="hint">(optional — one per line: Hypothesis [| simplest test])</span></p>
          <textarea id="studioDiagHypotheses" rows="3" placeholder="Battery | Check voltage under load&#10;Motor overload&#10;Sensor failure&#10;Software fault" aria-label="Possible causes">${Q(n.hypotheses)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Evidence <span class="hint">(optional — one per line: Text | Hypothesis | Source | Supports/Contradicts/Unclear)</span></p>
          <textarea id="studioDiagEvidence" rows="3" placeholder="Voltage sags to 10.8V under load | Battery | multimeter reading | Supports&#10;Motor temp stays well within spec | Motor overload | thermal log | Contradicts" aria-label="Evidence">${Q(n.evidence)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Context <span class="hint">(optional — when this started, what changed recently, environment...)</span></p>
          <textarea id="studioDiagContext" rows="2" placeholder="Started after the last firmware update..." aria-label="Context">${Q(n.context)}</textarea>
        </div>

        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioDiagAnalyze">${i(`diagnosis`,14)} Diagnose</button>
          <button type="button" class="ghost-btn" id="studioDiagClear">Clear</button>
        </div>

        <div id="studioDiagResult">${e?this.diagnosisViewMarkup(e):``}</div>
      </div>`,this.wireIntelligenceTopbar(t);let o=[[`problem`,`studioDiagProblem`],[`symptoms`,`studioDiagSymptoms`],[`observations`,`studioDiagObservations`],[`hypotheses`,`studioDiagHypotheses`],[`evidence`,`studioDiagEvidence`],[`context`,`studioDiagContext`]],s=()=>{let e={...X};for(let[n,r]of o)e[n]=t.querySelector(`#`+r)?.value||``;return e};t.querySelector(`#studioDiagAnalyze`)?.addEventListener(`click`,()=>this.runDiagnosisAnalysis(s())),t.querySelector(`#studioDiagClear`)?.addEventListener(`click`,()=>{this.lastDiagnosisRaw=X,this.lastDiagnosisAnalysis=null,this.diagnosisAiAssist=null,this.diagnosisAiError=null,this.handoffNote=null,this.renderDiagnosisWorkspace()}),t.querySelectorAll(`[data-attach-diag-asset]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=t.querySelector(`#studioDiagObservations`);if(!n)return;let r=`Describe the relevant content of "${e.dataset.attachDiagAsset}" here`;n.value=n.value?`${n.value}\n${r}`:r,n.focus()})});let c=t.querySelector(`#studioDiagProblem`);e&&e.kind!==`empty`&&this.wireDiagnosisResult(),(!e||e.kind===`empty`)&&c?.focus()}runDiagnosisAnalysis(e){this.handoffNote=null,this.lastDiagnosisRaw=e;let t=e.problem.trim();if(!t){this.renderDiagnosisWorkspace({kind:`empty`}),this.outputPanel.querySelector(`#studioDiagProblem`)?.focus();return}let n=F(e.symptoms),r=F(e.observations),i=Qe(e.hypotheses),a=nt(e.evidence),o=e.context.trim()||void 0,s=this.kernel.getProjectManager().getCurrentProject(),c=s?w(s,e=>this.kernel.getAssetManager().getAsset(e)):[],l=dt({problem:t,symptoms:n,observations:r,hypotheses:i,evidence:a,context:o},c);this.lastDiagnosisAnalysis=l,this.diagnosisAiAssist=null,this.diagnosisAiError=null,this.kernel.getEventBus().emit(`studio:diagnosisAnalyzed`,{problem:t,hypothesisCount:i.length,evidenceCount:a.length,stage:l.stage}),this.renderDiagnosisWorkspace({kind:`result`,analysis:l})}diagnosisViewMarkup(e){return e.kind===`empty`?`
        <div class="studio-result-card studio-result-warn">
          <p>Please describe the problem before diagnosing.</p>
        </div>`:this.diagnosisResultMarkup(e.analysis)}diagnosisHypothesisTableMarkup(e){if(e.hypothesisRows.length===0)return`<p class="hint">Add at least one possible cause to see a Hypothesis Table.</p>`;let t=e=>e.length?`<ul class="studio-bullet-list">${e.map(e=>`<li>${Q(e.text)} <span class="hint">(${Q(e.source)})</span></li>`).join(``)}</ul>`:`<span class="hint">None yet</span>`;return`
      <div class="studio-table-scroll">
        <table class="studio-comparison-table">
          <thead><tr><th>Hypothesis</th><th>Supporting evidence</th><th>Contradicting evidence</th><th>Test</th></tr></thead>
          <tbody>${e.hypothesisRows.map(e=>`
      <tr>
        <td>${Q(e.hypothesis.name)}</td>
        <td>${t(e.supportingEvidence)}</td>
        <td>${t(e.contradictingEvidence)}</td>
        <td>${Q(e.recommendedTest)}</td>
      </tr>`).join(``)}</tbody>
        </table>
      </div>`}diagnosisResultMarkup(e){let{input:t}=e,n=!this.kernel.getProviderManager().hasAnyUsableProvider(),r=e.suggestedCapabilityId?a.getById(e.suggestedCapabilityId):null,o=[...t.symptoms.map(e=>`Symptom: ${e}`),...t.observations.map(e=>`Observed: ${e}`)],s=e.relatedSources.length>0?`<p class="field-label" style="margin-top:14px;">Related project sources <span class="hint">(matched by name — not automatically counted as evidence)</span></p>${this.knowledgeSourcesListMarkup(e.relatedSources,5,!1)}`:``,c=e.unmatchedEvidence.length>0?`<p class="field-label" style="margin-top:14px;">Unmatched evidence <span class="hint">(named a hypothesis not found in Possible Causes)</span></p>${this.bulletListMarkup(e.unmatchedEvidence.map(e=>`"${e.text}" — attached to "${e.hypothesis}"`),``)}`:``;return`
      <div class="studio-result-card">
        <div class="studio-caps-row" style="margin-top:0;">
          <p class="field-label" style="margin-top:0;">Problem Summary</p>
          <span class="studio-decision-label studio-decision-label-${sn[e.stage]}">${e.stage}</span>
        </div>
        <p>${Q(t.problem)}</p>
        ${t.context?`<p class="field-label" style="margin-top:8px;">Context</p><p class="hint">${Q(t.context)}</p>`:``}

        <p class="field-label" style="margin-top:14px;">Observations</p>
        ${this.bulletListMarkup(o,`No symptoms or observed data were supplied.`)}
        ${s}

        <p class="field-label" style="margin-top:14px;">Hypothesis Table</p>
        ${this.diagnosisHypothesisTableMarkup(e)}
        ${c}

        <p class="field-label" style="margin-top:14px;">Missing Information</p>
        ${this.bulletListMarkup(e.missingInformation,`Nothing further identified as missing from what was supplied.`)}

        <p class="field-label" style="margin-top:14px;">Next Action</p>
        <p>${Q(e.nextAction)}</p>

        <div id="studioDiagAiBlock">${this.diagnosisAiBlockMarkup()}</div>

        ${n?`
          <div class="studio-notice-inline">
            No AI provider is configured — AI Assist and Core AI capabilities below will need one set up first.
            <button type="button" class="ghost-btn small" id="studioDiagSetupAi">Set Up AI</button>
          </div>`:``}

        <p class="field-label" style="margin-top:14px;">Next actions</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioDiagResearch">${i(`research`,13)} Research Further</button>
          <button type="button" class="ghost-btn" id="studioDiagNewProject">${i(`plus`,13)} Create Project</button>
          ${r?`<button type="button" class="ghost-btn" id="studioDiagOpenCapability" data-open-id="${r.id}">${i(r.icon,13)} Open ${Q(r.title)}</button>`:``}
        </div>

        <p class="field-label" style="margin-top:14px;">Continue this result</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioDiagSendProblem">${i(`problem`,13)} Send to Problem Solver</button>
          <button type="button" class="ghost-btn" id="studioDiagSaveKnowledge">${i(`knowledge`,13)} Save to Knowledge</button>
        </div>

        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-diagnosis`)}
      </div>`}diagnosisAiBlockMarkup(){if(this.diagnosisAiLoading)return`<div class="studio-ai-suggestions"><p class="hint">Asking the configured AI provider to read the problem, observations, and hypotheses…</p></div>`;if(this.diagnosisAiAssist){let e=this.diagnosisAiAssist,t=(e,t)=>t.length?`<p class="field-label" style="margin-top:8px;">${e}</p>${this.bulletListMarkup(t,``)}`:``;return`
        <div class="studio-ai-suggestions">
          <p class="field-label">AI diagnosis assist <span class="hint">— unverified, not automatically authoritative, and never replaces the Hypothesis Table above</span></p>
          ${t(`Additional possible causes to consider`,e.additionalCauses)}
          ${t(`Additional observations the AI identified`,e.observations)}
          ${t(`Suggested tests`,e.recommendedTests)}
          ${t(`Missing information the AI identified`,e.missing)}
          ${e.summary?`<p class="field-label" style="margin-top:8px;">AI summary</p><p class="hint">${Q(e.summary)}</p>`:``}
          ${!e.additionalCauses.length&&!e.observations.length&&!e.recommendedTests.length&&!e.missing.length&&!e.summary?`<p class="hint">The AI provider didn't return any structured assist.</p>`:``}
        </div>`}return this.diagnosisAiError?`
        <div class="studio-ai-suggestions">
          <p class="hint" style="color:var(--rust);">AI assist failed: ${Q(this.diagnosisAiError)}</p>
          <button type="button" class="ghost-btn small" id="studioDiagAiRetry">Try Again</button>
        </div>`:`
      <div class="studio-ai-suggestions">
        <button type="button" class="ghost-btn small" id="studioDiagAiAsk">${i(`ask`,13)} Get AI Assist</button>
        <p class="hint" style="margin-top:6px;">Optional — asks the configured AI provider for additional possible causes, observations, and test ideas. The Hypothesis Table above is calculated without AI and never changes based on this.</p>
      </div>`}wireDiagnosisResult(){let e=this.outputPanel.querySelector(`#studioDiagResult`);if(!e)return;e.querySelector(`#studioDiagResearch`)?.addEventListener(`click`,()=>this.activateApp(`research`)),e.querySelector(`#studioDiagNewProject`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)}),e.querySelector(`#studioDiagOpenCapability`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.openId;t&&this.activateApp(t)}),e.querySelector(`#studioDiagSetupAi`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})}),e.querySelector(`#studioDiagSendProblem`)?.addEventListener(`click`,()=>this.sendDiagnosisResultToProblem()),e.querySelector(`#studioDiagSaveKnowledge`)?.addEventListener(`click`,()=>this.saveDiagnosisResultToKnowledge()),this.wireDiagnosisAiBlock();let t=this.lastDiagnosisAnalysis;t&&this.wireSaveBar(this.outputPanel,`studio-diagnosis`,`document`,()=>Ut(t,this.diagnosisAiAssist).title,()=>Ut(t,this.diagnosisAiAssist).content,G(`diagnosis`))}wireDiagnosisAiBlock(){let e=this.outputPanel.querySelector(`#studioDiagResult`);e&&(e.querySelector(`#studioDiagAiAsk`)?.addEventListener(`click`,()=>this.fetchDiagnosisAiAssist()),e.querySelector(`#studioDiagAiRetry`)?.addEventListener(`click`,()=>this.fetchDiagnosisAiAssist()))}sendDiagnosisResultToProblem(){let e=this.lastDiagnosisAnalysis;if(!e)return;let{goal:t,context:n}=Wt(e,this.diagnosisAiAssist);this.problemSolverPrefill={goal:t,context:n},this.lastProblemSolverResult=null,this.handoffNote=`Prefilled from Diagnosis — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`diagnosis`,to:`problem`}),this.activateApp(`problem`)}saveDiagnosisResultToKnowledge(){let e=this.lastDiagnosisAnalysis;if(!e)return;let t=this.kernel.getProjectManager().getCurrentProject();if(!t){this.handoffNote=`Select or create a project first, then save again.`,this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`),this.renderDiagnosisWorkspace({kind:`result`,analysis:e});return}let{title:n,content:r}=zt(e),i=this.kernel.getAssetManager().createAsset(n,`other`,r,G(`diagnosis`),t.id);this.kernel.getProjectManager().addAssetToProject(t.id,i.id),this.kernel.getEventBus().emit(`studio:resultSaved`,{studio:`diagnosis`,assetId:i.id,projectId:t.id}),this.handoffNote=`Saved to Knowledge as "${n}".`,this.renderDiagnosisWorkspace({kind:`result`,analysis:e})}async fetchDiagnosisAiAssist(){let e=this.lastDiagnosisAnalysis;if(!e)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}this.diagnosisAiLoading=!0,this.diagnosisAiError=null;let t=this.outputPanel.querySelector(`#studioDiagAiBlock`);t&&(t.innerHTML=this.diagnosisAiBlockMarkup());let{input:n}=e,r=[`You are assisting with hypothesis-driven troubleshooting. Given the problem, symptoms, observations, and possible causes already listed, suggest ADDITIONAL possible causes not already listed, note any extra observations worth checking, and suggest the simplest useful test for the hypotheses. Do NOT declare a single cause as the confirmed answer, and do NOT give dangerous instructions for physical/electrical systems — recommend professional verification for anything high-risk instead.`,`Problem: ${n.problem}`,n.context?`Context: ${n.context}`:``,n.symptoms.length?`Symptoms:\n${n.symptoms.map(e=>`- ${e}`).join(`
`)}`:``,n.observations.length?`Observed data:\n${n.observations.map(e=>`- ${e}`).join(`
`)}`:``,n.hypotheses.length?`Possible causes already listed:\n${n.hypotheses.map(e=>`- ${e.name}${e.suggestedTest?` (test: ${e.suggestedTest})`:``}`).join(`
`)}`:`No possible causes have been listed yet.`,n.evidence.length?`Supplied evidence:\n${n.evidence.map(e=>`- [${e.stance}] ${e.text} (hypothesis: ${e.hypothesis}, source: ${e.source})`).join(`
`)}`:``,``,`Respond in EXACTLY this plain-text format, with each line under its heading (omit a heading entirely if you have nothing to add, and never add extra commentary):`,`ADDITIONAL CAUSES:`,`- ...`,`OBSERVATIONS:`,`- ...`,`TESTS:`,`- ...`,`MISSING:`,`- ...`,`SUMMARY:`,`(one or two sentences)`].filter(Boolean).join(`
`);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:r},{temperature:.3,maxTokens:700});this.diagnosisAiAssist=this.parseDiagnosisAiReply(String(e))}catch(e){this.diagnosisAiError=e?.message||String(e)}finally{this.diagnosisAiLoading=!1;let e=this.outputPanel.querySelector(`#studioDiagAiBlock`);e&&(e.innerHTML=this.diagnosisAiBlockMarkup(),this.wireDiagnosisAiBlock())}}parseDiagnosisAiReply(e){let t={additionalCauses:[],observations:[],recommendedTests:[],missing:[],summary:null},n={"additional causes":`additionalCauses`,causes:`additionalCauses`,observations:`observations`,tests:`recommendedTests`,missing:`missing`,"missing information":`missing`,summary:`summary`},r=null,i=[];for(let a of e.split(`
`)){let e=a.trim();if(!e)continue;let o=e.replace(/:$/,``).toLowerCase();if(n[o]){r=n[o];continue}if(!r)continue;let s=e.replace(/^[-*•]\s*/,``).trim();s&&(r===`summary`?i.push(s):t[r].push(s))}return t.summary=i.length?i.join(` `):null,t}renderInspectionWorkspace(e){this.activeWorkspace=`inspection`;let t=this.outputPanel.querySelector(`.stage`);if(!t)return;let n=this.lastInspectionRaw,r=this.kernel.getProjectManager().getCurrentProject(),a=(r?.assets||[]).filter(e=>e.type===`image`||e.type===`document`||e.type===`research`||e.type===`other`||e.type===`text`||e.type===`data`||e.type===`video`),o=this.kernel.getProviderManager().getVisionCapableProviders().length>0,s=this.inspectionAttachedInputs.filter(e=>e.kind===`image`),c=this.inspectionAttachedInputs.filter(e=>e.kind===`document`||e.kind===`sensor-data`||e.kind===`video`);t.innerHTML=`
      <div class="studio-workspace studio-workspace-wide">
        ${this.intelligenceTopbarMarkup(`inspection`)}
        <div class="studio-workspace-header">
          <div>
            <div class="studio-workspace-title">${i(`inspection`,20)} MAGENAIS Intelligence — Inspection</div>
            <p class="hint">Turn an image, document, or data reading into a structured inspection. Findings are always reported honestly — Possible, Likely, Detected, Not detected, or Unable to determine — never as a certain result, and never with a fabricated measurement.</p>
            ${r?`<p class="studio-project-context">Project context: <b>${Q(r.name)}</b></p>`:``}
          </div>
        </div>

        <div class="studio-section">
          <p class="field-label">Inspection objective</p>
          <textarea id="studioInspObjective" rows="2" placeholder="e.g. Find defects in this manufactured part." aria-label="Inspection objective">${Q(n.objective)}</textarea>
        </div>

        <div class="studio-section">
          <p class="field-label">Attach an image <span class="hint">(optional — click or drag &amp; drop; sent straight to Vision for analysis)</span></p>
          <div class="dropzone" id="studioInspImageDropzone">
            <div class="dz-icon">⎘</div>
            <div class="dz-text">Click or drag an image here</div>
            <div class="dz-sub">Same Vision provider architecture as the Vision tab</div>
          </div>
          <input type="file" id="studioInspImageInput" accept="image/*" style="display:none;">
          ${s.map(e=>`<div class="file-chip"><span>${Q(e.name)}</span><button type="button" data-remove-insp-input="${Q(e.name)}" title="Remove">&times;</button></div>`).join(``)}
          ${o?``:`
            <div class="studio-notice-inline" style="margin-top:8px;">
              Vision capability is currently unavailable. Document/sensor-data-only inspections can still run — attaching an image needs a vision-capable provider set up first.
              <button type="button" class="ghost-btn small" id="studioInspSetupAi">Set Up AI</button>
            </div>`}
        </div>

        <div class="studio-section">
          <p class="field-label">Attach a document <span class="hint">(optional — PDF, Word, or image OCR; parsed entirely in your browser)</span></p>
          <div class="dropzone" id="studioInspDocDropzone">
            <div class="dz-icon">⎘</div>
            <div class="dz-text">Click or drag a PDF, Word doc, or image</div>
            <div class="dz-sub">Same PDF.js/Mammoth.js/Tesseract.js pipeline as the Documents tab</div>
          </div>
          <input type="file" id="studioInspDocInput" accept=".pdf,.docx,.doc,.png,.jpg,.jpeg,.webp" style="display:none;">
          ${this.inspectionDocExtracting?`<p class="hint" style="margin-top:8px;">${Q(this.inspectionDocStatus||`Extracting…`)}</p>`:``}
          ${this.inspectionDocError?`<p class="hint" style="margin-top:8px; color:var(--rust);">${Q(this.inspectionDocError)}</p>`:``}
          ${c.filter(e=>e.kind===`document`).map(e=>`<div class="file-chip"><span>${Q(e.name)}</span><button type="button" data-remove-insp-input="${Q(e.name)}" title="Remove">&times;</button></div>`).join(``)}
        </div>

        <div class="studio-section">
          <p class="field-label">Sensor / data readings <span class="hint">(optional — paste raw readings, log lines, or measurements)</span></p>
          <textarea id="studioInspSensorData" rows="3" placeholder="Temp sensor 3: 78C at 14:02, 81C at 14:05, 92C at 14:08&#10;Vibration RMS: 0.4g nominal, 1.1g observed" aria-label="Sensor or data readings">${Q(n.sensorData)}</textarea>
        </div>

        ${a.length>0?`
          <div class="studio-section">
            <p class="field-label">Or attach an existing project source</p>
            <div class="studio-mini-list">
              ${a.map(e=>`<button type="button" class="studio-mini-item" data-attach-insp-asset="${Q(e.id)}"><span class="studio-mini-title">+ ${Q(e.name)} <span class="hint">(${Q(e.type)})</span></span></button>`).join(``)}
            </div>
            <p class="hint">Images are analyzed directly when their content is available; documents/data use their stored text; video is referenced by name only (no frame analysis yet — capture a still frame and attach it as an image instead).</p>
          </div>`:``}
        ${c.filter(e=>e.kind===`video`).map(e=>`<div class="file-chip"><span>${Q(e.name)} <span class="hint">(video, not analyzed)</span></span><button type="button" data-remove-insp-input="${Q(e.name)}" title="Remove">&times;</button></div>`).join(``)}

        <div class="studio-section">
          <p class="field-label">Context <span class="hint">(optional — expected tolerances, known history, prior inspection results...)</span></p>
          <textarea id="studioInspContext" rows="2" placeholder="Tolerance is +/-0.5mm on the flange edge..." aria-label="Context">${Q(n.context)}</textarea>
        </div>

        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioInspAnalyze" ${this.inspectionAnalyzing?`disabled`:``}>${i(`inspection`,14)} ${this.inspectionAnalyzing?`Inspecting…`:`Inspect`}</button>
          <button type="button" class="ghost-btn" id="studioInspClear">Clear</button>
        </div>

        <div id="studioInspResult">${e?this.inspectionViewMarkup(e):``}</div>
      </div>`,this.wireIntelligenceTopbar(t);let l=()=>({objective:t.querySelector(`#studioInspObjective`)?.value||``,context:t.querySelector(`#studioInspContext`)?.value||``,sensorData:t.querySelector(`#studioInspSensorData`)?.value||``}),u=t.querySelector(`#studioInspImageDropzone`),d=t.querySelector(`#studioInspImageInput`),f=e=>{if(!e.type.startsWith(`image/`))return;let t=new FileReader;t.onload=()=>{this.inspectionAttachedInputs=this.inspectionAttachedInputs.filter(t=>!(t.kind===`image`&&t.name===e.name&&!t.assetId)),this.inspectionAttachedInputs.push({kind:`image`,name:e.name,imageDataUrl:String(t.result)}),this.lastInspectionRaw=l(),this.renderInspectionWorkspace()},t.readAsDataURL(e)};u&&d&&(u.addEventListener(`click`,()=>d.click()),d.addEventListener(`change`,()=>{d.files?.[0]&&f(d.files[0])}),u.addEventListener(`dragover`,e=>{e.preventDefault(),u.classList.add(`drag`)}),u.addEventListener(`dragleave`,()=>u.classList.remove(`drag`)),u.addEventListener(`drop`,e=>{e.preventDefault(),u.classList.remove(`drag`);let t=e.dataTransfer?.files?.[0];t&&f(t)}));let p=t.querySelector(`#studioInspDocDropzone`),m=t.querySelector(`#studioInspDocInput`);p&&m&&(p.addEventListener(`click`,()=>m.click()),m.addEventListener(`change`,()=>{m.files?.[0]&&this.runInspectionDocExtraction(m.files[0],l())}),p.addEventListener(`dragover`,e=>{e.preventDefault(),p.classList.add(`drag`)}),p.addEventListener(`dragleave`,()=>p.classList.remove(`drag`)),p.addEventListener(`drop`,e=>{e.preventDefault(),p.classList.remove(`drag`);let t=e.dataTransfer?.files?.[0];t&&this.runInspectionDocExtraction(t,l())})),t.querySelectorAll(`[data-remove-insp-input]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.removeInspInput;this.inspectionAttachedInputs=this.inspectionAttachedInputs.filter(e=>e.name!==t),this.lastInspectionRaw=l(),this.renderInspectionWorkspace()})}),t.querySelectorAll(`[data-attach-insp-asset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.attachInspAsset,n=this.kernel.getAssetManager().getAsset(t);n&&(e.disabled=!0,this.lastInspectionRaw=l(),this.resolveAssetAsInspectionInput(n).then(e=>{this.inspectionAttachedInputs=this.inspectionAttachedInputs.filter(e=>e.assetId!==t),this.inspectionAttachedInputs.push(e),this.renderInspectionWorkspace()}))})}),t.querySelector(`#studioInspAnalyze`)?.addEventListener(`click`,()=>{this.lastInspectionRaw=l(),this.runInspectionAnalysis()}),t.querySelector(`#studioInspClear`)?.addEventListener(`click`,()=>{this.lastInspectionRaw=Qt,this.inspectionAttachedInputs=[],this.inspectionDocError=null,this.lastInspectionAnalysis=null,this.inspectionError=null,this.inspectionAiAssist=null,this.inspectionAiError=null,this.handoffNote=null,this.renderInspectionWorkspace()}),t.querySelector(`#studioInspSetupAi`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})}),t.querySelector(`#studioInspSetupAiInline`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0})});let h=t.querySelector(`#studioInspObjective`);e&&e.kind===`result`&&this.wireInspectionResult(),(!e||e.kind===`empty`)&&h?.focus()}async resolveAssetAsInspectionInput(e){if(e.type===`video`)return{kind:`video`,name:e.name,assetId:e.id,assetType:e.type,unreadable:!0};if(e.type===`image`){let t=await this.resolveAssetImageDataUrl(e);return t?{kind:`image`,name:e.name,assetId:e.id,assetType:e.type,imageDataUrl:t}:{kind:`image`,name:e.name,assetId:e.id,assetType:e.type,unreadable:!0}}return typeof e.data==`string`&&e.data.trim()&&!e.data.startsWith(`data:`)&&!e.data.startsWith(`blob:`)?{kind:e.type===`data`?`sensor-data`:`document`,name:e.name,assetId:e.id,assetType:e.type,textContent:e.data}:{kind:`document`,name:e.name,assetId:e.id,assetType:e.type,unreadable:!0}}async resolveAssetImageDataUrl(e){if(typeof e.data!=`string`||!e.data)return null;if(e.data.startsWith(`data:`))return e.data;if(e.data.startsWith(`blob:`))try{let t=await(await fetch(e.data)).blob();return await new Promise((e,n)=>{let r=new FileReader;r.onload=()=>e(String(r.result)),r.onerror=()=>n(r.error),r.readAsDataURL(t)})}catch{return null}return null}async runInspectionDocExtraction(t,n){if(!this.inspectionDocExtracting){this.lastInspectionRaw=n,this.inspectionDocExtracting=!0,this.inspectionDocError=null,this.inspectionDocStatus=`Starting…`,this.renderInspectionWorkspace();try{let{extractTextFromPDF:n,extractTextFromDocx:r,extractTextFromImageOCR:i}=await e(async()=>{let{extractTextFromPDF:e,extractTextFromDocx:t,extractTextFromImageOCR:n}=await import(`./doc-DurgSM1f.js`);return{extractTextFromPDF:e,extractTextFromDocx:t,extractTextFromImageOCR:n}},__vite__mapDeps([10,2,1,3,4])),a=t.name.toLowerCase(),o=e=>{this.inspectionDocStatus=e},s;s=a.endsWith(`.pdf`)?await n(await t.arrayBuffer(),o):a.endsWith(`.docx`)||a.endsWith(`.doc`)?await r(await t.arrayBuffer(),o):await i(t,o),this.inspectionAttachedInputs=this.inspectionAttachedInputs.filter(e=>!(e.kind===`document`&&e.name===t.name&&!e.assetId)),this.inspectionAttachedInputs.push({kind:`document`,name:t.name,textContent:s})}catch(e){this.inspectionDocError=e?.message||String(e)}finally{this.inspectionDocExtracting=!1,this.inspectionDocStatus=null,this.renderInspectionWorkspace()}}}async runInspectionAnalysis(){this.handoffNote=null;let e=this.lastInspectionRaw.objective.trim(),t=this.lastInspectionRaw.sensorData.trim(),n=[...this.inspectionAttachedInputs];if(t&&n.push({kind:`sensor-data`,name:`Pasted sensor/data readings`,textContent:t}),!e){this.renderInspectionWorkspace({kind:`empty`}),this.outputPanel.querySelector(`#studioInspObjective`)?.focus();return}let r={objective:e,inputs:n,context:this.lastInspectionRaw.context.trim()||void 0};if(!xt(r)){this.inspectionError=`Attach at least one image, document, or data reading with real content before inspecting — an objective alone has nothing to look at.`,this.renderInspectionWorkspace({kind:`error`});return}let i=St(r);if(i&&this.kernel.getProviderManager().getVisionCapableProviders().length===0){this.inspectionError=`VISION_UNAVAILABLE`,this.renderInspectionWorkspace({kind:`error`});return}if(!i&&!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}this.inspectionAnalyzing=!0,this.inspectionError=null,this.renderInspectionWorkspace();try{let t=i?`vision`:`text`,a=ft(r,i),o;if(i){let e=r.inputs.find(e=>e.kind===`image`&&e.imageDataUrl);o=String(await this.kernel.getProviderManager().callVision(e.imageDataUrl,a,this.kernel.getRouter()))}else o=String(await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:a},{temperature:.2,maxTokens:900}));let s=bt(r,o,t);this.lastInspectionAnalysis=s,this.inspectionAiAssist=null,this.inspectionAiError=null,this.kernel.getEventBus().emit(`studio:inspectionAnalyzed`,{objective:e,inputCount:n.length,findingCount:s.findings.length,analyzedVia:t}),this.renderInspectionWorkspace({kind:`result`,analysis:s})}catch(e){this.inspectionError=e?.message||String(e),this.renderInspectionWorkspace({kind:`error`})}finally{this.inspectionAnalyzing=!1}}inspectionViewMarkup(e){return e.kind===`empty`?`<div class="studio-result-card studio-result-warn"><p>Please describe the inspection objective before inspecting.</p></div>`:e.kind===`error`?this.inspectionError===`VISION_UNAVAILABLE`?`
          <div class="studio-result-card studio-result-warn">
            <p>Vision capability is currently unavailable.</p>
            <p class="hint">Add an API key for a vision-capable provider (Anthropic Claude, Google Gemini, or another provider with a vision-capable model), or enable the built-in Puter.js option — in Keys &amp; Providers.</p>
            <div class="studio-ps-actions" style="margin-top:8px;">
              <button type="button" class="ghost-btn small" id="studioInspSetupAiInline">Set Up AI</button>
            </div>
          </div>`:`
        <div class="studio-result-card studio-result-warn">
          <p>${Q(this.inspectionError||`Something went wrong — please try again.`)}</p>
        </div>`:this.inspectionResultMarkup(e.analysis)}inspectionResultMarkup(e){let{input:t}=e,n=e.suggestedCapabilityId?a.getById(e.suggestedCapabilityId):null,r=t.inputs.map(e=>`${e.name} (${e.kind}${e.unreadable?` — not analyzed`:``})`),o=e.findings.length?e.findings.map(e=>`
          <div class="studio-verify-contradiction" style="margin-top:8px;">
            <div class="studio-caps-row" style="margin-top:0;">
              <p style="margin:0; font-weight:600;">${Q(e.description)}</p>
              <span class="studio-decision-label studio-decision-label-${cn[e.confidence]}">${e.confidence}</span>
            </div>
            ${e.location?`<p class="hint" style="margin-top:4px;">Location: ${Q(e.location)}</p>`:``}
            <p style="margin-top:4px;">Evidence: ${Q(e.evidence)}</p>
            ${e.severity?`<p style="margin-top:4px;">Severity: <span class="studio-decision-label studio-decision-label-${ln[e.severity]}">${e.severity}</span></p>`:``}
            <p class="hint" style="margin-top:4px;">Recommended next step: ${Q(e.recommendedNextStep)}</p>
          </div>`).join(``):`<p class="hint">No findings were returned.</p>`;return`
      <div class="studio-result-card">
        <p class="field-label" style="margin-top:0;">Inspection Objective</p>
        <p>${Q(t.objective)}</p>
        ${t.context?`<p class="field-label" style="margin-top:8px;">Context</p><p class="hint">${Q(t.context)}</p>`:``}

        <p class="field-label" style="margin-top:14px;">Attached Inputs</p>
        ${this.bulletListMarkup(r,`No inputs were attached.`)}
        <p class="hint" style="margin-top:4px;">Analyzed via: ${e.analyzedVia===`vision`?`Vision (image analysis)`:`Text (document/sensor-data analysis)`}</p>

        <p class="field-label" style="margin-top:14px;">Findings</p>
        ${o}

        <p class="field-label" style="margin-top:14px;">Overall Assessment</p>
        <p>${Q(e.overallAssessment)}</p>

        <p class="field-label" style="margin-top:14px;">Missing Information</p>
        ${this.bulletListMarkup(e.missingInformation,`Nothing further identified as missing from what was supplied.`)}

        <p class="field-label" style="margin-top:14px;">Recommended Next Action</p>
        <p>${Q(e.recommendedNextAction)}</p>

        <div id="studioInspAiBlock">${this.inspectionAiBlockMarkup()}</div>

        <p class="field-label" style="margin-top:14px;">Next actions</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioInspResearch">${i(`research`,13)} Research Further</button>
          <button type="button" class="ghost-btn" id="studioInspNewProject">${i(`plus`,13)} Create Project</button>
          ${n?`<button type="button" class="ghost-btn" id="studioInspOpenCapability" data-open-id="${n.id}">${i(n.icon,13)} Open ${Q(n.title)}</button>`:``}
        </div>

        <p class="field-label" style="margin-top:14px;">Continue this result</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioInspSendProblem">${i(`problem`,13)} Send to Problem Solver</button>
          <button type="button" class="ghost-btn" id="studioInspSaveKnowledge">${i(`knowledge`,13)} Save to Knowledge</button>
        </div>

        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-inspection`)}
      </div>`}wireInspectionResult(){let e=this.outputPanel.querySelector(`#studioInspResult`);if(!e)return;e.querySelector(`#studioInspResearch`)?.addEventListener(`click`,()=>this.activateApp(`research`)),e.querySelector(`#studioInspNewProject`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)}),e.querySelector(`#studioInspOpenCapability`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.openId;t&&this.activateApp(t)}),e.querySelector(`#studioInspSendProblem`)?.addEventListener(`click`,()=>this.sendInspectionResultToProblem()),e.querySelector(`#studioInspSaveKnowledge`)?.addEventListener(`click`,()=>this.saveInspectionResultToKnowledge()),this.wireInspectionAiBlock();let t=this.lastInspectionAnalysis;t&&this.wireSaveBar(this.outputPanel,`studio-inspection`,`document`,()=>q(t,this.inspectionAiAssist).title,()=>q(t,this.inspectionAiAssist).content,G(`inspection`))}sendInspectionResultToProblem(){let e=this.lastInspectionAnalysis;if(!e)return;let{goal:t,context:n}=Kt(e,this.inspectionAiAssist);this.problemSolverPrefill={goal:t,context:n},this.lastProblemSolverResult=null,this.handoffNote=`Prefilled from Inspection — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`inspection`,to:`problem`}),this.activateApp(`problem`)}saveInspectionResultToKnowledge(){let e=this.lastInspectionAnalysis;if(!e)return;let t=this.kernel.getProjectManager().getCurrentProject();if(!t){this.handoffNote=`Select or create a project first, then save again.`,this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`),this.renderInspectionWorkspace({kind:`result`,analysis:e});return}let{title:n,content:r}=Gt(e),i=this.kernel.getAssetManager().createAsset(n,`other`,r,G(`inspection`),t.id);this.kernel.getProjectManager().addAssetToProject(t.id,i.id),this.kernel.getEventBus().emit(`studio:resultSaved`,{studio:`inspection`,assetId:i.id,projectId:t.id}),this.handoffNote=`Saved to Knowledge as "${n}".`,this.renderInspectionWorkspace({kind:`result`,analysis:e})}inspectionAiBlockMarkup(){if(this.inspectionAiLoading)return`<div class="studio-ai-suggestions"><p class="hint">Asking the configured AI provider to review the objective and findings for additional checks and possible causes…</p></div>`;if(this.inspectionAiAssist){let e=this.inspectionAiAssist,t=(e,t)=>t.length?`<p class="field-label" style="margin-top:8px;">${e}</p>${this.bulletListMarkup(t,``)}`:``;return`
        <div class="studio-ai-suggestions">
          <p class="field-label">AI inspection assist <span class="hint">— unverified, not automatically authoritative, and never replaces the Findings above</span></p>
          ${t(`Additional checks worth doing`,e.additionalChecks)}
          ${t(`Possible underlying causes`,e.possibleCauses)}
          ${t(`Missing information the AI identified`,e.missing)}
          ${e.summary?`<p class="field-label" style="margin-top:8px;">AI summary</p><p class="hint">${Q(e.summary)}</p>`:``}
          ${!e.additionalChecks.length&&!e.possibleCauses.length&&!e.missing.length&&!e.summary?`<p class="hint">The AI provider didn't return any structured assist.</p>`:``}
        </div>`}return this.inspectionAiError?`
        <div class="studio-ai-suggestions">
          <p class="hint" style="color:var(--rust);">AI assist failed: ${Q(this.inspectionAiError)}</p>
          <button type="button" class="ghost-btn small" id="studioInspAiRetry">Try Again</button>
        </div>`:`
      <div class="studio-ai-suggestions">
        <button type="button" class="ghost-btn small" id="studioInspAiAsk">${i(`ask`,13)} Get AI Assist</button>
        <p class="hint" style="margin-top:6px;">Optional — asks the configured AI provider for additional checks, possible causes, and missing-information notes on top of the Findings above. The Findings themselves never change based on this.</p>
      </div>`}wireInspectionAiBlock(){let e=this.outputPanel.querySelector(`#studioInspResult`);e&&(e.querySelector(`#studioInspAiAsk`)?.addEventListener(`click`,()=>this.fetchInspectionAiAssist()),e.querySelector(`#studioInspAiRetry`)?.addEventListener(`click`,()=>this.fetchInspectionAiAssist()))}async fetchInspectionAiAssist(){let e=this.lastInspectionAnalysis;if(!e)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}this.inspectionAiLoading=!0,this.inspectionAiError=null;let t=this.outputPanel.querySelector(`#studioInspAiBlock`);t&&(t.innerHTML=this.inspectionAiBlockMarkup());let{input:n}=e,r=[`You are assisting with a professional inspection review. Given the objective and the findings already reported below, suggest ADDITIONAL checks worth doing to confirm or rule out these findings, note any possible underlying causes (only if the objective implies a "why"), and identify anything relevant that seems to be missing. Do NOT propose a new finding of your own or restate the findings — only add commentary on top of them. Never claim certainty the findings themselves do not support, and never invent a precise measurement.`,`Objective: ${n.objective}`,n.context?`Context: ${n.context}`:``,e.findings.length?`Findings already reported:\n${e.findings.map(e=>`- [${e.confidence}] ${e.description}${e.location?` (location: ${e.location})`:``} — evidence: ${e.evidence}${e.severity?`, severity: ${e.severity}`:``}`).join(`
`)}`:`No findings were reported.`,`Overall assessment: ${e.overallAssessment}`,``,`Respond in EXACTLY this plain-text format, with each line under its heading (omit a heading entirely if you have nothing to add, and never add extra commentary):`,`ADDITIONAL CHECKS:`,`- ...`,`POSSIBLE CAUSES:`,`- ...`,`MISSING:`,`- ...`,`SUMMARY:`,`(one or two sentences)`].filter(Boolean).join(`
`);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:r},{temperature:.3,maxTokens:700});this.inspectionAiAssist=this.parseInspectionAiReply(String(e))}catch(e){this.inspectionAiError=e?.message||String(e)}finally{this.inspectionAiLoading=!1;let e=this.outputPanel.querySelector(`#studioInspAiBlock`);e&&(e.innerHTML=this.inspectionAiBlockMarkup(),this.wireInspectionAiBlock())}}parseInspectionAiReply(e){let t={additionalChecks:[],possibleCauses:[],missing:[],summary:null},n={"additional checks":`additionalChecks`,checks:`additionalChecks`,"possible causes":`possibleCauses`,causes:`possibleCauses`,missing:`missing`,"missing information":`missing`,summary:`summary`},r=null,i=[];for(let a of e.split(`
`)){let e=a.trim();if(!e)continue;let o=e.replace(/:$/,``).toLowerCase();if(n[o]){r=n[o];continue}if(!r)continue;let s=e.replace(/^[-*•]\s*/,``).trim();s&&(r===`summary`?i.push(s):t[r].push(s))}return t.summary=i.length?i.join(` `):null,t}renderOptimizationWorkspace(e){this.activeWorkspace=`optimization`;let t=this.outputPanel.querySelector(`.stage`);if(!t)return;let n=this.lastOptimizationRaw,r=this.kernel.getProjectManager().getCurrentProject();t.innerHTML=`
      <div class="studio-workspace studio-workspace-wide">
        ${this.intelligenceTopbarMarkup(`optimization`)}
        <div class="studio-workspace-header">
          <div>
            <div class="studio-workspace-title">${i(`optimization`,20)} MAGENAIS Intelligence — Optimization</div>
            <p class="hint">Improve a measurable objective under constraints. Numbers get real arithmetic when you give them (Current vs Target, What-If); everything qualitative gets organized structure, never an invented optimal value.</p>
            ${r?`<p class="studio-project-context">Project context: <b>${Q(r.name)}</b></p>`:``}
          </div>
        </div>

        <div class="studio-section">
          <p class="field-label">What do you want to improve? <span class="hint">(the objective)</span></p>
          <textarea id="studioOptObjective" rows="2" placeholder="e.g. Reduce monthly cloud cost." aria-label="Objective">${Q(n.objective)}</textarea>
        </div>
        <div class="studio-caps-row" style="align-items:flex-start; gap:16px;">
          <div class="studio-section" style="flex:1; min-width:180px;">
            <p class="field-label">Current value <span class="hint">(optional — e.g. $500, 20%, 250ms)</span></p>
            <input type="text" id="studioOptCurrent" placeholder="$500" aria-label="Current value" value="${Q(n.currentValue)}">
          </div>
          <div class="studio-section" style="flex:1; min-width:180px;">
            <p class="field-label">Target <span class="hint">(optional)</span></p>
            <input type="text" id="studioOptTarget" placeholder="$400" aria-label="Target" value="${Q(n.target)}">
          </div>
        </div>
        <div class="studio-section">
          <p class="field-label">Variables <span class="hint">(optional — what can actually be changed, one per line)</span></p>
          <textarea id="studioOptVariables" rows="2" placeholder="Which model routes requests&#10;Cache TTL" aria-label="Variables">${Q(n.variables)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Constraints <span class="hint">(optional — one per line)</span></p>
          <textarea id="studioOptConstraints" rows="2" placeholder="Performance must remain acceptable&#10;No new vendor lock-in" aria-label="Constraints">${Q(n.constraints)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Options / strategies <span class="hint">(optional — one per line)</span></p>
          <textarea id="studioOptOptions" rows="3" placeholder="Model routing&#10;Caching&#10;Smaller model for simple requests&#10;Local model" aria-label="Options">${Q(n.options)}</textarea>
        </div>
        <div class="studio-section">
          <p class="field-label">Context <span class="hint">(optional — timeline, budget, who else is affected...)</span></p>
          <textarea id="studioOptContext" rows="2" placeholder="Need this in place before next quarter's renewal..." aria-label="Context">${Q(n.context)}</textarea>
        </div>

        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioOptAnalyze">${i(`optimization`,14)} Optimize</button>
          <button type="button" class="ghost-btn" id="studioOptClear">Clear</button>
        </div>

        <div id="studioOptResult">${e?this.optimizationViewMarkup(e):``}</div>
      </div>`,this.wireIntelligenceTopbar(t);let a=[[`objective`,`studioOptObjective`],[`variables`,`studioOptVariables`],[`constraints`,`studioOptConstraints`],[`currentValue`,`studioOptCurrent`],[`target`,`studioOptTarget`],[`options`,`studioOptOptions`],[`context`,`studioOptContext`]],o=()=>{let e={...Z};for(let[n,r]of a)e[n]=t.querySelector(`#`+r)?.value||``;return e};t.querySelector(`#studioOptAnalyze`)?.addEventListener(`click`,()=>this.runOptimizationAnalysis(o())),t.querySelector(`#studioOptClear`)?.addEventListener(`click`,()=>{this.lastOptimizationRaw=Z,this.lastOptimizationAnalysis=null,this.optimizationAiAssist=null,this.optimizationAiError=null,this.optimizationWhatIfs=[],this.handoffNote=null,this.renderOptimizationWorkspace()});let s=t.querySelector(`#studioOptObjective`);e&&e.kind!==`empty`&&this.wireOptimizationResult(),(!e||e.kind===`empty`)&&s?.focus()}runOptimizationAnalysis(e){this.handoffNote=null,this.lastOptimizationRaw=e;let t=e.objective.trim();if(!t){this.renderOptimizationWorkspace({kind:`empty`}),this.outputPanel.querySelector(`#studioOptObjective`)?.focus();return}let n=B(e.variables),r=B(e.constraints),i=B(e.options),a=Mt({objective:t,variables:n,constraints:r,currentValue:e.currentValue.trim()?V(e.currentValue):null,target:e.target.trim()?V(e.target):null,options:i,context:e.context.trim()||void 0});this.lastOptimizationAnalysis=a,this.optimizationAiAssist=null,this.optimizationAiError=null,this.optimizationWhatIfs=[],this.kernel.getEventBus().emit(`studio:optimizationAnalyzed`,{objective:t,optionCount:i.length,hasGap:!!a.gap&&a.gap.comparable}),this.renderOptimizationWorkspace({kind:`result`,analysis:a})}optimizationViewMarkup(e){return e.kind===`empty`?`<div class="studio-result-card studio-result-warn"><p>Please describe what you want to improve before optimizing.</p></div>`:this.optimizationResultMarkup(e.analysis)}optimizationResultMarkup(e){let{input:t}=e,n=e.suggestedCapabilityId?a.getById(e.suggestedCapabilityId):null,r=e.options.length?e.options.map((e,t)=>`${t+1}. ${e.description}`):[],o=e.gap?`<p class="hint" style="margin-top:4px;">${Q(e.gap.note)}</p>`:``,s=this.optimizationWhatIfs.length?this.optimizationWhatIfs.map(e=>`
          <div class="studio-verify-contradiction" style="margin-top:8px;">
            <p style="margin:0; font-weight:600;">What if ${Q(e.question)}?</p>
            <p class="hint" style="margin-top:4px;">${Q(e.result.explanation)}</p>
          </div>`).join(``):`<p class="hint">No what-if scenarios calculated yet.</p>`;return`
      <div class="studio-result-card">
        <p class="field-label" style="margin-top:0;">CURRENT STATE</p>
        <p>${Q(e.currentStateSummary)}</p>
        ${o}

        <p class="field-label" style="margin-top:14px;">OBJECTIVE</p>
        <p>${Q(t.objective)}</p>
        ${t.context?`<p class="field-label" style="margin-top:8px;">Context</p><p class="hint">${Q(t.context)}</p>`:``}

        <p class="field-label" style="margin-top:14px;">CONSTRAINTS</p>
        ${this.bulletListMarkup(t.constraints,`No constraints were supplied.`)}

        <p class="field-label" style="margin-top:14px;">VARIABLES</p>
        ${this.bulletListMarkup(t.variables,`No variables were supplied.`)}

        <p class="field-label" style="margin-top:14px;">OPTIONS</p>
        ${this.bulletListMarkup(r,`No candidate options/strategies were supplied yet.`)}

        <p class="field-label" style="margin-top:14px;">TRADE-OFFS</p>
        ${this.bulletListMarkup(e.tradeOffs,`Add at least one option to see trade-off notes.`)}

        <p class="field-label" style="margin-top:14px;">Missing Information</p>
        ${this.bulletListMarkup(e.missingInformation,`Nothing further identified as missing from what was supplied.`)}

        <p class="field-label" style="margin-top:14px;">RECOMMENDED NEXT STEP</p>
        <p>${Q(e.recommendedNextStep)}</p>

        <p class="field-label" style="margin-top:14px;">What-if <span class="hint">(deterministic — no AI call)</span></p>
        <div class="studio-caps-row" style="gap:8px; align-items:center;">
          <span class="hint">What happens if</span>
          <input type="text" id="studioOptWhatIfInput" placeholder="reduce by 20%" aria-label="What-if change" style="flex:1;" ${t.currentValue?``:`disabled`}>
          <span class="hint">?</span>
          <button type="button" class="ghost-btn small" id="studioOptWhatIfRun" ${t.currentValue?``:`disabled`}>Calculate</button>
        </div>
        ${t.currentValue?``:`<p class="hint" style="margin-top:4px;">Add a numeric Current value above to use the what-if calculator.</p>`}
        <div id="studioOptWhatIfHistory" style="margin-top:8px;">${s}</div>

        <div id="studioOptAiBlock">${this.optimizationAiBlockMarkup()}</div>

        <p class="field-label" style="margin-top:14px;">Next actions</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioOptResearch">${i(`research`,13)} Research Further</button>
          <button type="button" class="ghost-btn" id="studioOptNewProject">${i(`plus`,13)} Create Project</button>
          ${n?`<button type="button" class="ghost-btn" id="studioOptOpenCapability" data-open-id="${n.id}">${i(n.icon,13)} Open ${Q(n.title)}</button>`:``}
        </div>

        <p class="field-label" style="margin-top:14px;">Continue this result</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioOptSendProblem">${i(`problem`,13)} Send to Problem Solver</button>
          <button type="button" class="ghost-btn" id="studioOptSaveKnowledge">${i(`knowledge`,13)} Save to Knowledge</button>
        </div>

        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-optimization`)}
      </div>`}optimizationAiBlockMarkup(){if(this.optimizationAiLoading)return`<div class="studio-ai-suggestions"><p class="hint">Asking the configured AI provider to weigh the options against your constraints…</p></div>`;if(this.optimizationAiAssist){let e=this.optimizationAiAssist,t=(e,t)=>t.length?`<p class="field-label" style="margin-top:8px;">${e}</p>${this.bulletListMarkup(t,``)}`:``;return`
        <div class="studio-ai-suggestions">
          <p class="field-label">AI optimization assist <span class="hint">— unverified, not automatically authoritative, and never replaces the deterministic sections above</span></p>
          ${t(`Trade-off analysis`,e.tradeOffAnalysis)}
          ${t(`Risks to consider`,e.risks)}
          ${t(`Additional options to consider`,e.additionalOptions)}
          ${e.summary?`<p class="field-label" style="margin-top:8px;">AI summary</p><p class="hint">${Q(e.summary)}</p>`:``}
          ${!e.tradeOffAnalysis.length&&!e.risks.length&&!e.additionalOptions.length&&!e.summary?`<p class="hint">The AI provider didn't return any structured assist.</p>`:``}
        </div>`}return this.optimizationAiError?`
        <div class="studio-ai-suggestions">
          <p class="hint" style="color:var(--rust);">AI assist failed: ${Q(this.optimizationAiError)}</p>
          <button type="button" class="ghost-btn small" id="studioOptAiRetry">Try Again</button>
        </div>`:`
      <div class="studio-ai-suggestions">
        <button type="button" class="ghost-btn small" id="studioOptAiAsk">${i(`ask`,13)} Get AI Assist</button>
        <p class="hint" style="margin-top:6px;">Optional — asks the configured AI provider to weigh trade-offs, flag risks, and suggest additional options. It's explicitly told never to state a numeric outcome beyond what's already calculated above.</p>
      </div>`}wireOptimizationResult(){let e=this.outputPanel.querySelector(`#studioOptResult`);if(!e)return;e.querySelector(`#studioOptResearch`)?.addEventListener(`click`,()=>this.activateApp(`research`)),e.querySelector(`#studioOptNewProject`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)}),e.querySelector(`#studioOptOpenCapability`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.openId;t&&this.activateApp(t)}),e.querySelector(`#studioOptSendProblem`)?.addEventListener(`click`,()=>this.sendOptimizationResultToProblem()),e.querySelector(`#studioOptSaveKnowledge`)?.addEventListener(`click`,()=>this.saveOptimizationResultToKnowledge()),this.wireOptimizationWhatIf(),this.wireOptimizationAiBlock();let t=this.lastOptimizationAnalysis;t&&this.wireSaveBar(this.outputPanel,`studio-optimization`,`document`,()=>Jt(t,this.optimizationAiAssist).title,()=>Jt(t,this.optimizationAiAssist).content,G(`optimization`))}wireOptimizationWhatIf(){let e=this.outputPanel.querySelector(`#studioOptResult`);if(!e)return;let t=e.querySelector(`#studioOptWhatIfInput`),n=()=>{let e=this.lastOptimizationAnalysis;if(!e||!e.input.currentValue||!t)return;let n=t.value.trim();if(!n)return;let r=Et(e.input.currentValue,n);this.optimizationWhatIfs=[...this.optimizationWhatIfs,{question:n,result:r}],t.value=``;let i=this.outputPanel.querySelector(`#studioOptWhatIfHistory`);i&&(i.innerHTML=this.optimizationWhatIfs.map(e=>`
          <div class="studio-verify-contradiction" style="margin-top:8px;">
            <p style="margin:0; font-weight:600;">What if ${Q(e.question)}?</p>
            <p class="hint" style="margin-top:4px;">${Q(e.result.explanation)}</p>
          </div>`).join(``))};e.querySelector(`#studioOptWhatIfRun`)?.addEventListener(`click`,n),t?.addEventListener(`keydown`,e=>{e.key===`Enter`&&n()})}wireOptimizationAiBlock(){let e=this.outputPanel.querySelector(`#studioOptResult`);e&&(e.querySelector(`#studioOptAiAsk`)?.addEventListener(`click`,()=>this.fetchOptimizationAiAssist()),e.querySelector(`#studioOptAiRetry`)?.addEventListener(`click`,()=>this.fetchOptimizationAiAssist()))}sendOptimizationResultToProblem(){let e=this.lastOptimizationAnalysis;if(!e)return;let{goal:t,context:n}=Yt(e,this.optimizationAiAssist);this.problemSolverPrefill={goal:t,context:n},this.lastProblemSolverResult=null,this.handoffNote=`Prefilled from Optimization — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`optimization`,to:`problem`}),this.activateApp(`problem`)}saveOptimizationResultToKnowledge(){let e=this.lastOptimizationAnalysis;if(!e)return;let t=this.kernel.getProjectManager().getCurrentProject();if(!t){this.handoffNote=`Select or create a project first, then save again.`,this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`),this.renderOptimizationWorkspace({kind:`result`,analysis:e});return}let{title:n,content:r}=qt(e),i=this.kernel.getAssetManager().createAsset(n,`other`,r,G(`optimization`),t.id);this.kernel.getProjectManager().addAssetToProject(t.id,i.id),this.kernel.getEventBus().emit(`studio:resultSaved`,{studio:`optimization`,assetId:i.id,projectId:t.id}),this.handoffNote=`Saved to Knowledge as "${n}".`,this.renderOptimizationWorkspace({kind:`result`,analysis:e})}async fetchOptimizationAiAssist(){let e=this.lastOptimizationAnalysis;if(!e)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}this.optimizationAiLoading=!0,this.optimizationAiError=null;let t=this.outputPanel.querySelector(`#studioOptAiBlock`);t&&(t.innerHTML=this.optimizationAiBlockMarkup());let{input:n}=e,r=[`You are assisting with an optimization review. Given the objective, constraints, variables, and options already listed, provide a qualitative TRADE-OFF analysis for the listed options (cost, effort, risk — whatever is relevant), flag any RISKS worth considering, and suggest any ADDITIONAL OPTIONS not already listed. Do NOT claim an exact numeric outcome (e.g. exact cost savings, exact time saved) unless it was explicitly given to you below — if you don't have enough data to quantify something, say so qualitatively instead. Never pretend to run a mathematical optimization solver.`,`Objective: ${n.objective}`,n.context?`Context: ${n.context}`:``,`Current state: ${e.currentStateSummary}`,e.gap?`Calculated gap: ${e.gap.note}`:``,n.constraints.length?`Constraints:\n${n.constraints.map(e=>`- ${e}`).join(`
`)}`:`No constraints have been listed yet.`,n.variables.length?`Variables:\n${n.variables.map(e=>`- ${e}`).join(`
`)}`:``,n.options.length?`Options already listed:\n${n.options.map(e=>`- ${e}`).join(`
`)}`:`No options have been listed yet.`,``,`Respond in EXACTLY this plain-text format, with each line under its heading (omit a heading entirely if you have nothing to add, and never add extra commentary):`,`TRADE-OFFS:`,`- ...`,`RISKS:`,`- ...`,`ADDITIONAL OPTIONS:`,`- ...`,`SUMMARY:`,`(one or two sentences)`].filter(Boolean).join(`
`);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:r},{temperature:.3,maxTokens:700});this.optimizationAiAssist=this.parseOptimizationAiReply(String(e))}catch(e){this.optimizationAiError=e?.message||String(e)}finally{this.optimizationAiLoading=!1;let e=this.outputPanel.querySelector(`#studioOptAiBlock`);e&&(e.innerHTML=this.optimizationAiBlockMarkup(),this.wireOptimizationAiBlock())}}parseOptimizationAiReply(e){let t={tradeOffAnalysis:[],risks:[],additionalOptions:[],summary:null},n={"trade-offs":`tradeOffAnalysis`,"trade offs":`tradeOffAnalysis`,tradeoffs:`tradeOffAnalysis`,risks:`risks`,"additional options":`additionalOptions`,options:`additionalOptions`,summary:`summary`},r=null,i=[];for(let a of e.split(`
`)){let e=a.trim();if(!e)continue;let o=e.replace(/:$/,``).toLowerCase();if(n[o]){r=n[o];continue}if(!r)continue;let s=e.replace(/^[-*•]\s*/,``).trim();s&&(r===`summary`?i.push(s):t[r].push(s))}return t.summary=i.length?i.join(` `):null,t}renderKnowledgeWorkspace(){this.activeWorkspace=`knowledge`;let e=this.outputPanel.querySelector(`.stage`);if(!e)return;let t=this.kernel.getProjectManager(),n=t.getCurrentProject(),r=n?w(n,e=>this.kernel.getAssetManager().getAsset(e)):[],a=t.getProjects().filter(e=>e.id!==n?.id);e.innerHTML=`
      <div class="studio-workspace studio-workspace-wide">
        ${this.intelligenceTopbarMarkup(`knowledge`)}
        <div class="studio-workspace-header">
          <div>
            <div class="studio-workspace-title">${i(`knowledge`,20)} Knowledge</div>
            <p class="hint">Explore what MAGENAIS already knows about your current work.</p>
          </div>
        </div>

        ${n?`
          <div class="studio-kn-project-bar">
            <p class="studio-project-context">Project context: <b>${Q(n.name)}</b></p>
            <div class="studio-ps-actions" style="margin:0;">
              <button type="button" class="ghost-btn small" id="studioKnSwitchProject">${i(`app`,12)} Switch</button>
              <button type="button" class="ghost-btn small" id="studioKnEditProject">${i(`text`,12)} Edit</button>
            </div>
          </div>

          <div class="studio-knowledge-grid">
            ${this.knowledgeSectionMarkup(`Current Project`,this.knowledgeCurrentProjectMarkup(n,r))}
            ${this.knowledgeSectionMarkup(`Sources`,this.knowledgeSourcesListMarkup(r,6,!0))}
            ${this.knowledgeSectionMarkup(`Key Information`,this.bulletListMarkup(Oe(n,r),`Nothing yet.`))}
            ${this.knowledgeSectionMarkup(`Questions`,this.bulletListMarkup(D(n,r).openQuestions.slice(0,3),`No open questions identified.`))}
            ${this.knowledgeSectionMarkup(`Recent Knowledge`,this.knowledgeSourcesListMarkup(T(r,5),5,!1))}
          </div>

          <p class="field-label" style="margin-top:4px;">Knowledge Actions</p>
          <div class="studio-ps-actions">
            <button type="button" class="ghost-btn" id="studioKnAsk">${i(`ask`,13)} Ask About This Project</button>
            <button type="button" class="ghost-btn" id="studioKnFind">${i(`search`,13)} Find Information</button>
            <button type="button" class="ghost-btn" id="studioKnAddSource">${i(`plus`,13)} Add Source</button>
            <button type="button" class="ghost-btn" id="studioKnSummarize">${i(`text`,13)} Summarize Sources</button>
            <button type="button" class="ghost-btn" id="studioKnGaps">${i(`diagnosis`,13)} Identify Gaps</button>
            <button type="button" class="ghost-btn" id="studioKnOpenResearch">${i(`research`,13)} Open Research</button>
            <button type="button" class="ghost-btn" id="studioKnOpenDocuments">${i(`doc`,13)} Open Documents</button>
          </div>

          <div id="studioKnResult">${this.knowledgePanelMarkup(n,r)}</div>
        `:`
          <div class="studio-result-card studio-result-warn">
            <p>Select or create a project to build a persistent knowledge workspace.</p>
            ${a.length>0?`
              <p class="field-label" style="margin-top:14px;">Open an existing project</p>
              <div class="studio-mini-list">
                ${a.map(e=>this.knowledgeProjectRowMarkup(e)).join(``)}
              </div>`:``}
            <div class="studio-ps-actions" style="margin-top:14px;">
              <button type="button" class="run-btn" id="studioKnNewProject">${i(`plus`,14)} New Project</button>
            </div>
          </div>`}
      </div>`,this.wireIntelligenceTopbar(e),e.querySelector(`#studioKnNewProject`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)}),e.querySelectorAll(`[data-select-project-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.selectProjectId;t&&this.runKnowledgeSwitchProject(t)})}),e.querySelectorAll(`[data-delete-project-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.deleteProjectId,r=e.dataset.deleteProjectName||`this project`;n&&this.runKnowledgeDeleteProject(n,r)})}),n&&(e.querySelector(`#studioKnSwitchProject`)?.addEventListener(`click`,()=>{this.knowledgeActivePanel=this.knowledgeActivePanel===`switchProject`?`none`:`switchProject`,this.renderKnowledgeWorkspace()}),e.querySelector(`#studioKnEditProject`)?.addEventListener(`click`,()=>this.runKnowledgeOpenEditProject(n)),e.querySelector(`#studioKnAsk`)?.addEventListener(`click`,()=>{this.knowledgeActivePanel=`ask`,this.renderKnowledgeWorkspace()}),e.querySelector(`#studioKnFind`)?.addEventListener(`click`,()=>{this.knowledgeActivePanel=`find`,this.renderKnowledgeWorkspace()}),e.querySelector(`#studioKnAddSource`)?.addEventListener(`click`,()=>{this.knowledgeActivePanel=`addSource`,this.knowledgeUrlAddNotice=null,this.knowledgeFileError=null,this.renderKnowledgeWorkspace()}),e.querySelector(`#studioKnSummarize`)?.addEventListener(`click`,()=>{this.knowledgeSummary=ke(r),this.knowledgeActivePanel=`summary`,this.renderKnowledgeWorkspace()}),e.querySelector(`#studioKnGaps`)?.addEventListener(`click`,()=>{this.knowledgeGaps=D(n,r),this.knowledgeActivePanel=`gaps`,this.renderKnowledgeWorkspace()}),e.querySelector(`#studioKnOpenResearch`)?.addEventListener(`click`,()=>this.activateApp(`research`)),e.querySelector(`#studioKnOpenDocuments`)?.addEventListener(`click`,()=>this.activateApp(`doc`)),e.querySelectorAll(`[data-remove-asset-id]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let r=e.dataset.removeAssetId;r&&this.runKnowledgeRemoveSource(n,r)})}),this.wireKnowledgePanel(n,r))}knowledgeSectionMarkup(e,t){return`
      <section class="studio-kn-block">
        <p class="field-label">${Q(e)}</p>
        ${t}
      </section>`}knowledgeCurrentProjectMarkup(e,t){return`
      <p class="studio-kn-project-name">${Q(e.name)}</p>
      ${e.description?`<p class="hint">${Q(e.description)}</p>`:`<p class="hint">No description set.</p>`}
      <p class="hint">${t.length} source${t.length===1?``:`s`} &middot; last updated ${E(e.updatedAt)}</p>`}knowledgeSourcesListMarkup(e,t,n=!1){return e.length===0?`<p class="hint">No sources yet — use "Add Source" below, or link documents, research, and other files to this project.</p>`:`<div class="studio-source-list">${e.slice(0,t).map(e=>`
      <div class="studio-source-item" title="Asset ID: ${Q(e.assetId)}">
        <span class="studio-mini-icon">${i(nn[e.typeLabel]||`app`,15)}</span>
        <span class="studio-source-main">
          <span class="studio-source-name">${Q(e.name)}</span>
          <span class="hint">${Q(e.typeLabel)} &middot; ${E(e.updatedAt)} &middot; ${Q(e.projectName)}</span>
          <span class="studio-source-meta-row">
            ${this.knowledgeStatusBadgeMarkup(e.status)}
            ${e.assetType===`url`&&e.sourceUrl?`<a href="${Q(e.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="studio-source-open">${i(`link`,11)} Open Source</a>`:``}
          </span>
        </span>
        ${n?`<button type="button" class="studio-source-remove" data-remove-asset-id="${Q(e.assetId)}" aria-label="Remove ${Q(e.name)}" title="Remove this source">&times;</button>`:``}
      </div>`).join(``)}</div>${e.length>t?`<p class="hint">+${e.length-t} more</p>`:``}`}knowledgeStatusBadgeMarkup(e){let t=rn[e]||rn.metadata_only;return`<span class="studio-badge studio-badge-status-${t.cls}">${t.label}</span>`}knowledgeBadgeMarkup(e){return`<span class="studio-badge studio-badge-${e}">${e===`known`?`KNOWN`:e===`inferred`?`INFERRED`:`UNKNOWN`}</span>`}knowledgePanelMarkup(e,t){switch(this.knowledgeActivePanel){case`ask`:return this.knowledgeAskPanelMarkup();case`find`:return this.knowledgeFindPanelMarkup();case`summary`:return this.knowledgeSummaryPanelMarkup();case`gaps`:return this.knowledgeGapsPanelMarkup();case`addSource`:return this.knowledgeAddSourcePanelMarkup();case`editProject`:return this.knowledgeEditProjectPanelMarkup();case`switchProject`:return this.knowledgeSwitchProjectPanelMarkup(e);default:return``}}knowledgeAddSourcePanelMarkup(){let e=this.knowledgeAddSourceDraft,t=this.knowledgeAddSourceMode;return`
      <div class="studio-result-card">
        <p class="field-label">Add Source</p>
        <div class="chip-group" id="studioKnSourceModeChips">
          <span class="chip ${t===`text`?`active`:``}" data-val="text">Paste Text</span>
          <span class="chip ${t===`url`?`active`:``}" data-val="url">Web URL(s)</span>
          <span class="chip ${t===`file`?`active`:``}" data-val="file">Upload File</span>
        </div>
        ${t===`url`?`
          <p class="hint">One or more URLs, one per line. Stored as a reference only — MAGENAIS reads the actual page content on demand, when you Ask, Find, or Summarize, never eagerly.</p>
          <textarea id="studioKnSourceUrls" rows="4" placeholder="https://example.com/robotics&#10;https://example.com/humanoid-robot" aria-label="Source URLs, one per line">${Q(e.urls)}</textarea>
          ${this.knowledgeUrlAddNotice?`<p class="hint" style="margin-top:6px;">${Q(this.knowledgeUrlAddNotice)}</p>`:``}
          <div class="studio-ps-actions">
            <button type="button" class="run-btn" id="studioKnSourceSubmit">${i(`plus`,14)} Add Source(s)</button>
          </div>
        `:t===`file`?`
          <div id="studioKnFileBody">${this.knowledgeAddFilePanelBodyMarkup()}</div>
        `:`
          <p class="hint">Creates a real project asset — Knowledge, Documents, and Research can all read it back immediately.</p>
          <input type="text" id="studioKnSourceName" placeholder="Title" aria-label="Source title" value="${Q(e.name)}">
          <select id="studioKnSourceType" aria-label="Source type">
            ${[`document`,`research`,`other`].map(t=>`<option value="${t}" ${e.type===t?`selected`:``}>${Q(S(t))}</option>`).join(``)}
          </select>
          <textarea id="studioKnSourceContent" rows="4" placeholder="Paste or type the content..." aria-label="Source content">${Q(e.content)}</textarea>
          <div class="studio-ps-actions">
            <button type="button" class="run-btn" id="studioKnSourceSubmit">${i(`plus`,14)} Add Source</button>
          </div>
        `}
      </div>`}knowledgeAddFilePanelBodyMarkup(){let e=this.knowledgeUploadedFile;return`
      <p class="hint">PDF, Word (.docx), or image (OCR) — parsed entirely in your browser with the same PDF.js/Mammoth.js/Tesseract.js pipeline as the Documents tab, then stored as this source's readable content.</p>
      <div class="dropzone" id="studioKnFileDropzone">
        <div class="dz-icon">⎘</div>
        <div class="dz-text">Click or drag a PDF, Word doc, or image</div>
        <div class="dz-sub">Parsed entirely in your browser — never uploaded anywhere</div>
      </div>
      <input type="file" id="studioKnFileInput" accept=".pdf,.docx,.doc,.png,.jpg,.jpeg,.webp" style="display:none;">
      ${e?`<div class="file-chip"><span>${Q(e.name)}</span><button type="button" id="studioKnFileRemove" title="Remove">&times;</button></div>`:``}
      ${this.knowledgeFileExtracting?`<p class="hint" style="margin-top:8px;">${Q(this.knowledgeFileStatus||`Extracting…`)}</p>`:``}
      ${this.knowledgeFileError?`<p class="hint" style="margin-top:8px; color:var(--rust);">${Q(this.knowledgeFileError)}</p>`:``}
      <div class="studio-ps-actions">
        <button type="button" class="run-btn" id="studioKnFileSubmit" ${!e||this.knowledgeFileExtracting?`disabled`:``}>${i(`plus`,14)} ${this.knowledgeFileExtracting?`Extracting…`:`Add Source`}</button>
      </div>`}knowledgeEditProjectPanelMarkup(){let e=this.knowledgeEditProjectDraft;return`
      <div class="studio-result-card">
        <p class="field-label">Edit Project</p>
        <input type="text" id="studioKnEditName" placeholder="Project name" aria-label="Project name" value="${Q(e.name)}">
        <textarea id="studioKnEditDescription" rows="2" placeholder="Project description (optional)" aria-label="Project description">${Q(e.description)}</textarea>
        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioKnEditSave">Save</button>
          <button type="button" class="ghost-btn" id="studioKnEditCancel">Cancel</button>
        </div>
      </div>`}knowledgeSwitchProjectPanelMarkup(e){let t=this.kernel.getProjectManager().getProjects().filter(t=>t.id!==e.id);return`
      <div class="studio-result-card">
        <p class="field-label">Switch Project</p>
        ${t.length===0?`<p class="hint">No other projects yet.</p>`:`<div class="studio-mini-list">${t.map(e=>this.knowledgeProjectRowMarkup(e)).join(``)}</div>`}
        <div class="studio-ps-actions" style="margin-top:10px;">
          <button type="button" class="ghost-btn small" id="studioKnNewProject2">${i(`plus`,13)} New Project</button>
        </div>
      </div>`}knowledgeProjectRowMarkup(e){return`
      <div class="studio-mini-row">
        <button type="button" class="studio-mini-item" data-select-project-id="${Q(e.id)}">
          <span class="studio-mini-title">${Q(e.name)}</span>
        </button>
        <button type="button" class="studio-mini-delete" data-delete-project-id="${Q(e.id)}" data-delete-project-name="${Q(e.name)}" aria-label="Delete ${Q(e.name)}" title="Delete this project">${i(`trash`,13)}</button>
      </div>`}knowledgeAskPanelMarkup(){let e=this.knowledgeAnswer;return`
      <div class="studio-result-card">
        <p class="field-label">Ask About This Project</p>
        <p class="hint">MAGENAIS checks whether any linked source appears related to your question — it never claims to know a source's full content.</p>
        <textarea id="studioKnAskInput" rows="2" placeholder="e.g. Do we have anything about the pricing model?" aria-label="Question about this project">${Q(this.lastKnowledgeQuestion)}</textarea>
        <div class="studio-ps-actions">
          <button type="button" class="run-btn" id="studioKnAskSubmit">${i(`ask`,14)} Ask</button>
        </div>
        ${e?this.knowledgeAnswerMarkup(e):``}
      </div>`}knowledgeAnswerMarkup(e){let t=e.known.length>0?e.known.map(e=>`
          <div class="studio-kn-statement">
            ${this.knowledgeBadgeMarkup(`known`)}
            <p>${this.escapeHtml(e.text)}</p>
            ${this.knowledgeSourcesListMarkup(e.sources,e.sources.length)}
          </div>`).join(``):``,n=e.unknownNote?`<div class="studio-kn-statement">${this.knowledgeBadgeMarkup(`unknown`)}<p>${this.escapeHtml(e.unknownNote)}</p></div>`:``,r=e.suggestedCapabilityId?a.getById(e.suggestedCapabilityId):null;return`
      <div class="studio-kn-answer">
        <p class="field-label" style="margin-top:14px;">Response</p>
        ${t}${n}
        <div id="studioKnAiBlock">${this.knowledgeAiBlockMarkup()}</div>
        ${r?`
          <p class="field-label" style="margin-top:14px;">Related capability</p>
          <div class="studio-ps-actions">
            <button type="button" class="ghost-btn" id="studioKnOpenSuggested" data-open-id="${r.id}">${i(r.icon,13)} Open ${this.escapeHtml(r.title)}</button>
          </div>`:``}
        <p class="field-label" style="margin-top:14px;">Continue this</p>
        <div class="studio-ps-actions">
          <button type="button" class="ghost-btn" id="studioKnSendProblem">${i(`problem`,13)} Send to Problem Solver</button>
          <button type="button" class="ghost-btn" id="studioKnSendDecision">${i(`decision`,13)} Send to Decision Intelligence</button>
        </div>

        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-kn-answer`)}
      </div>`}formatKnowledgeAnswerForExport(e){let t=`Knowledge Answer: ${e.question}`.slice(0,120),n=e.known.length?e.known.map(e=>`- ${e.text}${e.sources.length?` (${e.sources.map(e=>e.name).join(`, `)})`:``}`).join(`
`):`(nothing known from linked sources)`,r=this.knowledgeResolvedSources||[],i=r.length?`\nSources checked (${r.filter(e=>e.status===`available`).length} of ${r.length} read): ${r.map(e=>e.source.name).join(`, `)}`:``,a=this.knowledgeAiAnswer?`\n\n---\n\nAI Answer (unverified, AI-generated — an interpretation, not a verified fact):\n${this.knowledgeAiAnswer}${i}`:``;return{title:t,content:[`Question: ${e.question}`,``,`Known:`,n,e.unknownNote?`\nUnknown: ${e.unknownNote}`:``].filter(e=>e!==``).join(`
`)+a}}knowledgeAiBlockMarkup(){if(this.knowledgeAiLoading)return`<div class="studio-ai-suggestions"><p class="hint">Reading the relevant sources and asking the configured AI provider…</p></div>`;if(this.knowledgeAiAnswer){let e=this.knowledgeResolvedSources||[],t=e.filter(e=>e.status===`available`).length,n=e.length>0?`
        <p class="hint" style="margin-top:10px;">Sources checked (${t} of ${e.length} read):</p>
        <div class="studio-source-list">
          ${e.map(e=>`
            <div class="studio-source-item">
              <span class="studio-mini-icon">${i(nn[e.source.typeLabel]||`app`,15)}</span>
              <span class="studio-source-main">
                <span class="studio-source-name">${Q(e.source.name)}</span>
                <span class="studio-source-meta-row">
                  ${this.knowledgeStatusBadgeMarkup(e.status===`available`?`available`:e.status===`unavailable`?`unavailable`:`metadata_only`)}
                  ${e.error?`<span class="hint">${Q(e.error)} — the original link is still available.</span>`:``}
                </span>
              </span>
            </div>`).join(``)}
        </div>`:``;return`
        <div class="studio-ai-suggestions">
          ${this.knowledgeBadgeMarkup(`inferred`)}
          <p class="hint" style="margin-top:4px;">Reasonable interpretation — generated by AI from the actual source content read below, not verified beyond that.</p>
          <p style="margin-top:6px;">${this.escapeHtml(this.knowledgeAiAnswer)}</p>
          ${n}
        </div>`}if(this.knowledgeAiError)return`
        <div class="studio-ai-suggestions">
          <p class="hint" style="color:var(--rust);">AI answer failed: ${this.escapeHtml(this.knowledgeAiError)}</p>
          <button type="button" class="ghost-btn small" id="studioKnAiRetry">Try Again</button>
        </div>`;let e=this.kernel.getProviderManager().hasAnyUsableProvider();return`
      <div class="studio-ai-suggestions">
        <button type="button" class="ghost-btn small" id="studioKnAiAsk" ${e?``:`disabled`}>${i(`ask`,13)} Get AI Answer</button>
        <p class="hint" style="margin-top:6px;">
          ${e?`Optional — asks the configured AI provider for a best-effort, clearly-labeled interpretation using only source names and project context. Never changes the KNOWN/UNKNOWN response above.`:`No AI provider is configured — set one up to get an AI-assisted interpretation.`}
        </p>
      </div>`}knowledgeFindPanelMarkup(){return`
      <div class="studio-result-card">
        <p class="field-label">Find Information</p>
        <p class="hint">Searches this project's linked sources by name, metadata, and stored content — including a bounded, on-demand check of linked web sources not already matched.</p>
        <div class="studio-ask-row">
          <input type="text" id="studioKnFindInput" placeholder="e.g. pricing" aria-label="Search this project's sources" value="${Q(this.lastKnowledgeFindQuery)}">
          <button type="button" class="ghost-btn small" id="studioKnFindSubmit">${i(`search`,13)}</button>
        </div>
        <div id="studioKnFindBody">${this.knowledgeFindBodyMarkup()}</div>
      </div>`}knowledgeFindBodyMarkup(){let e=this.knowledgeFindResults;return`
      ${this.knowledgeFindLoading?`<p class="hint" style="margin-top:10px;">Checking linked web sources…</p>`:``}
      ${e?`
        <p class="field-label" style="margin-top:14px;">${this.knowledgeBadgeMarkup(`known`)} ${e.length} match${e.length===1?``:`es`}</p>
        ${this.knowledgeSourcesListMarkup(e,e.length||1)}`:``}`}knowledgeSummaryPanelMarkup(){let e=this.knowledgeSummary;return e?`
      <div class="studio-result-card">
        <p class="field-label">Summarize Sources ${this.knowledgeBadgeMarkup(`known`)}</p>
        ${this.bulletListMarkup(e.facts,`No sources to summarize yet.`)}
        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-kn-summary`)}
      </div>`:``}knowledgeGapsPanelMarkup(){let e=this.knowledgeGaps;return e?`
      <div class="studio-result-card">
        <p class="field-label">Identify Gaps ${this.knowledgeBadgeMarkup(`unknown`)}</p>
        ${this.bulletListMarkup(e.openQuestions,`No open questions identified.`)}
        <p class="field-label" style="margin-top:14px;">Export</p>
        ${this.renderSaveBar(`studio-kn-gaps`)}
      </div>`:``}wireKnowledgePanel(e,t){let n=this.outputPanel.querySelector(`#studioKnResult`);if(!n)return;let r=n.querySelector(`#studioKnAskInput`);n.querySelector(`#studioKnAskSubmit`)?.addEventListener(`click`,()=>this.runKnowledgeAsk(e,t,r?.value||``)),r?.addEventListener(`keydown`,n=>{n.key===`Enter`&&!n.shiftKey&&(n.preventDefault(),this.runKnowledgeAsk(e,t,r.value))}),this.knowledgeActivePanel===`ask`&&!this.knowledgeAnswer&&r?.focus();let i=n.querySelector(`#studioKnFindInput`);if(n.querySelector(`#studioKnFindSubmit`)?.addEventListener(`click`,()=>this.runKnowledgeFind(e,i?.value||``)),i?.addEventListener(`keydown`,t=>{t.key===`Enter`&&(t.preventDefault(),this.runKnowledgeFind(e,i.value))}),this.knowledgeActivePanel===`find`&&!this.knowledgeFindResults&&i?.focus(),n.querySelector(`#studioKnOpenSuggested`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.openId;t&&this.activateApp(t)}),n.querySelector(`#studioKnSendProblem`)?.addEventListener(`click`,()=>this.sendKnowledgeAnswerToProblem()),n.querySelector(`#studioKnSendDecision`)?.addEventListener(`click`,()=>this.sendKnowledgeAnswerToDecision()),n.querySelector(`#studioKnAiAsk`)?.addEventListener(`click`,()=>this.fetchKnowledgeAiAnswer()),n.querySelector(`#studioKnAiRetry`)?.addEventListener(`click`,()=>this.fetchKnowledgeAiAnswer()),this.knowledgeAnswer){let e=this.knowledgeAnswer;this.wireSaveBar(this.outputPanel,`studio-kn-answer`,`document`,()=>this.formatKnowledgeAnswerForExport(e).title,()=>this.formatKnowledgeAnswerForExport(e).content)}if(this.knowledgeSummary){let t=this.knowledgeSummary;this.wireSaveBar(this.outputPanel,`studio-kn-summary`,`document`,()=>`Knowledge Summary: ${e.name}`.slice(0,120),()=>`Project: ${e.name}\n\nSources: ${t.totalSources} (${t.byTypeLabel.map(e=>`${e.count} ${e.typeLabel}`).join(`, `)||`none`})\n\nKnown facts:\n${t.facts.length?t.facts.map(e=>`- ${e}`).join(`
`):`(none)`}`)}if(this.knowledgeGaps){let t=this.knowledgeGaps;this.wireSaveBar(this.outputPanel,`studio-kn-gaps`,`document`,()=>`Knowledge Gaps: ${e.name}`.slice(0,120),()=>`Project: ${e.name}\n\nOpen questions:\n${t.openQuestions.length?t.openQuestions.map(e=>`- ${e}`).join(`
`):`(none identified)`}`)}n.querySelectorAll(`#studioKnSourceModeChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.val;t&&t!==this.knowledgeAddSourceMode&&(this.knowledgeAddSourceMode=t,this.knowledgeUrlAddNotice=null,this.knowledgeFileError=null,this.renderKnowledgeWorkspace())})});let a=n.querySelector(`#studioKnSourceName`),o=n.querySelector(`#studioKnSourceType`),s=n.querySelector(`#studioKnSourceContent`),c=n.querySelector(`#studioKnSourceUrls`),l=()=>{this.knowledgeAddSourceDraft={name:a?.value??this.knowledgeAddSourceDraft.name,type:o?.value||this.knowledgeAddSourceDraft.type,content:s?.value??this.knowledgeAddSourceDraft.content,urls:c?.value??this.knowledgeAddSourceDraft.urls}};a?.addEventListener(`input`,l),o?.addEventListener(`change`,l),s?.addEventListener(`input`,l),c?.addEventListener(`input`,l),n.querySelector(`#studioKnSourceSubmit`)?.addEventListener(`click`,()=>{l(),this.runKnowledgeAddSource(e)}),this.knowledgeActivePanel===`addSource`&&(a||c)?.focus(),this.wireKnowledgeFilePanelBody(e);let u=n.querySelector(`#studioKnEditName`),d=n.querySelector(`#studioKnEditDescription`),f=()=>{this.knowledgeEditProjectDraft={name:u?.value||``,description:d?.value||``}};u?.addEventListener(`input`,f),d?.addEventListener(`input`,f),n.querySelector(`#studioKnEditSave`)?.addEventListener(`click`,()=>{f(),this.runKnowledgeSaveProject(e)}),n.querySelector(`#studioKnEditCancel`)?.addEventListener(`click`,()=>{this.knowledgeActivePanel=`none`,this.renderKnowledgeWorkspace()}),this.knowledgeActivePanel===`editProject`&&u?.focus(),n.querySelector(`#studioKnNewProject2`)?.addEventListener(`click`,()=>{this.kernel.getEventBus().emit(`studio:quickAction`,`newProject`)})}sendKnowledgeAnswerToProblem(){let e=this.knowledgeAnswer;if(!e)return;let t=[...e.known.map(e=>e.text),e.unknownNote||``,this.knowledgeAiAnswer?`AI interpretation (unverified, AI-generated): ${this.knowledgeAiAnswer}`:``].filter(Boolean);this.problemSolverPrefill={goal:e.question,context:t.join(`
`)},this.lastProblemSolverResult=null,this.handoffNote=`Prefilled from Knowledge — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`knowledge`,to:`problem`}),this.activateApp(`problem`)}sendKnowledgeAnswerToDecision(){let e=this.knowledgeAnswer;if(!e)return;let t=[...e.known.map(e=>e.text),e.unknownNote||``,this.knowledgeAiAnswer?`AI interpretation (unverified): ${this.knowledgeAiAnswer}`:``].filter(Boolean);this.lastDecisionRaw={...J,question:e.question,context:t.join(`
`)},this.lastDecisionAnalysis=null,this.decisionAiSuggestions=null,this.decisionAiError=null,this.handoffNote=`Prefilled from Knowledge — review and edit before analyzing.`,this.kernel.getEventBus().emit(`studio:resultShared`,{from:`knowledge`,to:`decision`}),this.activateApp(`decision`)}runKnowledgeAddSource(e){if(this.knowledgeAddSourceMode===`url`){this.runKnowledgeAddUrlSources(e);return}let t=this.knowledgeAddSourceDraft,n=t.name.trim();if(!n)return;let r=this.kernel.getAssetManager().createAsset(n,t.type,t.content.trim()||null,{},e.id);this.kernel.getProjectManager().addAssetToProject(e.id,r.id),this.knowledgeAddSourceDraft={...this.knowledgeAddSourceDraft,name:``,content:``},this.knowledgeActivePanel=`none`,this.renderKnowledgeWorkspace()}runKnowledgeAddUrlSources(e){let t=this.knowledgeAddSourceDraft.urls.split(`
`).map(e=>e.trim()).filter(Boolean);if(t.length===0)return;let n=this.kernel.getAssetManager(),r=this.kernel.getProjectManager(),i=[],a=0;for(let o of t){let t=en(o);if(!t){i.push(o);continue}let s=n.createAsset(tn(t),`url`,null,{sourceUrl:t.toString()},e.id);r.addAssetToProject(e.id,s.id),a+=1}this.knowledgeAddSourceDraft={...this.knowledgeAddSourceDraft,urls:i.join(`
`)},a>0&&i.length===0?(this.knowledgeUrlAddNotice=null,this.knowledgeActivePanel=`none`):this.knowledgeUrlAddNotice=a>0?`Added ${a} source${a===1?``:`s`}. Skipped ${i.length} invalid URL${i.length===1?``:`s`} (left below to fix).`:`No valid URLs found — each line needs a full http(s):// URL.`,this.renderKnowledgeWorkspace()}wireKnowledgeFilePanelBody(e){let t=this.outputPanel.querySelector(`#studioKnFileBody`);if(!t)return;let n=t.querySelector(`#studioKnFileDropzone`),r=t.querySelector(`#studioKnFileInput`),i=t=>{this.knowledgeUploadedFile=t,this.knowledgeFileError=null,this.patchKnowledgeFileBody(e)};n&&r&&(n.addEventListener(`click`,()=>r.click()),r.addEventListener(`change`,()=>{r.files&&r.files[0]&&i(r.files[0])}),n.addEventListener(`dragover`,e=>{e.preventDefault(),n.classList.add(`drag`)}),n.addEventListener(`dragleave`,()=>n.classList.remove(`drag`)),n.addEventListener(`drop`,e=>{e.preventDefault(),n.classList.remove(`drag`);let t=e.dataTransfer?.files?.[0];t&&i(t)})),t.querySelector(`#studioKnFileRemove`)?.addEventListener(`click`,()=>{this.knowledgeUploadedFile=null,this.knowledgeFileError=null,this.patchKnowledgeFileBody(e)}),t.querySelector(`#studioKnFileSubmit`)?.addEventListener(`click`,()=>this.runKnowledgeAddFileSource(e))}patchKnowledgeFileBody(e){let t=this.outputPanel.querySelector(`#studioKnFileBody`);t&&(t.innerHTML=this.knowledgeAddFilePanelBodyMarkup()),this.wireKnowledgeFilePanelBody(e)}async runKnowledgeAddFileSource(t){let n=this.knowledgeUploadedFile;if(!(!n||this.knowledgeFileExtracting)){this.knowledgeFileExtracting=!0,this.knowledgeFileError=null,this.knowledgeFileStatus=`Starting…`,this.patchKnowledgeFileBody(t);try{let{extractTextFromPDF:r,extractTextFromDocx:i,extractTextFromImageOCR:a}=await e(async()=>{let{extractTextFromPDF:e,extractTextFromDocx:t,extractTextFromImageOCR:n}=await import(`./doc-DurgSM1f.js`);return{extractTextFromPDF:e,extractTextFromDocx:t,extractTextFromImageOCR:n}},__vite__mapDeps([10,2,1,3,4])),o=n.name.toLowerCase(),s=e=>{this.knowledgeFileStatus=e,this.patchKnowledgeFileBody(t)},c;c=o.endsWith(`.pdf`)?await r(await n.arrayBuffer(),s):o.endsWith(`.docx`)||o.endsWith(`.doc`)?await i(await n.arrayBuffer(),s):await a(n,s);let l=this.kernel.getAssetManager().createAsset(n.name,`document`,c,{sourceFile:n.name},t.id);this.kernel.getProjectManager().addAssetToProject(t.id,l.id),this.knowledgeUploadedFile=null,this.knowledgeFileStatus=null,this.knowledgeFileExtracting=!1,this.knowledgeActivePanel=`none`,this.renderKnowledgeWorkspace()}catch(e){this.knowledgeFileExtracting=!1,this.knowledgeFileStatus=null,this.knowledgeFileError=e?.message||String(e),this.patchKnowledgeFileBody(t)}}}runKnowledgeRemoveSource(e,t){window.confirm(`Remove this source from the project? This cannot be undone.`)&&(this.kernel.getProjectManager().removeAssetFromProject(e.id,t),this.kernel.getAssetManager().deleteAsset(t),this.renderKnowledgeWorkspace())}runKnowledgeOpenEditProject(e){this.knowledgeEditProjectDraft={name:e.name,description:e.description||``},this.knowledgeActivePanel=`editProject`,this.renderKnowledgeWorkspace()}runKnowledgeSaveProject(e){let t=this.knowledgeEditProjectDraft.name.trim();t&&(this.kernel.getProjectManager().updateProject(e.id,{name:t,description:this.knowledgeEditProjectDraft.description.trim()||void 0}),this.knowledgeActivePanel=`none`,this.renderKnowledgeWorkspace())}resetKnowledgeQuestionState(){this.knowledgeActivePanel=`none`,this.knowledgeAnswer=null,this.knowledgeFindResults=null,this.knowledgeFindLoading=!1,this.knowledgeSummary=null,this.knowledgeGaps=null,this.lastKnowledgeQuestion=``,this.lastKnowledgeFindQuery=``,this.knowledgeAiAnswer=null,this.knowledgeAiError=null,this.knowledgeResolvedSources=null,this.knowledgeUrlAddNotice=null,Ie()}runKnowledgeSwitchProject(e){this.resetKnowledgeQuestionState(),this.kernel.getProjectManager().setCurrentProject(e)}runKnowledgeDeleteProject(e,t){window.confirm(`Delete "${t}" and all its linked sources? This cannot be undone.`)&&(this.kernel.getProjectManager().getCurrentProject()?.id===e&&this.resetKnowledgeQuestionState(),this.kernel.getProjectManager().deleteProject(e))}runKnowledgeAsk(e,t,n){this.handoffNote=null,this.lastKnowledgeQuestion=n;let r=n.trim();if(!r){this.knowledgeAnswer=null,this.renderKnowledgeWorkspace();return}this.knowledgeAnswer=Ne(r,t,e),this.knowledgeAiAnswer=null,this.knowledgeAiError=null,this.knowledgeResolvedSources=null,this.kernel.getEventBus().emit(`studio:knowledgeAsked`,{question:r,matchCount:this.knowledgeAnswer.known[0]?.sources.length||0}),this.renderKnowledgeWorkspace()}async runKnowledgeFind(e,t){this.lastKnowledgeFindQuery=t;let n=t.trim();if(!n){this.knowledgeFindResults=null,this.knowledgeFindLoading=!1,this.renderKnowledgeWorkspace();return}let r=this.kernel.getAssetManager().search(n).filter(t=>t.projectId===e.id).map(t=>C(t,e)).sort((e,t)=>(t.updatedAt||t.createdAt)-(e.updatedAt||e.createdAt)),i=new Set(r.map(e=>e.assetId));this.knowledgeFindResults=r,this.knowledgeFindLoading=!0,this.patchKnowledgeFindBody();let a=w(e,e=>this.kernel.getAssetManager().getAsset(e)).filter(e=>e.assetType===`url`&&!i.has(e.assetId)).slice(0,5);if(a.length>0)try{let e=await M(a,e=>this.kernel.getAssetManager().getAsset(e)),t=n.toLowerCase(),r=e.filter(e=>e.status===`available`&&e.content&&e.content.toLowerCase().includes(t)).map(e=>e.source);r.length>0&&(this.knowledgeFindResults=[...this.knowledgeFindResults||[],...r].sort((e,t)=>(t.updatedAt||t.createdAt)-(e.updatedAt||e.createdAt)))}catch{}this.knowledgeFindLoading=!1,this.kernel.getEventBus().emit(`studio:knowledgeSearched`,{query:n,matchCount:this.knowledgeFindResults?.length||0}),this.patchKnowledgeFindBody()}patchKnowledgeFindBody(){let e=this.outputPanel.querySelector(`#studioKnFindBody`);e&&(e.innerHTML=this.knowledgeFindBodyMarkup())}async fetchKnowledgeAiAnswer(){let e=this.knowledgeAnswer,t=this.kernel.getProjectManager().getCurrentProject();if(!e||!t)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}this.knowledgeAiLoading=!0,this.knowledgeAiError=null;let n=this.outputPanel.querySelector(`#studioKnAiBlock`);n&&(n.innerHTML=this.knowledgeAiBlockMarkup());let r=w(t,e=>this.kernel.getAssetManager().getAsset(e)),i=e.known[0]?.sources.length?e.known[0].sources:T(r,4),a=[];try{a=await M(i,e=>this.kernel.getAssetManager().getAsset(e))}catch{a=[]}this.knowledgeResolvedSources=a;let o=N(a),s=[`You are helping someone understand a project, using ONLY the source content provided below — never outside knowledge about the general topic.`,`Each source's Status line tells you whether real content is included, or whether it is unavailable/metadata-only. Never claim to know the content of a source marked unavailable or metadata-only.`,`If the sources below disagree with each other on a point, say so explicitly and name which sources disagree.`,`If the question cannot be reasonably answered from the content below, say so plainly instead of guessing at specifics.`,`Answer in 2-5 short sentences, plain text, no headings, no fabricated facts or citations beyond the source names already given to you.`,``,`Project: ${t.name}`,t.description?`Description: ${t.description}`:`Description: (none)`,o?`Sources:\n\n${o}`:`Sources: (none could be resolved for this question)`,``,`Question: ${e.question}`].join(`
`);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:s},{temperature:.3,maxTokens:400});this.knowledgeAiAnswer=String(e).trim()}catch(e){this.knowledgeAiError=e?.message||String(e)}finally{this.knowledgeAiLoading=!1;let e=this.outputPanel.querySelector(`#studioKnAiBlock`);if(e){e.innerHTML=this.knowledgeAiBlockMarkup();let t=this.outputPanel.querySelector(`#studioKnResult`);t?.querySelector(`#studioKnAiAsk`)?.addEventListener(`click`,()=>this.fetchKnowledgeAiAnswer()),t?.querySelector(`#studioKnAiRetry`)?.addEventListener(`click`,()=>this.fetchKnowledgeAiAnswer())}}}showNotice(e){let t=this.outputPanel.querySelector(`#studioNotice`);t&&(t.textContent=e,t.hidden=!1,this.noticeTimeout&&window.clearTimeout(this.noticeTimeout),this.noticeTimeout=window.setTimeout(()=>{t.hidden=!0},3200))}handleGridKeydown(e){if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`].includes(e.key))return;let t=e.target;if(!t.classList?.contains(`studio-tile`))return;let n=t.closest(`.studio-grid`);if(!n)return;let r=Array.from(n.querySelectorAll(`.studio-tile`)),i=r.indexOf(t);if(i===-1)return;let a=Math.max(1,Math.round(n.clientWidth/(r[0]?.offsetWidth||n.clientWidth))),o=i;e.key===`ArrowRight`?o=Math.min(r.length-1,i+1):e.key===`ArrowLeft`?o=Math.max(0,i-1):e.key===`ArrowDown`?o=Math.min(r.length-1,i+a):e.key===`ArrowUp`&&(o=Math.max(0,i-a)),o!==i&&(e.preventDefault(),r[o]?.focus())}};export{un as StudioMode};