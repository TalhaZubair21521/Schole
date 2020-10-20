import React from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Games from "./Games/Games";

import CountingLevels from "./Games/Counting/Levels/Levels";
import CountingLevel1 from "./Games/Counting/Level1/Level1";
import CountingLevel2 from "./Games/Counting/Level2/Level2";
import CountingLevel3 from "./Games/Counting/Level3/Level3";


import NumbersLevels from "./Games/Numbers/Levels/Levels";
import NumbersLevel1 from "./Games/Numbers/Level1/Level1";
import NumbersLevel2 from "./Games/Numbers/Level2/Level2";
import NumbersLevel3 from "./Games/Numbers/Level3/Level3";

import Error404 from "../Errors/404Error";
import Error401 from "../Errors/401Error";

import Authenticator from "../Authenticator/Authenticator";

const AuthenticatedHomepage = Authenticator(Homepage);
const AuthenticatedGames = Authenticator(Games);

const AuthenticatedCountLevels = Authenticator(CountingLevels);
const AuthenticatedCountLevel1 = Authenticator(CountingLevel1);
const AuthenticatedCountLevel2 = Authenticator(CountingLevel2);
const AuthenticatedCountLevel3 = Authenticator(CountingLevel3);

const AuthenticatedNumbersLevels = Authenticator(NumbersLevels);
const AuthenticatedNumbersLevel1 = Authenticator(NumbersLevel1);
const AuthenticatedNumbersLevel2 = Authenticator(NumbersLevel2);
const AuthenticatedNumbersLevel3 = Authenticator(NumbersLevel3);

const Dashboard = () => {
    return (
        <Switch>
            <Route exact path="/dashboard" ><AuthenticatedHomepage /></Route>
            <Route exact path="/dashboard/games" ><AuthenticatedGames /></Route>
            <Route exact path="/dashboard/games/counting" ><AuthenticatedCountLevels /></Route>
            <Route exact path="/dashboard/games/counting/level1" ><AuthenticatedCountLevel1 /></Route>
            <Route exact path="/dashboard/games/counting/level2" ><AuthenticatedCountLevel2 /></Route>
            <Route exact path="/dashboard/games/counting/level3" ><AuthenticatedCountLevel3 /></Route>
            <Route exact path="/dashboard/games/numbers" ><AuthenticatedNumbersLevels /></Route>
            <Route exact path="/dashboard/games/numbers/level1" ><AuthenticatedNumbersLevel1 /></Route>
            <Route exact path="/dashboard/games/numbers/level2" ><AuthenticatedNumbersLevel2 /></Route>
            <Route exact path="/dashboard/games/numbers/level3" ><AuthenticatedNumbersLevel3 /></Route>
            <Route exact path="/Not-Authorized" ><Error401 /></Route>
            <Route><Error404 /></Route>
        </Switch>
    );
}

export default Dashboard;