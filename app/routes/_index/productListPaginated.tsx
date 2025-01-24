import { FC, ReactElement } from "react";

import { ProductListItem } from "@/components/custom";

import type { TProductListItem } from "@/services";
import { cn } from "@/lib/utils";

export type TProductListPaginatedProps = {
  productList: TProductListItem[];
  PaginationComponent: ReactElement;
  containerClassName?: string;
  contentClassName?: string;
};

export const ProductListPaginated: FC<TProductListPaginatedProps> = ({
  productList,
  PaginationComponent,
  containerClassName,
  contentClassName,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center p-4 bg-secondary",
        containerClassName
      )}
    >
      <div className={cn("flex flex-col items-center gap-4", contentClassName)}>
        {PaginationComponent}
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
    </div>
  );
};
