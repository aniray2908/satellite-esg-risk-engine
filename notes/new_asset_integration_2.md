# Integrating a New Asset into the Exposure Scoring Framework

This document explains how to add a new mining asset to the Satellite-Based Exposure Scoring Framework and compute its exposure score using the CERI pipeline.

The workflow demonstrates how raw satellite imagery can be transformed into a standardized environmental exposure score.

An example asset is used throughout this guide.

Example asset: **Chuquicamata Mine (Chile)**

---

# Overview

Integrating a new asset follows a deterministic sequence of steps:

1. Identify asset coordinates  
2. Run satellite extraction in Google Earth Engine  
3. Export exposure metrics  
4. Generate exposure features  
5. Compute the CERI exposure score  
6. Assign the risk tier classification

All steps rely on scripts and notebooks already included in the repository.

---

# Step 1 — Identify Asset Coordinates

The framework requires the **geographic coordinates of the mining pit center**.

Coordinates can be obtained using:

- Google Maps
- OpenStreetMap
- Google Earth

Example coordinates for Chuquicamata Mine:
latitude: -22.291
longitude: -68.904

These coordinates represent the center of the open-pit mining area.

They will be used to define the spatial analysis buffer.

---

# Step 2 — Run Satellite Extraction Script

Exposure metrics are extracted using **Google Earth Engine (GEE)** scripts located in:
experiments/gee/

These scripts perform the following operations:

- Load Sentinel-2 satellite imagery
- Compute NDVI values
- Apply cloud filtering
- Create median yearly composites
- Extract vegetation exposure metrics within a **1 km buffer** around the pit center

Example extraction workflow:
Asset coordinates
↓
Define 1 km analysis buffer
↓
Load Sentinel-2 imagery (2019–2023)
↓
Compute NDVI
↓
Extract exposure metrics

The output is a yearly table of vegetation exposure indicators.

---

# Step 3 — Export Exposure Metrics

Export the extracted exposure metrics from Google Earth Engine as a CSV file.

Each row represents one year of observations for the selected mining asset.

Example schema:

| year | mean_ndvi | low_ndvi_fraction | image_count |
|------|-----------|-------------------|-------------|
| 2019 | 0.21 | 0.68 | 52 |
| 2020 | 0.23 | 0.65 | 48 |
| 2021 | 0.20 | 0.70 | 55 |
| 2022 | 0.22 | 0.67 | 51 |
| 2023 | 0.19 | 0.72 | 49 |

Save the exported dataset in the repository under:
assets/data/raw/

Example filename:
chuquicamata_pit_centered_full_year_v1.csv

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
CERI_z = w1 * F1_z + w2 * F2_z + w3 * F3_z

Baseline weights:
w1 = 0.5
w2 = 0.3
w3 = 0.2

Each feature is standardized using **Z-score normalization** across the asset portfolio before computing the composite score.

The resulting score represents the **relative environmental exposure level of the asset within the portfolio**.

---

# Step 6 — Assign Risk Tier

Deployment classification uses deterministic thresholds applied to the CERI score.

Example tier logic:

| CERI_z | Risk Tier |
|------|-----------|
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
| Chuquicamata | 0.62 | High Risk |

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
