import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import axios from "axios";
import { useHistory } from "react-router-dom";


  
const FacebookButton = (props) => {
    let history = useHistory();

    const responseFacebook = (response) => {
      const data = {
        name: response.name,
        email: response.email,
        userId: response.userID,
      };
      console.log(data);
      axios
        .post("http://localhost:5000/user/facebookOauth", data)
        .then((res) => {
          if (res.data.type === "success") {
            localStorage.setItem("userId", res.data.user.id);
            localStorage.setItem("userName", res.data.user.name);
            localStorage.setItem("isLoggedIn", true);

            console.log(
              localStorage.getItem("userId"),
              localStorage.getItem("userName"),
              localStorage.getItem("isLoggedIn")
            );

            // localStorage.setItem("vendorToken", res.data.token);
            // localStorage.setItem("vendorLoggedIn", true);
            // localStorage.setItem("vendorId", res.data.vendor._id);
            // if (res.data.vendor.completeStatus) {
            //   this.props.history.push("/dashboard");
            // } else {
            //   this.props.history.push("/map");
            // }
            history.push("/dashboard");
          } else {
            // this.setState({ error: { isError: false, text: res.data.result } });
            history.push("/Server-Not-Responding");
          }
        });
    };

    return (
      <FacebookLogin
        appId="1375935742576595"
        autoLab
        fields="name,email,picture"
        render={(renderProps) => (
          <button style={button} onClick={renderProps.onClick}>
            Facebook
          </button>
        )}
        // onClick={this.onFacebookClick}
        callback={responseFacebook}
      />
    );
}

const button = {
  textDeocration: "none",
  border: "none",
  color: "white",
  backgroundColor: "#5F73F0",
  padding: "3% 9%",
  borderRadius: "5px",
  width: "100%",
};

export default FacebookButton;