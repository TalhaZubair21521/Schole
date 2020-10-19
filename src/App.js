import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";

import Error401 from "./components/Errors/401Error";
import Error404 from "./components/Errors/404Error";
import Error500 from "./components/Errors/500Error";

function App() {
  return (
    <div className="FontToUse">
      <Router>
        <Switch>
          <Route exact path="/" ><Homepage /></Route>
          <Route path="/dashboard" ><Dashboard /></Route>
          <Route exact path="/Not-Authorized" ><Error401 /></Route>
          <Route exact path="/Server-Not-Responding" ><Error500 /></Route>
          <Route><Error404 /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
