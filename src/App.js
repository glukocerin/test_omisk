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
import Eurhythmics from "./pages/Eurhythmics";
import Callisthenics from "./pages/Callisthenics";
import PreBallet from "./pages/PreBallet";
import Ballet from "./pages/Ballet";
import Jazz from "./pages/Jazz";
import Modern from "./pages/Modern";
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
          <Navigation />
          <Courses />
        </Route>
        <Route path="/teachers">
          <Navigation />
          <Teachers />
        </Route>
        <Route path="/teacher">
          <Teacher />
        </Route>
        <Route path="/courses/eurhythmics">
          <Navigation />
          <Eurhythmics />
        </Route>
        <Route path="/courses/callisthenics">
          <Navigation />
          <Callisthenics />
        </Route>
        <Route path="/courses/pre_ballet">
          <Navigation />
          <PreBallet />
        </Route>
        <Route path="/courses/ballet">
          <Navigation />
          <Ballet />
        </Route>
        <Route path="/courses/jazz">
          <Navigation />
          <Jazz />
        </Route>
        <Route path="/courses/modern">
          <Navigation />
          <Modern />
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
