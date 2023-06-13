import React, { useRef, useContext, useState, useEffect } from "react";

import { PostContext } from "ssr-pwa/components/Post/context";
import { Container } from "ssr-pwa/components/Post/Annotation/Container";
import Animation from "ssr-pwa/components/Post/Annotation/Content/Animation";

const AnnotationsContentByBox = () => {
  const { state, annotationsAnimation } = useContext(PostContext);
  const currentAnnotation = state.currentAnnotation;

  if (!currentAnnotation?.content) {
    return null;
  }


  return (
    <Container textAlign='center' alignItems='center'>
      <Animation
        content={currentAnnotation.content}
        displayLimit={currentAnnotation.displayLimit}
        animation={annotationsAnimation}
      />
    </Container>
  );
};

const AnnotationsContentInBox = () => {
  const firstRender = useRef(true);
  const { state, annotationsAnimation, handlers } = useContext(PostContext);
  const [contents, setContents] = useState([]);
  const currentAnnotation = state.currentAnnotation;

  useEffect(() => {
    firstRender.current = false;

    return () => {
      setContents([]);
    };
  }, []);

  useEffect(() => {
    if (firstRender.current === false) {
      setContents((value) => [...value, currentAnnotation]);
    }
  }, [currentAnnotation]);

  if (!currentAnnotation) {
    return null;
  }

  const onAnimationEnd = () => handlers.forward();

  return (
    <Container dense={true} textAlign="left" alignItems="left">
      <div>
        {contents.map(({ content, displayLimit }, index) => {
          return (
            <Animation
              key={`annotation-${index}`}
              content={content}
              displayLimit={displayLimit}
              animation={annotationsAnimation}
              handlers={{
                onEnd: onAnimationEnd,
              }}
            />
          );
        })}
      </div>
    </Container>
  );
};

const Content = () => {
  const { state, annotationsContentByBox } = useContext(PostContext);

  if (state.loading) {
    return null;
  }

  // this will show each annotation content by boxes
  if (annotationsContentByBox) {
    return <AnnotationsContentByBox />;
  }

  // this will show all annotation content in single box
  return <AnnotationsContentInBox />;
};

export default Content;
