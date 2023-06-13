import React from "react";
import moment from "moment";

import Link from "next/link";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Trendings = ({ data }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "0 0 50%",
      }}
    >
      <Typography variant="h5" paragraph>
        🔥 今流行っている
      </Typography>

      <Paper
        sx={{
          p: (theme) =>
            `${theme.typography.pxToRem(21)} ${theme.typography.pxToRem(23)}`,
          width: "1",
          height: "1",
          minHeight: (theme) => theme.typography.pxToRem(237),
          display: "flex",
          flexDirection: "column",
          flex: "1 auto",
        }}
      >
        <Box
          width="1"
          sx={{
            borderCollapse: "collapse",
          }}
          component="table"
        >
          <tbody>
            {data.map((item, index) => {
              const isLastIndex = data.length - 1 === index;
              const time = moment(item.start_date).utc();

              return (
                <Box
                  key={item.id + "-trendings"}
                  onClick={(event) => {
                    const path = `/tournament/${item.id}`;

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
                      transition: "background-color .02s ease-in",
                      verticalAlign: "top",
                      borderBottom: "transparent",
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
                  component="tr"
                >
                  <Box
                    sx={{
                      borderBottom: (theme) =>
                        `1px solid ${
                          isLastIndex ? "transparent" : theme.palette.divider
                        }`,
                      p: (theme) => theme.typography.pxToRem(6),
                      verticalAlign: "top",
                    }}
                    component="td"
                  >
                    <Typography color="textSecondary">
                      {time.format("YYYY/MM/DD")}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      borderBottom: (theme) =>
                        `1px solid ${
                          isLastIndex ? "transparent" : theme.palette.divider
                        }`,
                      p: (theme) => theme.typography.pxToRem(6),
                      verticalAlign: "top",
                    }}
                    component="td"
                  >
                    {item.tournament_name} ({item.venue})
                  </Box>
                </Box>
              );
            })}
          </tbody>
        </Box>

        <Box
          sx={{
            textAlign: "right",
            mt: "auto",
          }}
        >
          <Link href="/trendings" passHref>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "primary.main",
              }}
              component="a"
            >
              すべてを見る
              <ChevronRightIcon />
            </Box>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Trendings;
