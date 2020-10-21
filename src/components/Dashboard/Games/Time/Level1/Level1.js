import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"7"} seriesLevel={"1"} seriesName={"Time"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Time Level 1</h1>
            </div>
        </div>
    );
}

export default Level1;