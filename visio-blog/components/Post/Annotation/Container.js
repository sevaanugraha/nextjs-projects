import React, { useContext } from "react";

import { ThemeContext } from "ui/src/hooks/useDarkMode";
import { ratio } from "ssr-pwa/components/common/config";
import { PostContext } from "ssr-pwa/components/Post/context";
import { classNames } from "ui/src/utils";

const getPositionAndClassName = (position) => {
  if (position === "top-left") {
    return {
      position: "left",
      className: "lg:grid-cols-3 place-items-start",
    };
  }

  if (position === "top-center") {
    return {
      position: "center",
      className: "lg:grid-cols-3 place-items-center",
    };
  }

  if (position === "top-right") {
    return {
      position: "right",
      className: "lg:grid-cols-3 place-items-baseline",
    };
  }

  if (position === "center-left") {
    return {
      position: "left",
      className: "lg:grid-cols-3 place-items-center",
    };
  }

  if (position === "center-center") {
    return {
      position: "center",
      className: "lg:grid-cols-3 place-items-center",
    };
  }

  if (position === "center-right") {
    return {
      position: "right",
      className: "lg:grid-cols-3 place-items-center",
    };
  }

  if (position === "bottom-left") {
    return {
      position: "left",
      className: "lg:grid-cols-3 place-items-end",
    };
  }

  if (position === "bottom-center") {
    return {
      position: "center",
      className: "lg:grid-cols-3 place-items-end",
    };
  }

  if (position === "bottom-left") {
    return {
      position: "left",
      className: "lg:grid-cols-3 place-items-end",
    };
  }

  if (position === "bottom-right") {
    return {
      position: "right",
      className: "lg:grid-cols-3 place-items-end",
    };
  }

  if (position === "full-height-left") {
    return {
      position: "left",
      className: "lg:grid-cols-3 place-items-stretch",
    };
  }

  if (position === "full-height-center") {
    return {
      position: "center",
      className: "lg:grid-cols-3 place-items-stretch",
    };
  }

  if (position === "full-height-right") {
    return {
      position: "right",
      className: "lg:grid-cols-3 place-items-stretch",
    };
  }

  return {
    position: "center",
    className: "lg:grid-cols-3	place-items-center",
  };
};

const Box = ({
  children,
  dense = false,
  textAlign = "center",
  alignItems = "center",
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const alignItemsClassName = `items-${alignItems} justify-${alignItems}`;
  const textAlignClassName = `text-${textAlign}`;
  const denseClassName = dense
    ? "p-4 lg:p-6 text-sm lg:text-lg"
    : "p-4 lg:px-12 lg:py-8 text-base lg:text-2xl";

  return (
    <div
      className={classNames({
        "flex flex-1": true,
        "overflow-auto": true,
        "min-h-[120px]": true,
        "text-left font-medium tracking-wide leading-relaxed": true,
        "leading-relaxed drop-shadow-md rounded-2xl backdrop-blur-sm select-none": true,
        [denseClassName]: true,
        [alignItemsClassName]: !!alignItems,
        [textAlignClassName]: !!textAlign,
      })}
      style={{
        backgroundColor: isDarkMode
          ? "rgba(0, 0, 0, .12)"
          : "rgba(255, 255, 255, .92)",
        color: isDarkMode ? "#e8e8e3" : "#374151",
      }}
    >
      {children}
    </div>
  );
};

const Container = ({ children, dense, textAlign, alignItems }) => {
  const {
    annotationsPosition,
    state: { hideControls },
  } = useContext(PostContext);

  const isMobile = window.matchMedia(
    "only screen and (max-width: 1024px)"
  ).matches;
  const positionAndClassName = getPositionAndClassName(annotationsPosition);

  return (
    <div
      className={`px-4 lg:px-8 h-screen grid ${positionAndClassName.className}`}
      style={{
        paddingTop: hideControls ? 16 : ratio.topbar + (isMobile ? -8 : -8),
        paddingBottom: hideControls ? 16 : ratio.controls + (isMobile ? 0 : 32),
        transition: "padding ease .9s",
        height: "100vh",
        position: "fixed",
        inset: 0,
      }}
    >
      {isMobile ? (
        <div className="flex justify-start flex-col-reverse w-full overflow-auto">
          <Box dense={dense} textAlign={textAlign} alignItems={alignItems}>
            {children}
          </Box>
        </div>
      ) : (
        <>
          {positionAndClassName.position === "left" ? (
            <div className="flex justify-start flex-col-reverse	w-full overflow-auto">
              <Box dense={dense} textAlign={textAlign} alignItems={alignItems}>
                {children}
              </Box>
            </div>
          ) : (
            <div />
          )}

          {positionAndClassName.position === "center" ? (
            <div className="flex justify-center flex-col-reverse w-full overflow-auto">
              <Box dense={dense} textAlign={textAlign} alignItems={alignItems}>
                {children}
              </Box>
            </div>
          ) : (
            <div />
          )}

          {positionAndClassName.position === "right" ? (
            <div className="flex justify-end flex-col-reverse w-full overflow-auto">
              <Box dense={dense} textAlign={textAlign} alignItems={alignItems}>
                {children}
              </Box>
            </div>
          ) : (
            <div />
          )}
        </>
      )}
    </div>
  );
};

export { Container, Box };
