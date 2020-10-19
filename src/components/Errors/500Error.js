import React from "react";
import Style from "./ErrorStyle";

const Error500 = () => {
    return (
        <div style={Style.ElementCenteredStyle}>
            <h1 style={{ color: "#CD326C" }}>Server Not Responding</h1>
        </div>
    );
}
export default Error500;