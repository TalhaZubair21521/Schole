import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level3 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"1"} seriesLevel={"2"} seriesName={"Counting"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Shapes Level 3</h1>
            </div>
        </div>
    );
}

export default Level3;