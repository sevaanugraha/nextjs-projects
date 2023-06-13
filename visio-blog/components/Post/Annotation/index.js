import React, { useContext } from "react";

import { PostContext } from "ssr-pwa/components/Post/context";
import { MODES } from "ssr-pwa/components/Post/types";
import NextBlog from "ssr-pwa/components/Post/Annotation/NextBlog";
import Content from "ssr-pwa/components/Post/Annotation/Content";

function Annotation() {
  const { state } = useContext(PostContext);
  const mode = state.mode;

  if (mode === MODES.END) {
    return <NextBlog />;
  }

  return (
    <Content />
  );
}

export default Annotation;
