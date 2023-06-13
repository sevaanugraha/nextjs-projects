import React from "react";
import Router from "next/router";
import useSWR from "swr";
import NProgress from "nprogress";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import "styles/globals.css";
import "nprogress/nprogress.css";

import AppBar from "components/AppBar";

import {
  fetchGameTypes,
  fetchLimitTypes,
  fetchVenues,
} from "components/common/Tournaments";
import * as normalization from "utils/normalization";
import { Footer } from "components/footer/Footer";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const getDesignTokens = (mode) => {
  const isDarkMode = mode === "dark";

  return {
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightBold: 600,
      fontWeightMedium: 500,

      h5: {
        fontWeight: 500,
      },
    },

    palette: {
      mode,
      ...(isDarkMode
        ? {
            common: {
              black: "#01010F",
            },

            background: {
              default: "#1E1E1E",
              paper: "#323546",
            },
          }
        : {
            common: {
              black: "#01010F",
            },

            background: {
              default: "#fcfdff",
              paper: "rgb(255, 255, 255)",
            },
          }),
    },

    mixins: {
      toolbar: {
        minHeight: 74,

        "@media (min-width:600px)": {
          minHeight: 74,
        },
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "unset",
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: isDarkMode
              ? theme.palette.common.black
              : theme.palette.background.paper,
            backgroundImage: "unset",
            borderRadius: 0,
            boxShadow: "none !important",
            border: isDarkMode ? "none" : "1px solid " + theme.palette.divider,
          }),
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 16,
            backgroundImage: "unset",
            boxShadow:
              "rgb(88 102 126 / 8%) 0px 4px 24px, rgb(88 102 126 / 12%) 0px 1px 2px !important",
            // border: isDarkMode ? 'none' : '1px solid ' + theme.palette.primary.main,
          }),
        },
      },

      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: "8px 24px",
            borderRadius: 10,
            backgroundColor: theme.palette.background.paper + " !important",
          }),

          input: {
            padding: 0,
          },
        },
      },
    },
  };
};

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState("light");
  const hasWindow = React.useRef(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      hasWindow.current = true;
      // Client-side-only code

      setMode(window.localStorage.getItem("mode") || "light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const mode = prevMode === "light" ? "dark" : "light";
          hasWindow && window.localStorage.setItem("mode", mode);
          return mode;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const { data: resultVenues } = useSWR(
    "https://pokerguild.jp/clients/tournaments/api/venues",
    fetchVenues,
    {
      revalidateOnFocus: false,
    }
  );
  const { data: resultGameTypes } = useSWR(
    "https://pokerguild.jp/clients/tournaments/api/game-types",
    fetchGameTypes,
    {
      revalidateOnFocus: false,
    }
  );
  const { data: resultLimitTypes } = useSWR(
    "https://pokerguild.jp/clients/tournaments/api/limit-types",
    fetchLimitTypes,
    {
      revalidateOnFocus: false,
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar colorMode={colorMode} />

      <Container
        maxWidth="lg"
        sx={{
          py: (theme) => ({
            xs: theme.typography.pxToRem(24),
            sm: theme.typography.pxToRem(40),
          }),
        }}
      >
        <Component
          {...pageProps}
          venues={normalization.getVenues(resultVenues?.data || [])}
          gameTypes={normalization.getGameTypes(resultGameTypes?.data || [])}
          limitTypes={normalization.getLimitTypes(resultLimitTypes?.data || [])}
        />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
