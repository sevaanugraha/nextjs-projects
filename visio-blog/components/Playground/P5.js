import React, { useState, useEffect } from "react";
import p5Collection, { pickRandomP5UI, pickUIByP5Id } from "ui/src/p5";

const P5 = ({p5UI}) => {
  const [UI, setUI] = React.useState(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let P5UI = pickUIByP5Id(p5UI || p5Collection.interactions[Math.floor(Math.random() * (2 - 0 + 1))].id);
    setUI(P5UI.Component);

    return () => {
      setUI(null);
    };
  }, [p5UI]);

  useEffect(() => {
    if (start === false) {
      setStart(true);
    }
  }, []);

  if (!start) {
    return null;
  }

  return <UI background={'#000'} />;
};

export default React.memo(P5, () => false);
