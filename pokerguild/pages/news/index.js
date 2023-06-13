import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Pagination from "@mui/material/Pagination";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Card,
  fetchNews,
  fetchNewsCategory,
  fetchNewsByCategoryId,
} from "components/common/News";

const News = ({ data }) => {
  const router = useRouter();
  const query = router?.query;

  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [news, setNews] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [isCategoryActive, setIsCategoryActive] = React.useState("");

  const handleReset = () => {
    setLoading(true);
    setNews([]);
    setPage(1);
  };

  React.useEffect(() => {
    setNews(data.data);
    setPage(data.currentPage);
    setTotalPage(data.totalPages);
    setCategory(data.category);
    setLoading(false);
  }, [data.data, data.currentPage, data.totalPages, data.category]);

  const handlePagination = async (event, page) => {
    event.preventDefault();

    handleReset();

    if (page) {
      query.page = page;
    } else {
      delete query.page;
    }

    return router.replace(
      {
        pathname: "/news",
        query,
      },
      undefined,
      { scroll: false }
    );
  };

  const handleCategory = async (id, itemName) => {
    setIsCategoryActive(itemName);
    if (id === 0) {
      setNews(data.data);
      setPage(data.currentPage);
      setTotalPage(data.totalPages);
    } else {
      const categoryData = await fetchNewsByCategoryId(id);

      setNews(categoryData?.data?.data);
      setPage(categoryData?.data?.currentPage);
      setTotalPage(categoryData?.data.totalPages);
    }
  };

  return (
    <React.Fragment>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          mx: "auto",
          mb: (theme) => ({
            xs: theme.typography.pxToRem(40),
            lg: theme.typography.pxToRem(24),
          }),
          px: (theme) => ({
            xs: theme.typography.pxToRem(24),
            lg: theme.typography.pxToRem(0),
          }),
        }}
      >
        <Link href="/" passHref>
          <MuiLink>ホーム</MuiLink>
        </Link>

        <Typography color="text.primary">ニュース</Typography>
      </Breadcrumbs>

      <Container
        sx={{
          my: (theme) => theme.typography.pxToRem(24),
          px: (theme) => ({
            xs: theme.typography.pxToRem(24),
            lg: theme.typography.pxToRem(0),
          }),
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            mb: (theme) => ({
              xs: theme.typography.pxToRem(40),
            }),
          }}
        >
          <Typography variant="h5" paragraph align="center">
            ニュース
          </Typography>

          <Typography variant="h6" paragraph align="left">
            カテゴリー
          </Typography>

          <Grid container spacing={1}>
            <Grid item>
              <Chip
                label="All"
                onClick={() => handleCategory(0, "all")}
                color={isCategoryActive === `all` ? "primary" : "default"}
                variant={isCategoryActive === `all` ? "filled" : "outlined"}
                clickable
              />
            </Grid>

            {category.map((item) => (
              <Grid item key={item.id}>
                <Chip
                  label={item?.name}
                  onClick={() => handleCategory(item.id, `${item?.name}`)}
                  color={
                    isCategoryActive === `${item?.name}` ? "primary" : "default"
                  }
                  variant={
                    isCategoryActive === `${item?.name}` ? "filled" : "outlined"
                  }
                  clickable
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {isCategoryActive === "" ? (
          category.map((item) => {
            if (item.count > 0) {
              const categoryId = item.id;
              const categoryName = item.name;

              return (
                <Box key={item.id} mb={4}>
                  <Typography variant="h5" mb={2}>
                    {item.name}
                  </Typography>

                  <Grid container spacing={4}>
                    {news
                      .filter((item) => {
                        const [newsCategory] = item.news_category;
                        return categoryId === newsCategory;
                      })
                      .slice(0, 4)
                      .map((item) => {
                        return (
                          <Grid
                            key={item.id + "-news-single-page"}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            sx={{
                              marginBottom: "24px",

                              "& .MuiBox-root": {
                                borderRadius: "8px",
                                boxShadow: "rgb(88 102 126 / 8%) 0px 4px 24px",
                                backgroundColor: "background.paper",

                                "& img": {
                                  borderRadius: "8px 8px 0 0",
                                },

                                "& h6": {
                                  color: "text.primary",
                                  padding: "0px 16px 4px",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: "1",
                                  WebkitBoxOrient: "vertical",
                                },
                              },
                            }}
                          >
                            <Link href={`/news/${item.id}`} passHref>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                <Card
                                  fullWidth
                                  title={item?.title?.rendered}
                                  img={item?.format?.thumbnail}
                                />
                              </a>
                            </Link>
                          </Grid>
                        );
                      })}
                  </Grid>

                  <Box
                    onClick={() => handleCategory(categoryId, categoryName)}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "primary.main",
                      textDecoration: "underline",
                      cursor: "pointer",

                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                    component="a"
                  >
                    すべてを見る
                    <ChevronRightIcon />
                  </Box>
                </Box>
              );
            }
            return null;
          })
        ) : (
          <Grid container spacing={4}>
            {news.map((item) => {
              return (
                <Grid
                  key={item.id + "-news-single-page"}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{
                    "& .MuiBox-root": {
                      borderRadius: "8px",
                      boxShadow: "rgb(88 102 126 / 8%) 0px 4px 24px",
                      backgroundColor: "background.paper",

                      "& img": {
                        borderRadius: "8px 8px 0 0",
                      },

                      "& h6": {
                        color: "text.primary",
                        padding: "0px 16px 4px",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: "1",
                        WebkitBoxOrient: "vertical",
                      },
                    },
                  }}
                >
                  <Link href={`/news/${item.id}`} passHref>
                    <a style={{ textDecoration: "none", color: "inherit" }}>
                      <Card
                        fullWidth
                        title={item?.title?.rendered}
                        img={item?.format?.thumbnail}
                      />
                    </a>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        )}

        {totalPage > 1 &&
          isCategoryActive !== "" &&
          isCategoryActive(
            <Box
              sx={{
                mt: (theme) => theme.typography.pxToRem(24),
              }}
            >
              <Stack spacing={6}>
                <Pagination
                  count={totalPage}
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  disabled={loading}
                  onChange={handlePagination}
                  size="large"
                />
              </Stack>
            </Box>
          )}
      </Container>
    </React.Fragment>
  );
};

export const getServerSideProps = async ({ query }) => {
  const [fetchedNewsResult, fetchNewsCategoryResult] = await Promise.all([
    fetchNews(query?.page || 1),
    fetchNewsCategory(),
  ]);

  return {
    props: {
      data: {
        ...fetchedNewsResult.data,
        category: fetchNewsCategoryResult.data,
      } || { data: [] },
    },
  };
};

export default News;
