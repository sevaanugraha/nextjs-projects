import React from "react";
import Link from "next/link";
import axios from "axios";

import ReactSimplyCarousel from "react-simply-carousel";

import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import useWindowDimensions from "components/hooks/useWindowDimensions";
import useTheme from "components/hooks/useTheme";

export const fetchNews = async (page = 1) => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/news?per_page=15&page=${page}`;
  const result = await axios.get(url);

  const currentPage = Number(page);
  const total = Number(result?.headers?.["x-wp-total"]);
  const totalPages = Number(result?.headers?.["x-wp-totalpages"]);

  const data = result.data;

  result.data = {
    data,
    currentPage,
    total,
    totalPages,
  };

  return result;
};

export const fetchNewsById = async (id) => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/news/${id}`;
  const result = await axios.get(url);
  return result;
};

export const fetchNewsCategory = async () => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/news_category`;
  const result = await axios.get(url);
  return result;
};

export const fetchNewsByCategoryId = async (id) => {
  let url = `https://pokerguild.jp/wordpress/wp-json/wp/v2/news?news_category=${id}`;
  const result = await axios.get(url);

  const currentPage = Number(1);
  const total = Number(result?.headers?.["x-wp-total"]);
  const totalPages = Number(result?.headers?.["x-wp-totalpages"]);

  const data = result.data;

  result.data = {
    data,
    currentPage,
    total,
    totalPages,
  };
  return result;
};

export const Card = ({
  fullWidth,
  extraSX = {},
  title,
  content,
  img = "dummy.png",
}) => {
  const imageProps = {
    fill: true,
  };

  if (!fullWidth) {
    delete imageProps.fill;
    imageProps.height = "164px";
    imageProps.width = "320px";
  }

  return (
    <Box
      sx={{
        width: (theme) => ({
          xs: fullWidth ? "1" : theme.typography.pxToRem(320),
          md: theme.typography.pxToRem(320),
        }),
        minWidth: (theme) =>
          fullWidth ? "100%" : theme.typography.pxToRem(320),

        "& img": {
          borderRadius: "8px",
          width: "100% !important",
        },

        ...extraSX,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt="news-img" />

      <Typography
        variant="subtitle1"
        color="textSecondary"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Box
        sx={{
          fontSize: "14px",
          display: "-webkit-box",
          WebkitLineClamp: fullWidth ? "3" : "1",
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
          overflow: "hidden",

          "& *": {
            m: 0,
          },
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

const News = ({ data }) => {
  const dimensions = useWindowDimensions();
  const { isDarkMode } = useTheme();
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  return (
    <React.Fragment>
      <Typography variant="h5" paragraph>
        ニュース
      </Typography>

      <ReactSimplyCarousel
        key={dimensions.width + "-carsousel-news-width"}
        autoplay
        autoplayDelay={5000}
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
            top: 62,
            position: "absolute",
            right: 8,
            zIndex: 1,
            backgroundColor: isDarkMode ? "#f2f2f0" : "#192f4f",
            color: isDarkMode ? "#192f4f" : "white",
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
            position: "absolute",
            top: 62,
            left: 8,
            zIndex: 1,
            backgroundColor: isDarkMode ? "#f2f2f0" : "#192f4f",
            color: isDarkMode ? "#192f4f" : "white",
          },
          children: <KeyboardArrowLeftIcon />,
        }}
        responsiveProps={[
          {
            itemsToScroll: 1,
            minWidth: 320,
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
        {data.map((item) => {
          return (
            <React.Fragment key={item.id + "-news"}>
              <Link href={`/news/${item.id}`} passHref>
                <a style={{ textDecoration: "none", color: "inherit" }}>
                  <Card
                    extraSX={{
                      width: (theme) => theme.typography.pxToRem(360),
                      minWidth: "auto",
                      mt: (theme) => theme.typography.pxToRem(4),
                      mb: (theme) => theme.typography.pxToRem(4),
                      ml: (theme) => theme.typography.pxToRem(4),
                      mr: (theme) => theme.typography.pxToRem(16),
                    }}
                    title={item?.title?.rendered}
                    img={item?.format?.thumbnail}
                  />
                </a>
              </Link>
            </React.Fragment>
          );
        })}
      </ReactSimplyCarousel>

      <Box
        sx={{
          textAlign: "right",
          my: (theme) => theme.typography.pxToRem(12),
        }}
      >
        <Link href="/news" passHref>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "primary.main",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
            component="a"
          >
            すべてを見る
            <ChevronRightIcon />
          </Box>
        </Link>
      </Box>
    </React.Fragment>
  );
};

export default News;
