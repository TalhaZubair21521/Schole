import React from "react";
import "./Navbar.css";
import Logo from "../../../assets/logo2.png";
import Profile from "../../../assets/profile.png";

const Navbar = () => {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo"><img style={{ marginLeft: "10px" }} height="50px" width="180px" src={Logo} alt="Schole Logo" /></div>
                <div className="spacer" />
                <div className="toolbar_navigation_items">
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="col-6" style={{ marginTop: "10px" }} >
                            <img src={Profile} style={{ width: "70px", height: "70px", borderRadius: "50%", boxShadow: "0 0 2px 1px rgba(0, 140, 186, 0.5)" }} alt="User" />
                        </div>
                        <div className="col-6" style={{ alignItems: "center", justifyContent: "center" }}>
                            <p style={{ color: "black", fontSize: "1.5rem", marginTop: "10px", marginBottom: "-1px" }}>Micheal</p>
                            <button style={{ color: "white", backgroundColor: "#C84747", textDecoration: "none", border: "none", padding: "4% 20%", borderRadius: "5px" }}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;