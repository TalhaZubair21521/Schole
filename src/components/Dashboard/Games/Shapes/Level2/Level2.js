import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import ShapeLevel2 from "../../../../../assets/shapesLevelsImages/Level2/bg.png";

import Closet from "../../../../../assets/shapesLevelsImages/closet.png"
import Frame from "../../../../../assets/shapesLevelsImages/frame.png"
import Dice from "../../../../../assets/shapesLevelsImages/Level2/dice.png"
import Football from "../../../../../assets/shapesLevelsImages/Level2/football.png"
import Box from "../../../../../assets/shapesLevelsImages/Level2/box.png"
import Sandwich from "../../../../../assets/shapesLevelsImages/Level2/sandwich.png"

const Level2 = (props) => {

    let history = useHistory();

    const shapes = [{ id:0,name:"Triangle", text: "I have three sides and are sharp.What am I?" }, { id:1,name:"Square", text: "I have four sides and are equal.What am I?" }, { id:2,name:"Rectangle", text: "I have two long sides and two short sides.What am I?" }, { id:3,name:"Circle", text: "I have no sides, same from everywhere.What am I?" }]
    const [shapesList, setShapes] = useState(shapes);
    const [count, setCount] = useState(0);
    const shapesHandle = (event) => {
    
        if(shapesList[count].id == event.target.id ){
            alert('You Choose Correct');
        }
        else {
            alert('You Choose Wrong');
        }
        setCount(count+1);

        if (count+1 === 4){
            alert("Next Level");
            history.push('/dashboard/games/shapes/level2');

        }

    };


    return (
        <div>
            <Navbar seriesNumber={"3"} seriesLevel={"2"} seriesName={"Shapes"} />
            <div style={mainDivHomepage}>
                <div className="row" >
                    <div className="col-3"></div>
                    <div className="col-4" style={{ marginTop: "-5%" }}>
                        <div style={CenterContent}>
                            <div style={FrameBackgroundImageSetter}>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div style={CenterContent}>
                            <div style={BackgroundImageSetter}>
                                <div className="row" style={{ marginTop: "12%", marginLeft: "10%" }}>
                                    <div className="col-6"  >
                                        <img src={Dice} height="50%" width="auto" alt="box" id="0" onClick={shapesHandle}/>
                                    </div>
                                    <div className="col-6" style={{ marginTop: "-4%" }}>
                                        <img src={Football} height="60%" width="auto" alt="box" id="1" onClick={shapesHandle}/>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "20%", marginLeft: "10%" }}>
                                    <div className="col-6">
                                        <img src={Box} height="50%" width="auto" alt="box" id="2" onClick={shapesHandle}/>
                                    </div>
                                    <div className="col-6">
                                        <img src={Sandwich} height="50%" width="auto" alt="box" id="3" onClick={shapesHandle}/>
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
    backgroundImage: `url(${ShapeLevel2})`,
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
    marginLeft:"-40%"
}

const CenterContent = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-30px"
}

export default Level2;