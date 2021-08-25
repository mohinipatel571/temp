import React, { useState } from 'react';

const CurrentTime=()=>
{
    let newtime= new Date().toLocaleTimeString();
    const [current,settime]=useState(newtime)

    const UpdateTime=()=>
    {
        let newtime= new Date().toLocaleTimeString();
        settime(newtime);
    }

    setInterval(UpdateTime,1000)
    return(
        <>
        <h1>{current}</h1>
        {/* <div className="text-center">
        <h1 className="text-center">{current}</h1>
        <button className="btn btn-primary "  onClick={UpdateTime}>GET TIME</button>
        </div></> */}</>
    );
}
export default CurrentTime;