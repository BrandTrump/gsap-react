import gsap from "gsap";
import { useLayoutEffect } from "react";
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
        <header>
          <h1 id="my-text">Brandon.Trump</h1>
          <iframe
            src="https://my.spline.design/untitled-f3a2af52e6facd3d95b6e3c6386cfb6b/"
            frameborder="0"
          ></iframe>
        </header>
      </div>
    </>
  );
};

export default Home;
