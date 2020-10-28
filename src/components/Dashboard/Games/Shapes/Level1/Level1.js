import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import useSound from 'use-sound';
import Test from "../../../../../assets/sound/test.mp3";

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
    let history = useHistory();
    let points = 0;
    const [mistake, setMistake] = useState(0);

    const shapes = [{ id:"0",name:"Triangle", text: "I have three sides and are sharp.What am I?" }, { id:"1",name:"Square", text: "I have four sides and are equal.What am I?" }, { id:"2",name:"Rectangle", text: "I have two long sides and two short sides.What am I?" }, { id:"3",name:"Circle", text: "I have no sides, same from everywhere.What am I?" }]
    const [shapesList] = useState(shapes);
    const [count, setCount] = useState(0);
    
    // const [design, setDesign] = useState(false);

    const [play] = useSound(Test,{ volume: 0.25 });

    const shapesHandle = (event) => {
        play();

        if(shapesList[count].id !== event.target.id ){
            setMistake(mistake+1);
        }

        setCount(count+1);

            if (count+1 === 4){
                alert("Mistake: " + (mistake+1));
                if((mistake+1)<3){
                    points=2;
                }
                alert("Points: " + points);
                history.push('/dashboard/games/shapes/level2');

        }
        
        

    };

    const ImageHover = (event) => {
        event.target.style.height = "100%"

    };

    const ImageHoverOff = (event) => {
        event.target.style.height = "90%"

    };


    return (
        <div>
            <Navbar seriesNumber={"3"} seriesLevel={"1"} seriesName={"Shapes"} />
            <div style={mainDivHomepage}>
                <div className="row" >
                    <div className="col-3"></div>
                    <div className="col-4" style={{ marginTop: "-5%" }}>
                        <div style={CenterContent}>
                            <div style={FrameBackgroundImageSetter}>
                                <div className="row" style={{ marginTop: "10%",color: "#C84747"}}>
                                    <div className="col-2"></div>
                                    <div className="col-6">
                                        <h3 >{shapesList[count].name}</h3>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "10%", color: "#C84747" }}>
                                    <div className="col-2"></div>
                                    <div className="col-9" style={{}}>
                                        <p >{shapesList[count].text}</p>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "-10px", color: "#C84747", textAlign: "center", fontSize: "0.5rem" }}>
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        <img width="50%" height="60%" src={Arrow} alt="box" />
                                        <p>DRAG THE ARROW AND CLICK ON {shapesList[count].name}</p>
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
                                        <img src={Triangle} alt="box" id="0" height="90%" onClick={shapesHandle} 
                                        onMouseEnter={ImageHover} onMouseLeave={ImageHoverOff}/>
                                    </div>
                                    <div className="col-6">
                                        <img src={Square} alt="box" id="1" height="90%" onClick={shapesHandle} 
                                        onMouseEnter={ImageHover} onMouseLeave={ImageHoverOff}/>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "35%", marginLeft: "10%" }}>
                                    <div className="col-6">
                                        <img src={Rectangle} alt="box" id="2" height="90%" onClick={shapesHandle} 
                                        onMouseEnter={ImageHover} onMouseLeave={ImageHoverOff}/>
                                    </div>
                                    <div className="col-6">
                                        <img src={Circle} alt="box" id="3" height="90%" onClick={shapesHandle} 
                                        onMouseEnter={ImageHover} onMouseLeave={ImageHoverOff}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style={block}>
                                    <button type="button" style={{...btn,color:'orange',borderColor:"orange"}} onClick={()=>history.push('/dashboard/games/shapes/level2')}>Don't Know</button><br/>
                                    <button type="button" style={{...btn,color:'red',borderColor:"red"}} onClick={()=>window.location.reload(false)}>Clear</button><br/>
                                    <button type="button" style={{...btn,color:'green',borderColor:"green"}} onClick={()=>alert('Complete the game first')}>Submit</button>
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

const btn = {
    border: "2px solid",
    backgroundColor: "#f7f0ee",
    padding: "7% 7%",
    width:"125%",
    fontSize: "1.3rem",
    marginTop:"2%"
}



const block = {
position: "absolute",
top: "0px",
left: "0px",
marginLeft:"3%",
marginTop:"1%"
}


export default Level1;