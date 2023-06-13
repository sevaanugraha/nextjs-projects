import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="js-focus-visible h-full bg-gray-50 antialiased">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/infoGPT-icon.ico" />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
