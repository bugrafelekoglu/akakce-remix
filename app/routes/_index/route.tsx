import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import type { TProductListItem } from "@/types";

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
  const { horizontalProductList, productList } = useLoaderData<TIndexLoader>();

  const Product = ({ product }: { product: TProductListItem }) => (
    <Link to={`/product/${product.code}`} key={product.code}>
      <Card className="w-64 flex flex-col items-center">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
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

  return (
    <div className="flex gap-8 flex-col">
      <div className="py-8 px-8 mx-auto bg-white flex flex-row">
        {horizontalProductList.map((product) => (
          <Product product={product} key={product.code} />
        ))}
      </div>
      <div className="py-8 px-8 mx-auto bg-white flex flex-row">
        {productList.map((product) => (
          <Product product={product} key={product.code} />
        ))}
      </div>
    </div>
  );
}
