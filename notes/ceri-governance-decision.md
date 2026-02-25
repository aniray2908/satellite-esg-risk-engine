# CERI Governance Decision — Baseline vs Optimized Weights

## Objective

Determine whether the silhouette-optimized weight configuration
(CERI v3) should replace the heuristic baseline (CERI v2).

---

## Summary of Findings

CERI v3 optimization resulted in:

- Weight dominance on persistence (F3 = 0.80)
- Improved silhouette score
- Reordering within moderate-exposure assets
- No change in extreme-tier positioning

High-exposure assets remained structurally dominant under both models.

---

## Stability Assessment

Ranking comparison indicates:

- Strong preservation of extreme-tier separation
- Controlled sensitivity within moderate-tier assets
- No evidence of structural instability

Optimization improves geometric separation but does not materially alter top-tier identification.

---

## Trade-Off Analysis

### CERI v2 (Heuristic)

Pros:
- Balanced feature weighting
- Exposure intensity prioritized
- Governance-stable
- Domain-aligned interpretation

Cons:
- Not data-optimized

---

### CERI v3 (Optimized)

Pros:
- Maximizes cluster separation
- Data-driven weighting
- Improves geometric margin

Cons:
- Over-emphasizes stability
- Less domain-balanced
- Risk interpretation becomes persistence-heavy

---

## Governance Decision

CERI v2 remains the official baseline scoring model.

CERI v3 serves as:

- A validation layer
- A robustness demonstration
- An analytical stress-test of weighting sensitivity

This preserves interpretability while confirming model stability under optimization.

---

## Conclusion

The exposure scoring framework demonstrates:

- Structural robustness
- Controlled sensitivity
- Predictable behavior under weight perturbation

Optimization enhances separation but does not invalidate the baseline model.

CERI v2 is retained as production reference.
