import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"4"} seriesLevel={"1"} seriesName={"Ordering"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Ordering Level 1</h1>
            </div>
        </div>
    );
}

export default Level1;