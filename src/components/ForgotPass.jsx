import React, { useContext, useState } from "react";
import "./Form.css";
import { FaLock } from "react-icons/fa";
import { Context } from "../context/Store";


const ForgotPass = () => {
  const { handleForgotPass } = useContext(Context);
  const [email, setEmail] = useState("");

  return (
    <>
     
      
        <div className="form-container">
          <div className="lock">
            <FaLock/>
          </div>

          <h3> ForgotPass</h3>

          <span>
           
            Forgot your password? Kindly enter your email and we'll send you a
            reset link on your registered email
          </span>

          <form>
            <input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <button className="btn"
              onClick={(e) => {
                handleForgotPass(e, email);
              }}
            >
             
              Send Reset Link
            </button>
          </form>
        </div>
     
    </>
  );
};

export default ForgotPass;
