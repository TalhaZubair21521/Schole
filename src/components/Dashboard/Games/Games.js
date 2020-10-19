import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Games.css";

const Games = () => {
    return (
        <div className="mainDivGames">
            <Navbar />
            <main style={{ marginTop: "100px" }}>
                <div class="container" style={ContentAlignment}>
                    <div style={{ textAlign: "center" }}><p style={{ fontSize: "3rem", fontWeight: "bold", color: "#DF615C" }}>Test Games</p></div>
                    <div class="row" style={RowAlignment}>
                        <div class="col-3"><button style={ButtonStyling}>Numbers</button></div>
                        <div class="col-3"><button style={ButtonStyling}>Counting</button></div>
                        <div class="col-3"><button style={ButtonStyling}>Shapes</button></div>
                    </div>
                    <div class="row" style={RowAlignment}>
                        <div class="col-3"><button style={ButtonStyling}>Ordering</button></div>
                        <div class="col-3"><button style={ButtonStyling}>Addition</button></div>
                        <div class="col-3"><button style={ButtonStyling}>Subtraction</button></div>
                    </div>
                    <div class="row" style={RowAlignment}>
                        <div class="col-3"><button style={ButtonStyling}>Time</button></div>
                        <div class="col-3"><button style={ButtonStyling}>Patterning</button></div>
                        <div class="col-3"><button style={ButtonStyling}>Original Numbers</button>    </div>
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
    padding: "2%",
    margin: "1%",
}

const ButtonStyling = {
    textDecoration: "none",
    fontSize: "1rem",
    border: "orange solid",
    borderRadius: "5px",
    padding: "4% 10%",
    margin: "0% 50%",
    width: "100%",
    color: "orange",
    backgroundColor: "white",
    fontWeight: "bold"
}

export default Games;