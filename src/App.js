import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import About from "./components/About";
import { Thesis } from "./components/Thesis";
import Memories from "./components/Memories";
import Other from "./components/Other";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/about' component={About} />
          <Route exact path='/thesis' component={Thesis} />
          <Route exact path='/memories' component={Memories} />
          <Route exact path='/other' component={Other} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}


export default App;
