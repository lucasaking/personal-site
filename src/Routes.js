import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Development from "./Development";
import DevelopmentFE from "./DevelopmentFE";
import DevelopmentBE from "./DevelopmentBE";
import DevelopmentWebGames from "./DevelopmentWebGames";
import DevelopmentGames from "./DevelopmentGames";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/full-stack">
          <Development />
        </Route>

        <Route exact path="/front-end">
          <DevelopmentFE />
        </Route>

        <Route exact path="/back-end">
          <DevelopmentBE />
        </Route>

        <Route exact path="/web-games">
          <DevelopmentWebGames />
        </Route>

        <Route exact path="/games">
          <DevelopmentGames />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes
