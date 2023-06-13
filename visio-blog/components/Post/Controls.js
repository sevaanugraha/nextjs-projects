import React, { Fragment, useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import SpeakerWaveIcon from "@heroicons/react/24/outline/SpeakerWaveIcon";
import SpeakerXMarkIcon from "@heroicons/react/24/outline/SpeakerXMarkIcon";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import PauseIcon from "@heroicons/react/24/solid/PauseIcon";
import PlayIcon from "@heroicons/react/24/solid/PlayIcon";

import FullScreenIcon from "ssr-pwa/components/common/Icons/FullScreen";
import ReplayIcon from "ssr-pwa/components/common/Icons/Replay";
import { PostContext } from "ssr-pwa/components/Post/context";
import {
  MODES,
  CONTROLS_PARENT_ELEMENT_CLASSNAME,
} from "ssr-pwa/components/Post/types";
import { ThemeContext } from "ui/src/hooks/useDarkMode";
import useToggle from "ui/src/hooks/useToggle";
import Share from "./Share";

const Container = ({ children, hide }) => {
  const { isDarkMode } = useContext(ThemeContext);

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
      <div className={`fixed right-0 bottom-0 left-0 px-4`}>
        <div
          className="flex items-center justify-center max-w-screen-sm h-[56px] sm:h-[86px] mx-auto my-2 px-4 sm:px-10 rounded-2xl transition-all backdrop-blur-sm hover:backdrop-blur-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, .09)",
            color: isDarkMode ? "#ffffff" : "#374151",
          }}
        >
          {children}
        </div>
      </div>
    </Transition>
  );
};

function Controls() {
  const { state: isShareBarVisible, toggle: toggleShareBar } = useToggle();
  const { state, annotationsAnimation, handlers } = useContext(PostContext);
  const { togglePlay, previous, forward, replay, toggleMute, fullScreen } =
    handlers;

  const hideControls = !!annotationsAnimation
  const disablePrevious = state.currentAnnotationIndex === 0 || hideControls;
  const disableForward =
    state.annotations.length - 1 === state.currentAnnotationIndex || hideControls;
  const isMuted = state.mute;

  let url = "";

  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  if (state.mode === MODES.END) {
    return (
      <>
        {isShareBarVisible ? <Share url={url} /> : ""}

        <Container>
          <button
            type="button"
            aria-label="next"
            onClick={toggleShareBar}
            className={`transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full ${
              isShareBarVisible && "bg-hover-light dark:bg-hover-dark"
            } enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
                  focus:outline-none focus:ring-2 focus:bg-hover-light`}
          >
            {isShareBarVisible ? (
              <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" title="Close" />
            ) : (
              <ShareIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" title="Share" />
            )}
          </button>

          <div className="mx-auto">
            <button
              type="button"
              aria-label="replay"
              onClick={replay}
              title="Replay"
              className="transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full hover:bg-hover-light dark:hover:bg-hover-dark 
                    focus:outline-none focus:ring-2 focus:bg-hover-light"
            >
              <ReplayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="flex gap-6 items-center justify-center text-inherit">
            <button
              type="button"
              aria-label="next"
              onClick={fullScreen}
              title="Full screen"
              className="transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
                  focus:outline-none focus:ring-2 focus:bg-hover-light"
            >
              <FullScreenIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </Container>
      </>
    );
  }

  return (
    <div className={CONTROLS_PARENT_ELEMENT_CLASSNAME}>
      {isShareBarVisible ? <Share hide={state.hideControls} url={url} /> : ""}

      <Container hide={state.hideControls}>
        <button
          type="button"
          aria-label="mute"
          onClick={toggleMute}
          title={isMuted ? "Unmute" : "Mute"}
          className="transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full hover:bg-hover-light dark:hover:bg-hover-dark 
            focus:outline-none focus:ring-2 focus:bg-hover-light"
        >
          {isMuted ? (
            <SpeakerXMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <SpeakerWaveIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>

        <div className="hidden lg:block h-12 w-12" />

        <div className="flex gap-6 items-center justify-center mx-auto text-inherit">
          <button
            type="button"
            aria-label="previous"
            disabled={disablePrevious}
            onClick={previous}
            title="Previous"
            className="transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
              focus:outline-none focus:ring-2 focus:bg-hover-light"
          >
            <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            type="button"
            onClick={togglePlay}
            disabled={hideControls}
            title={state.mode === MODES.PLAY ? "Pause" : "Play"}
            className="transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-slate-100 text-neutral-800 hover:bg-neutral-50 
              focus:outline-none focus:ring-2"
          >
            <span className="sr-only">Play and Pause</span>
            {state.mode === MODES.PLAY ? (
              <PauseIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            ) : (
              <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            aria-label="next"
            disabled={disableForward}
            onClick={forward}
            title="Forward"
            className="transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
              focus:outline-none focus:ring-2 focus:bg-hover-light"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="flex gap-6 items-center justify-center text-inherit">
          <button
            type="button"
            aria-label="next"
            onClick={toggleShareBar}
            className={`transition-all ease-linear delay-150 flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 rounded-full ${
              isShareBarVisible && "bg-hover-light dark:bg-hover-dark"
            } enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
              focus:outline-none focus:ring-2 focus:bg-hover-light`}
          >
            {isShareBarVisible ? (
              <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" title="Close" />
            ) : (
              <ShareIcon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" title="Share" />
            )}
          </button>
          <button
            type="button"
            aria-label="next"
            onClick={fullScreen}
            title="Full screen"
            className="hidden lg:flex transition-all ease-linear delay-150 items-center justify-center h-12 w-12 rounded-full enabled:hover:bg-hover-light enabled:dark:hover:bg-hover-dark 
              focus:outline-none focus:ring-2 focus:bg-hover-light"
          >
            <FullScreenIcon className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </div>
  );
}
export default Controls;
