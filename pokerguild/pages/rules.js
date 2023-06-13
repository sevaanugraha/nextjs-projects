/* eslint-disable */
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

const Rules = ({ tournaments }) => {
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
          テキサスホールデムの遊び方
        </Typography>

        <Paper
          sx={{
            px: (theme) => theme.typography.pxToRem(38),
            pt: (theme) => theme.typography.pxToRem(38),
            pb: (theme) => theme.typography.pxToRem(22),
            mb: (theme) => theme.typography.pxToRem(60),
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: "100%" }}>
            <Typography
              fontWeight={500}
              sx={{ color: "red", fontSize: "22px", maxWidth: "100%" }}
            >
              基本ルール
            </Typography>

            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
                py: 0,

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
                使用カード
                <Typography>
                  52枚のカードを使用。ジョーカーは入らない。。
                </Typography>
              </ListItem>

              <ListItem>
                手札
                <Typography>
                  各プレイヤーに、ホールカードと呼ばれる2枚の手札が伏せて配られる。
                </Typography>
              </ListItem>

              <ListItem>
                参加料
                <Typography>ブラインドベット。</Typography>
              </ListItem>

              <ListItem>
                ブラインドベット
                <Typography>
                  ホールデムでは、ブラインドベットを採用しているのが一般的。ブラインド1-2というルールの場合、ディーラーボタンの左隣の人がチップ1枚、さらにその左隣の人がチップ2枚を、手札が配られる前に強制的に賭ける。
                </Typography>
              </ListItem>

              <ListItem>
                共有カード
                <Typography>
                  ゲームの進行につれて、コミュニティカードと呼ばれる共有カードが全部で5枚、場に開かれる。
                </Typography>
              </ListItem>

              <ListItem>
                ベットラウンド
                <Typography>ホールデムでは、ベットラウンドは4回。</Typography>
              </ListItem>

              <ListItem>
                アクション
                <Typography>
                  各ベットラウンドでは、以下のアクションのうち1つを選択。
                </Typography>
                <List
                  sx={{
                    padding: "0 0 0 20px",
                    display: "list-item",

                    "& .MuiListItem-root": {
                      listStyleType: "circle",
                      display: "list-item",
                      padding: "0",

                      "&:last-child": {
                        padding: "0",
                      },
                    },
                  }}
                >
                  <ListItem disablePadding>
                    チェック････賭け金の上乗せをしないこと。
                  </ListItem>

                  <ListItem disablePadding>
                    ベット･･････賭け金の上乗せをすること。
                  </ListItem>

                  <ListItem disablePadding>
                    フォールド･･ゲームを降りること。
                  </ListItem>

                  <ListItem disablePadding>
                    レイズ･･････他プレイヤーがベットした後、さらに賭け金の上乗せをすること。
                  </ListItem>

                  <ListItem disablePadding>
                    コール･･････他プレイヤーの賭け金と同額を出すこと。
                  </ListItem>

                  <ListItem disablePadding>
                    オールイン･･自分の持ちチップを全て賭けること。
                  </ListItem>
                </List>
              </ListItem>

              <ListItem>
                ゲームの進行
                <Typography>以下の手順でゲームは進行。</Typography>
                <List
                  sx={{
                    padding: "0 0 0 20px",
                    display: "list-item",

                    "& .MuiListItem-root": {
                      listStyleType: "circle",
                      display: "list-item",
                      padding: "0",

                      "&:last-child": {
                        padding: "0",
                      },
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

                  <ListItem disablePadding>fショーダウン</ListItem>
                </List>
              </ListItem>

              <ListItem>
                勝敗
                <Typography>
                  それぞれのプレイヤーは、2枚の手札と5枚の共有のカード、合わせて7枚のうちの任意の5枚を選択して役を作る。出来た役の強弱で勝敗が決まる。
                  （選択しなかった2枚は勝敗に影響無し）
                </Typography>
              </ListItem>
            </List>

            <Typography
              fontWeight={500}
              sx={{ color: "red", fontSize: "22px", maxWidth: "100%" }}
            >
              ポーカーハンド（役）
            </Typography>

            <List
              disablePadding
              sx={{
                listStyleType: "disc",
                pl: 2,
                py: 0,
                "& .MuiListItem-root": {
                  padding: "0 0 10px",
                  display: "list-item",

                  "& img": {
                    width: { xs: "100%", sm: "65%", lg: "55%" },
                  },

                  "&:last-child": {
                    padding: "0",
                  },
                },
              }}
            >
              <ListItem>
                ハイカード
                <Typography>ハイカードをもつ者が勝者</Typography>
                <img src="/card-01.png" alt="" />
              </ListItem>

              <ListItem>
                ワンペアー
                <Typography>
                  同一の数字が2枚ペアのカード（残り3枚は何でもよい）
                </Typography>
                <img src="/card-02.png" alt="" />
              </ListItem>

              <ListItem>
                ツーペアー
                <Typography>同一の数字が2枚ペアのカードが2つ</Typography>
                <img src="/card-03.png" alt="" />
              </ListItem>

              <ListItem>
                スリーカード
                <Typography>
                  同一の数字が3枚のカード（残り2枚は何でもよい）
                </Typography>
                <img src="/card-04.png" alt="" />
              </ListItem>

              <ListItem>
                ストレート
                <Typography>
                  5枚のカードが連続していること（マークは何でもよい）
                </Typography>
                <img src="/card-05.png" alt="" />
              </ListItem>

              <ListItem>
                フラッシュ
                <Typography>5枚全てが同じマーク（数字は何でもよい）</Typography>
                <img src="/card-06.png" alt="" />
              </ListItem>

              <ListItem>
                フルハウス
                <Typography>ペアー組とスリーカード</Typography>
                <img src="/card-07.png" alt="" />
              </ListItem>

              <ListItem>
                フォーカード
                <Typography>
                  同一の数字が4枚のカード（残り1枚は何でもよい）
                </Typography>
                <img src="/card-08.png" alt="" />
              </ListItem>

              <ListItem>
                ストレートフラッシュ
                <Typography>ストレートかつフラッシュ</Typography>
                <img src="/card-09.png" alt="" />
              </ListItem>

              <ListItem>
                ロイヤルストレートフラッシュ
                <Typography>
                  10･ジャック (J)･クイーン (Q)･キング (K)･エース
                  (A)の組み合わせ、かつフラッシュ
                </Typography>
                <img src="/card-10.png" alt="" />
              </ListItem>

              <ListItem disablePadding>※順番は弱い順</ListItem>
            </List>

            <Typography
              fontWeight={500}
              sx={{ color: "red", fontSize: "22px", maxWidth: "100%" }}
            >
              基本的なマナー
            </Typography>

            <List
              disablePadding
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
                チップを投げない
                <Typography>
                  ポットにチップを投げてはいけない。いくらベットしたのかディーラーが判別できないからである。ポットにチップを追加したい時は、自分の目の前にきちんと置けば、ディーラーがカウントしてポットに入れてくれる。
                </Typography>
              </ListItem>

              <ListItem>
                ストリングベットはいけない
                <Typography>
                  ストリングベットとは何回にも分けてベットする事である。
                  もしこれが許されるなら、 卑怯なプレイヤーはベット後、
                  相手の顔色を見てもう一度ベット出来ることになる。
                  初心者は無意識にストリングベットをする事がある。
                  それを避ける為にも "レイズ" と発声する癖を付けるのが重要。
                </Typography>
              </ListItem>

              <ListItem>
                ハンドについての会話は厳禁
                <Typography>
                  プレイ中に何を持っているか言葉や体で表現してはいけない。故意的にストリングベットをするのと同じで、相手から情報を得る目的と受け取られる為である。また、自分が参加していない時にハンドの話をするのは、もちろん厳禁である。
                </Typography>
              </ListItem>

              <ListItem>
                ショウダウンの要求を直接してはならない
                <Typography>
                  他のプレイヤーにショウダウンの要求は出来るが、それを伝えるのはディーラーの仕事であり、頻繁ハンドを見せろと要求するのは良くないエチケットである。
                </Typography>
              </ListItem>

              <ListItem>
                アクションは自己責任
                <Typography>
                  ポーカーテーブルにおいて、全てのアクションの責任は個人にある。どんな事が起きても、ラッキーでもアンラッキーでもディーラーのせいにしてはいけない。
                </Typography>
              </ListItem>

              <ListItem>
                カードのプロテクト
                <Typography>
                  ハンドに参加していれば、間違ってハンドを捨てられないようにカードをプロテクトするべきである。カードの上にラッキーコインや小物、恋人からのプレゼント等を置く人もいる。
                </Typography>
              </ListItem>

              <ListItem>故意的にゲームの進行を遅らせてはいけない。</ListItem>

              <ListItem>
                ゲーム中に会話をしてプレイヤーの邪魔をしない。
              </ListItem>

              <ListItem>
                誰かがオールインしている時に“チェックダウン（リバーまでチェックでまわす事）”をしようと口にしてはいけない。
              </ListItem>

              <ListItem>
                カードを見る時、他の人に見えないように手でプロテクトする必要がある。
              </ListItem>

              <ListItem>常にカードはテーブルの上に置いておく。</ListItem>

              <ListItem>ショウダウンの際にはカード2枚とも見せる。</ListItem>

              <ListItem>
                フルレイズに満たないショートオールインは全てコール扱いとなる。
              </ListItem>
            </List>
          </Stack>

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
/* eslint-enable */

export default Rules;
