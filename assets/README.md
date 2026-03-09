# Assets

This directory contains all non-code artifacts generated throughout the
Satellite-Based Exposure Scoring Framework.

These artifacts include:

- Satellite-derived datasets
- Feature-engineered modeling layers
- Visualization outputs

All files stored here are **generated outputs** from scripts and notebooks
located in the `experiments/` directory.

---

# Directory Structure

assets/\
│\
├── data/\
│   ├── raw/\
│   └── processed/\
│\
└── plots/

---

# data/

This directory stores datasets produced during the pipeline.

The data layer is divided into two stages:

- **raw/** — direct outputs from satellite extraction
- **processed/** — engineered datasets used in modeling

---

## raw/

These datasets are exported directly from **Google Earth Engine (GEE)**.

Each file contains yearly vegetation exposure metrics extracted from
Sentinel-2 imagery.

Metrics include:

- `mean_ndvi`
- `low_ndvi_fraction`
- `image_count`
- `year`

### Available Assets

**Carajás Mine (Brazil)**  
`carajas_pit_centered_full_year_v2_1.csv`

**Gevra Coal Mine (India)**  
`gevra_pit_centered_full_year_v1.csv`

**Bingham Canyon Mine (USA)**  
`bingham_pit_centered_full_year_v1.csv`

**Grasberg Mine (Indonesia)**  
`grasberg_pit_centered_full_year_v1.csv`

These datasets represent **multi-year satellite observations (2019–2023)**
within a **1 km pit-centered buffer** around each mining asset.

They serve as the **input layer for downstream feature engineering and modeling**.

---

## processed/

These datasets represent **feature-engineered layers used in the CERI framework**.

### `ceri_v2_feature_layer.csv`

This dataset contains the aggregated exposure features used for
portfolio-level modeling.

Engineered features include:

- `F1_exposure_intensity`
- `F2_vegetation_suppression`
- `F3_persistence_raw`
- `CERI_z` (composite exposure score)

This feature layer serves as the **frozen baseline dataset** used in:

- CERI v3 — weight optimization
- CERI v4 — deployment tier classification
- CERI v5 — bootstrap stability validation
- CERI v6 — predictive modeling experiments

Once generated, this dataset is **not manually modified** to ensure
reproducibility across modeling stages.

---

# plots/

This directory contains visualization outputs generated during analysis.

Plots are produced by notebooks located in:

`experiments/python/`

---

## Site-Level Visualizations

Temporal vegetation exposure trends for each mining asset.

### Carajás

- `carajas_mean_ndvi.png`
- `carajas_low_ndvi_fraction.png`

### Gevra

- `gevra_mean_ndvi.png`
- `gevra_low_ndvi_fraction.png`

### Bingham Canyon

- `bingham_mean_ndvi.png`
- `bingham_low_ndvi_fraction.png`

### Grasberg

- `grasberg_mean_ndvi.png`
- `grasberg_low_ndvi_fraction.png`

These plots visualize:

- vegetation suppression
- exposed land fraction
- multi-year environmental stability

---

## Cross-Asset Comparisons

Comparative plots used for portfolio-level interpretation.

Examples:

- `comparison_mean_ndvi.png`
- `comparison_low_ndvi_fraction.png`

These figures highlight structural differences between mining assets
and support cross-site exposure scoring.

---

# Reproducibility

All artifacts in this directory are fully reproducible via scripts
located in:

`experiments/`

Reproduction workflow:

1. Run the appropriate **Google Earth Engine extraction script**
2. Export the CSV file
3. Run the associated **Python notebook**
4. Regenerate plots and feature layers

No manual adjustments are applied to exported datasets.

---

# Role in the Framework

The `assets/` directory functions as the **data backbone of the project**.

It provides:

- satellite-derived exposure observations
- feature-engineered modeling datasets
- visualization artifacts used for interpretation

These artifacts connect the **geospatial extraction layer**
with the **statistical modeling and machine learning layers**
of the exposure scoring framework.
