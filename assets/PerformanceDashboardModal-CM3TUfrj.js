import{F as e,M as t,P as n,V as r,nt as i}from"./main-Bb4QPNqr.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./PerformanceTelemetry-BSYe_tCO.js";function d(e){let t=document.createElement(`div`);return t.textContent=e??``,t.innerHTML}function f(e){if(!e)return`—`;let t=Math.floor((Date.now()-e)/1e3);if(t<5)return`just now`;if(t<60)return`${t}s ago`;let n=Math.floor(t/60);if(n<60)return`${n}m ago`;let r=Math.floor(n/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function p(e){return e==null||Number.isNaN(e)?`—`:e<1e3?`${Math.round(e)}ms`:`${(e/1e3).toFixed(1)}s`}function m(e){return`${Math.round(e)}%`}function h(e,t){return e.length>t?`${e.slice(0,t-1)}…`:e}function g(e,t,n){let r=new Blob([t],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}var _={all:null,"15m":9e5,"1h":36e5,"24h":864e5},v=class v{kernel;unsubscribeEvents=null;filters={provider:`all`,type:`all`,status:`all`,timeRange:`all`};renderQueued=!1;constructor(e){this.kernel=e,o()}open(){this.ensureDom(),this.render(),document.getElementById(`performanceModal`)?.classList.add(`open`),this.unsubscribeEvents||=i.onEvent(()=>this.queueRender())}close(){document.getElementById(`performanceModal`)?.classList.remove(`open`),this.unsubscribeEvents&&=(this.unsubscribeEvents(),null)}queueRender(){this.renderQueued||(this.renderQueued=!0,requestAnimationFrame(()=>{this.renderQueued=!1,this.render()}))}ensureDom(){if(document.getElementById(`performanceModal`))return;let e=document.createElement(`div`);e.className=`modal-backdrop`,e.id=`performanceModal`,e.innerHTML=`
      <div class="modal perf-dashboard-modal">
        <button class="modal-close" id="closePerformance">×</button>
        <h3>AI Performance</h3>
        <p class="hint">Live view of the providers and pipelines MAGENAIS has actually run this session — nothing here triggers a request, a benchmark, or a background call. The provider/mode filters below only list what you've actually used so far this session; try Image, Vision, Video, etc. from their own tabs and they'll appear here too.</p>
        <div class="perf-filters" id="perfFilters"></div>
        <div class="perf-dashboard-body" id="perfBody"></div>
      </div>
    `,document.body.appendChild(e),e.addEventListener(`click`,t=>{t.target===e&&this.close()}),document.getElementById(`closePerformance`)?.addEventListener(`click`,()=>this.close()),this.renderFilters()}renderFilters(){let e=document.getElementById(`perfFilters`);if(!e)return;let t=i.getRecentEvents(),n=Array.from(new Set(t.map(e=>e.provider))).sort(),r=Array.from(new Set(t.map(e=>e.providerType).filter(e=>!!e))).sort();e.innerHTML=`
      <select class="perf-filter-select" id="perfFilterProvider">
        <option value="all">All providers</option>
        ${n.map(e=>`<option value="${d(e)}" ${this.filters.provider===e?`selected`:``}>${d(e)}</option>`).join(``)}
      </select>
      <select class="perf-filter-select" id="perfFilterType">
        <option value="all">All modes</option>
        ${r.map(e=>`<option value="${d(e)}" ${this.filters.type===e?`selected`:``}>${d(e)}</option>`).join(``)}
      </select>
      <select class="perf-filter-select" id="perfFilterStatus">
        <option value="all" ${this.filters.status===`all`?`selected`:``}>All statuses</option>
        <option value="ok" ${this.filters.status===`ok`?`selected`:``}>Succeeded</option>
        <option value="error" ${this.filters.status===`error`?`selected`:``}>Failed</option>
      </select>
      <select class="perf-filter-select" id="perfFilterRange">
        <option value="all" ${this.filters.timeRange===`all`?`selected`:``}>All time</option>
        <option value="15m" ${this.filters.timeRange===`15m`?`selected`:``}>Last 15 min</option>
        <option value="1h" ${this.filters.timeRange===`1h`?`selected`:``}>Last hour</option>
        <option value="24h" ${this.filters.timeRange===`24h`?`selected`:``}>Last 24h</option>
      </select>
      <button class="ghost-btn small" id="perfExportJson">Export JSON</button>
      <button class="ghost-btn small" id="perfExportCsv">Export CSV</button>
    `,document.getElementById(`perfFilterProvider`)?.addEventListener(`change`,e=>{this.filters.provider=e.target.value,this.render()}),document.getElementById(`perfFilterType`)?.addEventListener(`change`,e=>{this.filters.type=e.target.value,this.render()}),document.getElementById(`perfFilterStatus`)?.addEventListener(`change`,e=>{this.filters.status=e.target.value,this.render()}),document.getElementById(`perfFilterRange`)?.addEventListener(`change`,e=>{this.filters.timeRange=e.target.value,this.render()}),document.getElementById(`perfExportJson`)?.addEventListener(`click`,()=>this.exportJson()),document.getElementById(`perfExportCsv`)?.addEventListener(`click`,()=>this.exportCsv())}applyFilters(e){let t=_[this.filters.timeRange],n=t?Date.now()-t:null;return e.filter(e=>!(this.filters.provider!==`all`&&e.provider!==this.filters.provider||this.filters.type!==`all`&&e.providerType!==this.filters.type||this.filters.status===`ok`&&e.failureReason||this.filters.status===`error`&&!e.failureReason||n!==null&&e.timestamp<n))}render(){this.renderFilters();let e=i.getRecentEvents(),t=this.applyFilters(e),n=u(t),r=this.kernel.getProviderManager().getProviders(void 0,!0).length,a=l(n,r),o=c(e),d=o[0],f=document.getElementById(`perfBody`);if(f){if(e.length===0){f.innerHTML=`<p class="hint">No provider activity recorded yet this session — run a generation on any tab and this dashboard will fill in live, with no extra clicks or setup.</p>`;return}f.innerHTML=`
      ${this.renderKpis(a)}
      <div class="perf-columns">
        <div class="perf-col">
          ${this.renderPipelineSummary(d)}
          ${this.renderLiveMetrics(n)}
          ${this.renderProviderIntelligence(n,a)}
        </div>
        <div class="perf-col">
          ${this.renderEffectiveParams(e)}
          ${this.renderSystemMetricsPlaceholder()}
          ${this.renderCharts(n,d,t,o)}
        </div>
      </div>
      ${this.renderPipelineInspector(d)}
      ${this.renderModelInspector(d)}
      ${this.renderActivityFeed(t)}
      ${this.renderSessionHistory()}
    `,this.fillSystemMetrics(),this.wireExpandableRows(),document.getElementById(`perfClearHistory`)?.addEventListener(`click`,()=>{s(),this.render()})}}renderKpis(e){return`<div class="perf-kpi-grid">${[[`🚀`,`Fastest Provider`,e.fastestProvider||`—`],[`🛡️`,`Most Reliable`,e.mostReliableProvider||`—`],[`⭐`,`Recommended`,e.recommendedProvider||`—`],[`📈`,`Avg Latency`,p(e.avgLatencyMs)],[`🔄`,`Success Rate`,m(e.successRate)],[`⚡`,`Active Providers`,String(e.activeProviders)]].map(([e,t,n])=>`
      <div class="perf-kpi-card">
        <div class="perf-kpi-icon">${e}</div>
        <div class="perf-kpi-value" title="${d(String(n))}">${d(String(n))}</div>
        <div class="perf-kpi-label">${d(t)}</div>
      </div>`).join(``)}</div>`}renderPipelineSummary(e){if(!e)return``;let t=e.status===`success`?`var(--moss)`:e.status===`failed`?`var(--rust)`:`var(--amber)`,n=Math.max(1,...e.attempts.map(e=>e.latencyMs||0)),r=e.attempts.map(e=>`
      <div class="perf-bar-row" title="${d(e.provider)}: ${p(e.latencyMs)}">
        <span class="perf-bar-label">${d(e.provider)}</span>
        <span class="perf-bar-track"><span class="perf-bar-fill" style="width:${Math.max(4,(e.latencyMs||0)/n*100)}%; background:${e.failureReason?`var(--rust)`:`var(--moss)`};"></span></span>
        <span class="perf-bar-value">${p(e.latencyMs)}</span>
      </div>`).join(``);return`
      <section class="perf-section">
        <h4>Pipeline Summary <span class="perf-status-pill" style="color:${t}; border-color:${t};">${d(e.status)}</span></h4>
        <div class="perf-kv-grid">
          <div><span class="perf-kv-label">Winner</span>${d(e.winner?.provider||`—`)}</div>
          <div><span class="perf-kv-label">Model</span>${d(e.winner?.model||`—`)}</div>
          <div><span class="perf-kv-label">Duration</span>${p(e.durationMs)}</div>
          <div><span class="perf-kv-label">Response Time</span>${p(e.winner?.latencyMs)}</div>
          <div><span class="perf-kv-label">Providers Used</span>${e.attempts.length}</div>
          <div><span class="perf-kv-label">Successful</span>${e.attempts.filter(e=>!e.failureReason).length}</div>
          <div><span class="perf-kv-label">Failed</span>${e.attempts.filter(e=>e.failureReason).length}</div>
        </div>
        <div class="perf-bars">${r}</div>
      </section>`}renderLiveMetrics(e){return e.length===0?``:`
      <section class="perf-section">
        <h4>Live Provider Metrics</h4>
        <div class="perf-table-wrap">
          <table class="perf-table">
            <thead><tr><th>Provider</th><th>Model</th><th>Status</th><th>Avg Latency</th><th>Last Latency</th><th>Success</th><th>Failures</th><th>Retries</th><th>Timeouts</th><th>Total</th><th>Last Success</th><th>Last Failure</th></tr></thead>
            <tbody>${e.map(e=>`
      <tr>
        <td>${d(e.provider)}</td>
        <td>${d(e.model||`—`)}</td>
        <td><span class="perf-status-dot" style="background:${e.lastStatus===`ok`?`var(--moss)`:`var(--rust)`};"></span>${e.lastStatus===`ok`?`OK`:`Error`}</td>
        <td>${p(e.avgLatencyMs)}</td>
        <td>${p(e.lastLatencyMs)}</td>
        <td>${m(e.successRate)}</td>
        <td>${e.failureCount}</td>
        <td>${e.retryCount}</td>
        <td>${e.timeoutCount}</td>
        <td>${e.totalRequests}</td>
        <td>${f(e.lastSuccessAt)}</td>
        <td>${f(e.lastFailureAt)}</td>
      </tr>`).join(``)}</tbody>
          </table>
        </div>
      </section>`}renderProviderIntelligence(e,t){if(e.length===0)return``;let n=[...e].sort((e,t)=>t.totalRequests-e.totalRequests)[0],r=[...e].filter(e=>e.totalRequests>0).sort((e,t)=>e.failureCount/e.totalRequests-t.failureCount/t.totalRequests)[0],i=[...e].filter(e=>e.avgLatencyMs>0).sort((e,t)=>e.avgLatencyMs-t.avgLatencyMs)[0];return`
      <section class="perf-section">
        <h4>Provider Intelligence</h4>
        <div class="perf-kv-grid">${[[`Fastest Provider`,t.fastestProvider||`—`],[`Most Reliable Provider`,t.mostReliableProvider||`—`],[`Most Used Provider`,n?.provider||`—`],[`Lowest Failure Rate`,r?.provider||`—`],[`Lowest Average Latency`,i?.provider||`—`],[`Recommended Provider`,t.recommendedProvider||`—`]].map(([e,t])=>`<div><span class="perf-kv-label">${d(e)}</span>${d(t)}</div>`).join(``)}</div>
        <p class="hint">Simple calculations over this session's recorded attempts — no scoring model, no background benchmarking.</p>
      </section>`}renderEffectiveParams(e){let t=[...e].reverse()[0];if(!t)return``;let n=[[`Provider`,t.provider],[`Model`,t.model||`—`],[`Mode`,t.providerType||`—`]];if(t.params)for(let[e,r]of Object.entries(t.params))n.push([e,String(r)]);return n.push([`Request Finish Time`,new Date(t.timestamp).toLocaleTimeString()]),`
      <section class="perf-section">
        <h4>Effective Request Parameters</h4>
        <div class="perf-kv-grid">${n.map(([e,t])=>`<div><span class="perf-kv-label">${d(e)}</span>${d(t)}</div>`).join(``)}</div>
        <p class="hint">Only parameters this specific request actually reported — nothing here is estimated.</p>
      </section>`}renderSystemMetricsPlaceholder(){return`<section class="perf-section" id="perfSystemMetrics"><h4>System Metrics</h4><p class="hint">Loading…</p></section>`}async fillSystemMetrics(){let r=document.getElementById(`perfSystemMetrics`);if(!r)return;let i=performance.memory?.usedJSHeapSize?`${(performance.memory.usedJSHeapSize/1048576).toFixed(0)}MB`:null,a=typeof navigator<`u`&&!!navigator.gpu,o=await e(),s=n(),c=Object.values(s).filter(e=>e.status===`ready`),l=c.reduce((e,t)=>e+(t.bytesTotal||t.bytesDownloaded||0),0);r.innerHTML=`<h4>System Metrics</h4><div class="perf-kv-grid">${[[`Memory Usage`,i?`${i} (JS heap, approximate)`:`Not exposed by this browser`],[`WebGPU Status`,a?`Available`:`Not available`],[`Cache Size`,o.supported?t(o.usageBytes):`Not exposed by this browser`],[`Downloaded Models`,String(c.length)],[`Local Model Size`,c.length>0?t(l):`—`]].map(([e,t])=>`<div><span class="perf-kv-label">${d(e)}</span>${d(t)}</div>`).join(``)}</div>`}renderCharts(e,t,n,r){if(e.length===0)return``;let i=e.reduce((e,t)=>e+t.successCount,0),a=e.reduce((e,t)=>e+t.failureCount,0),o=r.filter(e=>e.winner).slice(0,12).reverse(),s=[...e].filter(e=>e.totalRequests>0).sort((e,t)=>t.successRate-e.successRate).slice(0,6);return`
      <section class="perf-section">
        <h4>Visual Analytics</h4>
        <div class="perf-charts-row">
          ${this.svgBarChart(t?t.attempts.map(e=>({label:e.provider,value:e.latencyMs||0})):[],`Response Time (latest pipeline)`)}
          ${this.svgLineChart(o.map(e=>({label:new Date(e.finishedAt).toLocaleTimeString(),value:e.winner.latencyMs||0})),`Response Time Trend`)}
          ${this.svgHistogram(n.map(e=>e.latencyMs).filter(e=>typeof e==`number`),`Latency Distribution`)}
        </div>
        <div class="perf-charts-row">
          ${this.svgDonutWithCenterKpi(`Success vs Failure`,[{label:`Success`,value:i,color:`var(--moss)`},{label:`Failure`,value:a,color:`var(--rust)`}],i+a>0?`${Math.round(i/(i+a)*100)}%`:`—`,`Success Rate`)}
          ${this.svgDonutWithCenterKpi(`Provider Usage`,e.slice(0,5).map((e,t)=>({label:e.provider,value:e.totalRequests,color:[`var(--amber)`,`var(--azure)`,`var(--moss)`,`var(--rust)`,`var(--ink-dim)`][t%5]})),String(e.reduce((e,t)=>e+t.totalRequests,0)),`Total Requests`)}
          ${this.svgRankingChart(s)}
        </div>
      </section>`}static BAR_3D_DX=3;static BAR_3D_DY=-4;bar3d(e,t,n,r,i,a){let o=v.BAR_3D_DX,s=v.BAR_3D_DY,c=`<polygon points="${e},${t} ${e+o},${t+s} ${e+n+o},${t+s} ${e+n},${t}" fill="${i}" opacity="0.85"/>`;return`<g><title>${a}</title>${`<polygon points="${e+n},${t} ${e+n+o},${t+s} ${e+n+o},${t+r+s} ${e+n},${t+r}" fill="${i}" opacity="0.55"/>`}${c}${`<rect x="${e}" y="${t}" width="${n}" height="${r}" fill="${i}"/>`}</g>`}svgBarChart(e,t,n=`ms`){if(e.length===0)return`<div class="perf-chart-box"><div class="perf-chart-title">${d(t)}</div><p class="hint">No pipeline yet.</p></div>`;let r=v.BAR_3D_DX,i=-v.BAR_3D_DY,a=r+4,o=14+i,s=Math.max(1,...e.map(e=>e.value)),c=126-o,l=(236-a)/e.length,u=Math.max(2,l-10),f=e.map((e,t)=>{let r=Math.max(2,e.value/s*c),a=4+t*l+(l-u)/2,o=126-r,f=`${Math.round(e.value)}${n}`;return`
        ${this.bar3d(a,o,u,r,`var(--amber)`,`${d(e.label)}: ${f}`)}
        <text x="${a+u/2}" y="${o-i-3}" text-anchor="middle" class="perf-chart-value-label">${d(f)}</text>
        <text x="${a+u/2}" y="144" text-anchor="middle" class="perf-chart-axis-label">${d(h(e.label,10))}</text>`}).join(``);return`<div class="perf-chart-box"><div class="perf-chart-title">${d(t)}</div><svg viewBox="0 0 240 150" class="perf-chart-svg perf-chart-svg-tall"><line x1="4" y1="126" x2="${240-a+r}" y2="126" class="perf-chart-baseline"/>${f}</svg></div>`}svgLineChart(e,t){if(e.length<2)return`<div class="perf-chart-box"><div class="perf-chart-title">${d(t)}</div><p class="hint">Needs at least 2 completed pipelines.</p></div>`;let n=Math.max(1,...e.map(e=>e.value)),r=220/(e.length-1),i=e.map((e,t)=>({x:10+t*r,y:128-e.value/n*112,d:e})),a=i.map(e=>`${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(` `),o=Math.ceil(e.length/6),s=i.map((e,t)=>`
      <circle cx="${e.x.toFixed(1)}" cy="${e.y.toFixed(1)}" r="2.5" fill="var(--azure)"><title>${d(e.d.label)}: ${Math.round(e.d.value)}ms</title></circle>
      ${t%o===0||t===i.length-1?`<text x="${e.x.toFixed(1)}" y="${(e.y-6).toFixed(1)}" text-anchor="middle" class="perf-chart-value-label">${Math.round(e.d.value)}</text>`:``}
      ${t%o===0||t===i.length-1?`<text x="${e.x.toFixed(1)}" y="144" text-anchor="middle" class="perf-chart-axis-label">${d(e.d.label)}</text>`:``}
    `).join(``);return`<div class="perf-chart-box"><div class="perf-chart-title">${d(t)}</div><svg viewBox="0 0 240 150" class="perf-chart-svg perf-chart-svg-tall"><line x1="10" y1="128" x2="230" y2="128" class="perf-chart-baseline"/><polyline points="${a}" fill="none" stroke="var(--azure)" stroke-width="1.5"/>${s}</svg></div>`}svgHistogram(e,t){if(e.length===0)return`<div class="perf-chart-box"><div class="perf-chart-title">${d(t)}</div><p class="hint">No latency data yet.</p></div>`;let n=Math.min(6,Math.max(3,Math.ceil(Math.sqrt(e.length)))),r=Math.min(...e),i=Math.max(...e),a=Math.max(1,(i-r)/n),o=Array(n).fill(0);for(let t of e){let e=Math.min(n-1,Math.floor((t-r)/a));o[e]++}let s=v.BAR_3D_DX,c=-v.BAR_3D_DY,l=s+4,u=126-(14+c),f=Math.max(1,...o),p=(236-l)/n,m=Math.max(2,p-6),h=o.map((e,t)=>{let n=e>0?Math.max(2,e/f*u):0,i=4+t*p+(p-m)/2,o=126-n,s=Math.round(r+t*a),l=Math.round(r+(t+1)*a),d=`${s}-${l}`;return`
        ${e>0?this.bar3d(i,o,m,n,`var(--moss)`,`${s}-${l}ms: ${e} call(s)`):``}
        ${e>0?`<text x="${i+m/2}" y="${o-c-3}" text-anchor="middle" class="perf-chart-value-label">${e}</text>`:``}
        <text x="${i+m/2}" y="144" text-anchor="middle" class="perf-chart-axis-label">${d}</text>`}).join(``);return`<div class="perf-chart-box"><div class="perf-chart-title">${d(t)}</div><svg viewBox="0 0 240 150" class="perf-chart-svg perf-chart-svg-tall"><line x1="4" y1="126" x2="${240-l+s}" y2="126" class="perf-chart-baseline"/>${h}</svg><div class="hint" style="font-size:9.5px;">ms per bucket</div></div>`}svgRankingChart(e){return e.length===0?`<div class="perf-chart-box"><div class="perf-chart-title">Provider Ranking</div><p class="hint">No data yet.</p></div>`:`<div class="perf-chart-box" style="flex-basis:100%; align-items:stretch;"><div class="perf-chart-title">Provider Ranking (by success rate)</div><div class="perf-bars">${e.map(e=>`
      <div class="perf-bar-row" title="${d(e.provider)}: ${m(e.successRate)} success">
        <span class="perf-bar-label">${d(e.provider)}</span>
        <span class="perf-bar-track"><span class="perf-bar-fill" style="width:${Math.max(4,e.successRate)}%; background:${e.successRate>=70?`var(--moss)`:e.successRate>=40?`var(--amber)`:`var(--rust)`};"></span></span>
        <span class="perf-bar-value">${m(e.successRate)}</span>
      </div>`).join(``)}</div></div>`}svgDonutWithCenterKpi(e,t,n,r){let i=t.reduce((e,t)=>e+t.value,0);if(i<=0)return`<div class="perf-chart-box"><div class="perf-chart-title">${d(e)}</div><p class="hint">No data yet.</p></div>`;let a=2*Math.PI*40,o=0,s=t.filter(e=>e.value>0).map(e=>{let t=e.value/i*a,n=`<circle cx="50" cy="50" r="40" fill="none" stroke="${e.color}" stroke-width="14" stroke-dasharray="${t.toFixed(2)} ${(a-t).toFixed(2)}" stroke-dashoffset="${(-o).toFixed(2)}" transform="rotate(-90 50 50)"><title>${d(e.label)}: ${e.value}</title></circle>`;return o+=t,n}).join(``),c=t.filter(e=>e.value>0).map(e=>`<div class="perf-legend-item"><span class="perf-legend-dot" style="background:${e.color};"></span>${d(e.label)} (${e.value})</div>`).join(``);return`<div class="perf-chart-box">
      <div class="perf-chart-title">${d(e)}</div>
      <div class="perf-donut-kpi-wrap">
        <svg viewBox="0 0 100 100" class="perf-chart-svg perf-donut-flat">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--bg-raised)" stroke-width="14"/>
          ${s}
        </svg>
        <div class="perf-donut-kpi-center">
          <div class="perf-donut-kpi-value">${d(n)}</div>
          <div class="perf-donut-kpi-label">${d(r)}</div>
        </div>
      </div>
      <div class="perf-legend">${c}</div>
    </div>`}renderPipelineInspector(e){return e?`
      <section class="perf-section">
        <h4>Pipeline Inspector <span class="hint">(latest pipeline — click a row to expand)</span></h4>
        <div class="perf-table-wrap">
          <table class="perf-table">
            <thead><tr><th>Stage</th><th>Provider</th><th>Model</th><th>Start</th><th>Finish</th><th>Duration</th><th>Status</th><th>Retries</th><th>Fallback Used</th></tr></thead>
            <tbody>${e.attempts.map((t,n)=>`
      <tr class="perf-expandable-row" data-perf-expand="${e.requestId}-${n}">
        <td>${n+1}</td>
        <td>${d(t.provider)}</td>
        <td>${d(t.model||`—`)}</td>
        <td>${new Date(t.timestamp-(t.latencyMs||0)).toLocaleTimeString()}</td>
        <td>${new Date(t.timestamp).toLocaleTimeString()}</td>
        <td>${p(t.latencyMs)}</td>
        <td><span class="perf-status-dot" style="background:${t.failureReason?`var(--rust)`:`var(--moss)`};"></span>${t.failureReason?`Failed`:t.winner?`Winner`:`OK (not used)`}</td>
        <td>${t.retryCount??`—`}</td>
        <td>${n>0?`Yes`:`No`}</td>
      </tr>
      <tr class="perf-expand-body" id="perf-expand-${e.requestId}-${n}" style="display:none;">
        <td colspan="9">
          <div class="perf-kv-grid">
            <div><span class="perf-kv-label">Request ID</span>${d(t.requestId)}</div>
            <div><span class="perf-kv-label">Pipeline ID</span>${d(e.requestId)}</div>
            <div><span class="perf-kv-label">Execution Order</span>${n+1} of ${e.attempts.length}</div>
            <div><span class="perf-kv-label">Provider Type</span>${d(t.providerType||`—`)}</div>
            <div><span class="perf-kv-label">Finished At</span>${new Date(t.timestamp).toLocaleString()}</div>
            <div><span class="perf-kv-label">Input Tokens</span>${t.tokens?.prompt??`—`}</div>
            <div><span class="perf-kv-label">Output Tokens</span>${t.tokens?.completion??`—`}</div>
            <div><span class="perf-kv-label">Total Tokens</span>${t.tokens?.total??`—`}</div>
            <div><span class="perf-kv-label">Failure Reason</span>${d(t.failureReason||`—`)}</div>
            ${t.params?Object.entries(t.params).map(([e,t])=>`<div><span class="perf-kv-label">${d(e)}</span>${d(String(t))}</div>`).join(``):``}
          </div>
        </td>
      </tr>`).join(``)}</tbody>
          </table>
        </div>
      </section>`:``}naSpan(){return`<span class="perf-na">Not Available</span>`}inspectorKv(e){return`<div class="perf-kv-grid">${e.map(([e,t])=>`<div><span class="perf-kv-label">${d(e)}</span>${t==null||t===``?this.naSpan():d(String(t))}</div>`).join(``)}</div>`}friendlyModelType(e){return e&&{text:`LLM`,coding:`LLM (Code)`,agents:`LLM (Agent)`,research:`LLM (Research)`,vision:`Vision`,image:`Image Generation`,video:`Video Generation`,speech:`Audio (TTS)`,audio:`Audio (STT)`,music:`Audio (Music)`,embeddings:`Embedding`,autonomous:`Vision (Object Detection)`,gamegen:`LLM (Code)`}[e]||e||`Unknown`}friendlyApiCompat(e){return e?e===`openai-compatible`||e===`openrouter`||e===`groq`?`OpenAI Compatible`:e===`transformers`||e===`webllm`?`Local Runtime (in-browser)`:e===`ollama`?`Local Runtime (Ollama server)`:`Native API`:`Unknown`}renderModelInspector(e){if(!e||e.attempts.length===0)return``;let i=e.winner||e.attempts[e.attempts.length-1],a=this.kernel.getProviderManager().getProviders().find(e=>e.name===i.provider),o=a?.adapterId===`transformers`||a?.adapterId===`webllm`,s=i.model?r(i.model):void 0,c=i.model?Object.values(n()).find(e=>e.modelId===i.model):void 0,l=i.timestamp-(i.latencyMs||0),u=i.tokens?.completion&&i.latencyMs?(i.tokens.completion/(i.latencyMs/1e3)).toFixed(1):void 0,f=i.params?.contextWindow??s?.contextLength,p=i.tokens?.total??(i.tokens?.prompt!==void 0&&i.tokens?.completion!==void 0?i.tokens.prompt+i.tokens.completion:void 0),m=f&&p?`${Math.min(100,Math.round(p/f*100))}%`:void 0;return`
      <section class="perf-section">
        <h4>Model Parameter Inspector <span class="hint">(${e.winner?`pipeline winner`:`most recent attempt — no winner yet`} — ${d(i.provider)}${i.model?` / ${d(i.model)}`:``})</span></h4>

        <details class="perf-inspector-details" open>
          <summary>Model Overview</summary>
          ${this.inspectorKv([[`Provider`,i.provider],[`Model Name`,i.model],[`Model ID`,i.model],[`Model Family`,s?.family],[`Model Version`,s?.version],[`Model Type`,this.friendlyModelType(i.providerType)],[`Quantization`,s?.quantization],[`Backend Compatibility`,s?.backendCompatibility],[`Supported Languages`,s?.supportedLanguages?.join(`, `)],[`Release Date`,void 0],[`Parameter Count`,void 0],[`Architecture`,void 0],[`Fine-tuning Info`,void 0],[`Precision`,void 0]])}
        </details>

        ${e.attempts.length>1?`
        <details class="perf-inspector-details">
          <summary>Competing Models (${e.attempts.length} in this pipeline)</summary>
          <p class="hint">Every provider/model that raced for this pipeline, not just the winner — each with whatever parameters and result it actually reported.</p>
          ${e.attempts.map(e=>`
            <div class="perf-competing-model ${e.winner?`perf-competing-model-winner`:``}">
              <div class="perf-competing-model-header">
                ${e.winner?`🏆 `:``}<strong>${d(e.provider)}</strong>${e.model?` / ${d(e.model)}`:``}
                <span class="perf-status-dot" style="background:${e.failureReason?`var(--rust)`:`var(--moss)`};"></span>${e.failureReason?`Failed`:e.winner?`Winner`:`OK (not used)`}
              </div>
              ${this.inspectorKv([[`Latency`,e.latencyMs===void 0?void 0:`${Math.round(e.latencyMs)}ms`],[`Retry Count`,e.retryCount],[`Input Tokens`,e.tokens?.prompt],[`Output Tokens`,e.tokens?.completion],[`Failure Reason`,e.failureReason],...e.params?Object.entries(e.params).map(([e,t])=>[e,String(t)]):[]])}
            </div>`).join(``)}
        </details>`:``}

        <details class="perf-inspector-details">
          <summary>Generation Parameters (winner)</summary>
          ${this.inspectorKv(i.params&&Object.keys(i.params).length>0?Object.entries(i.params).map(([e,t])=>[e,String(t)]):[[`Parameters`,void 0]])}
          <p class="hint">Only parameters this specific request actually reported are listed — MAGENAIS doesn't estimate unset ones.</p>
        </details>

        <details class="perf-inspector-details">
          <summary>Context &amp; Tokens</summary>
          ${this.inspectorKv([[`Max Context Window`,f],[`Input Tokens`,i.tokens?.prompt],[`Output Tokens`,i.tokens?.completion],[`Total Tokens`,p],[`Context Utilization`,m],[`System/User/Tool Token Breakdown`,void 0]])}
        </details>

        <details class="perf-inspector-details">
          <summary>Capabilities</summary>
          ${this.inspectorKv([[`Vision-only Provider`,a?.visionOnly?`Yes`:a?`No`:void 0],[`Declared Capabilities`,a?.capabilities?.join(`, `)],[`Local Model Capabilities`,s?.capabilities?.join(`, `)],[`Streaming (this request)`,i.params?.stream===void 0?void 0:String(i.params.stream)],[`JSON Mode (this request)`,i.params?.jsonMode===void 0?void 0:String(i.params.jsonMode)],[`Function Calling (this request)`,i.params?.functionCalling===void 0?void 0:String(i.params.functionCalling)],[`Thinking/Reasoning (this request)`,i.params?.thinking===void 0?i.params?.reasoning===void 0?void 0:String(i.params.reasoning):String(i.params.thinking)]])}
        </details>

        <details class="perf-inspector-details">
          <summary>API Request Information</summary>
          ${this.inspectorKv([[`API Compatibility`,this.friendlyApiCompat(a?.adapterId)],[`Streaming Status`,i.params?.stream===void 0?void 0:String(i.params.stream)],[`Request Timestamp`,new Date(l).toLocaleString()],[`Response Timestamp`,new Date(i.timestamp).toLocaleString()],[`Total Latency`,`${Math.round(i.latencyMs||0)}ms`],[`Time to First Token`,void 0],[`Generation Speed`,u?`${u} tokens/sec`:void 0],[`Retry Count`,i.retryCount],[`Winner (this pipeline)`,i.winner?`Yes`:`No`]])}
        </details>

        <details class="perf-inspector-details">
          <summary>Provider Configuration</summary>
          ${this.inspectorKv([[`Provider Name`,a?.name],[`Endpoint`,a?.baseUrl],[`Auth Status`,a?a.noKeyNeeded?`No key required`:a.apiKey?`Key configured`:`Key missing`:void 0],[`Default Model`,a?.defaultModel],[`Priority`,a?.priority],[`Requires Backend Proxy`,a?a.requiresServerProxy?`Yes`:`No`:void 0],[`Rate Limits`,void 0],[`Remaining Quota`,void 0]])}
        </details>

        ${o?`
        <details class="perf-inspector-details">
          <summary>Local AI Runtime Information</summary>
          ${this.inspectorKv([[`Runtime`,a?.adapterId===`webllm`?`WebLLM`:`Transformers.js (ONNX Runtime Web)`],[`Backend`,c?.device===`webgpu`?`WebGPU`:c?.device===`wasm`?`WASM`:void 0],[`Download Size`,c?.bytesTotal?t(c.bytesTotal):s?.downloadSizeMB?`~${s.downloadSizeMB}MB`:void 0],[`Cached/Downloaded Size`,c?.bytesDownloaded?t(c.bytesDownloaded):void 0],[`Loaded Status`,c?.status],[`Approx. RAM Requirement`,s?.ramRequirementMB?`~${s.ramRequirementMB}MB`:void 0],[`Memory Usage (JS heap, whole page)`,performance.memory?.usedJSHeapSize?t(performance.memory.usedJSHeapSize):void 0],[`Loading Time`,void 0]])}
        </details>`:``}

        <details class="perf-inspector-details">
          <summary>Execution Trace</summary>
          <div class="perf-trace">
            <div class="perf-trace-step"><span class="perf-trace-dot"></span>Request Created — ${new Date(l).toLocaleTimeString()}</div>
            <div class="perf-trace-line"></div>
            <div class="perf-trace-step"><span class="perf-trace-dot"></span>Provider Selected — ${d(i.provider)}</div>
            <div class="perf-trace-line"></div>
            <div class="perf-trace-step perf-trace-na"><span class="perf-trace-dot"></span>Model Loaded — ${this.naSpan()} (not tracked as a separate stage)</div>
            <div class="perf-trace-line"></div>
            <div class="perf-trace-step perf-trace-na"><span class="perf-trace-dot"></span>First Token Generated — ${this.naSpan()} (not tracked)</div>
            <div class="perf-trace-line"></div>
            <div class="perf-trace-step ${i.failureReason?`perf-trace-error`:`perf-trace-ok`}"><span class="perf-trace-dot"></span>${i.failureReason?`Failed — ${d(i.failureReason)}`:`Generation Completed`} — ${new Date(i.timestamp).toLocaleTimeString()} (${Math.round(i.latencyMs||0)}ms total)</div>
          </div>
        </details>

        <details class="perf-inspector-details">
          <summary>Raw Debug</summary>
          <div class="hint">Raw event (as recorded):</div>
          <pre class="perf-raw-json">${d(JSON.stringify(i,null,2))}</pre>
          <div class="hint">Matching provider configuration (API key redacted):</div>
          <pre class="perf-raw-json">${d(JSON.stringify(a?{...a,apiKey:a.apiKey?`[redacted]`:void 0}:null,null,2))}</pre>
        </details>
      </section>`}wireExpandableRows(){document.querySelectorAll(`.perf-expandable-row`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.perfExpand,n=document.getElementById(`perf-expand-${t}`);n&&(n.style.display=n.style.display===`none`?`table-row`:`none`)})})}renderActivityFeed(e){let t=[...e].reverse().slice(0,40);return t.length===0?`<section class="perf-section"><h4>Real-Time Activity Feed</h4><p class="hint">No activity matches the current filters.</p></section>`:`<section class="perf-section"><h4>Real-Time Activity Feed</h4><div class="perf-feed">${t.map(e=>{let t=e.failureReason?`Provider Failed`:e.winner?`Provider Completed (winner)`:`Provider Completed`;return`<div class="perf-feed-row">
        <span class="perf-feed-time">${new Date(e.timestamp).toLocaleTimeString()}</span>
        <span class="perf-status-dot" style="background:${e.failureReason?`var(--rust)`:`var(--moss)`};"></span>
        <span class="perf-feed-provider">${d(e.provider)}</span>
        <span class="hint">${d(e.model||``)}</span>
        <span class="perf-feed-stage">${d(e.providerType||``)}</span>
        <span class="perf-feed-event">${d(t)}${e.failureReason?`: ${d(e.failureReason)}`:``}</span>
      </div>`}).join(``)}</div></section>`}renderSessionHistory(){let e=[...a()].reverse().slice(0,30);return e.length===0?``:`
      <section class="perf-section">
        <h4>Session History <button class="ghost-btn small" id="perfClearHistory">Clear</button></h4>
        <div class="perf-table-wrap">
          <table class="perf-table">
            <thead><tr><th>When</th><th>Mode</th><th>Winner</th><th>Model</th><th>Duration</th><th>Providers</th><th>Status</th></tr></thead>
            <tbody>${e.map(e=>`
      <tr>
        <td>${new Date(e.timestamp).toLocaleString()}</td>
        <td>${d(e.type||`—`)}</td>
        <td>${d(e.winnerProvider||`—`)}</td>
        <td>${d(e.winnerModel||`—`)}</td>
        <td>${p(e.durationMs)}</td>
        <td>${e.providersUsed}</td>
        <td><span class="perf-status-dot" style="background:${e.status===`success`?`var(--moss)`:`var(--rust)`};"></span>${d(e.status)}</td>
      </tr>`).join(``)}</tbody>
          </table>
        </div>
      </section>`}buildFullExportPayload(){let e=i.getRecentEvents(),t=u(e),n=c(e),r=this.kernel.getProviderManager().getProviders(void 0,!0).length,o=l(t,r),s=a();return{exportedAt:new Date().toISOString(),snapshot:o,aggregates:t,pipelines:n,events:e,sessionHistory:s}}exportJson(){g(`magenais-performance-${Date.now()}.json`,JSON.stringify(this.buildFullExportPayload(),null,2),`application/json`)}exportCsv(){let{snapshot:e,aggregates:t,pipelines:n,events:r,sessionHistory:i}=this.buildFullExportPayload(),a=e=>`"${String(e??``).replace(/"/g,`""`)}"`,o=e=>e.map(a).join(`,`),s=[];s.push(`# MAGENAIS AI Performance — full export`),s.push(o([`Exported at`,new Date().toISOString()])),s.push(``),s.push(`## Snapshot (KPIs)`),s.push(o([`Fastest Provider`,`Most Reliable Provider`,`Recommended Provider`,`Avg Latency (ms)`,`Success Rate (%)`,`Active Providers`])),s.push(o([e.fastestProvider||``,e.mostReliableProvider||``,e.recommendedProvider||``,Math.round(e.avgLatencyMs),Math.round(e.successRate),e.activeProviders])),s.push(``),s.push(`## Provider Aggregates`),s.push(o([`Provider`,`Model`,`Total Requests`,`Successes`,`Failures`,`Timeouts`,`Retries`,`Success Rate (%)`,`Avg Latency (ms)`,`Last Latency (ms)`,`Last Status`,`Last Success At`,`Last Failure At`]));for(let e of t)s.push(o([e.provider,e.model||``,e.totalRequests,e.successCount,e.failureCount,e.timeoutCount,e.retryCount,Math.round(e.successRate),Math.round(e.avgLatencyMs),e.lastLatencyMs??``,e.lastStatus,e.lastSuccessAt?new Date(e.lastSuccessAt).toISOString():``,e.lastFailureAt?new Date(e.lastFailureAt).toISOString():``]));s.push(``),s.push(`## Pipelines (grouped by requestId)`),s.push(o([`Request ID`,`Mode`,`Started At`,`Finished At`,`Duration (ms)`,`Status`,`Winner Provider`,`Winner Model`,`Providers Used`,`Successful`,`Failed`]));for(let e of n)s.push(o([e.requestId,e.type||``,new Date(e.startedAt).toISOString(),new Date(e.finishedAt).toISOString(),e.durationMs,e.status,e.winner?.provider||``,e.winner?.model||``,e.attempts.length,e.attempts.filter(e=>!e.failureReason).length,e.attempts.filter(e=>e.failureReason).length]));s.push(``),s.push(`## Raw Events (every recorded attempt, every field)`),s.push(o([`Timestamp`,`Request ID`,`Provider`,`Model`,`Mode`,`Latency (ms)`,`Winner`,`Retry Count`,`Input Tokens`,`Output Tokens`,`Total Tokens`,`Failure Reason`,`Params (JSON)`]));for(let e of r)s.push(o([new Date(e.timestamp).toISOString(),e.requestId,e.provider,e.model||``,e.providerType||``,e.latencyMs??``,e.winner?`true`:`false`,e.retryCount??``,e.tokens?.prompt??``,e.tokens?.completion??``,e.tokens?.total??``,e.failureReason||``,e.params?JSON.stringify(e.params):``]));s.push(``),s.push(`## Session History (persisted across page reloads)`),s.push(o([`When`,`Mode`,`Winner Provider`,`Winner Model`,`Duration (ms)`,`Providers Used`,`Status`,`Request ID`]));for(let e of i)s.push(o([new Date(e.timestamp).toISOString(),e.type||``,e.winnerProvider||``,e.winnerModel||``,e.durationMs,e.providersUsed,e.status,e.requestId]));g(`magenais-performance-${Date.now()}.csv`,s.join(`
`),`text/csv`)}};export{v as PerformanceDashboardModal};