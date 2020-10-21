import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"5"} seriesLevel={"1"} seriesName={"Addition"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Addition Level 1</h1>
            </div>
        </div>
    );
}

export default Level1;