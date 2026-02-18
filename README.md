# Satellite-based exposure scoring framework
### Multi-Spectral Mining Exposure Quantification & Cross-Asset Risk Scoring
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Phase](https://img.shields.io/badge/phase-4-blue)
![Data](https://img.shields.io/badge/data-Sentinel--2-lightgrey)
![Reproducible](https://img.shields.io/badge/reproducible-yes-success)


## Overview

This repository documents the structured development of a satellite-driven environmental risk assessment framework focused on mining assets.

The objective is to design and implement a system that:

- Extracts multi-spectral satellite imagery  
- Computes vegetation exposure indicators (NDVI-based metrics)  
- Tracks temporal environmental stability  
- Quantifies sustained industrial land exposure  
- Formalizes a Corporate Environmental Risk Index (CERI)  

The project has evolved from signal extraction into portfolio-level risk modeling.

This work sits at the intersection of:

- Geospatial analytics  
- Remote sensing  
- Statistical feature engineering  
- Risk modeling  
- Applied machine learning  

---

## Motivation

Corporate ESG disclosures are largely self-reported and infrequently verified.

Satellite data enables independent, scalable, and time-consistent environmental monitoring.

This project evaluates whether satellite-derived vegetation exposure metrics can serve as stable, comparable proxies for industrial environmental risk.

Cross-site validation and portfolio-level modeling have been completed to assess robustness and scalability.

---

## Current Development Status

### Phase 0 — Conceptual Grounding (Completed)
- GIS fundamentals consolidated
- Raster vs vector clarified
- NDVI spectral logic validated
- Seasonal variability explored

---

### Phase 1 — Signal Extraction Pipeline (Completed)
- Spatial buffer-based analysis implemented
- Sentinel-2 harmonized dataset integrated
- Median compositing operational
- Multi-year NDVI extraction (2019–2023)
- Temporal structuring established

---

### Phase 2 — Deep Case Study Validation (Completed)

Case Study: **Carajás Mine (Brazil)**

- Multi-scale buffer refinement (5 km → 1 km)
- Metric evolution (Mean NDVI → Low NDVI Fraction)
- Seasonal instability identified
- Full-year composite stabilization applied
- Spatial anchoring corrected (pit-centered coordinate)
- Persistent exposed mining footprint quantified

See: `notes/case-study-carajas.md`

---

### Phase 3 — Cross-Site Generalization (Completed)

Case Study: **Gevra Coal Mine (India)**

- Validated pit-centered 1 km buffer approach
- Applied full-year median composite (2019–2023)
- Extracted Mean NDVI and Low NDVI Fraction
- Confirmed stable exposure profile
- Performed cross-site comparative analysis

See:
- `notes/case-study-gevra.md`
- `experiments/python/comparative_analysis.ipynb`

---

### Phase 4 — Portfolio Expansion & Risk Modeling (Completed)

Additional Assets:

- **Bingham Canyon (USA)**
- **Grasberg Mine (Indonesia)**

Portfolio now includes four geographically diverse mining operations.

#### CERI v1
Two-asset prototype scoring model:
- Feature engineering (Exposure, Suppression, Persistence)
- Min-max normalization
- Z-score normalization
- Weighted composite score
- Illustrative clustering

#### CERI v2
Four-asset portfolio-level model:
- Portfolio-wide feature engineering
- Z-score normalization
- Composite risk scoring (CERI_z)
- KMeans clustering
- Silhouette score evaluation
- Automated risk tiering

Modeling notebooks:
- `experiments/python/ceri/ceri_v1.ipynb`
- `experiments/python/ceri/ceri_v2.ipynb`

Phase 4 represents the transition from metric validation to structured environmental risk modeling.

---

## Architectural Direction

The project has evolved from:

Satellite Signal Extraction  
→ Cross-Site Validation  
→ Portfolio-Level Statistical Modeling  

Environmental exposure currently serves as the first validated signal module.

Future phases will explore:

- Data-driven weight optimization
- Multi-signal feature expansion
- Automated asset ingestion
- Portfolio-scale risk benchmarking
- Scalable satellite-based risk scoring system

---

## Repository Structure

- `notes/` — Conceptual documentation and case studies  
- `experiments/` — GEE scripts, Python modeling, CERI notebooks  
- `assets/` — Generated CSV tables and plots  
- `references/` — Supporting literature and datasets  

---

## Reproducibility

All outputs are fully reproducible via:

1. Running the corresponding GEE extraction script  
2. Exporting CSV results  
3. Running associated Python scripts or notebooks  

### Assets Covered:

- Carajás (Brazil)
- Gevra (India)
- Bingham Canyon (USA)
- Grasberg (Indonesia)

No manual modification is applied to exported data.

---

## Project Philosophy

This repository functions as:

- A structured geospatial modeling build log  
- A versioned risk scoring framework  
- A progressively evolving environmental intelligence prototype  

The emphasis is on:

- Methodological rigor  
- Statistical grounding  
- Reproducibility  
- Architectural clarity  
- Measured progression  

Development proceeds in deliberate, versioned stages rather than ad hoc expansion.
