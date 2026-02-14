import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const responce=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    console.log("file uploaded successfully",responce.url)
    return responce;
  } catch (error) {
    fs.unlinkSync(localFilePath) //remove locaaly saved temporary file as upload operation got failed 
    return null;
  }
};

export {uploadOnCloudinary} 
