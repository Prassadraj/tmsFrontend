import React, { useState } from "react";
import img from "../../images/Login/sampatLogo.png";
import user from "../../images/Login/user.png";
import pass from "../../images/Login/password.png";
import "./login.css";

import { useNavigate } from "react-router-dom";
// import { sendData } from "./encrypt";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // const handleLogin = async () => {
  //   try {
  //     const result = await sendData(email, password);
  //     if (result.status === "success") {
  //       setMessage("Login successful!");
  //       // Redirect to the Home page
  //     } else {
  //       setMessage(result.message);
  //     }
  //   } catch (error) {
  //     setMessage(`An error occurred: ${error.message}`);
  //   }
  // };
  const handleLogin = () => {
    // Perform login validation here
    // If successful, call the onLogin callback
    onLogin();
    navigate("/dashboard");
  };

  return (
    <div id="app">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <img
              src={img}
              alt="sampat-logo"
              width="50px"
              height="60px"
              className="mx-auto d-block img-fluid"
            />
            <h4 className="text-center text-white">Login to Sampat</h4>
          </div>
          <div className="col-lg-12 whole-login mt-2">
            <div className="form-background">
              <label htmlFor="username" className="text-white">
                Username
              </label>
              <br />
              <div className="input-container">
                <img src={user} alt="user icon" className="input-icon" />
                <input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-login"
                />
              </div>
              <br />
              <label htmlFor="password" className=" text-white">
                Password
              </label>
              <a
                href="#"
                style={{
                  position: "relative",
                  left: "310px",
                  color: "#5fdd33",
                }}
              >
                Forgot password
              </a>
              <br />
              <div className="input-container">
                <img src={pass} alt="password icon" className="input-icon" />

                <input
                  type="password"
                  placeholder="Your Password"
                  id="password"
                  name="password"
                  className="input-login"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mt-2"
                style={{ color: "#5fdd33" }}
              />
              <span
                className="text-yellow-300
              "
              >
                &nbsp;&nbsp;Remember Me
              </span>
              <br />
              <br />
              <input type="submit" onClick={handleLogin} /> <br />
              <br />
              {message && (
                <p className="text-red-500 mt-4 text-center">{message}</p>
              )}
              {/* <span className='text-white '>Do not have an account? <a href="#" style={{ color: "#5fdd33" }}>Sign Up</a></span> */}
            </div>
          </div>
          {/* <div className="col-lg-12 mt-4 text-white whole-login">
                    &nbsp; &nbsp;<a href="" style={{color: '#64748B'}}>Terms</a> - 
                    <a href="" style={{color: '#64748B'}}> Privacy</a> - 
                    <a href="" style={{color: '#64748B'}}> Docs</a> - 
                    <a href="" style={{color: '#64748B'}}> Help</a>
                    </div> */}
        </div>

        <h6
          className="text-center absolute bottom-10 left-[35vw]"
          style={{ color: "#64748B" }}
        >
          &#169;2022 Amvion Labs Private Limited . All Rights Reserved
        </h6>
      </div>
    </div>
  );
}

export default Login;
