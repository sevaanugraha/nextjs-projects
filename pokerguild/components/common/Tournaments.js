import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ClearIcon from "@mui/icons-material/Clear";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import TournamentClickableRow from "components/ui/TournamentClickableRow";
import { normalizeTournament } from "utils/normalization";
import moment from "moment";

export const fetchTournaments = async (
  page = 1,
  venue = "",
  limit = "",
  game = "",
  startDate = "",
  endDate = "",
  query = ""
) => {
  let url = `https://pokerguild.jp/clients/tournaments/api/tournaments?page=${page}`;

  if (venue && venue != "all") {
    url += `&venue_id=${venue}`;
  }

  if (limit && limit != "all") {
    url += `&limit_type_id=${limit}`;
  }

  if (game && game != "all") {
    url += `&game_type_id=${game}`;
  }

  if (startDate) {
    url += `&from=${startDate}`;
  }

  if (endDate) {
    url += `&to=${endDate}`;
  }

  if (query) {
    url += `&query=${query}`;
  }

  const result = await axios.get(url);
  return result;
};

export const fetchTournament = async (id) => {
  const result = await axios.get(
    `https://pokerguild.jp/clients/tournaments/api/tournaments/${id}`
  );
  return result;
};

export const fetchVenues = async (
  url = "https://pokerguild.jp/clients/tournaments/api/venues"
) => {
  const result = await axios.get(url);
  return result;
};

export const fetchGameTypes = async (
  url = `https://pokerguild.jp/clients/tournaments/api/game-types`
) => {
  const result = await axios.get(url);
  return result;
};

export const fetchLimitTypes = async (
  url = `https://pokerguild.jp/clients/tournaments/api/limit-types`
) => {
  const result = await axios.get(url);
  return result;
};

export const debounce = (callback, delay) => {
  var timeoutHandler = null;
  return () => {
    clearTimeout(timeoutHandler);
    timeoutHandler = setTimeout(() => {
      callback();
    }, delay);
  };
};

