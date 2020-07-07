import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./assets/css/colors.css";
import "./App.css";

import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Landing from "./pages/Landing";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navigation />
=======
      <div className="header">
        <Logo className="logo" />
        <Link to="/courses"> courses</Link>
        <Link to="/course_one">course one</Link>
        <Link to="/course_two">courses two link</Link>
      </div>
>>>>>>> Add Courses component
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
