import{a as e,i as t,n,o as r,r as i,t as a}from"./bootstrap-GZq2zidF.js";import{n as o}from"./RenderMarkdown-CGJFrJ6c.js";import{t as s}from"./Mode-BHmu2V6h.js";import{i as c,r as l}from"./SymbiosisHandoff-DkpRyW56.js";import{t as u}from"./StudioIcons-D-3aSSGL.js";import{t as d}from"./ModelHandoff-C8-onsq0.js";function f(n,a={}){r(n);let{ranking:o}=e(n),s=o[0]?.optionId??null,{dsi:c}=s?t(n,s,{trials:a.perturbationTrials,magnitude:a.perturbationMagnitude,seed:a.seed}):{dsi:1};return{ranking:o,topOptionId:s,dsi:c,dfp:s?i(n,s,{maxRange:a.maxFlipSearchRange,step:a.flipSearchStep}):[]}}function p(e){return e.replace(/\s+/g,` `).trim()}function m(e,t,n){return e.map((e,r)=>{let i=e.text?.trim();if(!i)throw new oe(t,r);return{id:`${n}-${r+1}`,text:i,origin:e.origin}})}function h(e,t){return e.map((e,n)=>{let r=e.text?.trim();if(!r)throw new ce(t,n);return{id:`${t}-${n+1}`,text:r,origin:e.origin}})}function ee(e,t){return e.map((e,n)=>{let r=e.capability?.trim();if(!r)throw new ue(n);let i=t.providersOf(r);return{id:`capability-${n+1}`,capability:r,origin:e.origin,providers:i,satisfied:i.length>0}})}var te=class extends Error{constructor(){super(`Meta-Intelligence intake requires a non-empty problem statement.`),this.name=`EmptyProblemStatementError`}},ne=class extends Error{constructor(e){super(`Meta-Intelligence task already exists: ${e}`),this.name=`MetaIntelligenceTaskAlreadyExistsError`}},re=class extends Error{constructor(e){super(`Meta-Intelligence task not found: ${e}`),this.name=`MetaIntelligenceTaskNotFoundError`}},ie=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'received' stage (currently '${t}'); understand() requires 'received'.`),this.name=`MetaIntelligenceTaskNotAtReceivedStageError`}},ae=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'understood' stage (currently '${t}'); addGoalsConstraints() requires 'understood'.`),this.name=`MetaIntelligenceTaskNotAtUnderstoodStageError`}},oe=class extends Error{constructor(e,t){super(`Meta-Intelligence addGoalsConstraints() requires a non-empty text for ${e} at index ${t}.`),this.name=`EmptyGoalOrConstraintTextError`}},se=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'goals-constraints' stage (currently '${t}'); addEpistemicTracking() requires 'goals-constraints'.`),this.name=`MetaIntelligenceTaskNotAtGoalsConstraintsStageError`}},ce=class extends Error{constructor(e,t){super(`Meta-Intelligence addEpistemicTracking() requires a non-empty text for ${e} at index ${t}.`),this.name=`EmptyEpistemicItemTextError`}},le=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'epistemic-tracking' stage (currently '${t}'); decomposeCapabilities() requires 'epistemic-tracking'.`),this.name=`MetaIntelligenceTaskNotAtEpistemicTrackingStageError`}},ue=class extends Error{constructor(e){super(`Meta-Intelligence decomposeCapabilities() requires a non-empty capability name at index ${e}.`),this.name=`EmptyCapabilityRequirementError`}},de=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'capability-decomposition' stage (currently '${t}'); generateCandidateStrategies() requires 'capability-decomposition'.`),this.name=`MetaIntelligenceTaskNotAtCapabilityDecompositionStageError`}},fe=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" has no capability decomposition yet (currently '${t}'); generateStrategies() requires an already-'capability-decomposition' (or later) task.`),this.name=`MetaIntelligenceTaskMissingCapabilityDecompositionError`}},pe=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" already has generated strategies; generateStrategies() cannot be called twice for the same task.`),this.name=`MetaIntelligenceStrategiesAlreadyGeneratedError`}},g=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" has no generated strategies yet; generateStrategyAlternatives() requires generateStrategies() to have run first.`),this.name=`MetaIntelligenceStrategiesNotYetGeneratedError`}},me=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" already has generated strategy alternatives; generateStrategyAlternatives() cannot be called twice for the same task.`),this.name=`MetaIntelligenceStrategyAlternativesAlreadyGeneratedError`}},he=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" has no generated strategies yet; evaluateStrategyOptions() requires generateStrategies() to have run first.`),this.name=`MetaIntelligenceTaskMissingStrategiesError`}},ge=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" already has an evaluated set of strategy options; evaluateStrategyOptions() cannot be called twice for the same task.`),this.name=`MetaIntelligenceStrategyOptionsAlreadyEvaluatedError`}},_e=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'candidate-strategies' stage (currently '${t}'); evaluateStrategies() requires 'candidate-strategies'.`),this.name=`MetaIntelligenceTaskNotAtCandidateStrategiesStageError`}},_=class extends Error{constructor(e){super(`Meta-Intelligence evaluateStrategies(): ${e}`),this.name=`InvalidStrategyEvaluationError`}},v=class extends Error{constructor(e){super(`Meta-Intelligence evaluateStrategyOptions(): ${e}`),this.name=`InvalidStrategyOptionsEvaluationError`}},ve=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'strategy-evaluation' stage (currently '${t}'); governAction() requires 'strategy-evaluation'.`),this.name=`MetaIntelligenceTaskNotAtStrategyEvaluationStageError`}},ye=class extends Error{constructor(e){super(`Meta-Intelligence governAction() requires decision to be one of 'ACT' | 'WAIT' | 'ASK' | 'SIMULATE' (got ${JSON.stringify(e)}).`),this.name=`InvalidGovernanceDecisionError`}},be=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" cannot be governed to 'ACT': its strategy-evaluation selection is not 'selected'.`),this.name=`MetaIntelligenceActionNotSelectableError`}},xe=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" has no evaluated strategy options yet; authorizeComposition() requires evaluateStrategyOptions() to have run first.`),this.name=`MetaIntelligenceTaskMissingStrategyOptionsEvaluationError`}},Se=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" already has a composition boundary; authorizeComposition() cannot be called twice for the same task.`),this.name=`MetaIntelligenceCompositionAlreadyBoundError`}},Ce=class extends Error{constructor(e){super(`Meta-Intelligence authorizeComposition() requires decision to be one of 'ACT' | 'WAIT' | 'ASK' | 'SIMULATE' (got ${JSON.stringify(e)}).`),this.name=`InvalidCompositionDecisionError`}},we=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" cannot be composed to 'ACT': its strategy-options-evaluation selection is not 'selected'.`),this.name=`MetaIntelligenceCompositionNotAuthorizableError`}},Te=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" has no composition boundary yet; buildExecutionPlan() requires authorizeComposition() to have run first.`),this.name=`MetaIntelligenceTaskMissingCompositionBoundaryError`}},Ee=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" already has an execution plan; buildExecutionPlan() cannot be called twice for the same task.`),this.name=`MetaIntelligenceExecutionPlanAlreadyBuiltError`}},De=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" cannot have an execution plan built: its composition boundary decision is not 'ACT'.`),this.name=`MetaIntelligenceExecutionPlanNotAuthorizedError`}},y=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" has an 'ACT'-decided composition boundary with no components; buildExecutionPlan() cannot derive a plan from it.`),this.name=`MetaIntelligenceExecutionPlanComponentsMissingError`}},b=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'action-governance' stage (currently '${t}'); recordResult() requires 'action-governance'.`),this.name=`MetaIntelligenceTaskNotAtActionGovernanceStageError`}},x=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" cannot have a result recorded: its governance decision is '${t}', not 'ACT' or 'SIMULATE'.`),this.name=`MetaIntelligenceResultNotRepresentableError`}},S=class extends Error{constructor(e){super(`Meta-Intelligence recordResult() requires status to be one of 'succeeded' | 'failed' | 'not-yet-executed' (got ${JSON.stringify(e)}).`),this.name=`InvalidResultStatusError`}},C=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" has no execution plan yet; recordExecutionOutcome() requires buildExecutionPlan() to have run first.`),this.name=`MetaIntelligenceTaskMissingExecutionPlanError`}},w=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" already has an execution outcome recorded; recordExecutionOutcome() cannot be called twice for the same task.`),this.name=`MetaIntelligenceExecutionResultAlreadyRecordedError`}},T=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" is not at the 'result-verification' stage (currently '${t}'); recordAdaptation() requires 'result-verification'.`),this.name=`MetaIntelligenceTaskNotAtResultVerificationStageError`}},E=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" cannot have an adaptation recorded: its verification outcome is '${t}', not 'goals-not-met' or 'insufficient-basis'.`),this.name=`MetaIntelligenceAdaptationNotRepresentableError`}},D=class extends Error{constructor(e){super(`Meta-Intelligence recordAdaptation() requires decision to be one of 'retry' | 're-plan' | 'escalate' | 'accept' (got ${JSON.stringify(e)}).`),this.name=`InvalidAdaptationDecisionError`}},Oe=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" has no execution verification yet; recordExecutionAdaptation() requires recordExecutionOutcome() to have run first.`),this.name=`MetaIntelligenceTaskMissingExecutionVerificationError`}},ke=class extends Error{constructor(e,t){super(`Meta-Intelligence task "${e}" cannot have an execution adaptation recorded: its execution verification outcome is '${t}', not 'goals-not-met' or 'insufficient-basis'.`),this.name=`MetaIntelligenceExecutionAdaptationNotRepresentableError`}},Ae=class extends Error{constructor(e){super(`Meta-Intelligence task "${e}" already has an execution adaptation recorded; recordExecutionAdaptation() cannot be called twice for the same task.`),this.name=`MetaIntelligenceExecutionAdaptationAlreadyRecordedError`}},O=1e-12,k=[`ACT`,`WAIT`,`ASK`,`SIMULATE`],A=[`succeeded`,`failed`,`not-yet-executed`],je=[`ACT`,`SIMULATE`],j=[`retry`,`re-plan`,`escalate`,`accept`],M=[`goals-not-met`,`insufficient-basis`];function N(e,t){if(e===`not-yet-executed`)return`not-verifiable`;if(e===`failed`)return`goals-not-met`;let n=(t.goalsConstraints?.goals.length??0)>0||(t.goalsConstraints?.constraints.length??0)>0,r=(t.epistemicTracking?.knowns.length??0)>0;return n&&r?`verified-against-basis`:`insufficient-basis`}function P(e){return e===void 0?{present:!1}:{present:!0,value:e}}var F=class{tasks=new Map;nextSeq=1;intake(e){let t=e.statement?.trim();if(!t)throw new te;let n=e.id??`mi-task-${this.nextSeq++}`;if(this.tasks.has(n))throw new ne(n);let r={id:n,problem:{statement:t,receivedAt:new Date().toISOString()},stage:`received`};return this.tasks.set(n,r),r}understand(e){let t=this.getTask(e);if(t.stage!==`received`)throw new ie(e,t.stage);let n={normalizedStatement:p(t.problem.statement),understoodAt:new Date().toISOString()},r={...t,stage:`understood`,understanding:n};return this.tasks.set(e,r),r}addGoalsConstraints(e,t){let n=this.getTask(e);if(n.stage!==`understood`)throw new ae(e,n.stage);let r={goals:m(t.goals,`goal`,`goal`),constraints:m(t.constraints,`constraint`,`constraint`),recordedAt:new Date().toISOString()},i={...n,stage:`goals-constraints`,goalsConstraints:r};return this.tasks.set(e,i),i}addEpistemicTracking(e,t){let n=this.getTask(e);if(n.stage!==`goals-constraints`)throw new se(e,n.stage);let r={knowns:h(t.knowns,`known`),unknowns:h(t.unknowns,`unknown`),assumptions:h(t.assumptions,`assumption`),evidence:h(t.evidence,`evidence`),recordedAt:new Date().toISOString()},i={...n,stage:`epistemic-tracking`,epistemicTracking:r};return this.tasks.set(e,i),i}decomposeCapabilities(e,t,n){let r=this.getTask(e);if(r.stage!==`epistemic-tracking`)throw new le(e,r.stage);let i=ee(n.requirements,t),a=[];for(let e of i)!e.satisfied&&!a.includes(e.capability)&&a.push(e.capability);let o={requirements:i,gaps:a,decomposedAt:new Date().toISOString()},s={...r,stage:`capability-decomposition`,capabilityDecomposition:o};return this.tasks.set(e,s),s}generateCandidateStrategies(e){let t=this.getTask(e);if(t.stage!==`capability-decomposition`||!t.capabilityDecomposition)throw new de(e,t.stage);let n=[];for(let e of t.capabilityDecomposition.requirements)e.satisfied&&n.push({id:`strategy-${n.length+1}`,requirementId:e.id,capability:e.capability,providers:[...e.providers]});let r={candidates:n,generatedAt:new Date().toISOString()},i={...t,stage:`candidate-strategies`,candidateStrategies:r};return this.tasks.set(e,i),i}generateStrategies(e){let t=this.getTask(e);if(!t.capabilityDecomposition)throw new fe(e,t.stage);if(t.strategies)throw new pe(e);let n=[];for(let e of t.capabilityDecomposition.requirements){if(!e.satisfied)continue;let t={requirementId:e.id,capability:e.capability,providers:[...e.providers]};n.push({id:`strategy-${n.length+1}`,components:[t],derivation:`single-requirement`})}let r={strategies:n,generatedAt:new Date().toISOString()},i={...t,strategies:r};return this.tasks.set(e,i),i}generateStrategyAlternatives(e){let t=this.getTask(e);if(!t.strategies)throw new g(e);if(t.strategyAlternatives)throw new me(e);let n=(t.capabilityDecomposition?.requirements??[]).filter(e=>e.satisfied),r=[],i=t.strategies.strategies.length+1;for(let e of n)for(let t of e.providers.slice(1))r.push({id:`strategy-${i++}`,components:[{requirementId:e.id,capability:e.capability,providers:[t]}],derivation:`single-requirement`});n.length>1&&r.push({id:`strategy-${i++}`,components:n.map(e=>({requirementId:e.id,capability:e.capability,providers:[...e.providers]})),derivation:`composed`});let a={strategies:r,generatedAt:new Date().toISOString()},o={...t,strategyAlternatives:a};return this.tasks.set(e,o),o}evaluateStrategies(e,t,n=f){let r=this.getTask(e);if(r.stage!==`candidate-strategies`||!r.candidateStrategies)throw new _e(e,r.stage);let i=t.minStability??null;if(i!==null&&(typeof i!=`number`||!Number.isFinite(i)||i<0||i>1))throw new _(`minStability must be a finite number in [0, 1].`);let a=r.candidateStrategies.candidates,o=a.map(e=>e.id),s=(t.criteria??[]).map(e=>({...e})),c={};for(let e of o){let n=t.scores?.[e];n&&typeof n==`object`&&(c[e]={...n})}let l=[],u=null,d=[],p;if(a.length===0)p={status:`none`,reason:`no-candidates`};else{let e=n({options:o.map(e=>({id:e})),criteria:s,scores:c},t.scorerOptions),r=e.ranking.map(e=>e.optionId);if(r.length!==o.length||new Set(r).size!==r.length||!r.every(e=>o.includes(e)))throw new _(`scorer ranking does not cover exactly this task's candidates.`);if(e.topOptionId!==r[0])throw new _(`scorer topOptionId is not the first-ranked candidate.`);if(typeof e.dsi!=`number`||!Number.isFinite(e.dsi))throw new _(`scorer returned a non-finite dsi.`);l=e.ranking.map(e=>({candidateId:e.optionId,score:e.score,rank:e.rank})),u=e.dsi,d=e.dfp.map(e=>({...e})),p=l.length>1&&Math.abs(l[0].score-l[1].score)<=O?{status:`none`,reason:`tie-for-top`}:i!==null&&u<i?{status:`none`,reason:`below-stability-threshold`}:{status:`selected`,candidateId:l[0].candidateId}}let m={criteria:s,scores:c,ranking:l,dsi:u,dfp:d,minStability:i,selection:p,evaluatedAt:new Date().toISOString()},h={...r,stage:`strategy-evaluation`,strategyEvaluation:m};return this.tasks.set(e,h),h}evaluateStrategyOptions(e,t,n=f){let r=this.getTask(e);if(!r.strategies)throw new he(e);if(r.strategyOptionsEvaluation)throw new ge(e);let i=t.minStability??null;if(i!==null&&(typeof i!=`number`||!Number.isFinite(i)||i<0||i>1))throw new v(`minStability must be a finite number in [0, 1].`);let a=[...r.strategies.strategies,...r.strategyAlternatives?.strategies??[]].map(e=>e.id),o=(t.criteria??[]).map(e=>({...e})),s={};for(let e of a){let n=t.scores?.[e];n&&typeof n==`object`&&(s[e]={...n})}let c=[],l=null,u=[],d;if(a.length===0)d={status:`none`,reason:`no-candidates`};else{let e=n({options:a.map(e=>({id:e})),criteria:o,scores:s},t.scorerOptions),r=e.ranking.map(e=>e.optionId);if(r.length!==a.length||new Set(r).size!==r.length||!r.every(e=>a.includes(e)))throw new v(`scorer ranking does not cover exactly this task's strategy options.`);if(e.topOptionId!==r[0])throw new v(`scorer topOptionId is not the first-ranked strategy option.`);if(typeof e.dsi!=`number`||!Number.isFinite(e.dsi))throw new v(`scorer returned a non-finite dsi.`);c=e.ranking.map(e=>({strategyId:e.optionId,score:e.score,rank:e.rank})),l=e.dsi,u=e.dfp.map(e=>({...e})),d=c.length>1&&Math.abs(c[0].score-c[1].score)<=O?{status:`none`,reason:`tie-for-top`}:i!==null&&l<i?{status:`none`,reason:`below-stability-threshold`}:{status:`selected`,strategyId:c[0].strategyId}}let p={criteria:o,scores:s,ranking:c,dsi:l,dfp:u,minStability:i,selection:d,evaluatedAt:new Date().toISOString()},m={...r,strategyOptionsEvaluation:p};return this.tasks.set(e,m),m}authorizeComposition(e,t){let n=this.getTask(e);if(!n.strategyOptionsEvaluation)throw new xe(e);if(n.compositionBoundary)throw new Se(e);let r=t.decision;if(!k.includes(r))throw new Ce(r);let i=n.strategyOptionsEvaluation.selection;if(r===`ACT`&&i.status!==`selected`)throw new we(e);let a=null;if(i.status===`selected`){let e=[...n.strategies?.strategies??[],...n.strategyAlternatives?.strategies??[]].find(e=>e.id===i.strategyId);a=e?e.components.map(e=>({...e,providers:[...e.providers]})):null}let o=t.reason?.trim(),s={decision:r,selection:{...i},components:a,reason:o||null,boundAt:new Date().toISOString()},c={...n,compositionBoundary:s};return this.tasks.set(e,c),c}buildExecutionPlan(e){let t=this.getTask(e);if(!t.compositionBoundary)throw new Te(e);if(t.executionPlan)throw new Ee(e);if(t.compositionBoundary.decision!==`ACT`)throw new De(e);if(!t.compositionBoundary.components)throw new y(e);let n={steps:t.compositionBoundary.components.map(e=>({...e,providers:[...e.providers]})),derivedAt:new Date().toISOString()},r={...t,executionPlan:n};return this.tasks.set(e,r),r}governAction(e,t){let n=this.getTask(e);if(n.stage!==`strategy-evaluation`||!n.strategyEvaluation)throw new ve(e,n.stage);let r=t.decision;if(!k.includes(r))throw new ye(r);let i=n.strategyEvaluation.selection;if(r===`ACT`&&i.status!==`selected`)throw new be(e);let a=t.reason?.trim(),o={decision:r,selection:{...i},reason:a||null,governedAt:new Date().toISOString()},s={...n,stage:`action-governance`,governance:o};return this.tasks.set(e,s),s}recordResult(e,t){let n=this.getTask(e);if(n.stage!==`action-governance`||!n.governance)throw new b(e,n.stage);let r=n.governance.decision;if(!je.includes(r))throw new x(e,r);let i=t.status;if(!A.includes(i))throw new S(i);let a=t.detail?.trim(),o=new Date().toISOString(),s={status:i,simulated:r===`SIMULATE`,detail:a||null,recordedAt:o},c={outcome:N(i,n),goalIds:(n.goalsConstraints?.goals??[]).map(e=>e.id),constraintIds:(n.goalsConstraints?.constraints??[]).map(e=>e.id),knownIds:(n.epistemicTracking?.knowns??[]).map(e=>e.id),verifiedAt:o},l={...n,stage:`result-verification`,result:s,verification:c};return this.tasks.set(e,l),l}recordExecutionOutcome(e,t){let n=this.getTask(e);if(!n.executionPlan)throw new C(e);if(n.executionResult)throw new w(e);let r=t.status;if(!A.includes(r))throw new S(r);let i=t.detail?.trim(),a=new Date().toISOString(),o={status:r,simulated:!1,detail:i||null,recordedAt:a},s={outcome:N(r,n),goalIds:(n.goalsConstraints?.goals??[]).map(e=>e.id),constraintIds:(n.goalsConstraints?.constraints??[]).map(e=>e.id),knownIds:(n.epistemicTracking?.knowns??[]).map(e=>e.id),verifiedAt:a},c={...n,executionResult:o,executionVerification:s};return this.tasks.set(e,c),c}recordAdaptation(e,t){let n=this.getTask(e);if(n.stage!==`result-verification`||!n.verification)throw new T(e,n.stage);let r=n.verification.outcome;if(!M.includes(r))throw new E(e,r);let i=r,a=t.decision;if(!j.includes(a))throw new D(a);let o={decision:a,outcome:i,reason:t.reason?.trim()||null,adaptedAt:new Date().toISOString()},s={...n,stage:`adaptation`,adaptation:o};return this.tasks.set(e,s),s}recordExecutionAdaptation(e,t){let n=this.getTask(e);if(!n.executionVerification)throw new Oe(e);if(n.executionAdaptation)throw new Ae(e);let r=n.executionVerification.outcome;if(!M.includes(r))throw new ke(e,r);let i=r,a=t.decision;if(!j.includes(a))throw new D(a);let o={decision:a,outcome:i,reason:t.reason?.trim()||null,adaptedAt:new Date().toISOString()},s={...n,executionAdaptation:o};return this.tasks.set(e,s),s}getCognitiveTrace(e){let t=this.getTask(e),n=[];return n.push({field:`problem`,recordedAt:t.problem.receivedAt,idsTouched:[]}),t.understanding&&n.push({field:`understanding`,recordedAt:t.understanding.understoodAt,idsTouched:[]}),t.goalsConstraints&&n.push({field:`goalsConstraints`,recordedAt:t.goalsConstraints.recordedAt,idsTouched:[...t.goalsConstraints.goals.map(e=>e.id),...t.goalsConstraints.constraints.map(e=>e.id)]}),t.epistemicTracking&&n.push({field:`epistemicTracking`,recordedAt:t.epistemicTracking.recordedAt,idsTouched:[...t.epistemicTracking.knowns.map(e=>e.id),...t.epistemicTracking.unknowns.map(e=>e.id),...t.epistemicTracking.assumptions.map(e=>e.id),...t.epistemicTracking.evidence.map(e=>e.id)]}),t.capabilityDecomposition&&n.push({field:`capabilityDecomposition`,recordedAt:t.capabilityDecomposition.decomposedAt,idsTouched:t.capabilityDecomposition.requirements.map(e=>e.id)}),t.candidateStrategies&&n.push({field:`candidateStrategies`,recordedAt:t.candidateStrategies.generatedAt,idsTouched:t.candidateStrategies.candidates.map(e=>e.id)}),t.strategies&&n.push({field:`strategies`,recordedAt:t.strategies.generatedAt,idsTouched:t.strategies.strategies.map(e=>e.id)}),t.strategyAlternatives&&n.push({field:`strategyAlternatives`,recordedAt:t.strategyAlternatives.generatedAt,idsTouched:t.strategyAlternatives.strategies.map(e=>e.id)}),t.strategyEvaluation&&n.push({field:`strategyEvaluation`,recordedAt:t.strategyEvaluation.evaluatedAt,idsTouched:t.strategyEvaluation.selection.status===`selected`?[t.strategyEvaluation.selection.candidateId]:[]}),t.strategyOptionsEvaluation&&n.push({field:`strategyOptionsEvaluation`,recordedAt:t.strategyOptionsEvaluation.evaluatedAt,idsTouched:t.strategyOptionsEvaluation.selection.status===`selected`?[t.strategyOptionsEvaluation.selection.strategyId]:[]}),t.governance&&n.push({field:`governance`,recordedAt:t.governance.governedAt,idsTouched:t.governance.selection.status===`selected`?[t.governance.selection.candidateId]:[]}),t.compositionBoundary&&n.push({field:`compositionBoundary`,recordedAt:t.compositionBoundary.boundAt,idsTouched:t.compositionBoundary.selection.status===`selected`?[t.compositionBoundary.selection.strategyId]:[]}),t.executionPlan&&n.push({field:`executionPlan`,recordedAt:t.executionPlan.derivedAt,idsTouched:t.executionPlan.steps.map(e=>e.requirementId)}),t.executionResult&&n.push({field:`executionResult`,recordedAt:t.executionResult.recordedAt,idsTouched:[]}),t.executionVerification&&n.push({field:`executionVerification`,recordedAt:t.executionVerification.verifiedAt,idsTouched:[...t.executionVerification.goalIds,...t.executionVerification.constraintIds,...t.executionVerification.knownIds]}),t.executionAdaptation&&n.push({field:`executionAdaptation`,recordedAt:t.executionAdaptation.adaptedAt,idsTouched:[]}),t.result&&n.push({field:`result`,recordedAt:t.result.recordedAt,idsTouched:[]}),t.verification&&n.push({field:`verification`,recordedAt:t.verification.verifiedAt,idsTouched:[...t.verification.goalIds,...t.verification.constraintIds,...t.verification.knownIds]}),t.adaptation&&n.push({field:`adaptation`,recordedAt:t.adaptation.adaptedAt,idsTouched:[]}),{taskId:t.id,stage:t.stage,entries:n,derivedAt:new Date().toISOString()}}getProblemRepresentation(e){let t=this.getTask(e);return{taskId:t.id,stage:t.stage,problem:t.problem,understanding:P(t.understanding),goalsConstraints:P(t.goalsConstraints),epistemicTracking:P(t.epistemicTracking),derivedAt:new Date().toISOString()}}getTask(e){let t=this.tasks.get(e);if(!t)throw new re(e);return t}tryGetTask(e){return this.tasks.get(e)}listTasks(){return Array.from(this.tasks.values())}get size(){return this.tasks.size}},I=0;function L(e){return I+=1,`${e}${I}`}function Me(e){let t=e.trim();if(!t)return{records:[],error:null};if(t.startsWith(`[`)||t.startsWith(`{`))try{let e=JSON.parse(t),n=Array.isArray(e)?e:[e];return n.length&&n.every(e=>e&&typeof e==`object`&&!Array.isArray(e))?{records:n,error:null}:{records:[],error:`JSON must be an array of objects (or a single object).`}}catch(e){return{records:[],error:`Invalid JSON: ${e?.message||e}`}}let n=t.split(/\r?\n/).filter(e=>e.trim().length>0);if(n.length<2)return{records:[],error:`Paste a header row plus at least one data row (CSV), or a JSON array of objects.`};let r=n[0].split(`,`).map(e=>e.trim()).filter(Boolean);return r.length?{records:n.slice(1).map(e=>{let t=e.split(`,`).map(e=>e.trim()),n={};return r.forEach((e,r)=>{let i=t[r],a=i!==void 0&&i!==``?Number(i):NaN;n[e]=i!==void 0&&i!==``&&!Number.isNaN(a)?a:i??``}),n}),error:null}:{records:[],error:`Couldn't read a header row.`}}function R(e){let t=new Set,n=[];for(let r of e)for(let e of Object.keys(r))t.has(e)||(t.add(e),n.push(e));return n}function Ne(e){let t=e.replace(/^```(?:json)?/i,``).replace(/```\s*$/i,``).trim(),n;try{n=JSON.parse(t)}catch{let e=t.match(/\{[\s\S]*\}/);if(!e)return{error:`The AI's reply wasn't valid JSON.`};try{n=JSON.parse(e[0])}catch(e){return{error:`The AI's reply wasn't valid JSON: ${e?.message||e}`}}}return!n||typeof n!=`object`?{error:`The AI's reply wasn't a JSON object.`}:{status:n.status===`needs_input`?`needs_input`:`ready`,preparedInput:n.preparedInput??{},missing:Array.isArray(n.missing)?n.missing.map(String):[],assumptions:Array.isArray(n.assumptions)?n.assumptions.map(String):[],notes:Array.isArray(n.notes)?n.notes.map(String):[]}}function z(e,t,n){return e.matrix[t]?.[n]??``}var B={modelId:`magenais.decision-score`,nlExample:`Which laptop should I buy for video editing under $2,000?`,createDefault(){let e={id:L(`opt`),name:`Option A`},t={id:L(`opt`),name:`Option B`},n={id:L(`crit`),name:`Price`,weight:50,direction:`minimize`},r={id:L(`crit`),name:`Quality`,weight:50,direction:`maximize`};return{question:``,alternatives:[e,t],criteria:[n,r],matrix:{[e.id]:{},[t.id]:{}},constraintsText:``}},renderEditor(e){let t=e.alternatives.map(t=>`
      <div class="field" style="display:flex; gap:6px; align-items:center; margin-bottom:6px;" data-alt-row="${t.id}">
        <input type="text" class="ds-alt-name" data-alt-id="${t.id}" value="${o(t.name)}" placeholder="Option name" style="flex:1;">
        <button type="button" class="ghost-btn small ds-alt-remove" data-alt-id="${t.id}" title="Remove option" ${e.alternatives.length<=2?`disabled`:``}>&times;</button>
      </div>`).join(``),n=e.criteria.map(t=>`
      <tr data-crit-row="${t.id}">
        <td><input type="text" class="ds-crit-name" data-crit-id="${t.id}" value="${o(t.name)}" placeholder="Criterion"></td>
        <td style="width:90px;"><input type="number" class="ds-crit-weight" data-crit-id="${t.id}" value="${t.weight}" min="0" max="100" style="width:70px;">%</td>
        <td style="width:110px;">
          <select class="ds-crit-direction" data-crit-id="${t.id}">
            <option value="maximize" ${t.direction===`maximize`?`selected`:``}>Higher is better</option>
            <option value="minimize" ${t.direction===`minimize`?`selected`:``}>Lower is better</option>
          </select>
        </td>
        <td style="width:36px;"><button type="button" class="ghost-btn small ds-crit-remove" data-crit-id="${t.id}" title="Remove criterion" ${e.criteria.length<=1?`disabled`:``}>&times;</button></td>
      </tr>`).join(``),r=e.criteria.map(e=>`<th data-crit-header="${e.id}">${o(e.name||`Criterion`)}</th>`).join(``),i=e.alternatives.map(t=>`
      <tr>
        <td data-alt-row-label="${t.id}">${o(t.name||`Option`)}</td>
        ${e.criteria.map(n=>`<td><input type="text" inputmode="decimal" class="ds-matrix-cell" data-opt-id="${t.id}" data-crit-id="${n.id}" value="${o(z(e,t.id,n.id))}" placeholder="—" style="width:80px;"></td>`).join(``)}
      </tr>`).join(``);return`
      <div class="field">
        <label class="field-label">What would you like to decide?</label>
        <input type="text" id="dsQuestion" value="${o(e.question)}" placeholder="${o(this.nlExample)}">
      </div>

      <div class="field">
        <label class="field-label">Options</label>
        <div id="dsAltList">${t}</div>
        <button type="button" class="ghost-btn small" id="dsAltAdd">+ Add option</button>
      </div>

      <div class="field">
        <label class="field-label">Criteria</label>
        <div class="studio-table-scroll"><table class="studio-comparison-table" id="dsCritTable">
          <thead><tr><th>Criterion</th><th>Weight</th><th>Better</th><th></th></tr></thead>
          <tbody>${n}</tbody>
        </table></div>
        <button type="button" class="ghost-btn small" id="dsCritAdd" style="margin-top:6px;">+ Add criterion</button>
      </div>

      <div class="field">
        <label class="field-label">Comparison — leave a cell blank if you don't have that value yet</label>
        <div class="studio-table-scroll"><table class="studio-comparison-table" id="dsMatrixTable">
          <thead><tr><th>Option</th>${r}</tr></thead>
          <tbody>${i}</tbody>
        </table></div>
      </div>

      <div class="field">
        <label class="field-label">Constraints <span class="hint" style="text-transform:none; letter-spacing:0;">optional — one per line, for context only</span></label>
        <textarea id="dsConstraints" rows="2" placeholder="e.g. Budget should stay under $1500">${o(e.constraintsText)}</textarea>
      </div>
    `},wireEditor(e,t,n,r){e.querySelector(`#dsQuestion`)?.addEventListener(`input`,e=>{let t=e.target.value;n(e=>{e.question=t})}),e.querySelector(`#dsConstraints`)?.addEventListener(`input`,e=>{let t=e.target.value;n(e=>{e.constraintsText=t})}),e.querySelectorAll(`.ds-alt-name`).forEach(t=>{t.addEventListener(`input`,()=>{let r=t.dataset.altId,i=t.value;n(e=>{let t=e.alternatives.find(e=>e.id===r);t&&(t.name=i)});let a=e.querySelector(`[data-alt-row-label="${CSS.escape(r)}"]`);a&&(a.textContent=i||`Option`)})}),e.querySelectorAll(`.ds-alt-remove`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.altId;r(e=>{e.alternatives=e.alternatives.filter(e=>e.id!==t),delete e.matrix[t]})})}),e.querySelector(`#dsAltAdd`)?.addEventListener(`click`,()=>{r(e=>{let t=L(`opt`);e.alternatives.push({id:t,name:`Option ${String.fromCharCode(65+e.alternatives.length)}`}),e.matrix[t]={}})}),e.querySelectorAll(`.ds-crit-name`).forEach(t=>{t.addEventListener(`input`,()=>{let r=t.dataset.critId,i=t.value;n(e=>{let t=e.criteria.find(e=>e.id===r);t&&(t.name=i)});let a=e.querySelector(`[data-crit-header="${CSS.escape(r)}"]`);a&&(a.textContent=i||`Criterion`)})}),e.querySelectorAll(`.ds-crit-weight`).forEach(e=>{e.addEventListener(`input`,()=>{let t=e.dataset.critId,r=Number(e.value)||0;n(e=>{let n=e.criteria.find(e=>e.id===t);n&&(n.weight=r)})})}),e.querySelectorAll(`.ds-crit-direction`).forEach(e=>{e.addEventListener(`change`,()=>{let t=e.dataset.critId,r=e.value;n(e=>{let n=e.criteria.find(e=>e.id===t);n&&(n.direction=r)})})}),e.querySelectorAll(`.ds-crit-remove`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.critId;r(e=>{e.criteria=e.criteria.filter(e=>e.id!==t),Object.keys(e.matrix).forEach(n=>{delete e.matrix[n][t]})})})}),e.querySelector(`#dsCritAdd`)?.addEventListener(`click`,()=>{r(e=>{e.criteria.push({id:L(`crit`),name:``,weight:20,direction:`maximize`})})}),e.querySelectorAll(`.ds-matrix-cell`).forEach(e=>{e.addEventListener(`input`,()=>{let t=e.dataset.optId,r=e.dataset.critId,i=e.value;n(e=>{e.matrix[t]||(e.matrix[t]={}),e.matrix[t][r]=i})})})},toModelInput(e){let t=[],n=[];e.alternatives.length<2&&t.push(`At least two options are needed.`),e.criteria.length||t.push(`At least one criterion is needed.`),e.alternatives.forEach(e=>{e.name.trim()||t.push(`One of the options is missing a name.`)}),e.criteria.forEach(e=>{e.name.trim()||t.push(`One of the criteria is missing a name.`)});let r=[];e.criteria.forEach(i=>{let a=e.alternatives.map(t=>z(e,t.id,i.id).trim()),o=a.filter(e=>e!==``).length;if(o===0){i.name.trim()&&n.push(`"${i.name}" has no scores yet, so it was left out of this run — fill it in and run again to include it.`);return}if(o<a.length){e.alternatives.forEach((e,n)=>{a[n]===``&&t.push(`"${i.name||`a criterion`}" score for "${e.name||`an option`}" is missing.`)});return}if(a.findIndex(e=>Number.isNaN(Number(e)))!==-1){e.alternatives.forEach((e,n)=>{Number.isNaN(Number(a[n]))&&t.push(`"${i.name||`a criterion`}" score for "${e.name||`an option`}" isn't a number.`)});return}r.push(i)}),!t.length&&e.criteria.length>0&&r.length===0&&t.push(`None of the criteria have any scores entered yet — fill in at least one column.`);let i={};return e.alternatives.forEach(t=>{i[t.id]={},r.forEach(n=>{i[t.id][n.id]=Number(z(e,t.id,n.id).trim())})}),{input:{options:e.alternatives.map(e=>({id:e.id,name:e.name||e.id})),criteria:r.map(e=>({id:e.id,name:e.name||e.id,weight:e.weight,direction:e.direction})),scores:i,constraints:e.constraintsText.split(`
