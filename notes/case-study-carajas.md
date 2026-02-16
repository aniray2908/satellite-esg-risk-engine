# Case Study 01 — Carajás Mine (Brazil)

## Objective

Validate whether the satellite-based environmental signal pipeline can detect exposed mining footprint using multi-spectral imagery.

This case study applies the Phase 1 methodology to a real-world large-scale open-pit mining operation.

---

## Site Selection

Carajás Mine is one of the largest open-pit iron ore mines globally, located within the Amazon biome in Brazil.

The site was selected because:

- The exposed pit is visually distinct from surrounding forest.
- It represents a high-impact industrial footprint.
- It provides a strong test case for vegetation-based metrics.

---

## Initial Attempt — Mean NDVI (Forest-Centered Coordinate)

Using an approximate regional coordinate, a 1 km buffer was analyzed.

Results showed:

- High mean NDVI (~0.6–0.7)
- Low NDVI fraction ≈ 0

This indicated dense vegetation dominance.

Upon visual inspection, it was determined that the coordinate was centered on forest rather than the exposed pit.

### Key Insight

Environmental signal extraction is highly sensitive to spatial anchoring.

Incorrect spatial targeting can completely mask industrial footprint.

---

## Revised Approach — Pit-Centered Buffer

A new coordinate was manually selected at the center of the exposed open pit.

Configuration:

- Buffer radius: 1 km
- Composite: Full-year median (Jan–Dec)
- Dataset: Sentinel-2 Surface Reflectance (Harmonized)
- Years: 2019–2023

Metrics extracted:

- Mean NDVI
- Low NDVI Fraction (NDVI < 0.2)

---

## Results (Full-Year Composite)

| Year | Mean NDVI | Low NDVI Fraction |
|------|-----------|------------------|
| 2019 | 0.059 | 0.866 |
| 2020 | 0.059 | 0.921 |
| 2021 | 0.013 | 0.975 |
| 2022 | 0.030 | 0.954 |
| 2023 | 0.015 | 0.971 |

---

## Interpretation

- Mean NDVI remains near zero across all years.
- Low NDVI fraction remains extremely high (86%–97%).
- No evidence of vegetation recovery within the pit-centered buffer.
- 2021 shows peak exposure (~97.5%), suggesting expansion or intensified excavation.

The results align with visual satellite imagery.

The mining footprint is persistent and highly exposed.

---

## Methodological Lessons

1. Spatial anchoring determines signal validity.
2. Mean NDVI alone can obscure industrial signal when mixed with vegetation.
3. Low NDVI fraction provides a more sensitive proxy for exposed land.
4. Full-year compositing stabilizes tropical cloud volatility.

---

## Conclusion

The satellite-based environmental signal pipeline successfully detects persistent exposed mining footprint when spatial targeting is correct.

This validates the feasibility of vegetation-based environmental risk indicators for industrial asset monitoring.

Future work will extend analysis to:

- Multiple mining sites
- Spatial footprint expansion measurement
- Integration into a structured risk index framework
