import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { loader } from "./loader.server";
export { loader };

type TProductDetailsLoader = typeof loader;

export const meta: MetaFunction<TProductDetailsLoader> = ({ data }) => {
  const title = data?.productName ?? "Product Detail Page";
  return [{ title }];
};

export default function Product() {
  const productDetails = useLoaderData<TProductDetailsLoader>();

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-64 flex flex-col items-center">
        <CardHeader>
          <CardTitle>{productDetails.productName}</CardTitle>
          <CardDescription>{productDetails.mkName} Takipçi</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={productDetails.imageUrl}
            alt={productDetails.productName}
            className="max-h-32 max-w-32"
          />
        </CardContent>
        <CardFooter>
          <p>{productDetails.price} TL</p>
        </CardFooter>
      </Card>
    </div>
  );
}
