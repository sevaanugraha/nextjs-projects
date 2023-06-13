import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

import ArrowLongRightIcon from "@heroicons/react/24/solid/ArrowLongRightIcon";
import PlayCircleIcon from "@heroicons/react/24/outline/PlayCircleIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

import { BlogListingContext } from "ssr-pwa/components/HomePage/context";

const FeaturedBlog = ({ index, id, title, author, totalReadTime, image }) => {
  return (
    <Link
      href={`/post/${id}`}
      className="relative flex flex-col items-center justify-end sm:w-[320px] h-[354px] rounded-xl 
         text-white active:cursor-grabbing"
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

      <div className="flex justify-between p-9 w-full">
        <div className="flex-3">
          <h6 className="mb-4 text-xs font-medium tracking-wide leading-5">
            #{index} &nbsp;&nbsp; {totalReadTime} MIN
          </h6>

          <h4 className="text-2xl font-semibold leading-9">
            {title}
          </h4>
        </div>

        <div className="flex flex-col pl-6 border-l border-white">
          <h6 className="mb-1 text-xs font-medium tracking-wide">By</h6>

          <h6 className="mb-2 text-xs tracking-wide">{author}</h6>

          <PlayCircleIcon className="h-11" />
        </div>
      </div>
    </Link>
  );
};

function Banner() {
  const { featured } = useContext(BlogListingContext);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "snap",

    breakpoints: {
      "(min-width:0px)": {
        slides: { perView: 1, spacing: 18 },
      },

      "(min-width: 500px)": {
        slides: { perView: 1.4, spacing: 50 },
      },

      "(min-width: 640px)": {
        slides: { perView: 1.8, spacing: 14 },
      },

      "(min-width: 768px)": {
        slides: { perView: 2.1, spacing: 14 },
      },

      "(min-width: 1024px)": {
        slides: { perView: 2.9, spacing: 14 },
      },

      "(min-width: 1280px)": {
        slides: { perView: 3.6, spacing: 14 },
      },

      "(min-width: 1536px)": {
        slides: { perView: 4.3, spacing: 14 },
      },
    },

    slides: {
      perView: 1,
      spacing: 5,
    },
  });

  return (
    <div className="w-full">
      <div className="container mx-auto pt-24 px-4 pb-5 lg:pb-0">
        <div className="mt-10 lg:mt-16 mb-10">
          <h1 className="mb-4 text-5xl font-bold capitalize">
            Discover Immersive Storytelling
          </h1>

          <h1 className="text-4xl font-light">
            Experience the story, beyond just reading
          </h1>
        </div>

        {slider ? (
          <div className="flex gap-4 mb-8 justify-end">
            <button
              onClick={(e) => e.stopPropagation() || slider.current.prev()}
              className="px-4 py-3 border rounded-lg hover:bg-gray-100 text-primary-main focus:ring-2 focus:bg-hover-light"
            >
              <ChevronLeftIcon className="h-7 w-7" />
            </button>

            <button
              onClick={(e) => e.stopPropagation() || slider.current.next()}
              className="px-4 py-3 border rounded-lg hover:bg-gray-100 text-primary-main focus:ring-2 focus:bg-hover-light"
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>
          </div>
        ) : null}

        <div
          ref={sliderRef}
          className="keen-slider mb-10 active:cursor-grabbing"
        >
          {featured.map((item, index) => {
            const totalReadTime =
              (item?.annotations?.reduce?.((cv, a) => cv + a.displayLimit, 0) || 1) / 60;

            return (
              <div
                key={`post-banner-${item._id}`}
                className="keen-slider__slide active:cursor-grabbing"
              >
                <FeaturedBlog
                  index={index + 1}
                  id={item._id}
                  title={item.title}
                  author={item.author}
                  totalReadTime={
                    Math.round(totalReadTime) === 0
                      ? 1
                      : Math.round(totalReadTime)
                  }
                  image={item.thumbnailImage?.[0]?.link}
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            const element = document.getElementById("more-blogs");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="flex justify-end items-center gap-2 container mx-auto text-md md:text-2xl tracking-wide text-neutrals-light"
        >
          <p className="font-light">
            View More <span className="font-semibold">Blogs</span>
          </p>
          <ArrowLongRightIcon className="h-6" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
