import { useState } from "react";

export const GetPercentages = new Promise(
    (resolve,reject) =>{
        const rulesData=[
            {questionNo:1,category:"l",low:1,high:2,percentage:5},
            {questionNo:1,category:"l",low:3,high:5,percentage:10},
            {questionNo:1,category:"l",low:6,high:7,percentage:15},
            {questionNo:1,category:"l",low:8,high:9,percentage:0},
            {questionNo:1,category:"m",low:1,high:2,percentage:5},
            {questionNo:1,category:"m",low:3,high:5,percentage:10},
            {questionNo:1,category:"m",low:6,high:7,percentage:15},
            {questionNo:1,category:"m",low:8,high:9,percentage:0},
    
            {questionNo:2,category:"l",low:1,high:2,percentage:5},
            {questionNo:2,category:"l",low:3,high:5,percentage:10},
            {questionNo:2,category:"l",low:6,high:7,percentage:15},
            {questionNo:2,category:"l",low:8,high:9,percentage:20},
            {questionNo:2,category:"m",low:1,high:2,percentage:5},
            {questionNo:2,category:"m",low:3,high:5,percentage:10},
            {questionNo:2,category:"m",low:6,high:7,percentage:15},
            {questionNo:2,category:"m",low:8,high:9,percentage:20},
    
            {questionNo:3,category:"s",low:1,high:2,percentage:10},
            {questionNo:3,category:"s",low:3,high:5,percentage:20},
            {questionNo:3,category:"s",low:6,high:7,percentage:30},
            {questionNo:3,category:"s",low:8,high:9,percentage:40},
    
            {questionNo:4,category:"v",low:1,high:2,percentage:5},
            {questionNo:4,category:"v",low:3,high:5,percentage:10},
            {questionNo:4,category:"v",low:6,high:7,percentage:15},
            {questionNo:4,category:"v",low:8,high:9,percentage:20},
            {questionNo:4,category:"l",low:1,high:2,percentage:5},
            {questionNo:4,category:"l",low:3,high:5,percentage:10},
            {questionNo:4,category:"l",low:6,high:7,percentage:15},
            {questionNo:4,category:"l",low:8,high:9,percentage:20},
    
            {questionNo:5,category:"m",low:1,high:2,percentage:5},
            {questionNo:5,category:"m",low:3,high:5,percentage:10},
            {questionNo:5,category:"m",low:6,high:7,percentage:15},
            {questionNo:5,category:"m",low:8,high:9,percentage:20},
    
            {questionNo:6,category:"m",low:1,high:2,percentage:5},
            {questionNo:6,category:"m",low:3,high:5,percentage:10},
            {questionNo:6,category:"m",low:6,high:7,percentage:15},
            {questionNo:6,category:"m",low:8,high:9,percentage:20},
    
            {questionNo:7,category:"v",low:1,high:2,percentage:10},
            {questionNo:7,category:"v",low:3,high:5,percentage:15},
            {questionNo:7,category:"v",low:6,high:7,percentage:20},
            {questionNo:7,category:"v",low:8,high:9,percentage:30},
            {questionNo:7,category:"e",low:1,high:2,percentage:10},
            {questionNo:7,category:"e",low:3,high:5,percentage:15},
            {questionNo:7,category:"e",low:6,high:7,percentage:20},
            {questionNo:7,category:"e",low:8,high:9,percentage:30},
    
            {questionNo:8,category:"v",low:1,high:2,percentage:10},
            {questionNo:8,category:"v",low:3,high:5,percentage:20},
            {questionNo:8,category:"v",low:6,high:7,percentage:30},
            {questionNo:8,category:"v",low:8,high:9,percentage:40},
    
            {questionNo:9,category:"l",low:1,high:2,percentage:10},
            {questionNo:9,category:"l",low:3,high:5,percentage:15},
            {questionNo:9,category:"l",low:6,high:7,percentage:20},
            {questionNo:9,category:"l",low:8,high:9,percentage:30},
            {questionNo:9,category:"s",low:1,high:2,percentage:10},
            {questionNo:9,category:"s",low:3,high:5,percentage:15},
            {questionNo:9,category:"s",low:6,high:7,percentage:20},
            {questionNo:9,category:"s",low:8,high:9,percentage:30}
        ]
    
        const [rules]=useState(rulesData);
    
        // let list = [];
        // let maxPercentage = [85,75,70,90,30];
    
        const [db] = useState([4,4,6,3,3,2,6,6,3])
    
        let l =0;
        let m =0;
        let s =0;
        let v =0;
        let e =0;
    
        db.map((value, index) => {
            rules.filter((rule) => {
                if((value>=rule.low && value<=rule.high) && rule.questionNo===(index+1) && rule.category==="l"){
                    l=l + rule.percentage;
                }
                if((value>=rule.low && value<=rule.high) && rule.questionNo===(index+1) && rule.category==="m"){
                    m=m + rule.percentage;
                }
                if((value>=rule.low && value<=rule.high) && rule.questionNo===(index+1) && rule.category==="s"){
                    s=s + rule.percentage;
                }
                if((value>=rule.low && value<=rule.high) && rule.questionNo===(index+1) && rule.category==="v"){
                    v=v+ rule.percentage;
                }
                if((value>=rule.low && value<=rule.high) && rule.questionNo===(index+1) && rule.category==="e"){
                    e=e + rule.percentage;
                }
    
                return null;
             } );
    
             return null;
        });
    
        console.log(l,m,s,v,e);
        resolve([l,m,s,v,e]);
    }
);