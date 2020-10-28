import React from "react";
import "./Navbar.css";
import Logo from "../../../assets/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo">
                    <Link to="/">
                        <img style={{ marginLeft: "10px",marginTop:"10px" }} height="20%" width="20%" src={Logo} alt="Schole Logo" />
                    </Link>
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation_items">
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="col-5" style={{ alignItems: "center", justifyContent: "center" }}>
                            <Link to="/signin">
                                <button style={{ color: "white", backgroundColor: "#C77E2E", textDecoration: "none", border: "none", padding: "10% 20%", borderRadius: "5px" }}>Signin</button>
                            </Link>
                        </div>
                        <div className="col-5" style={{ alignItems: "center", justifyContent: "center" }}>
                            <Link to="/signup">
                                <button style={{ color: "white", backgroundColor: "#8AB24C", textDecoration: "none", border: "none", padding: "10% 20%", borderRadius: "5px" }}>Signup</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;