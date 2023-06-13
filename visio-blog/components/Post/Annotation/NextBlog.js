import React, { useContext } from "react";
import Image from "next/image";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

import { PostContext } from "ssr-pwa/components/Post/context";
import { Box } from "ssr-pwa/components/Post/Annotation/Container";

const NextBlog = () => {
  const { nextPost } = useContext(PostContext);
  const { _id, title, thumbnailImage, author, annotations } = nextPost;

  const totalReadTime =
    annotations.reduce((cv, a) => cv + a.displayLimit, 0) / 60;

  const roundedReadTime =
    Math.round(totalReadTime) === 0 ? 1 : Math.round(totalReadTime);

  return (
    <div className="fixed inset-0 grid place-items-center h-screen px-4">
      <a href={`/post/${_id}`}>
        <Box>
          <div className="py-2">
            <p className="mb-2 text-sm text-left font-semibold uppercase">
              Up Next
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              <Image
                src={thumbnailImage[0].link}
                alt="blog-thumbnail"
                height={180}
                width={250}
                loading="lazy"
                className="w-full lg:w-[250px] rounded-xl object-fill"
              />

              <div className="hidden lg:block text-left">
                <div className="flex mb-2 text-3xl font-semibold break-keep">
                  <span>{title}</span>

                  <div className="w-[2px] mx-6 bg-gray-500" />

                  <span>{author}</span>
                </div>

                <p className="mb-3 text-sm font-semibold">
                  {" "}
                  {roundedReadTime} min{" "}
                </p>

                <ChevronRightIcon className="w-8 h-8 ml-auto" />
              </div>

              <div className="lg:hidden text-left">
                <div className="flex mb-4 text-xl font-semibold break-keep">
                  <span>{title}</span>
                  <div className="w-[2px] mx-4 bg-gray-500" />
                  <span>{author}</span>
                </div>

                <div className="flex">
                  <p className="text-sm font-semibold">{roundedReadTime} min</p>
                  <ChevronRightIcon className="w-6 h-6 ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </a>
    </div>
  );
};

export default NextBlog;
