const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/podcast-CN_u33MG.js","assets/main-C8vn95zW.js","assets/main-B26zdJZE.css"])))=>i.map(i=>d[i]);
import{h as e,o as t}from"./main-C8vn95zW.js";import{t as n}from"./Mode-DuooQ1Rf.js";import{t as r}from"./VoiceInput-CvaLwtaL.js";var i=class extends n{activeMode=`speech`;conversation=[];activate(){this.renderControl(`
      <div class="field">
        <label class="field-label">Mode</label>
        <div class="chip-group" id="audioModeChips">
          <span class="chip" data-val="talk">Talk</span>
          <span class="chip active" data-val="speech">Speech</span>
          <span class="chip" data-val="podcast">Podcast</span>
          <span class="chip" data-val="music">Music generation</span>
        </div>
      </div>

      <!--
        BUGFIX (user-reported: Live Voice Conversation sat permanently
        between Mode and Text to Speak, always visible regardless of which
        chip was active — a "soup" of unrelated controls). Talk is now a
        fourth Mode chip like Speech/Podcast/Music, and each chip's panel
        is exclusively shown/hidden by updateVisibility() below — clicking
        a chip shows only that mode's fields, nothing else. Talk's own
        panel (mic capture reuses VoiceInput.ts's wireMicButton — same
        pipeline as Text/Autonomous — and the spoken reply reuses this
        tab's "speech" workflow node) is otherwise unchanged from before.
      -->
      <div class="field" id="audioTalkSection" style="display:none;">
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:8px;">
          <button class="ghost-btn" id="audioTalkBtn" title="Talk — have a live spoken conversation">🎙 Talk</button>
          <button class="ghost-btn" id="audioTalkClearBtn" title="Clear the conversation transcript">Clear Conversation</button>
          <select id="audioTalkVoice" title="Voice for spoken replies">
            <option value="nova">nova</option>
            <option value="alloy">alloy</option>
            <option value="echo">echo</option>
            <option value="fable">fable</option>
            <option value="onyx">onyx</option>
            <option value="shimmer">shimmer</option>
            <option value="rachel">rachel (ElevenLabs)</option>
            <option value="adam">adam (ElevenLabs)</option>
            <option value="bella">bella (ElevenLabs)</option>
          </select>
        </div>
        <!--
          Global playback transport for the spoken reply — same three
          actions/icons as renderAudioBlock's per-turn player (below, in
          the transcript itself), just always in reach next to the mic
          instead of requiring a scroll down to the latest turn. Acts on
          the most recent turn's audio, browser-voice utterance, or
          whichever the person last interacted with — see
          resolveTalkAudioEl()'s doc comment.
        -->
        <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
          <button class="ghost-btn" id="audioTalkPlayBtn" title="Resume the spoken reply">▶ Play</button>
          <button class="ghost-btn" id="audioTalkPauseBtn" title="Pause the spoken reply">⏸ Pause</button>
          <button class="ghost-btn" id="audioTalkStopBtn" title="Stop the spoken reply">⏹ Stop</button>
        </div>
        <span class="hint" id="audioTalkStatus">Click, then speak — your words and the spoken reply appear in the output panel as the conversation happens.</span>
        <div id="audioTalkPipelineHint">${this.renderPipelineHint(`text`)}</div>
      </div>

      <div class="field" id="audioPromptField">
        <label class="field-label">Text to speak</label>
        <textarea id="promptInput" rows="5" placeholder="Welcome to MAGENAIS..."></textarea>
      </div>
      <div class="field" id="audioVoiceField">
        <label class="field-label">Voice</label>
        <select id="audioVoice">
          <option value="nova">nova</option>
          <option value="alloy">alloy</option>
          <option value="echo">echo</option>
          <option value="fable">fable</option>
          <option value="onyx">onyx</option>
          <option value="shimmer">shimmer</option>
          <option value="rachel">rachel (ElevenLabs)</option>
          <option value="adam">adam (ElevenLabs)</option>
          <option value="bella">bella (ElevenLabs)</option>
        </select>
      </div>
      <div class="field" id="audioStyleField" style="display:none;">
        <label class="field-label">Style / genre tags</label>
        <input type="text" id="musicStyle" placeholder="e.g. lo-fi chillhop, ambient piano" autocomplete="off">
      </div>
      <div class="field" id="audioDurField" style="display:none;">
        <label class="field-label">Duration (seconds, music only)</label>
        <div class="slider-row">
          <input type="range" id="audioDuration" min="10" max="180" step="10" value="60">
          <span class="slider-val" id="audioDurationVal">60s</span>
        </div>
      </div>
      <div class="field" id="podcastFields" style="display:none;">
        <label class="field-label">Format</label>
        <div class="chip-group" id="podcastFormatChips">
          <span class="chip active" data-val="solo">Single narrator</span>
          <span class="chip" data-val="dialogue">Two-host dialogue</span>
        </div>
      </div>
      <div class="field" id="podcastSourceField" style="display:none;">
        <label class="field-label">Script source</label>
        <div class="chip-group" id="podcastSourceChips">
          <span class="chip active" data-val="generate">Generate script from a topic</span>
          <span class="chip" data-val="paste">I'll paste my own script</span>
        </div>
      </div>
      <div class="field" id="podcastPasteHint" style="display:none;">
        <p class="hint">For dialogue, prefix each line with <code>Host A:</code> or <code>Host B:</code>.</p>
      </div>
      <div class="field" id="podcastLengthField">
        <label class="field-label">Target length</label>
        <div class="chip-group" id="podcastLengthChips">
          <span class="chip" data-val="short">Short (~1 min)</span>
          <span class="chip active" data-val="medium">Medium (~3 min)</span>
          <span class="chip" data-val="long">Long (~6 min)</span>
        </div>
      </div>
      <div class="field" id="podcastVoiceA">
        <label class="field-label" id="podcastVoiceALabel">Narrator voice</label>
        <select id="podcastVoiceASelect">
          <option value="nova">nova</option>
          <option value="alloy">alloy</option>
          <option value="echo">echo</option>
          <option value="fable">fable</option>
          <option value="onyx">onyx</option>
          <option value="shimmer">shimmer</option>
        </select>
      </div>
      <div class="field" id="podcastVoiceB" style="display:none;">
        <label class="field-label">Host B voice</label>
        <select id="podcastVoiceBSelect">
          <option value="onyx">onyx</option>
          <option value="echo">echo</option>
          <option value="alloy">alloy</option>
          <option value="nova">nova</option>
          <option value="fable">fable</option>
          <option value="shimmer">shimmer</option>
        </select>
      </div>
      <div class="field" id="podcastAudioOptIn" style="display:none;">
        <label class="chip-checkbox" style="display:flex; align-items:flex-start; gap:8px; cursor:pointer;">
          <input type="checkbox" id="podcastGenerateAudio" style="margin-top:3px;">
          <span>Also generate a downloadable audio file (calls whichever speech providers you have enabled in Keys &amp; Providers — local, cloud, or none). Left unchecked, only the script is generated; you can still preview it aloud afterward with your browser's built-in voice.</span>
        </label>
      </div>
      <div id="audioKeyWarning"></div>
      <div id="audioPipelineHint">${this.renderPipelineHint(`speech`)}</div>
      <button class="run-btn" id="runBtn">▸ Generate Audio</button>
    `),this.wireModeChips(),this.wireSubChips(),this.wireTalk();let e=document.getElementById(`audioDuration`),t=document.getElementById(`audioDurationVal`);e?.addEventListener(`input`,()=>{t&&(t.textContent=e.value+`s`)}),document.getElementById(`runBtn`)?.addEventListener(`click`,()=>this.runGuarded(`runBtn`,()=>this.handleGenerate()))}wireModeChips(){document.querySelectorAll(`#audioModeChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#audioModeChips .chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.activeMode=e.dataset.val,this.updateVisibility()})}),this.updateVisibility()}updateVisibility(){let e=this.activeMode===`talk`,t=this.activeMode===`speech`,n=this.activeMode===`music`,r=this.activeMode===`podcast`;document.getElementById(`audioTalkSection`).style.display=e?``:`none`,document.getElementById(`audioPromptField`).style.display=e?`none`:``,document.getElementById(`audioVoiceField`).style.display=t?``:`none`,document.getElementById(`audioStyleField`).style.display=n?``:`none`,document.getElementById(`audioDurField`).style.display=n?``:`none`,document.getElementById(`podcastFields`).style.display=r?``:`none`,document.getElementById(`podcastSourceField`).style.display=r?``:`none`,document.getElementById(`podcastLengthField`).style.display=r?``:`none`,document.getElementById(`podcastVoiceA`).style.display=r?``:`none`,document.getElementById(`podcastAudioOptIn`).style.display=r?``:`none`,r||(document.getElementById(`podcastVoiceB`).style.display=`none`,document.getElementById(`podcastPasteHint`).style.display=`none`),document.getElementById(`audioKeyWarning`).style.display=e?`none`:``,document.getElementById(`audioPipelineHint`).style.display=e?`none`:``;let i=document.getElementById(`runBtn`);if(i&&(i.style.display=e?`none`:``),e)return;let a=document.getElementById(`promptInput`);a.placeholder=n?`e.g. An uplifting cinematic orchestral piece...`:r?`Enter a topic for the podcast.`:`Welcome to MAGENAIS...`;let o=document.getElementById(`runBtn`);o&&(o.textContent=n?`▸ Generate Music`:r?`▸ Generate Podcast`:`▸ Generate Speech`);let s=document.getElementById(`audioPipelineHint`);s&&(s.innerHTML=r?this.renderPipelineHint(`text`)+`<p class="hint">By default only the script is generated (via the text pipeline above). Check "Also generate a downloadable audio file" below to additionally run this tab's speech pipeline per line.</p>`:this.renderPipelineHint(n?`music`:`speech`)),r&&this.updatePodcastSubFields()}wireSubChips(){document.querySelectorAll(`#podcastFormatChips .chip, #podcastSourceChips .chip, #podcastLengthChips .chip`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.chip-group`);t.querySelectorAll(`.chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),(t.id===`podcastFormatChips`||t.id===`podcastSourceChips`)&&this.updatePodcastSubFields()})})}updatePodcastSubFields(){let e=document.querySelector(`#podcastFormatChips .chip.active`)?.dataset.val===`dialogue`;document.getElementById(`podcastVoiceB`).style.display=e?``:`none`,document.getElementById(`podcastVoiceALabel`).textContent=e?`Host A voice`:`Narrator voice`;let t=document.querySelector(`#podcastSourceChips .chip.active`)?.dataset.val||`generate`;document.getElementById(`podcastPasteHint`).style.display=t===`paste`&&e?``:`none`,document.getElementById(`podcastLengthField`).style.display=t===`generate`?``:`none`;let n=document.getElementById(`promptInput`);n.placeholder=t===`generate`?`e.g. The history and future of solid-state batteries`:e?`Host A: Welcome back!
Host B: Thanks for having me...`:`Paste your full narration script here.`}wireTalk(){let e=document.getElementById(`audioTalkBtn`),t=document.getElementById(`audioTalkStatus`);e&&r(this.kernel,e,t,e=>{this.handleTalkTranscript(e)}),document.getElementById(`audioTalkClearBtn`)?.addEventListener(`click`,()=>{this.conversation=[],window.speechSynthesis?.cancel();let e=this.outputPanel.querySelector(`.stage`);e&&(e.innerHTML=`<div class="empty-glyph">◇</div><div class="empty-text">Conversation cleared. Click 🎙 Talk to start a new one.</div>`),this.setTalkStatus(`Click, then speak — your words and the spoken reply appear in the output panel as the conversation happens.`)}),document.getElementById(`audioTalkPlayBtn`)?.addEventListener(`click`,()=>this.talkPlay()),document.getElementById(`audioTalkPauseBtn`)?.addEventListener(`click`,()=>this.talkPause()),document.getElementById(`audioTalkStopBtn`)?.addEventListener(`click`,()=>this.talkStop())}resolveTalkAudioEl(){let e=document.getElementById(`audioTalkTranscript`);if(!e)return null;let t=Array.from(e.querySelectorAll(`audio`));return t.length===0?null:t.find(e=>!e.paused&&!e.ended)||t[t.length-1]}talkPlay(){let e=window.speechSynthesis;if(e?.paused){e.resume(),this.setTalkStatus(`Speaking reply…`);return}let t=this.resolveTalkAudioEl();if(t&&!t.ended){t.play(),this.setTalkStatus(`Speaking reply…`);return}this.setTalkStatus(`Nothing to resume yet — speak a question first.`)}talkPause(){let e=window.speechSynthesis;if(e?.speaking&&!e.paused){e.pause(),this.setTalkStatus(`Paused. Click ▶ Play to continue.`);return}let t=this.resolveTalkAudioEl();if(t&&!t.paused){t.pause(),this.setTalkStatus(`Paused. Click ▶ Play to continue.`);return}this.setTalkStatus(`Nothing is currently playing.`)}talkStop(){window.speechSynthesis?.cancel(),document.getElementById(`audioTalkTranscript`)?.querySelectorAll(`audio`).forEach(e=>{let t=e;t.pause(),t.currentTime=0}),this.setTalkStatus(`Playback stopped. Click the mic to speak again, or ▶ Play to replay the last reply.`)}setTalkStatus(e){let t=document.getElementById(`audioTalkStatus`);t&&(t.textContent=e)}ensureTalkTranscript(){let e=document.getElementById(`audioTalkTranscript`);if(e)return e;let t=this.outputPanel.querySelector(`.stage`);return t.innerHTML=`
      <div class="doc-summary-block">
        <p class="field-label" style="margin-bottom:10px;">Live Conversation</p>
        <div id="audioTalkTranscript" style="display:flex; flex-direction:column; gap:12px; max-height:480px; overflow-y:auto;"></div>
      </div>`,this.outputPanel.scrollTop=0,document.getElementById(`audioTalkTranscript`)}appendTalkTurn(e,t){let n=this.ensureTalkTranscript(),r=document.createElement(`div`),i=e===`user`;return r.style.cssText=`align-self:${i?`flex-end`:`flex-start`}; max-width:85%; background:${i?`var(--bg-raised)`:`transparent`}; border:1px solid var(--line-bright); border-radius:var(--radius); padding:8px 12px;`,r.innerHTML=`
      <div class="hint" style="margin-bottom:4px;">${i?`🗣️ You`:`🔊 Assistant`} · ${new Date().toLocaleTimeString()}</div>
      <div class="result-text">${this.renderMarkdown(t)}</div>`,n.appendChild(r),n.scrollTop=n.scrollHeight,r}buildConversationPrompt(){return`You're a friendly voice assistant having a real-time spoken conversation, read aloud via text-to-speech. Match your reply length to what's actually being asked: quick factual questions get a sentence or two, but requests like "tell a story", "explain", or "describe" deserve a long, rich, fully-developed answer — for a story, that means real scene-setting, a beginning/middle/end, and several paragraphs, not a quick summary. Don't wrap up early or compress for brevity's sake. Keep the tone conversational and avoid markdown formatting, since this will be spoken aloud.\n\n${this.conversation.slice(-10).map(e=>`${e.role===`user`?`User`:`Assistant`}: ${e.text}`).join(`
`)}\nAssistant:`}async handleTalkTranscript(e){let t=e.trim();if(t){this.conversation.push({role:`user`,text:t}),this.appendTalkTurn(`user`,t),this.setTalkStatus(`Thinking…`);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:this.buildConversationPrompt()},{temperature:.8,maxTokens:2e3},(e,t)=>this.appendLog(e,t));this.conversation.push({role:`assistant`,text:e});let t=this.appendTalkTurn(`assistant`,e);this.setTalkStatus(`Speaking reply…`),await this.speakTalkReply(e,t),this.setTalkStatus(`Click the mic to speak again, or Clear Conversation to reset.`)}catch(e){let t=`Couldn't get a reply (${e?.message||e}). This needs a text provider configured in Keys & Providers.`;this.appendLog(t,`error`),this.appendTalkTurn(`assistant`,`⚠ ${t}`),this.setTalkStatus(`Reply failed — see the pipeline report below, or check Keys & Providers.`)}}}async speakTalkReply(e,n){if(!e)return;let r=document.getElementById(`audioTalkVoice`)?.value||`nova`,i=t(e);try{let t={id:`audio-talk-speech-`+Date.now(),name:`Audio Tab Talk Voice`,graph:{nodes:[{id:`speech1`,type:`speech`,label:`Speak Reply`,config:{voice:r},inputs:{text:e},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()},a=(await this.kernel.getWorkflowEngine().execute(t,{text:e})).finalOutput;window.speechSynthesis?.cancel();let o=document.createElement(`div`);o.style.marginTop=`8px`,a===`__BROWSER_TTS_PENDING__`||!a?(o.innerHTML=this.renderBrowserSpeechBlock(i),n.appendChild(o),this.wireBrowserSpeechControls(o),window.speechSynthesis?.speak(new SpeechSynthesisUtterance(i))):(o.innerHTML=this.renderAudioBlock(a,{filename:`talk-reply`,downloadLabel:`Download Reply`}),n.appendChild(o),this.wireAudioControls(o),new Audio(a).play())}catch{window.speechSynthesis?.speak(new SpeechSynthesisUtterance(i))}}async handleGenerate(){let n=document.getElementById(`promptInput`)?.value.trim();if(!n){alert(`Enter text/topic.`);return}let r,i=this.outputPanel.querySelector(`.stage`);i&&this.renderLoading(this.activeMode===`music`?`Generating music… on-device MusicGen can take 1-2 minutes on CPU (faster with WebGPU, or a keyed provider in Keys & Providers).`:`Generating audio...`);try{if(this.activeMode===`speech`){let e=document.getElementById(`audioVoice`)?.value||`nova`;r={id:`sp-`+Date.now(),name:`Speech Generation`,graph:{nodes:[{id:`speech1`,type:`speech`,label:`TTS`,config:{voice:e},inputs:{text:n},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};let a=(await this.kernel.getWorkflowEngine().execute(r,{text:n},(e,t)=>this.appendLog(e,t))).finalOutput;i&&(a===`__BROWSER_TTS_PENDING__`?(i.innerHTML=`
              <div class="result-text" style="margin-bottom:14px;">${n}</div>
              ${this.renderBrowserSpeechBlock(t(n))}`,this.wireBrowserSpeechControls(i),this.appendLog(`No downloadable file — add a keyed speech provider in Keys & Providers to get one.`,`warn`)):(i.innerHTML=`
              <div class="result-text" style="margin-bottom:14px;">${n}</div>
              ${this.renderAudioBlock(a,{filename:`magen-audio`,downloadLabel:`Download Audio`})}`,this.wireAudioControls(i))),a!==`__BROWSER_TTS_PENDING__`&&this.kernel.getStore().getActions().addHistoryEntry({mode:`speech`,prompt:n,result:a,resultType:`audio`})}else if(this.activeMode===`music`){let e=document.getElementById(`musicStyle`)?.value.trim(),t=parseInt(document.getElementById(`audioDuration`)?.value||`60`);r={id:`mu-`+Date.now(),name:`Music Generation`,graph:{nodes:[{id:`music1`,type:`music`,label:`Music Gen`,config:{style:e,duration:t},inputs:{prompt:n},enabled:!0}],edges:[]},createdAt:Date.now(),updatedAt:Date.now()};let a=(await this.kernel.getWorkflowEngine().execute(r,{prompt:n},(e,t)=>this.appendLog(e,t))).finalOutput;i&&(i.innerHTML=this.renderAudioBlock(a,{filename:`magen-music`,downloadLabel:`Download Audio`}),this.wireAudioControls(i)),this.kernel.getStore().getActions().addHistoryEntry({mode:`music`,prompt:n,result:a,resultType:`audio`})}else if(this.activeMode===`podcast`){let{generatePodcast:r}=await e(async()=>{let{generatePodcast:e}=await import(`./podcast-CN_u33MG.js`);return{generatePodcast:e}},__vite__mapDeps([0,1,2])),a=document.querySelector(`#podcastFormatChips .chip.active`),o=document.querySelector(`#podcastSourceChips .chip.active`),s=document.querySelector(`#podcastLengthChips .chip.active`),c=a?.dataset.val===`dialogue`,l=o?.dataset.val||`generate`,u=s?.dataset.val||`medium`,d=document.getElementById(`podcastVoiceASelect`)?.value||`nova`,f=document.getElementById(`podcastVoiceBSelect`)?.value||`onyx`,p=document.getElementById(`podcastGenerateAudio`)?.checked||!1,m=await r({source:l,isDialogue:c,lengthTarget:u,topic:n,script:n,voiceA:d,voiceB:f,generateAudio:p},e=>console.log(e),this.kernel.getProviderManager(),this.kernel.getRouter());if(i){let e=m.url?this.renderAudioBlock(m.url,{filename:`magen-podcast.wav`,downloadLabel:`Download Podcast (.wav)`}):this.renderBrowserSpeechBlock(t(m.script));p?m.url||this.appendLog(`No downloadable audio file — no enabled speech provider could produce one. Enable a speech provider (local or cloud) in Keys & Providers (Speech tab) if you want a real downloadable file. You can still preview the script below using your browser's built-in voice.`,`warn`):this.appendLog(`Script generated. No audio was requested — check "Also generate a downloadable audio file" above and run again if you'd like one, or preview the script below with your browser's built-in voice.`,`info`),i.innerHTML=`
            <p class="field-label">Script (${m.lineCount} lines)</p>
            <div class="doc-summary-block" style="margin-bottom:18px;"><div class="result-text">${this.renderMarkdown(m.script)}</div></div>
            <div class="result-actions" style="margin-bottom:18px;">
              <button class="ghost-btn" id="copyPodcastScriptBtn">Copy script</button>
            </div>
            ${e}`,document.getElementById(`copyPodcastScriptBtn`)?.addEventListener(`click`,()=>{navigator.clipboard.writeText(m.script)}),this.wireAudioControls(i),this.wireBrowserSpeechControls(i),this.wireCodeCopyButtons(i)}this.kernel.getStore().getActions().addHistoryEntry({mode:`podcast`,prompt:n,result:m.url||m.script,resultType:m.url?`audio`:`text`})}}catch(e){this.renderError(e)}}deactivate(){typeof window<`u`&&window.speechSynthesis&&window.speechSynthesis.cancel(),this.talkStop()}getTitle(){return`Audio / Music Output`}};export{i as AudioMode};