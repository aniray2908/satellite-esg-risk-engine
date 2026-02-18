# Notes

This directory contains structured conceptual documentation and case studies developed alongside technical implementation.

The purpose of these notes is to:

- Consolidate foundational understanding
- Clarify geospatial and remote sensing concepts
- Document methodological refinement
- Interpret analytical results
- Transition from signal extraction to cross-asset risk scoring

Each document captures a distinct milestone in the development of the Satellite-Based Environmental Risk Engine.

---

## Foundations

- `foundations.md` — Core GIS and raster fundamentals.
- `temporal-analysis.md` — Multi-year NDVI time-series reasoning.
- `spatial-quantification.md` — Buffer-based environmental signal extraction.

These documents establish the conceptual base of the system.

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
- Preparation for structured risk scoring

See: `comparative-analysis.md`  
Supporting notebook: `experiments/python/comparative_analysis.ipynb`

---

## Risk Scoring Framework

Phase 4 introduced a structured Corporate Environmental Risk Index (CERI).

- `ceri-architecture.md` — Feature definitions and scoring logic.
- `phase-4-summary.md` — Portfolio-level scoring implementation and version progression (CERI v1 → v2).

This phase formalized cross-asset exposure comparison and automated risk tiering.

---

## Project Trajectory

The repository has progressed through:

1. Conceptual grounding  
2. Signal extraction pipeline development  
3. Deep case study validation  
4. Cross-site generalization  
5. Cross-asset risk scoring (CERI v1 → v2)

The next phase will focus on refinement, expanded asset coverage,
and incremental improvements to the scoring framework.
