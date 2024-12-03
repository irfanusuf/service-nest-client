import React, { useContext, useState } from "react";
import "./UserProfile.css";
import { Context } from "../context/Store";
// import IsAuthorised from "../utils/IsAuthorised";

const UserProfile = () => {
  // IsAuthorised();

  const { user, uploadProfileImage } = useContext(Context);

  const [image, setImage] = useState(null);

  const formData = new FormData(); // empty arrray

  formData.append("image", image);

  return (
    <div className="container">
      <div className="profile-container">

        <div className="profile-pic">
          
          <img src={user.profilepicUrl} alt={user.username} width={200} />
        </div>

        <input
          type="file"
          placeholder="Upload your profile "
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button
          type="button"
          onClick={() => {
            uploadProfileImage(formData);
            setImage(null);
          }}
        >
          Upload
        </button>

        <button className="btn">  Activate account </button>
        <button className="btn"> Add service  </button>
        <h2> {user.username} </h2>

        <h3> Live Location </h3>

        <h2>Description</h2>

        <h2> Reviews and  Ratings ({user.reviews && user.reviews.length})</h2>

        <h2> Services Provided ({user.services && user.services.length})</h2>


        <div className="services">


           {user.services && user.services.map((element) => (<div className="service">

              <h3> {element.serviceTitle} </h3>
              <img src={element.picUrls} width={300} />
              <p> service Cost :{element.serviceCost} Rs</p>
              <p> Discount :{element.discount} %</p>
              <p> #{element.category}  </p>
              <p> Region : {element.region}  </p>
              <p> time of Completion : {element.timeOfCompletion}  </p>

              <button> Book now  </button>



           </div>))}


        </div>








        <h3> Report Abuse</h3>

        
      </div>
    </div>
  );
};

export default UserProfile;
