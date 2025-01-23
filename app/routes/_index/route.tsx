import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { Pagination, ProductListItem } from "@/components/custom";
import { getPageFromUrl } from "@/lib/utils";

import { HorizontalProductList } from "./horizontalProductList";
import { loader } from "./loader.server";

export { loader };

type TIndexLoader = typeof loader;

export const meta: MetaFunction = () => {
  return [
    { title: "Akakçe Case Study" },
    {
      name: "description",
      content:
        "This project is a case study prepared for the Akakçe interview process with using Remix and React.",
    },
  ];
};

export default function Index() {
  const [searchParams] = useSearchParams();
  const currentPage = getPageFromUrl(searchParams);

  const { horizontalProductList, productListPaginated } =
    useLoaderData<TIndexLoader>();

  return (
    <>
      <HorizontalProductList productList={horizontalProductList} />
      <div className="py-8 px-8 mx-auto items-center bg-white flex flex-col gap-4">
        <div className="flex flex-row gap-8">
          {productListPaginated.productList.map((product) => (
            <ProductListItem
              listDirection="vertical"
              product={product}
              key={product.code}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          showPrevious={currentPage > 1}
          showNext={productListPaginated.nextUrl !== ""}
        />
      </div>
    </>
  );
}
