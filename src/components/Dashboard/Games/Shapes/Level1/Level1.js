import React from "react";
import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/shapesBg.png";
import Circle from "../../../../../assets/shapesLevelsImages/circle.png"
import Closet from "../../../../../assets/shapesLevelsImages/closet.png"
import Frame from "../../../../../assets/shapesLevelsImages/frame.png"
import Triangle from "../../../../../assets/shapesLevelsImages/triangle.png"
import Square from "../../../../../assets/shapesLevelsImages/square.png"
import Rectangle from "../../../../../assets/shapesLevelsImages/rectangle.png"
import Arrow from "../../../../../assets/shapesLevelsImages/arrow.png"

const Level1 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"3"} seriesLevel={"1"} seriesName={"Shapes"} />
            <div style={mainDivHomepage}>
                <div className="row" >
                    <div className="col-3"></div>
                    <div className="col-4" style={{ marginTop: "-5%" }}>
                        <div style={CenterContent}>
                            <div style={FrameBackgroundImageSetter}>
                                <div className="row" style={{ marginTop: "10%", color: "#C84747" }}>
                                    <div className="col-2"></div>
                                    <div className="col-6">
                                        <h3>Rectangle</h3>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10%", color: "#C84747" }}>
                                    <div className="col-2"></div>
                                    <div className="col-9">
                                        <p>I have two long sides and two short sides.What am I?</p>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "-10px", color: "#C84747", textAlign: "center", fontSize: "0.5rem" }}>
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        <img width="50%" height="60%" src={Arrow} alt="box" />
                                        <p>DRAG THE ARROW AND CLICK ON RECTANGLE</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div style={CenterContent}>
                            <div style={BackgroundImageSetter}>
                                <div className="row" style={{ marginTop: "12%", marginLeft: "10%" }}>
                                    <div className="col-6" style={{ marginTop: "4%" }} >
                                        <img src={Triangle} alt="box" />
                                    </div>
                                    <div className="col-6">
                                        <img src={Square} alt="box" />
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "35%", marginLeft: "10%" }}>
                                    <div className="col-6">
                                        <img src={Rectangle} alt="box" />
                                    </div>
                                    <div className="col-6">
                                        <img src={Circle} alt="box" />
                                    </div>
                                </div>

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

const BackgroundImageSetter = {
    backgroundImage: `url(${Closet})`,
    height: "80%",
    width: "70%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repear",
    backgroundSize: "100% 100%",
}

const FrameBackgroundImageSetter = {
    backgroundImage: `url(${Frame})`,
    height: "50%",
    width: "60%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repear",
    backgroundSize: "100% 100%",
}

const CenterContent = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-30px"
}

export default Level1;