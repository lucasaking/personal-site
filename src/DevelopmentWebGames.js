import React from "react";
import { useHistory } from "react-router-dom";
import Card from "./cards/Card";
import Card5 from "./cards/Card5";
import "./Development.css";

function DevelopmentWebGames() {

  const history = useHistory();

  return (
    <div>

      <h1 className="Development-Title">Game Development</h1>

      <h2 className="Development-Language">Web Development Games</h2>

      <h4 className="Development-Body">Check out Github for more!</h4>

      <div className="lineBlockStart"></div>

      <div className="Development">

        {/* --PROJECT 1--*/}

        <div >

          <Card5 />

          <div className="Project-1">

            <div className="VFX-1">

              <span className="Development-span-underline">Pokemon Web Adventures</span>

              <span className="Development-span">A React Pokemon game based on original gameboy game. Choose from 4 starter Pokemon, with the option to choose a random Holographic version of the 4. Search for wild pokemon, catch/collect pokemon, level up your pokemon, level up your trainer. Choose up to 6 of your pokemon to bring into battle with you. Programmed with an intuitive enemy A.I battle system. Visual battle effects using post processing and much more.  </span>

              <a className="Development-Link" href='https://www.youtube.com' target="_blank">TECH-DEMO</a>

            </div>

          </div>

        </div>

        <div className="lineBlockEnd"></div>


        <div className="lineBlockCard"></div>

        {/* --PROJECT 2--*/}

        <div >

          <Card />

          <div className="Project-2">

            <div className="VFX-2">

              <span className="Development-span-underline">Lights-Out</span>

              <span className="Development-span">The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible.</span>

              <a className="Development-Link" href='https://www.youtube.com' target="_blank">GITHUB</a>

            </div>

          </div>

          <div className="lineBlockMid"></div>

          <div className="lineBlockCard"></div>

          <h1 className="content3"><a className="About-pointer" ><b className="Contact-me" onClick={() => history.push("/games")}>NEXT</b></a></h1>

          <div className="lineBlockEnd"></div>

        </div>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

    </div>
  )
}

export default DevelopmentWebGames;