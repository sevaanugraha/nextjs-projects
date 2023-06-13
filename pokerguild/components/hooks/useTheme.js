import useTheme from "@mui/material/styles/useTheme";

export default function useThemeCustom() {
  const theme = useTheme();

  return {
    ...theme,
    isDarkMode: theme.palette.mode === 'dark'
  };
}
