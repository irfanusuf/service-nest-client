import React, { useContext, useState } from 'react'
import { Context } from '../../context/Store'
import { toast } from 'react-toastify'

const UploadServicePic = ({setShowForm , setShowUploadForm}) => {

    const {uploadServicePic} = useContext(Context)
   const serviceId = sessionStorage.getItem("serviceId")
   const [ image , setImage] = useState(null)
   const [loadImage , setLoadImage] = useState(false)

    const formData = new FormData()

    formData.append("image" , image)



  

    const handleImage = (e) => {
      const file = e.target.files[0]; 
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
          setLoadImage(true)
        } 
      };
    };


  return (
    <div>
        <label htmlFor="fileupload"> upload your service related pics </label>

        <input
        id='fileupload'
        type='file'
        style={{display : "none"}}
        onChange={(e)=>{handleImage(e)}}
        />
    {/* // image is not in readable format for img tag */}

      <img src={image} alt='no-image' width={400}/>   


       <button disabled={!loadImage} onClick={async()=>{
        if(serviceId !== null){
          const upload = await uploadServicePic(formData , serviceId)
          if(upload){
              setShowForm(false)
              setShowUploadForm(false)
          }
        }else{
          toast.error("Something went Wrong!")
        }
       

       }}>  Save Changes </button>



    </div>
  )
}

export default UploadServicePic