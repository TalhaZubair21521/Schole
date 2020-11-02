import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import AdditionLevel1 from "../../../../../assets/bgs/timeBg1.png";

const Level1 = (props) => {
    let history = useHistory();
    
const handleChange = (v) => {
        alert(v);
        if(v === 3){
            alert('You Choose Correct');
        }
        else {
            alert('You Choose Wrong');
        }

        alert("Next Level");
        history.push('/dashboard/games/time/level2');
    }

    return (
      <div>
        <Navbar seriesNumber={"7"} seriesLevel={"1"} seriesName={"Time"} />
        <div style={mainDivHomepage}>
          <div className="row">
            <div className="col-6" style={{ marginTop: "10%" }}>
              <div style={CenterContent}>
                <div className="container" style={{ marginLeft: "15%" }}>
                  <div className="row" style={{ marginBottom: "2%" }}>
                    <div
                      onClick={() => handleChange(3)}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "3px solid orange",
                        borderRadius: "10px",
                        padding: "2% 5%",
                        textAlign: "center",
                      }}
                    >
                      <h1>3'o' Clock</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      onClick={() => handleChange(12)}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "3px solid orange",
                        borderRadius: "10px",
                        padding: "2% 5%",
                        textAlign: "center",
                      }}
                    >
                      <h1>12'o' Clock</h1>
                    </div>
                    <div
                      onClick={() => handleChange(6)}
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "3px solid orange",
                        borderRadius: "10px",
                        padding: "2% 5%",
                        textAlign: "center",
                        marginLeft: "2%",
                      }}
                    >
                      <h1>6'o' Clock</h1>
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
    bottom: "15%",
    right: "3%"
}

export default Level1;