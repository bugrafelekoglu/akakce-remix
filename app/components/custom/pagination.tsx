import { HTMLAttributes, forwardRef } from "react";
import { Link } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type PaginationProps = HTMLAttributes<HTMLDivElement> & {
  showPrevious: boolean;
  currentPage: number;
  showNext: boolean;
};

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, currentPage, showNext, showPrevious, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-row gap-8", className)}
        {...props}
      >
        {showPrevious && (
          <Link to={`?page=${currentPage - 1}`} className="flex flex-row gap-2">
            <ChevronLeft />
            Previous
          </Link>
        )}
        <p>{currentPage}</p>
        {showNext && (
          <Link to={`?page=${currentPage + 1}`} className="flex flex-row gap-2">
            Next
            <ChevronRight />
          </Link>
        )}
      </div>
    );
  }
);
Pagination.displayName = "Pagination";
