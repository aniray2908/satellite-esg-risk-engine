# Notes

This directory contains structured conceptual documentation and case studies developed alongside technical implementation.

The purpose of these notes is to:

- Consolidate foundational understanding  
- Clarify geospatial and remote sensing concepts  
- Document methodological refinement  
- Interpret analytical results  
- Formalize cross-asset exposure scoring logic  
- Establish governance, robustness validation, and deployment rules  

Each document captures a distinct milestone in the development of the Satellite-Based Exposure Scoring Framework.

---

## Foundations

- `foundations.md` — Core GIS and raster fundamentals.  
- `temporal-analysis.md` — Multi-year NDVI time-series reasoning.  
- `spatial-quantification.md` — Buffer-based environmental signal extraction.  

These documents establish the conceptual and methodological base of the system.

---

## Case Studies

### Case Study 01 — Carajás Mine (Brazil)
- Deep methodological validation  
- Multi-scale buffer refinement  
- Metric evolution (Mean NDVI → Low NDVI Fraction)  
- Full-year stabilization  
- Persistent high-intensity exposure  

See: `case-study-carajas.md`

---

### Case Study 02 — Gevra Coal Mine (India)
- Cross-geographical validation  
- Direct application of stabilized pipeline  
- Moderate but stable exposure profile  
- Multi-year consistency  

See: `case-study-gevra.md`

---

### Case Study 03 — Bingham Canyon (USA)
- Portfolio expansion  
- Ultra-high exposure open-pit structure  
- Near-total exposed surface footprint  
- Strong multi-year stability  

See: `case-study-bingham.md`

---

### Case Study 04 — Grasberg Mine (Indonesia)
- High-altitude tropical open-pit analysis  
- Near-total exposure fraction  
- Cross-climate validation  
- Stable exposure profile despite regional cloud variability  

See: `case-study-grasberg.md`

---

## Comparative Analysis

- Cross-site exposure contrast  
- Intensity differentiation  
- Stability confirmation  
- Structural validation prior to scoring  

See: `comparative-analysis.md`  
Supporting notebook: `experiments/python/comparative_analysis.ipynb`

---

## Risk Scoring Framework (CERI)

The Corporate Environmental Risk Index (CERI) formalizes cross-asset exposure comparison.

### Architecture & Design
- `ceri-architecture.md` — Feature definitions (F1, F2, F3) and composite scoring logic.  
- `phase-4-summary.md` — Portfolio-level scoring implementation (CERI v1 → v2).  

### Optimization & Governance
- `ceri-v3-weight-optimization.md` — Silhouette-based weight optimization and ranking stability analysis.  
- `ceri-governance-decision.md` — Baseline vs optimized weight evaluation and governance rationale.  

### Deployment Layer
- `ceri-v4-deployment.md` — Deterministic tier assignment and confidence scoring logic.  

### Robustness Validation
- `ceri_v5_bootstrap_stability.md` — Bootstrap-based stability testing of composite scores and asset rankings.

Bootstrap analysis evaluates how sensitive exposure scores are to temporal variation in the underlying observations.

This stage confirms that:

- asset ranking remains stable under simulated resampling  
- tier assignments remain structurally consistent  
- exposure score variability remains small relative to tier thresholds  

This provides empirical evidence that the scoring framework behaves as a **stable comparative exposure signal rather than a fragile point estimate.**

---

## Framework Evolution

The scoring framework progressed through several structured stages:

**CERI v1 — Prototype Model**

- Two-asset proof of concept  
- Initial feature engineering and composite scoring  

**CERI v2 — Portfolio Baseline**

- Four-asset exposure scoring model  
- Z-score normalization  
- Composite exposure score (CERI_z)  
- Clustering validation and feature space analysis  

**CERI v3 — Weight Optimization**

- Silhouette-based weight search  
- Ranking stability analysis  
- Governance evaluation of optimized weights  

**CERI v4 — Deployment Layer**

- Deterministic tier thresholds  
- Margin-based confidence scoring  

**CERI v5 — Robustness Validation**

- Bootstrap stability testing  
- Score distribution analysis  
- Ranking robustness confirmation  

CERI v2 remains the official scoring baseline.  
Later versions extend validation and operational interpretation of the framework.

---

## Project Trajectory

The repository has progressed through:

1. Conceptual grounding  
2. Signal extraction pipeline development  
3. Deep case study validation  
4. Cross-site generalization  
5. Portfolio expansion  
6. Cross-asset risk scoring (CERI v1 → v2)  
7. Weight optimization & governance validation (CERI v3)  
8. Deployment tier logic & confidence scoring (CERI v4)  
9. Bootstrap stability validation (CERI v5)

Future development may focus on:

- automated ingestion of new assets  
- multi-signal feature expansion  
- tier confidence calibration  
- portfolio-scale benchmarking  
- incremental framework refinement  

The emphasis remains on controlled, versioned evolution rather than ad hoc expansion.
