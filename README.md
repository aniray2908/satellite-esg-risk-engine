# Satellite-Based Environmental Risk Engine  
### Mining Asset Vegetation Degradation Monitoring via Multi-Spectral Satellite Imagery

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

Phase 0 — Foundational Grounding (Completed)
- GIS and raster fundamentals consolidated
- NDVI computation validated using Sentinel-2
- Spectral alignment verified (True Color vs NDVI)
- Temporal variation analyzed with seasonality awareness

Phase 1 — Spatial Quantification (Completed)
- 5 km spatial buffer defined
- Multi-image median compositing implemented
- Mean NDVI extraction inside buffer operational
- Seasonally controlled multi-year time series (2019–2023) generated

Phase 2 — Case Study: Carajás Mine (Completed)
- Iterative methodological refinement documented
- Spatial anchoring corrected (pit-centered coordinate)
- Threshold-based low NDVI fraction implemented
- Full-year median composites used for stability
- Persistent exposed mining footprint quantified

The system now produces structured vegetation metrics and case-study validation for real mining sites.

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

This repository functions as both:

- A technical build log  
- And a structured learning archive  

The emphasis is on depth, rigor, and steady progression.
