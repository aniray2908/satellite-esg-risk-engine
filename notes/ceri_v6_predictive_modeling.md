# CERI v6 — Predictive Modeling Layer

## Objective

The predictive modeling stage evaluates whether the engineered exposure features used in the Corporate Environmental Risk Index (CERI) contain sufficient predictive structure to reconstruct the composite exposure score.

Previous stages of the project established:

- satellite-derived environmental signal extraction
- exposure feature engineering
- composite exposure scoring
- portfolio-level model validation
- optimization and governance evaluation
- deterministic deployment-tier classification
- statistical robustness testing through bootstrap simulation

While the composite score itself is constructed as a weighted combination of exposure features, it is useful to evaluate whether these engineered features behave as meaningful inputs in a supervised machine learning setting.

This stage introduces a **predictive modeling layer** to the framework and tests the relationship between engineered environmental signals and exposure risk scores.

---

## Modeling Context

The predictive modeling task is defined as a regression problem.

The objective is to predict the composite exposure score:

**Target Variable**

CERI_z

using the engineered environmental features:

- F1_exposure_intensity  
- F2_vegetation_suppression  
- F3_persistence_raw  

These features represent three distinct environmental exposure signals derived from satellite observations.

| Feature | Interpretation |
|--------|----------------|
| **F1 — Exposure Intensity** | Proportion of land within the analysis buffer exhibiting low NDVI (NDVI < 0.2). |
| **F2 — Vegetation Suppression** | Inverse of mean NDVI, representing vegetation depletion. |
| **F3 — Persistence** | Stability of exposed land over time, derived from exposure variance. |

The predictive modeling stage evaluates whether these signals collectively reproduce the composite exposure score under supervised learning.

---

## Dataset Characteristics

The modeling dataset is derived from the frozen **CERI v2 feature layer**.

The dataset includes four mining assets:

- Carajás (Brazil)
- Gevra (India)
- Bingham Canyon (USA)
- Grasberg (Indonesia)

Each row represents the aggregated exposure characteristics of a mining site over the analysis period.

Because the dataset is intentionally small, the modeling stage focuses on **methodological validation rather than predictive generalization**.

The goal is to demonstrate that the engineered exposure signals behave consistently under machine learning frameworks.

---

## Model Selection

Two regression models were implemented.

### Linear Regression

Linear Regression provides a baseline model assuming a linear relationship between input features and the target variable.

This model is particularly relevant because the composite exposure score itself is defined as a weighted linear combination of the exposure features.

Testing this model confirms whether the feature engineering pipeline behaves as expected under supervised learning.

---

### Random Forest Regression

Random Forest Regression is an ensemble model composed of multiple decision trees.

Random Forests can capture nonlinear relationships and interactions between features.

Comparing Random Forest performance with the linear model provides insight into whether the feature relationships are primarily linear or contain additional nonlinear structure.

Random Forest models also provide **feature importance estimates**, which help interpret the relative contribution of each exposure signal.

---

## Cross-Validation Strategy

The dataset used in this stage contains only four observations.

A conventional train/test split would produce unreliable evaluation results because the test set would contain too few observations to estimate model performance reliably.

Instead, the modeling stage uses **Leave-One-Out Cross Validation (LOOCV)**.

Under LOOCV:

- One observation is held out for testing  
- The model is trained on the remaining observations  
- The process repeats once for each observation  

This approach ensures that each asset is evaluated once while maximizing the available training data.

LOOCV is commonly used when working with small datasets and provides a more stable estimate of prediction error than simple train/test splitting.

---

## Model Evaluation

Model performance was evaluated using **Root Mean Squared Error (RMSE)**.

RMSE measures the average magnitude of prediction errors between predicted and actual exposure scores.

Lower RMSE values indicate better predictive performance.

Because the dataset is extremely small, RMSE is used primarily as an indicative measure rather than a definitive performance benchmark.

---

## Feature Importance Analysis

Feature importance was computed using the Random Forest model.

Feature importance estimates indicate how strongly each input feature contributes to prediction accuracy.

The analysis shows that all three exposure signals contribute meaningfully to the composite score:

- Exposure intensity (F1)
- Vegetation suppression (F2)
- Exposure persistence (F3)

This indicates that the composite exposure score is driven by a balanced combination of multiple environmental signals rather than a single dominant variable.

---

## Interpretation

The predictive modeling results confirm several important properties of the exposure scoring framework.

First, the linear regression model performs well in reconstructing the composite exposure score. This outcome is expected because the CERI score itself is derived from a weighted linear combination of the engineered exposure features.

Second, the Random Forest model produces slightly higher prediction error due to the extremely small dataset size. Ensemble models generally require larger datasets to outperform simpler models.

Third, feature importance analysis confirms that the engineered environmental signals contribute in a balanced manner to the final exposure score.

Together, these results demonstrate that the exposure features contain meaningful predictive structure and behave consistently under supervised machine learning frameworks.

---

## Role of the Predictive Layer in the Framework

The predictive modeling stage does not replace the composite scoring system.

Instead, it serves three purposes:

### 1. Validation of Feature Engineering

Demonstrates that engineered exposure signals contain meaningful predictive information.

### 2. Machine Learning Compatibility

Confirms that the environmental signals can function as inputs to standard machine learning models.

### 3. Interpretability

Provides insight into which environmental signals contribute most strongly to exposure scoring.

This stage therefore strengthens the analytical foundation of the exposure scoring framework.

---

## Limitations

Several limitations should be acknowledged.

First, the modeling dataset is intentionally small, consisting of only four assets. As a result, predictive performance metrics should not be interpreted as generalizable model benchmarks.

Second, the composite score being predicted is derived directly from the engineered features. Therefore, predictive modeling primarily validates internal consistency rather than discovering new relationships.

Third, Random Forest models are less effective on extremely small datasets, which explains their slightly higher prediction error compared to the linear baseline.

Future expansions of the framework could incorporate additional mining assets to enable more robust predictive modeling and model comparison.

---

## Summary

The predictive modeling stage introduces a supervised learning component to the exposure scoring framework.

The analysis confirms that:

- engineered environmental signals contain predictive structure
- exposure intensity, vegetation suppression, and persistence jointly drive exposure scoring
- simple linear models can reconstruct the composite score reliably
- the feature engineering pipeline is consistent with machine learning workflows

This stage strengthens the methodological completeness of the framework and demonstrates that satellite-derived environmental signals can function as interpretable inputs for exposure-based risk modeling systems.
