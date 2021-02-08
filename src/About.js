import React from 'react';
import { useHistory } from "react-router-dom";
import "./About.css";

function About() {

  const history = useHistory();

  return (
    <div className="About">

      <h1 className="content4"><a className="About-pointer" onClick={() => history.push("/full-stack")}><b className="content4a">DEVELOPMENT</b></a></h1>

      <h2>Preferred Languages, Libraries, Frameworks</h2>

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

      <p className="About-content"><a className="About-pointer" onClick={() => history.push("/contact")}><b className="About-contact">QUESTIONS?</b></a></p>
    
    </div>
  )
}

export default About;
