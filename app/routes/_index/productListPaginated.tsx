import { FC, ReactElement } from "react";

import { ProductListItem } from "@/components/custom";

import type { TProductListItem } from "@/services";
import { cn } from "@/lib/utils";

export type TProductListPaginatedProps = {
  productList: TProductListItem[];
  PaginationComponent: ReactElement;
  containerClassName?: string;
};

export const ProductListPaginated: FC<TProductListPaginatedProps> = ({
  productList,
  PaginationComponent,
  containerClassName,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 bg-secondary p-4 rounded-lg",
        containerClassName
      )}
    >
      <div className="grid grid-cols-2 gap-4">
        {productList.map((product) => (
          <ProductListItem
            key={product.code}
            product={product}
            listDirection="vertical"
          />
        ))}
      </div>
      {PaginationComponent}
    </div>
  );
};
