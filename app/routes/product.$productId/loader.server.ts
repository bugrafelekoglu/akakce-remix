import type { LoaderFunctionArgs } from "@remix-run/node";

import { TProductDetail } from "@/types";

type TResponseData = TProductDetail;

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://mock.akakce.dev/product${params.productId}.json`
  );
  const data: TResponseData = await response.json();
  return data;
};
