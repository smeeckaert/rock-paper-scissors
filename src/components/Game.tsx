import React, { Component } from "react";

import InputBox from "./InputBox";
import Commands from "./Commands";
import Player from "./Player";

import backgroundImage from "../assets/background.jpg";

class Game extends Component {
  render() {
    return (
      <main className="game">
        <div className="image__wrapper">
          <img src={backgroundImage} alt="background wallpaper" />
        </div>
        <div className="title__wrapper">
          <h1 className="flex__title">
            <div>
              ROCK
              <span role="img" aria-label="rock hand">
                ✊
              </span>
            </div>
            <div>
              PAPER
              <span role="img" aria-label="paper hand">
                ✋
              </span>
            </div>
            <div>
              SCISSORS
              <span role="img" aria-label="scissors hand">
                ✌️
              </span>
            </div>
          </h1>
        </div>
        <InputBox />
        <Commands />
        <Player />
      </main>
    );
  }
}
export default Game;
