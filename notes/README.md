# Notes

This directory contains structured conceptual documentation and case studies developed alongside technical implementation.

The purpose of these notes is to:

- Consolidate foundational understanding  
- Clarify geospatial and remote sensing concepts  
- Document methodological refinement  
- Interpret analytical results  
- Formalize cross-asset exposure scoring logic  
- Establish governance and robustness validation  

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
- `ceri-architecture.md` — Feature definitions (F1, F2, F3) and scoring logic.  
- `phase-4-summary.md` — Portfolio-level scoring implementation (CERI v1 → v2).  

### Governance & Optimization
- `ceri-governance-decision.md` — Baseline vs optimized weight evaluation and decision rationale.  
- `ceri-v3-weight-optimization.md` — Silhouette-based weight optimization and ranking stability analysis.  

This phase introduced:

- Standardized feature engineering  
- Composite score formulation  
- Unsupervised clustering validation  
- Weight sensitivity analysis  
- Silhouette-based optimization  
- Formal governance decision  

CERI v2 remains the official baseline scoring configuration.  
CERI v3 serves as a validated optimization experiment.

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

The next phase will focus on:

- Deployment logic refinement  
- Tier automation  
- Expanded signal integration  
- Incremental scoring framework improvements  
- Scalable portfolio benchmarking  

The emphasis remains on controlled, versioned evolution rather than ad hoc expansion.
