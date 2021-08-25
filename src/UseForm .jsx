import { useState } from "react";
 
const Login = () => {
  return (
    <>
     
      <h1 className="border p-4 m-4">Login Form</h1>
    </>
  );
};
const SignUp = () => {
  return (
    <>
      <h1 className="border p-4 m-4">SignUp From</h1>
    </>
  );
};
const UseForm = () => {
  const [Fromlogin, setFormLogin] = useState("Login");
  const handleLogin = () => {
    setFormLogin("Login");
  };
  const handleSignup = () => {
    setFormLogin("SignUp");
  };
  // if (Fromlogin == "Login") {
  //   return (
    
  //       { /* <Login />
  //       <div className="text-center">
  //         <button className="btn btn-success fw-bold" onClick={handleLogin}>
  //           Login Form
  //         </button>
  //         <button className="btn btn-primary fw-bold " onClick={handleSignup}>
  //           Sign Up
  //         </button>
  //       </div>
  //     </> */}
  //   );
  // }
   
    return (<>
      {Fromlogin ==="Login" ?(<><Login/></>): (<><SignUp/></>)}
      
    
       <>
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login Form
          </button>
          <button className="btn btn-sucess " onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </>
      </>
    );
  
};
export default UseForm;
