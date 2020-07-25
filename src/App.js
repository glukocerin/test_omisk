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
import Teacher from "./pages/Teacher";
import Course from "./pages/Course";
import Landing from "./pages/Landing";
import Navigation from "./pages/Navigation";
import SocialMediaBar from "./pages/SocialMediaBar";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

function App() {
  return (
    <div className="App">
      <SocialMediaBar />
      <Switch>
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route path="/teachers">
          <Navigation/>
          <Teachers />
        </Route>
        <Route path="/teacher">
          <Navigation/>
          <Teacher/>
        </Route>
        <Route path="/eurhythmics"></Route>
        <Route path="/courses/eurhythmics">
          <Navigation isFixed="true" />
          <Course pageTitle="course one" />
        </Route>
        <Route path="/programs">
          <Navigation />
          <Programs />
        </Route>
        <Route path="/programDetail">
          <ProgramDetail />
        </Route>
        <Route path="/">
          <Navigation isFixed="true" />
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
