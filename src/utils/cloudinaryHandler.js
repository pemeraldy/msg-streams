const fs = require("fs");
const cloudinary = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRETE,
});


const deleteFileInServer = async (filePath) => {
  await fs.unlink(filePath, (err) => {
    if (err) return console.log(err);
  });
};


const uploadHandlers = {
  uploadAudio: async (filePath, fileName) => {
    const audio = cloudinary.v2.uploader.upload(filePath, { resource_type: "raw", public_id: `messageUploads/${fileName}` }, function (error, result) {
      if (error) {
        console.log(error);
        return error;
      }
      return result;
    });
    // deleteFileInServer(filePath);
    return audio;
  },
  uploadImage: async (filePath, fileName) => {
    const img = cloudinary.v2.uploader.upload(filePath, { public_id: `messageImages/${fileName}` }, function (error, result) {
      if (error) {
        console.log(error);
        return error;
      }

      return result;
    });
    // deleteFileInServer(filePath);
    return img;
  },
  deleteFileInServer,
};

module.exports = uploadHandlers;
