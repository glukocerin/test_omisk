import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./App.css";

import Courses from './pages/Courses'
import Course from './pages/Course'

function App() {
  return (
    <div className="App">
      <div>header navigation</div>
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/course_one">
          <Course pageTitle="course one"/>
        </Route>
        <Route path="/course_two">
          <div>courses two</div>
        </Route>
        <Route path="/">
          <div>
            main
          </div>
        </Route>
      </Switch>
      <div>footer</div>
    </div>
  );
}

export default App;
