import React from 'react';
import { useHistory } from "react-router-dom";
import image1 from "./cards/images/screenshot_01.png";
import image2 from "./cards/images/screenshot_02.png";
import image3 from "./cards/images/screenshot_03.png";
import image4 from "./cards/images/screenshot_00_fe.png";
import image5 from "./cards/images/screenshot_00_wg.png";
import image6 from "./cards/images/screenshot_00.png";
import "./Home.css";

function Home() {

  const history = useHistory();

  return (
    <div>

      <div className="Home">

        {/** Header */}

        <div className="Home-spacing"></div>

        <div className="Home-body">

          <h1 className="Home-title">ABOUT</h1>

          <p>Hello, my name is Lucas King!</p>
          <p>I am a software developer with a passion for programming</p>
          <p>Click on a 3 Dimensional cube to visit a project</p>
          <p>Use the Nav Bar to explore</p>
          <p>I hope you enjoy this React Application!</p>

        </div>

        <div className="Home-spacing2"></div>

        {/** OUTDATED START */}

        {/* <h1 className="content2"><b className="content5" onClick={() => history.push("/contact")}>SCHEDULE MEETING</b></h1> */}

        {/** OUTDATED END */}

        <div className="container" onClick={() => history.push("/full-stack")}>
          <div className="cube">
            <div className="face top">Python</div>
            <div className="face bottom">Flask</div>
            <div className="face left">SQLAlchemy</div>
            <div className="face right">Bootstrap</div>
            <div className="face Zfront">Social Media</div>
            <div className="face Zback"><img src={image6} alt="unavailable" className="Home-image"></img></div>
          </div>
        </div>

        <div className="container" onClick={() => history.push("/front-end")}>
          <div className="cube">
            <div className="face top">React</div>
            <div className="face bottom">Javascript</div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face Zfront">Nutrition App</div>
            <div className="face Zback"><img src={image4} alt="unavailable" className="Home-image"></img></div>
          </div>
        </div>

        <div className="container" onClick={() => history.push("/full-stack")}>
          <div className="cube">
            <div className="face top">React</div>
            <div className="face bottom">Express.js</div>
            <div className="face left">Redux</div>
            <div className="face right">Postgres</div>
            <div className="face Zfront">E-Commerce</div>
            <div className="face Zback"><img src={image2} alt="unavailable" className="Home-image"></img></div>
          </div>
        </div>

        <div className="container" onClick={() => history.push("/web-games")}>
          <div className="cube">
            <div className="face top">React</div>
            <div className="face bottom">Javascript</div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face Zfront">Lights-Out</div>
            <div className="face Zback"><img src={image3} alt="unavailable" className="Home-image"></img></div>
          </div>
        </div>

        <div className="container" onClick={() => history.push("/full-stack")}>
          <div className="cube">
            <div className="face top">Redux</div>
            <div className="face bottom">Javascript</div>
            <div className="face left">Postgres</div>
            <div className="face right">SQL</div>
            <div className="face Zfront">Microblog</div>
            <div className="face Zback"><img src={image1} alt="unavailable" className="Home-image"></img></div>
          </div>
        </div>

        <div className="container" onClick={() => history.push("/web-games")}>
          <div className="cube">
            <div className="face top">React</div>
            <div className="face bottom">Javascript</div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face Zfront">Pokemon Game</div>
            <div className="face Zback"><img src={image5} alt="unavailable" className="Home-image"></img></div>
          </div>
        </div>

        {/** Background Video */}

        {/* <video className="myVideo" height={height} width={width} autoPlay loop muted>

        <source src={sample} type='video/mp4' className="Home-mp4"/>

      </video> */}

        {/** Footer */}

        <h1 className="content"><b className="content6" onClick={() => history.push("/contact")}>CONTACT</b></h1>

        <div className="lineCube"></div>

      </div>

    </div>
  )
}

export default Home;
