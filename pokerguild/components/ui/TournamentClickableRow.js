import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import moment from "moment";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaceIcon from "@mui/icons-material/Place";

const TournamentClickableRow = ({ tournament, isLastIndex }) => {
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const time = moment(tournament.start_date).utc();

  if (isSmallScreen) {
    return (
      <Box
        component="tr"
        key={tournament.id + "-tournament"}
        onClick={(event) => {
          const path = `/tournament/${tournament.id}`;

          if (event.metaKey || event.ctrlKey) {
            const win = window.open(path);
            win?.focus();
          } else {
            router.push(path);
          }
        }}
        sx={{
          cursor: "pointer",

          "& td": {
            verticalAlign: "top",
            borderBottom: (theme) =>
              `1px solid ${
                isLastIndex ? "transparent" : theme.palette.divider
              }`,
            p: (theme) =>
              `${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(8)}`,
            transition: "background-color .02s ease-in",
            wordBreak: "break-word",
          },

          "&:hover": {
            "& td": {
              bgcolor: (theme) =>
                theme.palette.mode === "light"
                  ? "rgba(0, 0, 0, .02)"
                  : "rgba(0, 0, 0, .15)",
            },
          },

          "& a": {
            color: "primary.main",
          },
        }}
      >
        <Box component="td">
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
            }}
            variant="body2"
            gutterBottom
          >
            <WatchLaterIcon fontSize="tiny" /> &nbsp;{time.format("HH:mm")}
          </Typography>
          <Typography variant="body2">{time.format("YYYY/MM/DD")}</Typography>
        </Box>

        <Box width="70%" component="td">
          <Typography variant="body2" gutterBottom>
            <Link href={`/tournament/${tournament.id}`} passHref>
              <Box
                component="a"
                sx={{
                  color: "primary.main",
                  textDecoration: "none",

                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {tournament.tournament_name}
              </Box>
            </Link>
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {tournament?.limitType?.name} / {tournament?.gameType?.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: (theme) => theme.typography.pxToRem(6),
              justifyContent: "flex-end",
              mt: theme.typography.pxToRem(24),
            }}
          >
            <Typography variant="body2">
              {tournament.venue?.shortname}
            </Typography>

            {tournament?.place && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  flexWrap: "nowrap",
                }}
              >
                <PlaceIcon fontSize="tiny" /> &nbsp;
                <Typography
                  variant="body2"
                  color="textSecondary"
                  dangerouslySetInnerHTML={{ __html: tournament.place }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="tr"
      key={tournament.id + "-tournament"}
      sx={{
        cursor: "pointer",

        "& td": {
          verticalAlign: "top",
          borderBottom: (theme) =>
            `1px solid ${isLastIndex ? "transparent" : theme.palette.divider}`,
          p: (theme) =>
            `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(92)}`,
          transition: "background-color .08s ease-in",
          wordBreak: "break-word",

          "&:first-of-type": {
            pr: 0,
          },

          "&:last-child": {
            pl: 0,
            align: "center",
          },
        },

        "& a": {
          color: "primary.main",
        },

        "&:hover": {
          "& td": {
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(0, 0, 0, .04)"
                : "rgba(0, 0, 0, .15)",
          },
        },
      }}
    >
      <Box width="20%" component="td">
        <Typography gutterBottom>{time.format("YYYY/MM/DD")}</Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
          gutterBottom
        >
          <WatchLaterIcon fontSize="tiny" /> &nbsp;{time.format("HH:mm")}
        </Typography>
      </Box>

      <Box component="td">
        <Typography gutterBottom>
          <Link href={`/tournament/${tournament.id}`} passHref>
            <Box
              sx={{
                textDecoration: "none",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              component="a"
            >
              <b>{tournament.tournament_name}</b>
            </Box>
          </Link>
        </Typography>

        <Typography color="textSecondary">
          {tournament?.limitType?.name} / {tournament?.gameType?.name}
        </Typography>
      </Box>

      <Box width="25%" minWidth="300px" component="td">
        <Typography gutterBottom>{tournament.venue?.shortname}</Typography>

        {tournament?.place && (
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              flexWrap: "nowrap",
            }}
          >
            <PlaceIcon fontSize="tiny" /> &nbsp;
            <Typography
              component="span"
              color="textSecondary"
              dangerouslySetInnerHTML={{ __html: tournament.place }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TournamentClickableRow;
