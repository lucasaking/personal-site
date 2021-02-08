import React from "react";
import { useHistory } from "react-router-dom";
import "./Development.css";
import youtube from "./logos/logo-youtube.png";

function DevelopmentGames() {

  const history = useHistory();

  return (
    <div>

      <h1 className="Development-Title">Game Development</h1>

      <h2 className="Development-Language">Game Design</h2>

      <h4 className="Development-Body">Check out <img src={youtube} className="Development-youtube"></img> for more.</h4>

      <div className="lineBlockMid"></div>

      <div className="lineBlockTitle"></div>

      {/* <div className="Development"> */}

      {/* --PROJECT 1--*/}

      <div >

        <div className="Development-Project-Desktop">

          <div className="VFX-1">

            <span className="Development-span">GTA - Rebuild</span>

            <a className="Development-desktop-link" href='https://www.youtube.com/' target="_blank">VIDEO DEMO</a>

          </div>

        </div>

        <div className="lineBlockCard"></div>

        <h1 className="content3"><a className="About-pointer" ><b className="Contact-me" onClick={() => history.push("/contact")}>CONTACT</b></a></h1>

        <div className="lineBlockEnd"></div>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

    </div>

    // </div>
  )
}

export default DevelopmentGames;