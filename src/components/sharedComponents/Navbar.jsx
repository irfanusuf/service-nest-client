import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaInfo } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import { Context } from "../../context/Store";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const { user, handleLogout } = useContext(Context);
  const { username } = user || "";
  const navigate = useNavigate();
  // const userId = localStorage.getItem("userId");

  const [showsideNav, setShowSideNav] = useState(false);

  function handleNav() {
    setShowSideNav(!showsideNav);
  }

  return (
    <div className="navbar">
      <div className="menubar " onClick={handleNav}>
        <FaBars />

        {showsideNav && (
          <ul className="animate__animated animate__bounceInLeft">
            <li>
              {username && (
                `Welcome ${username} `
              )}
            </li>

            <li>
              <span>
                <FaHome /> <Link to="/"> Home </Link>{" "}
              </span>
            </li>
            <li>
              <span>
                <FaInfo /> <Link to="/about"> About </Link>{" "}
              </span>
            </li>

            <li>
              <span>
                <LuContact /> <Link to="/contact"> Contact </Link>{" "}
              </span>
            </li>

            <li>
              <span>
                <LuContact /> <Link to="/services"> Services </Link>{" "}
              </span>
            </li>

            {user.role === "service provider" && (
              <li>
                <span>
                  <LuContact />{" "}
                  <Link to="/user/user-profile"> User profile </Link>{" "}
                </span>
              </li>
            )}

            {user && (
              <li
                onClick={() => {
                  user.role === "customer" &&
                    navigate(`/user/provideServices/request`);
                }}
              >
                <span>
                  <LuContact /> <Link> Seller's Account</Link>{" "}
                </span>
              </li>
            )}

            {user && (
              <li>
                <span>
                  <LuContact /> <Link to="/settings"> Settings </Link>{" "}
                </span>
              </li>
            )}

            {user && (
              <li
                onClick={() => {
                  navigate(`/user/delete`);
                }}
              >
                <span>
                  <LuContact /> <Link> Delete account </Link>
                </span>
              </li>
            )}

            <li onClick={handleLogout}>
              {username && (
                <span>
                  <LuContact /> <Link> Logout </Link>{" "}
                </span>
              )}
            </li>
          </ul>
        )}
      </div>

      <div className="logo">
        <img src={logo} width={300} alt="some pic" />
      </div>

      <ul>
        <li>
          {" "}
          <Link to="/"> Home </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about"> About </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact"> Contact </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/services"> Services </Link>{" "}
        </li>
      </ul>

      <div className="userprofile">
        
          {username ? (
            <p> Welcome {username} </p>
            
          ) : (
            <button
              onClick={() => {
                navigate("/user/login");
              }}
            >
              Login
            </button>
          )}
       

        {username && (
          <div onClick={handleNav} className="dropdown">
            <HiDotsVertical />

            {showsideNav && (
              <ul>
                {user.role === "service provider" && (
                  <li
                    onClick={() => {
                      navigate(`/user/user-profile`);
                    }}
                  >
                    {" "}
                    User profile
                  </li>
                )}

                <li>Settings </li>

                <li
                  onClick={() => {
                    user.role === "customer" &&
                      navigate(`/user/provideServices/request`);
                  }}
                >
                  {user.role === "customer"
                    ? "Make Seller's Account"
                    : "Deactivate Services Account"}
                </li>

                <li
                  onClick={() => {
                    navigate(`/user/delete`);
                  }}
                >
                  Delete my account
                </li>

                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
