# CERI v4 — Deployment Tier Logic

## Objective

Translate the validated CERI v2 composite score into a deterministic,
deployable risk classification system.

Unlike clustering-based segmentation, tier assignment here is threshold-based and stable.

---

## Tier Definition

CERI_z thresholds:

- High Risk → CERI_z ≥ +0.5
- Moderate Risk → -0.5 < CERI_z < +0.5
- Low Risk → CERI_z ≤ -0.5

These thresholds are chosen for:

- Interpretability
- Stability
- Deployment clarity
- Avoidance of re-clustering during scoring

---

## Confidence Margin

Confidence is defined as distance from the nearest threshold.

Higher margin → stronger classification certainty.

Confidence bands:

- High Confidence → margin ≥ 0.3
- Medium Confidence → 0.1 ≤ margin < 0.3
- Low Confidence → margin < 0.1

---

## Resulting Portfolio Segmentation

High Risk:
- Grasberg (Medium Confidence)
- Bingham (Low Confidence)

Moderate Risk:
- Carajás (High Confidence)

Low Risk:
- Gevra (High Confidence)

---

## Interpretation

Extreme-tier assets remain structurally separated.

Borderline cases are identified via low confidence bands.

The deployment layer preserves:

- Deterministic logic
- Governance stability
- Interpretability
- Risk transparency

---

## Conclusion

CERI v4 operationalizes the exposure scoring framework into a production-ready classification system.

CERI v2 remains the scoring baseline.
CERI v4 defines deterministic tier logic and confidence reporting.
