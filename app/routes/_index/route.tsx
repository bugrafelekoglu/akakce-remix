import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { ProductListHorizontal } from "./productListHorizontal";
import { ProductListPaginated } from "./productListPaginated";
import { CustomPagination } from "@/components/custom";

import { getPageFromUrl } from "@/lib/utils";

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

  const { productListHorizontal, productListPaginated } =
    useLoaderData<TIndexLoader>();

  return (
    <div className="flex flex-col items-center gap-12 pt-4">
      <ProductListHorizontal productList={productListHorizontal} />
      <ProductListPaginated
        productList={productListPaginated.productList}
        containerClassName="w-full items-center"
        contentClassName="max-w-lg"
        PaginationComponent={
          <CustomPagination
            currentPage={currentPage}
            hasPrevious={currentPage > 1}
            pageCount={productListPaginated.pageCount}
            hasNext={productListPaginated.nextUrl !== ""}
          />
        }
      />
    </div>
  );
}
