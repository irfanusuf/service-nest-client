import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./Form.scss";
import { FaLock } from "react-icons/fa";
import { Context } from "../../context/Store";

const MakeSellerAccount = () => {
  const { handleMakeSellerAccount } = useContext(Context);
  const [password, setPass] = useState("");


  return (
    <>
      <ToastContainer />
     
        <div className="form-container">
          <div className="lock">
            <FaLock style={{ fontSize: "28px", color: " orangeRed" }} />
          </div>

          <h3> Make Request For Seller's Account </h3>

          <span>
            Are u sure u want to request to change your account  into seller's account
          </span>

          <form>
            <input
              placeholder="Enter Your Password"
              value={password}
              type="password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />

            <button
              onClick={(e) => {
                handleMakeSellerAccount(e , password);
              }}
            >
            
              Make a request 
            </button>
          </form>
        </div>
      
    </>
  );
};

export default MakeSellerAccount;
