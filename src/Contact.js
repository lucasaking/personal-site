import React from 'react';
import { Link, useHistory } from "react-router-dom";
import logo2 from "./logos/logo-node.svg";
import portfolio from "./logos/portfoliofinal.png";
import github from "./logos/github-large.png";
import linkedin from "./logos/linkedin.png";
import youtube from "./logos/logo-youtube.png";
import "./Contact.css";

function Contact() {

  const history = useHistory();

  return (
    <div className="Contact">

      {/* <h1 className="content3"><Link className="About-pointer" to="contact-form"><b className="Contact-me">MESSAGE ME</b></Link></h1> */}

      <div className="Contact-body">
        
        <div className="Contact-email" onClick={() => history.push("/contact-form")}>SEND MESSAGE</div>

        <div className="Contact-resources">

          <a href='https://www.linkedin.com/in/lucas-a-king/' target="_blank" rel="noreferrer"><img src={linkedin} className="Contact-linkedin" alt="unavailable"></img></a>

          <a href='https://www.youtube.com/playlist?list=PLSFU-aws5idp8pcSfTDLhJNsntvQf-0JP' target="_blank" rel="noreferrer"><img src={youtube} className="Contact-linkedin" alt="unavailable"></img></a>

          <div className="lineBlock"></div>

          <div className="Contact-samples" onClick={() => history.push("/full-stack")}>VIEW SAMPLES</div>

        </div>

      </div>

      <div className="Contact-github-title">

      </div>

      <div className="Contact-node" ><img src={logo2} alt="unavailable"/></div>

      <div className="Contact-github-title">

        <h3>MORE CODE ON GITHUB</h3>

        <a href='https://github.com/lucasaking' target="_blank" rel="noreferrer"><h4><img src={github} className="Contact-github-logo" alt="unavailable"></img></h4></a>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      <br></br><br></br><br></br>

      {/* --UNDER CONSTRUCTION--*/}
      
    </div>
  )
}

export default Contact