`).map(e=>e.trim()).filter(Boolean)},missing:t,notes:n}},fromModelInput(e){if(!e||!Array.isArray(e.options)||!Array.isArray(e.criteria))return null;try{let t=e.options.map(e=>({id:String(e.id),name:String(e.name??e.id)})),n=e.criteria.map(e=>({id:String(e.id),name:String(e.name??e.id),weight:typeof e.weight==`number`?Math.round(e.weight<=1?e.weight*100:e.weight):20,direction:e.direction===`minimize`?`minimize`:`maximize`})),r={};return t.forEach(t=>{r[t.id]={},n.forEach(n=>{let i=e.scores?.[t.id]?.[n.id];r[t.id][n.id]=typeof i==`number`?String(i):``})}),{question:``,alternatives:t,criteria:n,matrix:r,constraintsText:Array.isArray(e.constraints)?e.constraints.join(`
`):``}}catch{return null}},buildAiPreparePrompt(e,t){let{input:n}=B.toModelInput(t);return[`You are assisting MAGENAIS Models Hub. Your job is to help a user prepare input for the deterministic MAGENAIS DecisionScore model — you do NOT perform the decision yourself.`,``,`The deterministic model requires: options (alternatives), criteria (each with a weight and a direction — "maximize" or "minimize"), numeric scores for every option under every criterion, and optionally free-text constraints.`,``,`Rules:`,`1. Never invent numerical scores the user did not supply or that are not explicitly available from what they told you.`,`2. Never invent facts about the options.`,`3. If required scores are missing, list them in "missing" — do not guess a placeholder number.`,`4. You MAY suggest additional criteria the user has not listed, but put those in "assumptions" or "notes", not silently into preparedInput unless the user clearly implied them.`,`5. Preserve any user-provided values exactly.`,`6. Return ONLY a single JSON object, no prose, no code fences, in exactly this shape:`,`{"status":"ready"|"needs_input","preparedInput":{"options":[{"id":"...","name":"..."}],"criteria":[{"id":"...","name":"...","weight":0-100,"direction":"maximize"|"minimize"}],"scores":{"optionId":{"criterionId":number}},"constraints":["..."]},"missing":["..."],"assumptions":["..."],"notes":["..."]}`,``,`User's request: ${e||`(not provided — use only the structured data below)`}`,`Currently entered structured data: ${JSON.stringify(n)}`].join(`
`)},buildAiSuggestionsPrompt(e,t){return[`You are reviewing the result of MAGENAIS DecisionScore, a deterministic multi-criteria decision model. The ranking below is already final and correct — do NOT re-rank or change it.`,`Suggest, briefly: additional criteria worth considering, possible trade-offs, possible risks, and open questions the user should think about before deciding. Distinguish your suggestions clearly as AI guidance, not part of the analysis — do not prefix bullets with the word "Unverified"; the section header already discloses that.`,``,`Decision input: ${JSON.stringify(e)}`,`Deterministic result: ${JSON.stringify(t)}`,``,`Respond in EXACTLY this plain-text format, one bullet per line, omitting a heading entirely if you have nothing to add, no extra commentary:`,`INSIGHTS:`,`- ...`,`CONSIDERATIONS:`,`- ...`,`QUESTIONS:`,`- ...`,`NEXTSTEPS:`,`- ...`].join(`
`)}};function V(e,t,n){let r=t.records?R(t.records):[],i=r.map(n=>`
    <label class="chip small ${t.selectedVariables.includes(n)?`active`:``}" style="cursor:pointer;">
      <input type="checkbox" class="${e}-var-check" data-var="${o(n)}" ${t.selectedVariables.includes(n)?`checked`:``} style="margin-right:4px;">${o(n)}
    </label>`).join(` `);return`
    <div class="field">
      <label class="field-label">Paste or drop your data <span class="hint" style="text-transform:none; letter-spacing:0;">CSV (with header row) or a JSON array of objects</span></label>
      <textarea id="${e}Pasted" rows="6" style="font-family:var(--mono); font-size:12px;" placeholder="${o(n)}">${o(t.pasted)}</textarea>
      <div style="display:flex; gap:8px; align-items:center; margin-top:6px;">
        <button type="button" class="ghost-btn small" id="${e}Parse">Parse data</button>
        ${t.records?`<span class="hint">${t.records.length} row(s) parsed.</span>`:``}
        ${t.parseError?`<span class="hint" style="color:var(--rust);">${o(t.parseError)}</span>`:``}
      </div>
    </div>
    ${r.length?`
      <div class="field">
        <label class="field-label">Variables</label>
        <div class="chip-group" id="${e}VarChips">${i}</div>
      </div>`:``}
  `}function H(e,t,n,r){t.querySelector(`#${e}Pasted`)?.addEventListener(`input`,e=>{let t=e.target.value;n(e=>{e.pasted=t})}),t.querySelector(`#${e}Parse`)?.addEventListener(`click`,()=>{r(e=>{let{records:t,error:n}=Me(e.pasted);e.records=n?null:t,e.parseError=n,n||(e.selectedVariables=R(t))})}),t.querySelectorAll(`.${e}-var-check`).forEach(e=>{e.addEventListener(`change`,()=>{let t=e.dataset.var;n(n=>{let r=n.selectedVariables.includes(t);e.checked&&!r&&n.selectedVariables.push(t),!e.checked&&r&&(n.selectedVariables=n.selectedVariables.filter(e=>e!==t))})})})}var Pe=`temperature,ice_cream_sales
