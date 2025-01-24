import { TProductDetail } from "./types";

type TProductDetailsResponse = TProductDetail;

export class ProductService {
  private async fetchProductDetails(
    productId: string
  ): Promise<TProductDetailsResponse> {
    const url = `https://mock.akakce.dev/product${productId}.json`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }

  async getProductDetails(productId: string): Promise<TProductDetail> {
    const data = await this.fetchProductDetails(productId);
    return data;
  }
}
