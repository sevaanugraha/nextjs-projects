import React from "react";
import Image from "next/image";

import {
  BlogListingContext,
  useBlogListing,
} from "ssr-pwa/components/HomePage/context";
import bgImage from "ssr-pwa/public/gradient-1.svg";
import FilterChip from "./FilterChip";

export function SearchPage({ data }) {
  const value = useBlogListing({ data });

  return (
    <BlogListingContext.Provider value={value}>
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

      <div className="container mx-auto px-4 py-12">
        <FilterChip isSearchPage />
      </div>
    </BlogListingContext.Provider>
  );
}
