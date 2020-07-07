import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "./assets/css/colors.css";
import "./App.css";
import { ReactComponent as Logo } from "./assets/img/logo.svg";

import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo className="logo" />
        <Link to="/courses">
          <Courses />
        </Link>
        <Link to="/course_one">
          <Course pageTitle="course one" />
        </Link>
        <Link to="/course_two">courses two link</Link>
      </div>
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/course_one">
          <Course pageTitle="course one" />
        </Route>
        <Route path="/course_two">
          <div>courses two</div>
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
