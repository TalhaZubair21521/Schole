import React from "react";
import GoogleLogin from "react-google-login";

import axios from "axios";
import { useHistory } from "react-router-dom";



const GoogleButton = (props) => {
    let history = useHistory();

    const googleResponse = (response) => {
      const profile = response.profileObj;

      const data = {
        email: profile.email,
        name: profile.name,
        googleId: profile.googleId,
      };
      console.log(data);
      axios.post("http://localhost:5000/user/googleOauth", data).then((res) => {
        if (res.data.type === "success") {
          localStorage.setItem("userId", res.data.user.id);
          localStorage.setItem("userName", res.data.user.name);
          localStorage.setItem("isLoggedIn", true);

          console.log(
            localStorage.getItem("userId"),
            localStorage.getItem("userName"),
            localStorage.getItem("isLoggedIn")
          );

          //   localStorage.setItem("vendorToken", res.data.token);
          //   localStorage.setItem("vendorLoggedIn", true);
          //   localStorage.setItem("vendorId", res.data.vendor._id);
          //   if (res.data.vendor.completeStatus) {
          //     this.props.history.push("/dashboard");
          //   } else {
          //     this.props.history.push("/map");
          //   }
          history.push("/dashboard");
        } else {
          //   this.setState({ error: { isError: false, text: res.data.result } });
          history.push("/Server-Not-Responding");
        }
      });
    };


    return (
      <GoogleLogin
        clientId="700418500239-5kt41pcsokts338tp16tmbvki3m773uv.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={button}
          >
            Google
          </button>
        )}
        onSuccess={googleResponse}
        onFailure={googleResponse}
      />
    );
}

const button = {
  textDeocration: "none",
  border: "none",
  color: "white",
  backgroundColor: "#DF615C",
  padding: "3% 9%",
  borderRadius: "5px",
  width: "100%",
};

export default GoogleButton;