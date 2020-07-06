import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./App.css";
import { ReactComponent as Logo } from './assets/img/logo.svg';

import Courses from './pages/Courses'
import Course from './pages/Course'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Logo className="logo" />
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/course_one">
          <Course pageTitle="course one"/>
        </Route>
        <Route path="/course_two">
          <div>courses two</div>
        </Route>
      </div>
      <Switch>
        <Route path="/">
          <div className="main">

          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
