import React from "react";
import Link from "next/link";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";

import Select from "./Select";

const AppBar = ({p5UI, setP5UI}) => {
  return (
    <div className="fixed top-0 right-0 left-0 py-6 px-4 min-h-[64px] flex items-start justify-between text-white gap-2">
      <Link href="/" passHref>
        <button
          type="button"
          aria-label="Go to Homepage"
          title="Go to Homepage"
          className="transition-all ease-linear delay-150 flex items-center justify-center h-12 w-12 rounded-full enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
                     focus:outline-none focus:ring-2 focus:bg-hover-light"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      </Link>

      <Select
        value={p5UI}
        onChange={setP5UI}
      />
    </div>
  );
};

export default AppBar;
