# TCCP: Trustworthy Customer Churn Prediction

## From customer data to governed retention action

**Group 15 · Mikiyas Zenebe, Selemun Abrha, Yafet Mulaw, Haile Sintayehu, Fisehatsion Adisu, Tedros Nigus**

TCCP is an end-to-end system that turns the IBM Telco Customer Churn dataset into calibrated customer-risk estimates, interpretable drivers, and a ranked retention action list. It cleans the source data, compares five classifiers, selects an RBF support-vector classifier using validation PR-AUC, evaluates discrimination and calibration on a held-out test set, and converts risk into expected net value under a contact budget.

## Key result

The reported champion achieved [ROC-AUC 0.846](#=test_roc_auc), [PR-AUC 0.667](#=test_pr_auc), and [Brier score 0.137](#=brier_score) on the held-out test set.

| Model | Validation PR-AUC | Test ROC-AUC | Test PR-AUC |
|---|---:|---:|---:|
| SVC (RBF) | 0.670 ± 0.019 | 0.846 ± 0.011 | 0.667 ± 0.025 |
| Logistic regression | 0.670 ± 0.016 | 0.848 ± 0.011 | 0.665 ± 0.025 |
| Neural network (MLP) | 0.668 ± 0.016 | 0.846 ± 0.011 | 0.653 ± 0.026 |
| XGBoost | 0.666 ± 0.021 | 0.844 ± 0.011 | 0.657 ± 0.025 |
| Random forest | 0.665 ± 0.020 | 0.845 ± 0.011 | 0.655 ± 0.026 |

## Problem and policy

For a customer with feature vector $x$, the system estimates $p(x)=P(Y=1\mid X=x)$. It then ranks customers using expected intervention value:

$$U(x)=p(x)rv-c$$

where $r$ is the assumed save rate, $v$ is customer value, and $c$ is contact cost. Under a finite budget, customers are selected from the highest-ranked risk until the contact limit is reached. Prediction quality determines ranking; business assumptions determine action.

The demonstration uses [7,043 customers](#=dataset_rows), a [32-column feature contract](#=feature_count), an [80/20 stratified holdout](#=split), and random seed [42](#=random_seed). The champion is calibrated with five-fold sigmoid calibration inside the training partition.

## Explainability and governance

SHAP values describe how the fitted model moves an individual prediction relative to a background sample. Partial dependence summarizes average model response. Neither establishes causality. Prominent displayed drivers include Contract, tenure, Fiber_x_Charge, electronic-check payments, and InternetService_Fiber.

The production path stores preprocessing and estimator together, records model metadata, supports batch and FastAPI scoring, and should monitor calibration drift, input-schema errors, score distributions, intervention outcomes, and post-deployment performance.

## Limitations

The data is historical and does not establish future performance or causal treatment effects. A random holdout does not replace a time-based holdout when deployment dates are known. Retention value depends on assumed save rate, customer value, and contact cost. The next release should add time-based validation, cohort calibration, randomized retention experiments, and a promotion gate for data quality and fairness.
