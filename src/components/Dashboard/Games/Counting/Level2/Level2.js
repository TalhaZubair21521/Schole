import React from "react";
import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/countingBg.png";
import Card from "../../../../../assets/countingLevelsImages/card2.png";

import Ballon1 from "../../../../../assets/countingLevelsImages/b1.png";
import Ballon2 from "../../../../../assets/countingLevelsImages/b2.png";
import Ballon3 from "../../../../../assets/countingLevelsImages/b3.png";
import Ballon4 from "../../../../../assets/countingLevelsImages/b4.png";
import Ballon5 from "../../../../../assets/countingLevelsImages/b5.png";
import Hoop from "../../../../../assets/countingLevelsImages/hoop.png";
import Button from "../../../../../assets/countingLevelsImages/submit.png";

const Level2 = (props) => {
    return (
        <div>
            <Navbar seriesNumber={"1"} seriesLevel={"2"} seriesName={"Counting"} />
            <div style={mainDivHomepage}>
                    <div style={CenterContent}>
                        <div style={BackgroundImageSetter}>
                            <div className="row" style={{marginTop:"8%"}}>
                                <div className="col-2"></div>
                                <div className="col-10">
                                <h2>Throw The Number on Respective Balls</h2>
                                </div>
                            </div>
                            <div className="row" style={{marginLeft:"10%",marginTop:"1%"}}>
                                <div className="col-2">
                                    <img src={Ballon1} alt="ballon" />
                                </div>
                                <div className="col-3">
                                    <img src={Ballon2} alt="ballon" />
                                </div>
                                <div className="col-2">
                                    <img src={Ballon3} alt="ballon" />
                                </div>
                                <div className="col-2">
                                    <img src={Ballon1} alt="ballon" />
                                </div>
                                <div className="col-2">
                                    <img src={Ballon4} alt="ballon" />
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-3" style={{marginLeft:"15%"}}>
                                    <img src={Ballon5} alt="ballon" />
                                </div>
                                <div className="col-2">
                                </div>
                                <div className="col-2">
                                    <img src={Ballon4} alt="ballon" />
                                </div>
                                <div className="col-2">
                                    <img src={Ballon1} alt="ballon" />
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"2%"}}>
                                <div className="col-3">
                                </div>
                                <div className="col-2">
                                    <img src={Button} alt="ballon" style={{height:"50px",width:"auto"}}/>
                                </div>
                                <div className="col-1" style={{marginTop:"-4%"}}>
                                    <img src={Hoop} alt="ballon" style={{height:"100px",width:"auto"}}/>
                                </div>
                            </div>
                            <div className="row" style={{marginTop:"5%",paddingLeft:"14%"}}>
                             
                                <div className="col-1" style={{paddingTop:"1%",marginRight:"0.1%",borderRadius: "10px",backgroundColor:"orange",border:"1px solid",textAlign:"center"}}>
                                    <h1>5</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>15</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>20</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>1</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>4</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>10</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>13</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>2</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>19</h1>
                                </div>
                                <div className="col-1" style={Number}>
                                    <h1>1</h1>
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

const Number = {
    paddingTop:"1%",
    marginRight:"0.1%",
    borderRadius: "10px",
    backgroundColor:"#E5E5E5",
    border:"1px solid",
    textAlign:"center"
}

export default Level2;