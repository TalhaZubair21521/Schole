import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Games.css";

const Games = () => {
    return (
        <div className="mainDivGames">
            <Navbar />
            <main style={{ marginTop: "100px" }}>
                <div className="container" style={ContentAlignment}>
                    <div style={{ textAlign: "center" }}><p style={{ fontSize: "3rem", fontWeight: "bold", color: "#DF615C" }}>Test Games</p></div>
                    <div className="row" style={RowAlignment}>
                        <div className="col" style={{}}><Link to="/dashboard/games/numbers/"><button style={ButtonStyling}>Numbers</button></Link></div>
                        <div className="col"> <Link to="/dashboard/games/counting/"><button style={ButtonStyling}>Counting</button></Link></div>
                        <div className="col"><Link to="/dashboard/games/shapes/"><button style={ButtonStyling}>Shapes</button></Link></div>
                    </div>
                    <div className="row" style={RowAlignment}>
                        <div className="col"><Link to="/dashboard/games/ordering/"><button style={ButtonStyling}>Ordering</button></Link></div>
                        <div className="col"><Link to="/dashboard/games/addition/"><button style={ButtonStyling}>Addition</button></Link></div>
                        <div className="col"><Link to="/dashboard/games/subtraction/"><button style={ButtonStyling}>Subtraction</button></Link></div>
                    </div>
                    <div className="row" style={RowAlignment}>
                        <div className="col"><Link to="/dashboard/games/time/"><button style={ButtonStyling}>Time</button></Link></div>
                        <div className="col"><Link to="/dashboard/games/patterning/"><button style={ButtonStyling}>Patterning</button></Link></div>
                        <div className="col"><Link to="/dashboard/games/original_numbers/"><button style={ButtonStyling}>Original Numbers</button>  </Link>  </div>
                    </div>
                </div>
            </main>
        </div >
    );
}

const ContentAlignment = {
    marginLeft: "100px"
}

const RowAlignment = {
    margin: "5% 0%"
}

const ButtonStyling = {
    textDecoration: "none",
    fontSize: "1rem",
    border: "orange solid",
    borderRadius: "5px",
    width: "100%",
    color: "orange",
    backgroundColor: "white",
    fontWeight: "bold",
    padding: "3% 2%"
}

export default Games;