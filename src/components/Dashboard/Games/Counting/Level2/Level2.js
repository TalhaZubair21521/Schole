import React from "react";
import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/countingBg.png";
import Card from "../../../../../assets/countingLevelsImages/card2.png";

const Level2 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"1"} seriesLevel={"2"} seriesName={"Counting"} />
            <div style={mainDivHomepage}>
                <div style={CenterContent}>
                    <div style={BackgroundImageSetter}>

                    </div>
                </div>
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
const CenterContent = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-30px"
}
const BackgroundImageSetter = {
    backgroundImage: `url(${Card})`,
    height: "95%",
    width: "80%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repear",
    backgroundSize: "100% 100%",
}
export default Level2;