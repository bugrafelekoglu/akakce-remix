import { FC, ReactNode } from "react";
import { Link } from "@remix-run/react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui";

import { TProductListItem } from "@/services";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { PriceDropBubble } from "./priceDropBubble";

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
        <PriceDropBubble
          dropRatio={product.dropRatio}
          className="absolute top-0 right-0"
        />
      </div>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="line-clamp-1 text-blue-500 pb-4">
            <LinkWrapper>{product.name}</LinkWrapper>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold flex items-baseline">
            {new Intl.NumberFormat("tr-TR", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(Math.floor(product.price))}
            <span className="text-sm">
              ,{String(Math.round((product.price % 1) * 100)).padStart(2, "0")}{" "}
              TL
            </span>
          </div>
          <div className="flex flex-row items-center">
            <span className="text-gray-400 text-xs">
              {product.countOfPrices} satıcı
            </span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </CardContent>
        <CardFooter className="text-gray-400 text-[13px] font-bold">
          <span>{product.followCount}+ takip</span>
        </CardFooter>
      </Card>
    </Card>
  );
};
ProductListItem.displayName = "ProductListItem";
