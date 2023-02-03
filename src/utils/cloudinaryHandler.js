const fs = require("fs");
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
      // console.log('AUDIO:::',result);
      return result;
    });
  },
  uploadImage: async (filePath, fileName) => {
    cloudinary.v2.uploader.upload(filePath, { public_id: `messageImages/${fileName}` }, function (error, result) {
      if (error) {
        console.log(error);
        return error;
      }
      // console.log('IMAGE:::',result);
      return result;
    });
  },
  deleteFileInServer: async (filePath) => {
    if (Array.isArray(filePath)) {
      console.log("DELETING FILES...");
      try {
        filePath.forEach((path) => {
          fs.unlink(path, (err) => {
            if (err) return console.log(err);
          });
        });
      } catch (error) {
        console.log(error);
      }
      return;
    }
    fs.unlink(filePath, (err) => {
      if (err) return console.log(err);
    });
  },
};

module.exports = uploadHandlers;
