import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import Facebook from "ssr-pwa/components/common/Icons/Facebook";
import Twitter from "ssr-pwa/components/common/Icons/Twitter";
import LinkedIn from "ssr-pwa/components/common/Icons/LinkedIn";
import Copy from "ssr-pwa/components/common/Icons/Copy";

import { PostContext } from "ssr-pwa/components/Post/context";

const Share = ({ hide, url }) => {
  const { title, image } = useContext(PostContext);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    setCopied(true);
    return setTimeout(() => setCopied(false), 1000);
  };

  return (
    <Transition
      as={Fragment}
      show={!hide}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
    >
      <div className={`fixed right-0 bottom-16 sm:bottom-24 left-0 px-4`}>
        <div
          className="flex items-center max-w-screen-sm h-[56px] sm:h-[86px] mx-auto my-2 px-4 sm:px-10 rounded-2xl backdrop-blur-lg text-white transition-all"
          style={{
            backgroundColor: "rgba(255, 255, 255, .09)",
          }}
        >
          <div className="flex gap-8 mx-auto">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${url}&title=${title}&picture=${image}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Facebook"
              className="flex items-center justify-center h-9 w-9 sm:h-12 sm:w-12 rounded-full hover:bg-hover-light dark:hover:bg-hover-dark 
                                focus:outline-none focus:ring-2 focus:bg-hover-light transition-all ease-linear delay-150"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>

            <Link
              href={`https://twitter.com/intent/tweet?url=${url}&text=${title}&image_url=${image}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on Twitter"
              className="flex items-center justify-center h-9 w-9 sm:h-12 sm:w-12 rounded-full hover:bg-hover-light dark:hover:bg-hover-dark 
                                focus:outline-none focus:ring-2 focus:bg-hover-light transition-all ease-linear delay-150"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>

            <Link
              href={` https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Share on LinkedIn"
              className="flex items-center justify-center h-9 w-9 sm:h-12 sm:w-12 rounded-full hover:bg-hover-light dark:hover:bg-hover-dark 
                                focus:outline-none focus:ring-2 focus:bg-hover-light transition-all ease-linear delay-150"
            >
              <LinkedIn className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>

            <button
              className="relative flex items-center justify-center h-9 w-9 sm:h-12 sm:w-12 rounded-full hover:bg-hover-light dark:hover:bg-hover-dark 
                                focus:outline-none focus:ring-2 focus:bg-hover-light transition-all ease-linear delay-150"
              onClick={() => {
                navigator.clipboard.writeText(url), handleCopyAddress();
              }}
              title="Copy to clipboard"
            >
              {copied && (
                <div className="absolute sm:-right-1 -top-8 px-2 py-1 rounded-lg bg-gray-700/80 text-xs">
                  Copied
                </div>
              )}
              <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Share;

