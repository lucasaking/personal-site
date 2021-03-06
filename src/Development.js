import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card6 from "./cards/Card6";
import "./Development.css";

function Development() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>

      <h1 className="Development-Title">Software Development</h1>

      <h2 className="Development-Language">Full-Stack Engineering</h2>

      <h4 className="Development-Body">Recent work. Click on a picture card to flip it over and show what Languages, Libraries and Frameworks were used.</h4>

      <div className="lineBlockStart"></div>

      <div className="Development">

        {/* --PROJECT 1--*/}

        <div className="Development-Window">

          <Card3 />

          <div className="Project-1">

            <span className="Development-span-underline">Social Media</span>

            <span className="Development-span">Speaker Box is social media platform with features akin to facebook and twitter. Create an account, create posts, follow other users, unfollow, like button, dislike button, listen to spotify while browsing your news feed and more.</span>

            <a className="Development-Link" href='https://united-twitter-clone.herokuapp.com/' target="_blank" rel="noreferrer">HEROKU</a>

            <span className="Development-span-space"></span>

            <a className="Development-Link" href='https://github.com/lucasaking/speakerbox-fullstack' target="_blank" rel="noreferrer">GITHUB</a>

          </div>

        </div>

      </div>

      <div className="lineBlockMid"></div>

      <div className="lineBlockCard"></div>

      {/* --PROJECT 2--*/}

      <div className="Development-Window">

        <Card2 />

        <div className="Project-2">

          <div className="VFX-2">

            <span className="Development-span-underline">Microblog</span>

            <span className="Development-span">Microblog is a personal blogging and social media platform. Available in 2 visual style themes. Create blogs, microblog, comment, upvote/downvote and more.</span>

            <a className="Development-Link" href='https://github.com/lucasaking/cybertech-microblog' target="_blank" rel="noreferrer">GITHUB</a>

          </div>

        </div>

      </div>

      <div className="lineBlockMid"></div>

      <div className="lineBlockEnd"></div>

      <div className="lineBlockCard"></div>

      {/* --PROJECT 3--*/}

      <div className="Development-Window">

        <Card6 />

        <div className="Project-1">

          <div className="VFX-1">

            <span className="Development-span-underline">E-Commerce</span>

            <span className="Development-span">Similar features/layout to Amazon and using a mock styling for demonstration. Intuitive shopping cart functionality. Checkout using stripe for purchases. Create an account, login/authorization, store front api and more.</span>

            <a className="Development-Link" href='https://www.youtube.com/watch?v=bVoePbfV-4Y&list=PLSFU-aws5idp8pcSfTDLhJNsntvQf-0JP&index=3' target="_blank" rel="noreferrer">DEMO</a>

          </div>

        </div>

        <div className="lineBlockEnd"></div>

        <div className="lineBlockSpace"></div>

        <div className="lineBlockMid"></div>

        <div className="lineBlockCard"></div>

        <h1 className="content3"><Link className="About-pointer" to="front-end"><b className="Contact-me">FRONT-END</b></Link></h1>

        <div className="lineBlockEnd"></div> 

      </div>

      {/* --UNDER CONSTRUCTION--*/}

    </div>
  )
}

export default Development;
