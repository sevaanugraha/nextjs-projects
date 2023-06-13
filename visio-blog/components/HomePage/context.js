import { createContext, useReducer, useEffect, useMemo } from "react";

import { ACTION_TYPES } from "ssr-pwa/components/HomePage/types";

export const initialState = {
  posts: [],
  categories: [],
  featured: [],
  filterByCategoryID: "",
  query: "",
};

export const BlogListingContext = createContext(initialState);

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.UPDATE_DATA:
      if (!!Object.keys(payload).length) {
        return {
          ...state,
          ...payload,
        };
      }

    case ACTION_TYPES.FILTER_BY_CATEGORY_ID:
      return {
        ...state,
        filterByCategoryID: payload,
      };

    case ACTION_TYPES.FILTER_BY_QUERY:
      return {
        ...state,
        query: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export function useMemoizedReducer(reducer, initialState) {
  return useReducer(
    useMemo(() => reducer, [reducer]),
    initialState
  );
}

export const useBlogListing = ({ data }) => {
  const [state, dispatch] = useMemoizedReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.UPDATE_DATA,
      payload: data,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const filterByCategory = (categoryId) => {
    dispatch({ type: ACTION_TYPES.FILTER_BY_CATEGORY_ID, payload: categoryId });

    dispatch({
      type: ACTION_TYPES.FILTER_BY_QUERY,
      payload: "",
    });
  };

  const filterBySearch = (event) => {
    const search = event.target.value;

    dispatch({
      type: ACTION_TYPES.FILTER_BY_QUERY,
      payload: search,
    });
  };

  return {
    state,
    featured: data.featuredPosts,
    handlers: {
      filterByCategory,
      filterBySearch,
    },
  };
};
