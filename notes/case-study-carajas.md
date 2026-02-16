# Case Study 01 — Carajás Mine (Brazil)

## Objective

Validate whether a satellite-derived vegetation signal can detect and quantify exposed mining footprint.

This case study evaluates methodological stability across spatial and temporal refinements.

---

# v1 — Regional Coordinate, 5km Buffer

**Configuration**
- Approximate regional coordinate
- 5 km circular buffer
- Jan–Mar seasonal composite
- Metric: Mean NDVI

**Result**
- Mean NDVI ≈ 0.6–0.7
- Strong vegetation dominance

**Observation**
The mining footprint was not detected.
The signal reflected dense surrounding Amazon forest.

**Conclusion**
Large spatial buffers in heterogeneous regions smooth industrial signal.
Mean NDVI alone is insufficient at broad scale.

---

# v2 — Reduced Buffer (1km), Still Regional Coordinate

**Configuration**
- 1 km buffer
- Jan–Mar seasonal composite
- Metric: Mean NDVI

**Result**
- NDVI unstable year-to-year
- Still largely vegetation-dominated

**Observation**
Reducing buffer increased sensitivity but signal remained unstable.

**Conclusion**
Buffer size influences signal, but spatial anchoring must be precise.

---

# v3 — Low NDVI Fraction (Seasonal Window)

**Configuration**
- 1 km buffer
- Jan–Mar seasonal composite
- Metric: Low NDVI Fraction (NDVI < 0.2)

**Result**
- Higher sensitivity to exposed land
- Significant volatility across years

**Observation**
Threshold-based metric improved mining sensitivity,
but seasonal cloud dynamics in equatorial regions introduced instability.

**Conclusion**
Metric refinement alone is insufficient without temporal stabilization.

---

# v4 — Pit-Centered, Full-Year Composite

**Configuration**
- Coordinate manually centered on exposed pit
- 1 km buffer
- Full-year median composite
- Metrics:
    - Mean NDVI
    - Low NDVI Fraction (< 0.2)

**Results**

| Year | Mean NDVI | Low NDVI Fraction |
|------|-----------|------------------|
| 2019 | 0.059 | 0.866 |
| 2020 | 0.059 | 0.921 |
| 2021 | 0.013 | 0.975 |
| 2022 | 0.030 | 0.954 |
| 2023 | 0.015 | 0.971 |

**Observations**

- Mean NDVI remains near zero across all years.
- Low NDVI fraction remains consistently high (86–97%).
- 2021 shows peak exposure (~97.5%).
- No vegetation recovery within the pit-centered zone.

**Interpretation**

The exposed mining footprint is persistent and dominant within the 1 km pit-centered buffer.

Temporal smoothing via full-year compositing stabilized tropical cloud effects.

Spatial anchoring proved critical for signal validity.

---

# Methodological Insights

1. Spatial anchoring determines environmental signal integrity.
2. Mean NDVI can mask industrial footprint when mixed with vegetation.
3. Threshold-based metrics (low NDVI fraction) are more mining-sensitive.
4. Full-year compositing stabilizes equatorial cloud volatility.
5. Buffer scale directly influences footprint detectability.

---

# Phase 2 Conclusion

The satellite-based vegetation pipeline successfully detects persistent exposed mining footprint when:

- Spatial targeting is precise.
- Buffer scale is appropriate.
- Temporal aggregation is stabilized.

This validates the feasibility of vegetation-derived environmental exposure indicators for industrial asset monitoring.

Phase 3 will expand toward comparative site analysis and structured environmental risk scoring.
