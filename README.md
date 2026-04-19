# Bank Marketing Funnel & Conversion Analysis

**Future Interns – Data Science & Analytics Task 3 (2026)**
Marketing Funnel & Conversion Performance Analysis on the UCI Bank Marketing dataset.

---

## 📊 Project Overview

This project analyzes 45,211 direct-marketing phone-call records from a Portuguese bank (May 2008 – Nov 2010) as a **five-stage marketing funnel**, identifies where prospects drop off, and recommends concrete interventions to improve conversion rates.

**Dataset source:** [UCI ML Repository — Bank Marketing](https://archive.ics.uci.edu/dataset/222/bank+marketing)

## 🎯 Deliverables

| Deliverable | File |
|---|---|
| Interactive HTML dashboard | [`dashboard/index.html`](dashboard/index.html) |
| Written analysis report | [`REPORT.md`](REPORT.md) |
| Analysis script (reproducible) | [`src/funnel_analysis.py`](src/funnel_analysis.py) |
| Jupyter notebook version | [`notebooks/funnel_analysis.ipynb`](notebooks/funnel_analysis.ipynb) |
| Segment CSVs | [`output/`](output/) |

## 🔢 Key Numbers

- **45,211** clients contacted
- **5,289** subscribed (baseline conversion **11.7%**)
- **Biggest drop-off:** Stage 1 → 2 (channel attribution failure, 28.8% lost)
- **Top segment:** Previous-success clients convert at **64.7%** (5.5× lift)
- **Seasonality:** March converts at **52.0%**, May at ~6%

## 🗂 Project Structure

```
bank-funnel-analysis/
├── data/
│   ├── bank-full.csv         # 45,211 records (full dataset)
│   ├── bank.csv              # 4,521 records (10% sample)
│   └── bank-names.txt        # Data dictionary
├── src/
│   └── funnel_analysis.py    # Main analysis script
├── notebooks/
│   └── funnel_analysis.ipynb # Exploratory notebook
├── dashboard/
│   ├── index.html            # Interactive dashboard
│   ├── data.js               # Data bundle (embedded)
│   └── dashboard_data.json   # Raw data (alt. fetch source)
├── output/                   # Segment CSVs, numeric drivers, etc.
├── REPORT.md                 # Written analysis report
├── requirements.txt
├── .vscode/                  # VS Code workspace settings
└── README.md
```

## 🚀 Run it (in VS Code)

```bash
# 1. Clone and enter
git clone <your-repo-url>
cd bank-funnel-analysis

# 2. (Optional) create virtual env
python -m venv .venv
source .venv/bin/activate        # macOS / Linux
# .venv\Scripts\activate         # Windows

# 3. Install deps
pip install -r requirements.txt

# 4. Run the analysis
python src/funnel_analysis.py

# 5. Open the dashboard
# Option A: just double-click dashboard/index.html
# Option B: serve it
python -m http.server 8000 --directory dashboard
# then visit http://localhost:8000
```

Recommended VS Code extensions: **Python**, **Jupyter**, **Rainbow CSV**, **Live Server** (for serving the dashboard).

## 🧠 Funnel Definition

We translate the phone campaign into a five-stage funnel:

| # | Stage | Definition |
|---|---|---|
| 1 | **Targeted** | All clients placed in the contact list |
| 2 | **Reached** | Contact channel logged (cellular or telephone — not "unknown") |
| 3 | **Engaged** | Call duration > 60 seconds (not an instant hang-up) |
| 4 | **Qualified** | ≤ 3 campaign contacts (not over-contacted / fatigued) |
| 5 | **Converted** | Subscribed to the term deposit (`y = yes`) |

## 📈 Dashboard Preview

The dashboard is styled as an editorial analytics report — cream paper background, serif type, dense information layout. Eight interactive charts, animated funnel visualization, six prioritized recommendations with impact estimates.

## 📝 Report Highlights

Six insights + six recommendations, each defensible from the data alone. See [`REPORT.md`](REPORT.md) for the full write-up.

## 🛠 Built With

- **Python 3** · pandas · numpy
- **Chart.js 4** · native HTML/CSS for the dashboard (no framework)
- **Fraunces** (display), **Inter** (body), **JetBrains Mono** (mono) — Google Fonts
- **VS Code** as the IDE

## 📄 Citation

Moro, S., Laureano, R., & Cortez, P. (2011). *Using Data Mining for Bank Direct Marketing: An Application of the CRISP-DM Methodology.* Proceedings of the European Simulation and Modelling Conference — ESM'2011, pp. 117-121, Guimarães, Portugal.

## 👤 Author

**Muneeb** — CS student · Future Interns DS&A Task 3 submission.
