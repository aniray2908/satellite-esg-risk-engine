# Assets

This directory contains all non-code artifacts generated throughout the
Satellite-Based Exposure Scoring Framework.

These files represent the **data outputs and visualizations** produced by the
satellite extraction pipeline and downstream modeling layers.

All artifacts are reproducible via scripts and notebooks located in:

`experiments/`

---

# Directory Structure
assets/\
│\
├── data/\
│ Satellite extraction outputs and modeling feature layers\
│\
├──plots/\
| Visualization outputs generated during exploratory analysis
and model interpretation

---

# data/

This directory stores **CSV datasets generated during the pipeline**.

These files form the bridge between:

Satellite extraction (GEE)  
→ Feature engineering  
→ Composite scoring  
→ Model validation

All datasets are **machine-generated and versioned**.

---

## Satellite Extraction Outputs

Exported directly from **Google Earth Engine** scripts.

Each dataset contains yearly exposure metrics extracted from
Sentinel-2 imagery.

Metrics include:

- `mean_ndvi`
- `low_ndvi_fraction`
- `image_count`
- `year`

### Available Assets

**Carajás Mine (Brazil)**  
- `carajas_pit_centered_full_year_v2_1.csv`

**Gevra Coal Mine (India)**  
- `gevra_pit_centered_full_year_v1.csv`

**Bingham Canyon Mine (USA)**  
- `bingham_pit_centered_full_year_v1.csv`

**Grasberg Mine (Indonesia)**  
- `grasberg_pit_centered_full_year_v1.csv`

Each dataset represents **multi-year satellite observations (2019–2023)**
within a **1 km pit-centered buffer** around the mining asset.

---

## Feature Engineering Layer

The downstream modeling pipeline aggregates the satellite outputs
into structured exposure features.

### `ceri_v2_feature_layer.csv`

This dataset contains the **engineered feature layer used in the CERI framework**.

Features include:

- `F1_exposure_intensity`
- `F2_vegetation_suppression`
- `F3_persistence_raw`
- `CERI_z` (composite exposure score)

This dataset serves as the **frozen baseline input for all downstream models**:

- CERI v3 — weight optimization
- CERI v4 — deployment tier logic
- CERI v5 — bootstrap stability testing
- CERI v6 — predictive modeling validation

No manual modifications are applied after export.

---

# plots/

This directory contains visualizations generated during exploratory
analysis and validation.

All plots are reproducible via the notebooks located in:

`experiments/python/`

---

## Site-Level Trends

These plots illustrate the **temporal behavior of vegetation exposure**
for each mining asset.

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

These figures visualize:

- vegetation suppression
- exposure stability
- multi-year signal persistence

---

## Cross-Asset Comparison

Comparative plots highlight structural differences between mining assets.

Examples:

- `comparison_mean_ndvi.png`
- `comparison_low_ndvi_fraction.png`

These visualizations support the transition from **site-level analysis**
to **portfolio-level exposure scoring**.

---

# Reproducibility

All artifacts stored in this directory are generated via reproducible
pipelines located in:

---

# data/

This directory stores **CSV datasets generated during the pipeline**.

These files form the bridge between:

Satellite extraction (GEE)  
→ Feature engineering  
→ Composite scoring  
→ Model validation

All datasets are **machine-generated and versioned**.

---

## Satellite Extraction Outputs

Exported directly from **Google Earth Engine** scripts.

Each dataset contains yearly exposure metrics extracted from
Sentinel-2 imagery.

Metrics include:

- `mean_ndvi`
- `low_ndvi_fraction`
- `image_count`
- `year`

### Available Assets

**Carajás Mine (Brazil)**  
- `carajas_pit_centered_full_year_v2_1.csv`

**Gevra Coal Mine (India)**  
- `gevra_pit_centered_full_year_v1.csv`

**Bingham Canyon Mine (USA)**  
- `bingham_pit_centered_full_year_v1.csv`

**Grasberg Mine (Indonesia)**  
- `grasberg_pit_centered_full_year_v1.csv`

Each dataset represents **multi-year satellite observations (2019–2023)**
within a **1 km pit-centered buffer** around the mining asset.

---

## Feature Engineering Layer

The downstream modeling pipeline aggregates the satellite outputs
into structured exposure features.

### `ceri_v2_feature_layer.csv`

This dataset contains the **engineered feature layer used in the CERI framework**.

Features include:

- `F1_exposure_intensity`
- `F2_vegetation_suppression`
- `F3_persistence_raw`
- `CERI_z` (composite exposure score)

This dataset serves as the **frozen baseline input for all downstream models**:

- CERI v3 — weight optimization
- CERI v4 — deployment tier logic
- CERI v5 — bootstrap stability testing
- CERI v6 — predictive modeling validation

No manual modifications are applied after export.

---

# plots/

This directory contains visualizations generated during exploratory
analysis and validation.

All plots are reproducible via the notebooks located in:

`experiments/python/`

---

## Site-Level Trends

These plots illustrate the **temporal behavior of vegetation exposure**
for each mining asset.

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

These figures visualize:

- vegetation suppression
- exposure stability
- multi-year signal persistence

---

## Cross-Asset Comparison

Comparative plots highlight structural differences between mining assets.

Examples:

- `comparison_mean_ndvi.png`
- `comparison_low_ndvi_fraction.png`

These visualizations support the transition from **site-level analysis**
to **portfolio-level exposure scoring**.

---

# Reproducibility

All artifacts stored in this directory are generated via reproducible
pipelines located in:
experiments/

Reproduction workflow:

1. Run the appropriate **Google Earth Engine extraction script**
2. Export the resulting CSV file
3. Run the corresponding **Python notebook**
4. Regenerate plots and feature layers

No manual adjustments are applied to exported datasets.

---

# Role in the Framework

The `assets/` directory represents the **data backbone** of the
Satellite-Based Exposure Scoring Framework.

It provides:

- Satellite-derived exposure observations
- Feature engineering inputs
- Visualization outputs
- Versioned datasets for modeling experiments

These artifacts connect the **geospatial extraction layer**
with the **statistical modeling and machine learning layers**
of the project.
