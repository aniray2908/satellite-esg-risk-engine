# CERI Architecture

## Purpose

The Corporate Environmental Risk Index (CERI) translates satellite-derived
exposure metrics into structured, comparable risk indicators.

The objective is to provide a scalable scoring framework
built on validated environmental signals.

---

## Feature Design

Three features were defined:

### F1 — Exposure Intensity
Mean proportion of pixels with NDVI < 0.2.

Represents magnitude of exposed land within the buffer.

---

### F2 — Vegetation Suppression
1 − Mean NDVI.

Represents overall vegetation health reduction.

---

### F3 — Exposure Stability (Persistence)
Inverse normalized variance of exposure across years.

Represents consistency of industrial footprint.

---

## Normalization

CERI v1:
- Min-max normalization
- Z-score normalization (prototype)

CERI v2:
- Portfolio-level z-score normalization only
- Improved statistical stability

---

## Composite Scoring

Weighted linear aggregation:

CERI_z =  
w1 * F1_z  
+ w2 * F2_z  
+ w3 * F3_z  

Default weights:
- w1 = 0.5
- w2 = 0.3
- w3 = 0.2

Weights are configurable and transparent.

---

## Segmentation

KMeans clustering (n=2) applied to standardized features.

Silhouette score used to evaluate cluster separation.

Clusters are mapped to:

- High Risk
- Moderate Risk

---

## Design Principles

- Transparent feature definitions
- Reproducible scoring logic
- Scalable across assets
- Modular for future signal expansion
- Simple, interpretable composite structure
