import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { addResult } from "../../../../../services/axiosService";

import TimeLevel3 from "../../../../../assets/bgs/timeBg3.png";
import Clock1 from "../../../../../assets/timeLevelsImages/clock1.png";
import Clock2 from "../../../../../assets/timeLevelsImages/clock2.png";
import Clock3 from "../../../../../assets/timeLevelsImages/clock3.png";

const Level3 = (props) => {
    let history = useHistory();
    let points = 0;

    const clockHandle = (id) => {
      
      if (id === 2){
          points = 4;
      }

      addResult({
        user: localStorage.getItem("userId"),
        status: "G7L3",
        game: "game7",
        points: points,
      }).then((res) => {
        if (res.data.type === "success") {
          history.push("/dashboard/games/ordinalnumber/level1");
        } else {
          history.push("/Server-Not-Responding");
        }
      });

    };


    return (
      <div>
        <Navbar seriesNumber={"7"} seriesLevel={"3"} seriesName={"Time"} />
        <div style={mainDivHomepage}>
                <div className="container" style={{ marginTop: "17%" }}>
                  <div className="row">
                    <div className="col-3">
                      <img
                        src={Clock1}
                        height="50%"
                        width="auto"
                        alt="clock1"
                        onClick={()  =>  clockHandle(1)}
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Clock2}
                        height="50%"
                        width="auto"
                        alt="clock1"
                        onClick={()  =>  clockHandle(2)}
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Clock3}
                        height="50%"
                        width="auto"
                        alt="clock1"
                        onClick={()  =>  clockHandle(3)}
                      />
                    </div>
                  </div>
                </div>
          <div style={block}>
            <button
              type="button"
              style={{ ...btn, color: "orange", borderColor: "orange" }}
              onClick={() =>
                history.push("/dashboard/games/ordinalnumber/level1")
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
              onClick={() =>
                alert("Choose an option first.")
              }
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
  backgroundImage: `url(${TimeLevel3})`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100vw 100vh",
};

const btn = {
  border: "2px solid",
  backgroundColor: "#f7f0ee",
  padding: "7% 7%",
  width: "125%",
  fontSize: "1.3rem",
  marginTop: "3%",
};

const block = {
  position: "absolute",
  top: "0%",
  right: "3%",
};

export default Level3;