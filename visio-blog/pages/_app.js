import "keen-slider/keen-slider.min.css";
import "ssr-pwa/styles/globals.css";
import NextNProgress from "nextjs-progressbar";

import useDarkMode, { ThemeContext } from "ui/src/hooks/useDarkMode";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setTheme] = useDarkMode("dark");

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setTheme,
      }}
    >
      <NextNProgress color="#3B82F6" />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
