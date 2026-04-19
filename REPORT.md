# Marketing Funnel & Conversion Performance Analysis
### Bank Marketing Dataset — UCI ML Repository

**Author:** Muneeb
**Task:** Future Interns — Data Science & Analytics Task 3 (2026)
**Dataset:** UCI Bank Marketing (Moro et al., 2011) · 45,211 records · May 2008 – Nov 2010

---

## 1. Executive Summary

A Portuguese bank ran a direct-marketing telephone campaign selling term-deposit products across 45,211 client contacts over 30 months. The baseline conversion rate was **11.7%**. Breaking the campaign into a five-stage funnel exposes substantial waste — nearly one in three contacts is lost to a **channel-attribution failure** before any sales conversation even occurs, and call-frequency fatigue plus severe seasonality waste a large fraction of the remaining effort.

The single most actionable finding: clients who succeeded in a prior campaign convert at **64.7%** on re-contact (5.5× the baseline) but make up only 3.3% of the contact list. Re-targeting this segment alone would meaningfully move the overall conversion number.

Estimated combined impact of the six recommendations in Section 6: **+40–60% in total conversions at flat budget**, plus a **25% reduction in wasted agent time**.

---

## 2. Funnel Definition

The phone campaign is modeled as a five-stage customer journey:

| Stage | Label | Criterion | Count | % of Top |
|---|---|---|---:|---:|
| 1 | **Targeted** | In the contact list | 45,211 | 100.0% |
| 2 | **Reached** | Contact channel logged (cellular or telephone) | 32,191 | 71.2% |
| 3 | **Engaged** | Call duration > 60 seconds | 29,030 | 64.2% |
| 4 | **Qualified** | ≤ 3 campaign contacts | 23,413 | 51.8% |
| 5 | **Converted** | Subscribed to term deposit (`y = yes`) | 5,289 | 11.7% |

### Stage-to-stage conversion

| Transition | Conversion % | Drop-off Count |
|---|---:|---:|
| Targeted → Reached | 71.2% | 13,020 |
| Reached → Engaged | 90.2% | 3,161 |
| Engaged → Qualified | 80.7% | 5,617 |
| Qualified → Converted | 22.6% | 18,124 |

---

## 3. Conversion Rates at Each Stage

The funnel has two qualitatively different kinds of drop-off:

- **Stages 1-4 are about reach and call quality.** The biggest leak in absolute terms is the 13,020 clients who never made it past Stage 1 — their contact channel is logged as "unknown." The Engaged → Qualified step loses another 5,617 clients to over-contacting within the same campaign.
- **Stage 4 → 5 is about the sales conversation itself.** Once a client has been reached, engaged, and not over-contacted, the probability of conversion is 22.6%. That's nearly 2× the headline rate — so most of the "loss" in conversion is actually lost at earlier, operationally fixable stages.

---

## 4. Key Drop-Off Insights

### Insight 1 — Channel attribution is broken for 1 in 3 contacts

13,020 clients (28.8%) have `contact = unknown`. Whether they were genuinely unreachable or simply not logged properly, the cohort's conversion rate is drastically lower than `cellular` or `telephone` cohorts. This is as much a data-pipeline problem as a marketing one.

### Insight 2 — Call duration is the strongest single predictor of conversion

| Duration | Calls | Converted | Rate |
|---|---:|---:|---:|
| 0–60 s | 4,659 | 9 | **0.19%** |
| 60–180 s | 17,878 | 692 | 3.87% |
| 180–300 s | 10,345 | 1,121 | 10.84% |
| 300–600 s | 8,527 | 1,630 | 19.12% |
| 600–1200 s | 3,239 | 1,490 | **46.00%** |
| 1200+ s | 563 | 347 | **61.63%** |

The 324× gap between the shortest and longest buckets is not a cause-and-effect relationship (long calls happen because the client is interested), but it *is* a brutal diagnostic signal for lead quality and script effectiveness. Critically: if you lose the client in the first 60 seconds, you've effectively lost them entirely.

### Insight 3 — Campaign fatigue begins at contact #2

| Contact # | Conversion % |
|---:|---:|
| 1 | 14.60% |
| 2 | 11.20% |
| 3 | 11.19% |
| 4 | 9.00% |
| 5 | 7.88% |
| 6 | 7.13% |
| 10+ | 4.17% |

By the 10th call within a single campaign, conversion probability has fallen by **71%** relative to the first call. The number of contacts per client is a spending decision — the data suggests the optimal cap is around three.

### Insight 4 — Seasonality multiplies conversion by up to 5×

| Month | Contacted | Converted | Rate |
|---|---:|---:|---:|
| **March** | 477 | 248 | **51.99%** |
| **December** | 214 | 100 | **46.73%** |
| **September** | 579 | 269 | **46.46%** |
| **October** | 738 | 323 | **43.77%** |
| April | 2,932 | 577 | 19.68% |
| May (baseline) | 13,766 | ~925 | ~6.7% |

May alone accounts for more than **30% of all contacts** but converts worst. The campaign is running on the wrong calendar — volume is misaligned with demand.

