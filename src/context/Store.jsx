import React, { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import App from "../App";
import api from "../utils/Axiosinstance";

export const Context = createContext();

const Store = () => {
  const navigate = useNavigate();
  const [store, setStore] = useState({
    loading: false,
    username: "",
    email: "",
    user: {},
    allServices : [],
    service: {},
  });

  const verifyToken = useCallback(async () => {
    try {
      const res = await api.get("/user/isAuth");
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get("/user/getUser");

      setStore((prev) => ({
        ...prev,
        username: response.data.payload.username,
        email: response.data.payload.email,
        user: response.data.payload,
      }));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleRegister = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/register", formData);

      if (response.data.message === "User created Succesfully!") {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
   
    }
  };

  const handleLogin = async (e, formData) => {
    e.preventDefault();
    try {
      setStore((prev) => ({ ...prev, loading: true }));
      const response = await api.post("/user/login", formData);

      if (response.data.message === "Logged in Succesfully") {
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("userId", response.data.userId);
        // toast.success(response.data.message);

        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
    } finally {
      setStore((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleForgotPass = async (e, email) => {
    e.preventDefault();

    try {
      const res = await api.post("/user/forgotPass", { email: email });

      if (res.status === 200) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
    if (error.response && (error.response.status === 400 || 404 || 500)) {
      toast.error(error.response.data.message || "server Error");
    } else {
      toast.error("An unexpected error occurred!");
    }
    return false;
    }
  };

  const handleResetPass = async (e, userId, formData) => {
    e.preventDefault();

    try {
      const res = await api.put(`/user/password/reset/${userId}`, formData);
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
     
    }
  };

  const handleDeleteUser = async (e, password) => {
    e.preventDefault();

    try {
      const res = await api.post("/user/delete", { password: password });

      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
     
    }
  };

  const uploadProfileImage = async (formData) => {
    try {
      const res = await api.post("/user/upload/profile", formData);
      if ((res.status = 200)) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
 
    }
  };

  const createService = async (formData) => {
    try {
      setStore((prev) => ({ ...prev, loading: true }));
      const res = await api.post("/seller/create/service", formData);

      if (res.status === 200) {
        toast.success(res.data.message);
        sessionStorage.setItem("serviceId", res.data.payload._id);
        return true;
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
      return false;
    } finally {
      setStore((prev) => ({ ...prev, loading: false }));
    }
  };

  const uploadServicePic = async (formData, serviceId) => {
    try {
      setStore((prev) => ({ ...prev, loading: true }));
      const res = await api.post(
        `/seller/upload/serviceImage?serviceId=${serviceId}`,
        formData
      );
      if (res.status === 200) {
        return true;
      }
    } catch (error) {
      console.error(error);
    if (error.response && (error.response.status === 400 || 404 || 500)) {
      toast.error(error.response.data.message || "server Error");
    } else {
      toast.error("An unexpected error occurred!");
    }
    return false;
    } finally {
      setStore((prev) => ({ ...prev, loading: false }));
    }
  };

  const deleteService = async (serviceId) => {
    try {
      setStore((prev) => ({ ...prev, loading: true }));
      const res = await api.delete(
        `/seller/delete/service?serviceId=${serviceId}`
      );
      if (res.status === 200) {
        toast.success(res.data.message);

        return true;
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
      return false;
    } finally {
      setStore((prev) => ({ ...prev, loading: false }));
    }
  };

  const editService = async (serviceId, formData) => {
    try {
      setStore((prev) => ({ ...prev, loading: true }));
      const res = await api.put(
        `/seller/edit/service?serviceId=${serviceId}`,
        formData
      );

      if (res.status === 200) {
        toast.success(res.data.message);

        return true;
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
      return false;
    } finally {
      setStore((prev) => ({ ...prev, loading: false }));
    }
  };

  const getServicebyId = useCallback(async (serviceId) => {
    try {
      const res = await api.get(`/service?serviceId=${serviceId}`);

      if (res.status === 200) {
        setStore((prev) => ({ ...prev, service: res.data.payload }));
      }
    } catch (error) {
      console.error(error);
      if (error.response && (error.response.status === 400 || 404 || 500)) {
        toast.error(error.response.data.message || "server Error");
      } else {
        toast.error("An unexpected error occurred!");
      }
      
    }
  }, []);


 const createorder =  async (serviceId) =>{

  try {
    setStore((prev) => ({ ...prev, loading: true }));
    const res = await api.post(
      `/customer/create/order?serviceId=${serviceId}`,
    );

    if (res.status === 200) {
      toast.success(res.data.message);
      const orderId = res.data.payload._id
      navigate(`/order/payment/${orderId}`)

      return true;
    }
  } catch (error) { 
    console.error(error);
    if (error.response && (error.response.status === 400 || 404 || 500)) {
      toast.error(error.response.data.message || "server Error");
    } else {
      toast.error("An unexpected error occurred!");
    }
    return false;
  } finally {
    setStore((prev) => ({ ...prev, loading: false }));
  }


 }


 const cancelOrder =  async (orderId) =>{

  try {
    
    const res = await api.put(`/customer/cancel/order?orderId=${orderId}` )

    if(res.status === 200){
      toast.success(res.data.message)
      navigate("/services")
    }


  } catch (error) {
    console.error(error);
    if (error.response && (error.response.status === 400 || 404 || 500)) {
      toast.error(error.response.data.message || "server Error");
    } else {
      toast.error("An unexpected error occurred!");
    }
   
  }

 }

 
 const getAllServices = useCallback(async () =>{

  try {
    
    const res = await api.get("/services/all")
    if(res.status ===200){
      setStore((prev) => ({...prev , allServices : res.data.payload}))
    }
  } catch (error) {
    console.error(error);
    if (error.response && (error.response.status === 400 || 404 || 500)) {
      toast.error(error.response.data.message || "server Error");
    } else {
      toast.error("An unexpected error occurred!");
    }
    return false;
  }

 } , []) 


const activateService = async (serviceId) => {
  try {
    setStore((prev) => ({ ...prev, loading: true }));
    const res = await api.get(`/seller/activate/service/?serviceId=${serviceId}`);
    if (res.status === 200) {
      toast.success(res.data.message);
    }
  } catch (error) {
    console.error(error);
  }
  finally{
    setStore((prev) => ({ ...prev, loading: false }));
  }
};


  return (  
    <Context.Provider
      value={{
        ...store,
        verifyToken,
        handleRegister,
        handleLogin,
        fetchData,
        handleForgotPass,
        handleResetPass,
        handleDeleteUser,
        uploadProfileImage,
        createService,
        uploadServicePic,
        deleteService,
        editService,
        getServicebyId,
        createorder,
        cancelOrder,
        getAllServices,
        activateService
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default Store;
