import React, { useState, useContext, useEffect } from "react";
import { pickRandomP5UI, pickUIByP5Id } from "ui/src/p5";
import { MODES } from "ssr-pwa/components/Post/types";
import { PostContext } from "ssr-pwa/components/Post/context";

const P5 = () => {
  const [UI, setUI] = React.useState(null);
  const [start, setStart] = useState(false);
  const { state, bgColor, p5ui } = useContext(PostContext);

  useEffect(() => {
    let P5UI = pickUIByP5Id(p5ui);

    if (!P5UI) {
      P5UI = pickRandomP5UI();
    }

    setUI(P5UI.Component);

    return () => {
      setUI(null);
    };
  }, []);

  useEffect(() => {
    if (state.mode === MODES.PLAY && start === false) {
      setStart(true);
    }
  }, [state.mode]);

  if (!start) {
    return null;
  }

  return <UI background={bgColor} autoInteraction={true} sound={state.sound} />;
};

export default React.memo(P5, () => false);
