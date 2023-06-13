import React from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/system/Stack";
import Hidden from "@mui/material/Hidden";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Trendings from "components/common/Trendings";
import RecentlyAdded from "components/common/RecentlyAdded";
import { fetchTournaments } from "components/common/Tournaments";
import ShareButtons from "components/common/ShareButtons";

const Beginner = ({ tournaments }) => {
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
          ポーカー入門編
        </Typography>

        <Paper
          sx={{
            px: (theme) => theme.typography.pxToRem(38),
            pt: (theme) => theme.typography.pxToRem(38),
            pb: (theme) => theme.typography.pxToRem(22),
            mb: (theme) => theme.typography.pxToRem(60),
          }}
        >
          <Stack sx={{ maxWidth: "100%" }}>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                py: 0,
                "& .MuiListItem-root": {
                  padding: "0 0 10px",
                  display: "list-item",

                  "&:last-child": {
                    padding: "0 0 24px",
                  },
                },
              }}
            >
              <ListItem>
                <Link href="/beginner-1">1－1テキサスホールデムとは？</Link>
              </ListItem>

              <ListItem>
                <Link href="/beginner-2"> 1－2テキサスホールデムのルール1</Link>
              </ListItem>

              <ListItem>
                1－3テキサスホールデムのルール2(3月上旬UP予定)
              </ListItem>

              <ListItem>1－4基本的なポーカー用語</ListItem>

              <ListItem>1－5まずは練習しよう。練習方法等</ListItem>

              <ListItem>1－6オンラインとライブの違い</ListItem>
            </List>

            <Divider />

            <Typography
              mt={2}
              ml={"auto"}
              sx={{ fontSize: "12px", maxWidth: "100%" }}
            >
              最終更新: 2015/06/24 17:32
            </Typography>
          </Stack>
        </Paper>

        <ShareButtons />
      </Box>

      <Hidden mdDown>
        <Box
          sx={{
            width: (theme) => theme.typography.pxToRem(400),
            minWidth: (theme) => theme.typography.pxToRem(400),
            backgroundColor: "rgba(0, 0, 0, .02)",
            padding: (theme) => theme.typography.pxToRem(24),
            borderRadius: "16px",
            alignSelf: "flex-start",
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

export const getServerSideProps = async ({ query }) => {
  const fetchedTournamentsResult = await fetchTournaments();

  return {
    props: {
      tournaments: fetchedTournamentsResult.data || { data: [] },
    },
  };
};

export default Beginner;
