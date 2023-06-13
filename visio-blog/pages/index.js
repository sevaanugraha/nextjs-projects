import React from "react";
import Head from "next/head";

import { getFeaturedPosts, getPost } from "ssr-pwa/services/api/post";
import { getClientSideCategories } from "ssr-pwa/services/api/category";
import HomePage from "ssr-pwa/components/HomePage";
import MetaInformation from "ssr-pwa/components/common/MetaInformation";

const metaInformationData = {
  title: "Visio blog",
  description:
    "Discover the best music visualization & interaction for relaxation and positivity. Our collection of calm and feel-good tracks visualization will help you find inner peace and happiness.",
  keywords:
    "music, visualization, relaxation, calmness, feel good, positivity, inner peace, happiness",
  socialTitle:
    "Music Visualization for Calmness & Feel Good | The Ultimate Collection",
  socialDescription:
    "Find the perfect visual music to soothe your mind and uplift your spirit. Browse our collection of calm and feel-good tracks today.",
  socialThumbnail: '/thumbnail.png'
};

function Home({ posts, categories, featuredPosts, postsPagination }) {
  return (
    <>
      {process.env.NODE_ENV === "production" ? (
        <MetaInformation {...metaInformationData} />
      ) : (
        <Head>
          <title>Visio blog </title>
        </Head>
      )}
      <HomePage data={{ posts, categories, featuredPosts, postsPagination }} />
    </>
  );
}

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
    const featuredPosts = await getFeaturedPosts();

    return {
      props: {
        posts: posts?.data?.data,
        postsPagination: posts?.data?.pagination,
        categories: categories?.data?.data,
        featuredPosts: featuredPosts?.data?.data,
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

export default Home;
