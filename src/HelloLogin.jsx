import React, { useState } from 'react'
const HelloLogin=()=>
{
  const[name,setName]=useState();
  const[fname ,setFname]=useState();
  const[lname,setlName]=useState();
  const[lastname,setLastname]=useState();
    const handleClick=(event)=>
    {    
          console.log(event.target.value)
          setName(event.target.value)
    }
    const handleClick2=(event)=>
  {
    
    console.log(event.target.value)
    setlName(event.target.value);
  }
    const handleSubmit=(event)=>
    {
      
      setFname(name);
      setLastname(lname);
    }
    return(
        <>
          <div className="text-center m-5 p-5 bg-primary">
           <h1>Hello  {fname}  {lastname}</h1>
           <input type="text" placeholder="Enter the Value" 
           onChange={handleClick} value={name} />
           <br></br>
           <br></br>
           <input type="text" placeholder="Enter the Value" 
           onChange={handleClick2} value={lname} />
           <br></br>
           <br></br>
           <button className="btn btn-warning fw-bold" type="Submit" onClick={handleSubmit} >Submit</button>
       </div>
</>
    );

};
export default HelloLogin;