import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Form.scss";
import { FaLock } from "react-icons/fa";
import { Context } from "../../context/Store";

const ResetPass = () => {

const  {handleResetPass} = useContext(Context)

  const [formData, setFormData] = useState({ newPass: "", confirmPass: "" });

  const { userId } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <>
    
      
        <div className="form-container">
          <div className="lock">
            <FaLock/>
          </div>

          <h3> Reset Your Password </h3>

          <span>
            <Link to="/user/forgotpass"> Forgot your password? </Link> Kindly
            enter new password which u haven't use from last 6 months
          </span>

          <form>
            <input
              placeholder="Enter Your New Password"
              value={formData.newPass}
              name="newPass"
              onChange={handleChange}
              type="password"
            />
            <input
              placeholder="Confirm Your New Password"
              value={formData.confirmPass}
              name="confirmPass"
              onChange={handleChange}
              type="password"
            />

            <p>
              
              Use atleast 8 characters, one uppercase and special character for
              the password
            </p>

            <button className="btn" onClick={(e)=>{handleResetPass(e , userId ,formData)}}> Change Password </button>
          </form>
        </div>
     
    </>
  );
};

export default ResetPass;
