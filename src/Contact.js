import React from 'react';
import { useHistory } from "react-router-dom";
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

      <h1 className="content3"><a className="About-pointer" ><b className="Contact-me" onClick={() => history.push("/about")}>CONTACT</b></a></h1>

      {/* <div className="Contact-break"></div> */}

      <div className="Contact-body">

        <h1 href="www.youtube.com">Interact with me directly<br/><div className="Contact-email">lucasking.developer@gmail.com</div></h1>

        <div className="Contact-resources">

          <img src={linkedin} className="Contact-linkedin"></img>

          <img src={youtube} className="Contact-linkedin"></img>

        </div>

      </div>

      <div className="Contact-github-title">

        <h3>View Samples</h3>

        <h4><img src={portfolio} className="Contact-github-logo" ></img></h4>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      <br></br><br></br><br></br><br></br><br></br>

      {/* --UNDER CONSTRUCTION--*/}

      <div className="Contact-node" ><img src={logo2} /></div>

      <div className="Contact-github-title">

        <h3>More Code on Github</h3>

        <h4><img src={github} className="Contact-github-logo" ></img></h4>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      <br></br>

      {/* --UNDER CONSTRUCTION--*/}
      
    </div>
  )
}

export default Contact
