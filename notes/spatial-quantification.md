# Spatial Quantification — From Visual Signal to Measurable Data

## Transitioning from Observation to Measurement

Initial NDVI experimentation focused on visual validation.

While NDVI maps provided strong intuition, environmental risk modeling requires quantifiable metrics rather than visual impressions.

This phase formalizes NDVI extraction into a structured, reproducible numerical pipeline.

The objective:

Convert vegetation signal within a defined spatial region into a measurable time series.

---

## 1. Defining the Spatial Unit — Buffer Logic

A mining asset is represented by a geographic coordinate (latitude, longitude).

To analyze environmental impact around the asset, a spatial buffer was constructed:

- Radius: 5 kilometers
- Geometry: Circular region centered on asset coordinate

This buffer becomes the unit of analysis.

Why a buffer?

Because environmental degradation often extends beyond the exact footprint of the mine itself. A buffer captures surrounding vegetation conditions and potential expansion effects.

This step transforms:

Global satellite imagery → Localized analytical region.

---

## 2. Median Compositing for Robustness

Sentinel-2 provides multiple images within a given date range.

Instead of selecting a single image (which may contain cloud artifacts or anomalous conditions), a median composite was constructed across the filtered image collection.

Procedure:

- Filter by spatial bounds (buffer)
- Filter by date window (Jan–Mar)
- Filter by cloud percentage
- Select only required bands (B4: Red, B8: NIR)
- Compute median composite

Explicit band selection was necessary to ensure homogeneous band structure across images.

Median compositing improves robustness by reducing:

- Cloud contamination
- Outlier reflectance values
- Single-image bias

---

## 3. NDVI Computation and Aggregation

NDVI was computed using:

NDVI = (NIR − Red) / (NIR + Red)

Rather than inspecting pixel-level maps, the following aggregation was applied:

- Compute NDVI per pixel
- Reduce region using mean reducer
- Extract average NDVI value within buffer

This produces a single vegetation health metric per time window.

NDVI thus becomes:

A scalar environmental indicator tied to a spatial unit and seasonal window.

---

## 4. Multi-Year Temporal Extraction (Jan–Mar Window)

To control for seasonal variation, the same time window (January–March) was analyzed across multiple years.

Extracted Mean NDVI:

2019 → 0.1999  
2020 → 0.2382  
2021 → 0.1537  
2022 → 0.1641  
2023 → 0.1519  

---

## 5. Observed Pattern

The time series reveals:

- Increase from 2019 to 2020
- Sharp decline from 2020 to 2021
- Sustained lower plateau from 2021 onward

This pattern is consistent with:

Peak vegetation followed by structural reduction and stabilization at lower levels.

However, interpretation must remain cautious.

NDVI decline alone does not confirm mining-driven degradation.

Possible explanations include:

- Rainfall variability
- Land-use conversion
- Agricultural cycles
- Broader environmental change

Further spatial and contextual validation is required.

---

## 6. Methodological Milestone

This phase marks a critical shift:

From visual exploration → Structured environmental signal extraction.

The pipeline now includes:

- Spatial buffering
- Multi-image median compositing
- Seasonally controlled comparison
- Automated multi-year extraction
- Numerical aggregation

NDVI has transitioned from a visualization layer to a reproducible time-series metric.

This establishes the quantitative backbone necessary for future risk modeling.

---

## 7. Next Steps

To strengthen environmental inference:

- Analyze actual mining asset coordinates
- Compare NDVI trend with RGB footprint expansion
- Introduce additional vegetation loss metrics
- Evaluate statistical trend slope

Spatial quantification forms the first measurable layer in constructing a Corporate Environmental Risk Index (CERI).

The system is now numerically grounded.
