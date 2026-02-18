# Experiments

This directory contains reproducible analytical scripts used during:

- Signal extraction
- Metric validation
- Cross-site comparison
- Portfolio expansion
- Risk modeling (CERI framework)

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

Represents portfolio expansion in mountainous tropical environment.

---

Each GEE script:

- Uses a 1 km pit-centered buffer
- Applies full-year median compositing (2019–2023)
- Computes:
  - Mean NDVI
  - Low NDVI Fraction (NDVI < 0.2)
- Exports reproducible CSV tables

---

## Python Scripts

Located in:

experiments/python/

---

### Site-Level Plotting

Each asset has its own reproducible plotting script:

- `carajas/plot_v4_trends.ipynb`
- `gevra/plot_v1_trends.ipynb`
- `bingham/plot_v1_trends.ipynb`
- `grasberg/plot_v1_trends.ipynb`

These scripts generate:

- Mean NDVI trend plots
- Low NDVI Fraction trend plots

Outputs are stored in:

assets/plots/

---

### Comparative Analysis

- `comparative_analysis.ipynb`

Performs cross-site visualization and comparative interpretation
of exposure metrics across assets.

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
- Unsupervised clustering (illustrative)

---

### `ceri_v2.ipynb`

Four-asset portfolio model:

- Carajás
- Gevra
- Bingham Canyon
- Grasberg

Includes:

- Portfolio-level feature engineering
- Z-score normalization
- Composite risk scoring (CERI_z)
- KMeans clustering
- Silhouette score evaluation
- Portfolio segmentation

CERI v2 represents the transition from prototype scoring
to portfolio-level environmental risk modeling.

---

## Reproducibility

All metrics, scores, and plots are fully reproducible by:

1. Running the corresponding GEE script.
2. Exporting the CSV file.
3. Running the associated Python notebook or script.

No manual adjustments are applied to exported data.
