import React from "react";
import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/countingBg.png";
const Level1 = (props) => {
    return (
        <div>
            <Navbar />
            <div style={mainDivHomepage}>
                <h1>Counting Level 1</h1>
            </div>
        </div>
    );
}
const mainDivHomepage = {
    position: "fixed",
    width: "100vw",
    backgroundImage: `url(${CountingLevel1})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh"
}
export default Level1;