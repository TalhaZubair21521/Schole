import React from "react";
import { Card } from "react-bootstrap";
import "./LoginCard.css";

import Logo from "../../../assets/logo.png";
import FacebookButton from "./FacebookButton/FacebookButton";
import GoogleButton from "./GoogleButton//GoogleButton";

import { Link } from "react-router-dom";

const LoginCard = () => {
    return (
        <div className="row">
            <div className="col-5">
                <Card className="shadow" body style={BackgroundStyle}>
                    <div className="logoSection">
                        <div className="row">
                            <div className="col-6">
                                <img src={Logo} alt="Schole Logo" />
                            </div>
                            <div className="col-6">
                                <div style={RightElementsStyling}>
                                    Signup
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SigninSection">
                        <label style={{ fontSize: "2rem", color: "white", marginTop: "20px", marginBottom: "20px" }}><b>Sign in</b></label>
                        <div className="row">
                            <div className="col-6">
                                <FacebookButton />
                            </div>
                            <div className="col-6">
                                <GoogleButton />
                            </div>
                        </div>
                        <form style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <div style={LabelStyling}><div>Username / Email</div></div>
                            <div>
                                <input className="logingInputs" style={InputFieldStyle}></input>
                            </div>
                            <div style={LabelStyling}>Password</div>
                            <div>
                                <input className="logingInputs" style={InputFieldStyle}></input>
                            </div>
                            <div style={RightElementsStyling}>
                                Forget Password?
                            </div>
                            <div style={CenteredElementsStyling}>
                                Invalid Email or Password
                            </div>
                            <div>
                                <Link to="/dashboard">
                                    <button className="removeFocus" style={{ marginTop: "20px", textDeocration: "none", border: "none", color: "white", backgroundColor: "#CD326C", padding: "1% 9%", borderRadius: "5px" }}>Sign in</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
            <div className="col-7" />
        </div >
    );
}

const BackgroundStyle = {
    backgroundColor: "rgba(40, 40, 40, 0.9)",
    margin: "auto",
    width: "65%",
    marginTop: "100px",
    minWidth: "300px",
    marginLeft: "100px"
}

const RightElementsStyling = {
    color: "white",
    fontSize: "0.8rem",
    textAlign: "right",
    marginTop: "5px"
}
const CenteredElementsStyling = {
    color: "red",
    fontSize: "0.8rem",
    textAlign: "center",
    fontWeight: "bold"
}
const LabelStyling = {
    color: "white",
    fontSize: "0.7rem",
    marginTop: "10px",
    marginLeft: "2px"
}
const InputFieldStyle = {
    width: "100%",
    borderRadius: "5px",
    height: "40px",
    color: "black",
    autoFocus: "off",
    textDeocration: "none",
    border: "none"
}

export default LoginCard;