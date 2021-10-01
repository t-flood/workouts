import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Workouts from "../index/Workouts";
import Home from "../Home";

const Nav = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navigation">
            <li className="nav-list">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list">
              <Link to="/workouts">Workouts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/workouts">
            <Workouts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
