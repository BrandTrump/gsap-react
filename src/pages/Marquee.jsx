import { useLayoutEffect } from "react";
import "../styles/Marquee.css";
import gsap from "gsap";
import { horizontalLoop } from "../functions/gsapHorizontalLoop";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Marquee = () => {
  useLayoutEffect(() => {
    const words = gsap.utils.toArray(".word");

    const loop = horizontalLoop(words, {
      repeat: -1,
      speed: 0.5,
      paddingRight: 25,
    });

    loop.play();
  });
  return (
    <>
      <Navbar />
      <div className="marquee-container">
        <div className="marquee-wrapper">
          <h1 className="word">FULL</h1>
          <h1 className="word">STACK</h1>
          <h1 className="word">DEVELOPER</h1>
          <h1 className="word">FULL</h1>
          <h1 className="word">STACK</h1>
          <h1 className="word">DEVELOPER</h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
