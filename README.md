# Satellite-Based Exposure Scoring Framework  
### Multi-Spectral Mining Exposure Quantification & Cross-Asset Risk Scoring
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-v5.0%20validated-blue)
![Data](https://img.shields.io/badge/data-Sentinel--2-lightgrey)
![Reproducible](https://img.shields.io/badge/reproducible-yes-success)

---

## Overview

This repository documents the end-to-end development of a satellite-derived environmental exposure scoring system focused on mining assets.

The framework:

- Extracts multi-spectral satellite imagery  
- Computes vegetation exposure indicators (NDVI-based metrics)  
- Tracks multi-year environmental stability  
- Quantifies sustained industrial land exposure  
- Formalizes a Corporate Environmental Risk Index (CERI)  
- Converts composite scores into deterministic deployment-ready risk tiers  
- Validates score robustness through statistical resampling  

The project has evolved from signal validation to portfolio-level modeling, optimization, governance validation, deployment-tier logic, and statistical robustness testing.

This work sits at the intersection of:

- Geospatial analytics  
- Remote sensing  
- Statistical feature engineering  
- Risk modeling  
- Applied machine learning  

---

# System Pipeline

The framework transforms raw satellite imagery into a structured exposure scoring system through several stages:

```mermaid
flowchart TD

A[Sentinel-2 Satellite Imagery] --> B[Google Earth Engine Processing]

B --> C[NDVI Computation]
C --> D[Exposure Metrics Extraction]

D --> E[Raw Data Export<br>assets/data/raw]

E --> F[Feature Engineering<br>F1 Exposure Intensity<br>F2 Vegetation Suppression<br>F3 Exposure Persistence]

F --> G[CERI Composite Score<br>Z-Score Normalization]

G --> H[Model Validation Layers]

H --> I[Weight Optimization<br>CERI v3]
H --> J[Deployment Tier Logic<br>CERI v4]
H --> K[Bootstrap Stability Testing<br>CERI v5]

I --> L[Final Exposure Scoring Framework]
J --> L
K --> L
