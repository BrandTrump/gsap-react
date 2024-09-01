import { useEffect, useRef } from "react";

import "../styles/MovingBlob.scss";
import HackerText from "./HackerText";

const MovingBlob = () => {
  const blob = useRef(null);

  return (
    <div
      className="blob-container"
      onPointerMove={(event) => {
        const { clientX, clientY } = event;

        blob.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }}
    >
      <div id="blob" ref={blob}></div>
      <div id="blur"></div>
      <HackerText />
    </div>
  );
};

export default MovingBlob;
