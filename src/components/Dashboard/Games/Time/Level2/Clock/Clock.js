import React from "react";
import ClockHand from "./Clockhand";
// import AdditionLevel1 from "../../../../../../assets/Clock.png";
import "./Clock.css";

const Clock = () => {
  //     updateClock() {
  //         var now = Math.round(( new Date().getTime() - new Date().setHours(0,0,0,0) ) / 1000)
  //         this.setState({ h:now/720, m:now/60, s:now })
  //   }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ClockHand name="hour" rotate="15" onClick={() => alert("C")} />
        </div>
        <div className="col-12" onClick={() => alert("C")}>
          <ClockHand name="min" rotate="30" />
        </div>
      </div>
    </div>
  );
};

export default Clock;
