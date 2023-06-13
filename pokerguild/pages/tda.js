import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Hidden from "@mui/material/Hidden";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import Trendings from "components/common/Trendings";
import RecentlyAdded from "components/common/RecentlyAdded";
import { fetchTournaments } from "components/common/Tournaments";
import ShareButtons from "components/common/ShareButtons";

const TDARules = ({ tournaments }) => {
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
          2013TDAルール
        </Typography>

        <Paper
          sx={{
            px: (theme) => theme.typography.pxToRem(38),
            pt: (theme) => theme.typography.pxToRem(38),
            pb: (theme) => theme.typography.pxToRem(22),
            mb: (theme) => theme.typography.pxToRem(60),
          }}
        >
          <Box sx={{ maxWidth: "100%" }}>
            <Typography fontWeight={700} sx={{ mb: 3 }}>
              TDAルール Version 2013.1.1, 2013年8月11日 日本語化
            </Typography>

            <Stack spacing={2} sx={{ mb: 3 }}>
              <Typography
                fontWeight={500}
                sx={{ color: "red", fontSize: "22px", maxWidth: "100%" }}
              >
                一般概念
              </Typography>

              <Box>
                <Typography fontWeight={700} sx={{ mb: 1 }}>
                  1.フロアの決定
                </Typography>

                <Typography>
                  フロアは、意思決定過程において、ゲームの最善利益および公正性を最優先事項としなければならない。通常と異なる状況においては、公正性の利益の決定が技術的なルールより優先されることもあり得る。フロアの決定は最終的なものである。
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={700} sx={{ mb: 1 }}>
                  2.プレイヤーの責務
                </Typography>

                <Typography>
                  プレイヤーは、登録データ及び割り当てられたシートを確認し、ハンドをプロテクトし、意図を明確にし、アクションに従い、順番に沿ってアクションをし、アクションの権利を守り、カードを見えるようにし、チップを正しく積み、ハンドを持っているときはテーブルに座り、ミスがあったら口頭で指摘し、テーブル移動は速やかにし、他人と相談せず(１プレイヤー１ハンドルール)、ルールを習得し従い、適切なエチケットに従い、原則としてトーナメントの秩序維持に貢献することが期待される。
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={700} sx={{ mb: 1 }}>
                  3.トーナメントポーカーにおける公式用語
                </Typography>

                <Typography>
                  ベットに関する公式な用語は、｢ベット、レイズ、コール、フォールド、チェック、オールイン、ポット(ポットリミットの)、コンプリート｣など、簡潔で、間違いがなく、伝統的な宣言である。地方の言葉もこの基準を満たし得る。標準的でない言葉使用することは、当該プレイヤーの意図以外の決定になりうるため、プレイヤーのリスクとなる。自らの意図を目各にすることは、プレイヤーの責任である。ルール第40項及び第49項参照。
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={700} sx={{ mb: 1 }}>
                  4.電子機器及び通信
                </Typography>

                <Typography>
                  ポーカーテーブルにいる間は、プレイヤーは電話を使用して会話することはできない。その他の電子機器及び通信形態については、ハウスルールが適用される。
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={700} sx={{ mb: 1 }}>
                  5.公式言語
                </Typography>

                <Typography>
                  米国においては、英語のみルールが、ハンドのプレイ中執行される。米国以外の会場においては会場側がどの言語が許容されるか明確に掲示して周知するものとする。
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Divider />

          <Box sx={{ display: "flex", mt: 0 }}>
            <Typography mt={2} ml={"auto"} sx={{ fontSize: "12px" }}>
              最終更新: 2020/03/06 17:36
            </Typography>
          </Box>
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

export default TDARules;
