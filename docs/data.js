const DASHBOARD_DATA = {
  "overall": {
    "total_contacts": 45211,
    "total_conversions": 5289,
    "baseline_rate_pct": 11.7
  },
  "funnel": [
    {
      "stage": "Targeted",
      "description": "All clients placed into the campaign list",
      "count": 45211,
      "pct_of_total": 100.0,
      "stage_conversion_pct": 100.0,
      "drop_off": 0
    },
    {
      "stage": "Reached",
      "description": "Contact channel known (cellular / telephone)",
      "count": 32191,
      "pct_of_total": 71.2,
      "stage_conversion_pct": 71.2,
      "drop_off": 13020
    },
    {
      "stage": "Engaged",
      "description": "Call duration > 60 seconds (real conversation)",
      "count": 29030,
      "pct_of_total": 64.21,
      "stage_conversion_pct": 90.18,
      "drop_off": 3161
    },
    {
      "stage": "Qualified",
      "description": "<= 3 campaign contacts (not over-contacted)",
      "count": 23413,
      "pct_of_total": 51.79,
      "stage_conversion_pct": 80.65,
      "drop_off": 5617
    },
    {
      "stage": "Converted",
      "description": "Subscribed to term deposit (y = yes)",
      "count": 5289,
      "pct_of_total": 11.7,
      "stage_conversion_pct": 22.59,
      "drop_off": 18124
    }
  ],
  "by_job": [
    {
      "job": "student",
      "contacted": 938,
      "converted": 269,
      "conversion_rate_pct": 28.68
    },
    {
      "job": "retired",
      "contacted": 2264,
      "converted": 516,
      "conversion_rate_pct": 22.79
    },
    {
      "job": "unemployed",
      "contacted": 1303,
      "converted": 202,
      "conversion_rate_pct": 15.5
    },
    {
      "job": "management",
      "contacted": 9458,
      "converted": 1301,
      "conversion_rate_pct": 13.76
    },
    {
      "job": "admin.",
      "contacted": 5171,
      "converted": 631,
      "conversion_rate_pct": 12.2
    },
    {
      "job": "self-employed",
      "contacted": 1579,
      "converted": 187,
      "conversion_rate_pct": 11.84
    },
    {
      "job": "unknown",
      "contacted": 288,
      "converted": 34,
      "conversion_rate_pct": 11.81
    },
    {
      "job": "technician",
      "contacted": 7597,
      "converted": 840,
      "conversion_rate_pct": 11.06
    },
    {
      "job": "services",
      "contacted": 4154,
      "converted": 369,
      "conversion_rate_pct": 8.88
    },
    {
      "job": "housemaid",
      "contacted": 1240,
      "converted": 109,
      "conversion_rate_pct": 8.79
    },
    {
      "job": "entrepreneur",
      "contacted": 1487,
      "converted": 123,
      "conversion_rate_pct": 8.27
    },
    {
      "job": "blue-collar",
      "contacted": 9732,
      "converted": 708,
      "conversion_rate_pct": 7.27
    }
  ],
  "by_marital": [
    {
      "marital": "single",
      "contacted": 12790,
      "converted": 1912,
      "conversion_rate_pct": 14.95
    },
    {
      "marital": "divorced",
      "contacted": 5207,
      "converted": 622,
      "conversion_rate_pct": 11.95
    },
    {
      "marital": "married",
      "contacted": 27214,
      "converted": 2755,
      "conversion_rate_pct": 10.12
    }
  ],
  "by_education": [
    {
      "education": "tertiary",
      "contacted": 13301,
      "converted": 1996,
      "conversion_rate_pct": 15.01
    },
    {
      "education": "unknown",
      "contacted": 1857,
      "converted": 252,
      "conversion_rate_pct": 13.57
    },
    {
      "education": "secondary",
      "contacted": 23202,
      "converted": 2450,
      "conversion_rate_pct": 10.56
    },
    {
      "education": "primary",
      "contacted": 6851,
      "converted": 591,
      "conversion_rate_pct": 8.63
    }
  ],
  "by_contact": [
    {
      "contact": "cellular",
      "contacted": 29285,
      "converted": 4369,
      "conversion_rate_pct": 14.92
    },
    {
      "contact": "telephone",
      "contacted": 2906,
      "converted": 390,
      "conversion_rate_pct": 13.42
    },
    {
      "contact": "unknown",
      "contacted": 13020,
      "converted": 530,
      "conversion_rate_pct": 4.07
    }
  ],
  "by_month": [
    {
      "month": "mar",
      "contacted": 477,
      "converted": 248,
      "conversion_rate_pct": 51.99
    },
    {
      "month": "dec",
      "contacted": 214,
      "converted": 100,
      "conversion_rate_pct": 46.73
    },
    {
      "month": "sep",
      "contacted": 579,
      "converted": 269,
      "conversion_rate_pct": 46.46
    },
    {
      "month": "oct",
      "contacted": 738,
      "converted": 323,
      "conversion_rate_pct": 43.77
    },
    {
      "month": "apr",
      "contacted": 2932,
      "converted": 577,
      "conversion_rate_pct": 19.68
    },
    {
      "month": "feb",
      "contacted": 2649,
      "converted": 441,
      "conversion_rate_pct": 16.65
    },
    {
      "month": "aug",
      "contacted": 6247,
      "converted": 688,
      "conversion_rate_pct": 11.01
    },
    {
      "month": "jun",
      "contacted": 5341,
      "converted": 546,
      "conversion_rate_pct": 10.22
    },
    {
      "month": "nov",
      "contacted": 3970,
      "converted": 403,
      "conversion_rate_pct": 10.15
    },
    {
      "month": "jan",
      "contacted": 1403,
      "converted": 142,
      "conversion_rate_pct": 10.12
    },
    {
      "month": "jul",
      "contacted": 6895,
      "converted": 627,
      "conversion_rate_pct": 9.09
    },
    {
      "month": "may",
      "contacted": 13766,
      "converted": 925,
      "conversion_rate_pct": 6.72
    }
  ],
  "by_poutcome": [
    {
      "poutcome": "success",
      "contacted": 1511,
      "converted": 978,
      "conversion_rate_pct": 64.73
    },
    {
      "poutcome": "other",
      "contacted": 1840,
      "converted": 307,
      "conversion_rate_pct": 16.68
    },
    {
      "poutcome": "failure",
      "contacted": 4901,
      "converted": 618,
      "conversion_rate_pct": 12.61
    },
    {
      "poutcome": "unknown",
      "contacted": 36959,
      "converted": 3386,
      "conversion_rate_pct": 9.16
    }
  ],
  "by_housing": [
    {
      "housing": "no",
      "contacted": 20081,
      "converted": 3354,
      "conversion_rate_pct": 16.7
    },
    {
      "housing": "yes",
      "contacted": 25130,
      "converted": 1935,
      "conversion_rate_pct": 7.7
    }
  ],
  "by_loan": [
    {
      "loan": "no",
      "contacted": 37967,
      "converted": 4805,
      "conversion_rate_pct": 12.66
    },
    {
      "loan": "yes",
      "contacted": 7244,
      "converted": 484,
      "conversion_rate_pct": 6.68
    }
  ],
  "duration_buckets": [
    {
      "duration_bucket": "0-60s",
      "calls": 4659,
      "converted": 9,
      "conversion_pct": 0.19
    },
    {
      "duration_bucket": "60-180s",
      "calls": 17878,
      "converted": 692,
      "conversion_pct": 3.87
    },
    {
      "duration_bucket": "180-300s",
      "calls": 10345,
      "converted": 1121,
      "conversion_pct": 10.84
    },
    {
      "duration_bucket": "300-600s",
      "calls": 8527,
      "converted": 1630,
      "conversion_pct": 19.12
    },
    {
      "duration_bucket": "600-1200s",
      "calls": 3239,
      "converted": 1490,
      "conversion_pct": 46.0
    },
    {
      "duration_bucket": "1200s+",
      "calls": 563,
      "converted": 347,
      "conversion_pct": 61.63
    }
  ],
  "campaign_fatigue": [
    {
      "contacts_in_campaign": 1,
      "calls": 17544,
      "converted": 2561,
      "conversion_pct": 14.6
    },
    {
      "contacts_in_campaign": 2,
      "calls": 12505,
      "converted": 1401,
      "conversion_pct": 11.2
    },
    {
      "contacts_in_campaign": 3,
      "calls": 5521,
      "converted": 618,
      "conversion_pct": 11.19
    },
    {
      "contacts_in_campaign": 4,
      "calls": 3522,
      "converted": 317,
      "conversion_pct": 9.0
    },
    {
      "contacts_in_campaign": 5,
      "calls": 1764,
      "converted": 139,
      "conversion_pct": 7.88
    },
    {
      "contacts_in_campaign": 6,
      "calls": 1291,
      "converted": 92,
      "conversion_pct": 7.13
    },
    {
      "contacts_in_campaign": 7,
      "calls": 735,
      "converted": 47,
      "conversion_pct": 6.39
    },
    {
      "contacts_in_campaign": 8,
      "calls": 540,
      "converted": 32,
      "conversion_pct": 5.93
    },
    {
      "contacts_in_campaign": 9,
      "calls": 327,
      "converted": 21,
      "conversion_pct": 6.42
    },
    {
      "contacts_in_campaign": 10,
      "calls": 1462,
      "converted": 61,
      "conversion_pct": 4.17
    }
  ],
  "age_groups": [
    {
      "age_group": "<25",
      "contacted": 809,
      "converted": 207,
      "conversion_pct": 25.59
    },
    {
      "age_group": "25-34",
      "contacted": 14204,
      "converted": 1773,
      "conversion_pct": 12.48
    },
    {
      "age_group": "35-44",
      "contacted": 14534,
      "converted": 1404,
      "conversion_pct": 9.66
    },
    {
      "age_group": "45-54",
      "contacted": 9958,
      "converted": 923,
      "conversion_pct": 9.27
    },
    {
      "age_group": "55-64",
      "contacted": 4896,
      "converted": 641,
      "conversion_pct": 13.09
    },
    {
      "age_group": "65+",
      "contacted": 810,
      "converted": 341,
      "conversion_pct": 42.1
    }
  ],
  "numeric_drivers": [
    {
      "metric": "age",
      "not_subscribed": 40.84,
      "subscribed": 41.67,
      "lift": 0.83
    },
    {
      "metric": "balance",
      "not_subscribed": 1303.71,
      "subscribed": 1804.27,
      "lift": 500.56
    },
    {
      "metric": "duration",
      "not_subscribed": 221.18,
      "subscribed": 537.29,
      "lift": 316.11
    },
    {
      "metric": "campaign",
      "not_subscribed": 2.85,
      "subscribed": 2.14,
      "lift": -0.71
    },
    {
      "metric": "pdays",
      "not_subscribed": 36.42,
      "subscribed": 68.7,
      "lift": 32.28
    },
    {
      "metric": "previous",
      "not_subscribed": 0.5,
      "subscribed": 1.17,
      "lift": 0.67
    }
  ]
};