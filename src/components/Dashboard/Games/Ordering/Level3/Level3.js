import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level3 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"4"} seriesLevel={"3"} seriesName={"Ordering"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Ordering Level 3</h1>
            </div>
        </div>
    );
}

export default Level3;