import React from "react";

import MuiLink from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const ShareButtons = () => {
  let url;
  const dummyURL = "https://pokerguild.jp/";

  if (typeof window !== "undefined") {
    url = window.location.href;
  }

  return (
    <Paper
      sx={{
        px: (theme) => theme.typography.pxToRem(32),
        py: (theme) => theme.typography.pxToRem(44),

        "& .MuiBox-root": {
          display: "flex",
          gap: "15px",
          alignItems: "center",

          "& .MuiButton-root": {
            borderRadius: "12px",
            color: "primary.contrastText",

            "& svg": {
              color: "primary.contrastText",
              mr: (theme) => theme.typography.pxToRem(4),
            },
          },
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          wordBreak: "break-all",
          fontWeight: (theme) => theme.typography.fontWeightBold,
          mb: (theme) => theme.typography.pxToRem(12),
        }}
      >
        シェア：
      </Typography>

      <Box>
        <Button
          href="https://www.facebook.com/people/%E3%83%9D%E3%83%BC%E3%82%AB%E3%83%BC%E3%82%AE%E3%83%AB%E3%83%89/100069969303092/"
          target="_blank"
          variant="contained"
        >
          <ThumbUpAltIcon /> いいね！
        </Button>

        <Button
          href={`https://www.facebook.com/sharer/sharer.php?u=${dummyURL}`}
          target="_blank"
          variant="contained"
        >
          シェアする
        </Button>

        <MuiLink
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?url=${url}`}
          target="_blank"
          sx={{ color: "primary.main" }}
        >
          Tweet
        </MuiLink>
      </Box>
    </Paper>
  );
};

export default ShareButtons;
