import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./assets/css/colors.css";
import "./assets/css/texts.css";

import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Teacher from "./pages/Teacher";

import Blog from "./pages/Blog";
import BlogEntry from "./pages/BlogEntry";

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
import FooterMobile from "./components/FooterMobile";
import Navigation from "./pages/Navigation";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

const { programs, ...rest } = pagesConfig;
const { courses } = pagesConfig;

function App() {
  const [activeDot, handleDotChange] = useState(1);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/courses">
          <Navigation BackgroundColor="green-1" />
          <Courses />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/teachers">
          <Navigation BackgroundColor="pink" isHeaderFixed="true" />
          <Teachers />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/teacher">
          <Navigation BackgroundColor="pink" />
          <Teacher />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/blog">
          <Navigation BackgroundColor="yellow" />
          <Blog />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/blog_entry">
          <Navigation BackgroundColor="yellow" />
          <BlogEntry />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/operation">
          <Navigation BackgroundColor="green" />
          <Operation />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/enrollment">
          <Navigation BackgroundColor="blue-1" />
          <Enrollment />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/contact">
          <Navigation BackgroundColor="blue-1" />
          <Contact />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/courses/eurhythmics">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Eurhythmics pageConfig={courses.pages.eurhythmics} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/courses/callisthenics">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Callisthenics />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/courses/pre_ballet">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <PreBallet />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/courses/ballet">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Ballet />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/courses/jazz">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Jazz />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/courses/modern">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Modern />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs">
          <Navigation BackgroundColor="blue-1" />
          <Programs />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs/speech_day">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.speechDay} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs/competitions">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.competitions} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs/omisk">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.omisk} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs/public_class">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.publicClass} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs/callisthenics">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.callisthenics} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs/camp">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.camp} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programs/achievements">
          <Navigation BackgroundColor="blue-1" />
          <Achievement />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/programDetail">
          <ProgramDetail />
        </Route>
        <Route path="/">
          <Navigation
            BackgroundColor="gray-erohw"
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
