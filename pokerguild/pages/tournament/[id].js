import React from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import Stack from "@mui/system/Stack";
import Hidden from "@mui/material/Hidden";

import Trendings from "components/common/Trendings";
import RecentlyAdded from "components/common/RecentlyAdded";
import {
  fetchTournaments,
  fetchTournament,
} from "components/common/Tournaments";
import ShareButtons from "components/common/ShareButtons";

const InfoTable = styled("table")(({ theme }) => ({
  width: "100%",

  "& th, & td": {
    padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(16)}`,
    textAlign: "center",
  },

  "& td": {
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.text.secondary,
    maxWidth: theme.typography.pxToRem(200),
    verticalAlign: "top",
  },
}));

const Tournament = ({ tournament, tournaments = { data: [] } }) => {
  return (
    <Box
      sx={{
        width: "1",
        display: "flex",
        gap: "30px",
      }}
    >
      <Box
        component="section"
        sx={{
          flex: "1 auto",

          "& td": {
            wordBreak: "break-all",
          },

          "& a": {
            color: "primary.main",
          },

          "& img": {
            verticalAlign: "middle",
          },
        }}
      >
        <Typography
          variant="h6"
          fontWeight={(theme) => theme.typography.fontWeightBold}
          paragraph
        >
          トーナメント情報
        </Typography>

        <Paper
          sx={{
            px: (theme) => theme.typography.pxToRem(38),
            py: (theme) => theme.typography.pxToRem(38),
            mb: (theme) => theme.typography.pxToRem(60),
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: "100%" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
            >
              <Typography fontWeight={600} sx={{ minWidth: "200px" }}>
                ステータス :
              </Typography>

              <Typography color="textSecondary">
                {tournament?.online ? "Online" : "Waiting"}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
            >
              <Typography fontWeight={600} sx={{ minWidth: "200px" }}>
                店舗名:
              </Typography>

              <Typography color="textSecondary">
                {tournament?.place || "-"}
              </Typography>
            </Stack>

            {tournament?.url && (
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 3 }}
              >
                <Typography fontWeight={600} sx={{ minWidth: "200px" }}>
                  公式ページ:
                </Typography>

                <Typography
                  color="textSecondary"
                  sx={{ wordBreak: "break-all" }}
                >
                  <Link href={tournament.url} target="__blank">
                    {tournament.url}
                  </Link>
                </Typography>
              </Stack>
            )}

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
            >
              <Typography fontWeight={600} sx={{ minWidth: "200px" }}>
                開始日時:
              </Typography>

              <Typography color="textSecondary">
                {tournament?.start_date}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
            >
              <Typography fontWeight={600} sx={{ minWidth: "200px" }}>
                ゲーム:
              </Typography>

              <Typography color="textSecondary">
                {tournament?.tourneyname}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
            >
              <Typography fontWeight={600} sx={{ minWidth: "200px" }}>
                参加費:
              </Typography>

              <Typography color="textSecondary">
                {tournament?.entry_fee}
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
            >
              <Typography fontWeight={600} sx={{ minWidth: "200px" }}>
                参加人数:
              </Typography>

              <Typography color="textSecondary">
                {tournament?.entries}
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        {tournament?.buyin_policy && (
          <Box
            sx={{
              mb: (theme) => theme.typography.pxToRem(60),
            }}
          >
            <Typography
              variant="h6"
              fontWeight={(theme) => theme.typography.fontWeightBold}
              paragraph
            >
              リバイ等
            </Typography>

            <Paper
              sx={{
                width: "1",
                p: (theme) => theme.typography.pxToRem(32),
                overflow: "auto",
              }}
            >
              <Typography
                variant="h6"
                dangerouslySetInnerHTML={{ __html: tournament?.buyin_policy }}
                sx={{
                  wordBreak: "break-all",
                  fontWeight: (theme) => theme.typography.fontWeightRegular,

                  "& font": {
                    color: "text.primary",
                  },

                  "& div": {
                    color: "#000",
                  },
                }}
              />
            </Paper>
          </Box>
        )}

        {tournament?.comment && (
          <Box sx={{ mb: (theme) => theme.typography.pxToRem(60) }}>
            <Typography
              variant="h6"
              fontWeight={(theme) => theme.typography.fontWeightBold}
              paragraph
            >
              詳細情報
            </Typography>

            <Paper
              sx={{
                width: "1",
                overflow: "auto",
                p: (theme) => theme.typography.pxToRem(32),
                mb: (theme) => theme.typography.pxToRem(60),
              }}
            >
              <Typography
                variant="h6"
                dangerouslySetInnerHTML={{ __html: tournament?.comment }}
                sx={{
                  wordBreak: "break-all",
                  fontWeight: (theme) => theme.typography.fontWeightRegular,

                  "& font": {
                    color: "text.primary",
                  },

                  "& div": {
                    color: "#000",
                  },

                  "& iframe": {
                    width: "100%",
                  },
                }}
              />
            </Paper>

            <ShareButtons />
          </Box>
        )}
      </Box>

      <Hidden mdDown>
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, .02)",
            borderRadius: "16px",
            alignSelf: "flex-start",
            width: (theme) => theme.typography.pxToRem(400),
            minWidth: (theme) => theme.typography.pxToRem(400),
            padding: (theme) => theme.typography.pxToRem(24),
            border: (theme) => "1px solid " + theme.palette.divider,
          }}
        >
          <Box
            sx={{
              mb: (theme) => ({
                xs: theme.typography.pxToRem(24),
                sm: theme.typography.pxToRem(40),
              }),
            }}
            component="section"
          >
            <Trendings data={tournaments.data.slice(0, 5)} />
          </Box>

          <Box component="section">
            <RecentlyAdded data={tournaments.data.slice(0, 5)} />
          </Box>
        </Box>
      </Hidden>
    </Box>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const result = await fetchTournament(params.id);
    const fetchedTournamentsResult = await fetchTournaments();

    return {
      props: {
        tournament: result.data,
        tournaments: fetchedTournamentsResult.data?.data?.length
          ? fetchedTournamentsResult.data
          : { data: [] },
      },
      revalidate: 1,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const result = await fetchTournaments();

  const paths = await result.data.data.map((item) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Tournament;
