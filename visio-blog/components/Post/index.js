import React from "react";

import { PostContext, usePost } from "ssr-pwa/components/Post/context";
import AppBar from "ssr-pwa/components/Post/AppBar";
import P5 from 'ssr-pwa/components/Post/P5';
import Annotation from "ssr-pwa/components/Post/Annotation";
import Controls from "ssr-pwa/components/Post/Controls";
import Sound from "ssr-pwa/components/Post/Sound";

function Post({ data }) {
  const value = usePost({ data });

  return (
    <PostContext.Provider value={value}>
      <P5 />
      <Annotation />
      <Controls />
      <AppBar />
      <Sound />
    </PostContext.Provider>
  );
}

export default Post;
