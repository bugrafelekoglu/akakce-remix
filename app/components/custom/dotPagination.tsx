import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type DotPaginationProps = HTMLAttributes<HTMLDivElement> & {
  currentIndex: number;
  length: number;
};

export const DotPagination: FC<DotPaginationProps> = ({
  currentIndex,
  length,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-row gap-4", className)} {...props}>
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className={cn("w-2 h-2 rounded-full", {
            "bg-foreground": index === currentIndex,
            "bg-gray-300": index !== currentIndex,
          })}
        />
      ))}
    </div>
  );
};
DotPagination.displayName = "DotPagination";
