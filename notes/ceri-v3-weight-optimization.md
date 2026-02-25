# CERI v3 — Data-Driven Weight Optimization

## Objective

CERI v3 replaces heuristic composite weights with data-driven weights selected via silhouette score maximization.

Rather than assuming feature importance, we search over a constrained weight space and select the weight vector that maximizes geometric separation in standardized feature space.

Clustering configuration:
- k = 3 (selected based on prior silhouette validation)

Search constraints:
- w1 + w2 + w3 = 1
- 0.1 ≤ wi ≤ 0.8
- Step size = 0.05

---

## Optimization Result

Best-performing weight vector:

- w1 (Exposure Intensity) = 0.10  
- w2 (Vegetation Suppression) = 0.10  
- w3 (Persistence / Stability) = 0.80  

Silhouette score:

0.433983

This indicates improved cluster separation relative to the CERI v2 baseline.

---

## Ranking Comparison

### CERI v2 (Heuristic Weights: 0.5 / 0.3 / 0.2)

| Asset      | CERI_z |
|------------|--------|
| Grasberg   | 0.650  |
| Bingham    | 0.545  |
| Carajás    | -0.113 |
| Gevra      | -1.083 |

---

### CERI v3 (Optimized Weights: 0.1 / 0.1 / 0.8)

| Asset      | CERI_v3 |
|------------|---------|
| Grasberg   | 0.556   |
| Bingham    | 0.521   |
| Gevra      | 0.075   |
| Carajás    | -1.151  |

---

## Interpretation

Key structural observations:

1. High-exposure assets (Grasberg and Bingham) remain top-ranked under both weighting schemes.
2. Moderate-tier assets (Carajás and Gevra) switch relative positions.
3. Optimized weights heavily emphasize persistence (F3).
4. Ranking sensitivity occurs only where feature margins are small.

The silhouette-maximizing solution prioritizes stability over intensity.

---

## What Changed?

Under CERI v2:
- Exposure intensity (F1) dominated scoring.
- Carajás ranked above Gevra.

Under CERI v3:
- Persistence (F3) dominates scoring.
- Gevra ranks above Carajás.
- Carajás is penalized heavily due to instability variance.

This confirms that moderate-tier ordering is driven primarily by stability rather than exposure magnitude.

---

## Model Governance Consideration

Silhouette optimization improves geometric separation, but does not necessarily improve domain realism.

Maximizing cluster separation is not equivalent to maximizing environmental risk fidelity.

Therefore:

CERI v3 is treated as an analytically optimized variant — not an automatic replacement for CERI v2.

---

## Key Insight

The optimization process reveals:

- Structural separation between high-exposure and moderate-exposure assets is robust.
- Ranking instability occurs only where feature distances are small.
- Persistence is the most discriminative feature for geometric separation.

This validates that composite behavior is governed by feature geometry rather than arbitrary weighting.

---

## Conclusion

CERI v3 demonstrates that weight selection materially affects moderate-tier ordering but does not alter structural tier boundaries.

The model exhibits:

- Robust extreme separation
- Controlled sensitivity in close-margin cases
- Predictable behavior under optimization

CERI v2 remains the governance-stable baseline.

CERI v3 provides a data-driven validation layer.
