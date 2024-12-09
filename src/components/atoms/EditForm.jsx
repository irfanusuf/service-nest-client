import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Store";
import { ImForward } from "react-icons/im";




const EditForm = ({ setShowForm , showUplaodForm , setShowUploadForm}) => {
  const { editService , getServicebyId , service} = useContext(Context);
  
  const [formData, setFormData] = useState(service);


  useEffect(()=>{

    getServicebyId("67498c1bd427d65de2fe4e58")

  } , [getServicebyId])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <>
    
      <div className="create-service">
          <h3>Edit your Service</h3>

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
                  value={formData.serviceTitle}
                  className="title"
                  name="serviceTitle"
                  onChange={handleChange}
                />

                <textarea
                 value={formData.description}
                  name="description"
                  onChange={handleChange}
                ></textarea>

                <input value={formData.category} name="category" onChange={handleChange} />

                <input
                  value={formData.timeOfCompletion}
                  className="time"
                  name="timeOfCompletion"
                  onChange={handleChange}
                />

                <input
                value={formData.region}
                  className="region"
                  name="region"
                  onChange={handleChange}
                />

                <div className=" cost cost_discount">
                  <input
                  value={formData.serviceCost}
                    type="number"
                    name="serviceCost"
                    onChange={handleChange}
                  />

                  <div className="discount">
                    <input
                    value={formData.discount}
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
                    const service =  await editService("67498c1bd427d65de2fe4e58" , formData);
                 
                    if(service){
                      setFormData({
                        serviceTitle: "",
                        description : "",
                        serviceCost: "",
                        discount: "",
                        timeOfCompletion: "",
                        region: "",
                        category: "",
                      });
                      
                      setShowUploadForm(true)
                    }
                      
                  }}
                >
                  Edit and continue <ImForward style={{ fontSize: "22px"  , marginLeft : "10px"}} />
                </button>
              </div>
            </div>


          </div>
        </div>
  
    </>
  );
};

export default EditForm;
