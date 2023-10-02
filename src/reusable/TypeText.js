import Typewriter from "typewriter-effect";
import React from "react";
import "../App.css";

function Text({text, loop, delay}) {
  return (
    <Typewriter
      className="type-writer"
      options={{
        strings: text,
        autoStart: true,
        loop: loop,
        delay: delay,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Text;
