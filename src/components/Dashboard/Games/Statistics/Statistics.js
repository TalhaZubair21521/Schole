import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Background from "../../../../assets/bg3.png";
import { Radar, Chart } from "react-chartjs-2";
import axios from "axios";

Chart.defaults.global.defaultFontColor = "black";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.title.fontSize = 16;
const Statistics = (props) => {
  const [overall, setOverall] = useState({});
  const [stats, setStats] = useState([]);
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/result/statistics`)
      .then((res) => {
        if (res.data.type === "success") {
          console.log(res.data.result);
          let overall = parseInt(
            ((res.data.result[0] +
              res.data.result[1] +
              res.data.result[2] +
              res.data.result[3] +
              res.data.result[4]) /
              500) *
              100
          );

          setOverall({
            label: "Overall Progress",
            color: "#136A8A",
            percentage: overall + "%",
          });

          setStats([
            {
              label: "Logic",
              color: "linear-gradient(#C84E89,#F15F79)",
              percentage: res.data.result[0] + "%",
            },
            {
              label: "Mathematics",
              color: "linear-gradient(#BF5AE0,#A811DA)",
              percentage: res.data.result[1] + "%",
            },
            {
              label: "Sequencing",
              color: "linear-gradient(#314755,#26A0DA)",
              percentage: res.data.result[2] + "%",
            },
            {
              label: "Visualization",
              color: "linear-gradient(#16A085,#F4D03F)",
              percentage: res.data.result[3] + "%",
            },
            {
              label: "Exploration",
              color: "linear-gradient(#FF512F,#F09819)",
              percentage: res.data.result[4] + "%",
            },
          ]);

          setData({
            labels: [
              "Logic",
              "Mathematics",
              "Sequencing",
              "Visualization",
              "Exploration",
            ],
            datasets: [
              {
                label: "Summary",
                backgroundColor: "rgba(106, 52, 240,0.8)",
                color: "white",
                // borderColor: "",
                pointBackgroundColor: "#A03232",
                data: res.data.result,
              },
            ],
          });

          setOptions({
            title: {
              display: false,
              text: "Summary",
            },
            scale: {
              pointTable: {
                fontColor: "red",
              },
              reverse: false,
              gridLines: {
                color: ["orange", "red", "blue", "green", "yellow", "orange"],
              },
              ticks: {
                beginAtZero: true,
              },
            },
          });
        } else {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={mainDivHomepage}>
      <Navbar />
      <div style={{ marginTop: "74px" }}>
        <div
          style={{ textAlign: "center", color: "#C84747", fontSize: "3rem" }}
        >
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
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: overall.percentage,
                              backgroundColor: overall.color,
                            }}
                          >
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
                  <div
                    key={s.label}
                    className="row"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="col-3">
                      <div style={{ textAlign: "left", marginTop: "2px" }}>
                        {s.label}
                      </div>
                    </div>
                    <div className="col-9">
                      <div style={{ textAlign: "left" }}>
                        <div className="container">
                          <div className="container">
                            <div
                              className="progress"
                              style={{ height: "25px" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="70"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                  width: s.percentage,
                                  backgroundImage: s.color,
                                }}
                              >
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
              <div
                style={{
                  textAlign: "center",
                  backgroundImage: "",
                  color: "black",
                }}
              >
                <Radar data={data} options={options} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mainDivHomepage = {
  position: "fixed",
  width: "100vw",
  backgroundImage: `url(${Background})`,
  height: "100vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100vw 100vh",
};
const MainDiv = {
  margin: "auto",
  marginTop: "30px",
  width: "80%",
};
export default Statistics;
