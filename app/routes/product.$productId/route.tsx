import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import colors from "tailwindcss/colors";

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { PriceTag, Rating, StorageOptions } from "@/components/custom";

import { loader } from "./loader.server";
export { loader };

type TProductDetailsLoader = typeof loader;

export const meta: MetaFunction<TProductDetailsLoader> = ({ data }) => {
  const title = data?.productName ?? "Product Detail Page";
  return [{ title }];
};

export default function Product() {
  const {
    productName,
    mkName,
    imageUrl,
    price,
    badge,
    countOfPrices,
    freeShipping,
    lastUpdate,
    rating,
    storageOptions,
  } = useLoaderData<TProductDetailsLoader>();

  const [selectedStorage, setSelectedStorage] = useState<string>(
    storageOptions[0]
  );

  const { yellow, gray } = colors;

  const shippingText = freeShipping ? "Ücretsiz Kargo" : "Kargo Ücretli";

  const handleStorageSelect = (option: string) => {
    setSelectedStorage(option);
  };

  return (
    <div className="flex items-center justify-center mt-12 mx-4">
      <Card className="max-w-md sm:max-w-lg w-full">
        <div className="flex flex-row justify-between">
          <CardHeader className="">
            <CardTitle className="text-md font-bold text-blue-500">
              {mkName}
            </CardTitle>
            <CardTitle className="text-2xl">{productName}</CardTitle>
            <Badge className="w-fit bg-chart-1">{badge}</Badge>
          </CardHeader>
          <CardHeader>
            <Rating rating={rating} bgColor={gray[300]} fgColor={yellow[500]} />
          </CardHeader>
        </div>
        <CardContent className="flex justify-center my-2">
          <img src={imageUrl} alt={productName} className="max-h-64 max-w-64" />
        </CardContent>
        <CardContent className="flex justify-center py-4 bg-gray-200">
          <StorageOptions
            options={storageOptions}
            selected={selectedStorage}
            onSelect={handleStorageSelect}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center bg-secondary p-4">
          <CardDescription className="font-semibold text-primary">
            {countOfPrices} satıcı içinde kargo dahil en ucuz fiyat seçeneği
          </CardDescription>
          <PriceTag price={price} className="text-3xl mt-4" />
          <Badge className="w-fit bg-chart-2 mt-2 ">{shippingText}</Badge>
          <span className="text-sm text-gray-400 mt-2">
            Son güncelleme: {lastUpdate}
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
