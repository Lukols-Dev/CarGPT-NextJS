import { http } from "@/utils/axios";

export class StripeService {
  static createCheckout = async (data: any) => {
    return await http.post<any>(
      "/api/create-checkout-session",
      JSON.stringify(data)
    );
  };
}
