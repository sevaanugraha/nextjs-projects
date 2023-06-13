import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ArrowLongLeftIcon from "@heroicons/react/20/solid/ArrowLongLeftIcon";
import ArrowLongRightIcon from "@heroicons/react/20/solid/ArrowLongRightIcon";

import { ID_TYPES } from "./types";
import { BlogListingContext } from "./context";

export default function Pagination() {
  const router = useRouter();
  const { state } = useContext(BlogListingContext);
  const firstRender = useRef(true);

  const { postsPagination: pagination, filterByCategoryID } = state;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined" && firstRender.current === false) {
      router.push(
        `/?currentPage=${currentPage}&category=${filterByCategoryID}#${ID_TYPES.BLOGS_SECTION}`,
        undefined,
        { scroll: false }
      );
    }

    firstRender.current = false;
  }, [currentPage]);

  useEffect(() => {
    if (pagination) {
      setCurrentPage(pagination.currentPage);
    }
  }, [pagination]);

  if (!pagination) {
    return null;
  }

  const pageNumbers = [...Array(pagination.totalPages).keys()].map(
    (v) => v + 1
  );
  const visiblePages = pageNumbers.filter(
    (page) => page === 1 || page === pageNumbers.length
  );

  return (
    <nav className="flex items-center justify-between px-4 sm:px-0 border-t border-gray-200">
      <div className="flex flex-1 w-0 -mt-px">
        <button
          type="button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex items-center pt-4 pr-1 border-t-2 border-transparent hover:border-gray-300 text-lg font-medium text-gray-500 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-7 w-7 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </button>
      </div>

      <div className="hidden md:flex">
        {visiblePages.map((pageNumber) => {
          const isActive = pageNumber === currentPage;

          if (pageNumber < 0) {
            return (
              <span
                key={`hidden-link-${pageNumber}`}
                className="inline-flex items-center px-4 pt-4 border-t-2 border-transparent text-lg font-medium text-gray-500"
              >
                ...
              </span>
            );
          }

          return (
            <Link
              key={`pagination-${pageNumber}`}
              href={`/?currentPage=${pageNumber}&category=${filterByCategoryID}#${ID_TYPES.BLOGS_SECTION}`}
              scroll={false}
              aria-current="page"
              className={`inline-flex items-center px-4 pt-4 border-t-2 ${
                isActive ? "border-indigo-500" : ""
              }  hover:border-gray-300 text-lg font-medium text-indigo-600 hover:text-gray-700`}
            >
              {pageNumber}
            </Link>
          );
        })}
      </div>

      <div className="flex w-0 flex-1 justify-end -mt-px">
        <button
          type="button"
          disabled={currentPage === pagination.totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="inline-flex items-center pt-4 pl-1 border-t-2 border-transparent hover:border-gray-300 text-lg font-medium text-gray-500 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="w-7 h-7 ml-3 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
