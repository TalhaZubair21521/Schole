import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import TimeLevel3 from "../../../../../assets/bgs/timeBg3.png";

const Level3 = (props) => {
    let history = useHistory();
    
    // const [field, setField] = useState('');

    return (
      <div>
        <Navbar seriesNumber={"7"} seriesLevel={"3"} seriesName={"Time"} />
        <div style={mainDivHomepage}>
          <div className="row">
            <div className="col-6" style={{ marginTop: "-3%" }}>
              <div style={CenterContent}>
                <div className="container">
                  <div className="row"></div>
                </div>
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
                history.push("/dashboard/games/ordinalnumber/level1")
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
    width: "150%",
    fontSize: "1.3rem",
    marginTop: "3%"
}


const block = {
    position: "absolute",
    top: "0%",
    right: "0%",
    marginRight: "6%",
    marginTop: "1%"
}

export default Level3;