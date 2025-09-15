import type { Plan } from "./types";

const plans: Plan[] = [
  {
    title: "1:1 Coaching — 1 Month",
    price: 199,
    period: "month",
    features: [
      "Custom nutrition + training + supplement plan",
      "Weekly physique check-ins",
      "Steps/Cardio targets",
      "Video form reviews",
      "Habit tracking + monthly goals",
      "DM support (24–48h)",
    ],
    cta: "Start monthly",
    link: "#checkout-coaching-1m",
  },
  {
    title: "1:1 Coaching — 3 Months",
    price: 569.99,
    period: "3 months",
    features: [
      "Everything in Monthly, with momentum to see visible change",
      "Custom plans + weekly check-ins + video form reviews",
      "Steps/Cardio targets • Habit tracking • Monthly goals",
      "DM support (24–48h)",
      "Save ~$27 vs month-to-month",
    ],
    cta: "Start 3-month plan",
    link: "#checkout-coaching-3m",
    highlight: true, // Popular
  },
  {
    title: "1:1 Coaching — 6 Months",
    price: 1079.99,
    period: "6 months",
    features: [
      "Everything in Monthly, across multiple training phases",
      "Custom plans + weekly check-ins + video form reviews",
      "Steps/Cardio targets • Habit tracking • Monthly goals",
      "DM support (24–48h)",
      "Save ~$114 vs month-to-month",
    ],
    cta: "Start 6-month plan",
    link: "#checkout-coaching-6m",
  },
];

export default plans;
