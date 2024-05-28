import {v2 as cloudinary} from "cloudinary" 
import { response } from "express";
import fs from "fs"

//cloudinary is used configed
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
  });

  const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        //upload the file on cloudinary
        const res= await cloudinary.uploader.upload(
            localFilePath,
            {
    /*public_id: uuid()
    Purpose: Assigns a unique identifier to the uploaded file.
    Explanation: The public_id option sets the public identifier for the uploaded resource. By default, Cloudinary generates a unique identifier for each upload, but you can specify your own identifier using this option*/
              resource_type: "auto",
              public_id: uuid(),
            },
          );
          //file has been uploaded successfully
          console.log("fILE HAS BEEN UPLOADED  SUCCESSFULLY",res.url)
          return res;
    } catch (error) {
            fs.unlinkSync(localFilePath)//removes the locally saved temporary file as the upload operation got failed
            return null;
    }
  }

  export {cloudinary};