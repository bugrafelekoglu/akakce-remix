import { FC, ReactNode } from "react";
import { Link } from "@remix-run/react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui";

import { TProductListItem } from "@/services";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type ProductListItemProps = {
  product: TProductListItem;
  listDirection: "horizontal" | "vertical";
  containerClassName?: string;
};

export const ProductListItem: FC<ProductListItemProps> = ({
  product,
  // listDirection,
  containerClassName,
}) => {
  const LinkWrapper = ({ children }: { children: ReactNode }) => {
    return (
      <Link to={`/product/${product.code}`} key={product.code}>
        {children}
      </Link>
    );
  };

  return (
    <Card
      className={cn(
        "flex flex-row justify-start items-center ",
        containerClassName
      )}
    >
      <div className="p-4 pr-12 relative">
        <LinkWrapper>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-h-36 max-w-36"
          />
        </LinkWrapper>
        <div className="rounded-full bg-red-600 w-10 h-10 absolute top-0 right-0 flex flex-row items-center justify-center">
          <p className="text-white text-sm font-bold flex flex-row items-baseline">
            <p className="text-[10px] pr-[2px]">%</p>
            {product.dropRatio}
          </p>
        </div>
      </div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="line-clamp-1 text-blue-500 pb-4">
            <LinkWrapper>{product.name}</LinkWrapper>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl font-bold">{product.price} TL</p>
          <div className="flex flex-row items-center">
            <p className="text-gray-400 text-xs">
              {product.countOfPrices} satıcı
            </p>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </CardContent>
        <CardFooter className="text-gray-400 text-[13px] font-bold">
          <p>{product.followCount}+ takip</p>
        </CardFooter>
      </Card>
    </Card>
  );
};
ProductListItem.displayName = "ProductListItem";
