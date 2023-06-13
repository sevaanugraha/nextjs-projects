import Head from "next/head";

function MetaInformation({
  title,
  description,
  keywords,
  author,
  robots,
  socialTitle,
  socialDescription,
  socialThumbnail,
  socialUrl,
}) {
  return (
    <Head>
      <title>{title}</title>

      {!!description && <meta name="description" content={description} />}

      {!!keywords && <meta name="keywords" content={keywords} />}

      {!!author && <meta name="author" content={author} />}

      <meta name="robots" content={robots || "index, follow"} />

      {!!socialTitle && (
        <>
          <meta property="og:title" content={socialTitle} />
          <meta name="twitter:title" content={socialTitle} />
        </>
      )}

      {!!socialDescription && (
        <>
          <meta property="og:description" content={socialDescription} />
          <meta name="twitter:description" content={socialDescription} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}

      {!!socialThumbnail && (
        <>
          <meta property="og:image" content={socialThumbnail} />
          <meta property="twitter:image" content={socialThumbnail} />
        </>
      )}

      {!!socialUrl && <meta property="og:url" content={socialUrl} />}
    </Head>
  );
}

export default MetaInformation;
