import React, { useState } from "react";

const ClickMe = () => {
  const purple = "#8e44ad";
  const [color, setcolor] = useState(purple);
  const[name,setname]=useState("Chanchal")
  const chanegcolor = () => {
    let blue = "#34495e";
    setcolor(blue);
    console.log("Clicked");
    setname(name+" Mona")
  };
  return (
    <>
      <div className="text-center  p-8"  style={{ backgroundColor: color,height:"100vh",width:"100hw" }}>
        <button className="btn btn-success " 
        // onMouseMove={chanegcolor} 
         onClick={chanegcolor} 
        // onDoubleClick={chanegcolor}
          >
          
          {name}
        </button>
      </div>
    </>
  );
};
export default ClickMe;
