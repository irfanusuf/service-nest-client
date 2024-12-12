import React, { useContext, useEffect } from "react";
import "./Services.scss";
import { Context } from "../../context/Store";

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
              <p> service Cost :{element.serviceCost} Rs</p>
              <p> Discount :{element.discount} %</p>
              <p> #{element.category} </p>
              <p> Region : {element.region} </p>
              <p> time of Completion : {element.timeOfCompletion} </p>

              <button
                onClick={() => {
                  createorder(element._id);
                }}
              >
                {" "}
                Book now{" "}
              </button>
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
