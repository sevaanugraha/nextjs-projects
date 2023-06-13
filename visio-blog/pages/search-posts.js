import React from "react";
import Head from "next/head";

import { getPost } from "ssr-pwa/services/api/post";
import { getClientSideCategories } from "ssr-pwa/services/api/category";
import { SearchPage } from "ssr-pwa/components/HomePage/SearchPage";

const SearchPosts = ({ posts, categories }) => {
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <SearchPage data={{ posts, categories }} />
    </>
  );
};

export const getServerSideProps = async ({ res, query }) => {
  const page = query.currentPage || 1;
  const limit = query.limit || 5;
  const category = query.category || "";
  const search = query.search || "";

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  try {
    const posts = await getPost(page, limit, category, search);
    const categories = await getClientSideCategories();

    return {
      props: {
        posts: posts?.data?.data,
        categories: categories?.data?.data,
        error: false,
      },
    };
  } catch (e) {
    return {
      props: {
        posts: {},
        categories: {},
        error: e.message || "unknown api error",
      },
    };
  }
};

export default SearchPosts;
