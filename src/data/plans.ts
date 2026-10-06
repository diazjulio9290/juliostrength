import type { Plan } from "./types";

const plans: Plan[] = [
  {
    title: "1:1 Coaching — 3 Months",
    price: 900,
    period: "3 months",
    features: [
      "Custom nutrition + training + supplement plan",
      "Weekly physique check-ins",
      "Steps/Cardio targets",
      "Video form reviews",
      "Habit tracking + monthly goals",
      "DM support (24–48h)",
    ],
    cta: "Contact to start",
    link: "#contact",
    highlight: true, // Popular
  },
  {
    title: "1:1 Coaching — 6 Months",
    price: 1500,
    period: "6 months",
    features: [
      "Everything in 3 Months, across multiple training phases",
      "Custom plans + weekly check-ins + video form reviews",
      "Steps/Cardio targets • Habit tracking • Monthly goals",
      "DM support (24–48h)",
      "Save $300 vs the 3 month rate",
    ],
    cta: "Contact to start",
    link: "#contact",
  },
  {
    title: "1:1 Coaching — 12 Months",
    price: 3000,
    period: "12 months",
    features: [
      "Everything in 3 Months, for a full year of progress",
      "Custom plans + weekly check-ins + video form reviews",
      "Steps/Cardio targets • Habit tracking • Monthly goals",
      "DM support (24–48h)",
      "Save $600 vs the 3 month rate",
    ],
    cta: "Contact to start",
    link: "#contact",
  },
];

export default plans;
