import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import NumberLevel1 from "../../../../../assets/bgs/numberBg2.jpeg";
import Lion from "../../../../../assets/shapesLevelsImages/Level2/lion.png";

const Level3 = (props) => {
    let history = useHistory();
    let points = 0;
    let list = [];

    for (let i = 0; i < 49; i++) {
        // list[i] = i+1;
        list.push({num:i+1,selected:false})
      }

      const Background = (event) => {
        // alert(list[event.target.id].selected);
        if (event.target.style.borderColor === "orange"){
            event.target.style.borderColor = "#217C58"
            list[event.target.id].selected = true;
        }
        else {
            event.target.style.borderColor = "orange"
            list[event.target.id].selected = false;
        }

    };

    const CalculateResult = () => {
        let mistake = 0;
        list.map( (item) => {
                if((item.selected === true && (item.num%2===0)) || (item.selected === false && (item.num%2!==0))){
                    mistake=mistake+1;
                }

                return null;
            
            });

        alert("Mistake: " +mistake);
        if(mistake<3){
            points=4;
        }
        alert("Points: " + points);
        history.push('/dashboard/games/counting/level1')

    };


    return (
        <div>
            <Navbar seriesNumber={"1"} seriesLevel={"3"} seriesName={"Number"} />
            <div style={mainDivHomepage}>
            <div className="container" style={{paddingTop:"10%"}}>
            <div className="row">
                        {(list.slice(0, 9)).map((value, index) => {
                            
                            return  <div className="col-1" id={value.num-1} classkey={value.num} onClick={Background} 
                                        style={{fontSize:"2.5rem",textAlign:"center", border:"7px solid",borderColor:"orange", borderRadius: "100%",margin:"0.2%"}}>{value.num}</div>
                        
                        })}
            </div>
            <div className="row">
                        {(list.slice(10, 19)).map((value, index) => {
                            
                            return  <div className="col-1" id={value.num-1} classkey={value.num} onClick={Background} 
                                        style={{fontSize:"2.5rem",textAlign:"center", border:"7px solid",borderColor:"orange", borderRadius: "100%",margin:"0.2%"}}>{value.num}</div>
                        
                        })}
            </div>
            <div className="row">
                        {(list.slice(20, 29)).map((value, index) => {
                            
                            return  <div className="col-1" id={value.num-1} classkey={value.num} onClick={Background} 
                                        style={{fontSize:"2.5rem",textAlign:"center", border:"7px solid",borderColor:"orange", borderRadius: "100%",margin:"0.2%"}}>{value.num}</div>
                        
                        })}
            </div>
            <div className="row">
                        {(list.slice(30, 39)).map((value, index) => {
                            
                            return  <div className="col-1" id={value.num-1} classkey={value.num} onClick={Background} 
                                        style={{fontSize:"2.5rem",textAlign:"center", border:"7px solid",borderColor:"orange", borderRadius: "100%",margin:"0.2%"}}>{value.num}</div>
                        
                        })}
            </div>
            <div className="row">
                        {(list.slice(40, 49)).map((value, index) => {
                            
                            return  <div className="col-1" id={value.num-1} classkey={value.num} onClick={Background} 
                                        style={{fontSize:"2.5rem",textAlign:"center", border:"7px solid",borderColor:"orange", borderRadius: "100%",margin:"0.2%"}}>{value.num}</div>
                        
                        })}
            </div>
            
            
                
            </div>
            <div className="container" >
                <div className="row">
                        <div className="col-10"></div>
                        <div className="col-1" style={{marginTop:"-20%"}}>
                        <img src={Lion} height="55%" width="auto" alt="lion" />
                        </div>
                </div>
            </div>
                    

                <div style={block}>
                                    <button type="button" style={{ ...btn, color: 'orange', borderColor: "orange" }} onClick={() => history.push('/dashboard/games/counting/level1')}>Don't Know</button><br />
                                    <button type="button" style={{ ...btn, color: 'red', borderColor: "red" }} onClick={() => window.location.reload(false)}>Clear</button><br />
                                    <button type="button" style={{ ...btn, color: 'green', borderColor: "green" }} onClick={CalculateResult}>Submit</button>
                        </div>
            </div>
        </div>
    );
}

const mainDivHomepage = {
    position: "fixed",
    width: "100vw",
    backgroundImage: `url(${NumberLevel1})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh"
}

// const CenterContent = {
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: "-30px"
// }

const btn = {
    border: "2px solid",
    backgroundColor: "#f7f0ee",
    padding: "7% 7%",
    width: "125%",
    fontSize: "1.3rem",
    marginTop: "3%"
}


const block = {
    position: "absolute",
    top: "0%",
    right: "3%"
}

export default Level3;