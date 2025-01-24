import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type PriceDropBubbleProps = HTMLAttributes<HTMLDivElement> & {
  dropRatio: number;
};

export const PriceDropBubble: FC<PriceDropBubbleProps> = ({
  dropRatio,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-full bg-red-500 w-10 h-10 flex flex-row items-center justify-center",
        className
      )}
      {...props}
    >
      <span className="text-white text-sm font-bold flex flex-row items-baseline">
        <span className="text-[10px] pr-[2px]">%</span>
        {dropRatio}
      </span>
    </div>
  );
};
PriceDropBubble.displayName = "PriceDropBubble";
