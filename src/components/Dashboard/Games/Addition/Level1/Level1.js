import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { addResult } from "../../../../../services/axiosService";

import AdditionLevel1 from "../../../../../assets/bgs/additionBg1.png";

const Level1 = (props) => {
    let history = useHistory();
    let points = 0;
    
    const [field, setField] = useState('');

    const fieldHandle = () => {
      if (field === "6") {
        points = 2;
      }

      // console.log(points);
      addResult({
        user: localStorage.getItem("userId"),
        status: "G5L1",
        game: "game5",
        points: points,
      }).then((res) => {
        if (res.data.type === "success") {
          history.push("/dashboard/games/addition/level2");
        } else {
          history.push("/Server-Not-Responding");
        }
      });
      // history.push("/dashboard/games/addition/level1");
    };

    return (
      <div>
        <Navbar seriesNumber={"5"} seriesLevel={"1"} seriesName={"Addition"} />
        <div style={mainDivHomepage}>
          <div className="row">
            <div className="col-12" style={{ marginTop: "-3%" }}>
              <div style={CenterContent}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "3px solid red",
                    borderRadius: "5px",
                    padding: "1% 2%",
                    textAlign: "center",
                  }}
                >
                  <h1>3</h1>
                </div>
                <div style={{ marginLeft: "2%", marginRight: "2%" }}>
                  <h1>+</h1>
                </div>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "3px solid red",
                    borderRadius: "5px",
                    padding: "1% 2%",
                    textAlign: "center",
                  }}
                >
                  <h1>3</h1>
                </div>
                <div style={{ marginLeft: "2%", marginRight: "2%" }}>
                  <h1>=</h1>
                </div>
                <div>
                  <input
                    type="text"
                    name="result"
                    value={field}
                    onChange={(event) => setField(event.target.value)}
                    className="no-outline"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "3px solid #217C58",
                      borderRadius: "5px",
                      padding: "2% 3%",
                      textAlign: "center",
                      height: "90px",
                      width: "90px",
                      fontSize: "2.2rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={block}>
            <button
              type="button"
              style={{ ...btn, color: "orange", borderColor: "orange" }}
              onClick={() => history.push("/dashboard/games/addition/level2")}
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
              onClick={fieldHandle}
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
    width: "125%",
    fontSize: "1.3rem",
    marginTop: "3%"
}


const block = {
    position: "absolute",
    top: "1%",
    right: "1%",
    marginRight: "3%",
    marginTop: "1%"
}

export default Level1;