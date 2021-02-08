import React from 'react';
import { useHistory } from "react-router-dom";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card6 from "./cards/Card6";
import "./Development.css";

function Development() {

  const history = useHistory();

  return (
    <div>

      <h1 className="Development-Title">Software Development</h1>

      <h2 className="Development-Language">Full-Stack Engineering</h2>

      <h4 className="Development-Body">Recent work. Click on a picture card to flip it over and show what Languages, Libraries and Frameworks were used.</h4>

      <div className="lineBlockStart"></div>

      <div className="Development">

        {/* --PROJECT 1--*/}

        <div >

          <Card3 />

          <div className="Project-1">

            <span className="Development-span-underline">Social Media</span>

            <span className="Development-span">Speaker Box is social media platform with features akin to facebook and twitter. Create an account, create posts, follow other users, unfollow, like, unlike and much more.</span>

            <a className="Development-Link" href='https://united-twitter-clone.herokuapp.com/' target="_blank">HEROKU DEPLOYMENT</a>

            <span className="Development-span-space"></span>

            <a className="Development-Link" href='https://github.com/lucasaking/warbler' target="_blank">GITHUB</a>

          </div>

        </div>

      </div>

      <div className="lineBlockMid"></div>

      <div className="lineBlockCard"></div>

      {/* --PROJECT 2--*/}

      <div >

        <Card2 />

        <div className="Project-2">

          <div className="VFX-2">

            <span className="Development-span-underline">Microblog</span>

            <span className="Development-span">Update theme by Microblog is a blogging platform. Create blogs, microblogs, comment, upvote/downvote and more.</span>

            <a className="Development-Link" href='https://github.com/lucasaking/cybertech-microblog' target="_blank">GITHUB</a>

          </div>

        </div>

        <div className="lineBlockFix"></div>

      </div>

      <div className="lineBlockMid"></div>

      <div className="lineBlockEnd"></div>

      <div className="lineBlockCard"></div>

      {/* --PROJECT 3--*/}

      <div >

        <Card6 />

        <div className="Project-1">

          <div className="VFX-1">

            <span className="Development-span-underline">E-Commerce</span>

            <span className="Development-span">Similar features/layout to Amazon and a mock styling for demonstration. Using Stripe for purchasing. Fully functioning shopping cart, create an account, login/authorization, store front api, ability to checkout and more.</span>

            <a className="Development-Link" onClick={() => history.push("/contact")}>CONTACT FOR DETAILS</a>

          </div>

        </div>

        <div className="lineBlockEnd"></div>

        <div className="lineBlockCard"></div>

        <h1 className="content3"><a className="About-pointer" ><b className="Contact-me" onClick={() => history.push("/front-end")}>NEXT</b></a></h1>

        <div className="lineBlockEnd"></div>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

    </div>
  )
}

export default Development
