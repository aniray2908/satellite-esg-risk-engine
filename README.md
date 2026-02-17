# Satellite-Based Environmental Risk Engine  
### Mining Asset Vegetation Degradation Monitoring via Multi-Spectral Satellite Imagery
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Phase](https://img.shields.io/badge/phase-2-blue)
![Data](https://img.shields.io/badge/data-Sentinel--2-lightgrey)
![Reproducible](https://img.shields.io/badge/reproducible-yes-success)


## Overview

This repository documents the structured development of a satellite-driven environmental risk assessment framework focused on mining assets.

The objective is to design and implement a system that:

- Extracts multi-spectral satellite imagery  
- Computes vegetation health indicators (NDVI)  
- Tracks temporal environmental change  
- Quantifies sustained vegetation degradation  
- Lays groundwork for a Corporate Environmental Risk Index (CERI)  

This project sits at the intersection of:

- Geospatial analytics  
- Remote sensing fundamentals  
- Environmental risk modeling  
- Quantitative reasoning  

---

## Motivation

Corporate ESG disclosures are largely self-reported and infrequently verified.

Satellite data enables independent, scalable, and time-consistent environmental monitoring.

This project explores whether vegetation change around mining assets can serve as a measurable proxy for environmental degradation risk.

The long-term goal is to formalize this into a systematic risk-scoring framework.

---

## Current Development Status

### Phase 0 — Conceptual Grounding (Completed)
- GIS fundamentals consolidated
- Raster vs vector clarified
- NDVI spectral logic validated
- Seasonal variability explored

### Phase 1 — Signal Extraction Pipeline (Completed)
- Spatial buffer-based analysis implemented
- Sentinel-2 harmonized dataset integrated
- Median compositing operational
- Multi-year NDVI extraction (2019–2023)
- Temporal structuring established

### Phase 2 — Deep Case Study Validation (Completed)

Case Study: **Carajás Mine (Brazil)**

- Multi-scale buffer refinement (5 km → 1 km)
- Metric evolution (Mean NDVI → Low NDVI Fraction)
- Seasonal instability identified
- Full-year composite stabilization applied
- Spatial anchoring corrected (pit-centered coordinate)
- Persistent exposed mining footprint quantified
- Exported CSV metrics and Python visualizations generated

See: `notes/case-study-carajas.md`

### Phase 3 — Cross-Site Generalization (Completed)

Case Study: **Gevra Coal Mine (India)**

- Validated pit-centered 1 km buffer approach
- Applied full-year median composite (2019–2023)
- Extracted Mean NDVI and Low NDVI Fraction
- Confirmed stable exposure profile
- Performed cross-site comparative analysis

See:
- `notes/case-study-gevra.md`
- `experiments/python/comparative_analysis.ipynb`

---

## Architectural Direction

The project is evolving from environmental signal extraction toward a modular satellite-derived risk intelligence framework.

Environmental exposure currently serves as the first validated signal module.

Future phases will formalize structured risk scoring and aggregation.

---

## Repository Structure

- `notes/` — Conceptual documentation and reflective technical consolidation  
- `experiments/` — Hands-on implementations (Google Earth Engine & Python)  
- `assets/` — Visual outputs and analysis artifacts  
- `references/` — Supporting literature and data sources  

---

## Long-Term Direction

Future stages will include:

- Buffer-based spatial analysis around real mining assets  
- Temporal trend modeling with seasonal controls  
- Vegetation loss velocity estimation  
- Formalization of a Corporate Environmental Risk Index (CERI)  

---

## Reproducibility

To reproduce the Phase 2 Carajás case study:

1. Run `experiments/gee/carajas/v4_low_ndvi_full_year_pit_centered.js` in Google Earth Engine.
2. Export the resulting table as CSV.
3. Place the CSV in `assets/data/`.
4. Run `experiments/python/carajas/plot_v4_trends.py`.
5. Regenerate the plots in `assets/plots/`.

All results in the repository are generated via these scripts.

---

This repository functions as both:

- A technical build log  
- And a structured learning archive  

The emphasis is on depth, rigor, and steady progression.
