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
          {" "}
          <img src={user.profilepicUrl} alt={user.username} width={200} />{" "}
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
        <h2> username</h2>

        <h3> Live Location </h3>

        <h2>Description</h2>

        <h2> Reviews and  Ratings (4)</h2>

        <h2> Services Provided (3)</h2>

        <h3> Report Abuse</h3>

        <h2>{user.services && user.services[0].serviceTitle}</h2>
      </div>
    </div>
  );
};

export default UserProfile;
