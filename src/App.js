import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./assets/css/colors.css";
import "./assets/css/texts.css";
import "./App.css";

import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Landing from "./pages/Landing";
import Navigation from "./pages/Navigation";
import SocialMediaBar from "./pages/SocialMediaBar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SocialMediaBar />
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/eurhythmics">
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
