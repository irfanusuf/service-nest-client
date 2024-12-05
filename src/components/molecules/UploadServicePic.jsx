import React, { useContext, useState } from 'react'
import { Context } from '../../context/Store'

const UploadServicePic = ({setShowForm , setShowUploadForm}) => {

    const {uploadServicePic} = useContext(Context)
   const serviceId = sessionStorage.getItem("serviceId")
   const [ image , setImage] = useState(null)

     const formData = new FormData()

    formData.append("image" , image)


  return (
    <div>
        <label htmlFor="fileupload"> upload your service related pics </label>

        <input
        id='fileupload'
        type='file'
        style={{display : "none"}}
        onChange={(e)=>{setImage(e.target.files[0])}}
        />
    
       <button onClick={async()=>{
        const upload = await uploadServicePic(formData , serviceId)
        if(upload){
            setShowForm(false)
            setShowUploadForm(false)
        }



       }}>  Save Changes </button>



    </div>
  )
}

export default UploadServicePic