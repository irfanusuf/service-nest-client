import React from "react";
import "./Home.scss";
import WhatWeProvide from "../molecules/WhatWeProvide";

const Home = () => {
  return (

    <>
    
  
    <div className="hero">


      <div className="left">
        <div className="punch">
          <span> Ready To help You!</span>

          <h1> The Best Solution </h1>
          <h1> For Every</h1>
          <h1> problem</h1>

          <p> "For every challenge you face, there's a solution waiting to be discovered. Whether it’s a small hiccup or a big hurdle, we bring the best answers tailored to your needs. Stop stressing over problems—start embracing solutions that work!"</p>

          <button className="btn"> Book Now</button>
        </div>
      </div>

      <div className="right">



      </div>
    </div>


    <div className="whyUs">

    <span>   meow</span>

    <span>   meow</span>

    <span>   meow</span>

    </div>

    <WhatWeProvide/>


    </>


  );
};

export default Home;
