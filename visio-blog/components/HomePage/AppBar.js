import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

import Bars2Icon from "@heroicons/react/24/outline/Bars2Icon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";

function AppBar() {
  const [isOnTop, setIsOnTop] = useState(true);

  const handleCheckNavbarIsOnTop = () => {
    const scrollY = window.scrollY;

    if (scrollY <= 63) {
      setIsOnTop(true);
    } else if (scrollY > 64) {
      setIsOnTop(false);
    }
  };

  useEffect(() => {
    handleCheckNavbarIsOnTop();
    window.addEventListener("scroll", handleCheckNavbarIsOnTop);
    return () => window.removeEventListener("scroll", handleCheckNavbarIsOnTop);
  }, []);

  return (
    <Disclosure>
      {({ open }) => (
        <div
          className={`
            fixed top-0 left-0 right-0 z-40 md:transition md:ease-in-out md:duration-500 backdrop-filter backdrop-blur-sm 
            ${
              isOnTop && !open
                ? "bg-transparent"
                : "border-b bg-white md:bg-white/80"
            }
          `}
        >
          <div className="container flex items-center justify-between h-24 mx-auto px-4">
            <Link
              href="/"
              className="text-3xl tracking-widest text-primary-dark flex items-center font-light"
            >
              <img src="/logo.png" className="h-12" />
            </Link>

            <ul className="hidden md:flex gap-x-10 text-xl font-medium tracking-wider text-primary-dark">
              <Link
                href="/playground"
                className="flex items-center gap-1 hover:text-secondary-main"
              >
                <span className="sr-only">Visit Playground</span>
                Visit Playground
              </Link>
            </ul>

            <div className="flex md:hidden">
              <Disclosure.Button
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-600
                  text-neutrals-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <Bars2Icon className="block h-8 w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="container mx-auto px-4 pb-7">
              <Disclosure.Button
                as="a"
                href="/playground"
                className="block px-4 py-4 rounded-md bg-transparent hover:bg-gray-100 text-lg font-medium text-primary-dark"
              >
                <span className="sr-only">Visit Playground</span>
                Visit Playground
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

export default AppBar;
