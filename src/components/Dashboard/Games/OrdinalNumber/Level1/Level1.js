import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { addResult } from "../../../../../services/axiosService";
import AdditionLevel1 from "../../../../../assets/bgs/ordinalNumberBg1.png";
import Girl1 from "../../../../../assets/ordinalNumberLevelsImages/girl1Level1.png";
import Girl2 from "../../../../../assets/ordinalNumberLevelsImages/girl2Level1.png";
import Girl3 from "../../../../../assets/ordinalNumberLevelsImages/girl3Level1.png";

const Level1 = (props) => {
    let history = useHistory();
    let points = 0;

    const imageHandle = (id) => {
      if (id === 2) {
        points = 2;
      }

      addResult({
        user: localStorage.getItem("userId"),
        status: "G9L1",
        game: "game9",
        points: points,
      }).then((res) => {
        if (res.data.type === "success") {
          history.push("/dashboard/games/ordinalnumber/level2");
        } else {
          history.push("/Server-Not-Responding");
        }
      });
    };


    return (
      <div>
        <Navbar
          seriesNumber={"9"}
          seriesLevel={"1"}
          seriesName={"Ordinal Number"}
        />
        <div style={mainDivHomepage}>
          <div className="conatiner" style={{ marginTop: "5%" }}>
            <div className="row">
              <div className="col-8"></div>
              <div className="col-1">
                <img
                  src={Girl1}
                  height="50%"
                  width="auto"
                  alt="clock1"
                  onClick={() => imageHandle(1)}
                />
              </div>
              <div className="col-1">
                <img
                  src={Girl2}
                  height="50%"
                  width="auto"
                  alt="clock1"
                  onClick={() => imageHandle(2)}
                />
              </div>
              <div className="col-2">
                <img
                  src={Girl3}
                  height="50%"
                  width="auto"
                  alt="clock1"
                  onClick={() => imageHandle(3)}
                />
              </div>
            </div>
          </div>
          <div style={block}>
            <button
              type="button"
              style={{ ...btn, color: "orange", borderColor: "orange" }}
              onClick={() =>
               
               
               
               
                history.push("/dashboard/games/ordinalnumber/level2")
              
              
              
              
              }
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
              onClick={() => alert("Choose an option first.")}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}

const mainDivHomepage = {
    position: "fixed",
    width: "100vw",
    backgroundImage: `url(${AdditionLevel1})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh"
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
    bottom: "15%",
    right: "3%"
}

export default Level1;