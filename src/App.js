import React, {useState} from "react";
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
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

function App() {
  const [activeDot, handleDotChange] = useState(1);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/courses">
          <Navigation BackgroundColor="blue-4"/>
          <Courses />
          <Footer />
        </Route>
        <Route path="/teachers">
          <Navigation BackgroundColor="green" isHeaderFixed="true"/>
          <Teachers />
        </Route>
        <Route path="/teacher">
          <Navigation BackgroundColor="green"/>
          <Teacher />
        </Route>
        <Route path="/actuals">
          <Navigation BackgroundColor="yellow"/>
          <Actuals />
        </Route>
        <Route path="/actual">
          <Navigation BackgroundColor="yellow"/>
          <Actual />
        </Route>
        <Route path="/operation">
          <Navigation BackgroundColor="green"/>
          <Operation />
        </Route>
        <Route path="/courses/eurhythmics">
          <Navigation BackgroundColor="blue-1"/>
          <Eurhythmics />
          <Footer />
        </Route>
        <Route path="/courses/callisthenics">
          <Navigation BackgroundColor="blue-1"/>
          <Callisthenics />
          <Footer />
        </Route>
        <Route path="/courses/pre_ballet">
          <Navigation BackgroundColor="pink"/>
          <PreBallet />
          <Footer />
        </Route>
        <Route path="/courses/ballet">
          <Navigation BackgroundColor="pink"/>
          <Ballet />
          <Footer />
        </Route>
        <Route path="/courses/jazz">
          <Navigation BackgroundColor="green"/>
          <Jazz />
          <Footer />
        </Route>
        <Route path="/courses/modern">
          <Navigation BackgroundColor="green"/>
          <Modern />
          <Footer />
        </Route>
        <Route path="/programs">
          <Navigation BackgroundColor="blue-1"/>
          <Programs />
          <Footer />
        </Route>
        <Route path="/programDetail">
          <ProgramDetail />
        </Route>
        <Route path="/">
          <Navigation BackgroundColor="blue-4" isHeaderFixed="true" activeDot={activeDot}/>
          <Landing dotChange={handleDotChange}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
