import React from 'react';
import { Link } from "react-router-dom";
import "./About.css";

function About() {

  return (
    <div className="About">

      <h1 className="content4"><Link className="About-pointer" to="/full-stack"><b className="content4a">PROJECTS</b></Link></h1>

      <h2 className="About-frameworks">Preferred Languages, Libraries, Frameworks</h2>

      <div className="About-constraints">

      </div>

      {/* --UNDER CONSTRUCTION--*/}

      <div className="About-languages">

        <h2 className="About-box">Javascript</h2>

        <h2 className="About-box">Typescript</h2>

        <h2 className="About-box">Node.js</h2>

        <h2 className="About-box">Express.js</h2>

        <h2 className="About-box">React</h2>

        <h2 className="About-box">Redux</h2>

        <h2 className="About-box">Python</h2>

        <h2 className="About-box">Flask</h2>

        <h2 className="About-box">SQL</h2>

        <h2 className="About-box">Postgres</h2>

        <h2 className="About-box">SQL Alchemy</h2>

        <h2 className="About-box">C++</h2>

        <h2 className="About-box">HTML</h2>

        <h2 className="About-box">CSS/Sass</h2>

        <h2 className="About-box">Bootstrap</h2>

        <h2 className="About-box">JQuery</h2>

        <h2 className="About-box">Ajax/Axios</h2>

        <h2 className="About-box">Jasmine</h2>

        <h2 className="About-box">Jest</h2>

        <h2 className="About-box">And more...</h2>

        <div className="About-end"></div>

      </div>

      <p className="About-content"><Link className="About-pointer" to="contact-form"><b className="About-contact">QUESTIONS?</b></Link></p>
    
    </div>
  )
}

export default About;
