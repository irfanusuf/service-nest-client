import React, { useContext, useState } from "react";
import "./UserProfile.scss";
import { Context } from "../../context/Store";
import { FaPlus } from "react-icons/fa";

import CreateService from "../molecules/CreateService";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
// import IsAuthorised from "../utils/IsAuthorised";

const UserProfile = () => {
  // IsAuthorised();

  const { user, uploadProfileImage , deleteService } = useContext(Context);

  const [showForm , setShowForm] = useState(false)

  const [editForm , setEditForm] = useState(false)

  const [showUplaodForm , setShowUploadForm] = useState(false)
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
             {showForm ? 
             <button disabled ={showUplaodForm} onClick={()=>{setShowForm(false)}}>
              <RiArrowGoBackLine style={{marginRight : "10px"}}/> Back 
             </button>
             : <button onClick={()=>{
              setEditForm(false)
              setShowForm(true)}}>
                <FaPlus  style={{marginRight : "10px"}}/>Create New
              </button>}
            </div>  

            <hr/>
          
            {!showForm && <div className="header">
              <span onClick={()=>{toggleColor(true)}} className={showColor ? "span" : ""}> Active Services </span>
              <span onClick={()=>{toggleColor(false)}} className={!showColor ? "span" : ""}> Inactive Services</span>
              {/* <span onClick={()=>{toggleColor("teow")}} className="drafts"> Drafts </span> */}
            </div>}

           
            {showForm ? 
            
            <CreateService setShowForm ={setShowForm} showUplaodForm ={showUplaodForm} setShowUploadFor =
            {setShowUploadForm} editForm ={editForm} setEditForm = {setEditForm} /> :

            
              <div className="services">
              {user.services &&
                user.services.map((element) => (
                  <div className="service">

                    <div className="service-head">  
                    <h3> {element.serviceTitle} </h3>  


                    <span > <CiEdit onClick={()=>{
                      setShowForm(true)
                      setEditForm(true)}}/> </span>
                    <span onClick={()=>{deleteService(element._id)}}> <MdDelete style={{color : "red"}}/></span>

                    </div>
           
                    <img src={element.picUrls} width={300} alt={element.serviceTitle} />
                    <p> service Cost :{element.serviceCost} Rs</p>
                    <p> Discount :{element.discount} %</p>
                    <p> #{element.category} </p>
                    <p> Region : {element.region} </p>
                    <p> time of Completion : {element.timeOfCompletion} </p>

                    <button> Book now </button>
                  </div>
                ))}
              </div>
          
        
            }


          </div>  
        </div>





        <div className="lower-block">
          <h4> Report Abuse</h4>
        </div>
      </div>
   
  );
};

export default UserProfile;
