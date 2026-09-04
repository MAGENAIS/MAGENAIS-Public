const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pyodide-EaRRJmCp.js","assets/rolldown-runtime-Dd_uD5pT.js","assets/main-DuObJZe6.js","assets/Environment-DAaQRBRU.js","assets/main-DM-5SoV6.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-Dd_uD5pT.js";import{O as t,nt as n}from"./main-DuObJZe6.js";import{t as r}from"./MathExtract-fn-3BPbL.js";var i=new Set([`html`,`htm`,`xml`,`svg`]),a=new Set([`css`,`scss`,`sass`,`less`]),o=new Set([`javascript`,`js`,`jsx`,`mjs`]);function s(e){let t=(e||``).trim().toLowerCase();return i.has(t)?`html`:a.has(t)?`css`:o.has(t)?`js`:null}function c(e,t){return e===`html`?/<html[\s>]/i.test(t)?t:`<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${t}</body></html>`:e===`css`?`<!DOCTYPE html><html><head><meta charset="utf-8"><style>${t}</style></head>
      <body style="font-family:sans-serif; padding:16px;">
        <h1>Heading</h1>
        <p>Paragraph text to preview your styles against.</p>
        <button>Button</button>
        <div class="box" style="width:80px;height:80px;background:#8884;margin-top:12px;">.box</div>
      </body></html>`:e===`js`?`<!DOCTYPE html><html><head><meta charset="utf-8">
      <style>body{font-family:monospace; font-size:13px; padding:12px; white-space:pre-wrap; background:#0c0e0d; color:#eaede8;}
      .err{color:#c4644a;} .warn{color:#e8a23d;}</style></head>
      <body><div id="__out"></div><script>
        const out = document.getElementById('__out');
        const write = (cls, args) => { const d = document.createElement('div'); if (cls) d.className = cls;
          d.textContent = args.map(a => { try { return typeof a === 'string' ? a : JSON.stringify(a); } catch { return String(a); } }).join(' ');
          out.appendChild(d); };
        console.log = (...a) => write('', a);
        console.error = (...a) => write('err', a);
        console.warn = (...a) => write('warn', a);
        window.onerror = (msg) => write('err', ['Uncaught: ' + msg]);
        try { ${t} } catch (e) { write('err', ['Uncaught: ' + (e && e.message || e)]); }
      <\/script></body></html>`:`<!DOCTYPE html><body>${(e=>e.replace(/</g,`&lt;`))(t)}</body>`}async function l(e,t,n,r=``){return e.getProviderManager().callWithFallback(`codeexec`,e.getRouter(),{language:t,code:n,stdin:r},{})}var u=`https://cdn.jsdelivr.net/pyodide/v314.0.5/full/`,d=null;function f(){return d||=t(async()=>{let{loadPyodide:e}=await import(`./pyodide-EaRRJmCp.js`);return{loadPyodide:e}},__vite__mapDeps([0,1,2,3,4])).then(({loadPyodide:e})=>e({indexURL:u})).catch(e=>{throw d=null,e}),d}function p(){return d!==null}async function m(e,t){p()||t?.();let r;try{r=await f()}catch(e){throw n.warn(`PyodideRunner: failed to load Pyodide runtime: ${e?.message||e}`),Error(`Could not load the Python runtime (network issue reaching the Pyodide CDN): ${e?.message||e}`)}let i=[],a=[];r.setStdout({batched:e=>i.push(e)}),r.setStderr({batched:e=>a.push(e)});try{return await r.runPythonAsync(e),{stdout:i.join(`
`),stderr:a.join(`
`),exitCode:0,language:`python`,version:r.version}}catch(e){let t=e?.message||String(e);return a.push(t),{stdout:i.join(`
`),stderr:a.join(`
`),exitCode:1,language:`python`,version:r.version}}finally{r.setStdout({}),r.setStderr({})}}var h=new Set([`python`,`py`,`python3`]);function g(e){return h.has((e||``).trim().toLowerCase())}var _=e({escapeHtml:()=>v,renderMarkdownToHtml:()=>b});function v(e){let t=document.createElement(`div`);return t.textContent=e??``,t.innerHTML}function y(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function b(e){if(!e)return``;let t=[],n=e.replace(/```([a-zA-Z0-9_+-]*)\n?([\s\S]*?)```/g,(e,n,r)=>{let i=t.length,a=s(n),o=r.trim();return t.push(`
      <div class="code-block" style="position:relative; margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-raised); border:1px solid var(--line-bright); border-bottom:none; border-radius:var(--radius) var(--radius) 0 0; padding:6px 10px;">
          <span class="provider-meta">${v(n||`code`)}</span>
          <div style="display:flex; gap:6px;">
            ${a?`<button class="ghost-btn small preview-code-btn" type="button" data-preview-kind="${a}">&#9654; Preview</button>`:``}
            <button class="ghost-btn small run-code-btn" type="button" data-run-lang="${v((n||``).toLowerCase())}">&#9654; Run${g(n)?` (free, local)`:``}</button>
            <button class="ghost-btn small copy-code-btn" type="button">Copy</button>
          </div>
        </div>
        <pre style="margin:0; background:var(--bg); border:1px solid var(--line-bright); border-radius:0 0 var(--radius) var(--radius); padding:12px; overflow-x:auto;"><code>${v(o)}</code></pre>
        <div class="code-run-output" hidden></div>
      </div>`),`\u0000CODEBLOCK${i}\u0000`}),{text:i,segments:a}=r(n);n=i,n=v(n),n=n.replace(/&lt;br\s*\/?&gt;/gi,`<br>`),n=n.replace(/`([^`\n]+)`/g,`<code>$1</code>`),n=n.replace(/\*\*([^*\n]+)\*\*/g,`<strong>$1</strong>`),n=n.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g,`<em>$1</em>`),n=n.replace(/^(#{1,6})\s+(.+)$/gm,(e,t,n)=>{let r=Math.min(t.length,6);return`<h${r} style="margin:14px 0 8px;">${n}</h${r}>`}),n=n.replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g,`<img src="$2" alt="$1" loading="lazy" style="display:block; max-width:100%; height:auto; margin:10px 0; border-radius:var(--radius); border:1px solid var(--line-bright);">`),n=n.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,`<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`);let o=n.split(`
`),c=[],l=null,u=[],d=()=>{u.length&&(c.push(`<p style="margin:0 0 10px;">${u.join(`<br>`)}</p>`),u=[])},f=()=>{l&&=(c.push(`</${l}>`),null)},p=e=>e.trim().startsWith(`|`)&&e.trim().endsWith(`|`)&&e.trim().length>1,m=e=>/^\|?\s*:?-{1,}:?\s*(\|\s*:?-{1,}:?\s*)+\|?$/.test(e.trim()),h=e=>e.trim().slice(1,-1).split(`|`).map(e=>e.trim()),_=0;for(;_<o.length;){let e=o[_];if(!e.trim()){d(),f(),_++;continue}if(p(e)&&o[_+1]!==void 0&&m(o[_+1])){d(),f();let t=h(e);for(c.push(`<div style="overflow-x:auto; margin:10px 0;"><table style="border-collapse:collapse; width:100%; font-size:13px;"><thead><tr>`),c.push(t.map(e=>`<th style="text-align:left; padding:6px 10px; border-bottom:2px solid var(--line-bright); white-space:nowrap;">${e}</th>`).join(``)),c.push(`</tr></thead><tbody>`),_+=2;_<o.length&&p(o[_]);){let e=h(o[_]);c.push(`<tr>`+e.map(e=>`<td style="padding:6px 10px; border-bottom:1px solid var(--line);">${e}</td>`).join(``)+`</tr>`),_++}c.push(`</tbody></table></div>`);continue}let t=/^<h[1-6][^>]*>.*<\/h[1-6]>$/.test(e),n=/^\u0000CODEBLOCK\d+\u0000$/.test(e.trim()),r=/^\u0000MATH\d+\u0000$/.test(e.trim())&&a[Number(e.trim().replace(/\D/g,``))]?.display,i=e.match(/^[-*]\s+(.+)$/),s=e.match(/^\d+\.\s+(.+)$/);if(t||n||r)d(),f(),c.push(e);else if(i||s){d();let e=i?`ul`:`ol`;l!==e&&(f(),c.push(`<${e} style="margin:8px 0; padding-left:22px;">`),l=e),c.push(`<li>${(i||s)[1]}</li>`)}else f(),p(e)?u.push(h(e).join(`&nbsp;&nbsp;&nbsp;`)):u.push(e);_++}return d(),f(),n=c.join(`
`),n=n.replace(/\u0000CODEBLOCK(\d+)\u0000/g,(e,n)=>t[Number(n)]),n=n.replace(/\u0000MATH(\d+)\u0000/g,(e,t)=>{let n=a[Number(t)];if(!n)return``;let r=y(n.latex),i=v(n.latex),o=n.display?`div`:`span`;return`<${o} class="${n.display?`math-render math-render-block`:`math-render math-render-inline`}" data-latex="${r}" data-display="${n.display}">${i}</${o}>`}),n||`<p>${v(e)}</p>`}export{p as a,l as c,g as i,v as n,m as o,b as r,c as s,_ as t};