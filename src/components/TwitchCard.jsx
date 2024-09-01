import "../styles/TwitchCard.scss";
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

    createSubtitle("This is a beautiful animated card made with React");
  }, []);
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">Twitch Animated Card</h3>
          <h4 className="card-subtitle" ref={subtitle}></h4>
        </div>
      </div>
    </div>
  );
};

export default TwitchCard;
