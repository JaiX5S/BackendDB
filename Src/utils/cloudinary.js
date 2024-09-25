import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

 cloudinary.config({ 
  cloud_name: 'Process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'CLOUDINARY_API_KEY ', 
   api_secret: 'CLOUDINARY_API_SECRET'
             // Click 'View API Keys' above to copy your API secret
}); 

const uploadonCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    // upload the file on cloudinary
    cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })
    // file has been sucessfully upload on cloudinary
    console.log("File has been upload on cloudinary",
      response.url);
    return response;


  } catch (error) {
    fs.unlinkSync(localFilePath)
    // remove the locally saved temporary fise as the upload operation got failed .
    return null;
  }
}


cloudinary.v2.uploader.upload('https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
  { public_id: "Shose" }
  function (error, result)
  {
    console.log(result);
  }
)

export {uploadonCloudinary}
  