18,40
21,55
24,61
27,78`,U={modelId:`magenais.pattern-sense`,nlExample:`Find meaningful relationships between temperature and sales in this dataset.`,createDefault(){return{pasted:``,records:null,parseError:null,selectedVariables:[],timeVariable:``}},renderEditor(e){let t=e.records?R(e.records):[],n=[`<option value="">None</option>`,...t.map(t=>`<option value="${o(t)}" ${e.timeVariable===t?`selected`:``}>${o(t)}</option>`)].join(``);return`
      ${V(`ps`,e,Pe)}
      ${t.length?`
      <div class="field">
        <label class="field-label">Time / order variable <span class="hint" style="text-transform:none; letter-spacing:0;">optional — pairs with this become "temporal relationship" instead of correlation</span></label>
        <select id="psTimeVar">${n}</select>
      </div>`:``}
    `},wireEditor(e,t,n,r){H(`ps`,e,n,r),e.querySelector(`#psTimeVar`)?.addEventListener(`change`,e=>{let t=e.target.value;n(e=>{e.timeVariable=t})})},toModelInput(e){let t=[];return!e.records||!e.records.length?t.push(`Paste some data and click "Parse data" first.`):e.selectedVariables.length<2&&t.push(`Select at least two variables to look for relationships between.`),{input:{records:e.records||[],variables:e.selectedVariables.length?e.selectedVariables:void 0,timeVariable:e.timeVariable||void 0},missing:t}},fromModelInput(e){return!e||!Array.isArray(e.records)?null:{pasted:JSON.stringify(e.records,null,2),records:e.records,parseError:null,selectedVariables:Array.isArray(e.variables)?e.variables:R(e.records),timeVariable:e.timeVariable||``}},buildAiPreparePrompt(e,t){return[`You are assisting MAGENAIS Models Hub. Your job is to help a user prepare input for the deterministic MAGENAIS PatternSense model, which finds statistical patterns (association/correlation/temporal relationship) between variables in tabular data. You do NOT compute the patterns yourself.`,``,`The deterministic model requires: records (an array of row objects), and optionally which variables to focus on and a time/order variable.`,``,`Rules:`,`1. Never invent data rows or values the user did not supply.`,`2. You may suggest which of the already-present variables look most relevant, but never add new variables with fabricated data.`,`3. If no data has been provided, say so in "missing" rather than making any up.`,`4. Return ONLY a single JSON object, no prose, no code fences, in exactly this shape:`,`{"status":"ready"|"needs_input","preparedInput":{"records":[{...}],"variables":["..."],"timeVariable":"..."},"missing":["..."],"assumptions":["..."],"notes":["..."]}`,``,`User's request: ${e||`(not provided)`}`,`Currently entered data (may be empty): ${JSON.stringify(t.records||[])}`].join(`
