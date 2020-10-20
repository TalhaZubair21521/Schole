import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Games from "./Games/Games";
import Counting from "./Games/Counting/Counting";

import Error404 from "../Errors/404Error";

import Authenticator from "../Authenticator/Authenticator";
import Error401 from "../Errors/401Error";

const AuthenticatedHomepage = Authenticator(Homepage);
const AuthenticatedGames = Authenticator(Games);
const AuthenticatedCounting = Authenticator(Counting);

const Dashboard = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard" ><AuthenticatedHomepage /></Route>
                <Route exact path="/dashboard/games" ><AuthenticatedGames /></Route>
                <Route path="/dashboard/games/counting" ><AuthenticatedCounting /></Route>
                <Route exact path="/Not-Authorized" ><Error401 /></Route>
                <Route><Error404 /></Route>
            </Switch>
        </Router>
    );
}

export default Dashboard;