import * as React from "react";

import Link from "next/link";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Logo from "assets/svg/logo.svg";

export const Footer = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          background: "#4a5058",
          position: 'relative'
        }}
      >
        <Container>
          <Box
            sx={{
              padding: "30px 0",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: 'wrap',
              gap: '4rem',

              '& > *': {
                maxWidth: {md: `calc(100% / 3.5)`},
                flex: '1 auto'
              }
            }}
          >
            <Box
              sx={{
                wordBreak: 'break-word'
              }}
            >
              <Typography variant="body1" color="white" fontWeight="600">
                ポーカーギルドは、国内の最新ライブポーカートーナメント情報をお届けすると共に、
                ポーカースポットの活性化やプレイヤー達の更なる交流を促進しているサイトです。
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="body1" color="white" fontWeight="600">
                ゲーム
              </Typography>

              <Link href="/rules" passHref>
                <MuiLink underline="hover" color="white" variant="subtitle1">
                  テキサスホールデム
                </MuiLink>
              </Link>

              <Link href="/beginner" passHref>
                <MuiLink underline="hover" color="white" variant="subtitle1">
                  ポーカー入門編
                </MuiLink>
              </Link>

              <Link href="/tda" passHref>
                <MuiLink underline="hover" color="white" variant="subtitle1">
                  TDAルール
                </MuiLink>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography variant="body1" color="white" fontWeight="600">
                企業情報
              </Typography>

              <Link href="/company" passHref>
                <MuiLink underline="hover" color="white" variant="subtitle1">
                  運営会社について
                </MuiLink>
              </Link>

              <Link href="/agreement" passHref>
                <MuiLink underline="hover" color="white" variant="subtitle1">
                  ポーカーギルド加盟店規約
                </MuiLink>
              </Link>

              <Link href="/privacy-policy" passHref>
                <MuiLink underline="hover" color="white" variant="subtitle1">
                  プライバシーポリシー
                </MuiLink>
              </Link>

              <Link href="/faq" passHref>
                <MuiLink underline="hover" color="white" variant="subtitle1">
                  よくあるご質問
                </MuiLink>
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              padding: "30px",
            }}
          >
            <KeyboardArrowUpIcon
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              fontSize="large"
              sx={{
                ml: "auto",
                bgcolor: "#c8cacd",
                borderRadius: "50%",
                border: "1px solid primary",
                color: "black",
                cursor: "pointer",
                "&:hover": {
                  "&": {
                    bgcolor: "white",
                  },
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          maxWidth: "100%",
          height: "160px",
          background: "#2c3138",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color={"#76777f"} marginBottom={"6px"}>
          © {new Date().getFullYear()} PokerGuild.jp
        </Typography>
        <Link href="/" passHref>
          <a>
            <Logo height="30px" width="270px" />
          </a>
        </Link>
      </Box>
    </React.Fragment>
  );
};
