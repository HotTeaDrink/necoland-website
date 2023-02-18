import React from "react";
import SoundList from "./SoundList";
import CardItem from "./CardItem";
import "./VoiceLinesSection.css";

function VoiceLinesSection() {
  let isPlaying = false;
  let previousAudio;

  function play(id) {
    var audio = document.getElementById(id);

    if (isPlaying === false) {
      audio.play();
      isPlaying = true;
      setTimeout(() => {
        isPlaying = false;
      }, audio.duration * 1000);
    }
    //if trying to play a new sound, stop the previous one
    else if (previousAudio !== undefined && previousAudio !== audio) {
      previousAudio.pause();
      previousAudio.currentTime = 0;
      audio.play();
      isPlaying = true;
      setTimeout(() => {
        isPlaying = false;
      }, audio.duration * 1000);
    }
    previousAudio = audio;
  }

  setTimeout(() => {
    function importAll(r) {
      return r.keys().map(r);
    }

    let audioCount = 0;
    const elements = document.getElementsByTagName("audio");

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].tagName === "AUDIO") {
        audioCount++;
      }
    }

    for (let i = 1; i <= audioCount; i++) {
      document.getElementById(i).addEventListener("click", () => {
        play("audio" + i);
      });
    }
  }, 500);

  document.body.style.overflow = "auto";
  return (
    <div id="cards" className="cards">
      <h1>Here are all of Neco Arc amazing Voice Lines !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <SoundList />
        </div>
      </div>
    </div>
  );
}

export default VoiceLinesSection;
