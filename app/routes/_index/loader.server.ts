import { ProductListService } from "@/services";

export const loader = async () => {
  const service = new ProductListService();
  const horizontalProductList = await service.getHorizontalProductList();
  const productListPaginated = await service.getProductListPaginated(1);

  if (!horizontalProductList)
    throw new Error("Horizontal Product List not found");
  if (!productListPaginated)
    throw new Error("Paginated Product List not found");

  return { horizontalProductList, productListPaginated };
};
