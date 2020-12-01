import React from "react";
import GlobalStyle from "./gloablStyles";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <NavBar/>
      <Section/>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
