import React, { useContext } from "react";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";

import { BlogListingContext } from "ssr-pwa/components/HomePage/context";

const MobileBlogCard = ({ post }) => {
  const { _id, title, createdAt, author, thumbnailImage } = post;
  const image = thumbnailImage[0].link;
  const formattedDate = moment(createdAt).format("DD MMM YYYY");

  return (
    <li>
      <Link href={`post/${_id}`} className="rounded-md">
        <div className="h-[160px] relative flex flex-col items-center justify-end rounded-xl text-white drop-shadow-xl bg-slate-50">
          <div className="absolute w-full h-full inset-0 -z-10">
            <Image
              src={image}
              alt=""
              sizes="100vw"
              fill
              loading="lazy"
              className="object-cover object-center rounded-xl"
            />
          </div>

          <div className="flex flex-col w-full h-full px-4 py-8">
            <p className="text-gray-50 text-sm">{formattedDate}</p>

            <p className="whitespace-nowrap text-white text-lg truncate antialiased font-bold drop-shadow-md">
              {title}
            </p>

            <p className="whitespace-nowrap mt-auto ml-auto text-gray-200 text-sm truncate antialiased font-bold drop-shadow-md">
              - {author}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

const BlogCard = ({ post }) => {
  const { _id, title, metaDescription, createdAt, author, thumbnailImage } =
    post;
  const image = thumbnailImage?.[0]?.link;
  const formattedDate = moment(createdAt).format("DD MMM YYYY");

  return (
    <li className="flex flex-col lg:flex-row gap-6 lg:gap-12">
      <div className="rounded-md">
        <Link
          className="flex flex-col items-center justify-end sm:w-[320px] h-[354px] relative rounded-xl text-white drop-shadow-xl bg-slate-50"
          href={`post/${_id}`}
          passHref
        >
          <div className="absolute w-full h-full inset-0 -z-10">
            <Image
              src={image}
              alt=""
              sizes="100vw"
              fill
              loading="lazy"
              className="object-cover object-center rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between w-full h-full px-7 py-8">
            <p className="text-white">{formattedDate}</p>
            <div>
              <p className="text-white">By</p>

              <p className="text-6xl font-bold leading-tight text-white antialiased drop-shadow-md">
                {author}
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full px-4 lg:px-0">
        <h4 className="mt-4 mb-3 lg:mb-4 text-5xl font-bold leading-[1.2] text-neutrals-light">
          {title}
        </h4>

        <p className="mb-5 xl:mb-10 text-xl tracking-wide text-justify text-neutrals-light">
          {metaDescription}
        </p>

        <Link
          href={`post/${_id}`}
          className="flex items-center gap-6 w-max text-2xl font-semibold tracking-wider text-neutrals-light focus:outline-none"
        >
          <span
            className="flex items-center justify-center h-[64px] w-[64px] border border-neutrals-light rounded-full hover:bg-neutrals-light/5
                 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"
          >
            <PlayIcon className="h-9 w-9 ml-1 text-neutrals-light" />
          </span>
          Listen
        </Link>
      </div>
    </li>
  );
};

const Blogs = ({ isSearchPage }) => {
  const { state } = useContext(BlogListingContext);
  const { posts } = state;

  if (isSearchPage) {
    return (
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
        {posts.length > 0 ? (
          posts.map((post) => {
            return <MobileBlogCard key={`post-${post._id}`} post={post} />;
          })
        ) : (
          <span className="mt-10 text-gray-400 text-2xl text-center font-bold leading-10 col-span-3">
            No blogs found
          </span>
        )}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-16 lg:gap-14 w-full lg:w-8/12">
      {posts.length > 0 ? (
        posts.map((post) => {
          return <BlogCard key={`post-${post._id}`} post={post} />;
        })
      ) : (
        <span className="mt-10 text-gray-400 text-2xl text-center font-bold leading-10 col-span-3">
          No blogs found
        </span>
      )}
    </ul>
  );
};

export default Blogs;
