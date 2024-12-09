import React from "react";
import "./CreateService.scss";

import UploadServicePic from "../atoms/UploadServicePic";

import CreateForm from "../atoms/CreateForm";
import EditForm from "../atoms/EditForm";

const CreateService = ({
  setShowForm,
  showUplaodForm,
  setShowUploadForm,
  editForm,
}) => {
  return (
    <>
      {showUplaodForm ? (
        <UploadServicePic
          setShowForm={setShowForm}
          setShowUploadForm={setShowUploadForm}/>
      ) : editForm ? (
        <EditForm   
         setShowForm={setShowForm} 
         setShowUploadForm={setShowUploadForm}/>
      ) : (
        <CreateForm 
        setShowUploadForm={setShowUploadForm} 
        editForm={editForm} />
       
      )}
    </>
  );
};

export default CreateService;
