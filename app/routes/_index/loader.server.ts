import { getPageFromUrl } from "@/lib/utils";
import { ProductListService } from "@/services";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const page = getPageFromUrl(url.searchParams);

  // FIXME: When the search params change, getProductListHorizontal is called again.
  // FIXME: First page has the horizontal product list, but the rest of the pages don't.
  // So either we need to call the service twice or we need to get both lists in the same service call.
  const service = new ProductListService();
  const productListHorizontal = await service.getProductListHorizontal();
  const productListPaginated = await service.getProductListPaginated(page);

  if (!productListHorizontal)
    throw new Error("Horizontal Product List not found");
  if (!productListPaginated)
    throw new Error("Paginated Product List not found");

  return { productListHorizontal, productListPaginated };
};
