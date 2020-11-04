import React, { useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

import Logo from "../../../assets/logo.png";
import "./SignupCard.css";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import Background from "../../../assets/bg1.png";

const SignupCard = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name, age, phone, email, password);
    let data = {
      name: name,
      age: age,
      phone: phone,
      email: email,
      password: password,
    };
    axios.post("http://localhost:5000/user/signup", data).then((res) => {
      if (res.data.type === "success") {
        history.push("/signin");
      } else {
        history.push("/Server-Not-Responding");
      }
    });
  };

  return (
    <div style={mainDivHomepage}>
      {/* <Navbar /> */}
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
                    <Link to="/signin">Signin</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="SigninSection">
              <label
                style={{
                  fontSize: "2rem",
                  color: "white",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <b>Sign Up</b>
              </label>

              <form style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div className="row">
                  <div className="col-6" style={LabelStyling}>
                    Child's Name
                  </div>
                  <div className="col-4" style={LabelStyling}>
                    Age
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <input
                      className="collogingInputs"
                      style={InputFieldStyle}
                      onChange={(event) => setName(event.target.value)}
                    ></input>
                  </div>

                  <div className="col-6">
                    <input
                      className="logingInputs"
                      style={InputFieldStyle}
                      onChange={(event) => setAge(event.target.value)}
                    ></input>
                  </div>
                </div>

                <div style={LabelStyling}>
                  <div>Parent Contact</div>
                </div>
                <div>
                  <input
                    className="logingInputs"
                    style={InputFieldStyle}
                    onChange={(event) => setPhone(event.target.value)}
                  ></input>
                </div>
                <div style={LabelStyling}>
                  <div>Username / Email</div>
                </div>
                <div>
                  <input
                    className="logingInputs"
                    style={InputFieldStyle}
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                </div>
                <div style={LabelStyling}>Password</div>
                <div>
                  <input
                    className="logingInputs"
                    style={InputFieldStyle}
                    onChange={(event) => setPassword(event.target.value)}
                  ></input>
                </div>
                <div>
                  <button
                    className="removeFocus"
                    style={{
                      marginTop: "20px",
                      textDeocration: "none",
                      border: "none",
                      color: "white",
                      backgroundColor: "#CD326C",
                      padding: "1% 9%",
                      borderRadius: "5px",
                    }}
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </Card>
        </div>
        <div className="col-7" />
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

const BackgroundStyle = {
  backgroundColor: "rgba(40, 40, 40, 0.9)",
  margin: "auto",
  width: "65%",
  marginTop: "50px",
  minWidth: "300px",
  marginLeft: "100px",
};

const RightElementsStyling = {
  color: "white",
  fontSize: "0.8rem",
  textAlign: "right",
  marginTop: "5px",
};
// const CenteredElementsStyling = {
//     color: "red",
//     fontSize: "0.8rem",
//     textAlign: "center",
//     fontWeight: "bold"
// }
const LabelStyling = {
  color: "white",
  fontSize: "0.7rem",
  marginTop: "10px",
  marginLeft: "2px",
};
const InputFieldStyle = {
  width: "100%",
  borderRadius: "5px",
  height: "40px",
  color: "black",
  autoFocus: "off",
  textDeocration: "none",
  border: "none",
};

export default SignupCard;
