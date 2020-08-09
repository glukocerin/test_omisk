import React, { useState } from "react";
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

import Actuals from "./pages/Actuals";
import Actual from "./pages/Actual";

import Operation from "./pages/Operation";

import Enrollment from "./pages/Enrollment";

import Contact from "./pages/Contact";

// courses
import Eurhythmics from "./pages/courses/Eurhythmics";
import Callisthenics from "./pages/courses/Callisthenics";
import PreBallet from "./pages/courses/PreBallet";
import Ballet from "./pages/courses/Ballet";
import Jazz from "./pages/courses/Jazz";
import Modern from "./pages/courses/Modern";

//programs
import pagesConfig from "./assets/pagesConfig";
import ProgramPage from "./pages/ProgramPage";
import Achievement from "./pages/Achievement";

import Landing from "./pages/Landing";

import Footer from "./components/Footer";
import Navigation from "./pages/Navigation";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

const { programs, ...rest } = pagesConfig;

function App() {
  const [activeDot, handleDotChange] = useState(1);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/courses">
          <Navigation BackgroundColor="blue-4" />
          <Courses />
          <Footer />
        </Route>
        <Route path="/teachers">
          <Navigation BackgroundColor="green" isHeaderFixed="true" />
          <Teachers />
        </Route>
        <Route path="/teacher">
          <Navigation BackgroundColor="green" />
          <Teacher />
        </Route>
        <Route path="/actuals">
          <Navigation BackgroundColor="yellow" />
          <Actuals />
        </Route>
        <Route path="/actual">
          <Navigation BackgroundColor="yellow" />
          <Actual />
        </Route>
        <Route path="/operation">
          <Navigation BackgroundColor="green" />
          <Operation />
        </Route>
        <Route path="/enrollment">
          <Navigation BackgroundColor="blue-1" />
          <Enrollment />
        </Route>
        <Route path="/contact">
          <Navigation BackgroundColor="blue-4" />
          <Contact />
        </Route>
        <Route path="/courses/eurhythmics">
          <Navigation BackgroundColor="blue-1" />
          <Eurhythmics />
          <Footer />
        </Route>
        <Route path="/courses/callisthenics">
          <Navigation BackgroundColor="blue-1" />
          <Callisthenics />
          <Footer />
        </Route>
        <Route path="/courses/pre_ballet">
          <Navigation isHeaderFixed="true" />
          <PreBallet />
          <Footer />
        </Route>
        <Route path="/courses/ballet">
          <Navigation BackgroundColor="pink" />
          <Ballet />
          <Footer />
        </Route>
        <Route path="/courses/jazz">
          <Navigation BackgroundColor="green" />
          <Jazz />
          <Footer />
        </Route>
        <Route path="/courses/modern">
          <Navigation BackgroundColor="green" />
          <Modern />
          <Footer />
        </Route>
        <Route exact path="/programs">
          <Navigation BackgroundColor="blue-1" />
          <Programs />
          <Footer />
        </Route>
        <Route exact path="/programs/speech_day">
          <Navigation />
          <ProgramPage opt={programs.programPage.speechDay} />
          <Footer />
        </Route>
        <Route exact path="/programs/competitions">
          <Navigation />
          <ProgramPage opt={programs.programPage.competitions} />
          <Footer />
        </Route>
        <Route exact path="/programs/omisk">
          <Navigation />
          <ProgramPage opt={programs.programPage.omisk} />
          <Footer />
        </Route>
        <Route exact path="/programs/public_class">
          <Navigation />
          <ProgramPage opt={programs.programPage.publicClass} />
          <Footer />
        </Route>
        <Route exact path="/programs/callisthenics">
          <Navigation />
          <ProgramPage opt={programs.programPage.callisthenics} />
          <Footer />
        </Route>
        <Route exact path="/programs/camp">
          <Navigation />
          <ProgramPage opt={programs.programPage.camp} />
          <Footer />
        </Route>
        <Route exact path="/programs/achievements">
          <Navigation BackgroundColor="blue-1" />
          <Achievement />
          <Footer />
        </Route>
        <Route path="/programDetail">
          <ProgramDetail />
        </Route>
        <Route path="/">
          <Navigation
            BackgroundColor="blue-4"
            isHeaderFixed="true"
            activeDot={activeDot}
          />
          <Landing dotChange={handleDotChange} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
