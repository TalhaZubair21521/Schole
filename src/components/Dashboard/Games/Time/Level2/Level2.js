import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import AdditionLevel1 from "../../../../../assets/bgs/timeBg2.png";
import AdditionLevel2 from "../../../../../assets/Clock.png";
import Clock from "./Clock/Clock";

const Level2 = (props) => {
  let history = useHistory();

  // useEffect(() => {
  //   console.log(new Date());
  //   console.log(value);
  //   const interval = setInterval(() => setValue(new Date()), 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      <Navbar seriesNumber={"7"} seriesLevel={"2"} seriesName={"Time"} />
      <div style={mainDivHomepage}>
        <div style={CenterContent}>
          <div style={{    marginLeft: "12.8%", paddingTop: "13.8%"    }}>
            <Clock />
          </div>
        </div>
        <div style={block}>
          <button
            type="button"
            style={{ ...btn, color: "orange", borderColor: "orange" }}
            onClick={() => history.push("/dashboard/games/time/level3")}
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
            onClick={() => history.push("/dashboard/games/time/level3")}
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
  backgroundImage: `url(${AdditionLevel2})`,
  backgroundRepeat: "no-repeat",
  marginTop: "12%",
  marginLeft: "5%",
};

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
    top: "0%",
    right: "3%"
}

export default Level2;