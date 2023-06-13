import * as React from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

import Coin from "assets/svg/coin.svg";
import Dice from "assets/svg/dice.svg";
import Cards from "assets/svg/cards.svg";
import GGpoker from "assets/svg/ggpoker.svg";
import useTheme from "components/hooks/useTheme";

export const Rules = () => {
  const { isDarkMode } = useTheme();

  return (
    <React.Fragment>
      <Box
        maxWidth="lg"
        sx={{
          marginBottom: "40px",
        }}
      >
        <Box
          maxWidth="lg"
          sx={{
            marginBottom: "40px",
          }}
        >
          <Box
            sx={{
              outline: "1px solid #d5d5d7",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "12px 0",
            }}
          >
            <Typography
              variant="h1"
              color={"#ff001a"}
              sx={{
                fontSize: "34px",
                lineHeight: "1.3",
                fontWeight: "fontWeightBold",
              }}
            >
              ゲーム
            </Typography>
            <Typography variant="subtitle1">遊び方・ルール</Typography>
          </Box>
        </Box>

        <Box maxWidth="lg" sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: { xs: "block", lg: "flex" },
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", lg: "flex-start" },
                    gap: "24px",
                    alignItems: "center",
                    margin: "10px 0 40px 0",
                  }}
                >
                  <Box
                    sx={{
                      height: "80px",
                      width: "80px",
                    }}
                    mx={{ xs: "auto", lg: "0" }}
                    mb={{ xs: "20px", lg: "0" }}
                  >
                    <Coin />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      width: { xs: "100%", lg: "320px" },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "22px",
                        fontWeight: "fontWeightBold",
                        color: "#ff001a",
                      }}
                    >
                      基本ルール
                    </Typography>

                    <Stack
                      sx={{
                        color: isDarkMode ? "textPrimary" : "textSecondary",
                        "& .MuiTypography-root": {
                          fontWeight: "fontWeightMedium",
                          wordBreak: "break-all",
                        },
                      }}
                    >
                      <Typography>使用カード</Typography>

                      <Typography>
                        52枚のカードを使用。ジョーカーは入らない。
                      </Typography>

                      <Typography>手札</Typography>

                      <Typography>
                        各プレイヤーに、ホールカードと呼ばれる2枚の手札が伏せて配られる。
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: { xs: "block", lg: "flex" },
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", lg: "flex-start" },
                    gap: "24px",
                    alignItems: "center",
                    marginBottom: "40px",
                  }}
                >
                  <Box
                    sx={{
                      height: "80px",
                      width: "80px",
                    }}
                    mx={{ xs: "auto", lg: "0" }}
                    mb={{ xs: "20px", lg: "0" }}
                  >
                    <Dice />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "22px",
                        fontWeight: "fontWeightBold",
                        color: "#ff001a",
                        marginBottom: "10px",
                      }}
                    >
                      ゲームの進行
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "fontWeightBold",
                        fontSize: "15px",
                      }}
                    >
                      以下の手順でゲームは進行。
                    </Typography>

                    <Stack
                      sx={{
                        color: isDarkMode ? "textPrimary" : "textSecondary",
                      }}
                      color={"#01010F"}
                      fontWeight={"fontWeightMedium"}
                    >
                      <List
                        sx={{
                          listStyleType: "disc",
                          pl: 2,

                          "& .MuiListItem-root": {
                            display: "list-item",
                          },
                        }}
                      >
                        <ListItem disablePadding>
                          各自に手札が2枚伏せて配られる。
                        </ListItem>

                        <ListItem disablePadding>ベットラウンド1</ListItem>

                        <ListItem disablePadding>
                          フロップ(全員に共通のカードが3枚)が開かれる。
                        </ListItem>

                        <ListItem disablePadding>ベットラウンド2</ListItem>

                        <ListItem disablePadding>
                          ターン(全員に共通のカードが1枚)が開かれる。
                        </ListItem>

                        <ListItem disablePadding>ベットラウンド3</ListItem>

                        <ListItem disablePadding>
                          リバー(全員に共通のカードが1枚)が開かれる。
                        </ListItem>

                        <ListItem disablePadding>ベットラウンド4</ListItem>

                        <ListItem disablePadding>ショーダウン</ListItem>
                      </List>
                    </Stack>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: { xs: "block", lg: "flex" },
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", lg: "flex-start" },
                    gap: "24px",
                    alignItems: "center",
                    marginBottom: "40px",
                  }}
                >
                  <Box
                    sx={{
                      height: "80px",
                      width: "80px",
                    }}
                    mx={{ xs: "auto", lg: "0" }}
                    mb={{ xs: "20px", lg: "0" }}
                  >
                    <Cards />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "22px",
                        fontWeight: "fontWeightBold",
                        color: "#ff001a",
                        marginBottom: "10px",
                      }}
                    >
                      ポーカーハンド(役)
                    </Typography>

                    <Stack
                      sx={{
                        color: isDarkMode ? "textPrimary" : "textSecondary",
                      }}
                      color={"#01010F"}
                      fontWeight={"fontWeightMedium"}
                    >
                      <List
                        sx={{
                          listStyleType: "disc",
                          pl: 2,

                          "& .MuiListItem-root": {
                            display: "list-item",
                          },
                        }}
                      >
                        <ListItem disablePadding>ハイカード</ListItem>

                        <ListItem disablePadding>ワンペア</ListItem>

                        <ListItem disablePadding>ツーペアー</ListItem>

                        <ListItem disablePadding>スリーカード</ListItem>

                        <ListItem disablePadding>ストレート</ListItem>

                        <ListItem disablePadding>フラッシュ</ListItem>

                        <ListItem disablePadding>フルハウス</ListItem>

                        <ListItem disablePadding>フォーカード</ListItem>

                        <ListItem disablePadding>ストレートフラッシュ</ListItem>

                        <ListItem disablePadding>
                          ロイヤルストレートフラッシュ
                        </ListItem>
                      </List>
                    </Stack>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "12px",
                  }}
                >
                  <Link href="/rules" passHref>
                    <MuiLink
                      underline="hover"
                      color="#337ab7"
                      variant="body1"
                      fontSize={"15px"}
                      fontWeight={"fontWeightBold"}
                      target="_blank"
                    >
                      続きはこちら
                    </MuiLink>
                  </Link>
                </Box>

                <Box
                  sx={{
                    marginBottom: "24px",
                  }}
                >
                  <Link href="https://ggpoker.world/" passHref>
                    <MuiLink
                      underline="hover"
                      color="#337ab7"
                      variant="body1"
                      fontSize={"15px"}
                      fontWeight={"fontWeightBold"}
                      target="_blank"
                    >
                      世界中のポーカープレイヤーと対戦してみませんか？ようこそGGPokerへ！
                    </MuiLink>
                  </Link>

                  <Link href="https://ggpoker.world/" passHref>
                    <MuiLink
                      underline="hover"
                      color="#337ab7"
                      variant="body1"
                      fontSize={"15px"}
                      fontWeight={"fontWeightBold"}
                      target="_blank"
                    >
                      https://ggpoker.world
                    </MuiLink>
                  </Link>
                </Box>

                <Link href="https://ggpoker.world/" passHref>
                  <MuiLink
                    underline="hover"
                    color="#337ab7"
                    variant="body1"
                    fontSize={"15px"}
                    fontWeight={"fontWeightBold"}
                    target="_blank"
                  >
                    <GGpoker />
                  </MuiLink>
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "fontWeightBold",
                    fontSize: "22px",
                    color: "red",
                    margin: "10px auto 14px",
                  }}
                >
                  ポーカーギルド加盟店でトーナメントをプレイしてマイルを貯めよう！
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "fontWeightBold",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  マイルはポーカーギルドマイレージ加盟店で様々なサービスと交換できます。
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "fontWeightRegular",
                    fontSize: "12px",
                    marginBottom: "12px",
                  }}
                >
                  マイルシステムとは、ポーカートーナメントに参加することでポーカーギルドが発行するマイルが
                  プレイヤーに自動的に付与される仕組みのことで、たまったマイルはポーカーギルドマイレージ加盟店舗や海外トーナメントで使用することができるようになります。
                </Typography>

                <Stack
                  fontSize={"15px"}
                  fontWeight={"fontWeightRegular"}
                  mb={1}
                >
                  <List>
                    <ListItem disablePadding>
                      ※ポーカーギルドに会員登録（無料）している方限定のサービスです。
                    </ListItem>

                    <ListItem disablePadding>
                      ※18歳未満はご利用頂けません。
                    </ListItem>

                    <ListItem disablePadding>
                      ※ご利用の際に5%の手数料を頂きます。
                    </ListItem>

                    <ListItem disablePadding>
                      ※ポーカーギルドマイレージ加盟店のマイル適用トーナメントに参加する事がマイル獲得の条件です。
                    </ListItem>

                    <ListItem disablePadding>
                      ※マイルと交換したサービスは会員ご本人のみがご利用頂けます。
                    </ListItem>

                    <ListItem disablePadding>
                      ※マイルの有効期間は最後にポーカーギルドマイレージ加盟店舗でプレイして頂いてから6ヶ月です。
                    </ListItem>

                    <ListItem disablePadding>
                      ※一部プロモーションについては、マイル変換できないものがあります。
                      （APT, APPT, WPTなどの公式代表者）
                    </ListItem>

                    <ListItem disablePadding>
                      ※アキバギルド、東京dePOKERの2店舗において、2014年5月31日までに獲得したプロモーションの権利に関しても、2014年6月5日をもってマイレージに変換致します。
                    </ListItem>
                  </List>
                </Stack>

                <Typography variant="body1" mb={1}>
                  こちらの移行マイレージに関しては、元の権利に5%上乗せしたポイントを付与させて頂いておりますので、既存の権利と同様にお使い頂けます。
                  又、こちらの移行マイレージに関しての有効期限はマイレージシステム稼働日2014年6月5日から6ヶ月となりますのでご注意下さい。
                </Typography>

                <Stack
                  color={"red"}
                  fontSize={"15px"}
                  fontWeight={"fontWeightRegular"}
                  mb={1}
                >
                  <List>
                    <ListItem disablePadding>
                      ※こちらのマイルに貨幣価値はありません。
                    </ListItem>

                    <ListItem disablePadding>
                      ポーカーギルドが後援スポンサーの協力を得てプレイヤーの皆様にマイルポイントを発行しており、
                      マイレージシステム自体はポーカーギルド加盟店とは一切の関係はありません。
                    </ListItem>

                    <ListItem disablePadding>
                      ※World Poker Tour(WPT)、 World Series of
                      Poker（WSOP）にもご使用いただけます。
                    </ListItem>

                    <ListItem disablePadding>
                      申請につきましてはイベント開始2週間前までに事務局にご連絡の上、マイレージ使用をお願い致します。
                    </ListItem>

                    <ListItem
                      disablePadding
                      sx={{
                        marginBottom: "12px",
                      }}
                    >
                      期限を過ぎてご連絡をいただいた場合はお受け致しかねますのでご了承ください。
                    </ListItem>

                    <ListItem disablePadding>
                      連絡先：info@pokerguild.jp
                    </ListItem>
                  </List>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};
