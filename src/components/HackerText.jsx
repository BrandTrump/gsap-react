import "../styles/HackerText.scss";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const HackerText = () => {
  return (
    <div className="hacker-container">
      <h1
        data-value="HACKERTEXT"
        onMouseOver={(event) => {
          let iterations = 0;

          clearInterval(interval);
          interval = setInterval(() => {
            event.target.innerText = event.target.innerText
              .split("")
              .map((letter, index) => {
                if (index < iterations) {
                  return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");
            if (iterations >= event.target.dataset.value.length)
              clearInterval(interval);
            iterations += 1 / 3;
          }, 30);
        }}
      >
        HACKERTEXT
      </h1>
    </div>
  );
};

export default HackerText;
