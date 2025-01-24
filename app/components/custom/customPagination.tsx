import { ComponentProps, FC } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui";

import { cn } from "@/lib/utils";

type CustomPaginationProps = ComponentProps<typeof Pagination> & {
  currentPage: number;
  pageCount?: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

export const CustomPagination: FC<CustomPaginationProps> = ({
  className,
  currentPage,
  pageCount,
  hasNext,
  hasPrevious,
  ...props
}) => {
  const nextPageLink = `?page=${currentPage + 1}`;
  const previousPageLink = `?page=${currentPage - 1}`;

  const nextIsLastPage = currentPage + 1 === pageCount;
  const prevIsFirstPage = currentPage - 1 === 1;

  return (
    <Pagination className={cn("flex flex-row gap-1", className)} {...props}>
      <PaginationContent>
        {hasPrevious && (
          <>
            <PaginationItem>
              <PaginationPrevious to={previousPageLink} />
            </PaginationItem>
            {!prevIsFirstPage && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink to={previousPageLink}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink to="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {hasNext && (
          <>
            <PaginationItem>
              <PaginationLink to={nextPageLink}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
            {!nextIsLastPage && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext to={nextPageLink} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
};
CustomPagination.displayName = "CustomPagination";
