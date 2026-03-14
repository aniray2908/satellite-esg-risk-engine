weights = {
    "F1_exposure_intensity": 0.4,
    "F2_vegetation_suppression": 0.35,
    "F3_persistence_raw": 0.25
}


def compute_ceri_score(features):

    score = (
        features["F1_exposure_intensity"] * weights["F1_exposure_intensity"] +
        features["F2_vegetation_suppression"] * weights["F2_vegetation_suppression"] +
        features["F3_persistence_raw"] * weights["F3_persistence_raw"]
    )

    return score


def assign_risk_tier(score):

    if score > 0.5:
        return "High Risk"

    elif score > -0.5:
        return "Moderate Risk"

    else:
        return "Low Risk"


def score_asset(features):

    score = compute_ceri_score(features)

    tier = assign_risk_tier(score)

    return {
        "ceri_score": score,
        "risk_tier": tier
    }
