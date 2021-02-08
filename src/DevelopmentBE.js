import React from 'react'
import { useHistory } from "react-router-dom";
import "./Development.css";

function DevelopmentBE() {

  const history = useHistory();

  return (
    <div>

      <h1 className="Development-Title">Software Development</h1>

      <h2 className="Development-Language">Server Technologies</h2>

      <h4 className="Development-Body">Security, Database, Server & API building. Test Coverage.</h4>

      <div className="lineBlockStart"></div>

      <div className="Development">

        {/* --PROJECT 1--*/}

        <div className="Project-1">

          <div className="VFX-1">

            <span className="Development-BE">Unit Testing/Integration Testing</span>

            <span>Authorization & Authentication. Encryption. RDMs, Routes, Server and Middleware test coverage examples below</span>

            <span className="Development-span-space"></span>

            <a className="Development-Link" href='https://github.com/lucasaking/express-jobly-backend' target="_blank">GITHUB</a>

          </div>

        </div>

        <div className="lineBlock"></div>

        {/* --PROJECT 2--*/}

        <div className="Project-2">

          <div className="VFX-1">

            <span className="Development-BE">Business</span>

            <span>REST-Ful Backend API server. Company/Invoice tracker</span>

            <span className="Development-span-space"></span>

            <a className="Development-Link" href='https://github.com/lucasaking/business-biztime-backend' target="_blank">GITHUB</a>

          </div>

        </div>

        <div className="lineBlock"></div>

        {/* --PROJECT 3--*/}

        <div className="Project-1">

          <div className="VFX-2">

            <span className="Development-BE">Private Message</span>

            <span>Security, Encryption, Database & Server</span>

            <span className="Development-span-space"></span>

            <a className="Development-Link" href="https://github.com/lucasaking/message.ly" target="_blank">GITHUB</a>

          </div>

        </div>

        <div className="lineBlock"></div>

        {/* --PROJECT 4--*/}

        <div className="Project-2">

          <div className="VFX-2">

            <span className="Development-BE">Bookstore</span>

            <span>Validation, JSON Schema.</span>

            <span className="Development-span-space"></span>

            <a className="Development-Link" href='https://github.com/lucasaking/bookstore-backend' target="_blank">GITHUB</a>

          </div>

        </div>

        <div className="lineBlock"></div>

        {/* --PROJECT 5--*/}

        <div className="Project-1">

          <div className="VFX-1">

            <span className="Development-BE">Banking</span>

            <span>Authorization & Authentication. Encryption. Security. Database, Routes, Server</span>

            <span className="Development-span-space"></span>

            <a className="Development-Link" onClick={() => history.push("/contact")}>CONTACT ME</a>

          </div>

        </div>

        <div className="lineBlockCard"></div>

        <h1 className="content3"><a className="About-pointer" ><b className="Contact-me" onClick={() => history.push("/web-games")}>NEXT</b></a></h1>

        <div className="lineBlock"></div>

      </div>

      {/* --UNDER CONSTRUCTION--*/}

    </div>
  )
}

export default DevelopmentBE;