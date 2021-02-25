import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Development.css";
import youtube from "./logos/logo-youtube.png";

function DevelopmentGames() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>

      <h1 className="Development-Title">Game Development</h1>

      <h2 className="Development-Language">Game Design</h2>

      <h4 className="Development-Body">Check out <a href='https://www.youtube.com/channel/UCFlzeS0RCRznKg5faBfuFDQ/playlists' target="_blank" rel="noreferrer"><img src={youtube} className="Development-contentc" alt="unavailable"></img></a> for more.</h4>

      <div className="lineBlockMid"></div>

      <div className="lineBlockTitle"></div>

      {/* <div className="Development"> */}

      {/* --PROJECT 1--*/}

      <div className="Development-Window">

        <div className="Development-Project-Desktop">

          <div className="VFX-1">

            <span className="Development-span">GTA - REBUILD 100% Complete</span>

            <a className="Development-desktop-link" href='https://www.youtube.com/channel/UCFlzeS0RCRznKg5faBfuFDQ/playlists' target="_blank" rel="noreferrer">COMING SOON</a>

          </div>

        </div>

        <div className="lineBlockCard"></div>

        <h1 className="content3"><Link className="About-pointer" to="contact-form"><b className="Contact-me">CONTACT</b></Link></h1>

        <div className="lineBlockEnd"></div>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

    </div>

    // </div>
  )
}

export default DevelopmentGames;