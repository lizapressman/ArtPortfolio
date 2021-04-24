import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
