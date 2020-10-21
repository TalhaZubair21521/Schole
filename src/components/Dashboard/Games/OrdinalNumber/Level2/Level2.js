import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level2 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"9"} seriesLevel={"2"} seriesName={"Ordinal Number"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Ordinal Number Level 2</h1>
            </div>
        </div>
    );
}

export default Level2;