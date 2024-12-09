import React from "react";
import "./CreateService.scss";

import UploadServicePic from "./UploadServicePic";

import CreateForm from "./CreateForm";

const CreateService = ({ setShowForm, showUplaodForm, setShowUploadForm  , editForm}) => {
  return (
    <>
      {showUplaodForm ? (
        <UploadServicePic
          setShowForm={setShowForm}
          setShowUploadForm={setShowUploadForm}
        />
      ) : (
        <CreateForm 
        setShowUploadForm={setShowUploadForm}
        editForm={editForm} />
      )}
    </>
  );
};

export default CreateService;
