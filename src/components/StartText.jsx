import { useLayoutEffect } from "react";
import "../styles/StarText.scss";
import { useRef } from "react";

const StartText = () => {
  const star1 = useRef(null);
  const star2 = useRef(null);
  const star3 = useRef(null);

  useLayoutEffect(() => {
    const total = [star1, star2, star3];
    let index = 0;
    let interval = 1000;

    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (stars) => {
      stars.current.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      stars.current.style.setProperty("--star-top", `${rand(-40, 80)}%`);

      stars.current.style.animation = "none";
      stars.current.offsetHeight;
      stars.current.style.animation = "";
    };

    total.map((stars) => {
      setTimeout(() => {
        animate(stars);

        setInterval(() => animate(stars), 1500);
      }, index++ * (interval / 3));
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          This is cool way to{" "}
          <span className="magic">
            <span className="magic-star" ref={star1}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
            <span className="magic-star" ref={star2}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
            <span className="magic-star" ref={star3}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </span>
            <span className="magic-text">highlight</span>
          </span>{" "}
          text.
        </h1>
      </div>
    </>
  );
};

export default StartText;
