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

const Agreement = ({ tournaments }) => {
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
          ポーカーギルド加盟店規約
        </Typography>

        <Paper
          sx={{
            px: (theme) => theme.typography.pxToRem(38),
            pt: (theme) => theme.typography.pxToRem(38),
            pb: (theme) => theme.typography.pxToRem(22),
            mb: (theme) => theme.typography.pxToRem(60),
          }}
        >
          <Stack
            sx={{
              maxWidth: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "22px", color: "red" }}
              mb={1}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              加盟店契約書
            </Typography>

            <Typography mb={2}>
              ポーカーギルド株式会社（以下「甲」という）と加盟店（以下「乙」という）とは、webサイトのPokerGuild
              （以下、「本サイト」という）の利用に関して、以下のとおりフランチャイズ契約を締結する。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第１条（加盟権の付与）
            </Typography>

            <Typography mb={2}>
              この契約により乙はPokerGuildに加盟する権利を獲得する。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第２条（具体的内容）
            </Typography>

            <Typography mb={2}>
              加盟店舗が本サイトに記載できる事項として、トーナメントのタイトル、料金、参加しているプレイヤー、店舗サイトへのリンクなどである。
              疑義がある事項に関しては甲乙双方の同意に基づいて定める。
              尚、乙及び乙に関わる従業員が甲の許可なくトーナメントのタイトルに記号及び特殊記号を挿入することを禁止する。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第３条（禁止行為）
            </Typography>

            <Typography>
              本サイトの利用に際し、甲は、乙に対し、次に掲げる行為を禁止します。甲において、乙が禁止事項に違反したと認めた場合、
              利用の一時停止、退会処分その他甲が必要と判断した措置を取ることができます。
            </Typography>

            <List
              sx={{
                listStyleType: "number",
                pl: 2,
                pb: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem disablePadding>
                甲または第三者の知的財産権を侵害する行為
              </ListItem>

              <ListItem disablePadding>
                甲または第三者の名誉・信用を毀損または不当に差別もしくは誹謗中傷する行為
              </ListItem>

              <ListItem disablePadding>
                上記の他、当社が不適切と判断する行為
              </ListItem>
            </List>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第４条（加盟金）
            </Typography>

            <List
              sx={{
                listStyleType: "number",
                pl: 2,
                pb: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem disablePadding>
                乙は、本加盟店契約により、甲に対し毎月、以下の加盟金を支払うものとする。
              </ListItem>

              <Typography>
                なお当該加盟金はいかなる場合においても返却されない。
              </Typography>

              <ListItem disablePadding>
                対価の支払いは、翌月末日までに甲の指定する銀行口座（注１）に振り込むものとする。その際の振込手数料は乙が負担するものとする。
              </ListItem>
            </List>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第５条（秘密保持）
            </Typography>

            <List
              sx={{
                listStyleType: "number",
                pl: 2,
                pb: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem disablePadding>
                乙は、本契約にもとづいて知り得た甲の秘密を現に秘匿し、これを第三者に開示または漏洩し、もしくは本契約の目的以外の目的のために使用してはならない
              </ListItem>

              <ListItem disablePadding>
                乙は、甲より貸与されもしくは提供を受けた文書、図面、本サイトの使用権限を厳重に管理し、甲の事前の書面による承諾なくこれを複写し第三者に閲覧させ、または譲渡、転貸してはならない。
              </ListItem>

              <ListItem disablePadding>
                乙は、その従業員に対しても前２項の義務を遵守させなければならない｡
              </ListItem>
            </List>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第６条（譲渡禁止）
            </Typography>

            <Typography mb={2}>
              乙は、甲の書面による事前の同意がない限り、本契約上の地位、本契約にもとづく権利義務の全部または一部を第三者に譲渡または貸与もしくは担保の目的に供してはならない。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第７条（損害賠償）
            </Typography>

            <Typography>
              甲または乙が本契約に違反し、相手方に損害を与えたときはその損害を賠償するものとする。
            </Typography>

            <Typography mb={2}>
              なお、双方の責めにきすべき理由がない場合には、甲は本サイトの利用ができないことに付随する損害についての責任を一切負わない。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第８条（解約）
            </Typography>

            <Typography>
              乙につき次の各号の一に該当する事由が生じたときは、甲は何らの通知催告を要せず、直ちに本契約を解約することができるものとする。
            </Typography>

            <List
              sx={{
                listStyleType: "number",
                pl: 2,
                pb: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem disablePadding>
                本契約または個別契約に違反し、甲が相当の期間を定めて是正を催告したにもかかわらず、当該期間内に是正がなされないとき
              </ListItem>

              <ListItem disablePadding>
                財産状態が悪化し、または悪化するおそれがあると認められる相当の事由があるとき
              </ListItem>
            </List>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第９条（有効期間）　
            </Typography>

            <Typography mb={2}>
              本契約は、調印の日より１年間効力を有するものとする。ただし、期間満了１か月前までに乙いずれからも別段の申出がないときには、
              さらに１年間延長するものとし、以後も同様とする。ただし、双方の同意に基づいて契約の解除をすることができる。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第１０条（解約・終結時の措置）　
            </Typography>

            <Typography mb={2}>
              本契約が終了したときは、乙は当然に本サイトの利用権限を喪失する。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第１１条（裁判管轄）　
            </Typography>

            <Typography mb={2}>
              本契約上の紛争については、甲の本店所在地を管轄する地方裁判所を第一審の管轄裁判所とす
              ることに合意する。
            </Typography>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第１２条（規約の変更）
            </Typography>

            <List
              sx={{
                listStyleType: "number",
                pl: 2,
                pb: 2,
                "& .MuiListItem-root": {
                  display: "list-item",
                },
              }}
            >
              <ListItem disablePadding>
                甲は、乙の承諾を得ることなく、いつでも、本規約の内容を改定することができるものとし、乙はこれを異議なく承諾するものとする。
              </ListItem>

              <ListItem disablePadding>
                甲は、本規約を改定するときは、その内容について甲所定の方法により乙に通知する。
              </ListItem>
            </List>

            <Typography
              sx={{ fontSize: "18px" }}
              fontWeight={(theme) => theme.typography.fontWeightMedium}
            >
              第１３条
            </Typography>

            <Typography mb={2}>
              この規約に定めるもののほか、必要な事項は甲に諮り、甲代表が定める。
            </Typography>

            <Typography>２０１０年１月１日　施行</Typography>

            <Typography mb={3}>２０１９年１月１７日　改定</Typography>

            <Divider />

            <Typography
              mt={2}
              ml={"auto"}
              sx={{ fontSize: "12px", maxWidth: "100%" }}
            >
              最終更新: 2019/01/17 18:15
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

export default Agreement;
