# Asset Integration Guide

This document describes how a new mining asset can be integrated into the
Satellite-Based Exposure Scoring Framework.

The framework is designed to operate on satellite-derived vegetation exposure
signals extracted from Sentinel-2 imagery. The following steps outline the
end-to-end process required to generate a CERI exposure score for a new asset.

---

# Overview

Integrating a new asset involves five stages:

1. Asset location identification
2. Satellite data extraction (Google Earth Engine)
3. Metric generation
4. Feature engineering
5. Exposure score computation

The pipeline converts raw satellite imagery into a structured exposure score
and deterministic risk tier.

---

# Step 1 — Identify Asset Coordinates

Determine the geographic coordinates of the mining asset.

Example format:
# Asset Integration Guide

This document describes how a new mining asset can be integrated into the
Satellite-Based Exposure Scoring Framework.

The framework is designed to operate on satellite-derived vegetation exposure
signals extracted from Sentinel-2 imagery. The following steps outline the
end-to-end process required to generate a CERI exposure score for a new asset.

---

# Step 2 — Run Satellite Extraction Script

Open the **Google Earth Engine console**.

Use the extraction scripts located in:
experiments/gee/

The standard extraction script:
v1_low_ndvi_full_year_pit_centered.js

Update the coordinate parameter in the script:

```javascript
var pit_center = ee.Geometry.Point([longitude, latitude]);
```
The script performs:

- Sentinel-2 imagery ingestion
- cloud filtering
- NDVI computation
- annual median compositing

It then extracts exposure metrics within a 1 km buffer around the asset.

---

# Step 3 — Export Exposure Metrics

Export the extracted exposure metrics from Google Earth Engine as a CSV file.

Each row represents one year of observations for the selected mining asset.

Example schema:

| year | mean_ndvi | low_ndvi_fraction | image_count |
|------|-----------|-------------------|-------------|
| 2019 | 0.18 | 0.69 | 53 |
| 2020 | 0.22 | 0.67 | 47 |
| 2021 | 0.18 | 0.70 | 54 |

Save the exported dataset in the repository under:
assets/data/raw/

Example filename:
assets/data/raw/new_asset_name.csv

This dataset represents the **raw satellite-derived exposure signal** for the asset.

---

# Step 4 — Generate Exposure Features

The raw satellite metrics are aggregated into structured exposure features used in the CERI framework.

Feature engineering is implemented in:
experiments/python/ceri/ceri_v2.ipynb

Three exposure features are computed.

---

## F1 — Exposure Intensity

Exposure intensity represents the average fraction of exposed land.
F1 = mean(low_ndvi_fraction)

This metric captures how much of the surrounding land area consistently exhibits **low vegetation activity (NDVI < 0.2)**.

Higher values indicate larger exposed surfaces.

---

## F2 — Vegetation Suppression

Vegetation suppression measures how strongly vegetation signals are reduced around the mining asset.
F2 = 1 − mean(mean_ndvi)

Higher values indicate stronger vegetation suppression caused by industrial activity.

---

## F3 — Exposure Persistence

Exposure persistence measures how stable the exposed land fraction remains across years.
F3 = 1 − normalized_variance(low_ndvi_fraction)

This metric captures whether exposure is **temporary or structurally persistent**.

High persistence indicates long-term environmental exposure.

---

# Step 5 — Compute CERI Exposure Score

Once the exposure features are calculated, the Corporate Environmental Risk Index (CERI) score is computed.

The baseline scoring formula is:
CERI_z = w1 * F1_z + w2 * F2_z + w3 * F3_z

Where:
w1 = 0.5
w2 = 0.3
w3 = 0.2

Each feature is standardized using **Z-score normalization** across the asset portfolio before computing the composite score.

The resulting score represents the **relative exposure level of the asset within the portfolio**.

---

# Step 6 — Assign Risk Tier

Deployment classification uses deterministic thresholds applied to the CERI score.

Example tier logic:

| CERI_z | Risk Tier |
|-------|-----------|
| > 0.5 | High Risk |
| -0.5 to 0.5 | Moderate Risk |
| < -0.5 | Low Risk |

This classification logic is implemented in:
experiments/python/ceri/ceri_v4_deployment_logic.ipynb

Tier assignments also include **confidence margins**, representing the distance between the asset score and the nearest tier boundary.

---

# Output

After processing a new asset through the pipeline, the final outputs include:

- Composite exposure score (CERI_z)
- Risk tier classification
- Confidence margin

Example output:

| asset | CERI_z | risk_tier |
|------|--------|-----------|
| New Mine | 0.62 | High Risk |

These outputs allow direct comparison of the new asset with the existing portfolio.

---

# Integration Summary

The complete integration pipeline can be summarized as:
Asset Coordinates
↓
Google Earth Engine Extraction
↓
Exposure Metrics CSV
↓
Feature Engineering
↓
CERI Composite Score
↓
Risk Tier Classification

This modular workflow enables the framework to scale to **any number of mining assets** while maintaining consistent methodology.

---

# Reproducibility

All integration steps rely on scripts and notebooks already included in the repository.

Satellite extraction:
experiments/gee/

Feature engineering and scoring:
experiments/python/ceri/

No manual data manipulation is required.

All outputs are reproducible from the satellite data extraction stage.
