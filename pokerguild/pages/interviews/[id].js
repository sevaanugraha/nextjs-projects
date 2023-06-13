import React from "react";

import moment from "moment";

import Link from "next/link";

import MuiLink from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  fetchInterviews,
  fetchInterviewsById,
} from "components/common/interviews";
import ShareButtons from "components/common/ShareButtons";

const Interviews = ({ interviews }) => {
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
        <Link href="/" passHref>
          <MuiLink>ホーム</MuiLink>
        </Link>

        <Link href="/interviews" passHref>
          <MuiLink>インタビュー</MuiLink>
        </Link>

        <Typography color="text.primary">
          {interviews?.title?.rendered}
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
          {interviews?.title?.rendered}
        </Typography>

        <Typography paragraph>
          {moment(interviews?.date).format("MMM Do YYYY")}
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

            "& img": {
              my: (theme) => theme.typography.pxToRem(24),
              width: "100%",
              height: "100%",
            },

            wordBreak: "break-all",
            fontSize: "14px",
          }}
          dangerouslySetInnerHTML={{ __html: interviews?.content?.rendered }}
        />
      </Paper>

      <ShareButtons />
    </React.Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const result = await fetchInterviewsById(params.id);

    return {
      props: {
        interviews: result.data,
      },
      revalidate: 1,
    };
  } catch {
    return {
      notFound: false,
      props: {
        interviews: {},
      },
    };
  }
};

export const getStaticPaths = async () => {
  const result = await fetchInterviews();

  const paths = await result.data.data.map((item) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Interviews;
