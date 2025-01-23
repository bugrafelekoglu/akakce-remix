import { FC } from "react";
import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui";
import { PriceDropBubble } from "./priceDropBubble";

import { TProductListItem } from "@/services";
import { cn } from "@/lib/utils";

type ProductListItemProps = {
  product: TProductListItem;
  listDirection: "horizontal" | "vertical";
  containerClassName?: string;
};

export const ProductListItem: FC<ProductListItemProps> = ({
  product,
  listDirection,
  containerClassName,
}) => {
  const linkTo = `/product/${product.code}`;

  return (
    <Card
      className={cn(
        "relative",
        listDirection === "horizontal"
          ? "flex flex-row justify-start items-center"
          : "flex flex-col items-center",
        containerClassName
      )}
    >
      <Link
        to={linkTo}
        key={product.code}
        className={cn(
          "p-4",
          listDirection === "horizontal" && "relative pr-12"
        )}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-36 max-w-36"
        />
        <PriceDropBubble
          dropRatio={product.dropRatio}
          className={cn(
            "absolute",
            listDirection === "horizontal" ? "top-2 right-0" : "top-2 left-2"
          )}
        />
      </Link>
      <Card
        className={cn(
          "border-none shadow-none",
          listDirection === "vertical"
            ? "w-full"
            : "flex flex-col justify-between"
        )}
      >
        <CardHeader>
          <CardTitle
            className={cn(
              listDirection === "vertical" && "block leading-6 min-h-[48px]"
            )}
          >
            <Link to={linkTo} key={product.code}>
              <span className="line-clamp-2 text-blue-500">{product.name}</span>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col  ">
          <div className="text-xl font-bold flex items-baseline">
            {new Intl.NumberFormat("tr-TR", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(Math.floor(product.price))}
            <span className="text-sm font-semibold">
              ,{String(Math.round((product.price % 1) * 100)).padStart(2, "0")}{" "}
              TL
            </span>
          </div>
          <span className="flex flex-row items-center text-gray-400 text-xs">
            {product.countOfPrices} satıcı
            <ChevronRight className="w-4 h-4" />
          </span>
        </CardContent>
        <CardFooter>
          <span className="text-gray-400 text-xs font-bold">
            {product.followCount}+ takip
          </span>
        </CardFooter>
      </Card>
    </Card>
  );
};
ProductListItem.displayName = "ProductListItem";
