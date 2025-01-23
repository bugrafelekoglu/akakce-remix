import { FC } from "react";
import { Link } from "@remix-run/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui";

import { TProductListItem } from "@/services";
import { cn } from "@/lib/utils";

type ProductListItemProps = {
  product: TProductListItem;
  listDirection: "horizontal" | "vertical";
  linkClassName?: string;
  cardClassName?: string;
};

export const ProductListItem: FC<ProductListItemProps> = ({
  product,
  // listDirection,
  linkClassName,
  cardClassName,
}) => {
  return (
    <Link
      to={`/product/${product.code}`}
      key={product.code}
      className={linkClassName}
    >
      <Card className={cn("flex flex-col items-center", cardClassName)}>
        <CardHeader>
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription>{product.followCount} Takipçi</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-h-32 max-w-32"
          />
        </CardContent>
        <CardFooter>
          <p>{product.price} TL</p>
        </CardFooter>
      </Card>
    </Link>
  );
};
ProductListItem.displayName = "ProductListItem";
