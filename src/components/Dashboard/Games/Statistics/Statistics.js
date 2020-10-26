import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Background from "../../../../assets/bg3.png";
import { Radar, Chart } from "react-chartjs-2";

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.title.fontSize = 16;
const Statistics = (props) => {

    const [overall] = useState({ label: "Overall Progress", color: "#136A8A", percentage: "70%" })
    const [stats] = useState([
        { label: "Logic", color: "linear-gradient(#C84E89,#F15F79)", percentage: "70%" },
        { label: "Mathematics", color: "linear-gradient(#BF5AE0,#A811DA)", percentage: "50%" },
        { label: "Sequencing", color: "linear-gradient(#314755,#26A0DA)", percentage: "60%" },
        { label: "Visualization", color: "linear-gradient(#16A085,#F4D03F)", percentage: "80%" },
        { label: "Exploration", color: "linear-gradient(#FF512F,#F09819)", percentage: "60%" }
    ]);
    const [data] = useState({
        labels: [
            "Logic",
            "Mathematics",
            "Sequencing",
            "Visualization",
            "Exploration"],
        datasets: [
            {
                label: "Summary",
                backgroundColor: "rgba(106, 52, 240,0.8)",
                color: "white",
                // borderColor: "",
                pointBackgroundColor: "#A03232",
                data: [20, 20, 20, 20, 80]
            }
        ]
    });

    const [options] = useState({
        title: {
            display: false,
            text: 'Summary'
        },
        scale: {
            pointTable: {
                fontColor: "red"
            },
            reverse: false,
            gridLines: {
                color: [
                    'orange',
                    'red',
                    'blue',
                    'green',
                    'yellow',
                    'orange',
                ]
            },
            ticks: {
                beginAtZero: true
            }
        }
    })
    return (
        <div style={mainDivHomepage}>
            <Navbar />
            <div style={{ marginTop: "74px" }}>
                <div style={{ textAlign: "center", color: "#C84747", fontSize: "3rem" }}>
                    <p>Statistics</p>
                </div>
                <div style={MainDiv}>
                    <div className="row">
                        <div className="col-7">
                            <div className="row">
                                <div className="col-3">
                                    <div style={{ textAlign: "left", marginTop: "8px" }}>
                                        <b>{overall.label}</b>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div style={{ textAlign: "left" }}>
                                        <div className="container">
                                            <div className="container">
                                                <div className="progress" style={{ height: "40px" }}>
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: overall.percentage, backgroundColor: overall.color }}>
                                                        {overall.percentage}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                    <div className="container">
                                                        <div className="progress" style={{ height: "25px" }}>
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: s.percentage, backgroundImage: s.color }}>
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
                        <div className="col-5">
                            <div style={{ textAlign: "center", backgroundImage: "", color: "black" }}>
                                <Radar
                                    data={data}
                                    options={options}
                                    height={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
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
    width: "80%"
}
export default Statistics;