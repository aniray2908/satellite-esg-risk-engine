# Experiments

This directory contains practical implementations and exploratory scripts used to validate core concepts and refine analytical metrics.

## GEE Scripts

Earth Engine scripts used during development are organized under subfolders, especially for case studies:
experiments/gee/carajas/

Phase 2 scripts include:
- `v1_mean_ndvi_regional_5km.js`
- `v2_mean_ndvi_1km.js`
- `v3_low_ndvi_fraction_seasonal.js`
- `v4_low_ndvi_full_year_pit_centered.js`

Each version represents a methodological refinement in spatial targeting, temporal aggregation, and metric design.

## Python Scripts

Python scripts are used for post-processing and visualization of exported CSV results:
experiments/python/carajas/

Example:
- `plot_v4_trends.py` generates visual plots for Carajás mining metrics.

All implementations support the gradual construction of a robust environmental risk modeling framework.
