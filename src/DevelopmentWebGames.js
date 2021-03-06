import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Card from "./cards/Card";
import Card5 from "./cards/Card5";
import github from "./logos/github-large.png";
import "./Development.css";

function DevelopmentWebGames() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>

      <h1 className="Development-Title">Game Development</h1>

      <h2 className="Development-Language">Web Development Games</h2>

      <h4 className="Development-Body">Check out <a href='https://github.com/lucasaking' target="_blank" rel="noreferrer"><img src={github} className="Development-contentb" alt="unavailable"></img></a> for more!</h4>

      <div className="lineBlockStart"></div>

      <div className="Development">

        {/* --PROJECT 1--*/}

        <div className="Development-Window">

          <Card5 />

          <div className="Project-1">

            <div className="VFX-1">

              <span className="Development-span-underline">Pokemon Web Adventures</span>

              <span className="Development-span">Catch/collect & level up your pokemon. Level up your trainer. Choose up to 6 of your pokemon to bring into battle with you. Programmed with an intuitive enemy A.I battle system. WEBGL, post processing and more.</span>

              <a className="Development-Link" href='https://youtu.be/ZTgHRw7ms7Y' target="_blank" rel="noreferrer">DEMO</a>
      
            </div>

          </div>

          <div className="lineBlockFix"></div>

        </div>

        <div className="lineBlockMid"></div>

        <div className="lineBlockMid"></div>

        <div className="lineBlockCard"></div>

        {/* --PROJECT 2--*/}

        <div className="Development-Window">

          <Card />

          <div className="Project-2">

            <div className="VFX-2">

              <span className="Development-span-underline">Lights-Out</span>

              <span className="Development-span">When the game starts, a random number or a stored pattern of lights are switched on. Pressing any of the lights will toggle it and the adjacent lights. Switch all the lights off in as few button presses as possible!</span>

              <a className="Development-Link" href='https://github.com/lucasaking/games-lights-out' target="_blank" rel="noreferrer">GITHUB</a>

            </div>

          </div>

          <div className="lineBlockMid"></div>

          <div className="lineBlockMid"></div>

          <div className="lineBlockCard"></div>

          <h1 className="content3"><Link className="About-pointer" to="/games"><b className="Contact-me">DESKTOP GAMES</b></Link></h1>

          <div className="lineBlockEnd"></div>

        </div>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

    </div>
  )
}

export default DevelopmentWebGames;