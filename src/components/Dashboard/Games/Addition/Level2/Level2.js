import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level2 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"5"} seriesLevel={"2"} seriesName={"Addition"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Addition Level 2</h1>
            </div>
        </div>
    );
}

export default Level2;