import React from "react";
import Navbar from "../../../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Levels.css";

const Levels = () => {
    return (
        <div className="mainDivLevels">
            <Navbar />
            <main style={{ marginTop: "100px" }}>
                <div className="container" style={ContentAlignment}>
                    <div style={{ textAlign: "center" }}><p style={{ fontSize: "3rem", fontWeight: "bold", color: "#DF615C" }}>Numbers</p></div>
                    <div className="row" style={RowAlignment}>
                        <div className="col-3"><Link to="/dashboard/games/numbers/level1"><button style={ButtonStyling}>Level 1</button></Link></div>
                        <div className="col-3"> <Link to="/dashboard/games/numbers/level2"><button style={ButtonStyling}>Level 2</button></Link></div>
                        <div className="col-3"><Link to="/dashboard/games/numbers/level3"><button style={ButtonStyling}>Level 3</button></Link></div>
                    </div>
                    <div className="row" style={RowAlignment}>
                        <div className="col-3"><button style={ButtonStyling}>Level 4</button></div>
                        <div className="col-3"><button style={ButtonStyling}>Level 5</button></div>
                        <div className="col-3"><button style={ButtonStyling}>Level 6</button></div>
                    </div>
                    <div className="row" style={RowAlignment}>
                        <div className="col-3"><button style={ButtonStyling}>Level 7</button></div>
                        <div className="col-3"><button style={ButtonStyling}>Level 8</button></div>
                        <div className="col-3"><button style={ButtonStyling}>Level 9</button></div>
                    </div>
                </div>
            </main>
        </div >
    );
}

const ContentAlignment = {
    marginLeft: "50px"
}
const RowAlignment = {
    margin: "5% 0%",
    marginLeft: "200px"
}

const ButtonStyling = {
    textDecoration: "none",
    fontSize: "1rem",
    border: "green solid",
    borderRadius: "5px",
    width: "100%",
    color: "green",
    backgroundColor: "white",
    fontWeight: "bold",
    padding: "5% 2%"
}

export default Levels;