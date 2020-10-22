import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Background from "../../../../assets/bg3.png";
const Statistics = (props) => {

    const [overall] = useState({ label: "Overall Progress", color: "linear-gradient(#136A8A,#267871)", percentage: "70%" })
    const [stats] = useState([
        { label: "Logic", color: "linear-gradient(#C84E89,#F15F79)", percentage: "70%" },
        { label: "Mathematics", color: "linear-gradient(#BF5AE0,#A811DA)", percentage: "50%" },
        { label: "Sequencing", color: "linear-gradient(#314755,#26A0DA)", percentage: "60%" },
        { label: "Visualization", color: "linear-gradient(#16A085,#F4D03F)", percentage: "80%" },
        { label: "Exploration", color: "linear-gradient(#FF512F,#F09819)", percentage: "60%" }
    ]);

    return (
        <div style={mainDivHomepage}>
            <Navbar />
            <div style={{ marginTop: "74px" }}>
                <div style={{ textAlign: "center", color: "#C84747", fontSize: "3rem" }}>
                    <p>Statistics</p>
                </div>
                <div style={MainDiv}>
                    <div className="row">
                        <div className="col-2">
                            <div style={{ textAlign: "left", marginTop: "8px" }}>
                                <b>{overall.label}</b>
                            </div>
                        </div>
                        <div className="col-10">
                            <div style={{ textAlign: "left" }}>
                                <div className="container">
                                    <div class="container">
                                        <div class="progress" style={{ height: "40px" }}>
                                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: overall.percentage, backgroundImage: overall.color }}>
                                                {overall.percentage}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={MainDiv}>
                    <div className="col-8">
                        {stats.map(function (s) {
                            return (
                                <div key={s.label} className="row" style={{ marginTop: "20px" }}>
                                    <div className="col-3">
                                        <div style={{ textAlign: "left", marginTop: "2px" }}>
                                            {s.label}
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div style={{ textAlign: "left" }}>
                                            <div className="container">
                                                <div class="container">
                                                    <div class="progress" style={{ height: "25px" }}>
                                                        <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: s.percentage, backgroundImage: s.color }}>
                                                            {s.percentage}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-4">
                        <div style={{ textAlign: "center" }}>
                            Chart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mainDivHomepage = {
    position: "fixed",
    width: "100vw",
    backgroundImage: `url(${Background})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh"
}
const MainDiv = {
    margin: "auto",
    marginTop: "30px",
    width: "70%"
}
export default Statistics;