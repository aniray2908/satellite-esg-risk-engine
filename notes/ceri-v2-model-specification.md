# Corporate Environmental Risk Index (CERI v2)
## Portfolio-Level Environmental Exposure Modeling Framework

---

## Executive Overview

CERI v2 is a satellite-derived environmental exposure scoring framework
designed to quantify sustained vegetation degradation
across a mining asset portfolio.

The model converts multi-spectral NDVI signals
into standardized exposure features,
aggregates them into a composite risk score,
and validates structural segmentation using clustering
and sensitivity analysis.

CERI v2 transitions from a prototype validation model
to a portfolio-level environmental exposure intelligence system.

The framework emphasizes:

- Statistical stability  
- Geometric interpretability  
- Weight robustness  
- Modular expansion capability  

CERI v2 formalizes a satellite-derived environmental exposure scoring system
across a multi-asset mining portfolio.

The objective is to quantify sustained vegetation degradation patterns
and translate them into a structured, comparable risk signal.

This version expands the model beyond prototype validation
into portfolio-level statistical modeling and stability analysis.

---

## Portfolio Coverage

CERI v2 includes four geographically diverse mining assets:

- Carajás (Brazil)
- Gevra (India)
- Bingham Canyon (USA)
- Grasberg (Indonesia)

All assets are evaluated over a consistent 2019–2023 full-year composite window
using Sentinel-2 multi-spectral imagery.

---

## Feature Engineering Framework

Three NDVI-derived features form the core exposure signal:

### F1 — Exposure Intensity
Mean proportion of land area with NDVI < 0.2  
(Proxy for sustained exposed surface area)

### F2 — Vegetation Suppression
1 − mean NDVI  
(Captures overall reduction in vegetation health)

### F3 — Exposure Persistence
Inverse normalized variance of exposure intensity  
(High values indicate sustained, stable exposure over time)

All features are standardized via z-score normalization
to ensure cross-asset comparability.

---

## Composite Risk Score

CERI is defined as a weighted linear composite:

CERI = w1·F1_z + w2·F2_z + w3·F3_z

Baseline weights:

- w1 = 0.5 (Exposure Intensity)
- w2 = 0.3 (Vegetation Suppression)
- w3 = 0.2 (Persistence)

CERI_z represents deviation from portfolio mean exposure.

Positive values indicate above-average exposure.
Negative values indicate below-average exposure.

---

## Portfolio-Level Distribution Behavior

Compared to the two-asset prototype (CERI v1),
CERI v2 demonstrates:

- Stabilized z-score distribution
- Non-binary feature spread
- Meaningful mid-range positioning
- Improved interpretability under standardization

Expanding the asset universe reduced artificial scaling extremes
and enabled more realistic portfolio modeling.

---

## Clustering & Structural Segmentation

KMeans clustering was applied to standardized feature space.

### k = 2

- Moderate separation (silhouette ≈ 0.37)
- Isolates low-exposure outlier (Gevra)
- Groups remaining assets

### k = 3

- Improved separation (silhouette ≈ 0.42)
- Produces three structurally coherent tiers:

  • High Exposure: Bingham, Grasberg  
  • Moderate Exposure: Carajás  
  • Lower Exposure: Gevra  

Cluster structure aligns with CERI ranking tiers,
providing geometric validation of composite scoring behavior.

---

## Weight Sensitivity & Robustness Testing

A structured weight grid (including extreme dominance cases)
was evaluated to test ranking stability.

Findings:

- Rankings remain invariant under F1- and F2-dominant scenarios.
- Limited rank shifts occur only under strong F3 dominance.
- High-exposure assets remain fully stable.
- Moderate-tier assets exhibit controlled sensitivity.

Spearman correlation analysis confirms strong robustness
under reasonable and stress-tested weighting structures.

This demonstrates that ranking behavior
is driven by geometric separation rather than arbitrary weighting.

---

## Geometric Interpretation

Pairwise feature space analysis shows:

- Strong separation between high- and low-exposure assets
- Smaller margin between moderate-tier assets
- Stability axis (F3) influences local ordering but not global separation

Clustering behavior and weight sensitivity results
are geometrically consistent.

Large separation margins explain ranking stability.

---

## Model Properties

CERI v2 demonstrates:

- Structured feature engineering
- Portfolio-level normalization stability
- Controlled weight sensitivity
- Cluster validation via silhouette analysis
- Geometric interpretability of segmentation behavior

The model transitions from exploratory prototype
to structured environmental exposure scoring system.

---

## Model Assumptions & Boundaries

CERI v2 is a structured environmental exposure model.
The following assumptions define its current operational scope.

### Portfolio Size

The current implementation evaluates four assets.
While sufficient for validating modeling structure and clustering behavior,
statistical generalization remains limited.
Cluster validation metrics (e.g., silhouette score)
should be interpreted in the context of small sample size.

### Feature Scope

The model is based exclusively on NDVI-derived vegetation signals.
It does not yet incorporate:

- Water stress indicators
- Land expansion velocity
- Dust or atmospheric signals
- Operational or regulatory metadata

CERI v2 captures sustained vegetation exposure only,
not full environmental externality coverage.

### NDVI as Environmental Proxy

NDVI is an effective vegetation indicator,
but it cannot distinguish mining from other non-vegetated land types.
It serves as a proxy for exposed surface conditions,
not a direct causal measure of environmental harm.

### Weighting Structure

Composite weights are structured but heuristic.
Sensitivity testing confirms ranking robustness under reasonable
and extreme perturbations.

However:

- Weights are not yet optimized via supervised learning.
- No external ground-truth risk labels are incorporated.

Future iterations may incorporate data-driven weight estimation.

### Temporal Window

All assets are evaluated over a consistent 2019–2023 period.
The model assumes this window is representative of sustained exposure patterns.

Structural shifts outside this period are not captured.

### Clustering Assumptions

KMeans clustering assumes:

- Euclidean feature space
- Linear separability
- Convex cluster structure

Alternative clustering techniques may yield different segmentation behavior.

---

## Version Positioning

CERI v2 represents a stabilized portfolio-level exposure model.

It is:

- Statistically structured
- Geometrically interpretable
- Weight-robust
- Modular by design

It remains a versioned exposure intelligence module,
intended for expansion rather than finalization.

---

## Intended Use

CERI v2 is designed as:

- A satellite-derived environmental exposure signal
- A portfolio comparison tool
- A modular risk feature component
- A foundation for multi-signal ESG modeling

It is not intended as a complete ESG rating system,
but as a scalable environmental exposure module
within a broader risk architecture.
