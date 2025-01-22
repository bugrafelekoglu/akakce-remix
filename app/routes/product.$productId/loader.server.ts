import { type LoaderFunctionArgs } from "@remix-run/node";

import { ProductService } from "@/services";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { productId } = params;

  if (!productId) {
    throw new Error("Product ID is required");
  }

  const service = new ProductService();
  const productDetails = await service.getProductDetails(productId);

  if (!productDetails) {
    throw new Error("Product not found");
  }

  return productDetails;
};