### Insight 5 — Previous-campaign success is a flashing green light

| Previous outcome | Contacted | Converted | Rate |
|---|---:|---:|---:|
| **success** | 1,511 | 978 | **64.73%** |
| other | 1,840 | 307 | 16.68% |
| failure | 4,901 | 618 | 12.61% |
| unknown | 36,959 | 3,386 | 9.16% |

Clients who previously subscribed represent only 3.3% of the contact list but convert at 5.5× the baseline. This is the cheapest (lowest CAC) and highest-value cohort in the entire dataset.

### Insight 6 — Age creates a "bathtub" curve

| Age group | Conversion % |
|---|---:|
| Under 25 | **25.59%** |
| 25–34 | 12.48% |
| 35–44 | 9.66% |
| 45–54 | 9.27% |
| 55–64 | 13.09% |
| 65+ | **42.10%** |

The 35–54 prime-earner bracket converts at **roughly half** the baseline rate — likely because competing investment options (mortgages, equity, business) are more attractive. The edges of the age distribution are where term deposits find their buyers.

### Supporting numeric drivers (converted vs. non-converted means)

| Metric | Non-subscribed | Subscribed | Signal |
|---|---:|---:|---|
| Balance (€) | 1,304 | 1,804 | +€500 higher → wealthier clients convert more |
| Duration (s) | 221 | 537 | +316s → longer calls convert (see Insight 2) |
| Campaign contacts | 2.85 | 2.14 | **Fewer** contacts convert better |
| Days since last contact | 36.4 | 68.7 | Longer gaps between campaigns = higher conversion |
| Previous contacts | 0.50 | 1.17 | Prior touchpoints help, up to a point |

---

## 5. Channel & Segment Performance

### By job (top 5)

| Job | Contacted | Rate |
|---|---:|---:|
| student | 938 | **28.68%** |
| retired | 2,264 | **22.79%** |
| unemployed | 1,303 | 15.50% |
| management | 9,458 | 13.76% |
| admin. | 5,171 | 12.20% |

`blue-collar` (7.3%) and `services` (8.9%) underperform the baseline significantly.

### By contact channel

| Channel | Rate |
|---|---:|
| cellular | 14.92% |
| telephone | 13.39% |
| unknown | 4.08% |

Cellular is the best-performing channel and should be prioritized over telephone and especially over any unattributed route.

---

## 6. Actionable Recommendations

Ranked by estimated impact on overall conversion rate at flat budget.

### 1. Re-target previous-success clients with a dedicated campaign
The 1,511 `poutcome = success` clients convert at 64.7%. Move them to a priority dialing queue, assign senior agents, and offer premium tiered products. **Est. impact: an additional 120–180 conversions from this segment alone.**

### 2. Shift call volume out of May into March, September, and October
May is ~6.7% conversion but receives the highest call volume. Reallocate 20% of May's ~13,800 calls to Mar/Sep/Oct. **Est. impact: +30–40% total conversions at zero additional budget.**

### 3. Cap campaign contacts at 3 per client
Calls beyond the 3rd show steeply diminishing returns. Route 4th+ contacts to SMS or email. **Est. impact: 25% reduction in wasted agent-hours, small conversion lift from better prospect prioritization.**

### 4. Fix contact-channel data capture
28.8% of contacts have channel = "unknown." Require CRM channel logging on every dial; unlogged dials should not count as "contacted" in analytics. **Est. impact: ~20% improvement in funnel-reach attribution accuracy.**

### 5. Prioritize students, retirees, and over-65s
All three segments convert at 2–4× the baseline. Develop dedicated scripts and product variants (no-penalty CDs for retirees, starter savings for students). **Est. impact: 2–3× conversion in targeted segments.**

### 6. Train agents to survive the first 60 seconds
The cliff from `0–60s` (0.19%) to `60–180s` (3.87%) is 20×. Focus agent training on the opening — permission-to-continue, qualifying question, value hook — rather than later stages. **Est. impact: +5–8 percentage points on overall conversion.**

---

## 7. Methodology Notes

- **Tooling:** Python 3 (pandas, numpy), Chart.js for visualization, native HTML/CSS (no framework) for the dashboard, VS Code as IDE.
- **Reproducibility:** `src/funnel_analysis.py` is a single-file deterministic script that regenerates every CSV in `output/` and the `dashboard_data.json` payload consumed by the HTML.
- **Limitations:** (a) `duration` is known only after a call happens — it cannot be used as an a-priori targeting feature in a real deployment model; it remains valid here as a diagnostic. (b) The dataset covers 2008–2010, so absolute conversion rates are historical; relative segment differences are likely to remain directionally valid. (c) "Previous outcome = success" is an extraordinarily strong feature but applies only to re-contact campaigns, not cold prospects.

---

## 8. Citation

Moro, S., Laureano, R., & Cortez, P. (2011). *Using Data Mining for Bank Direct Marketing: An Application of the CRISP-DM Methodology.* Proceedings of the European Simulation and Modelling Conference — ESM'2011, pp. 117-121, Guimarães, Portugal. EUROSIS.
