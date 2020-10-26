import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import ShapeLevel2 from "../../../../../assets/shapesLevelsImages/Level2/bg.png";

import Frame from "../../../../../assets/shapesLevelsImages/frame.png";

import Ball from "../../../../../assets/shapesLevelsImages/Level2/ball.png";
import Cone from "../../../../../assets/shapesLevelsImages/Level2/cone.png";
import Cube from "../../../../../assets/shapesLevelsImages/Level2/cube.png";
import Rectangle from "../../../../../assets/shapesLevelsImages/Level2/rectangle.png";

import Lion from "../../../../../assets/shapesLevelsImages/Level2/lion.png";
import Dialogue from "../../../../../assets/shapesLevelsImages/Level2/dialogue.png";

const Level3 = (props) => {

    let history = useHistory();

    const shapes = [{ id: "0", name: "Cube", option: "Sphere" }, { id: "1", name: "Ball", option: "rectangle" }, { id: "2", name: "rectangle", option: "Cube" }, { id: "3", name: "Sphere", option: "Ball" }]
    const [shapesList] = useState(shapes);
    const [count, setCount] = useState(0);
    const shapesHandle = (event) => {
        if (shapesList[count].id === event.target.id) {
            alert('You Choose Correct');
        } else {
            alert('You Choose Wrong');
        }
        setCount(count + 1);
        if (count + 1 === 4) {
            alert("Next Level");
            history.push('/dashboard/games/ordering/level1');
        }
    };

    return (
        <div>
            <Navbar seriesNumber={"3"} seriesLevel={"3"} seriesName={"Shapes"} />
            <div style={mainDivHomepage}>
                <div className="row" >
                    <div className="col-4" style={{ marginTop: "-3%" }}>
                        <div style={CenterContent}>
                            <div style={FrameBackgroundImageSetter}>
                                <div className="row" style={{ marginTop: "15%", marginLeft: "7%" }}>
                                    <div className="col-2">
                                        <img src={Ball} height="50%" width="auto" alt="box" style={count === 1 ? Radius : null} />
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-2">
                                        <img src={Cone} height="60%" width="auto" alt="box" style={count === 3 ? Radius : null} />
                                    </div>
                                </div>
                                <div className="row" style={{ marginLeft: "10%" }}>
                                    <div className="col-2" >
                                        <img src={Cube} height="50%" width="auto" alt="box" style={count === 0 ? Radius : null} />
                                    </div>
                                    <div className="col-2"></div>
                                    <div className="col-2">
                                        <img src={Rectangle} height="50%" width="auto" alt="box" style={count === 2 ? Radius : null} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3" style={{ marginTop: "10%" }}>
                        <img src={Dialogue} height="13%" width="auto" alt="lion" />
                        <img src={Lion} height="15%" width="auto" alt="lion" />
                    </div>
                    <div className="col-5">
                        <div style={CenterContent}>
                            <div className="container" style={{ marginLeft: "30%" }}>
                                <div className="row">
                                    <h1 id={shapesList[count].id} onClick={shapesHandle}>{shapesList[count].name}</h1>
                                </div>
                                <div className="row">
                                    <h1 id="4" onClick={shapesHandle}>{shapesList[count].option}</h1>
                                </div>
                                <div style={block}>
                                    <button type="button" style={{ ...btn, color: 'orange', borderColor: "orange" }} onClick={() => history.push('/dashboard/games/ordering/level1')}>Don't Know</button><br />
                                    <button type="button" style={{ ...btn, color: 'red', borderColor: "red" }} onClick={() => window.location.reload(false)}>Clear</button><br />
                                    <button type="button" style={{ ...btn, color: 'green', borderColor: "green" }} onClick={() => alert('Complete the game first')}>Submit</button>
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
    backgroundImage: `url(${ShapeLevel2})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh"
}


const FrameBackgroundImageSetter = {
    backgroundImage: `url(${Frame})`,
    height: "60%",
    width: "70%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%"
}

const CenterContent = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-30px"
}

const Radius = {
    border: "2px solid #52c405",
    borderRadius: "30%",
    padding: "5px"
}
const btn = {
    border: "2px solid",
    backgroundColor: "#f7f0ee",
    padding: "7% 7%",
    width: "125%",
    fontSize: "1.3rem",
    marginTop: "3%"
}



const block = {
    position: "absolute",
    top: "1%",
    right: "1%",
    marginRight: "10%",
    marginTop: "2%"
}

export default Level3;