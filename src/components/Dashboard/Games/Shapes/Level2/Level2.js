import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { addResult } from "../../../../../services/axiosService";

import Navbar from "../../Navbar/Navbar";
import ShapeLevel2 from "../../../../../assets/shapesLevelsImages/Level2/bg.png";

import useSound from "use-sound";
import Test from "../../../../../assets/sound/test.mp3";

import Closet from "../../../../../assets/shapesLevelsImages/closet.png";
import Frame from "../../../../../assets/shapesLevelsImages/frame.png";
import Dice from "../../../../../assets/shapesLevelsImages/Level2/dice.png";
import Football from "../../../../../assets/shapesLevelsImages/Level2/football.png";
import Box from "../../../../../assets/shapesLevelsImages/Level2/box.png";
import Sandwich from "../../../../../assets/shapesLevelsImages/Level2/sandwich.png";
import Train from "../../../../../assets/shapesLevelsImages/Level2/train.png";

import Ball from "../../../../../assets/shapesLevelsImages/Level2/ball.png";
import Cone from "../../../../../assets/shapesLevelsImages/Level2/cone.png";
import Cube from "../../../../../assets/shapesLevelsImages/Level2/cube.png";
import Rectangle from "../../../../../assets/shapesLevelsImages/Level2/rectangle.png";

import Lion from "../../../../../assets/shapesLevelsImages/Level2/lion.png";
import Dialogue from "../../../../../assets/shapesLevelsImages/Level2/dialogue.png";

const Level2 = (props) => {
  let history = useHistory();
  let points = 0;
  const [mistake, setMistake] = useState(0);

  const shapes = [
    { id: "0", name: "Cube" },
    { id: "1", name: "football" },
    { id: "2", name: "box" },
    { id: "3", name: "sandwich" },
  ];
  const [shapesList] = useState(shapes);
  const [count, setCount] = useState(0);

  const [play] = useSound(Test, { volume: 0.5 });

  const shapesHandle = (event) => {
    play();

    if (shapesList[count].id !== event.target.id) {
      setMistake(mistake + 1);
    }

    setCount(count + 1);

    if (count + 1 === 4) {
      // alert("Mistake: " + (mistake+1));
      if (mistake + 1 < 3) {
        points = 3;
      }

      addResult({
        user: "5f9cf57addfdda374802028d",
        status: "G3L2",
        game: "game3",
        points: points,
      }).then((res) => {
        if (res.data.type === "success") {
          history.push("/dashboard/games/shapes/level3");
        } else {
          history.push("/Server-Not-Responding");
        }
      });
    }
  };

  const ImageHover = (event) => {
    event.target.style.height = "65%";
  };

  const ImageHoverOff = (event) => {
    event.target.style.height = "55%";
  };

  return (
    <div>
      <Navbar seriesNumber={"3"} seriesLevel={"2"} seriesName={"Shapes"} />
      <div style={mainDivHomepage}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4" style={{ marginTop: "-4%" }}>
            <div style={CenterContent}>
              <div style={FrameBackgroundImageSetter}>
                <div
                  className="row"
                  style={{ marginTop: "15%", marginLeft: "7%" }}
                >
                  <div className="col-2">
                    <img
                      src={Ball}
                      height="50%"
                      width="auto"
                      alt="box"
                      style={count === 1 ? Radius : null}
                    />
                  </div>
                  <div className="col-3"></div>
                  <div className="col-2">
                    <img
                      src={Cone}
                      height="60%"
                      width="auto"
                      alt="box"
                      style={count === 3 ? Radius : null}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginLeft: "10%" }}>
                  <div className="col-2">
                    <img
                      src={Cube}
                      height="50%"
                      width="auto"
                      alt="box"
                      style={count === 0 ? Radius : null}
                    />
                  </div>
                  <div className="col-2"></div>
                  <div className="col-2">
                    <img
                      src={Rectangle}
                      height="50%"
                      width="auto"
                      alt="box"
                      style={count === 2 ? Radius : null}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2" style={{ marginTop: "17%" }}>
            <img src={Dialogue} height="10%" width="auto" alt="lion" />
            <img src={Lion} height="15%" width="auto" alt="lion" />
          </div>

          <div className="col-5">
            <div style={CenterContent}>
              <div style={BackgroundImageSetter}>
                <div
                  className="row"
                  style={{ marginTop: "10%", marginLeft: "10%" }}
                >
                  <div className="col-6">
                    <img
                      src={Dice}
                      height="55%"
                      width="auto"
                      alt="box"
                      id="0"
                      onClick={shapesHandle}
                      onMouseEnter={ImageHover}
                      onMouseLeave={ImageHoverOff}
                    />
                  </div>
                  <div className="col-6" style={{ marginTop: "-4%" }}>
                    <img
                      src={Football}
                      height="55%"
                      width="auto"
                      alt="box"
                      id="1"
                      onClick={shapesHandle}
                      onMouseEnter={ImageHover}
                      onMouseLeave={ImageHoverOff}
                    />
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "20%", marginLeft: "10%" }}
                >
                  <div className="col-6">
                    <img
                      src={Box}
                      height="55%"
                      width="auto"
                      alt="box"
                      id="2"
                      onClick={shapesHandle}
                      onMouseEnter={ImageHover}
                      onMouseLeave={ImageHoverOff}
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={Sandwich}
                      height="55%"
                      width="auto"
                      alt="box"
                      id="3"
                      onClick={shapesHandle}
                      onMouseEnter={ImageHover}
                      onMouseLeave={ImageHoverOff}
                    />
                  </div>
                </div>
                <div
                  className="row"
                  style={{ marginTop: "5%", marginLeft: "10%" }}
                >
                  <div className="col-12">
                    <img src={Train} height="auto" width="80%" alt="box" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={block}>
            <button
              type="button"
              style={{ ...btn, color: "orange", borderColor: "orange" }}
              onClick={() => history.push("/dashboard/games/shapes/level3")}
            >
              Don't Know
            </button>
            <br />
            <button
              type="button"
              style={{ ...btn, color: "red", borderColor: "red" }}
              onClick={() => window.location.reload(false)}
            >
              Clear
            </button>
            <br />
            <button
              type="button"
              style={{ ...btn, color: "green", borderColor: "green" }}
              onClick={() => alert("Complete the game first")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mainDivHomepage = {
  position: "fixed",
  width: "100vw",
  backgroundImage: `url(${ShapeLevel2})`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100vw 100vh",
};

const BackgroundImageSetter = {
  backgroundImage: `url(${Closet})`,
  height: "80%",
  width: "70%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repear",
  backgroundSize: "100% 100%",
};

const FrameBackgroundImageSetter = {
  backgroundImage: `url(${Frame})`,
  height: "60%",
  width: "70%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repear",
  backgroundSize: "100% 100%",
};

const CenterContent = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-30px",
};

const Radius = {
  border: "2px solid #52c405",
  borderRadius: "30%",
  padding: "5px",
};

const btn = {
  border: "2px solid",
  backgroundColor: "#f7f0ee",
  padding: "7% 7%",
  width: "125%",
  fontSize: "1.3rem",
  marginTop: "2%",
};

const block = {
  position: "absolute",
  bottom: "15%",
  left: "0px",
  marginLeft: "1%",
};

export default Level2;
