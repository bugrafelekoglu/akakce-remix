import { FC, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { type CarouselApi } from "@/components/ui";
import { DotPagination, ProductListItem } from "@/components/custom";

import type { TProductListItem } from "@/services";
import { cn } from "@/lib/utils";

export type THorizontalProductListProps = {
  productList: TProductListItem[];
  showButtons?: boolean;
  containerClassName?: string;
};

export const HorizontalProductList: FC<THorizontalProductListProps> = ({
  productList,
  showButtons = false,
  containerClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const handlePressIndex = (index: number) => {
    api?.scrollTo(index);
  };

  // This is the suggested way to get the current index of the carousel from shadcn docs
  useEffect(() => {
    if (!api) return undefined;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        containerClassName
      )}
    >
      <Carousel
        setApi={setApi}
        className="max-w-sm"
        opts={{ align: "center", slidesToScroll: 1 }}
      >
        <CarouselContent>
          {productList.map((product) => (
            <CarouselItem key={product.code}>
              <ProductListItem
                product={product}
                listDirection="horizontal"
                containerClassName="m-2"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {showButtons && (
          <>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </>
        )}
      </Carousel>
      <DotPagination
        currentIndex={currentIndex}
        length={productList.length}
        onPressIndex={handlePressIndex}
      />
    </div>
  );
};
