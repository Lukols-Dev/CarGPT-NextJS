import Stripe from "stripe";

export const STRIPE = new Stripe(
  "sk_test_51NIHkKIn5uqAiJlowMIebX3ms0BOFsyZ10L9fbaeNobyZWgzIuUplDUop2BkQ1k6QpE8PfzhkHHMBKhFZA7oBRf400nSeEoKfj",
  {
    typescript: true,
    apiVersion: "2022-11-15",
    appInfo: {
      name: "carGPT Subscription",
      version: "1.0.0",
    },
  }
);
