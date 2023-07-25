import { STRIPE } from "@/utils/stripe";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { data } = await req.json();
  const { amount } = data;

  try {
    const paymentIntent = await STRIPE.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "USD",
    });

    return NextResponse.json(paymentIntent.client_secret, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
};
