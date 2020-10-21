import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"8"} seriesLevel={"1"} seriesName={"Patterning"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Patterning Level 1</h1>
            </div>
        </div>
    );
}

export default Level1;