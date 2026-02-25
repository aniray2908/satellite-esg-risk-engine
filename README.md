# Satellite-Based Exposure Scoring Framework  
### Multi-Spectral Mining Exposure Quantification & Cross-Asset Risk Scoring
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-v2.0%20baseline-blue)
![Data](https://img.shields.io/badge/data-Sentinel--2-lightgrey)
![Reproducible](https://img.shields.io/badge/reproducible-yes-success)

---

## Overview

This repository documents the development of a satellite-derived environmental exposure scoring system focused on mining assets.

The framework:

- Extracts multi-spectral satellite imagery  
- Computes vegetation exposure indicators (NDVI-based metrics)  
- Tracks multi-year environmental stability  
- Quantifies sustained industrial land exposure  
- Formalizes a Corporate Environmental Risk Index (CERI)  

The project has evolved from signal validation to portfolio-level risk modeling, optimization, and governance validation.

This work sits at the intersection of:

- Geospatial analytics  
- Remote sensing  
- Statistical feature engineering  
- Risk modeling  
- Applied machine learning  

---

## Motivation

Corporate ESG disclosures are largely self-reported and episodically verified.

Satellite data enables:

- Independent exposure monitoring  
- Consistent temporal evaluation  
- Scalable cross-asset comparison  

This project evaluates whether satellite-derived vegetation exposure metrics can serve as structured, comparable proxies for industrial environmental risk.

Portfolio-level validation, clustering analysis, and weight optimization have been completed to assess structural robustness and ranking stability.

---

## Development Progression

### Phase 0 — Conceptual Grounding
- GIS fundamentals consolidated  
- Raster vs vector clarified  
- NDVI spectral logic validated  
- Seasonal variability examined  

---

### Phase 1 — Signal Extraction Pipeline
- Spatial buffer-based analysis implemented  
- Sentinel-2 harmonized dataset integrated  
- Median compositing operational  
- Multi-year NDVI extraction (2019–2023)  
- Temporal structuring established  

---

### Phase 2 — Deep Case Study Validation

**Carajás Mine (Brazil)**

- Multi-scale buffer refinement (5 km → 1 km)  
- Metric evolution (Mean NDVI → Low NDVI Fraction)  
- Seasonal instability resolved via full-year compositing  
- Pit-centered spatial anchoring  
- Persistent exposed footprint quantified  

See: `notes/case-study-carajas.md`

---

### Phase 3 — Cross-Site Generalization

**Gevra Coal Mine (India)**

- Pipeline validation across new geography  
- Stable exposure extraction (2019–2023)  
- Cross-site comparative analysis  

See:
- `notes/case-study-gevra.md`  
- `experiments/python/comparative_analysis.ipynb`

---

### Phase 4 — Portfolio-Level Risk Modeling (CERI)

Two additional assets were integrated:

- **Bingham Canyon (USA)**  
- **Grasberg Mine (Indonesia)**  

Portfolio now spans four geographically diverse mining operations.

#### CERI v1  
Two-asset prototype demonstrating feature design and composite scoring.

#### CERI v2 (Governance Baseline)  
Four-asset portfolio model featuring:

- Standardized feature engineering (F1, F2, F3)  
- Z-score normalization  
- Composite risk scoring (CERI_z)  
- Weight sensitivity testing  
- Geometric feature space analysis  
- KMeans clustering (k=2, k=3)  
- Silhouette-based validation  

CERI v2 represents the stabilized exposure scoring baseline.

Final feature layer exported to:

`assets/data/ceri_v2_feature_layer.csv`

---

### Phase 5 — Weight Optimization & Governance Validation (CERI v3)

CERI v3 introduces data-driven weight optimization:

- Structured weight grid search  
- Silhouette maximization (k = 3)  
- Ranking shift quantification  
- Spearman & Kendall stability analysis  
- Governance decision framework  

Key finding:

- Optimization improves geometric separation  
- Extreme-tier assets remain stable  
- Moderate-tier ordering shifts under heavy stability weighting  

Governance Decision:

CERI v2 remains the official baseline model.  
CERI v3 functions as analytical validation and robustness confirmation.

See:
- `notes/ceri-v3-weight-optimization.md`  
- `notes/ceri-governance-decision.md`

---

## Architectural Direction

The framework has evolved from:

Satellite Signal Extraction  
→ Cross-Site Validation  
→ Portfolio-Level Statistical Modeling  
→ Optimization & Governance Validation  

Environmental exposure currently functions as the first validated signal module.

Future development may explore:

- Tier automation logic  
- Multi-signal feature expansion  
- Automated asset ingestion  
- Portfolio-scale benchmarking  
- Modular satellite-based exposure scoring architecture  

---

## Repository Structure

- `notes/` — Conceptual documentation, case studies, and governance specifications  
- `experiments/` — GEE extraction scripts and Python modeling notebooks  
- `assets/` — Generated CSV feature layers and plots  
- `references/` — Supporting datasets and literature  

---

## Reproducibility

All outputs are reproducible via:

1. Running the corresponding GEE extraction script  
2. Exporting CSV results  
3. Running associated Python notebooks  

Covered assets:

- Carajás (Brazil)  
- Gevra (India)  
- Bingham Canyon (USA)  
- Grasberg (Indonesia)  

CERI v2 outputs are versioned and not manually altered post-export.  
CERI v3 operates exclusively on the frozen v2 feature layer.

---

## Project Positioning

This repository represents:

- A structured geospatial modeling system  
- A versioned environmental exposure scoring framework  
- A governed, optimization-validated composite scoring model  
- A modular foundation for scalable risk analytics  

The emphasis is on:

- Statistical rigor  
- Geometric interpretability  
- Robustness testing  
- Governance discipline  
- Version-controlled evolution  

Development proceeds in deliberate, documented stages rather than ad hoc experimentation.
