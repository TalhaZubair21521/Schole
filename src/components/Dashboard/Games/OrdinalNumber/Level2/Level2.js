import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import OrdinalNumberLevel1 from "../../../../../assets/bgs/ordinalNumberBg2.png";

const Level2 = (props) => {
    let history = useHistory();


    return (
      <div>
        <Navbar
          seriesNumber={"7"}
          seriesLevel={"2"}
          seriesName={"Ordinal Number"}
        />
        <div style={mainDivHomepage}>
          <div className="row">
            <div className="col-6" style={{ marginTop: "10%" }}>
              <div style={CenterContent}></div>
            </div>
          </div>
          <div style={block}>
            <button
              type="button"
              style={{ ...btn, color: "orange", borderColor: "orange" }}
              onClick={() => history.push("/dashboard/games/time/level2")}
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
              onClick={() => history.push("/dashboard/games/time/level2")}
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
    backgroundImage: `url(${OrdinalNumberLevel1})`,
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
    bottom: "15%",
    right: "3%"
}

export default Level2;