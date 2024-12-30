import React, { useContext, useEffect } from "react";
import "./Services.scss";
import { Context } from "../../context/Store";
import { Link } from "react-router-dom";

const Services = () => {
  const { getAllServices, allServices, createorder } = useContext(Context);

  useEffect(() => {
    getAllServices();
  }, [getAllServices]);

  return (
    <div className="services-container">

        <h1> Services Provided by service Nest </h1>

      <div className="services">
        {allServices ? (
          allServices.map((element) => (
            <div className="service">
              <div className="service-head">
                <h3> {element.serviceTitle} </h3>
              </div>

              <img
                src={element.picUrls}
                width={300}
                alt={element.serviceTitle}
              />
              <div className="service-body">
              <p> Service Cost :{element.serviceCost} Rs</p>
              <p> Discount :{element.discount} %</p>
              <p> #{element.category} </p>
              <p> Region : {element.region} </p>

              <p> Time of Completion : {element.timeOfCompletion} </p>


              <span> {!element.isActive && "Service Unavailable "} </span>

              <p> <Link> Reviews ({element.reviews.length})   </Link>  </p>
              <p> <Link> Give Your Review   </Link>  </p>
              </div>
       

              <div className=" buttons">
                
              <button
                onClick={() => {
                  createorder(element._id);
                }}
              >
           
                Details
              </button>


              <button
                onClick={() => {
                  createorder(element._id);
                }}
              >
           
                 Book now
              </button>
              
            </div>


            </div>
          ))
        ) : (
          <div> No Services</div>
        )}
      </div>
    </div>
  );
};

export default Services;
