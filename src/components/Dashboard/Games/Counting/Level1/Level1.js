import React from "react";
import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/countingBg.png";
import Card from "../../../../../assets/countingLevelsImages/dropBallonCard.png";
import EmptyBox from "../../../../../assets/countingLevelsImages/emptyBox.png";
import FilledBox from "../../../../../assets/countingLevelsImages/filledBox.png";
import Submit from "../../../../../assets/countingLevelsImages/submit.png";

import Ballon1 from "../../../../../assets/countingLevelsImages/b1.png";
import Ballon2 from "../../../../../assets/countingLevelsImages/b2.png";
import Ballon3 from "../../../../../assets/countingLevelsImages/b3.png";
import Ballon4 from "../../../../../assets/countingLevelsImages/b4.png";
import Ballon5 from "../../../../../assets/countingLevelsImages/b5.png";
import { Link } from "react-router-dom";

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"1"} seriesLevel={"1"} seriesName={"Counting"} />
            <div style={mainDivHomepage}>
                <div className="row">
                    <div className="col-7">
                        <div style={CenterContent}>
                            <div style={{ marginTop: "-20px" }}>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={Ballon1} alt="ballon" />
                                    </div>
                                    <div className="col-3" />
                                    <div className="col-3" />
                                    <div className="col-3">
                                        <img src={Ballon2} alt="ballon" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1" />
                                    <div className="col-5">
                                        <img src={Ballon3} alt="ballon" />
                                    </div>
                                    <div className="col-3">
                                        <img src={Ballon4} alt="ballon" />
                                    </div>
                                    <div className="col-3" />

                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={Ballon5} alt="ballon" />
                                    </div>
                                    <div className="col-3" />
                                    <div className="col-3" />
                                    <div className="col-3">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div style={CenterContent}>
                            <div style={BackgroundImageSetter}>
                                <div style={{ marginTop: "40px" }}>
                                    <div className="row" style={{ textAlign: "center", margin: "auto", width: "60%", fontSize: "1.4rem", color: "red", fontWeight: "bold" }}>Drop Here</div>
                                    <div className="row" style={{ marginTop: "20px" }}>
                                        <div className="col-2" />
                                        <div className="col-4">
                                            <img width="90%" height="90%" src={FilledBox} alt="box" />
                                        </div>
                                        <div className="col-4">
                                            <img width="90%" height="90%" src={EmptyBox} alt="box" />
                                        </div>
                                        <div className="col-2" />
                                    </div>
                                    <div className="row">
                                        <div className="col-2" />
                                        <div className="col-4">
                                            <img width="90%" height="90%" src={EmptyBox} alt="box" />
                                        </div>
                                        <div className="col-4">
                                            <img width="90%" height="90%" src={EmptyBox} alt="box" />
                                        </div>
                                        <div className="col-2" />
                                    </div>
                                    <div className="row">
                                        <div className="col-2" />
                                        <div className="col-4">
                                            <img width="90%" height="90%" src={EmptyBox} alt="box" />
                                        </div>
                                        <div className="col-4">
                                            <Link to="/dashboard/games/counting/level2">
                                                <img width="100%" style={{ marginTop: "25px" }} src={Submit} alt="box" />
                                            </Link>
                                        </div>
                                        <div className="col-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

const CenterContent = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-30px"
}
const BackgroundImageSetter = {
    backgroundImage: `url(${Card})`,
    height: "70%",
    width: "70%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repear",
    backgroundSize: "100% 100%",
}
export default Level1;