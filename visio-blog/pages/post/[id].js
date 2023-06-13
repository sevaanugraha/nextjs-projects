import React from "react";
import Head from "next/head";

import { getPostById } from "ssr-pwa/services/api/post";
import Post from "ssr-pwa/components/Post";
import MetaInformation from "ssr-pwa/components/common/MetaInformation";

const metaInformationData = {
  description:
    "Escape into a world of peace and tranquility with our unique visual and musical journey to calmness and positivity.",
  keywords:
    "visual music, calmness, feel good, positivity, relaxation, dynamic, journey, calming music, peaceful visuals",
};

const PostPage = ({ post, nextPost }) => {
  const dynamicMetaInformation = {
    title: post.title,
    socialTitle: post.title,
    socialDescription: post.metaDescription,
    socialThumbnail: post.thumbnailImage[0].link,
  };

  const normalizedPost = { ...post, nextPost };

  return (
    <>
      {process.env.NODE_ENV === "production" ? (
        <MetaInformation {...dynamicMetaInformation} {...metaInformationData} />
      ) : (
        <Head>
          <title>Post</title>
        </Head>
      )}

      <Post data={normalizedPost} />
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context?.params?.id;

  try {
    const result = await getPostById(id);

    return {
      props: {
        post: result.data.data,
        nextPost: result.data.nextPost,
        error: false,
      },
    };
  } catch (e) {
    return {
      props: {
        post: {},
        error: e.message || "unknown api error",
      },
    };
  }
}

export default PostPage;
