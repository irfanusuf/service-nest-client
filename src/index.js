import reactDom from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Store from "./context/Store";
import { ToastContainer } from "react-toastify";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar = {false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="light"
   
    />
    <Store />
  </BrowserRouter>
);
