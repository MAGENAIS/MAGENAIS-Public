const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/doc-Dffqsvhs.js","assets/main-DuObJZe6.js","assets/rolldown-runtime-Dd_uD5pT.js","assets/Environment-DAaQRBRU.js","assets/main-DM-5SoV6.css"])))=>i.map(i=>d[i]);
import{O as e,et as t,nt as n}from"./main-DuObJZe6.js";import{n as r}from"./DocxExporter-DTQCaNGx.js";import{n as i}from"./PdfExporter-DK9ERbUy.js";import{t as a}from"./Mode-C8tIOh56.js";import{t as o}from"./SymbiosisHandoff-DkpRyW56.js";import{t as s}from"./StudioIcons-D7K8v_Y3.js";import{t as c}from"./VoiceInput-CvaLwtaL.js";var l=[{id:`analyst`,label:`Analyst`,description:`Builds the strongest coherent analysis of the problem.`,instruction:`You are the Analyst. Develop the strongest coherent analysis of the problem. Identify assumptions, mechanisms, opportunities, and practical implications. Be concrete and specific.`},{id:`skeptic`,label:`Skeptic`,description:`Challenges the discussion's weakest reasoning.`,instruction:`You are the Skeptic. Challenge the previous contributions. Search for unsupported assumptions, contradictions, weak reasoning, missing evidence, edge cases, and alternative explanations. Be constructive, not merely contrarian.`},{id:`researcher`,label:`Researcher`,description:`Grounds the discussion in facts, context, and precedent.`,instruction:`You are the Researcher. Ground the discussion in relevant facts, context, prior art, and precedent. Clearly distinguish what is well-established from what is uncertain or unverifiable. Never fabricate sources or statistics.`},{id:`critic`,label:`Critic`,description:`Evaluates quality, coherence, and craft.`,instruction:`You are the Critic. Evaluate the quality, coherence, and craft of what has been proposed so far. Point out weak points precisely and suggest concrete improvements.`},{id:`innovator`,label:`Innovator`,description:`Generates unconventional but plausible new ideas.`,instruction:`You are the Innovator. Build on the discussion so far and generate unconventional but technically plausible new ideas or approaches that have not yet been considered.`},{id:`engineer`,label:`Engineer`,description:`Focuses on feasibility, implementation, and trade-offs.`,instruction:`You are the Engineer. Focus on technical feasibility, implementation details, architecture, and practical trade-offs. Flag anything that would be difficult, risky, or expensive to actually build.`},{id:`strategist`,label:`Strategist`,description:`Weighs options against goals and constraints.`,instruction:`You are the Strategist. Weigh the options against the stated goals and constraints. Clarify priorities, sequencing, and the likely long-term consequences of each path.`},{id:`risk-analyst`,label:`Risk Analyst`,description:`Surfaces risks, failure modes, and mitigations.`,instruction:`You are the Risk Analyst. Identify concrete risks, failure modes, and downside scenarios in what has been proposed, and suggest realistic mitigations.`},{id:`devils-advocate`,label:`Devil's Advocate`,description:`Argues the strongest opposing case.`,instruction:`You are the Devil's Advocate. Argue the strongest reasonable case AGAINST the current direction of the discussion, even if you personally find it compelling — the goal is stress-testing, not obstruction.`},{id:`creative`,label:`Creative`,description:`Explores imaginative or expressive directions.`,instruction:`You are the Creative. Explore imaginative, expressive, or unconventional directions for the topic. Prioritize originality while staying genuinely relevant to the discussion.`},{id:`synthesizer`,label:`Synthesizer`,description:`Integrates the discussion into a coherent whole.`,instruction:`You are the Synthesizer. Integrate the different perspectives raised so far into a coherent whole. Identify where they actually agree, where they genuinely conflict, and what the discussion still lacks.`}];function u(e){return l.find(t=>t.id===e)||l[0]}function d(e){let t=e.toLowerCase(),n=(...e)=>e.some(e=>t.includes(e));return n(`research`,`study`,`literature`,`evidence`,`paper`)?[`analyst`,`researcher`,`skeptic`,`synthesizer`,`critic`]:n(`controvers`,`debate`,`should we`,`ethic`,`policy`,`politic`)?[`analyst`,`skeptic`,`devils-advocate`,`researcher`,`synthesizer`]:n(`creative`,`story`,`design`,`brand`,`art`,`write a`)?[`creative`,`critic`,`innovator`,`synthesizer`,`analyst`]:n(`engineer`,`architecture`,`code`,`system`,`build`,`bug`,`performance`,`technical`)?[`engineer`,`skeptic`,`risk-analyst`,`innovator`,`critic`]:n(`decide`,`decision`,`choose`,`option`,`trade-off`,`tradeoff`,`strategy`,`invest`)?[`strategist`,`risk-analyst`,`analyst`,`devils-advocate`,`synthesizer`]:[`analyst`,`skeptic`,`innovator`,`researcher`,`synthesizer`]}function f(e){return e.getProviderManager().getProviders(`text`,!0).filter(e=>(e.noKeyNeeded||!!e.apiKey)&&!e.visionOnly).sort((e,t)=>(e.priority??50)-(t.priority??50)).map(e=>({id:e.id,name:e.name,model:e.defaultModel||``,adapterId:e.adapterId,noKeyNeeded:!!e.noKeyNeeded,inCooldown:t(e.health)}))}function p(e,t){return e.inCooldown===t.inCooldown?e.noKeyNeeded===t.noKeyNeeded?0:e.noKeyNeeded?1:-1:e.inCooldown?1:-1}function m(e){let t=f(e);return t.length>=2?{mode:`multi-provider`,usableProviders:t}:t.length===1?{mode:`single-provider`,usableProviders:t}:{mode:`none`,usableProviders:t}}var h=0;function g(){return h+=1,`sp_${Date.now()}_${h}_${Math.random().toString(36).slice(2,6)}`}function _(e,t,n){let r=u(e);return{id:g(),roleId:r.id,roleLabel:r.label,roleInstruction:r.instruction,providerId:t.id,providerName:t.name,model:t.model,enabled:!0,order:n}}function v(e,t){let n=d(t),{usableProviders:r,mode:i}=e;if(i===`none`||r.length===0)return[];if(i===`multi-provider`){let e=[...r].sort(p),t=Math.max(2,Math.min(e.length,n.length,6));return e.slice(0,t).map((e,t)=>_(n[t%n.length],e,t))}let a=r[0],o=Math.max(2,Math.min(n.length,3));return n.slice(0,o).map((e,t)=>_(e,a,t))}function y(e,t){if(t.length===0)return{participants:e,changed:!1};let n=new Map(t.map(e=>[e.id,e])),r=!1,i=new Set(e.filter(e=>{let t=n.get(e.providerId);return t&&!t.inCooldown}).map(e=>e.providerId)),a=()=>{let e=t.filter(e=>!e.inCooldown),n=e.length>0?e:t;return n.find(e=>!i.has(e.id))||n[0]};return{participants:e.map(e=>{let t=n.get(e.providerId);if(t&&!t.inCooldown)return e;let o=a();return i.add(o.id),r=!0,{...e,providerId:o.id,providerName:o.name,model:o.model}}),changed:r}}var b=8e3;function x(e){let t=e.kind===`human`?`Human`:e.roleLabel||`Participant`;return e.status===`skipped`?`${t} (round ${e.round}): [skipped]`:e.status===`error`?`${t} (round ${e.round}): [no response — ${e.error||`error`}]`:`${t} (round ${e.round}): ${e.content}`}function S(e){let t=e.transcript.filter(e=>e.status===`ok`).slice(-24).map(x).join(`

`);return t.length>b&&(t=t.slice(t.length-b)),t||`(no prior discussion yet — you are opening the discussion)`}function C(e,t){return[`Topic: ${e.topic}`,``,t.roleInstruction,``,e.mode===`single-provider`?`Note: the other participants below are different reasoning roles running on this same underlying model, not separate AI systems.`:``,`Discussion rules:`,...[`Answer the current problem directly.`,`Consider the previous participants' responses below.`,`Add something genuinely useful — do not simply repeat the transcript.`,`Challenge weak reasoning when appropriate, but stay constructive.`,`Clearly distinguish known information from your own uncertainty or speculation.`,`Never fabricate evidence, sources, or statistics.`,`Keep your response focused — a few well-developed paragraphs, not an exhaustive essay.`].map(e=>`- ${e}`),``,`Discussion so far:`,S(e),``,`Now provide the ${t.roleLabel}'s contribution for round ${e.currentRound}.`].join(`
`)}function w(e){let t=e.trimEnd();return!(!t||/[.!?"')\]}]\s*$/.test(t)||/```\s*$/.test(t)||/\|\s*$/.test(t)&&/^\s*\|.*\|\s*$/.test(t.split(`
`).pop()||``))}var T=2;async function E(e,t,n,r){let i=``,a=n;for(let o=0;o<=T;o++){let s=await e.call(t,{prompt:a},r),c=(typeof s==`string`?s:s?.text??s?.finalOutput??String(s)).trim();if(i=i?`${i}\n${c}`:c,!w(c)||o===T)break;a=`${n}\n\n---\nYou already wrote the following; it was cut off before you finished. Continue EXACTLY where you left off — do not repeat any earlier text, do not add a preamble like "continuing" or "sure":\n\n${i}`}return i}async function D(e,t,r,i){let a=e.getProviderManager(),o=e.getProviderRegistry(),s=a.getProviders(`text`,!1).find(e=>e.id===r.providerId);if(!s)return{ok:!1,error:`Provider "${r.providerName}" is no longer configured. Reconfigure this participant or remove it.`};if(!s.enabled||!(s.noKeyNeeded||s.apiKey))return{ok:!1,error:`Provider "${r.providerName}" is currently disabled or missing an API key.`};let c=o.getAdapter(s.adapterId);if(!c||!c.call)return{ok:!1,error:`Provider "${r.providerName}" has no callable adapter.`};let l=C(t,r),u=4096,d=r.model?{model:r.model,maxTokens:u,log:i||(()=>{})}:{maxTokens:u,log:i||(()=>{})},f=n.newRequestId(),p=Date.now();try{let e=await E(c,s,l,d);return!e||!e.trim()?(n.event({requestId:f,provider:r.providerName,model:r.model,providerType:`text`,failureReason:`Empty response`}),{ok:!1,error:`Empty response from ${r.providerName}.`}):(n.event({requestId:f,provider:r.providerName,model:r.model,providerType:`text`,winner:!0,latencyMs:Date.now()-p}),{ok:!0,content:e.trim()})}catch(e){return n.event({requestId:f,provider:r.providerName,model:r.model,providerType:`text`,failureReason:e?.message||String(e),latencyMs:Date.now()-p}),{ok:!1,error:e?.message||String(e)}}}var O=14e3;function k(e){let t=e.transcript.filter(e=>e.status===`ok`).map(e=>`[Round ${e.round}] ${e.kind===`human`?`Human`:e.roleLabel}: ${e.content}`).join(`

`),n=t.length>O?`...(earlier discussion omitted for length)...

`+t.slice(t.length-O):t,r=e.mode===`single-provider`?`IMPORTANT: All participants in this discussion are different reasoning ROLES run on the SAME underlying provider/model, not independent AI systems. Never write phrases like "two AI models agreed" or "independent models" — instead say things like "two distinct reasoning roles from the same provider/model produced these perspectives."`:`These participants are genuinely different AI providers/models — you may describe agreement or disagreement between them as such.`;return[`Summarize the following multi-participant discussion on the topic: "${e.topic}".`,r,`Produce the summary using exactly these section headings, each as a markdown "## " heading:`,`## Executive Summary`,`## Main Discussion`,`## Key Arguments`,`## Points of Agreement`,`## Points of Disagreement`,`## Important Ideas`,`## Open Questions`,`## Recommended Next Steps`,`## Human Contributions`,``,`Only use information actually present in the transcript below. Do not invent facts, sources, or contributions that are not there.`,``,`Transcript:`,n].join(`
`)}async function A(e,t,r){let i=t.participants.filter(e=>e.enabled);if(i.length===0)return{ok:!1,error:`No enabled participants to generate a summary with.`};let a=e.getProviderRegistry(),o=e.getProviderManager(),s=k(t),c=``;for(let e of i){let t=o.getProviders(`text`,!1).find(t=>t.id===e.providerId);if(!t||!t.enabled||!(t.noKeyNeeded||t.apiKey)){c=`Provider "${e.providerName}" is unavailable.`;continue}let i=a.getAdapter(t.adapterId);if(!i?.call){c=`Provider "${e.providerName}" has no callable adapter.`;continue}try{let a=6e3,o=e.model?{model:e.model,maxTokens:a,log:r||(()=>{})}:{maxTokens:a,log:r||(()=>{})},l=n.newRequestId(),u=Date.now(),d=await E(i,t,s,o);if(d&&d.trim())return n.event({requestId:l,provider:e.providerName,model:e.model,providerType:`text`,winner:!0,latencyMs:Date.now()-u}),{ok:!0,content:d.trim()};n.event({requestId:l,provider:e.providerName,model:e.model,providerType:`text`,failureReason:`Empty response`}),c=`Empty response from ${e.providerName}.`}catch(e){c=e?.message||String(e)}}return{ok:!1,error:c||`Unable to generate a summary.`}}function j(e){return e.kind===`human`?`human:${e.id}`:`ai:${e.round}:${e.participantId}`}function M(e){let t=new Map,n=[];for(let r of e.transcript){let e=j(r);t.has(e)||n.push(e),t.set(e,r)}return n.map(e=>t.get(e))}function N(){return{entrySignatures:new Map,roleHolder:new Map}}function P(e){return`[data-entry-key="${e.replace(/"/g,`\\"`)}"]`}function F(e,t,n,r){if(!e.querySelector(`.field[id^="symRound-"]`)&&n.entrySignatures.size>0)return null;let i=M(t);i.length>0&&e.querySelector(`#symTranscriptEmpty`)?.remove();let a=new Map;for(let e of i)e.participantId&&a.set(e.participantId,e.id);let o=[];for(let t of i){let i=j(t);if(n.entrySignatures.get(i)===t.timestamp)continue;let s=!!t.participantId&&a.get(t.participantId)===t.id;if(s&&t.participantId){let r=n.roleHolder.get(t.participantId);r&&r!==i&&e.querySelector(P(r))?.removeAttribute(`id`),n.roleHolder.set(t.participantId,i)}let c=r(t,s),l=e.querySelector(P(i)),u;if(l)l.outerHTML=c,u=e.querySelector(P(i));else{let n=e.querySelector(`#symRound-${t.round}`);n||=(e.insertAdjacentHTML(`beforeend`,`<div class="field" id="symRound-${t.round}"><p class="field-label">Round ${t.round}</p></div>`),e.querySelector(`#symRound-${t.round}`));let r=new Set(Array.from(n.children));n.insertAdjacentHTML(`beforeend`,c),u=Array.from(n.children).find(e=>!r.has(e))??null}u&&o.push(u),n.entrySignatures.set(i,t.timestamp)}return o}function I(e,t){t.entrySignatures.clear(),t.roleHolder.clear();let n=M(e),r=new Map;for(let e of n)e.participantId&&r.set(e.participantId,e.id);for(let e of n){let n=j(e);t.entrySignatures.set(n,e.timestamp),e.participantId&&r.get(e.participantId)===e.id&&t.roleHolder.set(e.participantId,n)}}function L(e){return new Date(e).toLocaleString()}function R(e){let t=`**${e.kind===`human`?`Human`:`${e.roleLabel} (${e.providerName}${e.model?` / `+e.model:``})`}** — round ${e.round}, ${L(e.timestamp)}`;if(e.status===`skipped`)return`${t}\n\n_Skipped._`;if(e.status===`error`)return`${t}\n\n_No response — ${e.error||`error`}._`;let n=e.assetRef?`\n\n_Reference: ${e.assetRef.label} (${e.sourceTab||e.assetRef.assetType})_`:``;return`${t}\n\n${e.content}${n}`}function z(e){let t=[];t.push(`# ${e.title}`),t.push(``),t.push(`**Topic:** ${e.topic||`(none stated)`}`),t.push(`**Date:** ${L(e.createdAt)} (last updated ${L(e.updatedAt)})`),t.push(`**Mode:** ${e.mode===`multi-provider`?`Multi-Provider Council`:`Single-Provider Multi-Role Council`}`),t.push(`**Status:** ${e.status}`),t.push(``),t.push(`## Participants`),t.push(``);for(let n of e.participants)t.push(`- **${n.roleLabel}** — ${n.providerName}${n.model?` / `+n.model:``}${n.enabled?``:` (disabled)`}`);e.mode===`single-provider`&&(t.push(``),t.push(`_Only one provider/model is available for this project. These are different reasoning roles from the same provider/model, not independent AI systems._`)),t.push(``),e.summary&&(t.push(`## Summary`),t.push(``),t.push(e.summary),t.push(``)),t.push(`## Full Transcript`),t.push(``);let n=M(e),r=Array.from(new Set(n.map(e=>e.round))).sort((e,t)=>e-t);for(let e of r){t.push(`### Round ${e}`),t.push(``);for(let r of n.filter(t=>t.round===e))t.push(R(r)),t.push(``)}return t.join(`
`)}function B(e){return e.replace(/[^a-z0-9\-_ ]/gi,``).trim().replace(/\s+/g,`-`).slice(0,60)||`symbiosis-project`}async function V(e,t){let n=B(e.title),a=z(e);switch(t){case`docx`:return{blob:await r(e.title,a),filename:`${n}.docx`};case`pdf`:return{blob:await i(e.title,a),filename:`${n}.pdf`};case`md`:return{blob:new Blob([a],{type:`text/markdown`}),filename:`${n}.md`};case`txt`:{let e=a.replace(/^#{1,6}\s*/gm,``).replace(/\*\*/g,``);return{blob:new Blob([e],{type:`text/plain`}),filename:`${n}.txt`}}case`json`:return{blob:new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),filename:`${n}.json`}}}var H=class t extends a{view=`list`;currentProjectId=null;isRunning=!1;stopRequested=!1;pendingHandoffBanner=null;pendingAttachmentRef=null;transcriptRenderState=N();renderedDiscussionProjectId=null;get store(){return this.kernel.getSymbiosisStore()}activate(){let e=o();e&&(this.pendingHandoffBanner=e);let t=this.store.getActiveProject();t&&t.status!==`archived`?(this.currentProjectId=t.id,this.view=t.participants.length===0?`configure`:`discussion`):this.view=`list`,this.render()}deactivate(){}getTitle(){return`Symbiosis`}onReselect(){this.render()}render(){switch(this.renderControl(this.controlMarkup()),this.wireControl(),this.view){case`list`:this.renderListView();break;case`create`:this.renderCreateView();break;case`configure`:this.renderConfigureView();break;case`discussion`:this.renderDiscussionView()}}controlMarkup(){let e=this.currentProjectId?this.store.getProject(this.currentProjectId):void 0,t=this.store.getProjects().filter(t=>t.id!==e?.id);return`
      <div class="field">
        <p class="field-label">🧬 Symbiosis</p>
        <p class="hint">Bring two or more AI perspectives — and your own — into one structured, human-controlled discussion.</p>
      </div>
      ${e?`
        <div class="studio-quick-actions">
          <button class="ghost-btn small" id="symBackToList">&larr; All Symbiosis Projects</button>
        </div>
        <div class="field">
          <p class="field-label">Active project</p>
          <div class="hint" style="color:var(--moss);">${this.escapeHtml(e.title)}</div>
          <div class="hint">${e.status} · round ${e.currentRound||0}</div>
        </div>
        <div class="field">
          <label class="field-label" for="symProjectSwitcher">Switch project</label>
          <select id="symProjectSwitcher">
            <option value="">— choose another project —</option>
            ${t.map(e=>`<option value="${e.id}">${this.escapeHtml(e.title)}</option>`).join(``)}
          </select>
        </div>
        ${this.view===`discussion`&&e.participants.length>0?this.jumpToMarkup(e):``}
        ${this.view===`discussion`&&e.participants.length>0?this.miniControlsMarkup(e):``}
      `:`
        <div class="studio-quick-actions">
          <button class="ghost-btn small" id="symNewProject">+ New Symbiosis</button>
          <button class="ghost-btn small" id="symOpenProjects">${s(`folder`,13)} Open Projects</button>
        </div>
      `}
      ${this.renderPipelineHint(`text`)}
    `}jumpToMarkup(e){let t=Array.from(new Set(e.transcript.map(e=>e.round))).sort((e,t)=>e-t);if(t.length===0)return``;let n=t.map(e=>`<option value="round-${e}">Round ${e}</option>`).join(``),r=e.participants.map(e=>`<option value="role-${e.id}">${this.escapeHtml(e.roleLabel)} (latest turn)</option>`).join(``),i=e.summary?`<option value="summary">Summary</option>`:``;return`
      <div class="field">
        <label class="field-label" for="symJumpTo">Jump to</label>
        <select id="symJumpTo">
          <option value="">— round or role —</option>
          <optgroup label="Rounds">${n}</optgroup>
          <optgroup label="Roles (latest turn)">${r}</optgroup>
          ${i?`<optgroup label="Summary">${i}</optgroup>`:``}
        </select>
      </div>
    `}miniControlsMarkup(e){let{round:t,roundHasStarted:n,canStart:r,canContinue:i,isPaused:a,noProvidersLeft:o,roundStatusLine:s}=this.computeDiscussionState(e);return`
      <div class="field symb-mini-controls">
        <p class="field-label">Round Controls</p>
        <p class="hint">Provider/model shown per participant.</p>
        ${s}
        ${this.roundControlsMarkup({canStart:r,canContinue:i,isPaused:a,isRunning:this.isRunning,round:t,noProvidersLeft:o})}
        ${n?this.humanContributionMarkup(`Mini`,!0):``}
        <div class="studio-quick-actions" style="margin-top:10px;">
          <span class="hint">Export:</span>
          <button class="ghost-btn small" data-sym-export="docx">Word</button>
          <button class="ghost-btn small" data-sym-export="pdf">PDF</button>
          <button class="ghost-btn small" data-sym-export="txt">TXT</button>
          <button class="ghost-btn small" data-sym-export="md">Markdown</button>
          <button class="ghost-btn small" data-sym-export="json">JSON</button>
        </div>
        <button class="ghost-btn small" data-sym-edit-participants style="margin-top:6px;">Edit Participants</button>
      </div>
    `}wireControl(){this.controlPanel.querySelector(`#symBackToList`)?.addEventListener(`click`,()=>{this.view=`list`,this.currentProjectId=null,this.render()}),this.controlPanel.querySelector(`#symNewProject`)?.addEventListener(`click`,()=>{this.view=`create`,this.render()}),this.controlPanel.querySelector(`#symOpenProjects`)?.addEventListener(`click`,()=>{this.view=`list`,this.render()}),this.controlPanel.querySelector(`#symProjectSwitcher`)?.addEventListener(`change`,e=>{let t=e.target.value;t&&this.openProject(t)}),this.controlPanel.querySelector(`#symJumpTo`)?.addEventListener(`change`,e=>{let t=e.target.value;t&&((t===`summary`?document.getElementById(`symSummarySection`):document.getElementById(`sym${t.startsWith(`round-`)?`Round`:`Role`}-${t.split(`-`).slice(1).join(`-`)}`))?.scrollIntoView({behavior:`smooth`,block:`start`}),e.target.value=``)})}renderListView(){let e=this.store.getProjects(),t=this.pendingHandoffBanner?this.pendingHandoffBannerMarkup(this.pendingHandoffBanner):``,n=e.length===0?`<p class="hint" style="padding:12px 0;">No Symbiosis projects yet. Create one to bring AI perspectives together on a topic.</p>`:e.map(e=>this.projectRowMarkup(e)).join(``);this.renderOutput(`
      <div class="result-text symb-shell">
        ${t}
        <h3 style="margin-top:0;">Symbiosis Archive</h3>
        <div class="studio-quick-actions" style="margin-bottom:12px;">
          <button class="run-btn" id="symCreateBtn">+ New Symbiosis Project</button>
        </div>
        <div class="symb-project-list">${n}</div>
        ${this.renderPipelineHint(`text`)}
      </div>
    `),this.outputPanel.querySelector(`#symCreateBtn`)?.addEventListener(`click`,()=>{this.view=`create`,this.render()}),this.outputPanel.querySelectorAll(`[data-sym-open]`).forEach(e=>{e.addEventListener(`click`,()=>this.openProject(e.dataset.symOpen))}),this.outputPanel.querySelectorAll(`[data-sym-rename]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.symRename,n=this.store.getProject(t);if(!n)return;let r=prompt(`Rename Symbiosis project`,n.title);r&&r.trim()&&(this.store.renameProject(t,r),this.render())})}),this.outputPanel.querySelectorAll(`[data-sym-delete]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.symDelete,n=this.store.getProject(t);n&&confirm(`Delete "${n.title}"? This cannot be undone.`)&&(this.store.deleteProject(t),this.render())})}),this.outputPanel.querySelectorAll(`[data-sym-archive]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.symArchive;this.store.setStatus(t,`archived`),this.render()})}),this.outputPanel.querySelectorAll(`[data-sym-export-row]`).forEach(e=>{let t=e;this.guardClick(t,`Exporting…`,()=>this.handleExport(t.dataset.symExportRow,`md`))}),this.wireHandoffBannerButtons()}projectRowMarkup(e){let t=e.participants.map(e=>`${e.roleLabel} (${e.providerName})`).join(`, `)||`(not configured)`,n=e.transcript.length?Math.max(...e.transcript.map(e=>e.round),0):0;return`
      <div class="symb-project-card">
        <div class="symb-project-card-body">
          <b>${this.escapeHtml(e.title)}</b>
          <div class="hint">${this.escapeHtml(e.topic||`(no topic set)`)}</div>
          <div class="hint">${this.escapeHtml(t)}</div>
          <div class="hint">${n?`${n} round(s)`:`no rounds yet`} · ${e.status} · updated ${new Date(e.updatedAt).toLocaleDateString()}</div>
        </div>
        <div class="symb-project-card-actions studio-quick-actions">
          <button class="ghost-btn small" data-sym-open="${e.id}">Open${n?` / Continue`:``}</button>
          <button class="ghost-btn small" data-sym-rename="${e.id}">Rename</button>
          <button class="ghost-btn small" data-sym-export-row="${e.id}">Export (.md)</button>
          ${e.status===`archived`?``:`<button class="ghost-btn small" data-sym-archive="${e.id}">Archive</button>`}
          <button class="ghost-btn small" data-sym-delete="${e.id}">Delete</button>
        </div>
      </div>
    `}openProject(e){let t=this.store.getProject(e);t&&(this.currentProjectId=e,this.store.setActiveProject(e),t.status===`archived`&&this.store.setStatus(e,`paused`),this.view=t.participants.length===0?`configure`:`discussion`,this.render())}pendingHandoffBannerMarkup(e){return`
      <div class="ai-notice" id="symHandoffBanner" style="margin-bottom:14px;">
        <b>${this.escapeHtml(e.sourceTab)} sent something to Symbiosis:</b>
        <div class="hint" style="margin:4px 0;">${this.escapeHtml(e.title)}</div>
        <div class="studio-quick-actions">
          <button class="ghost-btn small" id="symHandoffNew">Create New Project With This</button>
          <button class="ghost-btn small" id="symHandoffExisting">Add to Existing Project</button>
          <button class="ghost-btn small" id="symHandoffDismiss">Dismiss</button>
        </div>
      </div>
    `}wireHandoffBannerButtons(){let e=this.pendingHandoffBanner;e&&(this.outputPanel.querySelector(`#symHandoffDismiss`)?.addEventListener(`click`,()=>{this.pendingHandoffBanner=null,this.render()}),this.outputPanel.querySelector(`#symHandoffNew`)?.addEventListener(`click`,()=>{this.view=`create`,this.pendingHandoffBanner=null,this.render();let t=document.getElementById(`symTopicInput`);t&&(t.value=e.title)}),this.outputPanel.querySelector(`#symHandoffExisting`)?.addEventListener(`click`,()=>{let t=this.store.getProjects().filter(e=>e.status!==`archived`);if(t.length===0){alert(`No existing (non-archived) Symbiosis projects to add to.`);return}let n=t.map((e,t)=>`${t+1}. ${e.title}`).join(`
`),r=prompt(`Add to which project?\n${n}`,`1`),i=t[r?parseInt(r,10)-1:-1];i&&(this.store.appendTranscriptEntry(i.id,{round:i.currentRound||1,kind:`human`,content:e.content,timestamp:Date.now(),status:`ok`,sourceTab:e.sourceTab,assetRef:e.assetRef}),this.store.setActiveProject(i.id),this.pendingHandoffBanner=null,this.openProject(i.id))}))}renderCreateView(){this.renderOutput(`
      <div class="result-text symb-shell">
        <h3 style="margin-top:0;">New Symbiosis Project</h3>
        <div class="field">
          <label class="field-label" for="symTitleInput">Title</label>
          <input type="text" id="symTitleInput" placeholder="e.g. AGI Architecture Research" maxlength="120">
        </div>
        <div class="field">
          <label class="field-label" for="symTopicInput">Topic / question for the council</label>
          <textarea id="symTopicInput" rows="4" placeholder="What should the AI participants and you discuss?"></textarea>
        </div>
        <div class="studio-quick-actions">
          <button class="run-btn" id="symCreateConfirm">Create Project</button>
          <button class="ghost-btn small" id="symCreateCancel">Cancel</button>
        </div>
      </div>
    `),this.outputPanel.querySelector(`#symCreateCancel`)?.addEventListener(`click`,()=>{this.view=`list`,this.render()});let e=this.outputPanel.querySelector(`#symCreateConfirm`);e&&this.guardClick(e,`Creating…`,()=>{let e=document.getElementById(`symTitleInput`)?.value||``,t=document.getElementById(`symTopicInput`)?.value||``;if(!t.trim()){alert(`Add a topic or question for the council to discuss.`);return}let n=this.store.createProject(e||t.slice(0,60),t);this.currentProjectId=n.id,this.view=`configure`,this.render()})}renderConfigureView(){let e=this.currentProject();if(!e){this.view=`list`,this.render();return}let t=m(this.kernel),n=t.usableProviders;if(e.participants.length>0&&n.length>0){let{participants:t,changed:r}=y(e.participants,n);r&&(this.store.updateProject(e.id,{participants:t}),e.participants=t)}if(t.mode===`none`){this.renderOutput(`
        <div class="result-text symb-shell">
          <h3 style="margin-top:0;">${this.escapeHtml(e.title)}</h3>
          <div class="ai-notice">
            <b>No usable AI provider/model is currently available.</b>
            <div class="hint" style="margin-top:6px;">Enable at least one provider (with an API key, or a no-key local provider) to configure a Symbiosis council.</div>
            <div class="studio-quick-actions" style="margin-top:8px;">
              <button class="ghost-btn small" id="symOpenProviders">Open Keys &amp; Providers</button>
            </div>
          </div>
        </div>
      `),this.outputPanel.querySelector(`#symOpenProviders`)?.addEventListener(`click`,()=>{document.getElementById(`settingsBtn`)?.dispatchEvent(new Event(`click`))});return}let r=t.mode===`multi-provider`?`Multi-Provider Council`:`Single-Provider Multi-Role Council`,i=t.mode===`single-provider`?`<div class="ai-notice">Only one provider/model is currently available. Symbiosis will simulate multiple independent roles using the same provider/model. These are different reasoning roles, not independent AI models.</div>`:``,a=e.participants;this.renderOutput(`
      <div class="result-text symb-shell">
        <h3 style="margin-top:0;">${this.escapeHtml(e.title)}</h3>
        <p class="hint">${this.escapeHtml(e.topic)}</p>
        <p><b>${r}</b></p>
        ${i}

        <div class="studio-quick-actions" style="margin:12px 0;">
          <button class="ghost-btn small" id="symAutoConfigure">Auto Configure Council</button>
          <button class="ghost-btn small" id="symAddParticipant">+ Add Participant</button>
        </div>

        <div id="symParticipantList">
          ${a.length===0?`<p class="hint">No participants configured yet. Use "Auto Configure Council" or add participants manually. At least 2 are required.</p>`:a.map((e,t)=>this.participantCardMarkup(e,t,n)).join(``)}
        </div>

        <div class="studio-quick-actions" style="margin-top:16px;">
          <button class="run-btn" id="symStartDiscussion" ${a.filter(e=>e.enabled).length<2?`disabled`:``}>Review &amp; Start Discussion</button>
        </div>
        ${a.filter(e=>e.enabled).length<2?`<p class="hint">At least 2 enabled AI participants are required to start.</p>`:``}
        ${this.renderPipelineHint(`text`)}
      </div>
    `),this.wireConfigureView(e,n)}participantCardMarkup(e,t,n){let r=l.map(t=>`<option value="${t.id}" ${t.id===e.roleId?`selected`:``}>${t.label}</option>`).join(``),i=n.map(t=>`<option value="${t.id}" ${t.id===e.providerId?`selected`:``}>${this.escapeHtml(t.name)}${t.model?` — `+this.escapeHtml(t.model):``}</option>`).join(``);return`
      <div class="save-bar symb-row symb-participant-card" style="display:flex; gap:10px; justify-content:space-between; align-items:flex-start; flex-wrap:wrap;" data-participant-card="${e.id}">
        <div style="flex:1; min-width:220px;">
          <p class="field-label" style="margin-top:0;">Participant ${t+1}</p>
          <select data-role-select="${e.id}">${r}</select>
          <select data-provider-select="${e.id}" style="margin-top:6px;">${i}</select>
          <div class="hint" style="margin-top:4px;">${this.escapeHtml(e.providerName)}${e.model?` / `+this.escapeHtml(e.model):``}</div>
        </div>
        <div class="studio-quick-actions">
          <label class="hint"><input type="checkbox" data-enable-toggle="${e.id}" ${e.enabled?`checked`:``}> Enabled</label>
          <button class="ghost-btn small" data-move-up="${e.id}" ${t===0?`disabled`:``}>↑</button>
          <button class="ghost-btn small" data-move-down="${e.id}">↓</button>
          <button class="ghost-btn small" data-remove-participant="${e.id}">Remove</button>
        </div>
      </div>
    `}wireConfigureView(e,t){let n=this.outputPanel.querySelector(`#symAutoConfigure`);n&&this.guardClick(n,`Configuring…`,()=>{let t=m(this.kernel),n=v(t,e.topic);if(n.length===0){alert(`No usable provider available to auto-configure.`);return}this.store.updateProject(e.id,{participants:n,mode:t.mode===`multi-provider`?`multi-provider`:`single-provider`}),this.render()});let r=this.outputPanel.querySelector(`#symAddParticipant`);r&&this.guardClick(r,`Adding…`,()=>{if(t.length===0)return;let n=m(this.kernel),r=new Set(e.participants.map(e=>e.roleId)),i=l.find(e=>!r.has(e.id))||l[0],a=new Set(e.participants.map(e=>e.providerId)),o=t.find(e=>!a.has(e.id))||t[0],s=_(i.id,o,e.participants.length),c=[...e.participants,s];this.store.updateProject(e.id,{participants:c,mode:n.mode===`multi-provider`?`multi-provider`:`single-provider`}),this.render()});let i=this.outputPanel.querySelector(`#symStartDiscussion`);i&&this.guardClick(i,`Opening…`,()=>{this.view=`discussion`,this.render()}),this.outputPanel.querySelectorAll(`[data-role-select]`).forEach(t=>{t.addEventListener(`change`,()=>{let n=t.dataset.roleSelect,r=t.value,i=u(r);this.mutateParticipant(e.id,n,e=>{e.roleId=i.id,e.roleLabel=i.label,e.roleInstruction=i.instruction})})}),this.outputPanel.querySelectorAll(`[data-provider-select]`).forEach(n=>{n.addEventListener(`change`,()=>{let r=n.dataset.providerSelect,i=n.value,a=t.find(e=>e.id===i);a&&(this.mutateParticipant(e.id,r,e=>{e.providerId=a.id,e.providerName=a.name,e.model=a.model}),this.recomputeMode(e.id))})}),this.outputPanel.querySelectorAll(`[data-enable-toggle]`).forEach(t=>{t.addEventListener(`change`,()=>{let n=t.dataset.enableToggle,r=t.checked;this.mutateParticipant(e.id,n,e=>{e.enabled=r})})}),this.outputPanel.querySelectorAll(`[data-remove-participant]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.removeParticipant,r=this.store.getProject(e.id);r&&(this.store.updateProject(e.id,{participants:r.participants.filter(e=>e.id!==n)}),this.render())})}),this.outputPanel.querySelectorAll(`[data-move-up]`).forEach(t=>{t.addEventListener(`click`,()=>this.reorderParticipant(e.id,t.dataset.moveUp,-1))}),this.outputPanel.querySelectorAll(`[data-move-down]`).forEach(t=>{t.addEventListener(`click`,()=>this.reorderParticipant(e.id,t.dataset.moveDown,1))})}mutateParticipant(e,t,n){let r=this.store.getProject(e);if(!r)return;let i=r.participants.map(e=>{if(e.id!==t)return e;let r={...e};return n(r),r});this.store.updateProject(e,{participants:i}),this.render()}recomputeMode(e){let t=this.store.getProject(e);if(!t)return;let n=new Set(t.participants.map(e=>e.providerId)).size;this.store.updateProject(e,{mode:n>=2?`multi-provider`:`single-provider`})}reorderParticipant(e,t,n){let r=this.store.getProject(e);if(!r)return;let i=[...r.participants],a=i.findIndex(e=>e.id===t),o=a+n;a<0||o<0||o>=i.length||([i[a],i[o]]=[i[o],i[a]],i.forEach((e,t)=>{e.order=t}),this.store.updateProject(e,{participants:i}),this.render())}currentProject(){return this.currentProjectId?this.store.getProject(this.currentProjectId):void 0}scrollToLatest(){requestAnimationFrame(()=>{let e=document.getElementById(`symActionDock`);e&&e.scrollIntoView({behavior:`smooth`,block:`end`})})}guardClick(e,t,n){e.addEventListener(`click`,()=>{if(e.disabled)return;let r=e.textContent;e.disabled=!0,e.textContent=t,Promise.resolve().then(n).catch(e=>console.error(`[Symbiosis]`,e)).finally(()=>{document.body.contains(e)&&(e.disabled=!1,e.textContent=r)})})}static SEAT_COLORS=[`--amber`,`--moss`,`--azure`,`--rust`];seatColor(e){return`var(${t.SEAT_COLORS[e%t.SEAT_COLORS.length]})`}computeDiscussionState(e){let t=m(this.kernel).usableProviders;if(e.participants.length>0&&t.length>0){let{participants:n,changed:r}=y(e.participants,t);r&&(this.store.updateProject(e.id,{participants:n}),e.participants=n)}let n=t.length===0;n&&e.status===`active`&&(this.store.setStatus(e.id,`paused`),e.status=`paused`);let r=e.currentRound||0,i=r>0,a=e.participants.filter(e=>e.enabled),o=t=>e.transcript.some(e=>e.round===r&&e.participantId===t.id),s=r>0&&a.every(o),c=r>0?a.filter(e=>!o(e)):[],l=r===0&&!this.isRunning&&!n&&a.length>=2,u=r>0&&s&&!this.isRunning&&e.status===`active`&&!n,d=e.status===`paused`,f=``;return n?f=`<div class="ai-notice">No usable AI provider is currently available — this session is paused and fully preserved. Reconfigure a provider, then Resume.</div>`:r===0?f=`<p class="hint">Press Start to open round 1.</p>`:this.isRunning?f=`<p class="hint">Running round ${r}…</p>`:c.length>0?f=`<p class="hint">Waiting on: ${c.map(e=>this.escapeHtml(e.roleLabel)).join(`, `)}</p>`:s&&(f=`<p class="hint" style="color:var(--moss);">Round ${r} complete — add a contribution and/or press Continue.</p>`),{round:r,roundHasStarted:i,canStart:l,canContinue:u,isPaused:d,noProvidersLeft:n,roundStatusLine:f}}renderDiscussionView(){let e=this.currentProject();if(!e){this.view=`list`,this.render();return}if(e.id!==this.renderedDiscussionProjectId||!this.outputPanel.querySelector(`#symTranscript`)){this.renderDiscussionShell(e);return}let t=this.outputPanel.querySelector(`#symTranscript`),n=t?F(t,e,this.transcriptRenderState,(t,n)=>this.entryMarkup(t,e,n)):null;if(n===null){this.renderDiscussionShell(e);return}n.forEach(t=>{this.wireCodeCopyButtons(t),t.querySelectorAll(`[data-retry-participant]`).forEach(t=>{let n=t;this.guardClick(n,`Retrying…`,()=>this.retryParticipant(e.id,n.dataset.retryParticipant,parseInt(n.dataset.retryRound||`0`,10)))}),t.querySelectorAll(`[data-skip-participant]`).forEach(t=>{let n=t;n.addEventListener(`click`,()=>this.skipParticipant(e.id,n.dataset.skipParticipant,parseInt(n.dataset.skipRound||`0`,10)))})}),this.updateFastChangingRegions(e)}renderDiscussionShell(e){let{round:t,roundHasStarted:n,canStart:r,canContinue:i,isPaused:a,noProvidersLeft:o,roundStatusLine:s}=this.computeDiscussionState(e);this.renderOutput(`
      <div class="result-text symb-shell">
        <div class="save-bar symb-row" style="display:flex; gap:10px; justify-content:space-between; align-items:flex-start; flex-wrap:wrap;">
          <div>
            <h3 style="margin:0;">${this.escapeHtml(e.title)}</h3>
            <p class="hint" style="margin:2px 0 0;">${this.escapeHtml(e.topic)}</p>
            <p class="hint">${e.mode===`multi-provider`?`Multi-Provider Council`:`Single-Provider Multi-Role Council`} · round ${t} · ${e.status}</p>
          </div>
          <div class="studio-quick-actions">
            <button class="ghost-btn small" data-sym-edit-participants>Edit Participants</button>
          </div>
        </div>

        ${this.seatsStripMarkup(e,t)}

        <div id="symTranscript" class="symb-conference">${this.transcriptMarkup(e)}</div>

        <!-- Action dock: everything the person needs to do next (round
             controls + contribution box) lives HERE, right after the
             transcript, not pinned at the top — the person never has to
             scroll back up to continue the discussion. See scrollToLatest(). -->
        <div id="symActionDock" class="symb-action-dock">
          ${s}
          ${this.roundControlsMarkup({canStart:r,canContinue:i,isPaused:a,isRunning:this.isRunning,round:t,noProvidersLeft:o})}
          ${n?this.humanContributionMarkup(``):``}
        </div>

        ${e.summary?this.summaryMarkup(e):``}

        <div class="studio-quick-actions" id="symExportBar" style="margin-top:16px;">
          <span class="hint">Export:</span>
          <button class="ghost-btn small" data-sym-export="docx">Word</button>
          <button class="ghost-btn small" data-sym-export="pdf">PDF</button>
          <button class="ghost-btn small" data-sym-export="txt">TXT</button>
          <button class="ghost-btn small" data-sym-export="md">Markdown</button>
          <button class="ghost-btn small" data-sym-export="json">JSON</button>
        </div>
        <p class="hint" style="margin-top:10px;">Each participant's provider/model is shown next to its name throughout.</p>
        ${this.renderPipelineHint(`text`)}
      </div>
      ${t>0?`<button id="symJumpToLatest" class="ghost-btn small symb-jump-btn" title="Jump to the latest round">↓ Latest</button>`:``}
    `),this.renderedDiscussionProjectId=e.id,I(e,this.transcriptRenderState),this.wireDiscussionView(e)}updateFastChangingRegions(e){let{round:t,roundHasStarted:n,canStart:r,canContinue:i,isPaused:a,noProvidersLeft:o,roundStatusLine:s}=this.computeDiscussionState(e),c=this.outputPanel.querySelector(`.save-bar.symb-row`);c&&(c.innerHTML=`
        <div>
          <h3 style="margin:0;">${this.escapeHtml(e.title)}</h3>
          <p class="hint" style="margin:2px 0 0;">${this.escapeHtml(e.topic)}</p>
          <p class="hint">${e.mode===`multi-provider`?`Multi-Provider Council`:`Single-Provider Multi-Role Council`} · round ${t} · ${e.status}</p>
        </div>
        <div class="studio-quick-actions">
          <button class="ghost-btn small" data-sym-edit-participants>Edit Participants</button>
        </div>
      `);let l=this.outputPanel.querySelector(`.symb-seats`);l&&(l.outerHTML=this.seatsStripMarkup(e,t));let u=document.getElementById(`symActionDock`);if(u){let e=document.getElementById(`symHumanInput`)?.value??``;if(u.innerHTML=`
        ${s}
        ${this.roundControlsMarkup({canStart:r,canContinue:i,isPaused:a,isRunning:this.isRunning,round:t,noProvidersLeft:o})}
        ${n?this.humanContributionMarkup(``):``}
      `,e){let t=document.getElementById(`symHumanInput`);t&&(t.value=e)}}if(e.summary){let t=document.getElementById(`symSummarySection`),n=t?.querySelector(`.result-text`);n?n.innerHTML=this.renderMarkdown(e.summary):t||document.getElementById(`symExportBar`)?.insertAdjacentHTML(`beforebegin`,this.summaryMarkup(e))}t>0&&!this.outputPanel.querySelector(`#symJumpToLatest`)&&this.outputPanel.querySelector(`.result-text`)?.insertAdjacentHTML(`afterend`,`<button id="symJumpToLatest" class="ghost-btn small symb-jump-btn" title="Jump to the latest round">↓ Latest</button>`),this.wireFastRegions(e)}seatsStripMarkup(e,t){return`<div class="symb-seats">${e.participants.map((n,r)=>{let i=this.seatColor(r),a=[...e.transcript].reverse().find(e=>e.round===t&&e.participantId===n.id),o=`○`,s=`Pending`,c=`var(--ink-faint)`;return n.enabled?t===0?(o=`·`,s=`Seated`):a?.status===`ok`?(o=`✓`,s=`Responded`,c=`var(--moss)`):a?.status===`error`?(o=`✕`,s=`No response`,c=`var(--rust)`):a?.status===`skipped`?(o=`—`,s=`Skipped`):this.isRunning&&(o=`…`,s=`Thinking`,c=`var(--amber)`):(o=`—`,s=`Disabled`),`
        <div class="symb-seat" style="border-left-color:${i};">
          <div class="symb-seat-role" style="color:${i};">${this.escapeHtml(n.roleLabel)}</div>
          <div class="hint" style="font-size:11px;">${this.escapeHtml(n.providerName)}${n.model?` / `+this.escapeHtml(n.model):``}</div>
          <div class="hint" style="font-size:11px; color:${c};">${o} ${s}</div>
        </div>`}).join(``)}<div class="symb-seat symb-seat-human"><div class="symb-seat-role">You</div><div class="hint" style="font-size:11px;">Human</div></div></div>`}transcriptMarkup(e){if(e.transcript.length===0)return`<p class="hint" id="symTranscriptEmpty">No turns yet. Press Start to begin round 1.</p>`;let t=M(e),n=Array.from(new Set(t.map(e=>e.round))).sort((e,t)=>e-t),r=new Map;for(let e of t)e.participantId&&r.set(e.participantId,e.id);return n.map(n=>`
      <div class="field" id="symRound-${n}">
        <p class="field-label">Round ${n}</p>
        ${t.filter(e=>e.round===n).map(t=>this.entryMarkup(t,e,t.participantId?r.get(t.participantId)===t.id:!1)).join(``)}
      </div>
    `).join(``)}entryMarkup(e,t,n=!1){let r=e.kind===`human`,i=!r&&n&&e.participantId?` id="symRole-${e.participantId}"`:``,a=e.participantId?t.participants.findIndex(t=>t.id===e.participantId):-1,o=r?`var(--ink-dim)`:this.seatColor(a>=0?a:0),s=r?`You`:this.escapeHtml(e.roleLabel||`Participant`),c=r?e.sourceTab?`via ${this.escapeHtml(e.sourceTab)}`:``:`${this.escapeHtml(e.providerName||``)}${e.model?` / `+this.escapeHtml(e.model):``}`,l,u=``;return e.status===`error`?(l=`<span style="color:var(--rust);">No response — ${this.escapeHtml(e.error||`error`)}</span>`,e.participantId&&(u=`
          <div class="studio-quick-actions" style="margin-top:6px;">
            <button class="ghost-btn small" data-retry-participant="${e.participantId}" data-retry-round="${e.round}">Retry</button>
            <button class="ghost-btn small" data-skip-participant="${e.participantId}" data-skip-round="${e.round}">Skip</button>
          </div>`)):e.status===`skipped`?l=`<span class="hint">Skipped.</span>`:(l=`<div class="result-text">${this.renderMarkdown(e.content)}</div>`,e.assetRef&&(u=`<div class="hint" style="margin-top:4px;">📎 ${this.escapeHtml(e.assetRef.label)} (${this.escapeHtml(e.sourceTab||e.assetRef.assetType)})</div>`)),`
      <div class="symb-bubble-row ${r?`symb-bubble-row-human`:``}" data-entry-key="${this.escapeHtml(j(e))}"${i}>
        <div class="symb-bubble" style="border-left-color:${o};">
          <div class="symb-bubble-head">
            <b style="color:${o};">${s}</b>
            ${c?`<span class="hint">${c}</span>`:``}
          </div>
          ${l}
          ${u}
        </div>
      </div>
    `}roundControlsMarkup(e){let{canStart:t,canContinue:n,isPaused:r,isRunning:i,round:a,noProvidersLeft:o}=e;return`
      <div class="studio-quick-actions" style="margin:10px 0; flex-wrap:wrap;">
        ${t?`<button class="run-btn" data-sym-action="start">Start Round 1</button>`:``}
        ${n?`<button class="run-btn" data-sym-action="continue">Continue to Round ${a+1}</button>`:``}
        ${!t&&!n?`<button class="run-btn" disabled>${i?`Running…`:`Continue`}</button>`:``}
        ${r?`<button class="ghost-btn small" data-sym-action="resume" ${o?`disabled`:``}>Resume</button>`:`<button class="ghost-btn small" data-sym-action="pause" ${a===0?`disabled`:``}>Pause</button>`}
        <button class="ghost-btn small" data-sym-action="stop" ${i?``:`disabled`}>Stop</button>
        <button class="ghost-btn small" data-sym-action="finish" ${a===0?`disabled`:``}>Finish &amp; Summarize</button>
      </div>
    `}wireRoundControls(e){document.querySelectorAll(`[data-sym-action]`).forEach(t=>{t.addEventListener(`click`,()=>{switch(t.dataset.symAction){case`start`:t.disabled=!0,t.textContent=`Starting…`,this.runRound(e.id,1);break;case`continue`:t.disabled=!0,t.textContent=`Running…`,this.runRound(e.id,(e.currentRound||0)+1);break;case`pause`:this.store.setStatus(e.id,`paused`),this.render();break;case`resume`:this.store.setStatus(e.id,`active`),this.render();break;case`stop`:this.stopRequested=!0;break;case`finish`:this.handleFinishAndSummarize(e.id)}})})}humanContributionMarkup(e,t=!1){return`
      <div class="field symb-contribution ${t?`symb-contribution-mini`:``}" style="margin-top:12px;">
        <p class="field-label">Your contribution</p>
        <div style="display:flex; gap:6px; align-items:flex-start;">
          <textarea id="symHumanInput${e}" rows="${t?2:3}" placeholder="Add your thoughts, a question, or direction for the next round…" style="flex:1;"></textarea>
          <button class="mic-btn" id="symMicBtn${e}" title="Speak your contribution">🎙</button>
        </div>
        <div class="hint" id="symMicStatus${e}"></div>
        <div class="studio-quick-actions" style="margin-top:6px; flex-wrap:wrap;">
          <select id="symAttachAsset${e}"><option value="">Attach existing MAGENAIS result (optional)</option></select>
          <label class="ghost-btn small" for="symFileInput${e}" style="cursor:pointer;">📄 File</label>
          <input type="file" id="symFileInput${e}" accept=".pdf,.docx,.txt,.md,image/*" style="display:none;">
          <input type="url" id="symUrlInput${e}" placeholder="Reference a URL…" style="width:140px;">
          <button class="ghost-btn small" id="symAddUrl${e}">+ URL</button>
          <button class="ghost-btn small" id="symSendHuman${e}">Add Contribution</button>
        </div>
        <div class="hint" id="symFileStatus${e}"></div>
      </div>
    `}wireContributionBox(e,t){let n=document.getElementById(`symHumanInput${e}`);if(!n)return;let r=document.getElementById(`symAttachAsset${e}`);if(r){let e=this.kernel.getAssetManager().getAssets().slice(0,30);for(let t of e){let e=document.createElement(`option`);e.value=t.id,e.textContent=`${t.name} (${t.type})`,r.appendChild(e)}}let i=document.getElementById(`symMicBtn${e}`),a=document.getElementById(`symMicStatus${e}`);i&&c(this.kernel,i,a,e=>{n.value=(n.value?n.value+` `:``)+e});let o=document.getElementById(`symFileInput${e}`),s=document.getElementById(`symFileStatus${e}`);o&&o.addEventListener(`change`,()=>{o.disabled=!0,this.handleFileAttach(o,s,n).finally(()=>{o.disabled=!1})});let l=document.getElementById(`symAddUrl${e}`);l&&this.guardClick(l,`…`,()=>{let t=document.getElementById(`symUrlInput${e}`),r=t?.value?.trim();if(!r)return;try{new URL(r)}catch{alert(`Enter a valid URL (including https://).`);return}let i=this.kernel.getAssetManager().createAsset(r,`url`,r,{});this.pendingAttachmentRef={assetId:i.id,assetType:`url`,label:r},n.value=(n.value?n.value+`

`:``)+`[Reference URL: ${r}]`,t&&(t.value=``),s&&(s.textContent=`URL reference added: ${r}`)});let u=document.getElementById(`symSendHuman${e}`);u&&this.guardClick(u,`Adding…`,()=>{let e=n.value?.trim();if(!e)return;let i=this.pendingAttachmentRef||void 0;if(!i){let e=r?.value;if(e){let t=this.kernel.getAssetManager().getAsset(e);t&&(i={assetId:t.id,assetType:t.type,label:t.name})}}let a=this.store.getProject(t.id);this.store.appendTranscriptEntry(t.id,{round:a?.currentRound||1,kind:`human`,content:e,timestamp:Date.now(),status:`ok`,assetRef:i}),this.pendingAttachmentRef=null,this.render(),this.scrollToLatest()})}summaryMarkup(e){return`
      <div class="field symb-summary" id="symSummarySection" style="margin-top:16px;">
        <p class="field-label">Summary</p>
        <div class="result-text">${this.renderMarkdown(e.summary||``)}</div>
      </div>
    `}wireDiscussionView(e){this.wireCodeCopyButtons(this.outputPanel),this.outputPanel.querySelectorAll(`[data-retry-participant]`).forEach(t=>{let n=t;this.guardClick(n,`Retrying…`,()=>this.retryParticipant(e.id,n.dataset.retryParticipant,parseInt(n.dataset.retryRound,10)))}),this.outputPanel.querySelectorAll(`[data-skip-participant]`).forEach(t=>{let n=t;t.addEventListener(`click`,()=>{this.skipParticipant(e.id,n.dataset.skipParticipant,parseInt(n.dataset.skipRound,10))})}),document.querySelectorAll(`[data-sym-export]`).forEach(t=>{let n=t;this.guardClick(n,`Exporting…`,()=>this.handleExport(e.id,n.dataset.symExport))}),this.wireFastRegions(e)}wireFastRegions(e){this.outputPanel.querySelector(`#symJumpToLatest`)?.addEventListener(`click`,()=>this.scrollToLatest()),document.querySelectorAll(`[data-sym-edit-participants]`).forEach(e=>{e.addEventListener(`click`,()=>{this.view=`configure`,this.render()})}),this.wireRoundControls(e),this.wireContributionBox(``,e),this.wireContributionBox(`Mini`,e)}async handleFileAttach(t,n,r){let i=t.files?.[0];if(!i)return;let a=e=>{n&&(n.textContent=e)};try{if(i.type.startsWith(`image/`)){a(`Reading ${i.name}…`);let e=await new Promise((e,t)=>{let n=new FileReader;n.onload=()=>e(n.result),n.onerror=()=>t(n.error),n.readAsDataURL(i)}),t=this.kernel.getAssetManager().createAsset(i.name,`image`,e,{});this.pendingAttachmentRef={assetId:t.id,assetType:`image`,label:i.name},r.value=(r.value?r.value+`

`:``)+`[Image attached: ${i.name}]`,a(`Image attached: ${i.name}. Add any description, then press "Add Contribution".`);return}a(`Reading ${i.name}…`);let t=i.name.toLowerCase(),n;if(t.endsWith(`.pdf`)){let{extractTextFromPDF:t}=await e(async()=>{let{extractTextFromPDF:e}=await import(`./doc-Dffqsvhs.js`);return{extractTextFromPDF:e}},__vite__mapDeps([0,1,2,3,4]));n=await t(await i.arrayBuffer(),a)}else if(t.endsWith(`.docx`)){let{extractTextFromDocx:t}=await e(async()=>{let{extractTextFromDocx:e}=await import(`./doc-Dffqsvhs.js`);return{extractTextFromDocx:e}},__vite__mapDeps([0,1,2,3,4]));n=await t(await i.arrayBuffer(),a)}else n=await i.text();let o=2e3,s=n.length>o,c=s?n.slice(0,o).trim()+`…`:n,l=`[Attached: ${i.name}]`;if(s){let e=this.kernel.getAssetManager().createAsset(i.name,`document`,n,{});this.pendingAttachmentRef={assetId:e.id,assetType:`document`,label:i.name},l=`[Attached: ${i.name} — ${n.length.toLocaleString()} characters total; excerpt below, full document referenced]`}let u=r;u.value=(u.value?u.value+`

`:``)+l+`
`+c,a(s?`Attached ${i.name} (${n.length.toLocaleString()} characters — showing a ${o}-character excerpt; full text kept as a reference).`:`Attached ${i.name} (${n.length.toLocaleString()} characters).`)}catch(e){a(`Could not read ${i.name}: ${e?.message||e}`)}finally{t.value=``}}async runRound(e,t){if(!this.isRunning){this.isRunning=!0,this.stopRequested=!1;try{this.store.updateProject(e,{currentRound:t,status:`active`});let n=this.store.getProject(e),r=n.participants.filter(e=>e.enabled&&!n.transcript.some(n=>n.round===t&&n.participantId===e.id));for(let i of r){if(this.stopRequested)break;n=this.store.getProject(e);let r=f(this.kernel),{participants:a,changed:o}=y([i],r);if(o){let t=n.participants.map(e=>e.id===i.id?a[0]:e);this.store.updateProject(e,{participants:t}),n=this.store.getProject(e),i=a[0]}this.appendLog(`Calling ${i.providerName}${i.model?` (`+i.model+`)`:``} for ${i.roleLabel}…`);let s=await D(this.kernel,n,i,(e,t)=>this.appendLog(e,t));this.appendLog(s.ok?`${i.roleLabel} (${i.providerName}) responded.`:`${i.roleLabel} (${i.providerName}) failed: ${s.error}`,s.ok?`info`:`error`),this.store.appendTranscriptEntry(e,{round:t,kind:`ai`,participantId:i.id,roleLabel:i.roleLabel,providerName:i.providerName,model:i.model,content:s.content||``,timestamp:Date.now(),status:s.ok?`ok`:`error`,error:s.ok?void 0:s.error}),this.currentProjectId===e&&(this.render(),this.scrollToLatest())}}finally{this.isRunning=!1,this.stopRequested=!1,this.currentProjectId===e&&(this.render(),this.scrollToLatest())}}}async retryParticipant(e,t,n){let r=this.store.getProject(e),i=r?.participants.find(e=>e.id===t);if(!(!r||!i)){this.isRunning=!0,this.render();try{let t=f(this.kernel),{participants:a,changed:o}=y([i],t);if(o){let t=r.participants.map(e=>e.id===i.id?a[0]:e);this.store.updateProject(e,{participants:t}),r=this.store.getProject(e),i=a[0]}this.appendLog(`Retrying ${i.roleLabel} via ${i.providerName}${i.model?` (`+i.model+`)`:``}…`);let s=await D(this.kernel,r,i,(e,t)=>this.appendLog(e,t));this.appendLog(s.ok?`${i.roleLabel} (${i.providerName}) responded.`:`${i.roleLabel} (${i.providerName}) failed: ${s.error}`,s.ok?`info`:`error`),this.store.appendTranscriptEntry(e,{round:n,kind:`ai`,participantId:i.id,roleLabel:i.roleLabel,providerName:i.providerName,model:i.model,content:s.content||``,timestamp:Date.now(),status:s.ok?`ok`:`error`,error:s.ok?void 0:s.error})}finally{this.isRunning=!1,this.render(),this.scrollToLatest()}}}skipParticipant(e,t,n){let r=this.store.getProject(e),i=r?.participants.find(e=>e.id===t);!r||!i||(this.store.appendTranscriptEntry(e,{round:n,kind:`ai`,participantId:i.id,roleLabel:i.roleLabel,providerName:i.providerName,model:i.model,content:``,timestamp:Date.now(),status:`skipped`}),this.render(),this.scrollToLatest())}async handleFinishAndSummarize(e){let t=this.store.getProject(e);if(!t)return;this.renderLoading(`Generating summary…`),this.appendLog(`Generating final summary…`);let n=await A(this.kernel,t,(e,t)=>this.appendLog(e,t));this.appendLog(n.ok?`Summary generated.`:`Summary generation failed: ${n.error}`,n.ok?`info`:`error`),n.ok?this.store.updateProject(e,{summary:n.content,status:`completed`}):alert(`Unable to generate summary: ${n.error}`),this.render(),requestAnimationFrame(()=>{document.getElementById(`symSummarySection`)?.scrollIntoView({behavior:`smooth`,block:`start`})})}async handleExport(e,t){let n=this.store.getProject(e);if(n)try{let{blob:e,filename:r}=await V(n,t);this.downloadBlob(e,r)}catch(e){alert(`Export failed: ${e?.message||e}`)}}};export{H as SymbiosisMode};