import React from "react";
import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/countingBg.png";
import Card from "../../../../../assets/countingLevelsImages/card2.png";

const Level3 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"1"} seriesLevel={"2"} seriesName={"Counting"} />
            <div style={mainDivHomepage}>
                    <div style={CenterContent}>
                        <div style={BackgroundImageSetter}>
                                <div className="row" style={{marginTop:"10%"}}>
                                    <div className="col-2"></div>
                                    <div className="col-10">
                                    <h2>Arrange The Lollipop In Order</h2>
                                    </div>
                                </div>
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
    marginBottom: "8%",
    backgroundImage: `url(${Card})`,
    height: "80%",
    width: "75%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repear",
    backgroundSize: "100% 100%",
}

export default Level3;