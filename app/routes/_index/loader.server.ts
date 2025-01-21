import { TProductListItem } from "@/types";

type TResponseData = {
  horizontalProductList: TProductListItem[];
  productList: TProductListItem[];
  nextUrl: string;
};

export const loader = async () => {
  const response = await fetch("https://mock.akakce.dev/page.json");
  const data: TResponseData = await response.json();
  return data;
};
