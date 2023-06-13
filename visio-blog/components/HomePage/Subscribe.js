import React, { useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";

import { subscribeEmailNewsletter } from "ssr-pwa/services/api/subscribe";
import Notification, {
  DEFAULT_STATE,
} from "ssr-pwa/components/common/Notification";
import bgImage from "ssr-pwa/public/gradient-2.svg";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState(DEFAULT_STATE);

  if (true) {
    return null;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(false);

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isValidEmail = regex.test(email);

    if (!isValidEmail) {
      setErrorMessage(true);
      return isValidEmail;
    }

    try {
      const response = await subscribeEmailNewsletter({ email });

      if (response.status === 201) {
        setNotificationDetails({
          type: "success",
          title: "Email Sent!",
          message: response.data.message,
        });
      }

      return response;
    } catch (error) {
      console.error(error);

      setNotificationDetails({
        type: "error",
        title: error.message || "Something went wrong!",
        message: error.response.data.message || "Something went wrong!",
      });
    } finally {
      setEmail("");
    }
  };

  return (
    <div className="relative h-full w-full">
      <div className="absolute -z-10 inset-0 w-full h-full">
        <Image
          src={bgImage}
          alt=""
          sizes="100vw"
          fill
          loading="lazy"
          className="object-cover object-center -z-10"
        />
      </div>

      <div className="container flex flex-col lg:flex-row gap-8 lg:justify-between items-start lg:items-center mx-auto px-4 py-20 lg:py-32">
        <div className="text-primary-dark flex-2 sm:min-w-[400px]">
          <p className="mb-6 text-5xl font-semibold tracking-wide leading-tight">
            Stay up to date
          </p>

          <p className="text-lg lg:text-xl tracking-wide lg:leading-8 antialiased">
            Get updates on all of our events and be the first to get notified
            when tickets go on sale.
          </p>
        </div>

        <div className="flex w-full sm:w-[516px] text-primary-dark">
          <div className="w-full">
            <p className="mb-6 text-2xl font-semibold tracking-wide leading-8 antialiased">
              Sign up to our newsletter{" "}
              <ArrowDownIcon className="inline-block w-6 h-6 ml-1" />
            </p>

            <form
              className="flex flex-wrap gap-6"
              onSubmit={(e) => onSubmit(e)}
            >
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-[380px] px-4 py-3 border ${errorMessage ? "border-red-600" : "border-primary-dark"} 
                  rounded-xl bg-transparent text-md focus:outline-none`}
              />

              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-primary-dark/80 hover:bg-primary-dark text-md text-white font-semibold break-keep"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      <Notification
        {...notificationDetails}
        setDetails={setNotificationDetails}
      />
    </div>
  );
}

export default Subscribe;
