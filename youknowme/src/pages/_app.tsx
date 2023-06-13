import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Footer } from '@/components/Footer.jsx';
import { Header } from '@/components/Header.jsx';
import '@root/i18n';
import 'focus-visible';
import '../styles/globals.css';
import { environmentVariables } from '@/utility/constants';

interface IAppProps extends AppProps {
  Component: any;
}

export default function App({ Component, pageProps }: IAppProps) {
  return (
    <>
      <Head>
        {/* Basic SEO meta tags */}
        <title>YouKnowMe - Personalized AI Chatbots Powered by ChatGPT</title>
        <meta
          name="description"
          content="Unleash the power of AI with YouKnowMe. Create your own personalized chatbot trained on your unique content. Enhance user engagement, automate responses, and provide 24/7 support on your website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Add other SEO-related meta tags as needed */}
        <meta property="og:image" content="/SE0-InfoGPT-logo.png" />
      </Head>

      {Component?.loadInternalScript !== false ? (
        <>
          <script src="https://sdk.youknowme.xyz"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: ` 
                const chatbot = new ChatBot();
                chatbot.register('sk_95faa02eccb8a0e8eba8e5769dc20a3a')
              `,
            }}
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJ3XJ9RCFP"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: ` 
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-KJ3XJ9RCFP');
              `,
            }}
          />
        </>
      ) : null}

      {!Component.hideHeader ? <Header /> : null}

      <Component {...pageProps} />

      {!Component.hideFooter ? <Footer /> : null}
    </>
  );
}
