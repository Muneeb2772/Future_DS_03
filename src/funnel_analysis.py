"""
Bank Marketing Funnel & Conversion Performance Analysis
========================================================
Dataset: UCI Bank Marketing (Portuguese bank, direct marketing via phone, 2008-2010)
Goal:    Analyze the customer journey from "Contacted" -> "Converted (Subscribed)"
         and uncover drop-off points, segment performance, and conversion levers.

Author: Muneeb | Task: Future Interns - Data Science & Analytics Task 3 (2026)
"""

import json
from pathlib import Path

import numpy as np
import pandas as pd

# ------------------------------------------------------------------ paths
ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "bank-full.csv"
OUT  = ROOT / "output"
OUT.mkdir(exist_ok=True)

# ------------------------------------------------------------------ load
print("=" * 70)
print("  BANK MARKETING FUNNEL ANALYSIS")
print("=" * 70)

df = pd.read_csv(DATA, sep=";")
print(f"\n[1] Loaded: {len(df):,} records  x  {df.shape[1]} columns")
print(f"    Overall subscription rate: {(df.y == 'yes').mean():.2%}")

# ------------------------------------------------------------------ define funnel stages
# The marketing funnel for this campaign:
#   Stage 1 - Targeted       : every client in the contact list
#   Stage 2 - Reached        : contact method was known (cellular / telephone)
#   Stage 3 - Engaged        : call duration > 60s (not an instant hang-up)
#   Stage 4 - Qualified      : engaged AND contacted <= 3 times (not fatigued)
#   Stage 5 - Converted      : subscribed to the term deposit (y == "yes")

df["stage_1_targeted"]  = True
df["stage_2_reached"]   = df["contact"].isin(["cellular", "telephone"])
df["stage_3_engaged"]   = df["stage_2_reached"] & (df["duration"] > 60)
df["stage_4_qualified"] = df["stage_3_engaged"]   & (df["campaign"] <= 3)
df["stage_5_converted"] = (df["y"] == "yes")

stages = [
    ("Targeted",  "stage_1_targeted",  "All clients placed into the campaign list"),
    ("Reached",   "stage_2_reached",   "Contact channel known (cellular / telephone)"),
    ("Engaged",   "stage_3_engaged",   "Call duration > 60 seconds (real conversation)"),
    ("Qualified", "stage_4_qualified", "<= 3 campaign contacts (not over-contacted)"),
    ("Converted", "stage_5_converted", "Subscribed to term deposit (y = yes)"),
]

funnel_rows = []
prev_count = None
for name, col, desc in stages:
    count = int(df[col].sum())
    overall_rate = count / len(df)
    step_rate = (count / prev_count) if prev_count else 1.0
    drop_off  = (prev_count - count) if prev_count else 0
    funnel_rows.append({
        "stage": name,
        "description": desc,
        "count": count,
        "pct_of_total": round(overall_rate * 100, 2),
        "stage_conversion_pct": round(step_rate * 100, 2),
        "drop_off": int(drop_off),
    })
    prev_count = count

funnel_df = pd.DataFrame(funnel_rows)
print("\n[2] FUNNEL SUMMARY")
print(funnel_df.to_string(index=False))
funnel_df.to_csv(OUT / "funnel_summary.csv", index=False)

# ------------------------------------------------------------------ cohort conversion rates
def conv_by(col):
    g = df.groupby(col).agg(
        contacted=("y", "size"),
        converted=("stage_5_converted", "sum"),
    )
    g["conversion_rate_pct"] = (g["converted"] / g["contacted"] * 100).round(2)
    return g.sort_values("conversion_rate_pct", ascending=False)

segments = {}
for col in ["job", "marital", "education", "contact", "month",
            "poutcome", "housing", "loan", "default"]:
    seg = conv_by(col).reset_index()
    seg.to_csv(OUT / f"segment_{col}.csv", index=False)
    segments[col] = seg

print("\n[3] TOP CONVERTING SEGMENTS")
print("\n  By job:");      print(segments["job"].head(5).to_string(index=False))
print("\n  By month:");    print(segments["month"].head(5).to_string(index=False))
print("\n  By poutcome:"); print(segments["poutcome"].to_string(index=False))

