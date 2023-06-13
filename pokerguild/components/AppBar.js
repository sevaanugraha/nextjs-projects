import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import MuiLink from "@mui/material/Link";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Drawer from "@mui/material/Drawer";

import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import useTheme from "./hooks/useTheme";
import Logo from "assets/svg/logo.svg";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const CustomAppBar = (props) => {
  const { window } = props;
  const { colorMode } = props;
  const { isDarkMode } = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

      <HideOnScroll {...props}>
        <AppBar component="header">
          <Toolbar>
            <Container maxWidth="lg" sx={{ p: { xs: 0, lg: "16px" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link href="/" passHref>
                  <a>
                    <Logo height="16px" width="160px" />
                  </a>
                </Link>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "24px",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                      gap: "24px",
                    }}
                  >
                    <MuiLink
                      underline="hover"
                      color="textPrimary"
                      variant="subtitle1"
                      href="/news"
                    >
                      ニュース
                    </MuiLink>

                    <MuiLink
                      underline="hover"
                      color="textPrimary"
                      variant="subtitle1"
                      href="/interviews"
                    >
                      インタビュー
                    </MuiLink>

                    <MuiLink
                      underline="hover"
                      color="textPrimary"
                      variant="subtitle1"
                      href="/wpt"
                    >
                      海外イベント
                    </MuiLink>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      size="large"
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={colorMode.toggleColorMode}
                    >
                      {isDarkMode ? (
                        <LightModeRoundedIcon />
                      ) : (
                        <DarkModeOutlinedIcon />
                      )}
                    </IconButton>

                    <IconButton
                      color="primary"
                      sx={{ display: { xs: "flex", md: "none" } }}
                      onClick={handleDrawerToggle}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            borderRadius: "0px",
          },
        }}
      >
        <Box
          onClick={handleDrawerToggle}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            p: 4,
          }}
        >
          <MuiLink
            underline="hover"
            color="textPrimary"
            variant="subtitle1"
            href="/news"
          >
            ニュース
          </MuiLink>

          <MuiLink
            underline="hover"
            color="textPrimary"
            variant="subtitle1"
            href="/interviews"
          >
            インタビュー
          </MuiLink>

          <MuiLink
            underline="hover"
            color="textPrimary"
            variant="subtitle1"
            href="/wpt"
          >
            海外イベント
          </MuiLink>
        </Box>
      </Drawer>
      <Toolbar />
    </React.Fragment>
  );
};

export default CustomAppBar;
