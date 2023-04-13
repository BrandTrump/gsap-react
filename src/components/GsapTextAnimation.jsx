import gsap from "gsap";
import { useLayoutEffect } from "react";
import "../styles/GsapTextAnimation.scss";
import SplitTextJS from "split-text-js";

const GsapTextAnimation = () => {
  useLayoutEffect(() => {
    const titles = gsap.utils.toArray("p");
    const tl = gsap.timeline();

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1"
      );
    });
  });
  return (
    <div className="text-animation-container">
      <div className="text-wrapper">
        <p>3D / UI / UX</p>
        <p>Motion design</p>
        <p>Interaction design</p>
        <p>Backend / Frontend dev</p>
        <p>Creative web dev</p>
      </div>
    </div>
  );
};

export default GsapTextAnimation;
