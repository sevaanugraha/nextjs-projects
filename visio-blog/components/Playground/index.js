import { useState } from "react";
import AppBar from "./AppBar";
import P5 from "./P5";

const Playground = () => {
    const [p5UI, setP5UI] = useState('');

  return (
    <>
      <AppBar p5UI={p5UI} setP5UI={setP5UI} />
      <P5 p5UI={p5UI} />
    </>
  );
};

export default Playground;
