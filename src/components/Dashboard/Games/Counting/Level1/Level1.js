import React, { useState } from "react";
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
import BallonImage from "./DragImage/BallonImage";
import CardImage from "./DropImage/CardImage";

const Level1 = (props) => {
    const ballons = [{ number: 10, src: Ballon1 }, { number: 8, src: Ballon2 }, { number: 6, src: Ballon3 }, { number: 4, src: Ballon4 }, { number: 2, src: Ballon5 }]
    const [ballonImages, setballonImages] = useState(ballons);
    const cards = [{ id: 1, type: "empty", src: Ballon1 }, { id: 2, type: "empty", src: Ballon1 }, { id: 3, type: "empty", src: Ballon1 }, { id: 4, type: "empty", src: Ballon1 }, { id: 5, type: "empty", src: Ballon1 }]
    const [cardImages, setCardImages] = useState(cards);

    const updateLocation = (id, cardId) => {

    }
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
                                        {
                                            ((ballonImages.filter(ballon => ballon.number === 10)).length !== 0) ? (
                                                <BallonImage imageSrc={Ballon1} number={10} />
                                            ) : ("")
                                        }
                                    </div>
                                    <div className="col-3" />
                                    <div className="col-3" />
                                    <div className="col-3">
                                        {
                                            ((ballonImages.filter(ballon => ballon.number === 8)).length !== 0) ? (
                                                <BallonImage imageSrc={Ballon2} number={8} />
                                            ) : ("")
                                        }
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1" />
                                    <div className="col-5">
                                        {
                                            ((ballonImages.filter(ballon => ballon.number === 6)).length !== 0) ? (
                                                <BallonImage imageSrc={Ballon3} number={6} />
                                            ) : ("")
                                        }
                                    </div>
                                    <div className="col-3">
                                        {
                                            ((ballonImages.filter(ballon => ballon.number === 4)).length !== 0) ? (
                                                <BallonImage imageSrc={Ballon4} number={4} />
                                            ) : ("")
                                        }
                                    </div>
                                    <div className="col-3" />

                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        {
                                            ((ballonImages.filter(ballon => ballon.number === 2)).length !== 0) ? (
                                                <BallonImage imageSrc={Ballon5} number={2} />
                                            ) : ("")
                                        }
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
                                    <div className="row" style={{ textAlign: "center", margin: "auto", width: "60%", fontSize: "1.4rem", color: "red", fontWeight: "bold", marginBottom: "20px" }}>Drop Here</div>
                                    <div className="row">
                                        <div className="col-2" />
                                        <div className="col-4">
                                            {
                                                cardImages[0].type === "empty" ?
                                                    <CardImage id={cardImages[0].id} imageSrc={EmptyBox} updateLocation={updateLocation} /> :
                                                    <CardImage id={cardImages[0].id} imageSrc={FilledBox} upperImage={cardImages[0].src} updateLocation={updateLocation} />
                                            }
                                        </div>
                                        <div className="col-4">
                                            {
                                                cardImages[1].type === "empty" ?
                                                    <CardImage id={cardImages[1].id} imageSrc={EmptyBox} updateLocation={updateLocation} /> :
                                                    <CardImage id={cardImages[1].id} imageSrc={FilledBox} upperImage={cardImages[1].src} updateLocation={updateLocation} />
                                            }
                                        </div>
                                        <div className="col-2" />
                                    </div>
                                    <div className="row">
                                        <div className="col-2" />
                                        <div className="col-4">
                                            {
                                                cardImages[2].type === "empty" ?
                                                    <CardImage id={cardImages[2].id} imageSrc={EmptyBox} updateLocation={updateLocation} /> :
                                                    <CardImage id={cardImages[2].id} imageSrc={FilledBox} upperImage={cardImages[2].src} updateLocation={updateLocation} />
                                            }
                                        </div>
                                        <div className="col-4">
                                            {
                                                cardImages[3].type === "empty" ?
                                                    <CardImage id={cardImages[3].id} imageSrc={EmptyBox} updateLocation={updateLocation} /> :
                                                    <CardImage id={cardImages[3].id} imageSrc={FilledBox} upperImage={cardImages[3].src} updateLocation={updateLocation} />
                                            }
                                        </div>
                                        <div className="col-2" />
                                    </div>
                                    <div className="row">
                                        <div className="col-2" />
                                        <div className="col-4">
                                            {
                                                cardImages[4].type === "empty" ?
                                                    <CardImage id={cardImages[4].id} imageSrc={EmptyBox} updateLocation={updateLocation} /> :
                                                    <CardImage id={cardImages[4].id} imageSrc={FilledBox} upperImage={cardImages[4].src} updateLocation={updateLocation} />
                                            }
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