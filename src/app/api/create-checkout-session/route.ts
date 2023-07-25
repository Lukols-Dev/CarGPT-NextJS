import { getURL } from "@/utils/helpers";
import { STRIPE } from "@/utils/stripe";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const { price, customer } = data;

  try {
    //Create checkout session
    const session = await STRIPE.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer_email: customer,
      //   customer_update: {
      //     address: "auto",
      //   },
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${getURL()}/generator`,
      cancel_url: `${getURL()}/pricing`,
    });

    if (session) {
      return NextResponse.json({ sessionId: session.id }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: { statusCode: 500, message: "Session is not defined" } },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
};
