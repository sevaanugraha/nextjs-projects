import React, { useState, useRef } from "react";
import Image from "next/image";

import { PostContext } from "ssr-pwa/components/Post/context";
import { ratio } from "ssr-pwa/components/common/config";
import { MODES } from "./types";

const Sound = () => {
  const { state, handlers, bgColor, annotationsAnimation } =
    React.useContext(PostContext);
  const { loading, sound: soundUrl, mute: isMuted } = state;
  const { setLoading, play } = handlers;

  const [isloaded, setIsloaded] = useState(false);
  const audioRef = useRef(null);

  const lastAnnotation = state.annotations.length - 1;
  const currentDisplayLimit = state.currentAnnotation.displayLimit;

  const handleOverlay = () => {
    if (!loading) {
      setIsloaded(true);
      audioRef.current.play();
      play();
    }
  };

  const reduceVolume = (interval) => {
    if (isloaded) {
      let currentVolume = audioRef.current.volume;
      let volumeInterval = setInterval(() => {
        currentVolume -= 0.02;
        if (currentVolume > 0) {
          audioRef.current.volume = currentVolume;
        }

        if (currentVolume < 0.01) {
          clearInterval(volumeInterval);
        }
      }, interval);
    }
  };

  React.useEffect(() => {
    if (state.mode === MODES.PLAY) {
      audioRef.current.play();
      audioRef.current.volume = 1;
    } else if (state.mode === MODES.PAUSE) {
      audioRef.current.pause();
    } else if (state.mode === MODES.END) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [state.mode]);

  React.useEffect(() => {
    let fadeSound = undefined;

    clearTimeout(fadeSound);

    const shouldTransitionVolume = annotationsAnimation
      ? annotationsAnimation !== "typewriter"
      : true;

    if (shouldTransitionVolume) {
      if (
        state.mode === MODES.PLAY &&
        lastAnnotation === state.currentAnnotationIndex
      ) {
        if (currentDisplayLimit > 1) {
          const timeOutDuration = (currentDisplayLimit - 1) * 1000;

          fadeSound = setTimeout(() => {
            reduceVolume(20);
          }, timeOutDuration);
        } else {
          reduceVolume(20);
        }
      }
    }

    return () => {
      clearTimeout(fadeSound);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentAnnotationIndex]);

  return (
    <>
      {!!soundUrl && (
        <audio
          ref={audioRef}
          preload="auto"
          onLoadedMetadata={() => setLoading(false)}
          muted={isMuted}
          loop={true}
        >
          <source src={soundUrl} type="audio/mpeg"></source>
        </audio>
      )}

      <div
        key="overlay"
        onClick={handleOverlay}
        className={`fixed inset-0 ${
          isloaded ? "hidden" : "cursor-pointer"
        } px-6 `}
        style={{
          paddingTop: ratio.topbar,
          paddingBottom: ratio.controls,
          height: `calc(100vh)`,
          backgroundColor: bgColor,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4">
          {!loading && (
            <Image
              src="/headphone.svg"
              height={64}
              width={64}
              alt="headphoneIcon"
            />
          )}

          <h2 className="text-4xl leading-relaxed font-semibold text-center text-white capitalize">
            {loading ? "Loading..." : "Tap anywhere to begin."}
          </h2>

          <p className="text-xl leading-relaxed text-center text-white capitalize">
            {loading
              ? "We are fetching amazing time for you please be patient :)"
              : "Use headphones for best experience."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Sound;
