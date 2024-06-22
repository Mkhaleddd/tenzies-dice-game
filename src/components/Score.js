import React from "react";
export default function Score (props){
    const minutes=Math.floor((props.time /6000)%60)
    const seconds=Math.floor((props.time/1000)%60)
    return(
        <>
        <div className="score-con">
         <span>dice rolled:{props.rolls}</span>
                <br></br>
               
                     <span >
                            Timer:
                             {"0" + minutes}:
                             {"0"+seconds}   
                      </span>
                
               
        </div>
    </>)
}