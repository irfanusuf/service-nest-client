import React, { useState } from "react";
import "./Home.scss";


const Home = (props) => {
  const [count, setCount] = useState(0);
  const [enableDarkMode, setEnableDarkMode] = useState(false);
 

 

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDarkMode = () => {
    setEnableDarkMode(!enableDarkMode);
  };

  return (
    <div className={enableDarkMode ? "container-dark" : "container-light"}>
      welcome {props.user}
      the value of count is {count}
      <button onClick={handleIncrement}> increment </button>

      <button onClick={handleDarkMode}>
       
        {enableDarkMode ? "Enable Light Mode" : "Enable Dark Mode"}{" "}
      </button>
    </div>
  );
};

export default Home;
