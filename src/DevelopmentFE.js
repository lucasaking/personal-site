import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Card4 from "./cards/Card4";
import "./Development.css"

function DevelopmentFE() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>

      <h1 className="Development-Title">Software Development</h1>

      <h3 className="Development-Language">Client Technologies</h3>

      <h4 className="Development-Body">Recent work. Click on a picture card to flip it over and show some of the Languages, Libraries and Frameworks being used.</h4>

      <div className="lineBlockStart"></div>

      <div className="Development">

        {/* --PROJECT 1--*/}

        <div className="Development-Window">

          <Card4 />

          <div className="Project-1">

            <div className="VFX-1">

              <span className="Development-span-underline">Weightloss App</span>

              <div className="lineBlockVfx">

              </div>

              <span className="Development-span">Generate a customized meal plan with recipes and macros for each meal, for each day of the week. Returns recipes with the appropriate Macronutrients based on users bodyweight. Using Spoonacular API. (Hackathon- 2 day speed build)</span>

              <a className="Development-Link" href='https://youtu.be/EyN3Nk67VRw' target="_blank" rel="noreferrer">DEMO</a>

            </div>

          </div>

          <div className="lineBlockMid"></div>

          <div className="lineBlockSpecial"></div>

          <div className="lineBlockMid"></div>

          <div className="lineBlockCard"></div>

          <h1 className="content3"><Link className="About-pointer" to="back-end"><b className="Contact-me">BACK-END</b></Link></h1>

          <div className="lineBlockEnd"></div>

        </div>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      {/* <div className="lineBlockMid"></div>

      <div className="lineBlockEnd"></div>

      <div className="lineBlockCard"></div> */}

    </div>
    
  )
}

export default DevelopmentFE;