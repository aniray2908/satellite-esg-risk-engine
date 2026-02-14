# Foundations — Satellite-Based Vegetation Modeling

## Entering the Domain

Initial exposure to satellite-based environmental monitoring introduced several unfamiliar terms:

- GIS  
- Raster data  
- Spectral bands  
- Remote sensing  

The domain appeared complex at first glance. However, structured exploration revealed that much of the perceived difficulty stemmed from terminology rather than conceptual depth.

This document consolidates foundational understanding established during first implementation exposure.

---

## 1. GIS and Geospatial Data Types

### Vector Data

Represents precise geometries:
- Points (e.g., mining site coordinates)
- Lines (e.g., roads)
- Polygons (e.g., forest boundaries)

Vector data is ideal when exact spatial boundaries matter.

### Raster Data

Represents spatial data as a grid of pixels.

Each pixel:
- Stores a numerical value  
- Corresponds to a specific geographic location  

Satellite imagery is raster data.

A critical realization:

> A satellite image is not merely a visual photograph.  
> It is a matrix of physically measured reflectance values anchored to Earth.

---

## 2. Spectral Bands and Near Infrared (NIR)

Satellites capture multiple spectral bands beyond visible light.

In addition to:
- Red  
- Green  
- Blue  

They capture:
- Near Infrared (NIR)

Healthy vegetation strongly reflects NIR due to internal leaf structure.

This biological property enables quantitative vegetation analysis from space.

---

## 3. NDVI — Normalized Difference Vegetation Index

NDVI is defined as:

NDVI = (NIR − Red) / (NIR + Red)

Value range: -1 to 1

Interpretation:

- 0.6–0.9 → Dense healthy vegetation  
- 0.3–0.6 → Moderate vegetation  
- 0–0.2 → Sparse vegetation / soil  
- < 0 → Water or non-vegetative surfaces  

The formula operationalizes a biological property into a measurable index.

Conceptually, NDVI reduces to:

- Two matrices  
- One arithmetic operation  
- One vegetation health map  

NDVI computation is fundamentally element-wise matrix arithmetic, reinforcing that the computational complexity lies in orchestration rather than mathematics.

---

## 4. Practical Validation via Sentinel-2

Using Google Earth Engine:

- Sentinel-2 imagery was loaded.  
- Band 4 (Red) and Band 8 (NIR) were extracted.  
- NDVI was computed.  
- NDVI layer was visually compared with true color imagery.  

Vegetation regions in RGB imagery aligned strongly with high NDVI values.
Spectral output was validated against true-color imagery to confirm vegetation alignment prior to temporal experimentation.

This confirmed spectral-to-physical correspondence.

---

## 5. Temporal Variation and Causal Caution

Changing time windows revealed noticeable NDVI differences.

This introduced a critical analytical insight:

NDVI change can result from:

1. Genuine vegetation loss or regrowth  
2. Seasonal variation  
3. Data artifacts (cloud cover, shadow effects)  

A single NDVI drop does not imply degradation.

Sustained decline across seasonally controlled comparisons provides stronger evidence. 
Initial instinct linked NDVI decline directly to degradation; further reasoning emphasized the need to separate seasonal variation from structural environmental change.

This reinforces the importance of:

- Temporal consistency  
- Causal restraint  
- Structured interpretation  

---

## 6. Conceptual Consolidation

Initial overwhelm was driven by unfamiliar vocabulary.

Hands-on interaction reframed the process as:

1. Load raster data  
2. Extract spectral bands  
3. Compute NDVI  
4. Compare across time  

The complexity lies in orchestration, not mathematics.

The domain now feels structurally navigable.