# ------------------------------------------------------------------ numeric driver analysis
print("\n[4] NUMERIC DRIVERS (converted vs. not)")
num_cols = ["age", "balance", "duration", "campaign", "pdays", "previous"]
drivers = df.groupby("y")[num_cols].mean().round(2).T
drivers.columns = ["not_subscribed", "subscribed"]
drivers["lift"] = (drivers["subscribed"] - drivers["not_subscribed"]).round(2)
print(drivers.to_string())
drivers.to_csv(OUT / "numeric_drivers.csv")

# ------------------------------------------------------------------ duration buckets (the single strongest signal)
bins   = [0, 60, 180, 300, 600, 1200, 10_000]
labels = ["0-60s", "60-180s", "180-300s", "300-600s", "600-1200s", "1200s+"]
df["duration_bucket"] = pd.cut(df["duration"], bins=bins, labels=labels, right=False)
dur = df.groupby("duration_bucket", observed=True).agg(
    calls=("y", "size"),
    converted=("stage_5_converted", "sum"),
)
dur["conversion_pct"] = (dur["converted"] / dur["calls"] * 100).round(2)
dur = dur.reset_index()
print("\n[5] CONVERSION BY CALL DURATION BUCKET")
print(dur.to_string(index=False))
dur.to_csv(OUT / "duration_buckets.csv", index=False)

# ------------------------------------------------------------------ campaign fatigue
fat = df.groupby(df["campaign"].clip(upper=10)).agg(
    calls=("y", "size"),
    converted=("stage_5_converted", "sum"),
)
fat["conversion_pct"] = (fat["converted"] / fat["calls"] * 100).round(2)
fat = fat.reset_index().rename(columns={"campaign": "contacts_in_campaign"})
print("\n[6] CAMPAIGN FATIGUE (contacts vs. conversion)")
print(fat.to_string(index=False))
fat.to_csv(OUT / "campaign_fatigue.csv", index=False)

# ------------------------------------------------------------------ age groups
age_bins = [0, 25, 35, 45, 55, 65, 120]
age_lbls = ["<25", "25-34", "35-44", "45-54", "55-64", "65+"]
df["age_group"] = pd.cut(df["age"], bins=age_bins, labels=age_lbls, right=False)
age = df.groupby("age_group", observed=True).agg(
    contacted=("y", "size"),
    converted=("stage_5_converted", "sum"),
)
age["conversion_pct"] = (age["converted"] / age["contacted"] * 100).round(2)
age = age.reset_index()
print("\n[7] CONVERSION BY AGE GROUP")
print(age.to_string(index=False))
age.to_csv(OUT / "age_groups.csv", index=False)

# ------------------------------------------------------------------ previous-outcome lift
po = segments["poutcome"]
success_rate = float(po.loc[po.poutcome == "success", "conversion_rate_pct"].iloc[0])
baseline     = float((df.y == "yes").mean() * 100)
lift         = success_rate / baseline
print(f"\n[8] PREVIOUS SUCCESS LIFT: {success_rate:.2f}% vs baseline {baseline:.2f}% "
      f"= {lift:.1f}x higher")

# ------------------------------------------------------------------ bundle everything for the dashboard
payload = {
    "overall": {
        "total_contacts":     int(len(df)),
        "total_conversions":  int(df.stage_5_converted.sum()),
        "baseline_rate_pct":  round(baseline, 2),
    },
    "funnel":             funnel_df.to_dict(orient="records"),
    "by_job":             segments["job"].to_dict(orient="records"),
    "by_marital":         segments["marital"].to_dict(orient="records"),
    "by_education":       segments["education"].to_dict(orient="records"),
    "by_contact":         segments["contact"].to_dict(orient="records"),
    "by_month":           segments["month"].to_dict(orient="records"),
    "by_poutcome":        segments["poutcome"].to_dict(orient="records"),
    "by_housing":         segments["housing"].to_dict(orient="records"),
    "by_loan":            segments["loan"].to_dict(orient="records"),
    "duration_buckets":   dur.to_dict(orient="records"),
    "campaign_fatigue":   fat.to_dict(orient="records"),
    "age_groups":         age.to_dict(orient="records"),
    "numeric_drivers":    drivers.reset_index().rename(columns={"index": "metric"}).to_dict(orient="records"),
}

with open(OUT / "dashboard_data.json", "w") as f:
    json.dump(payload, f, indent=2, default=str)

print(f"\n[OK] All outputs written to: {OUT}")
print("     -> dashboard_data.json (feeds the HTML dashboard)")
print("     -> funnel_summary.csv, segment_*.csv, etc.")
