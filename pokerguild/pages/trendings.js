import React from "react";

import Link from "next/link";

import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import { fetchTournaments } from "components/common/Tournaments";
import TournamentClickableRow from "components/ui/TournamentClickableRow";
import { normalizeTournament } from "utils/normalization";

const Trendings = ({ tournaments, venues, gameTypes, limitTypes }) => {
  return (
    <React.Fragment>
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          mb: (theme) => ({
            xs: theme.typography.pxToRem(40),
            lg: theme.typography.pxToRem(24),
          }),
        }}
      >
        <Link href="/" passHref key="1">
          <MuiLink>Home</MuiLink>
        </Link>

        <Typography color="text.primary" key="2">
          Trendings
        </Typography>
      </Breadcrumbs>

      <Box
        sx={{
          mb: (theme) => ({
            xs: theme.typography.pxToRem(40),
          }),
        }}
      >
        <Typography variant="h5" paragraph align="center">
          🔥 Trendings
        </Typography>
      </Box>

      <Box
        sx={{
          my: (theme) => theme.typography.pxToRem(24),
          borderCollapse: "collapse",
          width: "1",
        }}
        component="table"
      >
        <tbody>
          {tournaments.map((item, index) => {
            const isLastIndex = tournaments.length - 1 === index;

            const tournament = normalizeTournament({
              tournament: item,
              venues,
              gameTypes,
              limitTypes,
            });

            return (
              <TournamentClickableRow
                key={tournament.id + "-recently-added"}
                tournament={tournament}
                isLastIndex={isLastIndex}
              />
            );
          })}
        </tbody>
      </Box>
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  const result = await fetchTournaments();

  return {
    props: {
      tournaments: result.data.data.splice(0, 10),
    },
  };
};

export default Trendings;
