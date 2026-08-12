import{t as e}from"./Mode-BiZxIkxj.js";var t=class extends e{lastGameCode=null;activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Game concept</label>
        <textarea id="promptInput" rows="5" placeholder="e.g. A top-down strategy game where you place towers to defend a base from waves of enemies."></textarea>
      </div>
      <div class="field">
        <label class="field-label">Engine</label>
        <div class="chip-group" id="gameEngineChips">
          <span class="chip active" data-val="2d">2D (HTML5 Canvas)</span>
          <span class="chip" data-val="3d">3D (Three.js / WebGL)</span>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Genre hint <span style="text-transform:none;color:var(--ink-faint);">optional</span></label>
        <div class="chip-group" id="gameGenreChips">
          <span class="chip active" data-val="">Let the AI decide</span>
          <span class="chip" data-val="strategy / tower defense">Strategy</span>
          <span class="chip" data-val="platformer">Platformer</span>
          <span class="chip" data-val="top-down exploration">Exploration</span>
          <span class="chip" data-val="puzzle">Puzzle</span>
          <span class="chip" data-val="arcade shooter">Arcade shooter</span>
        </div>
      </div>
      <div class="field">
        <label class="field-label">Complexity</label>
        <div class="chip-group" id="gameComplexityChips">
          <span class="chip" data-val="minimal">Minimal</span>
          <span class="chip active" data-val="standard">Standard</span>
          <span class="chip" data-val="rich">Rich</span>
        </div>
      </div>
      <p class="hint">Generated in two AI passes — HTML/CSS scaffolding, then game-loop JavaScript — matching how the legacy build produced complete, working single-file games. Both passes run on your enabled Text providers (Keys &amp; Providers → Text) — the "Game Generation" filter there only lists an optional custom endpoint, which you don't need.</p>
      ${this.renderPipelineHint(`text`)}
      <button class="run-btn" id="runBtn">▸ Generate Game</button>
    `),[`gameEngineChips`,`gameGenreChips`,`gameComplexityChips`].forEach(e=>{document.querySelectorAll(`#${e} .chip`).forEach(t=>{t.addEventListener(`click`,()=>{document.querySelectorAll(`#${e} .chip`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)})})}),document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleRun(!1)))}async handleRun(e){let t=document.getElementById(`promptInput`)?.value.trim();if(!t){alert(`Describe the game you want.`);return}if(e&&!this.lastGameCode){alert(`Generate a game first before iterating.`);return}let n=document.querySelector(`#gameEngineChips .chip.active`)?.dataset.val||`2d`,r=document.querySelector(`#gameGenreChips .chip.active`)?.dataset.val||``,i=document.querySelector(`#gameComplexityChips .chip.active`)?.dataset.val||`standard`;this.outputPanel.querySelector(`.stage`)&&this.renderLoading(e?`Applying your change…`:`Stage 1/2 — building scaffolding…`);let a={id:`game-`+Date.now(),name:`Game Generation`,graph:{nodes:[{id:`game1`,type:`gamegen`,label:`Game Generator`,config:{engine:n,genre:r,complexity:i,iterate:e,previousCode:this.lastGameCode||void 0},inputs:{concept:t},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};try{let e=(await this.kernel.getWorkflowEngine().execute(a,{concept:t},(e,t)=>this.appendLog(e,t))).finalOutput;this.lastGameCode=e,this.renderGame(e),this.kernel.getStore().getActions().addHistoryEntry({mode:`game`,prompt:t,result:e,resultType:`other`})}catch(e){this.renderError(e)}}renderGame(e){let t=this.outputPanel.querySelector(`.stage`);if(!t)return;let n=new Blob([e],{type:`text/html;charset=utf-8`}),r=URL.createObjectURL(n);t.innerHTML=`
      <div class="result-media" style="margin-bottom:14px;">
        <iframe src="${r}" style="width:100%; height:520px; border:1px solid var(--line); border-radius:8px; background:#000;" sandbox="allow-scripts allow-pointer-lock"></iframe>
        <div class="result-actions" style="margin-top:10px; display:flex; gap:8px;">
          <a href="${r}" download="magenais-game.html"><button class="ghost-btn">Download Game (.html)</button></a>

          <button class="ghost-btn" id="iterateBtn">Iterate on this game</button>
        </div>
      </div>
    `,document.getElementById(`iterateBtn`)?.addEventListener(`click`,()=>{let e=document.getElementById(`promptInput`),t=document.getElementById(`runBtn`);e&&(e.value=``,e.placeholder=`Describe the change you want (e.g. "make the player faster")`,e.focus()),t&&(t.textContent=`▸ Apply Change`,t.onclick=()=>this.runGuarded(`runBtn`,()=>this.handleRun(!0)))})}deactivate(){}getTitle(){return`Game Generator`}};export{t as GameMode};