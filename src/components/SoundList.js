import React, { useState } from "react";
import CardItem from "./CardItem";

function importAll(r) {
  return r.keys().map(r);
}

function SoundList() {
  const [iterationForEach, setIterationForEach] = useState(1);
  const sounds = importAll(require.context("../sounds", false, /\.(wav)$/));

  let randNumMin = 1;
  let randNumMax = 0;
  importAll(require.context("../../public/images", false, /\.(gif)$/)).forEach(
    (file) => {
      randNumMax++;
    }
  );

  const renderCardList = () => {
    const cardList = [];
    for (let i = 0; i < sounds.length; i += 3) {
      const cards = [];
      for (let j = i; j < i + 3 && j < sounds.length; j++) {
        let randImg =
          "/images/img-" +
          (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) +
            randNumMin) +
          ".gif";
        const file = sounds[j];
        const card = (
          <CardItem
            src={process.env.PUBLIC_URL + `${randImg}`}
            id={iterationForEach + j}
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            label="Mystery"
          />
        );
        const audioTag = (
          <audio id={`audio${iterationForEach + j}`}>
            <source src={file} />
          </audio>
        );
        cards.push(card);
        cards.push(audioTag);
      }
      const cardListElement = <ul className="cards__items">{cards}</ul>;
      cardList.push(cardListElement);
    }
    return cardList;
  };

  return <div id="cards__items">{renderCardList()}</div>;
}

export default SoundList;
