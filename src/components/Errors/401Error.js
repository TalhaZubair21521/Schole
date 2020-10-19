import React from "react";
import Style from "./ErrorStyle";

const Error401 = () => {
    return (
        <div style={Style.ElementCenteredStyle}>
            <h1 style={{ color: "#CD326C" }}>You are not authorized to access this Page</h1>
        </div>
    )
}
export default Error401;