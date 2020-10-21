import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level2 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"4"} seriesLevel={"2"} seriesName={"Ordering"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Ordering Level 2</h1>
            </div>
        </div>
    );
}

export default Level2;