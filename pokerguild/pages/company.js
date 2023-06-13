import React from "react";

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

const Company = ({ tournaments }) => {
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
          運営会社について
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
            <Typography
              fontWeight={500}
              mb={1}
              sx={{ color: "red", fontSize: "22px", maxWidth: "100%" }}
            >
              ポーカーギルド株式会社
            </Typography>

            <Stack direction="row" spacing={1}>
              <Typography fontWeight={600}>参加費:</Typography>

              <Typography>2016（平成28）年8月18日</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Typography fontWeight={600}>代表取締役:</Typography>

              <Typography>富田 哲朗</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Typography fontWeight={600}>住所:</Typography>

              <Typography> 東京都千代田区外神田2-3-6 成田ビル3F</Typography>
            </Stack>

            <Stack direction="row" spacing={1} mb={2}>
              <Typography fontWeight={600}>電話番号:</Typography>

              <Typography> 03-6260-7858</Typography>
            </Stack>

            <Divider />

            <Typography
              fontWeight={500}
              mt={2}
              sx={{ color: "red", fontSize: "18px", maxWidth: "100%" }}
            >
              事業内容
            </Typography>

            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                py: 0,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem disablePadding>
                全国ポーカープレイヤー成績管理システム｢ポーカーギルド｣管理運営業務
              </ListItem>

              <ListItem disablePadding>
                日本ポーカープレイヤーへの海外スポンサード業務
              </ListItem>
            </List>

            <Typography
              fontWeight={500}
              mt={2}
              sx={{ color: "red", fontSize: "18px", maxWidth: "100%" }}
            >
              後援団体
            </Typography>

            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                pt: 0,
                pb: 3,

                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem disablePadding>一般社団法人　日本ポーカー連盟</ListItem>

              <ListItem disablePadding>NPO法人　日本ポーカー協会</ListItem>
            </List>

            <Divider />

            <Typography
              mt={2}
              ml={"auto"}
              sx={{ fontSize: "12px", maxWidth: "100%" }}
            >
              最終更新: 2021/07/15 18:58
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

export default Company;
