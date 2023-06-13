import React from "react";
import Link from "next/link";
import Image from "next/image";

import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";

import facebookIcon from "ssr-pwa/public/facebook.svg";
import twitterIcon from "ssr-pwa/public/twitter.svg";
import linkedinIcon from "ssr-pwa/public/linkedin.svg";
import heartIcon from "ssr-pwa/public/heart.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="w-full">
      <div className="container relative hidden md:flex justify-between items-start mx-auto px-4 py-12">
        {false && (
          <div className="flex items-center gap-8 text-gray-300">
            <Link href="#" title="Facebook">
              <Image src={facebookIcon} alt="" height={28} width={28} />
            </Link>

            <Link href="#" title="Twitter">
              <Image src={twitterIcon} alt="" height={28} width={28} />
            </Link>

            <Link href="#" title="LinkedIn">
              <Image src={linkedinIcon} alt="" height={28} width={28} />
            </Link>
          </div>
        )}

        <p className="text-xl leading-relaxed font-light text-neutrals-light">
          <span className="flex items-center">
            Crafted with &nbsp;{" "}
            <Image src={heartIcon} alt="" height={24} width={24} />
          </span>
          Anand & ecoBees © {currentYear}
        </p>

        <button
          onClick={handleBackToTop}
          className="flex p-2 border rounded-full text-primary-main hover:bg-gray-100"
        >
          <ChevronUpIcon className="h-7 w-7" />
        </button>
      </div>

      <div className="container md:hidden mx-auto px-4 py-12">
        <div className="flex justify-between items-start gap-4">
          <p className="text-xl leading-relaxed text-neutrals-light">
            <span className="flex items-center">
              Crafted with &nbsp;{" "}
              <Image src={heartIcon} alt="" height={24} width={24} />
            </span>
            Anand & ecoBees © {currentYear}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToTop}
              className="flex p-2 border rounded-full text-primary-main hover:bg-gray-100"
              title="Back to top"
            >
              <ChevronUpIcon className="h-7 w-7" />
            </button>
          </div>
        </div>

        {false && (
          <div className="flex items-center gap-6 text-gray-300">
            <Link href="#" title="Facebook">
              <Image src={facebookIcon} alt="" height={28} width={28} />
            </Link>

            <Link href="#" title="Twitter">
              <Image src={twitterIcon} alt="" height={28} width={28} />
            </Link>

            <Link href="#" title="LinkedIn">
              <Image src={linkedinIcon} alt="" height={28} width={28} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Footer;
