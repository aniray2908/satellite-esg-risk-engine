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

The project has evolved from signal validation to portfolio-level risk modeling and structural segmentation.

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

Portfolio-level validation has been completed to assess robustness and geometric stability.

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

#### CERI v2 (Current Baseline)  
Four-asset portfolio model featuring:

- Standardized feature engineering  
- Z-score normalization  
- Composite risk scoring (CERI_z)  
- Weight sensitivity testing  
- Geometric feature space analysis  
- KMeans clustering (k=2, k=3)  
- Silhouette-based validation  

CERI v2 represents the stabilized exposure scoring baseline.

Modeling notebooks:

- `experiments/python/ceri/ceri_v1.ipynb`  
- `experiments/python/ceri/ceri_v2.ipynb`  

Final feature layer exported to:

`assets/data/ceri_v2_feature_layer.csv`

---

## Architectural Direction

The framework has evolved from:

Satellite Signal Extraction  
→ Cross-Site Validation  
→ Portfolio-Level Statistical Modeling  

Environmental exposure currently functions as the first validated signal module.

Future development will explore:

- Data-driven weight optimization  
- Multi-signal feature expansion  
- Automated asset ingestion  
- Portfolio-scale benchmarking  
- Modular satellite-based exposure scoring architecture  

---

## Repository Structure

- `notes/` — Conceptual documentation and structured model specifications  
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

---

## Project Positioning

This repository represents:

- A structured geospatial modeling system  
- A versioned environmental exposure scoring framework  
- A modular foundation for scalable risk analytics  

The emphasis is on:

- Statistical rigor  
- Geometric interpretability  
- Robustness testing  
- Architectural clarity  
- Version-controlled evolution  

Development proceeds in deliberate, versioned stages rather than ad hoc experimentation.
