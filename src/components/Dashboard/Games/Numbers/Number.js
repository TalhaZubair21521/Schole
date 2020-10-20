import React from "react";

import Levels from "./Levels/Levels";

import Authenticator from "../../../Authenticator/Authenticator";
const AuthenticatedLevels = Authenticator(Levels);

const Numbers = () => {
    return (
        <AuthenticatedLevels />
    );
}

export default Numbers;