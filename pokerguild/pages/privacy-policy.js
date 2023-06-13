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
import ListItemText from "@mui/material/ListItemText";
import MuiLink from "@mui/material/Link";

import Trendings from "components/common/Trendings";
import RecentlyAdded from "components/common/RecentlyAdded";
import { fetchTournaments } from "components/common/Tournaments";
import ShareButtons from "components/common/ShareButtons";

const PrivacyPolicy = ({ tournaments }) => {
  return (
    <React.Fragment>
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
            個人情報の取り扱いに関する方針
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
              <Typography sx={{ mb: 2 }}>
                ポーカーギルド株式会社は運営上で知りえた個人情報（氏名、年齢、住所、twitterID、メールアドレス、残高チップ、残高ポイントなど）の利用を適正に管理すると共に、利用者の方々にその取組を開示する事によって個人情報の保護を推し進めて参ります。
              </Typography>

              <Typography
                fontWeight={500}
                sx={{ color: "red", fontSize: "22px", maxWidth: "100%", mb: 1 }}
              >
                1. 利用目的について
              </Typography>

              <Typography sx={{ mb: 1 }}>
                ポーカーギルド株式会社は、お客様等の個人情報を、以下のような目的で利用します。
              </Typography>

              <List
                sx={{
                  listStyleType: "disc",
                  pl: 2,

                  "& .MuiListItem-root": {
                    padding: "0 0 10px",
                    display: "list-item",

                    "&:last-child": {
                      padding: "0",
                    },
                  },
                }}
              >
                <ListItem>
                  お客様等への業務上の連絡
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 2,

                      "& .MuiListItem-root": {
                        listStyleType: "circle",
                        display: "list-item",
                      },
                    }}
                  >
                    <ListItem disablePadding>
                      ポーカーギルドの仕様変更に伴う案内
                    </ListItem>

                    <ListItem disablePadding>
                      公開されたトーナメント結果が修正・追加・削除になった場合の連絡
                    </ListItem>

                    <ListItem disablePadding>
                      ポーカーギルド株式会社との間で締結したプロ契約内容の詳細の打ち合わせ
                    </ListItem>

                    <ListItem disablePadding>
                      マイレージ使用の誤ったデータをポーカーギルド株式会社が発見した際の確認
                    </ListItem>

                    <ListItem disablePadding>
                      その他、アカウント情報やマイレージ情報、トーナメント結果情報に関わる確認等
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  お客様等からのお問い合わせ・ご依頼への対応
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 2,

                      "& .MuiListItem-root": {
                        listStyleType: "circle",
                        display: "list-item",
                      },
                    }}
                  >
                    <ListItem disablePadding>
                      ポーカーギルドのサービス内容についての案内
                    </ListItem>

                    <ListItem disablePadding>
                      ポーカーギルド上において不具合・仕様変更についての案内・対応
                    </ListItem>

                    <ListItem disablePadding>
                      ポーカーギルド株式会社へアカウント登録、変更、削除に係わるサポート
                    </ListItem>

                    <ListItem disablePadding>
                      マイレージ使用についての案内
                    </ListItem>

                    <ListItem disablePadding>
                      海外スポンサードの内容の案内
                    </ListItem>

                    <ListItem disablePadding>
                      その他、ポーカーギルド株式会社の業務に関わる内容についての案内
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem>
                  ポーカーギルド株式会社からの案内
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 2,

                      "& .MuiListItem-root": {
                        listStyleType: "circle",
                        display: "list-item",
                      },
                    }}
                  >
                    <ListItem disablePadding>
                      ポーカーギルドのサービス内容についての案内
                    </ListItem>

                    <ListItem disablePadding>
                      ポーカーギルドに登録されているトーナメントイベント情報の案内
                    </ListItem>

                    <ListItem disablePadding>
                      ポーカーギルドに登録されている店舗情報の案内
                    </ListItem>

                    <ListItem disablePadding>
                      海外トーナメント情報の案内
                    </ListItem>

                    <ListItem disablePadding>
                      その他、ポーカーギルド株式会社のサービスに関わる内容についての案内
                    </ListItem>
                  </List>
                </ListItem>

                <ListItem sx={{ mb: 2 }}>
                  ポーカーギルド株式会社登録店舗からの案内
                  <List
                    sx={{
                      listStyleType: "disc",
                      pl: 2,
                      pb: 0,

                      "& .MuiListItem-root": {
                        listStyleType: "circle",
                        display: "list-item",
                      },
                    }}
                  >
                    <ListItem disablePadding>
                      店舗のサービス内容・住所等の案内
                    </ListItem>

                    <ListItem disablePadding>
                      店舗のイベントについての案内
                    </ListItem>
                  </List>
                </ListItem>
              </List>

              <Typography
                fontWeight={500}
                sx={{ color: "red", fontSize: "22px", maxWidth: "100%", mb: 1 }}
              >
                2. 第三者への提供について
              </Typography>

              <Typography sx={{ mb: 1 }}>
                ポーカーギルド株式会社は、運営上不可避である場合(※１)、又、ポーカーギルド株式会社が取得した個人情報をあらかじめご本人の同意を得た場合を除き第三者に開示しません。尚、ポーカーギルド株式会社のホームページ・システム・アプリケーションにて登録された個人情報は全てポーカーギルド株式会社に帰属し、仮に個人情報を登録した個人・店舗・団体・会社であってもその個人情報についてポーカーギルド株式会社が開示を行う事はありません。
              </Typography>

              <Typography fontWeight={700} sx={{ mb: 1 }}>
                (※１)運営上不可避である場合
              </Typography>

              <List
                sx={{
                  listStyleType: "disc",
                  pl: 2,

                  "& .MuiListItem-root": {
                    padding: "0 0 10px",
                    display: "list-item",

                    "&:last-child": {
                      padding: "0",
                      mb: 2,
                    },
                  },
                }}
              >
                <ListItem>
                  ポーカーギルド登録店舗が大会を開催時にお客様がその大会に参加した場合
                  必要な個人データの項目（氏名、年齢、住所、twitterID、メールアドレスなど）
                </ListItem>

                <ListItem>
                  大会にスポンサーが場所・プロ選手契約・物品等を提供している場合
                  イベント上位入賞者の情報をスポンサー元に報告する事があります。
                  報告する個人データの主な項目（氏名、電話番号、年齢、住所、メールアドレスなど）
                </ListItem>
              </List>

              <Typography
                fontWeight={500}
                sx={{ color: "red", fontSize: "22px", maxWidth: "100%", mb: 1 }}
              >
                3. 個人情報の開示、訂正、削除
              </Typography>

              <Typography>
                ポーカーギルド株式会社は、ポーカーギルド株式会社が取得した個人情報に対して、ご本人より、開示、訂正、削除の要請をいただいた場合は、速やかに対応させていただきますので、問い合わせ窓口までご連絡ください。
              </Typography>
              <Typography sx={{ mb: 2 }}>
                （但し、ポーカーギルドを継続してご利用される場合には削除はできませんのでご了承下さい。）
              </Typography>

              <Typography
                fontWeight={500}
                sx={{ color: "red", fontSize: "22px", maxWidth: "100%", mb: 1 }}
              >
                4. お問い合わせ窓口
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography>ポーカーギルド株式会社（担当：富田）</Typography>

                <Typography>
                  住所: 東京都千代田区外神田2-3-6 成田ビル 3F
                </Typography>

                <Typography>mail: info@pokerguild.jp</Typography>
              </Box>

              <Typography
                fontWeight={500}
                sx={{ color: "red", fontSize: "22px", maxWidth: "100%", mb: 1 }}
              >
                5. 特定商法取引法に関する表記
              </Typography>

              <Link href="/commercial-transactions" passHref>
                <MuiLink
                  underline="hover"
                  color="#337ab7"
                  variant="body1"
                  fontSize={"15px"}
                  target="_blank"
                  marginBottom={3}
                >
                  http://pokerguild.jp/pages/act-on-specified-commercial-transactions/
                </MuiLink>
              </Link>

              <Divider />

              <Typography sx={{ fontSize: "12px", ml: "auto", mt: 2 }}>
                最終更新: 2021/07/15 19:12
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
    </React.Fragment>
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

export default PrivacyPolicy;
