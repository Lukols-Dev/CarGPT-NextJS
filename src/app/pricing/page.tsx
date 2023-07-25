"use client";

import { StripeService } from "@/services/stripe.service";
import { getStripe } from "@/utils/stripe-client";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleCheckout = async (price: any) => {
    if (!session) return router.push("/auth/signin");
    const { user } = session;
    try {
      const { data } = await StripeService.createCheckout({
        price: price,
        customer: user?.email,
      });
      const stripe = await getStripe();
      if (stripe && data.sessionId) {
        const sessionId = data.sessionId;
        stripe.redirectToCheckout({ sessionId });
      }
    } catch (err) {
      console.log("Checkout: ", err);
    }
  };

  return (
    <section className="flex flex-col gap-y-6 mt-44 items-center">
      <h1 className="text-white text-5xl font-bold">Buy carGPT credits</h1>
      <p className="text-2xl text-gray-500">
        Join thousands of happy customers by buying more below.
      </p>
      <div className="mt-9 flex gap-8">
        <div className="w-[250px] flex flex-col p-5 gap-y-4 rounded-lg">
          <p className="text-gray-500 text-xl font-semibold">25 Cars</p>
          <p className="text-gray-500 text-base">
            25 credits for redesigns with any theme.
          </p>
          <p className="text-white text-4xl font-bold">$5</p>
          <button
            className="flex w-full items-center justify-center space-x-2 rounded-lg border border-indigo-600 text-white px-5 py-2 mt-auto mb-0 text-sm shadow-md hover:bg-indigo-500 bg-indigo-600 font-medium transition"
            onClick={() => handleCheckout("price_1NPViLIn5uqAiJlobXCIuGEz")}
          >
            Buy
          </button>
        </div>
        <div className="w-[250px] flex flex-col p-5 gap-y-4 rounded-lg border border-gray-500 relative">
          <span className="absolute py-2 px-4 rounded-lg top-3 right-0 text-white animate-bounce">
            <DiamondIcon />
          </span>
          <p className="text-gray-500 text-xl font-semibold">100 Cars</p>
          <p className="text-gray-500 text-base">
            100 credits for redesigns with any theme.
          </p>
          <p className="text-white text-4xl font-bold">$15</p>
          <button className="flex w-full items-center justify-center space-x-2 rounded-lg border border-indigo-600 text-white px-5 py-2 mt-auto mb-0 text-sm shadow-md hover:bg-indigo-500 bg-indigo-600 font-medium transition">
            Buy
          </button>
        </div>
        <div className="w-[250px] flex flex-col p-5 gap-y-4 rounded-lg">
          <p className="text-gray-500 text-xl font-semibold">300 Cars</p>
          <p className="text-gray-500 text-base">
            300 credits for redesigns with any theme.
          </p>
          <p className="text-white text-4xl font-bold">$35</p>
          <button className="flex w-full items-center justify-center space-x-2 rounded-lg border border-indigo-600 text-white px-5 py-2 mt-auto mb-0 text-sm shadow-md hover:bg-indigo-500 bg-indigo-600 font-medium transition">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
