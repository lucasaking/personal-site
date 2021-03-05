import React from 'react';
import { useHistory } from "react-router-dom";
import sample from './backgrounds/videos/mixkit7.mp4';
import "./Home.css";

function Home() {

  const history = useHistory();

  return (
    <div>

      {/** Header */}

      <h1 className="content2"><b className="content5" onClick={() => history.push("/contact")}>SCHEDULE MEETING</b></h1>
      
      {/** Background Video */}

      <video className="myVideo" autoPlay loop muted>

        <source src={sample} type='video/mp4' className="Home-mp4" />

      </video>

      {/** Footer */}

      <h1 className="content"><b className="content6" onClick={() => history.push("/full-stack")}>SOFTWARE ENGINEERING</b></h1>

    </div>
  )
}

export default Home;
