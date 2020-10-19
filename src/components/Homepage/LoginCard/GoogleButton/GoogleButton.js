import React from "react";
import "../LoginCard.css";

const GoogleButton = (props) => {
    return (
        <button className="removeFocus" style={{ textDeocration: "none", border: "none", color: "white", backgroundColor: "#DF615C", padding: "3% 9%", borderRadius: "5px", width: "100%" }}>Google</button>
    );
}

export default GoogleButton;