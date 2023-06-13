import React from "react";
import moment from "moment";

import Link from "next/link";

import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import EventsCalendar from "components/common/EventsCalendar";
import { fetchWPT } from "components/common/WorldPokerTournament";

import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";

import Trendings from "components/common/Trendings";
import RecentlyAdded from "components/common/RecentlyAdded";
import { fetchTournaments } from "components/common/Tournaments";

const buildEvents = (data) => {
  return data.map((event) => {
    return {
      title: event?.title?.rendered,
      start: event?.start_date ? new Date(event.start_date) : undefined,
      end: event?.end_date ? new Date(event.end_date) : undefined,
      date: event?.date ? new Date(event.date) : undefined,
      extendedProps: { next_url: event?.external_url },
    };
  });
};

const WPT = ({ data, tournaments = { data: [] } }) => {
  const events = buildEvents(data);

  return (
    <React.Fragment>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          mx: "auto",
          mb: (theme) => ({
            xs: theme.typography.pxToRem(40),
            lg: theme.typography.pxToRem(24),
          }),
          px: (theme) => ({
            xs: theme.typography.pxToRem(24),
            lg: theme.typography.pxToRem(0),
          }),
        }}
      >
        <Link href="/" passHref>
          <MuiLink>ホーム</MuiLink>
        </Link>

        <Typography color="text.primary">海外イベント</Typography>
      </Breadcrumbs>

      <Box
        sx={{
          width: "1",
          display: "flex",
          gap: "30px",
          mb: 8
        }}
      >
        <Box>
          <EventsCalendar events={events} />
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
    </React.Fragment>
  );
};

export const getServerSideProps = async () => {
  const firstDay = moment().utc().startOf("month");
  const lastDay = moment().utc().endOf("month");

  const result = await fetchWPT(
    "2022-01-30T18:15:00.000Z",
    lastDay.toISOString()
  );

  const fetchedTournamentsResult = await fetchTournaments();

  return {
    props: {
      data: result,
      tournaments: fetchedTournamentsResult.data?.data?.length
        ? fetchedTournamentsResult.data
        : { data: [] },
    },
  };
};

export default WPT;
