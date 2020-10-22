import React from "react";

import { Switch, Route } from "react-router-dom";

import Homepage from "./Homepage/Homepage";

import CountingLevel1 from "./Games/Counting/Level1/Level1";
import CountingLevel2 from "./Games/Counting/Level2/Level2";
import CountingLevel3 from "./Games/Counting/Level3/Level3";


import NumbersLevel1 from "./Games/Numbers/Level1/Level1";
import NumbersLevel2 from "./Games/Numbers/Level2/Level2";
import NumbersLevel3 from "./Games/Numbers/Level3/Level3";

import ShapesLevel1 from "./Games/Shapes/Level1/Level1";
import ShapesLevel2 from "./Games/Shapes/Level2/Level2";
import ShapesLevel3 from "./Games/Shapes/Level3/Level3";

import OrderingLevel1 from "./Games/Ordering/Level1/Level1";
import OrderingLevel2 from "./Games/Ordering/Level2/Level2";
import OrderingLevel3 from "./Games/Ordering/Level3/Level3";

import AdditionLevel1 from "./Games/Addition/Level1/Level1";
import AdditionLevel2 from "./Games/Addition/Level2/Level2";
import AdditionLevel3 from "./Games/Addition/Level3/Level3";

import SubtractionLevel1 from "./Games/Subtraction/Level1/Level1";
import SubtractionLevel2 from "./Games/Subtraction/Level2/Level2";
import SubtractionLevel3 from "./Games/Subtraction/Level3/Level3";

import TimeLevel1 from "./Games/Time/Level1/Level1";
import TimeLevel2 from "./Games/Time/Level2/Level2";
import TimeLevel3 from "./Games/Time/Level3/Level3";

import PatterningLevel1 from "./Games/Patterning/Level1/Level1";
import PatterningLevel2 from "./Games/Patterning/Level2/Level2";
import PatterningLevel3 from "./Games/Patterning/Level3/Level3";

import OrdinalNumberLevel1 from "./Games/OrdinalNumber/Level1/Level1";
import OrdinalNumberLevel2 from "./Games/OrdinalNumber/Level2/Level2";
import OrdinalNumberLevel3 from "./Games/OrdinalNumber/Level3/Level3";

import Statistics from "./Games/Statistics/Statistics";

import Error404 from "../Errors/404Error";
import Error401 from "../Errors/401Error";

import Authenticator from "../Authenticator/Authenticator";

const AuthenticatedHomepage = Authenticator(Homepage);

const AuthenticatedCountLevel1 = Authenticator(CountingLevel1);
const AuthenticatedCountLevel2 = Authenticator(CountingLevel2);
const AuthenticatedCountLevel3 = Authenticator(CountingLevel3);

const AuthenticatedNumbersLevel1 = Authenticator(NumbersLevel1);
const AuthenticatedNumbersLevel2 = Authenticator(NumbersLevel2);
const AuthenticatedNumbersLevel3 = Authenticator(NumbersLevel3);

const AuthenticatedShapesLevel1 = Authenticator(ShapesLevel1);
const AuthenticatedShapesLevel2 = Authenticator(ShapesLevel2);
const AuthenticatedShapesLevel3 = Authenticator(ShapesLevel3);

const AuthenticatedOrderingLevel1 = Authenticator(OrderingLevel1);
const AuthenticatedOrderingLevel2 = Authenticator(OrderingLevel2);
const AuthenticatedOrderingLevel3 = Authenticator(OrderingLevel3);

const AuthenticatedAdditionLevel1 = Authenticator(AdditionLevel1);
const AuthenticatedAdditionLevel2 = Authenticator(AdditionLevel2);
const AuthenticatedAdditionLevel3 = Authenticator(AdditionLevel3);

const AuthenticatedSubtractionLevel1 = Authenticator(SubtractionLevel1);
const AuthenticatedSubtractionLevel2 = Authenticator(SubtractionLevel2);
const AuthenticatedSubtractionLevel3 = Authenticator(SubtractionLevel3);

const AuthenticatedTimeLevel1 = Authenticator(TimeLevel1);
const AuthenticatedTimeLevel2 = Authenticator(TimeLevel2);
const AuthenticatedTimeLevel3 = Authenticator(TimeLevel3);