`)},buildAiSuggestionsPrompt(e,t){return[`You are reviewing the result of MAGENAIS PatternSense, a deterministic pattern-detection model. The patterns below are already final — do NOT change them.`,`Suggest, briefly: interpretations worth investigating, possible explanations, additional variables that might help, and questions for further analysis. Clearly distinguish hypothesis from evidence, and never claim correlation proves causation. Label your output as unverified AI guidance.`,``,`Input summary: ${JSON.stringify({rowCount:e?.records?.length,variables:e?.variables})}`,`Deterministic result: ${JSON.stringify(t)}`,``,`Respond in EXACTLY this plain-text format, one bullet per line, omitting a heading entirely if you have nothing to add, no extra commentary:`,`INSIGHTS:`,`- ...`,`CONSIDERATIONS:`,`- ...`,`QUESTIONS:`,`- ...`,`NEXTSTEPS:`,`- ...`].join(`
`)}},Fe=`reading
48
51
49
120
50
52`,W={modelId:`magenais.anomaly-mind`,nlExample:`Find unusual readings in this sensor data and tell me which anomalies are stable.`,createDefault(){return{pasted:``,records:null,parseError:null,selectedVariables:[],timeVariable:``,method:`automatic`}},renderEditor(e){return`
      ${V(`am`,e,Fe)}
      <div class="field">
        <label class="field-label">Detection method</label>
        <select id="amMethod">
          ${[{v:`automatic`,label:`Automatic (recommended)`},{v:`mad`,label:`Median absolute deviation (MAD)`},{v:`robust-zscore`,label:`Robust Z-score`},{v:`iqr`,label:`Interquartile range (IQR)`},{v:`rolling`,label:`Rolling window`}].map(t=>`<option value="${t.v}" ${e.method===t.v?`selected`:``}>${t.label}</option>`).join(``)}
        </select>
      </div>
    `},wireEditor(e,t,n,r){H(`am`,e,n,r),e.querySelector(`#amMethod`)?.addEventListener(`change`,e=>{let t=e.target.value;n(e=>{e.method=t})})},toModelInput(e){let t=[];return(!e.records||!e.records.length)&&t.push(`Paste some data and click "Parse data" first.`),{input:{records:e.records||[],variables:e.selectedVariables.length?e.selectedVariables:void 0},options:e.method===`automatic`?void 0:{method:e.method},missing:t}},fromModelInput(e){return!e||!Array.isArray(e.records)?null:{pasted:JSON.stringify(e.records,null,2),records:e.records,parseError:null,selectedVariables:Array.isArray(e.variables)?e.variables:R(e.records),timeVariable:``,method:`automatic`}},buildAiPreparePrompt(e,t){return[`You are assisting MAGENAIS Models Hub. Your job is to help a user prepare input for the deterministic MAGENAIS AnomalyMind model, which flags statistically unusual values in numeric data. You do NOT detect the anomalies yourself.`,``,`The deterministic model requires: records (an array of row objects) and optionally which numeric variables to check.`,``,`Rules:`,`1. Never invent data rows or values the user did not supply.`,`2. Do not decide which points are anomalies — that is the deterministic model's job.`,`3. If no data has been provided, say so in "missing" rather than making any up.`,`4. Return ONLY a single JSON object, no prose, no code fences, in exactly this shape:`,`{"status":"ready"|"needs_input","preparedInput":{"records":[{...}],"variables":["..."]},"missing":["..."],"assumptions":["..."],"notes":["..."]}`,``,`User's request: ${e||`(not provided)`}`,`Currently entered data (may be empty): ${JSON.stringify(t.records||[])}`].join(`
