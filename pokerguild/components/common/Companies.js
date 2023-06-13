import React from "react";

import Image from "next/image";
import ReactSimplyCarousel from "react-simply-carousel";

import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import useWindowDimensions from "components/hooks/useWindowDimensions";

const Company = () => {
  return (
    <Box>
      <Box
        sx={{
          height: (theme) => theme.typography.pxToRem(200),
          width: (theme) => theme.typography.pxToRem(360),
          position: "relative",
          bgcolor: "#fff",
          borderRadius: (theme) => theme.shape.borderRadius,
          mr: (theme) => theme.typography.pxToRem(24),
        }}
      >
        <Image src="/company.png" layout="fill" alt="company-png" />
      </Box>
    </Box>
  );
};

const Companies = () => {
  const dimensions = useWindowDimensions();
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  return (
    <ReactSimplyCarousel
      key={dimensions.width + "-carsousel-companies-width"}
      autoplay
      autoplayDelay={8000}
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      forwardBtnProps={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          height: 30,
          width: 30,
          backgroundColor: "#D9D9D9",
          color: "#0B0D1C",
          position: "absolute",
          right: 8,
          zIndex: 1,
        },
        children: <KeyboardArrowRightIcon />,
      }}
      backwardBtnProps={{
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          height: 30,
          width: 30,
          backgroundColor: "#D9D9D9",
          color: "#0B0D1C",
          position: "absolute",
          left: 8,
          zIndex: 1,
        },
        children: <KeyboardArrowLeftIcon />,
      }}
      responsiveProps={[
        {
          itemsToShow: 4,
          itemsToScroll: 1,
          minWidth: dimensions.width,
        },
      ]}
      containerProps={{
        style: {
          position: "relative",
        },
      }}
      speed={400}
      easing="linear"
    >
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
      <Company />
    </ReactSimplyCarousel>
  );
};

export default Companies;
