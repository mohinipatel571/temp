import React from "react";
const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
  };
  return (
    <>
      <div>
        <form  style={{textAlign:"center"}} className="login-form" onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div style={{textAlign:"center"}}>
            
              <button type="submit">Login</button>
            
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
