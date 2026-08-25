import{d as e,nt as t}from"./main-CRkdCVp7.js";import{t as n}from"./Mode-BgC9PqDe.js";import{t as r}from"./nodeInputKeys-CcbQRclJ.js";var i=[`agents`,`research`,`text`,`coding`,`image`,`speech`,`gamegen`],a=class{memory;constructor(e){this.memory=e}key(e,t){return`agent-pipeline:${e}:${t}`}recordStep(e,t,n){let r=typeof n==`string`?n:(()=>{try{return JSON.stringify(n??``)}catch{return String(n)}})();this.memory.set(this.key(e,t),r.slice(0,4e3),864e5,[`agent-pipeline`,`run:${e}`])}getContextDigest(e,t=3,n=1200){let r=this.memory.getByTag(`run:${e}`).sort((e,t)=>e.timestamp-t.timestamp).slice(-t);return r.length?r.map(e=>String(e.value)).join(`
---
`).slice(-n):``}clearRun(e){this.memory.getByTag(`run:${e}`).forEach(e=>this.memory.delete(e.key))}},o=class e{kernel;agentMemory;constructor(e){this.kernel=e,this.agentMemory=new a(e.getMemory())}getMemory(){return this.agentMemory}static parseJsonLoose(e){if(!e)return null;let t=e.trim(),n=t.match(/```(?:json)?\s*([\s\S]*?)```/i);n&&(t=n[1].trim());let r=t.indexOf(`{`),i=t.lastIndexOf(`}`);if(r===-1||i===-1||i<=r)return null;try{return JSON.parse(t.slice(r,i+1))}catch{return null}}static textify(e){if(e==null)return``;if(typeof e==`string`)return e;if(typeof e==`object`&&typeof e.url==`string`)return e.url;try{return JSON.stringify(e)}catch{return String(e)}}static extractProvider(e){for(let t of e){let e=t.match(/^(.+?) succeeded first — rendering result now\.$/);if(e)return e[1]}}services(){return{providerManager:this.kernel.getProviderManager(),router:this.kernel.getRouter()}}async planFromGoal(t,n){let r=(t||``).trim();if(!r)return{goal:r,steps:[]};let a=`You are a planning assistant for an AI agent. Break the user's goal into a short ordered list of concrete steps (1 step if the goal is already simple/atomic, up to 6 for a multi-part goal).
For each step choose the single best "type" from exactly this list: ${i.join(`, `)}.\n- "text": general writing/reasoning/analysis\n- "agents": a task with real-world/action framing (bookings, purchases, device control) that needs an honest "can't literally do this, but here's how" answer\n- "research": literature/academic paper questions only — never for general tasks\n- "coding": writing code\n- "image": generating an image\n- "speech": converting text to spoken audio\n- "gamegen": generating a small browser game\n\nRespond with ONLY minified JSON, no markdown fences, no commentary, in exactly this shape:\n{"steps":[{"title":"short title","type":"text","prompt":"the exact standalone instruction for this step"}]}\nUse {{previous}} inside a later step's "prompt" to refer to the previous step's output where useful.\n\nGoal: "${r}"`,o=[];try{let{providerManager:t,router:s}=this.services(),c=await t.callWithFallback(`agents`,s,{prompt:a},{temperature:.3,maxTokens:2048},n),l=typeof c==`string`?c:e.textify(c),u=e.parseJsonLoose(l);u&&Array.isArray(u.steps)&&u.steps.length&&(o=u.steps.slice(0,8).map((e,t)=>({id:`plan-${Date.now()}-${t}`,title:String(e?.title||`Step ${t+1}`).slice(0,120),modeType:i.includes(e?.type)?e.type:`agents`,promptTemplate:String(e?.prompt||r).slice(0,8e3)})))}catch(e){n?.(`Auto-planning failed (${e?.message||e}) — falling back to a single-step plan.`,`warn`)}return o.length||(o=[{id:`plan-${Date.now()}-0`,title:`Complete the task`,modeType:`agents`,promptTemplate:r}]),{goal:r,steps:o}}async optimizePrompt(t,n,r){let i=(t||``).trim();if(!i||i.length>4e3)return t;try{let{providerManager:t,router:a}=this.services(),o=`Rewrite the following instruction to be clearer and more specific, while strictly preserving its original meaning, intent, and any placeholders like {{previous}} exactly as written. Respond with ONLY the rewritten instruction — no commentary, no quotes, no markdown fences.

Original instruction:\n"""\n${i}\n"""\n\nOverall goal for context: "${n}"`,s=await t.callWithFallback(`agents`,a,{prompt:o},{temperature:.2,maxTokens:1024},r),c=(typeof s==`string`?s:e.textify(s)).trim().replace(/^["']|["']$/g,``);if(c&&c.length>3&&c.length<i.length*4)return c}catch{}return t}async reflectStep(t,n,r){let i=e.textify(n).slice(0,4e3);if(!i.trim())return{acceptable:!1,reason:`The step produced no usable output.`};try{let{providerManager:n,router:a}=this.services(),o=`Judge whether this AI output reasonably completes the given step. Respond with ONLY minified JSON, no commentary, no markdown fences: {"acceptable":true|false,"reason":"one short sentence"}.

Step: "${t}"\n\nOutput:\n"""\n${i.slice(0,3e3)}\n"""`,s=await n.callWithFallback(`agents`,a,{prompt:o},{temperature:0,maxTokens:256},r),c=e.parseJsonLoose(typeof s==`string`?s:e.textify(s));if(c&&typeof c.acceptable==`boolean`)return{acceptable:c.acceptable,reason:String(c.reason||``).slice(0,300)}}catch{}return{acceptable:!0,reason:`Reflection unavailable — accepted by default.`}}async executeSingleStep(e,t,n,i){let a=r[e.modeType]||`prompt`,o={id:`agent-step-`+e.id,name:e.title,graph:{nodes:[{id:e.id,type:e.modeType,label:e.title,config:{model:n?.model||`openai`,temperature:n?.temp??.7},inputs:{[a]:t},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},s=(await this.kernel.getWorkflowEngine().execute(o,{},i)).nodeResults[0];if(!s||s.status!==`completed`)throw Error(s?.error||`Step failed with no further detail.`);return s.output}async runSteps(t){let{steps:n,personas:r,log:i}=t,a=t.optimizePrompts!==!1,o=t.reflect!==!1,s=Math.max(0,t.maxRetriesPerStep??1),c=`run-`+Date.now().toString(36)+Math.random().toString(36).slice(2,6),l=Date.now(),u=new Map,d=[],f=new Set;for(let l=0;l<n.length;l++){let p=n[l],m=l>0?n[l-1]:null,h=Date.now(),g=p.promptTemplate||``;if(m){let t=e.textify(u.get(m.id));g=g.replace(/\{\{\s*previous\s*\}\}/gi,t)}if(!g.trim()){d.push({nodeId:p.id,title:p.title,modeType:p.modeType,status:`skipped`,error:`Skipped — the referenced previous step produced no usable output.`,startTime:h,endTime:Date.now(),duration:0,attempts:0}),i?.(`Step "${p.title}" skipped — no input available.`,`warn`);continue}let _;a&&(_=await this.optimizePrompt(g,t.goal,i),_===g&&(_=void 0));let v=_||g,y=p.personaId?r.find(e=>e.id===p.personaId):null,b=y?.instructions?`${y.instructions}\n\n${v}`:v,x=0,S,C,w=`completed`,T,E;for(;x<=s;){x++;let t=[],n=(e,n)=>{t.push(e),i?.(e,n)};try{S=await this.executeSingleStep(p,b,y,n),T=e.extractProvider(t)||T,w=`completed`,C=void 0}catch(n){w=`failed`,C=n?.message||String(n),T=e.extractProvider(t)||T}if(w===`completed`&&o&&(E=await this.reflectStep(p.promptTemplate||p.title,S,i),!E.acceptable&&x<=s)){i?.(`Reflection: step "${p.title}" needs another pass (${E.reason}) — retrying.`,`warn`);continue}break}w===`failed`&&i?.(`Step "${p.title}" failed after ${x} attempt(s): ${C} — continuing with remaining steps.`,`error`),u.set(p.id,S),T&&f.add(T),w===`completed`&&this.agentMemory.recordStep(c,p.id,S),d.push({nodeId:p.id,title:p.title,modeType:p.modeType,status:w,output:w===`completed`?S:void 0,error:C,startTime:h,endTime:Date.now(),duration:Date.now()-h,attempts:x,providerUsed:T,reflection:E,optimizedPrompt:_})}let p=Date.now(),m=d.filter(e=>e.status===`completed`).length,h=d.filter(e=>e.status===`skipped`).length,g=d.filter(e=>e.status===`failed`).length,_=[...d].reverse().find(e=>e.status===`completed`);return{nodeResults:d,summary:{goal:t.goal,planSteps:n.length,completedSteps:m,skippedSteps:h,failedSteps:g,durationMs:p-l,providersUsed:Array.from(f),finalResult:_?.output}}}},s=class extends n{personas=[];pipelineSteps=[];goal=``;optimizePrompts=!0;reflectEnabled=!0;agentPipeline;persistence=new t({type:`localStorage`,namespace:`magenais:agents-mode`});activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Section</label>
        <div class="chip-group" id="agentsSectionChips">
          <span class="chip active" data-val="pipeline">Pipeline</span>
          <span class="chip" data-val="personas">Personas</span>
        </div>
      </div>
      <div id="personasPanel" style="display:none;">
        <div class="field">
          <label class="field-label">Saved personas</label>
          <div id="personaList" style="display:flex; flex-direction:column; gap:8px;"></div>
        </div>
        <details class="adv" open>
          <summary>New persona</summary>
          <div class="adv-body">
            <div class="field">
              <label class="field-label">Name</label>
              <input type="text" id="personaName" placeholder="e.g. Skeptical Editor" autocomplete="off">
            </div>
            <div class="field">
              <label class="field-label">Instructions</label>
              <textarea id="personaInstructions" rows="4" placeholder="You are a meticulous technical editor..."></textarea>
            </div>
            <div class="field-row">
              <div class="field">
                <label class="field-label">Model</label>
                <select id="personaModel">
                  <option value="openai">openai</option>
                  <option value="mistral">mistral</option>
                  <option value="claude">claude</option>
                  <option value="deepseek">deepseek</option>
                </select>
              </div>
              <div class="field">
                <label class="field-label">Temperature</label>
                <input type="number" id="personaTemp" min="0" max="2" step="0.1" value="0.7">
              </div>
            </div>
            <button class="ghost-btn" id="savePersonaBtn" style="align-self:flex-start;">Save persona</button>
          </div>
        </details>
        <p class="hint">Personas are reusable instruction-sets for pipeline steps.</p>
      </div>
      <div id="pipelinePanel">
        <details class="adv" open>
          <summary>Goal → auto-plan</summary>
          <div class="adv-body">
            <div class="field">
              <label class="field-label">Goal</label>
              <textarea id="agentGoal" rows="2" placeholder="e.g. Research the pros and cons of remote work, then write a short summary">${this.escapeHtml(this.goal)}</textarea>
            </div>
            <button class="ghost-btn" id="autoPlanBtn" style="align-self:flex-start;">✦ Auto-plan steps</button>
            <p class="hint">Generates an editable step-by-step plan below — nothing runs until you press Run Pipeline.</p>
          </div>
        </details>
        <div class="field">
          <label class="field-label">Pipeline steps</label>
          <div id="pipelineStepList" style="display:flex; flex-direction:column; gap:10px;"></div>
          <button class="ghost-btn" id="addPipelineStepBtn" style="align-self:flex-start; margin-top:6px;">+ Add step</button>
        </div>
        <p class="hint">Use <code>{{previous}}</code> to reference previous step output. Persona instructions are prepended.</p>
        <div class="field-row">
          <label class="hint" style="display:flex; align-items:center; gap:6px;"><input type="checkbox" id="optimizePromptsChk"> Optimize prompts before sending</label>
          <label class="hint" style="display:flex; align-items:center; gap:6px;"><input type="checkbox" id="reflectChk"> Reflect on each step &amp; retry if needed</label>
        </div>
        ${this.renderPipelineHint([`text`,`agents`])}
        <button class="run-btn" id="runBtn">▸ Run Pipeline</button>
      </div>
    `),document.querySelectorAll(`#agentsSectionChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#agentsSectionChips .chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.dataset.val;document.getElementById(`personasPanel`).style.display=t===`personas`?``:`none`,document.getElementById(`pipelinePanel`).style.display=t===`pipeline`?``:`none`})}),this.agentPipeline=new o(this.kernel),this.loadState();let e=document.getElementById(`optimizePromptsChk`);e.checked=this.optimizePrompts,e.addEventListener(`change`,()=>{this.optimizePrompts=e.checked,this.saveState()});let t=document.getElementById(`reflectChk`);t.checked=this.reflectEnabled,t.addEventListener(`change`,()=>{this.reflectEnabled=t.checked,this.saveState()});let n=document.getElementById(`agentGoal`);n.addEventListener(`input`,()=>{this.goal=n.value,this.saveState()}),document.getElementById(`autoPlanBtn`)?.addEventListener(`click`,()=>this.runGuarded(`autoPlanBtn`,async()=>{let e=n.value.trim();if(!e){alert(`Describe a goal to auto-plan from first.`);return}this.appendLog(`Planning steps for: "${e}"…`);let t=await this.agentPipeline.planFromGoal(e,(e,t)=>this.appendLog(e,t));this.pipelineSteps=t.steps.map(e=>({id:e.id,modeType:e.modeType,promptTemplate:e.promptTemplate,personaId:``})),this.saveState(),this.renderPipelineSteps(),this.appendLog(`Plan ready — ${t.steps.length} step${t.steps.length===1?``:`s`}. Review and edit below, then Run Pipeline.`)})),document.getElementById(`savePersonaBtn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`personaName`)?.value.trim(),t=document.getElementById(`personaInstructions`)?.value.trim();if(!e||!t){alert(`Give the persona a name and instructions.`);return}let n=document.getElementById(`personaModel`)?.value||`openai`,r=parseFloat(document.getElementById(`personaTemp`)?.value||`0.7`);this.personas.push({id:`p-`+Date.now(),name:e,instructions:t,model:n,temp:r}),this.saveState(),this.renderPersonas(),this.renderPipelineSteps()}),document.getElementById(`addPipelineStepBtn`)?.addEventListener(`click`,()=>{this.pipelineSteps.push({id:`step-`+Date.now(),modeType:`agents`,promptTemplate:``,personaId:``}),this.saveState(),this.renderPipelineSteps()}),document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleGenerate())),this.renderPersonas(),this.renderPipelineSteps(),this.persistence.load().then(e=>{if(!e)return;Array.isArray(e.personas)&&(this.personas=e.personas),Array.isArray(e.pipelineSteps)&&e.pipelineSteps.length&&(this.pipelineSteps=e.pipelineSteps),typeof e.goal==`string`&&(this.goal=e.goal),typeof e.optimizePrompts==`boolean`&&(this.optimizePrompts=e.optimizePrompts),typeof e.reflectEnabled==`boolean`&&(this.reflectEnabled=e.reflectEnabled);let t=document.getElementById(`agentGoal`);t&&(t.value=this.goal);let n=document.getElementById(`optimizePromptsChk`);n&&(n.checked=this.optimizePrompts);let r=document.getElementById(`reflectChk`);r&&(r.checked=this.reflectEnabled),this.renderPersonas(),this.renderPipelineSteps()}).catch(()=>{})}loadState(){this.personas.length||(this.personas=[],this.pipelineSteps=[{id:`step1`,modeType:`agents`,promptTemplate:``,personaId:``}])}saveState(){this.persistence.save({personas:this.personas,pipelineSteps:this.pipelineSteps,goal:this.goal,optimizePrompts:this.optimizePrompts,reflectEnabled:this.reflectEnabled}).catch(()=>{})}renderPersonas(){let e=document.getElementById(`personaList`);if(e){if(!this.personas.length){e.innerHTML=`<p class="hint">No personas saved yet.</p>`;return}e.innerHTML=``,this.personas.forEach(t=>{let n=document.createElement(`div`);n.className=`file-chip`,n.style.alignItems=`flex-start`,n.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:2px; overflow:hidden;">
          <b style="color:var(--ink);">${t.name}</b>
          <span style="color:var(--ink-faint); font-size:10.5px;">${t.instructions.slice(0,80)}${t.instructions.length>80?`…`:``}</span>
        </div>
        <button title="Remove">×</button>
      `,n.querySelector(`button`)?.addEventListener(`click`,()=>{this.personas=this.personas.filter(e=>e.id!==t.id),this.saveState(),this.renderPersonas(),this.renderPipelineSteps()}),e.appendChild(n)})}}renderPipelineSteps(){let e=document.getElementById(`pipelineStepList`);if(!e)return;e.innerHTML=``;let t={agents:`agent (general task)`,research:`research (academic papers only)`,text:`text`,coding:`coding`,image:`image`,speech:`speech (text-to-speech)`,gamegen:`gamegen`},n=[`agents`,`research`,`text`,`coding`,`image`,`speech`,`gamegen`].map(e=>`<option value="${e}">${t[e]}</option>`).join(``);this.pipelineSteps.forEach((t,r)=>{let i=document.createElement(`div`);i.style.border=`1px solid var(--line-bright)`,i.style.borderRadius=`var(--radius)`,i.style.padding=`10px`,i.style.display=`flex`,i.style.flexDirection=`column`,i.style.gap=`8px`;let a=`<option value="">No persona</option>`+this.personas.map(e=>`<option value="${e.id}" ${e.id===t.personaId?`selected`:``}>${e.name}</option>`).join(``);i.innerHTML=`
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="field-label" style="margin:0;">Step ${r+1}</span>
          <button class="ghost-btn small" data-action="remove">Remove</button>
        </div>
        <div class="field-row">
          <div class="field">
            <label class="field-label">Type</label>
            <select data-field="modeType">${n}</select>
          </div>
          <div class="field">
            <label class="field-label">Persona</label>
            <select data-field="personaId">${a}</select>
          </div>
        </div>
        <div class="field">
          <label class="field-label">Prompt ${r>0?`<span style="text-transform:none;color:var(--ink-faint);">use {{previous}}</span>`:``}</label>
          <textarea data-field="promptTemplate" rows="3" placeholder="${r===0?`e.g. Draft a project plan for launching a podcast`:`e.g. Write a short summary of: {{previous}}`}">${t.promptTemplate}</textarea>
        </div>
      `,i.querySelector(`[data-action="remove"]`)?.addEventListener(`click`,()=>{this.pipelineSteps=this.pipelineSteps.filter(e=>e.id!==t.id),this.saveState(),this.renderPipelineSteps()});let o=i.querySelector(`[data-field="modeType"]`);o.value=t.modeType,o.addEventListener(`change`,()=>{t.modeType=o.value,this.saveState()});let s=i.querySelector(`[data-field="personaId"]`);s.value=t.personaId,s.addEventListener(`change`,()=>{t.personaId=s.value,this.saveState()});let c=i.querySelector(`[data-field="promptTemplate"]`);c.value=t.promptTemplate,c.addEventListener(`input`,()=>{t.promptTemplate=c.value,this.saveState()}),e.appendChild(i)})}async handleGenerate(){if(!this.pipelineSteps.length){alert(`Add at least one pipeline step.`);return}let t=this.outputPanel.querySelector(`.stage`);t&&this.renderLoading(`Running pipeline...`);try{let n=this.pipelineSteps.map((e,t)=>({id:e.id||`step-`+t,title:`Step ${t+1}`,modeType:e.modeType,promptTemplate:e.promptTemplate,personaId:e.personaId||void 0})),{nodeResults:r,summary:i}=await this.agentPipeline.runSteps({goal:this.goal||n[0]?.promptTemplate||``,steps:n,personas:this.personas,optimizePrompts:this.optimizePrompts,reflect:this.reflectEnabled,log:(e,t)=>this.appendLog(e,t)}),a=``;r.forEach((t,n)=>{let r=this.pipelineSteps[n],i=r?.personaId?` (`+(this.personas.find(e=>e.id===r.personaId)?.name||``)+`)`:``,o=[];t.attempts>1&&o.push(`${t.attempts} attempts`),t.providerUsed&&o.push(this.escapeHtml(t.providerUsed)),t.reflection&&!t.reflection.acceptable&&o.push(`reflection: needs review`);let s=o.length?` <span style="color:var(--ink-faint); font-weight:400;">(${o.join(`, `)})</span>`:``,c,l=null;if(t.status===`skipped`)c=`<div class="result-text" style="color:var(--ink-faint);">Skipped — ${this.escapeHtml(t.error||`no input available.`)}</div>`;else if(t.status===`failed`){let e=document.createElement(`div`);e.textContent=t.error||`unknown error`,c=`<div class="result-text" style="color:var(--rust);">Failed: ${e.innerHTML}</div>`}else if(typeof t.output==`string`&&t.output.startsWith(`blob:`))c=t.modeType===`image`?`<div class="result-media"><img src="${t.output}" style="max-height:220px; border-radius:var(--radius);"></div>`:`<div class="result-media"><audio src="${t.output}" controls></audio></div>`;else{let e=typeof t.output==`string`?t.output:t.output&&typeof t.output==`object`&&typeof t.output.url==`string`?t.output.url:JSON.stringify(t.output,null,2);c=`<div class="result-text">${this.renderMarkdown(e)}</div>`,typeof t.output==`string`&&!t.output.startsWith(`http`)&&(l=e)}a+=`<div class="doc-summary-block" style="margin-bottom:16px;">
          <p class="field-label" style="margin-bottom:6px;">Step ${n+1} — ${t.modeType}${i}${s}</p>
          ${c}
          ${l?this.renderReadAloudBlock(e(l),`Read Step ${n+1} Aloud`):``}
        </div>`}),a+=this.renderExecutionSummary(i);let o=`agent-${Date.now()}`;a+=this.renderSaveBar(o),t&&(t.innerHTML=a),this.wireReadAloudControls(),this.wireCodeCopyButtons(t),this.wireSaveBar(t,o,`agent`,()=>this.goal.slice(0,80)||`Agent run`,async()=>{let e=await Promise.all(r.map(async e=>({...e,output:typeof e.output==`string`&&e.output.startsWith(`blob:`)?await this.toPersistentUrl(e.output):e.output})));return{goal:this.goal,steps:e,summary:i}})}catch(e){this.renderError(e)}}renderExecutionSummary(e){let t=(e.durationMs/1e3).toFixed(1),n=e.providersUsed.length?e.providersUsed.map(e=>this.escapeHtml(e)).join(`, `):`n/a`;return`
      <details class="adv" style="margin-top:4px;">
        <summary>Execution summary — ${e.completedSteps}/${e.planSteps} steps completed in ${t}s</summary>
        <div class="adv-body">
          <p class="hint" style="margin:0 0 4px;"><b>Goal:</b> ${this.escapeHtml(e.goal||`(none)`)}</p>
          <p class="hint" style="margin:0 0 4px;"><b>Plan:</b> ${e.planSteps} step(s) — ${e.completedSteps} completed, ${e.skippedSteps} skipped, ${e.failedSteps} failed</p>
          <p class="hint" style="margin:0 0 4px;"><b>Duration:</b> ${t}s</p>
          <p class="hint" style="margin:0;"><b>Provider(s) used:</b> ${n}</p>
        </div>
      </details>`}deactivate(){typeof window<`u`&&window.speechSynthesis&&window.speechSynthesis.cancel()}getTitle(){return`Pipeline Results`}};export{s as AgentsMode};