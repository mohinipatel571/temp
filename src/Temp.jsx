import React from "react";
const Temp = ()=>{
    var num = 0;
    const handleClick = (event)=>{
        num+=1;
    }
    return(
        <>
        <h1>
            Num : {num}
        </h1>
        <button onClick={handleClick}>
            Cahnge
        </button>
        </>
    )
}
export default Temp;