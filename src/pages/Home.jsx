import gsap from "gsap";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import SplitType from "split-type";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  useLayoutEffect(() => {
    const myText = new SplitType("#my-text");

    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  });

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="links"></div>

        <header>
          <h1 id="my-text">Brandon.Trump</h1>
        </header>
      </div>
    </>
  );
};

export default Home;
