import React, { Fragment, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";

import { PostContext } from "ssr-pwa/components/Post/context";
import { CONTROLS_PARENT_ELEMENT_CLASSNAME } from "ssr-pwa/components/Post/types";

const BlogInfo = () => {
  const { title, image, state, author } = useContext(PostContext);
  const totalReadTime =
    state.annotations.reduce((cv, a) => cv + a.displayLimit, 0) / 60;

  return (
    <div className="flex items-start justify-end gap-2 w-48 mr-2 sm:mr-4">
      <div className="h-12 w-12 sm:h-16 sm:w-16 relative">
        <Image
          src={image}
          alt="blog-thumbnail"
          fill
          className="h-full w-full object-cover"
        />
      </div>

      <div className="font-semibold text-base py-1">
        <h4 className="mb-1 text-sm sm:text-lg">{title}</h4>

        <div className="text-xs font-light">
          {author && <span>{author} . </span>}

          <span>
            {Math.round(totalReadTime) === 0 ? 1 : Math.round(totalReadTime)}{" "}
            MIN
          </span>
        </div>
      </div>
    </div>
  );
};

const AppBar = () => {
  const {
    state: { hideControls },
  } = useContext(PostContext);

  return (
    <Transition
      as={Fragment}
      show={!hideControls}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 -translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-full"
    >
      <div
        className={`${CONTROLS_PARENT_ELEMENT_CLASSNAME} fixed top-0 right-0 left-0 flex items-center justify-between gap-2 sm:h-[112px] px-4 py-3 sm:py-6 text-white`}
      >
        <Link href="/" passHref>
          <button
            type="button"
            aria-label="Go to Homepage"
            title="Go to Homepage"
            className="transition-all ease-linear delay-150 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
                       focus:outline-none focus:ring-2 focus:bg-hover-light"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        </Link>

        <BlogInfo />
      </div>
    </Transition>
  );
};

export default AppBar;