`)},buildAiSuggestionsPrompt(e,t){return[`You are reviewing the result of MAGENAIS AnomalyMind, a deterministic anomaly-detection model. The flagged anomalies below are already final — do NOT change them.`,`Suggest, briefly: possible explanations, checks worth performing, whether the data source might be worth investigating, and next analytical steps. Do NOT claim to know the real-world cause of any anomaly unless the data itself supports it. Label your output as AI guidance — do not prefix bullets with the word "Unverified"; the section header already discloses that.`,``,`Input summary: ${JSON.stringify({rowCount:e?.records?.length,variables:e?.variables})}`,`Deterministic result: ${JSON.stringify(t)}`,``,`Respond in EXACTLY this plain-text format, one bullet per line, omitting a heading entirely if you have nothing to add, no extra commentary:`,`INSIGHTS:`,`- ...`,`CONSIDERATIONS:`,`- ...`,`QUESTIONS:`,`- ...`,`NEXTSTEPS:`,`- ...`].join(`
`)}},G={[B.modelId]:B,[U.modelId]:U,[W.modelId]:W};function Ie(e){let t={insights:[],considerations:[],questions:[],nextSteps:[]},n={insights:`insights`,considerations:`considerations`,questions:`questions`,nextsteps:`nextSteps`,"next steps":`nextSteps`},r=null;for(let i of e.split(`
`)){let e=i.trim();if(!e)continue;let a=e.replace(/:$/,``).toLowerCase();if(n[a]){r=n[a];continue}if(!r)continue;let o=e.replace(/^[-*•]\s*/,``).trim();o&&t[r].push(o)}return t}var K={"magenais.decision-score":{options:[{id:`a`,name:`Laptop A`},{id:`b`,name:`Laptop B`},{id:`c`,name:`Laptop C`}],criteria:[{id:`price`,name:`Price`,weight:.4,direction:`minimize`},{id:`performance`,name:`Performance`,weight:.35,direction:`maximize`},{id:`battery`,name:`Battery Life`,weight:.25,direction:`maximize`}],scores:{a:{price:1200,performance:8,battery:6},b:{price:900,performance:6,battery:9},c:{price:1500,performance:9,battery:7}},constraints:[`Budget should ideally stay under $1500`]},"magenais.pattern-sense":{records:[{temperature:18,ice_cream_sales:40},{temperature:21,ice_cream_sales:55},{temperature:24,ice_cream_sales:61},{temperature:19,ice_cream_sales:42},{temperature:27,ice_cream_sales:78},{temperature:30,ice_cream_sales:88},{temperature:22,ice_cream_sales:58},{temperature:25,ice_cream_sales:66},{temperature:17,ice_cream_sales:35},{temperature:29,ice_cream_sales:84}],variables:[`temperature`,`ice_cream_sales`]},"magenais.anomaly-mind":{records:[48,51,49,50,52,49,51,50,53,120,49,50,51,48,52,50,49,51,50,49,-10,51,50,52,49,50,51,49,50,51].map((e,t)=>({reading:e,t})),variables:[`reading`]}},q=n.id,Le=`Stateful orchestrator that records a task from problem to strategies, evaluation, execution plan, outcome and adaptation, with provenance. It plans and records; it never executes.`,J={problem:`Reduce checkout drop-off on mobile.`,goals:[`Increase mobile checkout completion rate.`],constraints:[`No change to the payment provider.`],knowns:[`Checkout has three steps.`],unknowns:[`Which step loses the most users.`],assumptions:[`Drop-off is mostly caused by form length.`],evidence:[`Funnel export, week 38.`],requiredCapabilities:[`form-optimization`,`error-analysis`,`ux-research`],providers:{"form-optimization":[`acme.form-model`,`acme.form-model-lite`],"error-analysis":[`acme.log-model`],"ux-research":[]}},Y=0;function X(e){return Y+=1,`${e}${Y}`}function Z(e){return e.split(`
`).map(e=>e.trim()).filter(Boolean)}function Q(e){return{problem:e.problem,goalsText:e.goals.join(`
`),constraintsText:e.constraints.join(`
`),knownsText:e.knowns.join(`
`),unknownsText:e.unknowns.join(`
`),assumptionsText:e.assumptions.join(`
`),evidenceText:e.evidence.join(`
`),capabilities:e.requiredCapabilities.map(t=>({id:X(`mi-cap`),name:t,providersText:(e.providers[t]??[]).join(`, `)}))}}function Re(e){let t=e=>Array.isArray(e)?e.map(String):[],n=t(e?.requiredCapabilities),r=e?.providers&&typeof e.providers==`object`?e.providers:{};return Q({problem:typeof e?.problem==`string`?e.problem:``,goals:t(e?.goals),constraints:t(e?.constraints),knowns:t(e?.knowns),unknowns:t(e?.unknowns),assumptions:t(e?.assumptions),evidence:t(e?.evidence),requiredCapabilities:n,providers:r})}function $(e){let t={},n=[];return e.capabilities.forEach(e=>{let r=e.name.trim();r&&(n.push(r),t[r]=e.providersText.split(`,`).map(e=>e.trim()).filter(Boolean))}),{problem:e.problem.trim(),goals:Z(e.goalsText),constraints:Z(e.constraintsText),knowns:Z(e.knownsText),unknowns:Z(e.unknownsText),assumptions:Z(e.assumptionsText),evidence:Z(e.evidenceText),requiredCapabilities:n,providers:t}}var ze=class extends s{hub=a();view=`grid`;selectedModelId=null;searchQuery=``;categoryFilter=`all`;statusFilter=`all`;detailState=null;metaExampleState=null;activate(){this.view=`grid`,this.selectedModelId=null,this.renderControlPanel(),this.wireControlPanelEvents();let e=d();if(e&&this.hub.registry.tryGetModel(e.modelId)){this.openDetailWithHandoff(e);return}this.renderGrid()}onReselect(){this.view=`grid`,this.selectedModelId=null,this.resetQuickOpenSelect(),this.renderGrid()}deactivate(){}getTitle(){return`MAGENAIS Models Hub`}renderControlPanel(){this.renderControl(`
      <div class="field">
        <label class="field-label">Search</label>
        <div class="studio-search-wrap">
          <div class="studio-search-row">
            <span class="studio-search-icon">${u(`search`,16)}</span>
            <input type="text" id="modelsSearchInput" class="studio-search-input"
              placeholder="Search models…" autocomplete="off" value="${this.escapeHtml(this.searchQuery)}">
            <button type="button" id="modelsSearchClear" class="studio-search-clear" aria-label="Clear search" title="Clear search" ${this.searchQuery?``:`hidden`}>&#10005;</button>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="field-label">Open Model</label>
        <select id="modelsQuickOpenSelect" aria-label="Jump to a model">
          <option value="">Select a model…</option>
          ${this.quickOpenOptionsMarkup()}
        </select>
      </div>

      <div class="field">
        <label class="field-label">Category</label>
        <select id="modelsCategorySelect" aria-label="Filter by category">
          <option value="all">All</option>
          ${this.availableCategories().map(e=>`<option value="${this.escapeHtml(e)}" ${this.categoryFilter===e?`selected`:``}>${this.escapeHtml(this.categoryLabel(e))}</option>`).join(``)}
        </select>
      </div>

      <div class="field">
        <label class="field-label">Status</label>
        <select id="modelsStatusSelect" aria-label="Filter by status">
          <option value="all" ${this.statusFilter===`all`?`selected`:``}>All</option>
          <option value="installed" ${this.statusFilter===`installed`?`selected`:``}>Installed</option>
          <option value="available" ${this.statusFilter===`available`?`selected`:``}>Available</option>
          <option value="free" ${this.statusFilter===`free`?`selected`:``}>Free</option>
          <option value="experimental" ${this.statusFilter===`experimental`?`selected`:``}>Experimental</option>
        </select>
      </div>

      <div class="studio-notice" style="line-height:1.4;">
        The Models Hub runs small, explainable, local-first analytical models
        (no API key, no account, no cloud) — distinct from the text/image/etc.
        AI providers used elsewhere in MAGENAIS. Each model ships as its own
        independent, open-source repository under the MAGENAIS-MODELS catalog.
        Meta-Intelligence is listed alongside them as an information-only
        entry: it is an in-process library, so it has no Run panel here — its page shows a worked example instead.
      </div>

      ${this.renderPipelineHint(`text`)}
    `)}quickOpenOptionsMarkup(){return[this.hub.metaIntelligenceManifest,...this.hub.registry.listModels().map(e=>e.manifest).reverse()].map(e=>`<option value="${this.escapeHtml(e.id)}" ${this.selectedModelId===e.id?`selected`:``}>${this.escapeHtml(e.name)}</option>`).join(``)}resetQuickOpenSelect(){let e=this.controlPanel.querySelector(`#modelsQuickOpenSelect`);e&&(e.value=``)}wireControlPanelEvents(){let e=this.controlPanel.querySelector(`#modelsSearchInput`),t=this.controlPanel.querySelector(`#modelsSearchClear`),n=this.controlPanel.querySelector(`#modelsQuickOpenSelect`);n?.addEventListener(`change`,()=>{let e=n.value;e&&this.openDetail(e)}),e?.addEventListener(`input`,()=>{this.searchQuery=e.value,t&&(t.hidden=!this.searchQuery),this.renderGrid()}),t?.addEventListener(`click`,()=>{this.searchQuery=``,e&&(e.value=``,e.focus()),t.hidden=!0,this.renderGrid()});let r=this.controlPanel.querySelector(`#modelsCategorySelect`);r?.addEventListener(`change`,()=>{this.categoryFilter=r.value||`all`,this.renderGrid()});let i=this.controlPanel.querySelector(`#modelsStatusSelect`);i?.addEventListener(`change`,()=>{this.statusFilter=i.value||`all`,this.renderGrid()})}categoryOf(e){let t=e.capabilities?.[0];return t&&t.split(`-`)[0]?.trim().toLowerCase()||null}categoryLabel(e){return e.charAt(0).toUpperCase()+e.slice(1)}availableCategories(){let e=new Set;this.hub.registry.listModels().forEach(t=>{let n=this.categoryOf(t.manifest);n&&e.add(n)});let t=this.categoryOf(this.hub.metaIntelligenceManifest);return t&&e.add(t),Array.from(e).sort()}matchesFilters(e){return this.matchesManifestFilters(e.manifest)}matchesManifestFilters(e){if(this.categoryFilter!==`all`&&this.categoryOf(e)!==this.categoryFilter||this.statusFilter===`free`&&e.pricing.type!==`free`||this.statusFilter===`experimental`&&e.trust!==`experimental`||this.statusFilter===`available`)return!1;if(this.searchQuery.trim()){let t=this.searchQuery.trim().toLowerCase();if(!`${e.name} ${e.description} ${e.capabilities.join(` `)}`.toLowerCase().includes(t))return!1}return!0}renderGrid(){this.view=`grid`;let e=this.hub.registry.listModels(),t=e.filter(e=>this.matchesFilters(e)),n=this.hub.metaIntelligenceManifest,r=this.matchesManifestFilters(n),i=e.length+1,a=t.length+ +!!r,o=a?(r?this.tileMarkup(n):``)+t.slice().reverse().map(e=>this.tileMarkup(e.manifest)).join(``):``,s=a?``:`<div class="empty-text" style="grid-column:1/-1;">No models match the current search/filters.</div>`;this.renderOutput(`
      <div class="studio-desktop">
        <div class="studio-desktop-header">
          <div class="studio-desktop-title">MAGENAIS Models Hub</div>
          <div class="studio-desktop-subtitle">Explainable, local-first analytical models</div>
        </div>

        <div class="studio-category">
          <div class="studio-category-title">Models (${a}/${i})</div>
          <div class="studio-grid" id="modelsGrid">${o}${s}</div>
        </div>
      </div>
    `),this.outputPanel.querySelectorAll(`.studio-tile[data-model-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.modelId;t&&this.openDetail(t)})})}trustPillClass(e){return e===`magenais-verified`||e===`community-verified`?`studio-status-pill-available`:e===`experimental`?`studio-status-pill-experimental`:`studio-status-pill-coming-soon`}pricingLabel(e){return e.charAt(0).toUpperCase()+e.slice(1)}repositoryUrl(e){return/^https?:\/\//i.test(e)?e:`https://github.com/MAGENAIS/${e.replace(/^\/+/,``)}`}iconKeyFor(e){return e.id.includes(`decision-score`)?`decision-score`:e.id.includes(`pattern-sense`)?`pattern-sense`:e.id.includes(`anomaly-mind`)?`anomaly-mind`:e.id===q?`meta-intelligence`:`models`}tileMarkup(e){let t=e.id===q,n=t?Le:e.description;return`
      <div class="studio-tile-wrap">
        <button type="button" class="studio-tile" data-model-id="${this.escapeHtml(e.id)}" title="${this.escapeHtml(n)}">
          <span class="studio-tile-icon">${u(this.iconKeyFor(e),22)}</span>
          <span class="studio-tile-title">${this.escapeHtml(e.name)}</span>
          <span class="studio-tile-desc">${this.escapeHtml(n)}</span>
          <span class="studio-tile-footer">
            <span class="studio-status-pill ${this.trustPillClass(e.trust)}">${this.escapeHtml(e.trust)}</span>
            <span class="studio-tile-badge">${this.escapeHtml(this.pricingLabel(e.pricing.type))}</span>
            <span class="studio-tile-badge">v${this.escapeHtml(e.version)}</span>
            ${t?`<span class="studio-tile-badge">Library</span>`:``}
          </span>
        </button>
      </div>
    `}openDetail(e){if(e===q){this.openMetaIntelligenceDetail();return}let t=this.hub.registry.tryGetModel(e);if(!t)return;this.view=`detail`,this.selectedModelId=e;let n=G[e],r=K[e];this.detailState={inputMode:n?`guided`:`json`,handoffNotice:null,nlText:``,guided:n?n.fromModelInput(r)??n.createDefault():null,jsonText:r===void 0?`{}`:JSON.stringify(r,null,2),aiPrep:{status:`idle`},aiSuggestions:{status:`idle`},lastInput:null,lastOptions:null,lastResponse:null},this.renderDetail(t)}openDetailWithHandoff(e){let t=this.hub.registry.tryGetModel(e.modelId);if(!t)return;this.view=`detail`,this.selectedModelId=e.modelId;let n=G[e.modelId],r=K[e.modelId],i=e.input===void 0?r:e.input;this.detailState={inputMode:n?`guided`:`json`,handoffNotice:`Loaded from ${e.sourceTab}: ${e.label}`,nlText:e.nlHint||``,guided:n?n.fromModelInput(i)??n.createDefault():null,jsonText:i===void 0?`{}`:JSON.stringify(i,null,2),aiPrep:{status:`idle`},aiSuggestions:{status:`idle`},lastInput:null,lastOptions:e.options??null,lastResponse:null},this.renderDetail(t)}capabilityLabel(e){return e.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}researchConceptMarkup(e){return e.id.includes(`decision-score`)?`
        <p><b>Decision Stability Index (DSI)</b> — the proportion of tested weight
        perturbations under which the top-ranked option stayed the same. A
        research-oriented sensitivity estimate, not a guarantee.</p>
        <p><b>Decision Flip Point (DFP)</b> — an estimate of how much a given
        criterion's weight would need to change, within the tested range, to
        flip the top choice.</p>`:e.id.includes(`pattern-sense`)?`
        <p><b>Pattern Transfer Score (PTS)</b> — the proportion of independent
        data partitions in which a detected pattern's direction and strength
        reproduced, distinguishing a pattern that holds up across the dataset
        from one that was a coincidence in part of it.</p>
        <p>PatternSense labels relationships as association, correlation,
        temporal relationship, or (only when explicitly hypothesized by the
        caller) causal hypothesis — it never claims correlation proves
        causation.</p>`:e.id.includes(`anomaly-mind`)?`
        <p><b>Anomaly Context Stability (ACS)</b> — the proportion of tested
        configurations (threshold, window, normalization method, row subset)
        under which a flagged observation remained anomalous, distinguishing
        a broadly "stable" anomaly from one that is only
        "threshold-sensitive".</p>`:``}renderDetail(e){let t=e.manifest;this.renderOutput(`
      <div class="studio-desktop">
        <div>
          <button type="button" class="ghost-btn small" id="modelsBackBtn">&larr; Models Hub</button>
        </div>

        <div class="studio-desktop-header">
          <div class="studio-desktop-title">
            <span style="display:inline-flex; vertical-align:-4px; margin-right:6px;">${u(this.iconKeyFor(t),22)}</span>
            ${this.escapeHtml(t.name)} <span>v${this.escapeHtml(t.version)}</span>
          </div>
          <div class="studio-desktop-subtitle">${this.escapeHtml(t.type)} · ${this.escapeHtml(t.id)}</div>
        </div>

        <div class="result-text models-shell" style="line-height:1.5;">
          <p style="margin-bottom:8px;">${this.escapeHtml(t.description)}</p>

          <div class="studio-chip-row">
            <span class="studio-status-pill ${this.trustPillClass(t.trust)}">${this.escapeHtml(t.trust)}</span>
            <span class="studio-tile-badge">${this.escapeHtml(this.pricingLabel(t.pricing.type))}</span>
            <span class="studio-tile-badge">${this.escapeHtml(t.license.type)}</span>
            ${t.runtimes.map(e=>`<span class="studio-tile-badge">${this.escapeHtml(e)}</span>`).join(``)}
          </div>

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Author</p>
          <p>${this.escapeHtml(t.author.name)}${t.author.organization?` (${this.escapeHtml(t.author.organization)})`:``}</p>

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Capabilities</p>
          <div class="studio-chip-row">
            ${t.capabilities.map(e=>`<span class="studio-chip">${this.escapeHtml(this.capabilityLabel(e))}</span>`).join(``)}
          </div>

          ${t.repository?`<p class="field-label" style="margin-top:12px; margin-bottom:4px;">Repository</p><p><a href="${this.escapeHtml(this.repositoryUrl(t.repository))}" target="_blank" rel="noopener">${this.escapeHtml(t.repository)}</a> (open source, independent of MAGENAIS core)</p>`:``}
          ${t.demo?`<p class="field-label" style="margin-top:12px; margin-bottom:4px;">Standalone Page</p><p><a href="${this.escapeHtml(t.demo)}" target="_blank" rel="noopener">${this.escapeHtml(t.demo)}</a> — this model's own self-contained page, usable independently of MAGENAIS</p>`:``}
          ${t.documentation?`<p class="field-label" style="margin-top:12px; margin-bottom:4px;">Documentation</p><p><a href="${this.escapeHtml(t.documentation)}" target="_blank" rel="noopener">${this.escapeHtml(t.documentation)}</a></p>`:``}

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Research concept</p>
          ${this.researchConceptMarkup(t)}

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Limitations</p>
          <p>This is a research-oriented MAGENAIS model, not a peer-reviewed
          or independently benchmarked system. Metrics above describe tested
          behavior under the options given at run time — they are estimates,
          not guarantees, and should be read alongside the explanation and
          any warnings in each result.</p>
        </div>

        <div class="studio-category">
          <div class="studio-category-title">Run — local, no API key or account required</div>
          ${this.runSectionMarkup(e)}
          <div id="modelsRunResult" style="margin-top:12px;"></div>
        </div>
      </div>
    `),this.outputPanel.querySelector(`#modelsBackBtn`)?.addEventListener(`click`,()=>{this.resetQuickOpenSelect(),this.renderGrid()}),this.wireRunSection(e)}openMetaIntelligenceDetail(){this.view=`detail`,this.selectedModelId=q,this.detailState=null,this.metaExampleState={inputMode:`guided`,guided:Q(J),jsonText:JSON.stringify(J,null,2)},this.renderMetaIntelligenceDetail()}renderMetaIntelligenceDetail(){let e=this.hub.metaIntelligenceManifest;this.renderOutput(`
      <div class="studio-desktop">
        <div>
          <button type="button" class="ghost-btn small" id="modelsBackBtn">&larr; Models Hub</button>
        </div>

        <div class="studio-desktop-header">
          <div class="studio-desktop-title">
            <span style="display:inline-flex; vertical-align:-4px; margin-right:6px;">${u(this.iconKeyFor(e),22)}</span>
            ${this.escapeHtml(e.name)} <span>v${this.escapeHtml(e.version)}</span>
          </div>
          <div class="studio-desktop-subtitle">${this.escapeHtml(e.type)} · ${this.escapeHtml(e.id)}</div>
        </div>

        <div class="result-text models-shell" style="line-height:1.5;">
          <p style="margin-bottom:8px;">${this.escapeHtml(e.description)}</p>

          <div class="studio-chip-row">
            <span class="studio-status-pill ${this.trustPillClass(e.trust)}">${this.escapeHtml(e.trust)}</span>
            <span class="studio-tile-badge">${this.escapeHtml(this.pricingLabel(e.pricing.type))}</span>
            <span class="studio-tile-badge">${this.escapeHtml(e.license.type)}</span>
            <span class="studio-tile-badge">In-process library</span>
          </div>

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Author</p>
          <p>${this.escapeHtml(e.author.name)}${e.author.organization?` (${this.escapeHtml(e.author.organization)})`:``}</p>

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Capabilities</p>
          <div class="studio-chip-row">
            ${e.capabilities.map(e=>`<span class="studio-chip">${this.escapeHtml(this.capabilityLabel(e))}</span>`).join(``)}
          </div>

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">How it is used</p>
          <p>Meta-Intelligence is a stateful, multi-call library rather than a single-run model, so it has no
          Run panel for real tasks in the Models Hub and is not dispatched through the Model Router. The example below
          replays a sample task so you can see what it records. Code calls it in-process, one stage
          at a time; it never executes, composes or retries anything, and every decision, plan or claim it records is
          supplied by the caller and tagged with its origin.</p>

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Example</p>
          <p>A sample task, replayed locally through the library. It records the understanding, the capability
          decomposition and the candidate strategies — it plans and records only, and never calls any provider or model.
          Fill in the fields below (or switch to JSON / Advanced) and run it to see what gets recorded.</p>
          <div id="modelsMetaExampleSection">${this.metaExampleSectionMarkup()}</div>

          ${e.repository?`<p class="field-label" style="margin-top:12px; margin-bottom:4px;">Repository</p><p><a href="${this.escapeHtml(this.repositoryUrl(e.repository))}" target="_blank" rel="noopener">${this.escapeHtml(e.repository)}</a> (open source, independent of MAGENAIS core)</p>`:``}
          ${e.demo?`<p class="field-label" style="margin-top:12px; margin-bottom:4px;">Standalone Page</p><p><a href="${this.escapeHtml(e.demo)}" target="_blank" rel="noopener">${this.escapeHtml(e.demo)}</a> — this model's own self-contained page, usable independently of MAGENAIS</p>`:``}
          ${e.documentation?`<p class="field-label" style="margin-top:12px; margin-bottom:4px;">Documentation</p><p><a href="${this.escapeHtml(e.documentation)}" target="_blank" rel="noopener">${this.escapeHtml(e.documentation)}</a></p>`:``}

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Evidence</p>
          <p>Evidence level: <b>${this.escapeHtml(e.evidenceLevel??`unspecified`)}</b>. The bundled benchmark checks
          pipeline mechanics and strategy generation/selection on synthetic fixtures; it is not evidence of real-world
          task outcomes.</p>

          <p class="field-label" style="margin-top:12px; margin-bottom:4px;">Limitations</p>
          <ul style="margin:0 0 0 18px;">${(e=>e.map(e=>`<li>${this.escapeHtml(e)}</li>`).join(``))(e.limitations??[])}</ul>
        </div>
      </div>
    `),this.outputPanel.querySelector(`#modelsBackBtn`)?.addEventListener(`click`,()=>{this.resetQuickOpenSelect(),this.renderGrid()}),this.wireMetaExampleSection()}metaExampleSectionMarkup(){let e=this.metaExampleState,t=e.guided,n=`
      <div class="field">
        <label class="field-label">Input mode</label>
        <div class="chip-group" id="modelsMetaInputModeChips">
          <span class="chip${e.inputMode===`guided`?` active`:``}" data-input-mode="guided">Guided</span>
          <span class="chip${e.inputMode===`json`?` active`:``}" data-input-mode="json">JSON / Advanced</span>
        </div>
      </div>`,r=t.capabilities.map(e=>`
      <tr data-mi-cap-row="${e.id}">
        <td><input type="text" class="mi-cap-name" data-cap-id="${e.id}" value="${this.escapeHtml(e.name)}" placeholder="e.g. form-optimization"></td>
        <td><input type="text" class="mi-cap-providers" data-cap-id="${e.id}" value="${this.escapeHtml(e.providersText)}" placeholder="Comma-separated provider ids — blank = gap"></td>
        <td style="width:36px;"><button type="button" class="ghost-btn small mi-cap-remove" data-cap-id="${e.id}" title="Remove capability" ${t.capabilities.length<=1?`disabled`:``}>&times;</button></td>
      </tr>`).join(``),i=`
      <div id="modelsMetaGuidedEditor">
        <div class="field">
          <label class="field-label">Problem</label>
          <input type="text" id="miProblem" value="${this.escapeHtml(t.problem)}" placeholder="e.g. Reduce checkout drop-off on mobile.">
        </div>
        <div class="field">
          <label class="field-label">Goals <span class="hint" style="text-transform:none; letter-spacing:0;">one per line</span></label>
          <textarea id="miGoals" rows="2" placeholder="e.g. Increase mobile checkout completion rate.">${this.escapeHtml(t.goalsText)}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Constraints <span class="hint" style="text-transform:none; letter-spacing:0;">optional — one per line</span></label>
          <textarea id="miConstraints" rows="2" placeholder="e.g. No change to the payment provider.">${this.escapeHtml(t.constraintsText)}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Known facts <span class="hint" style="text-transform:none; letter-spacing:0;">optional — one per line</span></label>
          <textarea id="miKnowns" rows="2" placeholder="e.g. Checkout has three steps.">${this.escapeHtml(t.knownsText)}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Open questions <span class="hint" style="text-transform:none; letter-spacing:0;">optional — one per line</span></label>
          <textarea id="miUnknowns" rows="2" placeholder="e.g. Which step loses the most users.">${this.escapeHtml(t.unknownsText)}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Assumptions <span class="hint" style="text-transform:none; letter-spacing:0;">optional — one per line</span></label>
          <textarea id="miAssumptions" rows="2" placeholder="e.g. Drop-off is mostly caused by form length.">${this.escapeHtml(t.assumptionsText)}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Evidence <span class="hint" style="text-transform:none; letter-spacing:0;">optional — one per line</span></label>
          <textarea id="miEvidence" rows="2" placeholder="e.g. Funnel export, week 38.">${this.escapeHtml(t.evidenceText)}</textarea>
        </div>
        <div class="field">
          <label class="field-label">Required capabilities &amp; providers <span class="hint" style="text-transform:none; letter-spacing:0;">leave providers blank to show a capability gap</span></label>
          <div class="studio-table-scroll"><table class="studio-comparison-table" id="miCapTable">
            <thead><tr><th>Capability</th><th>Providers</th><th></th></tr></thead>
            <tbody>${r}</tbody>
          </table></div>
          <button type="button" class="ghost-btn small" id="miCapAdd" style="margin-top:6px;">+ Add capability</button>
        </div>
      </div>`,a=`
      <div class="field">
        <label class="field-label">Input (JSON)</label>
        <textarea id="modelsMetaExampleInput" rows="14" style="font-family:var(--mono); font-size:12px; width:100%;">${this.escapeHtml(e.jsonText)}</textarea>
        <div style="display:flex; gap:6px; margin-top:6px;">
          <button type="button" class="ghost-btn small" id="modelsMetaJsonFormat">Format JSON</button>
          <button type="button" class="ghost-btn small" id="modelsMetaExampleCopy">Copy</button>
          <button type="button" class="ghost-btn small" id="modelsMetaJsonReset">Reset example</button>
        </div>
        <div id="modelsMetaJsonError"></div>
      </div>`;return`
      ${n}
      ${e.inputMode===`guided`?i:a}
      <button class="run-btn" id="modelsMetaExampleRun" style="margin-top:8px;">&#9656; Run example</button>
      <div id="modelsMetaExampleResult" style="margin-top:12px;"></div>
    `}rerenderMetaExampleSection(){let e=this.outputPanel.querySelector(`#modelsMetaExampleSection`);e&&(e.innerHTML=this.metaExampleSectionMarkup(),this.wireMetaExampleSection())}setMetaJsonError(e){let t=this.outputPanel.querySelector(`#modelsMetaJsonError`);t&&(t.innerHTML=e?`<p class="hint" style="color:var(--rust); margin-top:4px;">${this.escapeHtml(e)}</p>`:``)}wireMetaExampleSection(){let e=this.metaExampleState;this.outputPanel.querySelectorAll(`#modelsMetaInputModeChips .chip`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.inputMode;if(n!==e.inputMode){if(n===`json`)e.jsonText=JSON.stringify($(e.guided),null,2);else try{e.guided=Re(JSON.parse(e.jsonText))}catch{}e.inputMode=n,this.rerenderMetaExampleSection()}})}),e.inputMode===`guided`?(this.outputPanel.querySelector(`#miProblem`)?.addEventListener(`input`,t=>{e.guided.problem=t.target.value}),this.outputPanel.querySelector(`#miGoals`)?.addEventListener(`input`,t=>{e.guided.goalsText=t.target.value}),this.outputPanel.querySelector(`#miConstraints`)?.addEventListener(`input`,t=>{e.guided.constraintsText=t.target.value}),this.outputPanel.querySelector(`#miKnowns`)?.addEventListener(`input`,t=>{e.guided.knownsText=t.target.value}),this.outputPanel.querySelector(`#miUnknowns`)?.addEventListener(`input`,t=>{e.guided.unknownsText=t.target.value}),this.outputPanel.querySelector(`#miAssumptions`)?.addEventListener(`input`,t=>{e.guided.assumptionsText=t.target.value}),this.outputPanel.querySelector(`#miEvidence`)?.addEventListener(`input`,t=>{e.guided.evidenceText=t.target.value}),this.outputPanel.querySelectorAll(`.mi-cap-name`).forEach(t=>{t.addEventListener(`input`,()=>{let n=t.dataset.capId,r=t.value,i=e.guided.capabilities.find(e=>e.id===n);i&&(i.name=r)})}),this.outputPanel.querySelectorAll(`.mi-cap-providers`).forEach(t=>{t.addEventListener(`input`,()=>{let n=t.dataset.capId,r=t.value,i=e.guided.capabilities.find(e=>e.id===n);i&&(i.providersText=r)})}),this.outputPanel.querySelectorAll(`.mi-cap-remove`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.capId;e.guided.capabilities=e.guided.capabilities.filter(e=>e.id!==n),this.rerenderMetaExampleSection()})}),this.outputPanel.querySelector(`#miCapAdd`)?.addEventListener(`click`,()=>{e.guided.capabilities.push({id:X(`mi-cap`),name:``,providersText:``}),this.rerenderMetaExampleSection()})):(this.outputPanel.querySelector(`#modelsMetaExampleInput`)?.addEventListener(`input`,t=>{e.jsonText=t.target.value}),this.outputPanel.querySelector(`#modelsMetaJsonFormat`)?.addEventListener(`click`,()=>{let t=this.outputPanel.querySelector(`#modelsMetaExampleInput`);if(t)try{t.value=JSON.stringify(JSON.parse(t.value),null,2),e.jsonText=t.value,this.setMetaJsonError(null)}catch(e){this.setMetaJsonError(`Input isn't valid JSON: ${e?.message||e}`)}}),this.outputPanel.querySelector(`#modelsMetaExampleCopy`)?.addEventListener(`click`,()=>{let e=this.outputPanel.querySelector(`#modelsMetaExampleInput`);e&&navigator.clipboard?.writeText(e.value)}),this.outputPanel.querySelector(`#modelsMetaJsonReset`)?.addEventListener(`click`,()=>{e.jsonText=JSON.stringify(J,null,2),this.rerenderMetaExampleSection()})),this.outputPanel.querySelector(`#modelsMetaExampleRun`)?.addEventListener(`click`,()=>this.runGuarded(`modelsMetaExampleRun`,async()=>this.runMetaIntelligenceExample()))}runMetaIntelligenceExample(){let e=this.outputPanel.querySelector(`#modelsMetaExampleResult`);if(!e)return;let t=this.metaExampleState,n;if(t.inputMode===`guided`){if(n=$(t.guided),!n.problem){e.innerHTML=this.runErrorMarkup(`Describe the problem before running the example.`);return}}else{let r;try{r=JSON.parse(t.jsonText)}catch(t){e.innerHTML=this.runErrorMarkup(`Input isn't valid JSON: ${this.escapeHtml(t?.message||String(t))}`);return}let i=e=>Array.isArray(e)?e.map(String):[];if(n={problem:typeof r?.problem==`string`?r.problem:``,goals:i(r?.goals),constraints:i(r?.constraints),knowns:i(r?.knowns),unknowns:i(r?.unknowns),assumptions:i(r?.assumptions),evidence:i(r?.evidence),requiredCapabilities:i(r?.requiredCapabilities),providers:r?.providers&&typeof r.providers==`object`?r.providers:{}},!n.problem){e.innerHTML=this.runErrorMarkup(`The JSON must include a non-empty "problem" field.`);return}}let r=`caller`,i=e=>e.map(e=>({text:e,origin:r}));try{let t=new F,a=`example-task`;t.intake({id:a,statement:n.problem}),t.understand(a),t.addGoalsConstraints(a,{goals:i(n.goals),constraints:i(n.constraints)}),t.addEpistemicTracking(a,{knowns:i(n.knowns),unknowns:i(n.unknowns),assumptions:i(n.assumptions),evidence:i(n.evidence)}),t.decomposeCapabilities(a,{providersOf:e=>[...n.providers[e]??[]]},{requirements:n.requiredCapabilities.map(e=>({capability:e,origin:r}))}),t.generateStrategies(a),t.generateStrategyAlternatives(a);let o=t.getTask(a),s=e=>e.map(e=>`<li><b>${this.escapeHtml(e.id)}</b> (${this.escapeHtml(e.derivation)}): ${e.components.map(e=>`${this.escapeHtml(e.capability)} [${e.providers.map(e=>this.escapeHtml(e)).join(`, `)}]`).join(` + `)}</li>`).join(``),c=o.capabilityDecomposition,l=o.strategies?.strategies??[],u=o.strategyAlternatives?.strategies??[];e.innerHTML=`
        <div class="studio-notice">
          <p class="field-label" style="margin-bottom:4px;">Understanding</p>
          <p>${this.escapeHtml(o.understanding?.normalizedStatement??n.problem)}</p>
          <p class="field-label" style="margin-top:10px; margin-bottom:4px;">Capability decomposition</p>
          <ul style="margin:0 0 0 18px;">${(c?.requirements??[]).map(e=>`<li>${this.escapeHtml(e.capability)} — ${e.satisfied?`providers: ${e.providers.map(e=>this.escapeHtml(e)).join(`, `)}`:`<b>gap</b> (no provider)`}</li>`).join(``)}</ul>
          <p class="field-label" style="margin-top:10px; margin-bottom:4px;">Strategies (one per satisfied requirement)</p>
          <ul style="margin:0 0 0 18px;">${s(l)}</ul>
          <p class="field-label" style="margin-top:10px; margin-bottom:4px;">Alternatives (extra providers and one composed strategy)</p>
          <ul style="margin:0 0 0 18px;">${s(u)}</ul>
          <p class="hint" style="margin-top:10px;">Stage reached: ${this.escapeHtml(o.stage)}. Nothing was executed; the gap stays visible instead of being filled in. Ranking, governance and outcomes are recorded by your own code in later stages.</p>
        </div>`}catch(t){e.innerHTML=this.runErrorMarkup(t?.message||String(t))}}runSectionMarkup(e){let t=this.detailState,n=G[e.manifest.id],r=n?.nlExample||`Describe what you want to analyze…`;return`
      ${t.handoffNotice?`<p class="hint" style="color:var(--ink-dim);">&#128300; ${this.escapeHtml(t.handoffNotice)}</p>`:``}
      ${n?`
      <div class="field">
        <label class="field-label">Input mode</label>
        <div class="chip-group" id="modelsInputModeChips">
          <span class="chip${t.inputMode===`guided`?` active`:``}" data-input-mode="guided">Guided</span>
          <span class="chip${t.inputMode===`json`?` active`:``}" data-input-mode="json">JSON / Advanced</span>
        </div>
      </div>`:``}
      ${`
      <div class="field">
        <label class="field-label">Describe your task <span class="hint" style="text-transform:none; letter-spacing:0;">optional — MAGENAIS can help prepare structured input</span></label>
        <textarea id="modelsNlInput" rows="2" placeholder="${this.escapeHtml(r)}">${this.escapeHtml(t.nlText)}</textarea>
        <div style="display:flex; gap:8px; margin-top:6px; align-items:center; flex-wrap:wrap;">
          <button type="button" class="ghost-btn small" id="modelsPrepareBtn">&#10024; Prepare with AI</button>
          ${t.aiPrep.status===`loading`?`<span class="hint">Asking your enabled AI provider to prepare a draft…</span>`:``}
          ${t.aiPrep.status===`error`?`<span class="hint" style="color:var(--rust);">AI preparation couldn't be completed. The local model is still available. (${this.escapeHtml(t.aiPrep.error||``)})</span>`:``}
        </div>
      </div>
      <div id="modelsAiPrepBlock">${this.aiPrepBlockMarkup()}</div>
    `}
      ${t.inputMode===`guided`&&n?`<div id="modelsGuidedEditor">${n.renderEditor(t.guided)}</div>`:`<div class="field">
          <label class="field-label">Input (JSON)</label>
          <textarea id="modelsRunInput" rows="12" style="font-family:var(--mono); font-size:12px;">${this.escapeHtml(t.jsonText)}</textarea>
          <div style="display:flex; gap:6px; margin-top:6px;">
            <button type="button" class="ghost-btn small" id="modelsJsonFormat">Format JSON</button>
            <button type="button" class="ghost-btn small" id="modelsJsonCopy">Copy</button>
            <button type="button" class="ghost-btn small" id="modelsJsonReset">Reset example</button>
          </div>
          <div id="modelsJsonError"></div>
        </div>`}
      <div id="modelsValidationBlock"></div>
      ${this.renderPipelineHint(`text`)}
      <p class="hint">&#9679; Model execution: Local — no API key required &nbsp;&nbsp; &#9679; AI assistance: optional</p>
      <button class="run-btn" id="modelsRunBtn">&#9656; Run ${this.escapeHtml(e.manifest.name)}</button>
    `}wireRunSection(e){let t=this.detailState,n=G[e.manifest.id];if(this.outputPanel.querySelectorAll(`#modelsInputModeChips .chip`).forEach(r=>{r.addEventListener(`click`,()=>{let i=r.dataset.inputMode;if(i!==t.inputMode){if(i===`json`&&n){let{input:e}=n.toModelInput(t.guided);t.jsonText=JSON.stringify(e,null,2)}else if(i===`guided`&&n)try{let e=JSON.parse(t.jsonText),r=n.fromModelInput(e);r&&(t.guided=r)}catch{}t.inputMode=i,this.rerenderRunSection(e)}})}),this.outputPanel.querySelector(`#modelsNlInput`)?.addEventListener(`input`,e=>{t.nlText=e.target.value}),this.outputPanel.querySelector(`#modelsPrepareBtn`)?.addEventListener(`click`,()=>{this.handlePrepareWithAi(e)}),this.wireAiPrepBlock(e),t.inputMode===`guided`&&n){let r=this.outputPanel.querySelector(`#modelsGuidedEditor`);r&&n.wireEditor(r,t.guided,e=>{e(t.guided)},n=>{n(t.guided),this.rerenderRunSection(e)})}else this.outputPanel.querySelector(`#modelsRunInput`)?.addEventListener(`input`,e=>{t.jsonText=e.target.value}),this.outputPanel.querySelector(`#modelsJsonFormat`)?.addEventListener(`click`,()=>{let e=this.outputPanel.querySelector(`#modelsRunInput`);if(e)try{e.value=JSON.stringify(JSON.parse(e.value),null,2),t.jsonText=e.value,this.setJsonError(null)}catch(e){this.setJsonError(`Input isn't valid JSON: ${e?.message||e}`)}}),this.outputPanel.querySelector(`#modelsJsonCopy`)?.addEventListener(`click`,()=>{let e=this.outputPanel.querySelector(`#modelsRunInput`);e&&navigator.clipboard?.writeText(e.value)}),this.outputPanel.querySelector(`#modelsJsonReset`)?.addEventListener(`click`,()=>{let n=K[e.manifest.id];t.jsonText=n===void 0?`{}`:JSON.stringify(n,null,2),this.rerenderRunSection(e)});this.outputPanel.querySelector(`#modelsRunBtn`)?.addEventListener(`click`,()=>this.runGuarded(`modelsRunBtn`,()=>this.handleRun(e)))}setJsonError(e){let t=this.outputPanel.querySelector(`#modelsJsonError`);t&&(t.innerHTML=e?`<p class="hint" style="color:var(--rust); margin-top:4px;">${this.escapeHtml(e)}</p>`:``)}rerenderRunSection(e){let t=this.outputPanel.querySelectorAll(`.studio-category`),n=t[t.length-1];if(!n)return;let r=this.outputPanel.querySelector(`#modelsRunResult`),i=r?r.outerHTML:`<div id="modelsRunResult" style="margin-top:12px;"></div>`;n.innerHTML=`<div class="studio-category-title">Run — local, no API key or account required</div>${this.runSectionMarkup(e)}${i}`,this.wireRunSection(e),this.detailState?.lastResponse&&this.wireResultActions(e)}aiPrepBlockMarkup(){let e=this.detailState;if(e.aiPrep.status!==`ready`||!e.aiPrep.result)return``;let t=e.aiPrep.result;return`
      <div class="studio-notice" style="margin-top:6px;">
        <p class="field-label" style="margin-bottom:4px;">${t.status===`needs_input`?`More information needed`:`AI prepared a draft — please review before running`}</p>
        ${t.missing.length?`<ul class="studio-bullet-list">${t.missing.map(e=>`<li>${this.escapeHtml(e)}</li>`).join(``)}</ul>`:``}
        ${t.assumptions.length?`<p class="hint" style="margin-top:6px;">Assumptions: ${t.assumptions.map(e=>this.escapeHtml(e)).join(`; `)}</p>`:``}
        ${t.notes.length?`<p class="hint">${t.notes.map(e=>this.escapeHtml(e)).join(` `)}</p>`:``}
        <div style="display:flex; gap:6px; margin-top:8px; flex-wrap:wrap;">
          <button type="button" class="ghost-btn small" id="modelsAiPrepApply">Apply to Input</button>
          <button type="button" class="ghost-btn small" id="modelsAiPrepRetry">Try Again</button>
          <button type="button" class="ghost-btn small" id="modelsAiPrepShowJson">Show JSON</button>
        </div>
        <pre id="modelsAiPrepJson" hidden style="white-space:pre-wrap; font-size:11px; margin-top:8px;">${this.escapeHtml(JSON.stringify(t.preparedInput,null,2))}</pre>
      </div>`}wireAiPrepBlock(e){let t=this.detailState,n=G[e.manifest.id];this.outputPanel.querySelector(`#modelsAiPrepApply`)?.addEventListener(`click`,()=>{if(!n||!t.aiPrep.result)return;let r=n.fromModelInput(t.aiPrep.result.preparedInput);r?(t.guided=r,t.inputMode=`guided`):(t.jsonText=JSON.stringify(t.aiPrep.result.preparedInput,null,2),t.inputMode=`json`),this.rerenderRunSection(e)}),this.outputPanel.querySelector(`#modelsAiPrepRetry`)?.addEventListener(`click`,()=>void this.handlePrepareWithAi(e)),this.outputPanel.querySelector(`#modelsAiPrepShowJson`)?.addEventListener(`click`,()=>{let e=this.outputPanel.querySelector(`#modelsAiPrepJson`);e&&(e.hidden=!e.hidden)})}async handlePrepareWithAi(e){let t=this.detailState,n=G[e.manifest.id];if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}if(!n)return;t.aiPrep={status:`loading`},this.rerenderRunSection(e);let r=n.buildAiPreparePrompt(t.nlText,t.guided);try{let e=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:r},{temperature:.3,maxTokens:900}),n=Ne(String(e));t.aiPrep=`error`in n?{status:`error`,error:n.error}:{status:`ready`,result:n}}catch(e){t.aiPrep={status:`error`,error:e?.message||String(e)}}finally{this.rerenderRunSection(e)}}async handleRun(e){let t=this.detailState,n=G[e.manifest.id],r=this.outputPanel.querySelector(`#modelsRunResult`);if(!r)return;let i,a;if(t.inputMode===`guided`&&n){let{input:e,options:r,missing:o,notes:s}=n.toModelInput(t.guided);if(o.length){let e=this.outputPanel.querySelector(`#modelsValidationBlock`);e&&(e.innerHTML=`<div class="studio-notice" style="border-color:var(--rust); color:var(--rust); margin-top:6px;">
          <p class="field-label" style="margin-bottom:4px;">Some information needs attention</p>
          <ul class="studio-bullet-list">${o.map(e=>`<li>${this.escapeHtml(e)}</li>`).join(``)}</ul>
        </div>`);return}let c=this.outputPanel.querySelector(`#modelsValidationBlock`);c&&(c.innerHTML=s?.length?`<div class="studio-notice" style="margin-top:6px;">
              <p class="field-label" style="margin-bottom:4px;">Note</p>
              <ul class="studio-bullet-list">${s.map(e=>`<li>${this.escapeHtml(e)}</li>`).join(``)}</ul>
            </div>`:``),i=e,a=r}else{let e=this.outputPanel.querySelector(`#modelsRunInput`);if(!e)return;try{i=JSON.parse(e.value)}catch(e){r.innerHTML=this.runErrorMarkup(`Input isn't valid JSON: ${this.escapeHtml(e?.message||String(e))}`);return}}r.innerHTML=`<div class="spinner"></div><div class="empty-text">Running ${this.escapeHtml(e.manifest.name)} locally…</div>`;try{let n=await this.hub.router.route(e.manifest.id,{input:i,options:a});t.lastInput=i,t.lastOptions=a,t.lastResponse=n,t.aiSuggestions={status:`idle`},r.innerHTML=this.renderResult(e.manifest,n),this.wireResultActions(e)}catch(e){r.innerHTML=this.runErrorMarkup(e?.message||String(e))}}resultActionBarMarkup(){return`
      <div class="studio-quick-actions" id="modelsResultActions" style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">
        ${this.renderSaveBar(`modelsResult`)}
        <button type="button" class="ghost-btn small" id="modelsGetSuggestionsBtn">&#10024; AI Suggestions</button>
        ${l(`Send to Symbiosis`)}
        <button type="button" class="ghost-btn small" id="modelsCopyResultBtn">&#128203; Copy</button>
        <button type="button" class="ghost-btn small" id="modelsRunAgainBtn">&#8635; Run Again</button>
      </div>
      <div id="modelsAiSuggestionsBlock" style="margin-top:8px;">${this.aiSuggestionsBlockMarkup()}</div>
    `}wireResultActions(e){let t=this.detailState,n=this.outputPanel.querySelector(`#modelsRunResult`);!n||!t.lastResponse||(this.wireSaveBar(n,`modelsResult`,`data`,()=>`${e.manifest.name} result — ${new Date().toLocaleString()}`,()=>({model:e.manifest.id,modelVersion:e.manifest.version,naturalLanguageRequest:t.nlText||void 0,input:t.lastInput,output:t.lastResponse.output,aiSuggestions:t.aiSuggestions.status===`ready`?{unverified:!0,...t.aiSuggestions.sections}:void 0})),c(this.kernel,n,()=>{if(!t.lastResponse)return null;let n=[`MAGENAIS ${e.manifest.name} result`,t.nlText?`Request: ${t.nlText}`:``,t.lastResponse.explanation?`Explanation: ${t.lastResponse.explanation}`:``,`Result: ${JSON.stringify(t.lastResponse.output)}`,t.aiSuggestions.status===`ready`?`(AI suggestions below are unverified, not part of the deterministic result)`:``].filter(Boolean);return{sourceTab:`Models Hub`,title:`${e.manifest.name} result`,content:n.join(`
`)}}),this.outputPanel.querySelector(`#modelsCopyResultBtn`)?.addEventListener(`click`,()=>{t.lastResponse&&navigator.clipboard?.writeText(JSON.stringify(t.lastResponse.output,null,2))}),this.outputPanel.querySelector(`#modelsRunAgainBtn`)?.addEventListener(`click`,()=>this.runGuarded(`modelsRunAgainBtn`,()=>this.handleRun(e))),this.outputPanel.querySelector(`#modelsGetSuggestionsBtn`)?.addEventListener(`click`,()=>void this.fetchAiSuggestions(e)))}aiSuggestionsBlockMarkup(){let e=this.detailState;if(e.aiSuggestions.status===`idle`)return``;if(e.aiSuggestions.status===`loading`)return`<div class="studio-ai-suggestions"><p class="hint">Asking the configured AI provider for additional insights…</p></div>`;if(e.aiSuggestions.status===`error`)return`<div class="studio-ai-suggestions"><p class="hint" style="color:var(--rust);">AI suggestions failed: ${this.escapeHtml(e.aiSuggestions.error||``)}</p></div>`;let t=e.aiSuggestions.sections,n=e=>e.length?`<ul class="studio-bullet-list">${e.map(e=>`<li>${this.escapeHtml(e)}</li>`).join(``)}</ul>`:``;return`
      <div class="studio-ai-suggestions">
        <p class="field-label">AI suggestions <span class="hint">— unverified, not part of the deterministic model result</span></p>
        ${t.insights.length?`<p class="hint" style="margin-top:6px;">Insights</p>${n(t.insights)}`:``}
        ${t.considerations.length?`<p class="hint" style="margin-top:6px;">Considerations</p>${n(t.considerations)}`:``}
        ${t.questions.length?`<p class="hint" style="margin-top:6px;">Questions</p>${n(t.questions)}`:``}
        ${t.nextSteps.length?`<p class="hint" style="margin-top:6px;">Next steps</p>${n(t.nextSteps)}`:``}
        ${!t.insights.length&&!t.considerations.length&&!t.questions.length&&!t.nextSteps.length?`<p class="hint">The AI provider didn't return any structured suggestions.</p>`:``}
      </div>`}async fetchAiSuggestions(e){let t=this.detailState;if(!t.lastResponse)return;if(!this.kernel.getProviderManager().hasAnyUsableProvider()){this.kernel.getEventBus().emit(`ui:openSetupWizard`,{force:!0});return}let n=G[e.manifest.id];t.aiSuggestions={status:`loading`};let r=this.outputPanel.querySelector(`#modelsAiSuggestionsBlock`);r&&(r.innerHTML=this.aiSuggestionsBlockMarkup());let i=n?n.buildAiSuggestionsPrompt(t.lastInput,t.lastResponse.output):[`You are reviewing the result of MAGENAIS ${e.manifest.name}. Do not change the result — only add brief, clearly-unverified suggestions.`,`Result: ${JSON.stringify(t.lastResponse.output)}`,`Respond in EXACTLY this plain-text format, one bullet per line:`,`INSIGHTS:`,`- ...`,`CONSIDERATIONS:`,`- ...`,`QUESTIONS:`,`- ...`,`NEXTSTEPS:`,`- ...`].join(`
`);try{let n=await this.kernel.getProviderManager().callWithFallback(`text`,this.kernel.getRouter(),{prompt:i},{temperature:.4,maxTokens:700}),r=Ie(String(n));if(e.manifest.id.includes(`decision-score`)||e.manifest.id.includes(`anomaly-mind`)){let e=e=>e.replace(/^unverified\s+ai\s+guidance\s*[:\-–—]?\s*/i,`AI Guidance: `);Object.keys(r).forEach(t=>{r[t]=r[t].map(e)})}t.aiSuggestions={status:`ready`,sections:r}}catch(e){t.aiSuggestions={status:`error`,error:e?.message||String(e)}}finally{let e=this.outputPanel.querySelector(`#modelsAiSuggestionsBlock`);e&&(e.innerHTML=this.aiSuggestionsBlockMarkup())}}runErrorMarkup(e){return`<div class="studio-notice" style="border-color:var(--rust); color:var(--rust);">Couldn't run this model: ${e}</div>`}renderResult(e,t){if(!t.success)return this.runErrorMarkup(`The model reported failure without throwing — see explanation below.`)+(t.explanation?`<p style="margin-top:8px;">${this.escapeHtml(t.explanation)}</p>`:``);let n=`
      <div class="result-text" style="line-height:1.5;">
        ${t.explanation?`<p>${this.escapeHtml(t.explanation)}</p>`:``}
        ${typeof t.confidence==`number`?`<p class="hint">Confidence: ${(t.confidence*100).toFixed(0)}%</p>`:``}
        ${t.metadata?.executionTimeMs===void 0?``:`<p class="hint">Runtime: ${this.escapeHtml(t.metadata.runtime||`local`)} · ${t.metadata.executionTimeMs}ms</p>`}
      </div>
    `,r=t.warnings?.length?`<div class="studio-notice" style="margin-top:8px;">${t.warnings.map(e=>this.escapeHtml(e)).join(`<br>`)}</div>`:``,i=``;e.id.includes(`decision-score`)?i=this.renderDecisionScoreResult(t.output):e.id.includes(`pattern-sense`)?i=this.renderPatternSenseResult(t.output):e.id.includes(`anomaly-mind`)&&(i=this.renderAnomalyMindResult(t.output));let a=`<details class="adv" style="margin-top:8px;"><summary>Raw output (JSON)</summary><div class="adv-body">
      <p class="hint">Model ID: ${this.escapeHtml(e.id)} · Version: ${this.escapeHtml(e.version)}</p>
      <pre style="white-space:pre-wrap; font-size:11px; overflow-x:auto;">${this.escapeHtml(JSON.stringify(t.output,null,2))}</pre>
    </div></details>`;return n+r+i+a+this.resultActionBarMarkup()}renderDecisionScoreResult(e){let t=e.ranking.slice().sort((e,t)=>e.rank-t.rank),n=t.find(t=>t.optionId===e.topOptionId)||t[0],r=Math.max(...t.map(e=>e.score),1e-4);return`
      ${n?`
      <div class="result-text" style="margin-top:4px;">
        <p class="field-label" style="margin-bottom:2px;">Recommendation</p>
        <p style="font-size:15px;">&#127942; <b>${this.escapeHtml(n.name||n.optionId)}</b> <span class="hint">score ${n.score.toFixed(3)}</span></p>
      </div>`:``}
      <div style="margin-top:10px;">${t.map(e=>`
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
        <span class="hint" style="width:26px; text-align:right;">#${e.rank}</span>
        <span style="flex:0 0 120px; font-size:12.5px;">${this.escapeHtml(e.name||e.optionId)}</span>
        <div style="flex:1; background:var(--bg-raised); border-radius:3px; overflow:hidden; height:8px;">
          <div style="width:${Math.max(4,e.score/r*100)}%; height:100%; background:var(--amber);"></div>
        </div>
        <span class="hint" style="width:48px;">${e.score.toFixed(3)}</span>
      </div>`).join(``)}</div>
      <p class="field-label" style="margin-top:10px;">Decision Stability Index: ${Math.round(e.dsi*100)}% <span class="hint" style="text-transform:none; letter-spacing:0;">— proportion of tested weight changes where the top choice stayed the same</span></p>
      <p class="field-label" style="margin-top:10px; margin-bottom:4px;">Decision Flip Point — sensitivity by criterion</p>
      <div class="studio-table-scroll"><table class="studio-comparison-table">
        <thead><tr><th>Criterion</th><th>Direction</th><th>Change to flip</th><th>Challenger</th></tr></thead>
        <tbody>${e.dfp.map(e=>`<tr><td>${this.escapeHtml(e.criterionName||e.criterionId)}</td><td>${e.direction}</td><td>${e.relativeChange===null?`not found in range`:(e.relativeChange*100).toFixed(1)+`%`}</td><td>${e.challengerOptionId?this.escapeHtml(e.challengerOptionId):`—`}</td></tr>`).join(``)}</tbody>
      </table></div>
    `}renderPatternSenseResult(e){return e.patterns.length===0?`<p class="hint" style="margin-top:8px;">No patterns above threshold were found among ${e.variablesConsidered.length} variable(s) across ${e.rowCount} rows.</p>`:`
      <div class="studio-table-scroll" style="margin-top:8px;"><table class="studio-comparison-table">
        <thead><tr><th>Variables</th><th>Kind</th><th>Direction</th><th>Strength</th><th>Confidence</th><th>Support</th><th>PTS</th></tr></thead>
        <tbody>${e.patterns.map(e=>`<tr>
        <td>${this.escapeHtml(e.variables[0])} &harr; ${this.escapeHtml(e.variables[1])}</td>
        <td>${this.escapeHtml(e.kind)}</td>
        <td>${this.escapeHtml(e.direction)}</td>
        <td>${e.strength.toFixed(2)}</td>
        <td>${e.confidence.toFixed(2)}</td>
        <td>${e.support}</td>
        <td>${e.partitionConsistencyUntested?`untested`:e.pts.toFixed(2)}</td>
      </tr>`).join(``)}</tbody>
      </table></div>
      ${e.patterns.some(e=>e.kind===`causal-hypothesis`)?`<p class="hint" style="margin-top:6px;">Causal-hypothesis patterns are still association evidence only — not proof of causation.</p>`:``}
    `}renderAnomalyMindResult(e){let t=e.anomalies.filter(e=>e.isAnomaly);if(t.length===0)return`<p class="hint" style="margin-top:8px;">No anomalies flagged (method: ${this.escapeHtml(e.method)}) across ${e.rowCount} rows.</p>`;let n=t.map(e=>`<tr>
        <td>${e.index}</td>
        <td>${this.escapeHtml(e.variable)}</td>
        <td>${e.value}</td>
        <td>${e.score.toFixed(2)}</td>
        <td>${e.acs.toFixed(2)}</td>
        <td><span class="studio-status-pill ${e.stability===`stable`?`studio-status-pill-available`:e.stability===`threshold-sensitive`?`studio-status-pill-experimental`:`studio-status-pill-coming-soon`}">${this.escapeHtml(e.stability)}</span></td>
      </tr>`).join(``);return`
      <p class="field-label" style="margin-top:8px;">${t.length} anomal${t.length===1?`y`:`ies`} flagged (method: ${this.escapeHtml(e.method)})</p>
      <div class="studio-table-scroll"><table class="studio-comparison-table">
        <thead><tr><th>Row</th><th>Variable</th><th>Value</th><th>Score</th><th>ACS</th><th>Stability</th></tr></thead>
        <tbody>${n}</tbody>
      </table></div>
    `}};export{ze as ModelsMode};