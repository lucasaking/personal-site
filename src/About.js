import React from 'react';
import { Link } from "react-router-dom";
import "./About.css";

function About() {

  return (
    <div className="About">

      <h1 className="content4">

        <Link className="About-pointer" to="/full-stack"><b className="content4a">PORTFOLIO</b></Link>

      </h1>

      <h2 className="About-frameworks">Preferred Languages, Libraries, Frameworks</h2>

      <div className="About-constraints">

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      <div className="About-languages">

        <h2 className="About-box">JAVASCRIPT</h2>

        <h2 className="About-box">TYPESCRIPT</h2>

        <h2 className="About-box">NODE.JS</h2>

        <h2 className="About-box">EXPRESS.JS</h2>

        <h2 className="About-box">REACT</h2>

        <h2 className="About-box">REDUX</h2>

        <h2 className="About-box">PYTHON</h2>

        <h2 className="About-box">FLASK</h2>

        <h2 className="About-box">SQL</h2>

        <h2 className="About-box">POSTGRES</h2>

        <h2 className="About-box">SQL ALCHEMY</h2>

        <h2 className="About-box">C++</h2>

        <h2 className="About-box">HTML</h2>

        <h2 className="About-box">CSS/SASS</h2>

        <h2 className="About-box">BOOTSTRAP</h2>

        <h2 className="About-box">JQUERY</h2>

        <h2 className="About-box">AJAX/AXIOS</h2>

        <h2 className="About-box">JASMINE</h2>

        <h2 className="About-box">JEST</h2>

        <h2 className="About-box">AND MORE...</h2>

        <div className="About-end"></div>

      </div>

      <div className="lineBlock"></div>

      <p className="About-content"><Link className="About-pointer" to="contact-form"><b className="About-contact">QUESTIONS?</b></Link></p>

    </div>
  )
}

export default About;
