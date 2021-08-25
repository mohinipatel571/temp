import React from "react";
const SignUp = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    console.log(event.target[3].value);
    console.log(props.fname);
    console.log(props.hello);
  };
  return (
    <>
      <div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="email"
              placeholder="Enter yo
                        ur email"
            />
          </div>
          <div>
            <label>Password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter your Password" />
          </div>
          <div>
            <label>Mobile</label>
            <input type="text" placeholder="Enter your mobile" />
          </div>
          <div>
            <label>
              <button type="submit">SignUp</button>
            </label>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUp;
