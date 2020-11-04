import React, { useState } from "react";

import { addResult } from "../../../../../services/axiosService";

import Navbar from "../../Navbar/Navbar";
import CountingLevel1 from "../../../../../assets/bgs/countingBg.png";
import Card from "../../../../../assets/countingLevelsImages/card2.png";
import { useHistory } from "react-router-dom";

import L1 from "../../../../../assets/countingLevelsImages/lolipops/l10.png";
import L2 from "../../../../../assets/countingLevelsImages/lolipops/l20.png";
import L3 from "../../../../../assets/countingLevelsImages/lolipops/l30.png";
import L4 from "../../../../../assets/countingLevelsImages/lolipops/l40.png";
import L5 from "../../../../../assets/countingLevelsImages/lolipops/l50.png";
import L6 from "../../../../../assets/countingLevelsImages/lolipops/l60.png";
import L7 from "../../../../../assets/countingLevelsImages/lolipops/l70.png";
import L8 from "../../../../../assets/countingLevelsImages/lolipops/l80.png";
import L9 from "../../../../../assets/countingLevelsImages/lolipops/l90.png";
import L10 from "../../../../../assets/countingLevelsImages/lolipops/l100.png";

import BackgroundCard from "./DropImage/Card";
import CardImage from "../../../../../assets/countingLevelsImages/lolipops/bg.png";

const Level3 = (props) => {
  const history = useHistory();
  let points = 0;

  const data = [
    { id: 0, src: L3, value: 30 },
    { id: 1, src: L5, value: 50 },
    { id: 2, src: L1, value: 10 },
    { id: 3, src: L10, value: 100 },
    { id: 4, src: L4, value: 40 },
    { id: 5, src: L9, value: 90 },
    { id: 6, src: L6, value: 60 },
    { id: 7, src: L8, value: 80 },
    { id: 8, src: L7, value: 70 },
    { id: 9, src: L2, value: 20 },
  ];
  const [images, setImages] = useState(data);
  const [count, setCount] = useState(0);

  const Submit = () => {
    const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    var flag = true;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] === images[i].value) {
      } else {
        flag = false;
      }
    }
    if (flag) {
      points = 4;

      addResult({
        user: localStorage.getItem("userId"),
        status: "G2L3",
        game: "game2",
        points: points,
      }).then((res) => {
        if (res.data.type === "success") {
          history.push("/dashboard/games/shapes/level1");
        } else {
          history.push("/Server-Not-Responding");
        }
      });
    }
  };

  const replaceImages = (draggedId, droppedId) => {
    const lollipops = images;

    const dragged = lollipops[draggedId];
    const dropped = lollipops[droppedId];

    const src = dragged.src;
    const value = dragged.value;

    dragged.src = dropped.src;
    dragged.value = dropped.value;

    dropped.src = src;
    dropped.value = value;

    lollipops[draggedId] = dragged;
    lollipops[droppedId] = dropped;

    setImages(lollipops);
    setCount(count + 1);
  };

  return (
    <div>
      <Navbar seriesNumber={"1"} seriesLevel={"2"} seriesName={"Counting"} />
      <div style={mainDivHomepage}>
        <div style={CenterContent}>
          <div style={BackgroundImageSetter}>
            <div className="row" style={{ marginTop: "10%" }}>
              <div className="col-2"></div>
              <div className="col-10">
                <h2 style={{ color: "#C84747", fontWeight: "bold" }}>
                  Arrange The Lollipop In Order
                </h2>
              </div>
              <div className="container" style={{ marginLeft: "160px" }}>
                <div className="row">
                  <div className="col-2">
                    <BackgroundCard
                      id={images[0].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[0].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[1].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[1].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[2].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[2].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[3].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[3].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[4].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[4].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <BackgroundCard
                      id={images[5].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[5].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[6].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[6].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[7].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[7].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[8].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[8].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                  <div className="col-2">
                    <BackgroundCard
                      id={images[9].id}
                      backgroundSrc={CardImage}
                      imageSrc={images[9].src}
                      replaceImages={replaceImages}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={block}>
          <button
            type="button"
            style={{ ...btn, color: "orange", borderColor: "orange" }}
            onClick={() => history.push("/dashboard/games/shapes/level1")}
          >
            I Don't Know
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
            onClick={Submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const mainDivHomepage = {
  position: "fixed",
  width: "100vw",
  backgroundImage: `url(${CountingLevel1})`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100vw 100vh",
};
const CenterContent = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "-30px",
};

const BackgroundImageSetter = {
  marginBottom: "2%",
  backgroundImage: `url(${Card})`,
  height: "95%",
  width: "80%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repear",
  backgroundSize: "100% 100%",
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
  top: "1px",
  left: "3px",
};

export default Level3;
