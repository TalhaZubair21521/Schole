import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";

import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="mainDivHomepage">
            <Navbar />
            <main style={{ marginTop: "100px" }}>
                <div style={ContentAlignment}>
                    <label style={Title}><label style={{ color: "#CD326C" }}> New </label>{" "}<label style={{ color: "purple" }}>Test Series    </label></label>
                    <p style={Paragraph}>Series of test series with new</p>
                    <p style={Paragraph}>and exciting levels for kids learning</p>
                    <Link to="/dashboard/games/counting/level1">
                        <button style={FreeTrial}>FreeTrial</button>
                    </Link>
                    <button style={PaidPlan}>Paid Plan</button>
                </div>
            </main>
        </div>
    );
}

const FreeTrial = {
    color: "white",
    backgroundColor: "#8AB24C",
    padding: "0.5% 4%",
    borderRadius: "5px",
    textDecoration: "none",
    border: "none",
    marginRight: "20px"
}
const PaidPlan = {
    color: "white",
    backgroundColor: "#C77E2E",
    padding: "0.5% 4%",
    borderRadius: "5px",
    textDecoration: "none",
    border: "none"
}
const Title = {
    fontSize: "3rem",
    fontWeight: "bold",
}
const Paragraph = {
    fontSize: "1.5rem",
    marginTop: "-10px"
}
const ContentAlignment = {
    marginLeft: "50px"
}

export default Homepage;