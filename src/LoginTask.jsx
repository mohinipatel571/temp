import React, { useState } from "react";
const LoginTask=()=>
{

    const [myEmail, setMyEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleEmail=(event)=>
    {
      setMyEmail(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(myEmail);  
        console.log(password);
      };
  return(
      <>
      <div className="container">
        <form
          className="border rounded bg-primary shadow p-5 m-5"
          onSubmit={handleSubmit}>
         
          <div className="my-3 py-2">
            <label>Email</label>

            <input
              type="Email"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Email"
              value={myEmail}
              onChange={handleEmail}
            />
          </div>
          <div className=" my-3">
            <label>Password</label>
            <input
              type="password"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-dark fw-bold px-5">
            Submit
            </button>
          </div>
          </form>
        </div>
      </>
  );
  
}
export default LoginTask;