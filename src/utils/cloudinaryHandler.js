const cloudinary = require("cloudinary");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRETE,
});

const uploadHandlers = {
  uploadAudio: async (filePath, fileName) => {
    cloudinary.v2.uploader.upload(filePath, { resource_type: "raw", public_id: `messageUploads/${fileName}` }, function (error, result) {
      if (error) {
        console.log(error);
        return error;
      }
      console.log(result);
      return result;
    });
  },
};


module.exports = uploadHandlers