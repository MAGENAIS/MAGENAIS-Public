# Changelog

All notable changes to MAGENAIS are documented here.

This document records significant improvements, new capabilities, architectural enhancements, performance optimizations, security updates, and bug fixes for each official release.

Version numbers follow Semantic Versioning where practical.

## [3.1.2] — 2026-09-11

Maintenance / release-hardening pass. No architecture changes; no Studio
tabs, provider behavior, or user-facing workflows were altered. Scope was
limited to the findings of the September 10, 2026 Deep Codebase Audit.

### Fixed
- **Security**: an unescaped `err.message` was interpolated directly into
  `innerHTML` in the workflow-run error panel (`WorkflowModal.ts`), a
  genuine (if narrow) XSS vector if a workflow step's error text ever
  contained externally-influenced content (e.g. relayed provider/MCP
  error output). Now routed through the existing `escapeHtml` utility.
- **Dependency hygiene**: removed the unused direct `dompurify`
  dependency — verified zero imports anywhere in `src/`, and confirmed
  jsPDF's `.html()` feature (the only thing that would need it) is never
  called. It remains available transitively via jsPDF's own optional
  dependency, so nothing changes if that feature is used later.
- **Duplicated escaping helpers**: consolidated five byte-identical local
  `escapeHtml` re-implementations (`SettingsModal.ts`, `WorkflowModal.ts`,
  `HistoryModal.ts`, `MCPToolPicker.ts`, `PerformanceDashboardModal.ts`)
  onto the single canonical implementation in `shared/RenderMarkdown.ts`.
  Zero behavior change — implementations were identical before removal.
- **Circular dependencies**: resolved the two architecturally-meaningful
  cycles identified by the audit (`Kernel.ts <-> Orchestrator.ts` and
  `Kernel.ts <-> PluginManager.ts`) by introducing narrow `KernelPort` /
  `PluginKernelPort` interfaces in `aios/types.ts` and `plugins/types.ts`
  capturing exactly the methods each consumer actually calls. `Kernel`
  itself required no changes — it already satisfies both interfaces
  structurally. The three `state/*.ts <-> Store.ts` cycles were left
  untouched; they're an idiomatic pattern for this state-store design.
- **Dead files**: removed `src/config/defaultModels.ts` and
  `src/config/defaultPipelines.ts` — confirmed orphaned (zero references
  anywhere by symbol or file path), functionally superseded by
  `providers/defaultProviders.ts`.
- **Type safety** (targeted, not exhaustive): `AppState.history` and
  `Selectors.getHistory()` now use the existing `HistoryEntry` type
  instead of `any[]`; `PluginAPI`'s `kernel` accessor surface
  (`getProviderManager`/`getWorkflowEngine`/`getStore`/`getEventBus`) now
  uses the same concrete types introduced for `PluginKernelPort` instead
  of `any`. Provider-adapter boundary typing and the generic
  `Persistence` storage layer were left as-is — genuinely dynamic
  boundaries, not debt.
- **CI**: added `.github/workflows/ci.yml` — build, `npm test`, and a
  standalone `tsc --noEmit` on every push and pull request. The existing
  publish workflow is untouched and unaffected.

### Verified, not changed
- 26 exports the audit's heuristic flagged as possibly unused were
  manually reviewed. Most were false positives once `tests/` (not just
  `src/`) was included in the search (e.g. all five `RosbridgeConnector`
  message builders are exercised by `tests/unit/rosbridge.test.ts`). The
  rest are plausible future/companion API surface in actively-maintained
  subsystems (Knowledge Studio types, Robotics kinematics, Symbiosis
  handoff, workflow canvas/factory) and were kept per "if uncertain,
  keep."
- `StudioMode.ts`, `providers/registry/Manager.ts`, and
  `ui/SettingsModal.ts` were reviewed for low-risk decomposition. Real
  top-level method counts (37 and 19 for the latter two) were
  substantially lower than the audit's regex-based estimate — these are
  large but not pathologically fragmented. No safe, trivial extraction
  seam existed without touching shared private state or UI ownership, so
  all three were left structurally intact per the audit's own guidance.

### Noted for a future decision (not acted on)
- `ui/modes/HelpMode.ts` is a complete, working Mode implementation that
  is not registered in `App.ts`'s `MODE_LOADERS` map and has no nav
  button — it's unreachable. The `if (modeId === 'help')` branch in
  `App.ts` is consequently dead code too. This looked like more than a
  simple unused-export case (real, richer content than the fallback), so
  it was surfaced rather than silently wired in or deleted — adding a nav
  tab is a product decision, not a hardening fix.
- `AppState` fields `providers`, `plugins`, `gallery`, `assets`,
  `projects`, and `currentWorkflow` (`core/state/Store.ts`) are declared
  but never actually read or written anywhere in the codebase (real
  provider/plugin data flows through `Kernel.getProviderManager()` /
  `getPluginManager()` instead). Left as `any`-typed per the audit's
  "don't invent types for data no code shapes" principle; worth a
  decision on whether to type properly or remove in a future pass.

### Validation
- `npx tsc --noEmit`: clean
- `npm test`: 335/335 passing
- `npm run build`: succeeds
- Circular dependencies: 5 → 3 (both non-idiomatic cycles resolved; the
  three benign state-store cycles are unchanged by design)
- No new circular dependencies, no new unsafe HTML interpolation, no
  secrets introduced, no functionality removed, no architecture changed

Copyright © 2026 Mehdi Alireza

MAGENAIS™

All Rights Reserved.
