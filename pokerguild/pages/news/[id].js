import React from "react";
import moment from "moment";
import Link from "next/link";

import MuiLink from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { fetchNewsById, fetchNews } from "components/common/News";
import ShareButtons from "components/common/ShareButtons";
const News = ({ news }) => {
  return (
    <React.Fragment>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          mb: (theme) => ({
            xs: theme.typography.pxToRem(50),
            lg: theme.typography.pxToRem(34),
          }),
        }}
      >
        <Link href="/" passHref key="1">
          <MuiLink>ホーム</MuiLink>
        </Link>

        <Link href="/news" passHref key="2">
          <MuiLink>ニュース</MuiLink>
        </Link>

        <Typography color="text.primary" key="3">
          {news?.title?.rendered}
        </Typography>
      </Breadcrumbs>

      <Paper
        sx={{
          maxWidth: "1",
          px: (theme) => theme.typography.pxToRem(38),
          py: (theme) => theme.typography.pxToRem(38),
          mb: (theme) => theme.typography.pxToRem(60),
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          {news?.title?.rendered}
        </Typography>

        <Typography paragraph>
          {moment(news?.date).format("MMM Do YY")}
        </Typography>

        <Box
          sx={{
            overflow: "auto",

            "& font": {
              color: "text.primary",
            },

            "& td": {
              wordBreak: "break-all",
            },

            "& a": {
              color: "primary.main",
            },

            "& img": {
              verticalAlign: "middle",
            },

            "& iframe": {
              width: "100%",
            },

            wordBreak: "break-all",
            fontSize: "14px",
          }}
          dangerouslySetInnerHTML={{ __html: news?.content?.rendered }}
        />
      </Paper>

      <ShareButtons />
    </React.Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const result = await fetchNewsById(params.id);

    return {
      props: {
        news: result.data,
      },
      revalidate: 1,
    };
  } catch {
    return {
      notFound: false,
      props: {
        news: {},
      },
    };
  }
};

export const getStaticPaths = async () => {
  const result = await fetchNews();

  const paths = await result.data.data.map((item) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default News;
