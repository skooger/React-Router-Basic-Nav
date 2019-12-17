import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

const App = () => (
  
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
    </Switch>
  
  </div>
);

export default App;
