import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import MagnifyingGlassIcon from "@heroicons/react/20/solid/MagnifyingGlassIcon";
import ChevronLeftIcon from "@heroicons/react/20/solid/ChevronLeftIcon";

import { BlogListingContext } from "./context";
import { ID_TYPES } from "./types";
import Blogs from "./Blogs";

const CategoryItem = ({ name, active, onClick }) => {
  return (
    <button
      aria-label={name}
      title={name}
      onClick={onClick}
      className={`
        flex justify-center items-center h-[40px] px-4 border border-primary-light/60 rounded-full hover:bg-primary-light/20 text-lg font-bold hover:text-primary-dark
        ${active ? "bg-primary-light/20 text-primary-dark" : "bg-white text-neutrals-light"}
        whitespace-nowrap capitalize cursor-pointer focus:outline-transparent focus:ring-1 focus:ring-gray-400
      `}
    >
      <span className="sr-only">{name}</span>
      {name}
    </button>
  );
};

const FilterChip = ({ isSearchPage }) => {
  const router = useRouter();
  const { state, handlers } = useContext(BlogListingContext);
  const { categories, filterByCategoryID, query } = state;
  const { filterByCategory, filterBySearch } = handlers;
  const [isSearched, setIsSearched] = useState(false);

  const handleCategoryFilter = (id) => {
    if (isSearchPage) {
      return router.push(
        `/search-posts?category=${id}#${ID_TYPES.BLOGS_SECTION}`,
        undefined,
        {
          scroll: false,
        }
      );
    }

    return router.push(
      `/?category=${id}#${ID_TYPES.BLOGS_SECTION}`,
      undefined,
      {
        scroll: false,
      }
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!query) {
      return null;
    }

    await router.push(
      `/search-posts?category=${filterByCategoryID}&search=${query}#${ID_TYPES.BLOGS_SECTION}`,
      undefined,
      { scroll: false }
    );

    return setIsSearched(true);
  };

  useEffect(() => {
    if (categories.length && router.query.category) {
      filterByCategory(router.query.category);

      return setIsSearched(true);
    }
  }, [router, categories]);

  return (
    <>
      {isSearchPage ? (
        <div>
          <div className="basis-96 grow-0 block lg:hidden mb-8">
            <div className="flex gap-4 w-full mb-6">
              <label htmlFor="search" className="sr-only">
                Search
              </label>

              <button
                onClick={() => router.push("/")}
                title="Back"
                className="p-2 border rounded-lg hover:bg-gray-100 text-primary-main"
              >
                <span className="sr-only">Back</span>

                <ChevronLeftIcon className="w-9 h-9" />
              </button>

              <form onSubmit={onSubmit} className="relative w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>

                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="w-6 h-6 text-gray-600"
                    aria-hidden="true"
                  />
                </div>

                <input
                  id="search"
                  name="search"
                  placeholder="Search"
                  type="search"
                  value={query}
                  onChange={(e) => filterBySearch(e)}
                  className="block w-full h-[56px] pt-2 pr-3 pb-2 pl-12 border border-gray-200 rounded-md bg-transparent 
                    text-lg placeholder:text-xl focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </form>
            </div>

            <div className="flex flex-wrap gap-4">
              {categories.map((item) => {
                return (
                  <CategoryItem
                    key={item._id}
                    name={item.name}
                    id={item._id}
                    active={item._id === filterByCategoryID}
                    onClick={() => handleCategoryFilter(item._id)}
                  />
                );
              })}
            </div>
          </div>

          {isSearched ? (
            <Blogs isSearchPage />
          ) : (
            <div className="text-gray-400 text-2xl text-center font-bold leading-10">
              <span>Search for blogs</span>
            </div>
          )}
        </div>
      ) : (
        <div className="basis-96 grow-0 block lg:hidden py-14">
          <Link
            href={"/search-posts"}
            className="flex justify-center items-center gap-2 w-[200px] h-[40px] mb-6 border border-neutrals-light hover:border-transparent rounded-full 
              hover:bg-white text-lg text-neutrals-light hover:text-primary-dark font-bold"
          >
            <MagnifyingGlassIcon
              className="h-5 w-5"
              aria-hidden="true"
            />
            <span>Search Blogs</span>
          </Link>

          <div className="flex gap-4 overflow-x-auto max-h-[40px]">
            {categories.map((item) => {
              return (
                <CategoryItem
                  key={item._id}
                  name={item.name}
                  id={item._id}
                  active={item._id === filterByCategoryID}
                  onClick={() => handleCategoryFilter(item._id)}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterChip;
