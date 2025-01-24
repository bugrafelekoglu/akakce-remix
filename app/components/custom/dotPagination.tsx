import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type DotPaginationProps = HTMLAttributes<HTMLDivElement> & {
  currentIndex: number;
  length: number;
  onPressIndex: (index: number) => void;
};

export const DotPagination: FC<DotPaginationProps> = ({
  currentIndex,
  length,
  onPressIndex,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-row gap-2", className)} {...props}>
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          disabled={index === currentIndex}
          onClick={() => onPressIndex(index)}
          className={cn("w-2 h-2 rounded-full", {
            "bg-primary": index === currentIndex,
            "bg-secondary": index !== currentIndex,
          })}
        />
      ))}
    </div>
  );
};
DotPagination.displayName = "DotPagination";
