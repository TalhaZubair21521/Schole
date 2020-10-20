import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"2"} seriesLevel={"1"} seriesName={"Numbers"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Numbers Level 1</h1>
            </div>
        </div>
    );
}

export default Level1;