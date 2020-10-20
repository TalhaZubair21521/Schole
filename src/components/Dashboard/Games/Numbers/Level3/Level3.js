import React from "react";
import Navbar from "../../Navbar/Navbar";

const Level3 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"2"} seriesLevel={"3"} seriesName={"Numbers"} />
            <div style={{ marginTop: "64px" }}>
                <h1>Numbers Level 3</h1>
            </div>
        </div>
    );
}

export default Level3;