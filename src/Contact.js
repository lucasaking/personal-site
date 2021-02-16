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

      <h1 className="content3"><Link className="About-pointer" to="contact-form"><b className="Contact-me">MESSAGE ME</b></Link></h1>

      {/* <div className="Contact-break"></div> */}

      <div className="Contact-body">

        <h1>Interact with me directly</h1><br/>
        
        <div className="Contact-email" onClick={() => history.push("/contact-form")}>lucasking.developer@gmail</div>

        <div className="Contact-resources">

          <a href='https://www.linkedin.com/in/lucas-a-king/' target="_blank" rel="noreferrer"><img src={linkedin} className="Contact-linkedin" alt="unavailable"></img></a>

          <a href='https://www.youtube.com/playlist?list=PLSFU-aws5idp8pcSfTDLhJNsntvQf-0JP' target="_blank" rel="noreferrer"><img src={youtube} className="Contact-linkedin" alt="unavailable"></img></a>

        </div>

      </div>

      <div className="Contact-github-title">

        <div className="Contact-samples" onClick={() => history.push("/full-stack")}>SAMPLES</div>

        <Link to="full-stack"><h4><img src={portfolio} className="Contact-github-logo" alt="unavailable"></img></h4></Link>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      <br></br><br></br><br></br><br></br><br></br>

      {/* --UNDER CONSTRUCTION--*/}

      <div className="Contact-node" ><img src={logo2} alt="unavailable"/></div>

      <div className="Contact-github-title">

        <h3>More Code on Github</h3>

        <a href='https://github.com/lucasaking' target="_blank" rel="noreferrer"><h4><img src={github} className="Contact-github-logo" alt="unavailable"></img></h4></a>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      <br></br>

      {/* --UNDER CONSTRUCTION--*/}
      
    </div>
  )
}

export default Contact
