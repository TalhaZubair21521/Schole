import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/countingBg.png";
import Card from "../../../../../assets/countingLevelsImages/card2.png";

import Ball1 from "../../../../../assets/countingLevelsImages/5.png";
import Ball2 from "../../../../../assets/countingLevelsImages/10.png";
import Ball3 from "../../../../../assets/countingLevelsImages/15.png";
import Ball4 from "../../../../../assets/countingLevelsImages/20.png";
import Ball5 from "../../../../../assets/countingLevelsImages/25.png";
import Ball6 from "../../../../../assets/countingLevelsImages/30.png";
import Ball7 from "../../../../../assets/countingLevelsImages/35.png";
import Ball8 from "../../../../../assets/countingLevelsImages/40.png";
import Ball9 from "../../../../../assets/countingLevelsImages/45.png";
import Ball10 from "../../../../../assets/countingLevelsImages/50.png";

import Hoop from "../../../../../assets/countingLevelsImages/hoop.png";
import { useHistory } from "react-router-dom";
import BallonImage from "./DragImage/DragImage";
import DropImage from "./DropImage/DropImage";

import useSound from 'use-sound';
import Test from "../../../../../assets/sound/test.mp3"

const Level2 = () => {

    let history = useHistory();

    const nums = [25, 10, 50, 40, 5, 20, 15, 35, 30, 45];
    const [numbers] = useState(nums);

    const [selected, setSelected] = useState(0);

    const ballons = [{ id: 0, src: Ball1, number: 5 }, { id: 1, src: Ball2, number: 10 }, { id: 2, src: Ball3, number: 15 }, { id: 3, src: Ball4, number: 20 }, { id: 4, src: Ball5, number: 25 }, { id: 5, src: Ball6, number: 30 }, { id: 6, src: Ball7, number: 35 }, { id: 7, src: Ball8, number: 40 }, { id: 8, src: Ball9, number: 45 }, { id: 9, src: Ball10, number: 50 }]
    const [ballonsImages, setBallonsImages] = useState(ballons);

    const [play] = useSound(Test, { volume: 0.5 });

    const updateBallonImages = (id) => {
        play();
        const newBallons = ballonsImages.filter((ballon) => {
            if (ballon.id === id) {
                if (ballon.number !== numbers[selected]) {
                    // alert("Not Matched");
                    return ballon;
                } else {
                    ballon.id = -1;
                    ballon.number = 0;
                    ballon.src = null
                    setSelected(selected + 1);
                    if (selected === 9) {
                        // alert("Next Game");
                        history.push("/dashboard/games/shapes/level1");
                    }
                    return ballon;
                }
            } else {
                return true;
            }
        });
        setBallonsImages(newBallons);
        console.log(ballonsImages);
    }

    return (
        <div>
            <Navbar seriesNumber={"1"} seriesLevel={"2"} seriesName={"Counting"} />
            <div style={mainDivHomepage}>
                <div style={CenterContent}>
                    <div style={BackgroundImageSetter}>
                        <div className="row" style={{ marginTop: "8%" }}>
                            <div className="col-2"></div>
                            <div className="col-10" style={{ color: "red", fontSize: "1.7rem" }}>
                                <p style={{ color: "#C84747" }}>Throw The Highlight Number Ball on the Hoop</p>
                            </div>
                        </div>
                        <div className="row" style={{ marginLeft: "14%", marginTop: "1%" }}>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 5)).length !== 0 ?
                                        <BallonImage id={ballonsImages[0].id} imageSrc={Ball1} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 10)).length !== 0 ?
                                        <BallonImage id={ballonsImages[1].id} imageSrc={Ball2} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 15)).length !== 0 ?
                                        <BallonImage id={ballonsImages[2].id} imageSrc={Ball3} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 20)).length !== 0 ?
                                        <BallonImage id={ballonsImages[3].id} imageSrc={Ball4} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 25)).length !== 0 ?
                                        <BallonImage id={ballonsImages[4].id} imageSrc={Ball5} /> :
                                        <div />
                                }
                            </div>
                        </div>
                        <div className="row" style={{ marginLeft: "14%", marginTop: "1%" }}>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 30)).length !== 0 ?
                                        <BallonImage id={ballonsImages[5].id} imageSrc={Ball6} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 35)).length !== 0 ?
                                        <BallonImage id={ballonsImages[6].id} imageSrc={Ball7} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 40)).length !== 0 ?
                                        <BallonImage id={ballonsImages[7].id} imageSrc={Ball8} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 45)).length !== 0 ?
                                        <BallonImage id={ballonsImages[8].id} imageSrc={Ball9} /> :
                                        <div />
                                }
                            </div>
                            <div className="col-2">
                                {
                                    (ballonsImages.filter((ballon) => ballon.number === 50)).length !== 0 ?
                                        <BallonImage id={ballonsImages[9].id} imageSrc={Ball10} /> :
                                        <div />
                                }
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "5%" }}>
                            <div className="col-3">
                            </div>
                            <div className="col-2">
                            </div>
                            <div className="col-1" style={{ marginTop: "-4%" }}>
                                <DropImage imageSrc={Hoop} updateBallonImages={updateBallonImages} />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "2%", paddingLeft: "14%" }}>
                            <div className="col-1" style={selected === 0 ? Number2 : Number}>
                                <h1>{numbers[0]}</h1>
                            </div>
                            <div className="col-1" style={selected === 1 ? Number2 : Number}>
                                <h1>{numbers[1]}</h1>
                            </div>
                            <div className="col-1" style={selected === 2 ? Number2 : Number}>
                                <h1>{numbers[2]}</h1>
                            </div>
                            <div className="col-1" style={selected === 3 ? Number2 : Number}>
                                <h1>{numbers[3]}</h1>
                            </div>
                            <div className="col-1" style={selected === 4 ? Number2 : Number}>
                                <h1>{numbers[4]}</h1>
                            </div>
                            <div className="col-1" style={selected === 5 ? Number2 : Number}>
                                <h1>{numbers[5]}</h1>
                            </div>
                            <div className="col-1" style={selected === 6 ? Number2 : Number}>
                                <h1>{numbers[6]}</h1>
                            </div>
                            <div className="col-1" style={selected === 7 ? Number2 : Number}>
                                <h1>{numbers[7]}</h1>
                            </div>
                            <div className="col-1" style={selected === 8 ? Number2 : Number}>
                                <h1>{numbers[8]}</h1>
                            </div>
                            <div className="col-1" style={selected === 9 ? Number2 : Number}>
                                <h1>{numbers[9]}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={block}>
                    <button type="button" style={{ ...btn, color: 'orange', borderColor: "orange" }} onClick={() => history.push('/dashboard/games/shapes/level1')}>Don't Know</button><br />
                    <button type="button" style={{ ...btn, color: 'red', borderColor: "red" }} onClick={() => window.location.reload(false)}>Clear</button><br />
                    <button type="button" style={{ ...btn, color: 'green', borderColor: "green" }} onClick={() => alert('Complete the game first')}>Submit</button>
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
    marginBottom: "2%",
    backgroundImage: `url(${Card})`,
    height: "95%",
    width: "80%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repear",
    backgroundSize: "100% 100%",
}

const Number = {
    paddingTop: "1%",
    marginRight: "0.1%",
    // borderRadius: "10px",
    backgroundColor: "#E5E5E5",
    border: "1px solid",
    textAlign: "center"
}
const Number2 = {
    paddingTop: "1%",
    marginRight: "0.1%",
    borderRadius: "10px",
    backgroundColor: "orange",
    border: "1px solid",
    textAlign: "center"
}

const btn = {
    border: "2px solid",
    backgroundColor: "#f7f0ee",
    padding: "7% 7%",
    width: "125%",
    fontSize: "1.3rem",
    marginTop: "2%"
}

const block = {
    position: "absolute",
    top: "0px",
    left: "0px",
    marginLeft: "3%",
    marginTop: "1%"
}
export default Level2;