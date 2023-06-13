import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";

import { BlogListingContext } from "./context";
import { ID_TYPES } from "./types";

const ListItem = ({ name, active, onClick }) => {
  return (
    <li
      className={`py-3 px-4 mb-4 rounded-md hover:bg-[#EDDEFB] text-xl tracking-wide text-neutrals-light capitalize cursor-pointer`}
      style={{
        background: active
          ? "linear-gradient(90deg, #EDDEFB 5.13%, #E7E0F9 43.98%, #D7E6FC 78.68%)"
          : " ",
      }}
      onClick={onClick}
    >
      {name}
    </li>
  );
};

const Sidebar = () => {
  const router = useRouter();
  const { state, handlers } = useContext(BlogListingContext);
  const { categories, filterByCategoryID, query } = state;
  const { filterByCategory, filterBySearch } = handlers;

  const handleCategoryFilter = (id) =>
    router.push(`/?category=${id}#${ID_TYPES.BLOGS_SECTION}`, undefined, {
      scroll: false,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return null;
    }

    return router.push(
      `/?category=${filterByCategoryID}&search=${query}#${ID_TYPES.BLOGS_SECTION}`,
      undefined,
      { scroll: false }
    );
  };

  useEffect(() => {
    if (categories.length) {
      filterByCategory(router.query.category || categories[0]._id);
    }
  }, [router, categories]);

  return (
    <div className="hidden lg:block w-3/12">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="relative w-full mb-6 border-solid border-b-2 border-neutrals-light"
      >
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => filterBySearch(e)}
          className="block pl-2 py-2 outline-none bg-transparent text-xl placeholder:text-xl placeholder:font-light placeholder-neutrals-light"
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <MagnifyingGlassIcon className="h-6 text-neutrals-light" />
        </div>
      </form>

      <ul>
        {categories.map((item, index) => {
          const active = item._id === filterByCategoryID;

          return (
            <ListItem
              key={`categories-navigation-${index}`}
              name={item.name}
              active={active}
              onClick={() => handleCategoryFilter(item._id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
