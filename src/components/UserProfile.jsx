import React, { useContext, useState } from "react";
import "./UserProfile.css";
import { Context } from "../context/Store";
import { FaPlus } from "react-icons/fa";

import CreateService from "../sharedComponents/CreateService";
// import IsAuthorised from "../utils/IsAuthorised";

const UserProfile = () => {
  // IsAuthorised();

  const { user, uploadProfileImage } = useContext(Context);

  const [showForm , setShowForm] = useState(false)

  const [showColor , toggleColor] = useState(true)

  const [image, setImage] = useState(null);

  const formData = new FormData(); // empty arrray

  formData.append("image", image);

  return (
    
      <div className="profile-container">


        <div className="upper-block">

          <div className="left-block">

            <div className="profile-block">
              <div className="profile-pic">
                <img src={user.profilepicUrl} alt={user.username} width={200} />
              </div>

              <label htmlFor="fileInput">Upload new profile</label>
              <input
                type="file"
                id="fileInput"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  uploadProfileImage(formData);
                  setImage(null);
                }}
              />

              <h2> Irfan Yousuf{user.username} </h2>

              <p>Bio</p>

              <p> Live Location </p>

              <h4>
                Reviews and Ratings ({user.reviews && user.reviews.length})
              </h4>

              <h4>
                Services Provided ({user.services && user.services.length})
              </h4>
            </div>

            <div className="profile-block">
              <h3>Description</h3>
            </div>

            <div className="profile-block">
              <h3>Skills</h3>
            </div>
          </div>

          <div className="right-block">
            
            <div className="services-header">
              <span onClick={()=>{setShowForm(true)}}>
                <FaPlus  style={{marginRight : "10px"}}/>Create New
              </span>
            </div>

            <hr/>
          
            {!showForm && <div className="header">
              <span onClick={()=>{toggleColor(true)}} className={showColor && "span"}> Active Services </span>
              <span onClick={()=>{toggleColor(false)}} className={!showColor && "span"}> Inactive Services</span>
              {/* <span onClick={()=>{toggleColor("teow")}} className="drafts"> Drafts </span> */}
            </div>}

           
            {showForm ? <CreateService setShowForm ={setShowForm}/> :

            
            <div className="services">
              {user.services &&
                user.services.map((element) => (
                  <div className="service">
                    <h3> {element.serviceTitle} </h3>
                    <img src={element.picUrls} width={300} alt={element.serviceTitle} />
                    <p> service Cost :{element.serviceCost} Rs</p>
                    <p> Discount :{element.discount} %</p>
                    <p> #{element.category} </p>
                    <p> Region : {element.region} </p>
                    <p> time of Completion : {element.timeOfCompletion} </p>

                    <button> Book now </button>
                  </div>
                ))}
            </div>}


          </div>  
        </div>





        <div className="lower-block">
          <h4> Report Abuse</h4>
        </div>
      </div>
   
  );
};

export default UserProfile;
