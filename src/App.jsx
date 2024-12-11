import React, { useContext, useEffect } from "react";
import { Context } from "./context/Store";
import { Route, Routes } from "react-router-dom";
import "./global.scss";

import Navbar from "./components/sharedComponents/Navbar";
import Footer from "./components/sharedComponents/Footer";

import NopageFound from "./components/pages/NopageFound";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import ForgotPass from "./components/pages/ForgotPass";
import ResetPass from "./components/pages/ResetPass";
import DeleteUser from "./components/pages/DeleteUser";
import SecureProfile from "./components/pages/SecureProfile";
import UserProfile from "./components/pages/UserProfile";
import OrderPayment from "./components/pages/OrderPayment";



const App = () => {
  const { fetchData, loading } = useContext(Context);

  useEffect(() => { 
      fetchData();
  }, [loading,fetchData]);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="*" element={<NopageFound/>} />
          <Route path="/" element={<Home />} />
          {/* guest routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/forgotpass" element={<ForgotPass />} />
          <Route path="/user/resetPass/:userId" element={<ResetPass />} />
          {/* secure routes */}
          <Route path="/user/delete" element={<DeleteUser />} />
          <Route path="/user/secureprofile" element={<SecureProfile />} />
          <Route path="/user/user-profile"  element={<UserProfile/>}/>

         {/* payment routes */}

         <Route path="/order/payment/:orderId"  element={<OrderPayment/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
