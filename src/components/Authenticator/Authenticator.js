import React from "react";

const Authenticator = Component => {
    class NewComponent extends React.Component {
        render() {
            return <Component />;
        }
    }
    return <NewComponent />
}

export default Authenticator;