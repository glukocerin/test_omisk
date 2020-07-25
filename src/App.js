import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./assets/css/colors.css";
import "./assets/css/texts.css";

import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Course from "./pages/Course";
import Landing from "./pages/Landing";
import Navigation from "./pages/Navigation";
import SocialMediaBar from "./pages/SocialMediaBar";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SocialMediaBar />
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/teachers">
          <Teachers />
        </Route>
        <Route path="/eurhythmics">
        <Route path="/courses/eurhythmics">
          <Course pageTitle="course one" />
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/programDetail">
          <ProgramDetail />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
