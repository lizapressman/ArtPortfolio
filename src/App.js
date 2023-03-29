import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import About from "./components/About";
import Art from "./components/Art";
import { Thesis } from "./components/Thesis";
import { ThesisForClass } from "./components/ThesisForClass";
import { Memories } from "./components/Memories";
import { Other } from "./components/Other";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { datadogRum } from "@datadog/browser-rum-recorder";

datadogRum.init({
  applicationId: "12fd31f6-7903-4fe5-9378-414b25d45142",
  clientToken: "pub171d203bcd34b1f3e82a4802a9a49c91",
  site: "datadoghq.com",
  service: "art-portfolio",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
});

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/thesis" component={ThesisForClass} />
          <Route exact path="/memories" component={Memories} />
          <Route exact path="/other" component={Other} />
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
