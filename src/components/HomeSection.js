import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HomeSection.css";

function HomeSection() {
  document.body.style.overflow = "hidden";

  let randNumMin = 1;
  let randNumMax = 2;
  let randImg =
    "/images/img-" +
    (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin) +
    ".gif";

  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-img"
          draggable="false"
          src={process.env.PUBLIC_URL + `${randImg}`}
          alt="description"
        ></img>
      </div>
      <div className="home-container">
        <h1>WELCOME TO NECOLAND</h1>
        <p>
          This website is my little project centered around the lovely Neco Arc!
        </p>
        <div className="home-btns">
          <Button
            className="btns"
            path="voice-lines"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            HOW DOES SHE SOUND
          </Button>
          <Button
            path="lore"
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WHO IS SHE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
