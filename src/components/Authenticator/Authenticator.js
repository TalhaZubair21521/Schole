import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Authenticator = (Component) => {
    const NewComponent = () => {
        let history = useHistory();
        useEffect(() => {
            if (localStorage.getItem("isLoggedIn")) {
                history.push('/Not-Authorized');
            }
        }, [history])

        return <Component />;
    }
    return NewComponent;
}

export default Authenticator;