import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Level1 from "./Level1/Level1";
import Level2 from "./Level2/Level2";
import Level3 from "./Level3/Level3";

import Error404 from "../../../Errors/404Error";

import Authenticator from "../../../Authenticator/Authenticator";
import Error401 from "../../../Errors/401Error";

const AuthenticatedLevel1 = Authenticator(Level1);
const AuthenticatedLevel2 = Authenticator(Level2);
const AuthenticatedLevel3 = Authenticator(Level3);

const Dashboard = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard/games/counting/level1" ><AuthenticatedLevel1 /></Route>
                <Route path="/dashboard/games/counting/level2" ><AuthenticatedLevel2 /></Route>
                <Route path="/dashboard/games/counting/level3" ><AuthenticatedLevel3 /></Route>
                <Route exact path="/Not-Authorized" ><Error401 /></Route>
                <Route><Error404 /></Route>
            </Switch>
        </Router>
    );
}

export default Dashboard;