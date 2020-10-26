import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import AdditionLevel1 from "../../../../../assets/bgs/timeBg1.png";

const Level1 = (props) => {
    let history = useHistory();
    
    // const [field, setField] = useState('');

    return (
        <div>
            <Navbar seriesNumber={"7"} seriesLevel={"1"} seriesName={"Time"} />
            <div style={mainDivHomepage}>
                <div className="row" >
                    <div className="col-6" style={{ marginTop: "10%" }}>
                        <div style={CenterContent}>
                            <div className="container">
                                <div className="row">
                                            <div style={{backgroundColor:"#FFFFFF",border:"3px solid orange",borderRadius: "10px",padding:"2% 5%",textAlign:"center"}}>
                                                <h1>3'o' Clock</h1>
                                            </div>
                                </div>
                                <div className="row">
                                        <div style={{backgroundColor:"#FFFFFF",border:"3px solid orange",borderRadius: "10px",padding:"2% 5%",textAlign:"center"}}>
                                            <h1>5'o' Clock</h1>
                                        </div>
                                        <div style={{backgroundColor:"#FFFFFF",border:"3px solid orange",borderRadius: "10px",padding:"2% 5%",textAlign:"center"}}>
                                            <h1>7'o' Clock</h1>
                                        </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </div>
                <div style={block}>
                                    <button type="button" style={{ ...btn, color: 'orange', borderColor: "orange" }} onClick={() => history.push('/dashboard/games/subtraction/level2')}>Don't Know</button><br />
                                    <button type="button" style={{ ...btn, color: 'red', borderColor: "red" }} onClick={() => window.location.reload(false)}>Clear</button><br />
                                    <button type="button" style={{ ...btn, color: 'green', borderColor: "green" }} onClick={() => history.push('/dashboard/games/subtraction/level2')}>Submit</button>
                        </div>
            </div>
        </div>
    );
}

const mainDivHomepage = {
    position: "fixed",
    width: "100vw",
    backgroundImage: `url(${AdditionLevel1})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh"
}

const CenterContent = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-30px"
}

const btn = {
    border: "2px solid",
    backgroundColor: "#f7f0ee",
    padding: "7% 7%",
    width: "150%",
    fontSize: "1.3rem",
    marginTop: "3%"
}


const block = {
    position: "absolute",
    bottom: "15%",
    right: "0%",
    marginRight: "6%",
    marginTop: "1%"
}

export default Level1;