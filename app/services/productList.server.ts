import { TProductListItem } from "./types";

type TProductListResponse = {
  horizontalProductList: TProductListItem[];
  productList: TProductListItem[];
  nextUrl: string;
};

type TProductListPaginated = {
  productList: TProductListItem[];
  nextUrl: string;
  pageCount: number;
  page: number;
};

const PRODUCT_LIST_PAGINATION_PAGE_COUNT = 3;

export class ProductListService {
  // IMPROVEMENT: Data can be cached
  private async fetchProductList(page?: number): Promise<TProductListResponse> {
    const url =
      !!page && page > 1
        ? `https://mock.akakce.dev/page${page}.json`
        : "https://mock.akakce.dev/page.json";

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

  async getProductListHorizontal(): Promise<TProductListItem[]> {
    const data = await this.fetchProductList();
    return data.horizontalProductList;
  }

  async getProductListPaginated(page: number): Promise<TProductListPaginated> {
    const data = await this.fetchProductList(page);
    return {
      productList: data.productList,
      nextUrl: data.nextUrl,
      pageCount: PRODUCT_LIST_PAGINATION_PAGE_COUNT,
      page,
    };
  }
}
