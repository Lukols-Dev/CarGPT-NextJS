import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51NIHkKIn5uqAiJloI5mjvq7mRdiZ1Ln3dMBSbZeIDl7hwYlGWzvg1R8tqFHnDm8Jg6vz275Ht4fZVfJQepGBqqyu00sFPnerUe"
    );
  }

  return stripePromise;
};
