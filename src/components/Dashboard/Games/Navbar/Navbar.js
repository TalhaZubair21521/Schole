import React, { useState , useEffect } from "react";
import Logo from "../../../../assets/logo2.png";
import Timer from "../../../../assets/timer.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    const [counter, setCounter] = useState(60);

    useEffect(() => {
        if(counter===0){
            alert('Time Ended')
            window.location.reload(false)
        }
        const interval = setInterval(() => {
            setCounter(counter-1);
        }, 1000);
        return () => clearInterval(interval);
      }, [counter]);

      // const next = () => {
    //     const url= "dashboard/games/";
    //     switch (props.seriesNumber) {
    //         case 1:
    //             url= url + "counting"
    //             break;
    //         case 2:
    //             url= url + "counting"
    //             break;
    //         case 3:
    //             url= url + "counting"
    //             break;
    //         case 4:
    //             url= url + "counting"
    //             break;
    //         case 5:
    //             url= url + "counting"
    //             break;
    //         case 6:
    //             url= url + "counting"
    //             break;
    //         case 7:
    //             url= url + "counting"
    //             break;
    //         case 8:
    //             url= url + "counting"
    //             break;
    //         case 9:
    //             url= url + "counting"
    //             break;
        
    //         default:
    //             break;
    //     }
    // }

    return (
        <div className="navbar" style={item}>
            <div className="col-2">
                <Link to="/dashboard"><img style={{ marginLeft: "1px", marginTop: "1px" }} height="70%" width="70%" src={Logo} alt="Schole Logo" /></Link>
            </div>
            <div className="col-2 text-center" style={Test}>Test # {props.seriesNumber}</div>
            <div className="col-2 text-center" style={Counting}>{props.seriesName}</div>
            <div className="col-2 text-center" style={Level}>{"Level " + props.seriesLevel}</div>
            <div className="col-2 text-center" style={{ fontSize: "1.2rem" }}>
                <img style={{ marginLeft: "0px", padding: "0px 5px" }} height="20%" width="20%" src={Timer} alt="Schole Logo" /> {counter + " sec"}
            </div>
            <Link to="/dashboard">
                <div className="col-1"><button style={{ color: "white", backgroundColor: "#C84747", textDecoration: "none", border: "none", borderRadius: "5px", borderColor: "red", padding: "7px 30px", marginRight: "50px" }}>Leave</button></div>
            </Link>
        </div>
    );
}

const item = {
    textAlign: "center",
    boxShadow: "0px 4px 4px grey"
}

const Test = {
    color: "#C77E2E",
    fontSize: "2rem"
}

const Counting = {
    backgroundColor: "#217C58",
    color: "#FFFFFF",
    padding: "1% 0%",
    fontSize: "1.2rem"
}

const Level = {
    backgroundColor: "#523E89",
    color: "#FFFFFF",
    padding: "1% 0%",
    fontSize: "1.2rem"
}

export default Navbar;