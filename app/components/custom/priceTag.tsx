import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type PriceTagProps = HTMLAttributes<HTMLDivElement> & {
  price: number;
};

export const PriceTag: FC<PriceTagProps> = ({ price, className, ...props }) => {
  const flooredPrice = Math.floor(price);
  const cents = String(Math.round((price % 1) * 100)).padStart(2, "0");
  return (
    <div
      className={cn("text-xl font-bold flex items-baseline", className)}
      {...props}
    >
      {new Intl.NumberFormat("tr-TR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(flooredPrice)}
      <span className="text-sm font-semibold">,{cents} TL</span>
    </div>
  );
};
PriceTag.displayName = "PriceTag";
