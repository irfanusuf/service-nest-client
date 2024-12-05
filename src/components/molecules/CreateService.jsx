import React, { useContext, useState } from "react";
import "./CreateService.scss";
import { Context } from "../../context/Store";
import { ImForward } from "react-icons/im";
import UploadServicePic from "./UploadServicePic";


const CreateService = ({ setShowForm , showUplaodForm , setShowUploadForm}) => {
  const { createService } = useContext(Context);
  
  const [formData, setFormData] = useState({
    serviceTitle: "",
    description : "",
    serviceCost: "",
    discount: "",
    timeOfCompletion: "",
    region: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <>
    
       {showUplaodForm ?  <UploadServicePic setShowForm={setShowForm} setShowUploadForm={setShowUploadForm} /> : <div className="create-service">
          <h3>Create a New Service</h3>

          <div className="main-block">


            <div className="guide">
              <div className="title">
                <label>Your Service Title</label>
                <p>
                  Give your service a catchy and clear name (e.g., "Affordable
                  Plumbing Repairs").
                </p>
              </div>

              <div className="description">
                <label>Describe your service (Max 500 words) </label>
                <p>
                  The Service Description should explain what your service
                  offers, highlight key features (e.g., "expert support"), and
                  mention what’s included (e.g., "free consultation"). Focus on
                  what makes your service unique to attract customers.
                </p>
              </div>

              <div className="category">
                <label> Category </label>
                <p>
                  {" "}
                  Provide at least 3 hashtags which describes your service
                  category
                </p>
              </div>

              <div className="time">
                <label> Time of Completion</label>
                <p>
                  Specify how long it will take to complete the service (e.g.,
                  "2 days").
                </p>
              </div>

              <div className="region">
                <label> Region </label>
                <p> Define the areas where you provide this service.</p>
              </div>

              <div className="cost">
                <label>Cost of the Service (INR) </label>
                <p>Set the price for your service in your local currency.</p>
              </div>
            </div>

            <div className="form">
              <form>
                <input
                  className="title"
                  name="serviceTitle"
                  onChange={handleChange}
                />

                <textarea
                  name="description"
                  onChange={handleChange}
                ></textarea>

                <input name="category" onChange={handleChange} />

                <input
                  className="time"
                  name="timeOfCompletion"
                  onChange={handleChange}
                />

                <input
                  className="region"
                  name="region"
                  onChange={handleChange}
                />

                <div className=" cost cost_discount">
                  <input
                    type="number"
                    name="serviceCost"
                    onChange={handleChange}
                  />

                  <div className="discount">
                    <input
                      type="number"
                      name="discount"
                      onChange={handleChange}
                    />
                    <p> Discount (%). if any </p>
                  </div>
                </div>
              </form>

              <div className="button-group">
                <button
                  className="create"
                  onClick={async() => {
                    const service =  await createService(formData);
                 
                    if(true){
                      setFormData({
                        serviceTitle: "",
                        description : "",
                        serviceCost: "",
                        discount: "",
                        timeOfCompletion: "",
                        region: "",
                        category: "",
                      });
                      // setShowForm(false)
                      setShowUploadForm(true)
                    }
                     
                      
                  }}
                >
                  Save and continue <ImForward style={{ fontSize: "22px"  , marginLeft : "10px"}} />
                </button>
              </div>
            </div>


          </div>
        </div>}
  
    </>
  );
};

export default CreateService;
