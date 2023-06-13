import React from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/system/Stack";
import Hidden from "@mui/material/Hidden";
import Divider from "@mui/material/Divider";

import Trendings from "components/common/Trendings";
import RecentlyAdded from "components/common/RecentlyAdded";
import { fetchTournaments } from "components/common/Tournaments";
import ShareButtons from "components/common/ShareButtons";

const Faq = ({ tournaments }) => {
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
          FAQ
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
              mb={1}
              sx={{ color: "red", fontSize: "22px", maxWidth: "100%" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              メンバー登録したのですが、トーナメントの成績はどのようにすれば表示されますか？
            </Typography>

            <Typography>
              マイページにログインし、 プレイヤーリンク を表示して下さい。
            </Typography>

            <Typography>
              メンバー登録したメールアドレスと店舗でプレイヤー登録したメールアドレスが一致するとリンク可能なプレイヤーの一覧が表示されます。
            </Typography>

            <Typography>
              未リンクのプレイヤーの「リンクする｣をクリックすると、マイページホームにその店舗でプレイした成績が表示されるようになります。
              メッセージを投稿するためには、まずメンバー登録を行ってください。
            </Typography>

            <Typography>
              画面右サイドに登録フォームがあります。または、メニューのマイページをクリックすると登録フォームが表示されます。
            </Typography>

            <Typography mb={2}>
              メンバー登録済みの方は、メニューのタイムラインをクリックして下さい。投稿フォームが表示されます。
            </Typography>

            <Typography
              mb={1}
              sx={{ color: "red", fontSize: "22px", maxWidth: "100%" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              プレイヤーとメンバーは何が違うのですか？
            </Typography>

            <Typography>
              「プレイヤー」は各加盟店が管理するトーナメント参加者データです。
            </Typography>

            <Typography mb={3}>
              「メンバー」とはポーカーギルドにメンバー登録した会員情報です（以前はユーザーと表記していました）。
            </Typography>

            <Divider />

            <Typography
              mt={2}
              ml={"auto"}
              sx={{ fontSize: "12px", maxWidth: "100%" }}
            >
              最終更新: 2017/09/26 16:34
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

export default Faq;
