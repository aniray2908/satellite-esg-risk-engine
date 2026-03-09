# Experiments

This directory contains reproducible analytical scripts and notebooks used during:

- Signal extraction  
- Metric validation  
- Cross-site comparison  
- Portfolio expansion  
- Risk modeling (CERI framework)  
- Weight optimization & governance validation  
- Deployment tier logic implementation  
- Model robustness validation  
- Predictive modeling validation  

---

## GEE Scripts

Located in:

experiments/gee/

These scripts extract satellite-derived vegetation exposure metrics
using Sentinel-2 Surface Reflectance data.

- `v1_mean_ndvi_regional_5km.js`
- `v2_mean_ndvi_1km.js`
- `v3_low_ndvi_fraction_seasonal.js`
- `v4_carajas_low_ndvi_full_year_pit_centered.js`
- `v1_gevra_low_ndvi_full_year_pit_centered.js`
- `v1_bingham_low_ndvi_full_year_pit_centered.js`
- `v1_grasberg_low_ndvi_full_year_pit_centered.js`

Each GEE script:

- Uses a 1 km pit-centered buffer  
- Applies full-year median compositing (2019–2023)  
- Computes:
  - Mean NDVI  
  - Low NDVI Fraction (NDVI < 0.2)  
- Exports reproducible CSV tables  

These scripts form the deterministic satellite extraction layer
that feeds all downstream modeling.

---

## Python Notebooks

Located in:

experiments/python/

---

### Site-Level Plotting

Each asset has its own reproducible plotting notebook:

- `carajas/plot_v4_trends.ipynb`
- `gevra/plot_v1_trends.ipynb`
- `bingham/plot_v1_trends.ipynb`
- `grasberg/plot_v1_trends.ipynb`

These notebooks generate:

- Mean NDVI trend plots  
- Low NDVI Fraction trend plots  

Outputs are stored in:

`assets/plots/`

---

### Comparative Analysis

- `comparative_analysis.ipynb`

Performs cross-site visualization and comparative interpretation
of exposure metrics across assets.

This notebook establishes cross-asset structural consistency
prior to portfolio-level modeling.

---

## Risk Modeling — CERI Framework

Located in:

experiments/python/ceri/

---

### `ceri_v1.ipynb`

Two-asset prototype model (Carajás + Gevra).

Includes:

- Feature engineering (F1, F2, F3)  
- Min-max normalization  
- Z-score normalization  
- Weighted composite scoring  
- Illustrative clustering  

Represents initial composite framework validation.

---

### `ceri_v2.ipynb` (Frozen Baseline)

Four-asset portfolio model:

- Carajás  
- Gevra  
- Bingham Canyon  
- Grasberg  

Includes:

- Portfolio-level feature engineering  
- Z-score normalization  
- Composite risk scoring (CERI_z)  
- KMeans clustering (k=2, k=3)  
- Silhouette score evaluation  
- Tier segmentation  
- Weight sensitivity analysis  
- Feature space geometry analysis  

CERI v2 is treated as the governance-stable baseline model.

Final feature layer exported to:

`assets/data/ceri_v2_feature_layer.csv`

---

### `ceri_v3_weight_optimization.ipynb`

Data-driven weight optimization model.

Builds on the frozen CERI v2 feature layer and:

- Performs structured weight grid search  
- Optimizes weights via silhouette maximization (k = 3)  
- Compares CERI_v2 vs optimized CERI_v3 rankings  
- Quantifies ranking shift magnitude  
- Computes Spearman & Kendall stability metrics  
- Documents governance decision  

CERI v3 functions as:

- Analytical validation layer  
- Robustness demonstration  
- Optimization experiment  

CERI v2 remains the official scoring baseline.

---

### `ceri_v4_deployment_logic.ipynb`

Deployment-ready tier classification model.

Builds on frozen CERI v2 scores and:

- Applies deterministic Z-score thresholds  
- Assigns High / Moderate / Low risk tiers  
- Computes confidence margins  
- Labels confidence bands (High / Medium / Low)  
- Produces structured deployment output table  

CERI v4 converts validated composite scoring into a stable,
production-style risk classification layer.

---

### `ceri_v5_bootstrap_stability.ipynb`

Bootstrap-based robustness validation of the exposure scoring system.

This notebook evaluates how sensitive composite exposure scores are
to temporal variation in the underlying data.

The analysis:

- Resamples yearly observations using bootstrap simulation  
- Generates score distributions across 1000 iterations  
- Evaluates score variance and ranking stability  
- Confirms tier classification robustness  

Bootstrap testing provides statistical evidence that the
CERI scoring framework is **stable under moderate data perturbations**.

---

### `ceri_v6_predictive_modeling.ipynb`

Supervised machine learning evaluation of the engineered exposure features.

This notebook investigates whether the exposure features used in the
CERI scoring framework contain sufficient predictive structure to
reconstruct the composite exposure score.

Models evaluated include:

- Linear Regression (baseline reconstruction model)
- Random Forest Regression (nonlinear model)

Evaluation methodology:

- Leave-One-Out Cross Validation (LOOCV) due to small portfolio size
- RMSE comparison across models
- Feature importance analysis from Random Forest

The goal of this stage is not to replace the composite scoring system,
but to demonstrate that the engineered exposure features behave
consistently within a supervised learning framework.

This validates that the environmental signal extracted from satellite
data can function as a **machine learning–compatible feature layer**.

---

## Reproducibility

All metrics, scores, tiers, and plots are fully reproducible by:

1. Running the corresponding GEE extraction script  
2. Exporting the CSV file  
3. Running the associated Python notebook  

The modeling layer consumes exported CSV files directly.

No manual adjustments are applied to exported data.  
Version progression (v2 → v3 → v4 → v5 → v6) operates strictly on frozen upstream outputs.
