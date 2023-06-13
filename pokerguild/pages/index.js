import React from "react";
import Head from "next/head";
import moment from "moment";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import News, { fetchNews } from "components/common/News";
import Trendings from "components/common/Trendings";
import RecentlyAdded from "components/common/RecentlyAdded";
import Companies from "components/common/Companies";
import Tournaments, { fetchTournaments } from "components/common/Tournaments";
import { Rules } from "components/footer/Rules";

export default function Home({
  news,
  tournaments,
  currentPageTournaments,
  venues,
  gameTypes,
  limitTypes,
}) {
  return (
    <React.Fragment>
      <Head>
        <title>ポーカーギルド</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="ポーカーギルドは、国内の最新ライブポーカートーナメント情報をお届けすると共に、ポーカースポットの活性化やプレイヤー達の更なる交流を促進しているサイトです。"
        />
        <meta
          name="keywords"
          content="PokerGuild, ポーカーギルド, Poker, ポーカー"
        />
        <meta property="og:title" content="ポーカーギルド" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ポーカーギルド" />
        <meta
          property="og:description"
          content="ポーカーギルドは、国内の最新ライブポーカートーナメント情報をお届けすると共に、ポーカースポットの活性化やプレイヤー達の更なる交流を促進しているサイトです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        sx={{
          mb: (theme) => ({
            xs: theme.typography.pxToRem(24),
            sm: theme.typography.pxToRem(40),
          }),
        }}
        component="section"
      >
        <News data={news.data} />
      </Box>

      <Box
        sx={{
          mb: (theme) => ({
            xs: theme.typography.pxToRem(36),
            sm: theme.typography.pxToRem(56),
          }),
        }}
        component="section"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Trendings data={tournaments.data.slice(0, 5)} />
          </Grid>

          <Grid item xs={12} lg={6}>
            <RecentlyAdded data={tournaments.data.slice(0, 5)} />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mb: (theme) => ({
            xs: theme.typography.pxToRem(36),
            sm: theme.typography.pxToRem(56),
          }),
        }}
        component="section"
      >
        <Companies />
      </Box>

      <Box
        sx={{
          mb: (theme) => ({
            xs: theme.typography.pxToRem(24),
            sm: theme.typography.pxToRem(40),
          }),
        }}
        component="section"
      >
        <Tournaments
          data={currentPageTournaments}
          venues={venues}
          gameTypes={gameTypes}
          limitTypes={limitTypes}
        />
      </Box>

      <Rules />
    </React.Fragment>
  );
}

export const getServerSideProps = async ({ query }) => {
  const fetchedNewsResult = await fetchNews();
  const fetchedTournamentsResult = await fetchTournaments();

  const dateFrom = moment(query?.start_date_from);
  const dateTo = query?.start_date_to
    ? moment(query.start_date_to).add(1, "day")
    : moment(dateFrom.toDate()).add(1, "day");

  const fetchedCurrentPageTournamentsResult = await fetchTournaments(
    query?.page || 1,
    query?.venue,
    query?.limit,
    query?.game,
    dateFrom.format("YYYY-MM-DD"),
    dateTo.format("YYYY-MM-DD"),
    query?.query || ""
  );

  return {
    props: {
      tournaments: fetchedTournamentsResult.data || { data: [] },
      currentPageTournaments: fetchedCurrentPageTournamentsResult.data?.data
        ?.length
        ? fetchedCurrentPageTournamentsResult.data
        : { data: [] },
      news: fetchedNewsResult.data || { data: [] },
    },
  };
};
