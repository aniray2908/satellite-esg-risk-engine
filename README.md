# Satellite-Based Exposure Scoring Framework  
### Multi-Spectral Mining Exposure Quantification & Cross-Asset Risk Scoring

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-v7.0%20validated-blue)
![Data](https://img.shields.io/badge/data-Sentinel--2-lightgrey)
![Reproducible](https://img.shields.io/badge/reproducible-yes-success)

---

# Overview

This repository documents the end-to-end development of a satellite-derived environmental exposure scoring system focused on mining assets.

The framework:

- Extracts multi-spectral satellite imagery  
- Computes vegetation exposure indicators (NDVI-based metrics)  
- Tracks multi-year environmental stability  
- Quantifies sustained industrial land exposure  
- Formalizes a **Corporate Environmental Risk Index (CERI)**  
- Converts composite scores into deterministic deployment-ready risk tiers  
- Validates score robustness through statistical resampling  
- Evaluates feature predictability using supervised machine learning  

The project has evolved from signal extraction to portfolio-level modeling, optimization, governance validation, deployment-tier logic, statistical robustness testing, and predictive modeling validation.

This work sits at the intersection of:

- Geospatial analytics  
- Remote sensing  
- Statistical feature engineering  
- Risk modeling  
- Applied machine learning  

---

# System Pipeline

The framework transforms raw satellite imagery into a structured exposure scoring system through several stages.

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
H --> L[Predictive Modeling Validation<br>CERI v6]
H --> M[Feature Interpretability<br>CERI v7]

I --> N[Exposure Scoring Framework]
J --> N
K --> N
L --> N
M --> N

N --> O[New Asset Integration Framework<br>Phase 9]
```
---

### Pipeline Interpretation

The pipeline integrates multiple analytical layers that transform raw satellite observations into a structured environmental exposure scoring system.

These layers include:

- **Satellite data ingestion and preprocessing**
- **Vegetation exposure signal extraction**
- **Feature engineering and statistical normalization**
- **Composite exposure scoring**
- **Optimization and governance validation**
- **Deployment-ready tier classification**
- **Statistical robustness evaluation**

Each stage is implemented as a reproducible computational step within the repository, allowing the full scoring framework to be regenerated from raw satellite data.

---

# Motivation

Corporate ESG disclosures are largely self-reported and episodically verified.

Satellite data enables:

- Independent exposure monitoring  
- Consistent temporal evaluation  
- Scalable cross-asset comparison  

This project evaluates whether satellite-derived vegetation exposure metrics can serve as structured, comparable proxies for industrial environmental risk.

Portfolio-level validation, clustering analysis, weight optimization, deployment-tier logic, and bootstrap stability testing have been implemented to assess structural robustness and operational readiness.

---

# Development Progression

## Phase 0 — Conceptual Grounding

- GIS fundamentals consolidated  
- Raster vs vector clarified  
- NDVI spectral logic validated  
- Seasonal variability examined  

---

## Phase 1 — Signal Extraction Pipeline

- Spatial buffer-based analysis implemented  
- Sentinel-2 harmonized dataset integrated  
- Median compositing operational  
- Multi-year NDVI extraction (2019–2023)  
- Temporal structuring established  

---

## Phase 2 — Deep Case Study Validation

**Carajás Mine (Brazil)**

- Multi-scale buffer refinement (5 km → 1 km)  
- Metric evolution (Mean NDVI → Low NDVI Fraction)  
- Seasonal instability resolved via full-year compositing  
- Pit-centered spatial anchoring  
- Persistent exposed footprint quantified  

See:

`notes/case-study-carajas.md`

---

## Phase 3 — Cross-Site Generalization

**Gevra Coal Mine (India)**

- Pipeline validation across new geography  
- Stable exposure extraction (2019–2023)  
- Cross-site comparative analysis  

See:

`notes/case-study-gevra.md`  
`experiments/python/comparative_analysis.ipynb`

---

## Phase 4 — Portfolio-Level Risk Modeling (CERI v1 → v2)

Two additional assets were integrated:

- **Bingham Canyon (USA)**  
- **Grasberg Mine (Indonesia)**  

Portfolio spans four geographically diverse mining operations.

### CERI v1

Two-asset prototype demonstrating feature design and composite scoring.

### CERI v2 (Governance Baseline)

Four-asset portfolio model featuring:

- Standardized feature engineering (F1, F2, F3)  
- Z-score normalization  
- Composite risk scoring (CERI_z)  
- Weight sensitivity testing  
- Geometric feature space analysis  
- KMeans clustering (k=2, k=3)  
- Silhouette-based validation  

Final feature layer exported to:

`assets/data/processed/ceri_v2_feature_layer.csv`

CERI v2 remains the official scoring baseline.

---

## Phase 5 — Weight Optimization & Robustness Validation (CERI v3)

CERI v3 introduced data-driven weight optimization:

- Structured weight grid search  
- Silhouette maximization (k = 3)  
- Ranking shift quantification  
- Spearman & Kendall stability analysis  
- Governance decision framework  

Key findings:

- Optimization improves geometric separation  
- Extreme-tier assets remain stable  
- Moderate-tier ordering shifts under heavy stability weighting  
- Ranking stability remains strong (Spearman ≈ 0.80)

Governance Decision:

CERI v2 retained as baseline.  
CERI v3 serves as analytical validation layer.

See:

`notes/ceri-v3-weight-optimization.md`  
`notes/ceri-governance-decision.md`

---

## Phase 6 — Deployment Tier Logic (CERI v4)

CERI v4 operationalizes the framework into a deterministic classification system.

Includes:

- Z-score threshold-based tier assignment  
- High / Moderate / Low risk segmentation  
- Margin-based confidence scoring  
- Confidence band labeling (High / Medium / Low)  
- Deployment-ready output table  

No clustering dependency at deployment stage.

CERI v4 converts validated composite scoring into a stable, production-style risk classification layer.

See:

`notes/ceri-v4-deployment.md`  
`experiments/python/ceri/ceri_v4_deployment_logic.ipynb`

---

## Phase 7 — Bootstrap Stability Validation (CERI v5)

CERI v5 evaluates score robustness under simulated temporal variation.

Includes:

- 1000 bootstrap simulations  
- Score distribution analysis  
- Ranking robustness evaluation  
- Tier classification stability assessment  

Key findings:

- Exposure scores remain tightly distributed  
- Cross-asset ranking remains structurally stable  
- Tier assignments remain consistent under resampling  

Bootstrap validation confirms that the framework behaves as a **stable comparative exposure signal rather than a fragile point estimate.**

See:

`notes/ceri_v5_bootstrap_stability.md`  
`experiments/python/ceri/ceri_v5_bootstrap_stability.ipynb`

---

## Phase 8 — Predictive Modeling Validation (CERI v6)

CERI v6 evaluates whether engineered exposure features can predict the composite exposure score using supervised machine learning models.

Models implemented:

- Linear Regression  
- Random Forest Regression  

Evaluation approach:

- Leave-One-Out Cross Validation (LOOCV)  
- RMSE comparison across models  
- Feature importance analysis  

Results indicate that the engineered exposure features contain meaningful predictive structure, confirming that the environmental signal extracted from satellite data is compatible with machine learning modeling frameworks.

This stage demonstrates that the exposure scoring system can function as a structured feature layer for downstream predictive models.

See:

`notes/ceri_v6_predictive_modeling.md`  
`experiments/python/ceri/ceri_v6_predictive_modeling.ipynb`

---

# Repository Structure

- `notes/` — Conceptual documentation, case studies, governance, and deployment logic  
- `experiments/` — GEE extraction scripts and Python modeling notebooks  
- `assets/` — Generated datasets and visualization outputs  
- `references/` — Supporting datasets and literature
  
---

## Phase 9 — Asset Integration Framework

Phase 9 formalizes the process for integrating new mining assets into the exposure scoring framework.

The objective of this stage is to demonstrate how the system scales beyond the initial four-asset portfolio.

This phase defines a deterministic workflow for adding new assets:

1. Identify mining asset coordinates  
2. Run satellite extraction via Google Earth Engine  
3. Export exposure metrics  
4. Generate exposure features (F1, F2, F3)  
5. Compute the composite exposure score (CERI_z)  
6. Assign the deployment risk tier  

This integration pipeline ensures that the framework can be applied consistently across new mining operations without manual adjustments.

Documentation:

`notes/new_asset_integration.md`

This stage demonstrates that the framework functions as a **scalable exposure scoring system rather than a fixed portfolio experiment.**

---

## Phase 10 — Feature Interpretability (CERI v7)

Phase 10 introduces interpretability analysis for the exposure scoring system.

While earlier stages validated score robustness and predictive structure, this stage focuses on **understanding how engineered features influence the final exposure score.**

Analyses implemented:

- Feature correlation analysis  
- Feature vs score relationship visualization  
- Sensitivity analysis of exposure signals  
- Feature contribution interpretation  

The objective is to verify that the scoring system behaves consistently with the conceptual design of the exposure framework.

Key findings:

- **Exposure intensity (F1)** is the dominant driver of the composite score  
- **Vegetation suppression (F2)** reinforces exposure signals  
- **Exposure persistence (F3)** acts as a stability adjustment factor  

This stage improves **transparency and interpretability of the exposure scoring system**.

See:

`notes/ceri_v7_feature_interpretability.md`  
`experiments/python/ceri/ceri_v7_feature_interpretability.ipynb`

---

# Repository Structure

- `notes/` — Conceptual documentation, case studies, governance, and deployment logic  
- `experiments/` — GEE extraction scripts and Python modeling notebooks  
- `assets/` — Generated datasets and visualization outputs  
- `references/` — Supporting datasets and literature  

---

# Reproducibility

All outputs are reproducible via:

1. Running the corresponding GEE extraction script  
2. Exporting CSV results  
3. Running associated Python notebooks  

Covered assets:

- Carajás (Brazil)  
- Gevra (India)  
- Bingham Canyon (USA)  
- Grasberg (Indonesia)

CERI v2 outputs are versioned and frozen.  
CERI v3 operates exclusively on the frozen v2 feature layer.  
CERI v4 applies deterministic tier logic without refitting models.  
CERI v5 evaluates statistical stability using bootstrap resampling.  
CERI v6 evaluates predictive structure via supervised machine learning.  
CERI v7 provides interpretability analysis of exposure features.

---

# Project Positioning

This repository represents:

- a structured geospatial modeling system  
- a versioned environmental exposure scoring framework  
- a governance-validated composite model  
- a deployment-ready risk classification layer  
- a statistically validated exposure scoring system  
- a machine-learning compatible feature engineering pipeline  
- an interpretable exposure scoring architecture  

The emphasis is on:

- statistical rigor  
- geometric interpretability  
- robustness testing  
- governance discipline  
- deterministic deployment logic  
- version-controlled model evolution  

Development proceeds in deliberate, documented stages rather than ad hoc experimentation.
