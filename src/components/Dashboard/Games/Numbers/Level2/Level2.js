import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level2 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"2"} seriesLevel={"2"} seriesName={"Numbers"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Numbers Level 2</h1>
            </div>
        </div>
    );
}

export default Level2;