const SearchAndFilters = ({
  advanceFilter = false,
  query,
  venue,
  venues,
  gameType,
  gameTypes,
  limitType,
  limitTypes,
  handlers,
  dateRange,
}) => {
  const [showAdvanceFilter, setShowAdvanceFilter] = React.useState(false);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  React.useEffect(() => {
    setStartDate(dateRange.start ? moment(dateRange.start) : moment());
  }, [dateRange.start]);

  React.useEffect(() => {
    setEndDate(dateRange.end ? moment(dateRange.end) : null);
  }, [dateRange.end]);

  React.useEffect(() => {
    setShowAdvanceFilter(advanceFilter);
  }, [advanceFilter]);

  if (showAdvanceFilter) {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            flexWrap: "wrap",
            gap: (theme) => ({
              xs: theme.typography.pxToRem(32),
              md: theme.typography.pxToRem(16),
            }),
            mb: (theme) => theme.typography.pxToRem(40),
            px: (theme) => ({
              xs: theme.typography.pxToRem(24),
              md: theme.typography.pxToRem(42),
            }),
            py: (theme) => theme.typography.pxToRem(32),
            border: "1px solid transparent",
            borderColor: "divider",
            borderRadius: (theme) => theme.shape.borderRadius,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(0, 0, 0, .02)"
                : "rgba(0, 0, 0, .15)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            大会検索
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: (theme) => ({
                xs: theme.typography.pxToRem(24),
                md: theme.typography.pxToRem(16),
              }),
            }}
          >
            <Box>
              <Typography variant="subtitle1" gutterBottom>
                大会名：
              </Typography>

              <TextField
                value={query}
                variant="filled"
                onChange={handlers.query}
                type="search"
                InputProps={{
                  disableUnderline: true,

                  sx: {
                    width: (theme) => ({
                      xs: `1`,
                      md: `${theme.typography.pxToRem(290)} !important`,
                    }),

                    "& input": {
                      p: "0px !important",
                    },
                  },
                }}
              />
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom>
                開催日：
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  gap: (theme) => ({
                    xs: theme.typography.pxToRem(16),
                    md: theme.typography.pxToRem(8),
                  }),
                }}
              >
                <DatePicker
                  views={["year", "month", "day"]}
                  value={startDate}
                  onChange={(value) => {
                    setEndDate(null);

                    if (value) {
                      if (value.isValid()) {
                        setStartDate(value);
                      }
                    } else {
                      setStartDate(null);
                    }
                  }}
                  PaperProps={{
                    sx: {
                      borderRadius: 2,
                    },
                  }}
                  onError={() => setStartDate(null)}
                  inputFormat="YYYY-MM-DD"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: "Start Date",
                      }}
                      label=""
                      variant="filled"
                      InputProps={{
                        ...params?.InputProps,
                        disableUnderline: true,

                        sx: {
                          width: (theme) => ({
                            xs: `1`,
                            md: `${theme.typography.pxToRem(290)} !important`,
                          }),

                          "& input": {
                            p: "0px !important",
                          },
                        },
                      }}
                    />
                  )}
                />

                {startDate && (
                  <Box>
                    <RemoveIcon fontSize="sm" />
                  </Box>
                )}

                {startDate && (
                  <Tooltip title="* This is required" arrow open={!endDate}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <DatePicker
                        views={["year", "month", "day"]}
                        minDate={startDate}
                        value={endDate}
                        onChange={(value) => {
                          if (value.isValid()) {
                            setEndDate(value);

                            handlers.dateRange({
                              start: startDate.format("YYYY-MM-DD"),
                              end: value.format("YYYY-MM-DD"),
                            });
                          }
                        }}
                        PaperProps={{
                          sx: {
                            borderRadius: 2,
                          },
                        }}
                        disableHighlightToday
                        inputFormat="YYYY-MM-DD"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            inputProps={{
                              ...params.inputProps,
                              placeholder: "End Date",
                            }}
                            label=""
                            variant="filled"
                            InputProps={{
                              ...params?.InputProps,
                              disableUnderline: true,
                              sx: {
                                width: (theme) => ({
                                  xs: `1`,
                                  md: `${theme.typography.pxToRem(
                                    290
                                  )} !important`,
                                }),

                                "& input": {
                                  p: "0px !important",
                                },
                              },
                            }}
                          />
                        )}
                      />
                    </Box>
                  </Tooltip>
                )}
              </Box>
            </Box>

            <Box width={{ xs: "1", md: "auto" }}>
              <Typography variant="subtitle1" gutterBottom>
                お店:
              </Typography>

              <Autocomplete
                disablePortal
                options={venues.map((item) => ({
                  label: item.name,
                  ...item,
                }))}
                value={venue.name}
                isOptionEqualToValue={(option) => option.id === venue.id}
                sx={{
                  minWidth: (theme) => ({
                    xs: `100%`,
                    md: `${theme.typography.pxToRem(290)} !important`,
                  }),
                }}
                componentsProps={{
                  paper: {
                    sx: {
                      borderRadius: 2,
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    InputProps={{
                      ...params?.InputProps,
                      disableUnderline: true,
                      sx: {
                        py: "8px !important",

                        "& input": {
                          p: "0px !important",
                        },
                      },
                    }}
                  />
                )}
                onChange={handlers.venue}
              />
            </Box>

            <Box width={{ xs: "1", md: "auto" }}>
              <Typography variant="subtitle1" gutterBottom>
                限界:
              </Typography>

              <Autocomplete
                disablePortal
                options={limitTypes.map((item) => ({
                  label: item.name,
                  ...item,
                }))}
                value={limitType.name}
                isOptionEqualToValue={(option) => option.id === limitType.id}
                sx={{
                  minWidth: (theme) => ({
                    xs: `100%`,
                    md: `${theme.typography.pxToRem(290)} !important`,
                  }),
                }}
                componentsProps={{
                  paper: {
                    sx: {
                      borderRadius: 2,
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    InputProps={{
                      ...params?.InputProps,
                      disableUnderline: true,
                      sx: {
                        py: "8px !important",

                        "& input": {
                          p: "0px !important",
                        },
                      },
                    }}
                  />
                )}
                onChange={handlers.limitType}
              />
            </Box>

            <Box width={{ xs: "1", md: "auto" }}>
              <Typography variant="subtitle1" gutterBottom>
                ゲーム:
              </Typography>

              <Autocomplete
                disablePortal
                options={gameTypes.map((item) => ({
                  label: item.name,
                  ...item,
                }))}
                value={gameType.name}
                isOptionEqualToValue={(option) => option.id === gameType.id}
                sx={{
                  minWidth: (theme) => ({
                    xs: `100%`,
                    md: `${theme.typography.pxToRem(290)} !important`,
                  }),
                }}
                componentsProps={{
                  paper: {
                    sx: {
                      borderRadius: 2,
                    },
                  },
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    InputProps={{
                      ...params?.InputProps,
                      disableUnderline: true,
                      sx: {
                        py: "8px !important",

                        "& input": {
                          p: "0px !important",
                        },
                      },
                    }}
                  />
                )}
                onChange={handlers.gameType}
              />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: (theme) => ({
                xs: theme.typography.pxToRem(0),
                md: theme.typography.pxToRem(16),
              }),
              right: (theme) => ({
                xs: theme.typography.pxToRem(6),
                md: theme.typography.pxToRem(16),
              }),
            }}
          >
            <Tooltip title="Cancel Search" arrow>
              <IconButton
                variant="contained"
                size="large"
                onClick={() => {
                  setShowAdvanceFilter(false);
                  handlers.routerReset();
                }}
              >
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box />
        </Box>
      </LocalizationProvider>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        my: (theme) => ({
          xs: theme.typography.pxToRem(24),
          sm: theme.typography.pxToRem(40),
        }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: (theme) => ({
            xs: theme.typography.pxToRem(8),
            md: theme.typography.pxToRem(16),
          }),
        }}
      >
        <IconButton
          size="large"
          onClick={() => {
            const previousDay = moment(startDate).subtract(1, "days");
            setStartDate(previousDay);
            handlers.dateRange({
              start: previousDay.format("YYYY-MM-DD"),
              end: null,
            });
          }}
        >
          <KeyboardArrowLeftIcon fontSize="lg" />
        </IconButton>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            views={["year", "month", "day"]}
            value={startDate}
            onChange={(value) => {
              if (value) {
                if (value.isValid()) {
                  setStartDate(value);
                  handlers.dateRange({
                    start: value.format("YYYY-MM-DD"),
                    end: null,
                  });
                }
              } else {
                setStartDate(moment());
                handlers.dateRange({
                  start: moment().format("YYYY-MM-DD"),
                  end: null,
                });
              }
            }}
            PaperProps={{
              sx: {
                borderRadius: 2,
              },
            }}
            disableMaskedInput
            disableHighlightToday
            inputFormat="LL"
            renderInput={(params) => (
              <TextField
                {...params}
                label=""
                variant="filled"
                inputProps={{
                  ...params.inputProps,
                  placeholder: "September 22, 2022",
                  sx: {
                    fontSize: (theme) => ({
                      xs: theme.typography.pxToRem(22),
                      sm: theme.typography.pxToRem(28),
                    }),
                  },
                }}
                InputProps={{
                  ...params?.InputProps,
                  disableUnderline: true,
                  sx: {
                    width: (theme) => ({
                      xs: theme.typography.pxToRem(280),
                      sm: theme.typography.pxToRem(360),
                    }),

                    "& input": {
                      p: "0px !important",
                    },
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>

        <IconButton
          size="large"
          onClick={() => {
            const nextDay = moment(startDate).add(1, "days");
            setStartDate(nextDay);
            handlers.dateRange({
              start: nextDay.format("YYYY-MM-DD"),
              end: null,
            });
          }}
        >
          <KeyboardArrowRightIcon fontSize="lg" />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: (theme) => theme.typography.pxToRem(20),
          gap: (theme) => theme.typography.pxToRem(16),
        }}
      >
        <Button
          onClick={() => {
            const firstDay = moment().clone().startOf("week");
            const lastDay = moment().clone().endOf("week");
            setStartDate(firstDay);
            setEndDate(lastDay);
            handlers.dateRange({
              start: firstDay.format("YYYY-MM-DD"),
              end: lastDay.format("YYYY-MM-DD"),
            });
          }}
          size="large"
        >
          今週のイベント
        </Button>

        <Button
          onClick={() => {
            const firstDay = moment().startOf("month");
            const lastDay = moment().endOf("month");
            setStartDate(firstDay);
            setEndDate(lastDay);
            handlers.dateRange({
              start: firstDay.format("YYYY-MM-DD"),
              end: lastDay.format("YYYY-MM-DD"),
            });
          }}
          size="large"
        >
          今月のイベント
        </Button>

        <Button
          onClick={() => {
            setShowAdvanceFilter(true);
            setStartDate(null);
            setEndDate(null);
          }}
          startIcon={<SearchIcon />}
          size="large"
        >
          詳細検索を表示
        </Button>
      </Box>
    </Box>
  );
};

const Tournaments = ({ data, venues, gameTypes, limitTypes }) => {
  const router = useRouter();
  const query = router?.query;

  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [tournaments, setTournaments] = React.useState([]);

  React.useEffect(() => {
    const tournaments = data.data.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setTournaments(tournaments);
    setPage(data.currentPage);
    setTotalPage(Math.ceil(data.total / 30));
    setLoading(false);
  }, [data.data, data.currentPage, data.total]);

  const handleReset = () => {
    setLoading(true);
    setTournaments([]);
    setPage(1);
    setTotalPage(0);
  };

  const handleRouterReset = () => {
    handleReset();

    return router.replace(
      {
        pathname: "/",
        query: undefined,
      },
      undefined,
      { scroll: false }
    );
  };

  const handlePagination = async (event, page) => {
    event.preventDefault();

    handleReset();

    if (page) {
      query.page = page;
    } else {
      delete query.page;
    }

    return router.replace(
      {
        pathname: "/",
        query,
        hash: "list-container",
      },
      undefined,
      { scroll: false }
    );
  };

  const handleQuery = async (event) => {
    event.preventDefault();

    handleReset();

    const value = event.target.value;

    if (value) {
      query.query = value;
    } else {
      delete query.query;
    }

    return debounce(
      () =>
        router.replace(
          {
            pathname: "/",
            query,
          },
          undefined,
          { scroll: false }
        ),
      2000
    )();
  };

  const handleVenue = async (event, venue) => {
    event.preventDefault();

    handleReset();

    if (venue?.id) {
      query.venue = venue.id;
    } else {
      delete query.venue;
    }

    return router.replace(
      {
        pathname: "/",
        query,
      },
      undefined,
      { scroll: false }
    );
  };

  const handleLimitType = async (event, limitType) => {
    event.preventDefault();

    handleReset();

    if (limitType?.id) {
      query.limit = limitType.id;
    } else {
      delete query.limit;
    }

    return router.replace(
      {
        pathname: "/",
        query,
      },
      undefined,
      { scroll: false }
    );
  };

  const handleGameType = async (event, gameType) => {
    event.preventDefault();

    handleReset();

    if (gameType?.id) {
      query.game = gameType.id;
    } else {
      delete query.game;
    }

    return router.replace(
      {
        pathname: "/",
        query,
      },
      undefined,
      { scroll: false }
    );
  };

  const handleDateRange = async (dateRange) => {
    handleReset();

    if (dateRange.start) {
      query.start_date_from = dateRange.start;
    } else {
      delete query.start_date_from;
    }

    if (dateRange.end) {
      query.start_date_to = dateRange.end;
    } else {
      delete query.start_date_to;
    }

    return router.replace(
      {
        pathname: "/",
        query,
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <Box
      id="list-container"
      sx={{
        overflowAnchor: "none",
        display: "block",
        scrollMarginTop: 160,
      }}
    >
      <SearchAndFilters
        advanceFilter={
          !!((query?.start_date_from && query?.start_date_to) || query?.query)
        }
        query={query?.query}
        venue={
          venues.find((i) => i.id == query?.venue) || {
            id: "all",
            name: "All",
          }
        }
        venues={venues}
        gameType={
          gameTypes.find((i) => i.id == query?.game) || {
            id: "all",
            name: "All",
          }
        }
        gameTypes={gameTypes}
        limitType={
          limitTypes.find((i) => i.id == query?.limit) || {
            id: "all",
            name: "All",
          }
        }
        limitTypes={limitTypes}
        dateRange={{
          start: query?.start_date_from || null,
          end: query?.start_date_to || null,
        }}
        handlers={{
          venue: handleVenue,
          query: handleQuery,
          limitType: handleLimitType,
          gameType: handleGameType,
          dateRange: handleDateRange,
          routerReset: handleRouterReset,
        }}
      />

      <Box
        sx={{
          borderCollapse: "collapse",
          width: "1",
          overflow: "hidden",
        }}
        component="table"
      >
        <tbody>
          {!!tournaments?.length ? (
            tournaments.map((item, index) => {
              const isLastIndex = tournaments.length - 1 === index;

              const tournament = normalizeTournament({
                tournament: item,
                venues,
                gameTypes,
                limitTypes,
              });

              return (
                <TournamentClickableRow
                  key={tournament.id + "-recently-added-" + index}
                  tournament={tournament}
                  isLastIndex={isLastIndex}
                />
              );
            })
          ) : loading ? (
            <Box
              sx={{
                "& .MuiSkeleton-root": {
                  bgcolor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.background.paper
                      : "grey.900",
                },

                "& .MuiDivider-root": {
                  my: "4px",
                },
              }}
            >
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={87}
              />
              <Divider />
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={87}
              />
              <Divider />
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={87}
              />
              <Divider />
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={87}
              />
              <Divider />
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={87}
              />
            </Box>
          ) : (
            <tr>
              <td colSpan={3}>
                <Box
                  sx={{
                    py: (theme) => theme.typography.pxToRem(20),
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: (theme) => theme.typography.pxToRem(24),
                  }}
                >
                  <SearchOffIcon
                    sx={{
                      fontSize: (theme) => theme.typography.pxToRem(100),
                    }}
                  />

                  <Typography
                    variant="h5"
                    align="center"
                    fontWeight="300"
                  >{`Sorry, We couldn't find any results.`}</Typography>
                </Box>
              </td>
            </tr>
          )}
        </tbody>
      </Box>

      {totalPage > 1 && (
        <Box
          sx={{
            mt: (theme) => theme.typography.pxToRem(24),
          }}
        >
          <Stack spacing={6}>
            <Pagination
              count={totalPage}
              page={page}
              variant="outlined"
              shape="rounded"
              disabled={loading}
              onChange={handlePagination}
              size="large"
            />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Tournaments;
