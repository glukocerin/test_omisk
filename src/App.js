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

// courses
import Eurhythmics from "./pages/Eurhythmics";
import Callisthenics from "./pages/Callisthenics";
import PreBallet from "./pages/PreBallet";
import Ballet from "./pages/Ballet";
import Jazz from "./pages/Jazz";
import Modern from "./pages/Modern";

import Landing from "./pages/Landing";

import Footer from "./components/Footer";
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
          <Footer />
        </Route>
        <Route path="/teachers">
          <Navigation BackgroundColor="green"/>
          <Teachers />
        </Route>
        <Route path="/teacher">
          <Teacher />
        </Route>
        <Route path="/courses/eurhythmics">
          <Navigation />
          <Eurhythmics />
          <Footer />
        </Route>
        <Route path="/courses/callisthenics">
          <Navigation />
          <Callisthenics />
          <Footer />
        </Route>
        <Route path="/courses/pre_ballet">
          <Navigation />
          <PreBallet />
          <Footer />
        </Route>
        <Route path="/courses/ballet">
          <Navigation />
          <Ballet />
          <Footer />
        </Route>
        <Route path="/courses/jazz">
          <Navigation />
          <Jazz />
          <Footer />
        </Route>
        <Route path="/courses/modern">
          <Navigation />
          <Modern />
          <Footer />
        </Route>
        <Route path="/programs">
          <Navigation />
          <Programs />
          <Footer />
        </Route>
        <Route path="/programDetail">
          <ProgramDetail />
        </Route>
        <Route path="/">
          <Navigation BackgroundColor="blue"/>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
