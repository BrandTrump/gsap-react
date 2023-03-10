import "../styles/TwitchCard.css";
import { useLayoutEffect, useRef } from "react";

const TwitchCard = () => {
  const subtitle = useRef(null);

  useLayoutEffect(() => {
    const createWord = (text, index) => {
      const word = document.createElement("span");

      word.innerHTML = `${text} `;

      word.classList.add("card-subtitle-word");

      word.style.transitionDelay = `${index * 40}ms`;

      return word;
    };

    const addWord = (text, index) =>
      subtitle.current.appendChild(createWord(text, index));

    const createSubtitle = (text) => text.split(" ").map(addWord);

    createSubtitle(
      "But in a much more real sense, I have no idea what I'm doing"
    );
  }, []);
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">I know exactly what I'm doing</h3>
          <h4 className="card-subtitle" ref={subtitle}></h4>
        </div>
      </div>
    </div>
  );
};

export default TwitchCard;
