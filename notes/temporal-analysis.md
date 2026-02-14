# Temporal Analysis — Interpreting Vegetation Change Over Time

## Why Time Matters

NDVI at a single timestamp provides a vegetation snapshot.

However, environmental risk assessment is not about snapshots — it is about trends.

Mining-driven degradation, if present, is unlikely to appear as a single abrupt NDVI drop. Instead, it typically manifests as sustained vegetation decline, spatial expansion of exposed soil, and persistent reduction in vegetation density.

Temporal modeling converts NDVI from a static indicator into a dynamic signal.

---

## Observing NDVI Variation Across Time

Initial experimentation involved computing NDVI for the same geographic location across different date ranges.

Noticeable differences were observed.

This immediately raised a critical question:

Does NDVI change always imply degradation?

The answer is no.

NDVI varies due to multiple factors.

---

## Sources of NDVI Variation

NDVI change can arise from three primary causes:

### 1. Genuine Vegetation Change
- Land clearing
- Mining expansion
- Reforestation
- Natural regrowth

This is the signal of interest.

---

### 2. Seasonal Variation

Vegetation cycles fluctuate across seasons:

- Wet season → Higher NDVI
- Dry season → Lower NDVI

Even comparing the same months across different years may produce variation due to rainfall differences.

Without controlling for seasonality, NDVI interpretation can become misleading.

---

### 3. Data Artifacts

Satellite imagery may contain:

- Cloud cover
- Cloud shadows
- Atmospheric noise

Even with filtering, residual artifacts may distort NDVI.

Temporal modeling must account for these potential distortions.

---

## Controlling for Seasonality

To isolate genuine degradation signals, comparisons should:

- Use consistent seasonal windows (e.g., January–March across multiple years)
- Avoid mixing wet and dry seasons
- Aggregate multiple images when possible

Comparing:
January 2021 vs July 2021  
would conflate seasonal effects.

Comparing:
January 2021 vs January 2023  
is methodologically stronger.

This principle will be foundational in mining site analysis.

---

## From Visual Comparison to Quantitative Measurement

Visual NDVI maps provide intuition.

However, risk modeling requires numerical aggregation.

For a defined spatial buffer:

1. Compute NDVI per pixel  
2. Aggregate mean NDVI across region  
3. Repeat across consistent time intervals  
4. Observe trend slope  

Example conceptual sequence:

Year 1 → Mean NDVI = 0.72  
Year 2 → Mean NDVI = 0.64  
Year 3 → Mean NDVI = 0.51  

Sustained decline across seasonally aligned windows strengthens degradation inference.

Single-period fluctuation does not.

---

## Temporal Signal vs. Causal Inference

A key analytical discipline:

NDVI decline ≠ automatic mining impact.

Inference requires:

- Spatial alignment with mining footprint
- Expansion of exposed soil in RGB imagery
- Sustained multi-year trend
- Controlled seasonal comparison

Causality must be approached cautiously.

This distinction separates environmental monitoring from environmental speculation.

---

## Conceptual Shift

Initially, NDVI variation appeared as a visual difference.

Temporal reasoning reframed the problem as:

- Signal detection over time
- Controlled comparison across seasonal windows
- Trend analysis rather than snapshot interpretation

The core insight:

Environmental risk modeling is fundamentally temporal.

Without time, NDVI is descriptive.
With time, NDVI becomes diagnostic.

---

## What Is Now Clear

- NDVI must be interpreted within temporal context.
- Seasonality control is essential.
- Sustained trends carry more weight than isolated drops.
- Quantitative aggregation is necessary for risk modeling.

---

## What Requires Further Development

- Robust seasonal normalization techniques
- Statistical modeling of NDVI trend slopes
- Integration of spatial buffer logic
- Transition from vegetation signal to formal risk index (CERI)

---

Temporal modeling transforms satellite imagery from observation into structured environmental intelligence.
