import React, { useState } from "react";
import LoginTask from "./LoginTask";
const RegistrationForm = () => {
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [formlogin,setFormLogin]=useState("")

  const handleName = (event) => {
    setMyName(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };
  const handleEmail=(event)=>
  {
    setMyEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(myName);
    console.log(myEmail);
    console.log(mobile);
    
    console.log(password);
  };
  const handlogin=()=>
  {
   setFormLogin("LoginTask");
  }
  return (
    <>
      <div className="container">
        <form
          className="border rounded bg-warning shadow p-5 m-5"
          onSubmit={handleSubmit}
        >
          <div className="my-3 py-2">
            <label>Name</label>

            <input
              type="text"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Name"
              value={myName}
              onChange={handleName}
            />
          </div>

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

          <div className=" my-3 py-2">
            <label htmlFor="user-mobile">Mobile</label>
            <input
              id="user-mobile"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={handleMobile}
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
          <div className="text-center mt-1">
            <button type="submit" className="btn btn-success fw-bold px-5">
          Submit
            </button>
          </div>
          <div className="">
            <button type="submit" className="btn btn-danger fw-bold px-5" onClick={handlogin} >
              Login
            </button>
          </div>
          
        </form>
      </div>
    </>
  );
};
export default RegistrationForm;
