import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Games from "./Games/Games";

import Error404 from "../Errors/404Error";

const Dashboard = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard" ><Homepage /></Route>
                <Route exact path="/dashboard/games" ><Games /></Route>
                <Route><Error404 /></Route>
            </Switch>
        </Router>
    );
}

export default Dashboard;