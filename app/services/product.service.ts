import { TProductDetail } from "@/types";

export class ProductService {
  async getProductDetails(productId: string): Promise<TProductDetail> {
    const url = `https://mock.akakce.dev/product${productId}.json`;
    const response = await fetch(url);
    const productDetails = await response.json();
    return productDetails;
  }
}