const AuthenticatedPatterningLevel1 = Authenticator(PatterningLevel1);
const AuthenticatedPatterningLevel2 = Authenticator(PatterningLevel2);
const AuthenticatedPatterningLevel3 = Authenticator(PatterningLevel3);

const AuthenticatedOrdinalNumberLevel1 = Authenticator(OrdinalNumberLevel1);
const AuthenticatedOrdinalNumberLevel2 = Authenticator(OrdinalNumberLevel2);
const AuthenticatedOrdinalNumberLevel3 = Authenticator(OrdinalNumberLevel3);

const AuthenticatedStatistics = Authenticator(Statistics);

const Dashboard = () => {
    return (
        <Switch>
            <Route exact path="/dashboard" ><AuthenticatedHomepage /></Route>

            <Route exact path="/dashboard/games/counting/level1" ><AuthenticatedCountLevel1 /></Route>
            <Route exact path="/dashboard/games/counting/level2" ><AuthenticatedCountLevel2 /></Route>
            <Route exact path="/dashboard/games/counting/level3" ><AuthenticatedCountLevel3 /></Route>

            <Route exact path="/dashboard/games/numbers/level1" ><AuthenticatedNumbersLevel1 /></Route>
            <Route exact path="/dashboard/games/numbers/level2" ><AuthenticatedNumbersLevel2 /></Route>
            <Route exact path="/dashboard/games/numbers/level3" ><AuthenticatedNumbersLevel3 /></Route>

            <Route exact path="/dashboard/games/shapes/level1" ><AuthenticatedShapesLevel1 /></Route>
            <Route exact path="/dashboard/games/shapes/level2" ><AuthenticatedShapesLevel2 /></Route>
            <Route exact path="/dashboard/games/shapes/level3" ><AuthenticatedShapesLevel3 /></Route>

            <Route exact path="/dashboard/games/ordering/level1" ><AuthenticatedOrderingLevel1 /></Route>
            <Route exact path="/dashboard/games/ordering/level2" ><AuthenticatedOrderingLevel2 /></Route>
            <Route exact path="/dashboard/games/ordering/level3" ><AuthenticatedOrderingLevel3 /></Route>

            <Route exact path="/dashboard/games/addition/level1" ><AuthenticatedAdditionLevel1 /></Route>
            <Route exact path="/dashboard/games/addition/level2" ><AuthenticatedAdditionLevel2 /></Route>
            <Route exact path="/dashboard/games/addition/level3" ><AuthenticatedAdditionLevel3 /></Route>

            <Route exact path="/dashboard/games/subtraction/level1" ><AuthenticatedSubtractionLevel1 /></Route>
            <Route exact path="/dashboard/games/subtraction/level2" ><AuthenticatedSubtractionLevel2 /></Route>
            <Route exact path="/dashboard/games/subtraction/level3" ><AuthenticatedSubtractionLevel3 /></Route>

            <Route exact path="/dashboard/games/time/level1" ><AuthenticatedTimeLevel1 /></Route>
            <Route exact path="/dashboard/games/time/level2" ><AuthenticatedTimeLevel2 /></Route>
            <Route exact path="/dashboard/games/time/level3" ><AuthenticatedTimeLevel3 /></Route>

            <Route exact path="/dashboard/games/patterning/level1" ><AuthenticatedPatterningLevel1 /></Route>
            <Route exact path="/dashboard/games/patterning/level2" ><AuthenticatedPatterningLevel2 /></Route>
            <Route exact path="/dashboard/games/patterning/level3" ><AuthenticatedPatterningLevel3 /></Route>

            <Route exact path="/dashboard/games/ordinalnumber/level1" ><AuthenticatedOrdinalNumberLevel1 /></Route>
            <Route exact path="/dashboard/games/ordinalnumber/level2" ><AuthenticatedOrdinalNumberLevel2 /></Route>
            <Route exact path="/dashboard/games/ordinalnumber/level3" ><AuthenticatedOrdinalNumberLevel3 /></Route>

            <Route exact path="/dashboard/games/statistics" ><AuthenticatedStatistics /></Route>

            <Route exact path="/Not-Authorized" ><Error401 /></Route>
            <Route><Error404 /></Route>
        </Switch>
    );
}

export default Dashboard;