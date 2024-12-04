import React, { useContext, useState } from "react";
import "./Form.scss";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { Context } from "../../context/Store";

const Login = () => {

  const {handleLogin} = useContext(Context)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    email,
    password,
  };

  
  return (
    <>
     

      
        <div className="form-container">
          <div className="lock">
            <FaLock/>
          </div>

          <h3> Login to your Account </h3>

          <form>
            <input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <span>
              Forgot your password? Click on the link.
            
              <Link to="/user/forgotpass"> Forgot password?</Link>
            </span>
              


            <button className="btn" onClick={(e)=>{handleLogin(e , formData)}}> Login </button>

              <p> Or </p>

            <Link to="/user/register"> Register with Us </Link>
          
          </form>
        </div>
      
    </>
  );
};

export default Login;
