import{t as e}from"./Mode-xmVbXuqX.js";import{i as t,r as n}from"./SymbiosisHandoff-DkpRyW56.js";var r=[`H`,`X`,`Y`,`Z`,`S`,`T`],i=[`RX`,`RY`,`RZ`],a=class extends e{numQubits=2;ops=[];shots=1024;activeTab=`build`;activate(){this.renderControl(this.controlMarkup()),this.wireTabs(),this.wireBuildControls(),this.wireAiControls(),this.renderCircuitStage()}deactivate(){}getTitle(){return`Quantum`}controlMarkup(){return`
      <div class="field">
        <div class="chip-group" id="quantumTabs" role="tablist" aria-label="Quantum tools">
          <button class="chip active" data-tab="build" role="tab" aria-selected="true">Circuit Builder</button>
          <button class="chip" data-tab="ai" role="tab" aria-selected="false">Explain / Design with AI</button>
        </div>
      </div>

      <div id="quantumBuildPanel" class="field">
        <p class="field-label">Load example</p>
        <div class="chip-group" id="qExamples">
          <button class="chip small" data-example="bell">Bell Pair</button>
          <button class="chip small" data-example="ghz">GHZ (3q)</button>
          <button class="chip small" data-example="superposition">Superposition</button>
          <button class="chip small" data-example="teleport">Teleportation</button>
        </div>

        <label class="field-label">Qubits</label>
        <input type="number" id="qNumQubits" value="2" min="1" max="12" step="1">
        <label class="field-label">Shots</label>
        <input type="number" id="qShots" value="1024" min="1" max="100000" step="1">

        <p class="field-label" style="margin-top:10px;">Add gate</p>
        <div class="chip-group" id="qSingleGates">
          ${r.map(e=>`<button class="chip small" data-gate="${e}">${e}</button>`).join(``)}
        </div>
        <div class="studio-quick-actions" style="margin-top:6px;">
          ${i.map(e=>`<button class="ghost-btn small" data-rot-gate="${e}">${e}(&theta;)</button>`).join(``)}
          <button class="ghost-btn small" id="qAddCnot">CNOT</button>
          <button class="ghost-btn small" id="qAddCz">CZ</button>
          <button class="ghost-btn small" id="qAddSwap">SWAP</button>
          <button class="ghost-btn small" id="qAddMeasure" title="Measure a qubit mid-circuit, recording a classical bit — needed for protocols like teleportation">Measure</button>
        </div>
        <p class="hint" id="qGateHint" style="margin-top:4px;">Tap a gate, then choose the target qubit (and control qubit / angle if needed).</p>

        <p class="field-label" style="margin-top:10px;">Circuit (${this.ops.length} gate${this.ops.length===1?``:`s`})</p>
        <div id="qOpsList" class="studio-mini-list"></div>
        <button class="ghost-btn small" id="qClearBtn">Clear Circuit</button>

        <button class="run-btn" id="qSimulateBtn" style="margin-top:12px;">&#9656; Simulate Locally (Free)</button>
        <button class="ghost-btn" id="qHardwareBtn" style="margin-top:8px; display:none; width:100%;">&#9883; Run on Real IBM Quantum Hardware</button>
        <details class="adv" style="margin-top:10px;">
          <summary>Other quantum backends (investigated, not integrated)</summary>
          <div class="adv-body">
            <p class="hint">AWS Braket and Azure Quantum are real cloud quantum services, but neither can be genuinely integrated into a static, backend-less browser app like this one: Braket's API requires AWS SigV4-signed requests with long-term IAM credentials (not a simple API key) and doesn't expose browser CORS; Azure Quantum's job API sits behind Azure AD OAuth2, which needs either a client secret (unsafe in-browser) or the user registering their own Azure AD app. Rather than fake a connection, they're left external.</p>
            <div style="display:flex; gap:6px;">
              <a href="https://aws.amazon.com/braket/" target="_blank" rel="noopener noreferrer" class="ghost-btn">AWS Braket docs</a>
              <a href="https://azure.microsoft.com/en-us/products/quantum" target="_blank" rel="noopener noreferrer" class="ghost-btn">Azure Quantum docs</a>
            </div>
            <p class="hint" style="margin-top:10px;">IonQ Quantum Cloud is a stronger future candidate than either of the above — its REST API (api.ionq.co) authenticates with a plain API key rather than SigV4/OAuth2, structurally closer to IBM Quantum's setup above. It is NOT added as a working preset yet because this audit could not verify the endpoint sends browser CORS headers (IonQ's own docs and SDKs assume a server-side caller) — claiming it works without that confirmation would risk the same "connected" lie this panel exists to avoid. A real IonQ adapter is a reasonable next step once that's checked against a live browser request.</p>
            <div style="display:flex; gap:6px; margin-top:6px;">
              <a href="https://docs.ionq.com/" target="_blank" rel="noopener noreferrer" class="ghost-btn">IonQ API docs</a>
            </div>
          </div>
        </details>
      </div>

      <div id="quantumAiPanel" class="field" style="display:none;">
        <label class="field-label">Describe the circuit or concept</label>
        <textarea id="qAiInput" rows="6" placeholder="e.g. Explain and write the Qiskit code for a 3-qubit GHZ state."></textarea>
        <label class="field-label">Output format</label>
        <select id="qAiFormat">
          <option value="Python (Qiskit)">Python (Qiskit)</option>
          <option value="OpenQASM 3.0">OpenQASM 3.0</option>
        </select>
        <p class="hint">Reuses the same text-provider pipeline as the Coding tab, with a quantum-computing-specialized prompt.</p>
        ${this.renderPipelineHint(`text`)}
        <button class="run-btn" id="qAiBtn">&#9656; Explain &amp; Generate</button>
      </div>
    `}wireTabs(){let e=this.controlPanel.querySelectorAll(`#quantumTabs .chip`);e.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.tab;this.activeTab=n,e.forEach(e=>{e.classList.toggle(`active`,e===t),e.setAttribute(`aria-selected`,String(e===t))}),this.controlPanel.querySelector(`#quantumBuildPanel`).style.display=n===`build`?``:`none`,this.controlPanel.querySelector(`#quantumAiPanel`).style.display=n===`ai`?``:`none`})})}wireBuildControls(){let e=this.controlPanel.querySelector(`#qNumQubits`);e?.addEventListener(`change`,()=>{let t=Math.min(12,Math.max(1,parseInt(e.value,10)||1));this.numQubits=t,e.value=String(t),this.ops=this.ops.filter(e=>e.qubit<t&&(e.control===void 0||e.control<t)),this.renderOpsList(),this.updateHardwareButtonVisibility()});let t=this.controlPanel.querySelector(`#qShots`);t?.addEventListener(`change`,()=>{this.shots=Math.max(1,parseInt(t.value,10)||1024)}),this.controlPanel.querySelectorAll(`#qSingleGates [data-gate]`).forEach(e=>{e.addEventListener(`click`,()=>this.promptAddGate(e.dataset.gate))}),this.controlPanel.querySelectorAll(`[data-rot-gate]`).forEach(e=>{e.addEventListener(`click`,()=>this.promptAddGate(e.dataset.rotGate))}),this.controlPanel.querySelector(`#qAddCnot`)?.addEventListener(`click`,()=>this.promptAddGate(`CNOT`)),this.controlPanel.querySelector(`#qAddCz`)?.addEventListener(`click`,()=>this.promptAddGate(`CZ`)),this.controlPanel.querySelector(`#qAddSwap`)?.addEventListener(`click`,()=>this.promptAddGate(`SWAP`)),this.controlPanel.querySelector(`#qAddMeasure`)?.addEventListener(`click`,()=>this.promptAddGate(`MEASURE`)),this.controlPanel.querySelector(`#qClearBtn`)?.addEventListener(`click`,()=>{this.ops=[],this.renderOpsList()}),this.controlPanel.querySelector(`#qSimulateBtn`)?.addEventListener(`click`,()=>this.runGuarded(`qSimulateBtn`,()=>this.handleSimulate())),this.controlPanel.querySelector(`#qHardwareBtn`)?.addEventListener(`click`,()=>this.runGuarded(`qHardwareBtn`,()=>this.handleRunOnHardware())),this.wireExampleButtons(),this.renderOpsList(),this.updateHardwareButtonVisibility()}wireExampleButtons(){let e={bell:{numQubits:2,ops:[{gate:`H`,qubit:0},{gate:`CNOT`,qubit:1,control:0}]},ghz:{numQubits:3,ops:[{gate:`H`,qubit:0},{gate:`CNOT`,qubit:1,control:0},{gate:`CNOT`,qubit:2,control:0}]},superposition:{numQubits:1,ops:[{gate:`H`,qubit:0}]},teleport:{numQubits:3,ops:[{gate:`X`,qubit:0},{gate:`H`,qubit:1},{gate:`CNOT`,qubit:2,control:1},{gate:`CNOT`,qubit:1,control:0},{gate:`H`,qubit:0},{gate:`MEASURE`,qubit:0},{gate:`MEASURE`,qubit:1},{gate:`X`,qubit:2,classicalControl:{bit:1,value:1}},{gate:`Z`,qubit:2,classicalControl:{bit:0,value:1}}]}};this.controlPanel.querySelectorAll(`#qExamples [data-example]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=e[t.dataset.example];if(!n)return;this.numQubits=n.numQubits,this.ops=n.ops.map(e=>({...e}));let r=this.controlPanel.querySelector(`#qNumQubits`);r&&(r.value=String(n.numQubits)),this.renderOpsList(),this.updateHardwareButtonVisibility()})})}promptAddGate(e){let t=this.promptInt(`Target qubit (0-${this.numQubits-1}) for ${e}:`,0);if(t===null)return;if(t<0||t>=this.numQubits){alert(`Qubit must be between 0 and ${this.numQubits-1}.`);return}let n={gate:e,qubit:t};if(e===`CNOT`||e===`CZ`||e===`SWAP`){let r=this.promptInt(`Control qubit (0-${this.numQubits-1}) for ${e}:`,+(t===0));if(r===null)return;if(r<0||r>=this.numQubits||r===t){alert(`Control qubit must be different from the target and within range.`);return}n.control=r}else if(e===`RX`||e===`RY`||e===`RZ`){let t=this.promptFloat(`Rotation angle in degrees for ${e}:`,90);if(t===null)return;n.angle=t*Math.PI/180}this.ops.push(n),this.renderOpsList(),this.updateHardwareButtonVisibility()}promptInt(e,t){let n=window.prompt(e,String(t));if(n===null)return null;let r=parseInt(n,10);return Number.isFinite(r)?r:t}promptFloat(e,t){let n=window.prompt(e,String(t));if(n===null)return null;let r=parseFloat(n);return Number.isFinite(r)?r:t}renderOpsList(){let e=this.controlPanel.querySelector(`#qOpsList`);e&&(this.ops.length===0?e.innerHTML=`<p class="hint">No gates yet — add one above.</p>`:(e.innerHTML=this.ops.map((e,t)=>{let n=e.control===void 0?e.angle===void 0?`${e.gate} q${e.qubit}`:`${e.gate}(${(e.angle*180/Math.PI).toFixed(0)}&deg;) q${e.qubit}`:`${e.gate} q${e.control}&rarr;q${e.qubit}`;return`<button class="studio-mini-item" data-remove-idx="${t}" title="Click to remove">${t+1}. ${n} &#10005;</button>`}).join(``),e.querySelectorAll(`[data-remove-idx]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.removeIdx,10);this.ops.splice(t,1),this.renderOpsList()})})),this.controlPanel.querySelectorAll(`#quantumBuildPanel .field-label`).forEach(e=>{e.textContent?.startsWith(`Circuit (`)&&(e.textContent=`Circuit (${this.ops.length} gate${this.ops.length===1?``:`s`})`)}))}getCircuit(){return{numQubits:this.numQubits,ops:this.ops,shots:this.shots}}async handleSimulate(){if(this.ops.length===0){alert(`Add at least one gate to the circuit first.`);return}this.renderLoading(`Simulating…`);try{let e=await this.kernel.getProviderManager().callWithFallback(`quantum`,this.kernel.getRouter(),{circuit:this.getCircuit()},{},(e,t)=>this.appendLog(e,t));this.renderSimulationResult(e,e.qasm),this.kernel.getStore().getActions().addHistoryEntry({mode:`quantum`,prompt:`[Simulate] ${this.numQubits}q, ${this.ops.length} gates`,result:JSON.stringify(e.counts),resultType:`text`})}catch(e){this.renderError(e)}}async handleRunOnHardware(){if(this.ops.length===0){alert(`Add at least one gate to the circuit first.`);return}let e=this.findIbmQuantumProvider();if(!e){alert(`Enable and configure the IBM Quantum provider in Keys & Providers first.`);return}let t=this.kernel.getProviderRegistry().getAdapter(e.adapterId);if(!t?.call){alert(`IBM Quantum adapter is not available.`);return}this.renderLoading(`Submitting to real IBM Quantum hardware — this can take a few minutes (real QPU queue)…`);try{let n=await t.call(e,{circuit:this.getCircuit()},{log:(e,t)=>this.appendLog(e,t)}),r=this.outputPanel.querySelector(`.stage`),i=`quantum-hw-${Date.now()}`;r&&(r.innerHTML=`
          <div class="result-text">
            <p><b>Ran on real hardware:</b> ${this.escapeHtml(n.backend)} (job ${this.escapeHtml(n.jobId)})</p>
            <pre>${this.escapeHtml(JSON.stringify(n.raw,null,2))}</pre>
            ${this.renderSaveBar(i)}
          </div>`,this.wireSaveBar(r,i,`quantum`,()=>`IBM Quantum: ${n.backend} (${n.jobId})`,()=>({circuit:this.getCircuit(),backend:n.backend,jobId:n.jobId,raw:n.raw}))),this.kernel.getStore().getActions().addHistoryEntry({mode:`quantum`,prompt:`[Hardware: ${n.backend}] ${this.numQubits}q, ${this.ops.length} gates`,result:JSON.stringify(n.raw),resultType:`text`})}catch(e){this.renderError(e)}}findIbmQuantumProvider(){return this.kernel.getProviderManager().getProviders(`quantum`,!0).find(e=>e.adapterId===`ibm-quantum`&&e.enabled)}updateHardwareButtonVisibility(){let e=this.controlPanel.querySelector(`#qHardwareBtn`);e&&(e.style.display=this.findIbmQuantumProvider()?`block`:`none`)}renderSimulationResult(e,r){let i=this.outputPanel.querySelector(`.stage`);if(!i)return;let a=Math.max(...Object.values(e.counts)),o=Object.entries(e.counts).sort((e,t)=>t[1]-e[1]).map(([t,n])=>{let r=(n/e.shots*100).toFixed(1),i=n/a*100;return`
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
            <span style="font-family:var(--mono); font-size:12px; width:${e.numQubits+1}ch; flex-shrink:0;">|${t}&#10217;</span>
            <div style="flex:1; background:var(--bg); border-radius:3px; overflow:hidden; height:16px;">
              <div style="width:${i}%; height:100%; background:var(--amber);"></div>
            </div>
            <span style="font-family:var(--mono); font-size:11px; color:var(--ink-faint); width:9ch; flex-shrink:0;">${n} (${r}%)</span>
          </div>`}).join(``),s=`quantum-${Date.now()}`;i.innerHTML=`
      <div class="result-text">
        <p><b>Measurement results</b> — ${e.numQubits} qubit${e.numQubits===1?``:`s`}, ${e.shots} shots, ${e.durationMs.toFixed(1)}ms</p>
        ${o}
        <details class="adv" style="margin-top:10px;">
          <summary>OpenQASM 3.0</summary>
          <div class="adv-body"><pre>${this.escapeHtml(r)}</pre></div>
        </details>
        ${this.renderSaveBar(s)}
        <div class="studio-quick-actions" style="margin-top:8px;">${n(`Discuss in Symbiosis`)}</div>
      </div>`,this.wireSaveBar(i,s,`quantum`,()=>`Quantum: ${e.numQubits}q, ${this.ops.length} gates`,()=>({circuit:this.getCircuit(),qasm:r,counts:e.counts,shots:e.shots,durationMs:e.durationMs})),t(this.kernel,i,()=>({sourceTab:`Quantum`,title:`Quantum: ${e.numQubits}q, ${this.ops.length} gates`,content:`Measurement results — ${e.numQubits} qubits, ${e.shots} shots.\nCounts: ${JSON.stringify(e.counts)}`}))}renderCircuitStage(){let e=this.outputPanel.querySelector(`.stage`);e&&(e.innerHTML=`<p class="hint" style="padding:20px;">Build a circuit on the left, then tap "Simulate Locally" — free, instant, runs entirely in your browser.</p>`)}wireAiControls(){this.controlPanel.querySelector(`#qAiBtn`)?.addEventListener(`click`,()=>this.runGuarded(`qAiBtn`,()=>this.handleAi()))}async handleAi(){let e=this.controlPanel.querySelector(`#qAiInput`)?.value.trim();if(!e){alert(`Describe the circuit or concept you want explained.`);return}let t=this.controlPanel.querySelector(`#qAiFormat`)?.value||`Python (Qiskit)`;this.renderLoading(`Thinking…`);let n={id:`quantum-ai-`+Date.now(),name:`Quantum AI Assistant`,graph:{nodes:[{id:`qai1`,type:`coding`,label:`Quantum AI Assistant`,config:{language:t},inputs:{prompt:`You are a quantum computing expert. ${e}`},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let r=(await this.kernel.getWorkflowEngine().execute(n,{prompt:e},(e,t)=>this.appendLog(e,t))).finalOutput||`No output`,i=this.outputPanel.querySelector(`.stage`);i&&(i.innerHTML=`<div class="result-text">${this.renderMarkdown(r)}</div>`,this.wireCodeCopyButtons(i)),this.kernel.getStore().getActions().addHistoryEntry({mode:`quantum`,prompt:`[AI ${t}] ${e}`,result:r,resultType:`text`})}catch(e){this.renderError(e)}}};export{a as QuantumMode};