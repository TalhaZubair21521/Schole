import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"9"} seriesLevel={"1"} seriesName={"Ordinal Number"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Ordinal Number Level 1</h1>
            </div>
        </div>
    );
}

export default Level1;