import React from "react";
import Image from "next/image";

import {
  BlogListingContext,
  useBlogListing,
} from "ssr-pwa/components/HomePage/context";
import bgImage from "ssr-pwa/public/gradient-1.svg";

import AppBar from "./AppBar";
import Banner from "./Banner";
import FilterChip from "./FilterChip";
import Blogs from "./Blogs";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

export function Home({ data }) {
  const value = useBlogListing({ data });

  return (
    <BlogListingContext.Provider value={value}>
      <div className="relative w-full h-full">
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Image
            src={bgImage}
            alt=""
            sizes="100vw"
            fill
            loading="lazy"
            className="object-cover	object-center"
          />
        </div>

        <AppBar />

        <Banner />

        <div className="container mx-auto px-4">
          <FilterChip />
        </div>

        {/* do not remove this  */}
        <div id="blogs-section" className="lg:h-28" />

        <div className="container mx-auto px-4 pb-20 lg:-mt-2">
          <div
            id="more-blogs"
            className="flex items-start justify-between xl:gap-[120px] pb-14"
          >
            <Blogs />
            <Sidebar />
          </div>

          <Pagination />
        </div>
      </div>

      <Subscribe />

      <Footer />
    </BlogListingContext.Provider>
  );
}
