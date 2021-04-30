import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import About from "./components/About";
import Art from "./components/Art";
import { Thesis } from "./components/Thesis";
import { ThesisForClass } from "./components/ThesisForClass";
import { Memories } from "./components/Memories";
import { Other } from "./components/Other";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/art' component={Art} />
          <Route exact path='/thesis' component={ThesisForClass} />
          <Route exact path='/memories' component={Memories} />
          <Route exact path='/other' component={Other} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}


export default App;
