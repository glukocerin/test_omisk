import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./assets/css/colors.css";
import "./assets/css/texts.css";

import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Teacher from "./pages/Teacher";

import Blog from "./pages/Blog";
import BlogEntry from "./pages/BlogEntry";

import Operation from "./pages/Operation";

// import Enrollment from "./pages/Enrollment";

import Contact from "./pages/Contact";

import Beiratkozas from "./pages/Beiratkozas";

// courses
import Course from "./components/Course";

//programs
import pagesConfig from "./assets/pagesConfig";
import ProgramPage from "./pages/ProgramPage";
import Achievement from "./pages/Achievement";
import CampDay from "./pages/CampDay";

import Landing from "./pages/Landing";

import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";
import Navigation from "./pages/Navigation";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Cookies from "./components/Cookies";

import Admin from "./pages/Admin";

const { programs } = pagesConfig;
const { courses } = pagesConfig;
const { blog } = pagesConfig;

function App() {
  const [activeDot, handleDotChange] = useState(1);

  const blogEntries = blog.cards.map((entry, index) => {
    return (
      <Route key={index} path={`/blog/${entry.index}`}>
        <Navigation BackgroundColor="yellow" />
        <BlogEntry config={entry} />
        <Footer />
        <FooterMobile />
      </Route>
    );
  });

  return (
    <div className="App">
      <div className="bottom-wrapper">
        <Cookies />
      </div>
      <Switch>
        <Route exact path="/kurzusok">
          <Navigation BackgroundColor="green-1" />
          <Courses />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/tanaraink">
          <Navigation BackgroundColor="pink" isHeaderFixed="true" />
          <Teachers />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/tanar">
          <Navigation BackgroundColor="pink" />
          <Teacher />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/blog">
          <Navigation BackgroundColor="yellow" />
          <Blog />
          <Footer />
          <FooterMobile />
        </Route>
        {blogEntries}
        <Route path="/mukodesunk">
          <Navigation BackgroundColor="green" isHeaderFixed="true" />
          <Operation />
          <Footer />
          <FooterMobile />
        </Route>
        {/* <Route path="/beiratkozas">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <Enrollment />
          <Footer />
          <FooterMobile />
        </Route> */}
        <Route path="/kapcsolat">
          <Navigation BackgroundColor="blue-1" />
          <Contact />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/kurzusok/muveszi-torna">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Course pageConfig={courses.pages.eurhythmics} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/kurzusok/mozdulatmuveszet">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Course pageConfig={courses.pages.callisthenics} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/kurzusok/pre_balett">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Course pageConfig={courses.pages.preBallet} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/kurzusok/klasszikus_balett">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Course pageConfig={courses.pages.ballet} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/kurzusok/jazz">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Course pageConfig={courses.pages.jazz} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/kurzusok/modern_tanc">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Course pageConfig={courses.pages.modern} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/kurzusok/noi_torna">
          <Navigation BackgroundColor="green-1" isHeaderFixed="true" />
          <Course pageConfig={courses.pages.lady} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok">
          <Navigation BackgroundColor="blue-1" />
          <Programs />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/evzaro_eloadas">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.speechDay} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/versenyek">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.competitions} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/omisk">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.omisk} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/nyilvanos_ora">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.publicClass} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/mozdulatmuhely">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.callisthenics} />
          <Footer />
          <FooterMobile />
        </Route>
        {/* <Route exact path="/programok/camp">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.camp} />
          <Footer />
          <FooterMobile />
        </Route> */}
        <Route exact path="/programok/nyari_tabor">
          <Navigation BackgroundColor="blue-1" isHeaderFixed="true" />
          <ProgramPage opt={programs.programPage.summer_camp} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/nyari_tabor/programok">
          <Navigation BackgroundColor="blue-2" isHeaderFixed="true" />
          <Course pageConfig={programs.summerCamp.programs} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/nyari_tabor/gyik">
          <Navigation BackgroundColor="blue-2" isHeaderFixed="true" />
          <Course pageConfig={programs.summerCamp.faq} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/nyari_tabor/egy_nap">
          <Navigation BackgroundColor="blue-2" isHeaderFixed="true" />
          <CampDay opt={programs.summerCamp.day} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/nyari_tabor/jelentkezes">
          <Navigation BackgroundColor="blue-2" isHeaderFixed="true" />
          <CampDay opt={programs.summerCamp.application} />
          <Footer />
          <FooterMobile />
        </Route>
        <Route exact path="/programok/eredmenyeink">
          <Navigation BackgroundColor="blue-1" />
          <Achievement />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/programDetail">
          <ProgramDetail />
        </Route>
        <Route path="/beiratkozas">
          <Navigation BackgroundColor="green-2" />
          <Beiratkozas />
          <Footer />
          <FooterMobile />
        </Route>
        <Route path="/admin">
          <Admin />
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
