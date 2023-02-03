const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const user = require("./database/models/userSchema");
const {uploadAudio, deleteFileInServer, uploadImage} = require('./utils/cloudinaryHandler')
const upload = multer({ dest: "uploads/" });



const saveUser = async () => {
  console.log("SAVE USER");
  const userDetail = {
    name: "Ada Oweri 2",
    email: "ada@mem.com",
  };
  try {
    const resp = await user.create(userDetail);
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

const messageRoute = async (req, res) => {  
  try {
    if(req.files){
      const { audio, photo } = req.files;
      const filePaths = [audio[0].path, photo[0].path];
      console.log("FILEs", filePaths);      
      const aud = await uploadAudio(audio[0].path, audio[0].originalname);
      console.log(aud);
      await uploadImage(photo[0].path, photo[0].originalname);
      await deleteFileInServer(filePaths);
      // deleteFileInServer(audio[0].path)
      // deleteFileInServer(photo[0].path)

    }
    res.status(200).json({ msg: "Test" });
  } catch (error) {    
    res.status(500);
  }
};

const initializeApp = () => {
  const app = express();
  app.use(express.json());
  app.get("/", async (req, res) => {
    // await saveUser();
    return res.status(200).sendFile(path.join(__dirname, './sample-page.html'))
  });

  app.post("/message", upload.fields([{name: "audio", maxCount: 1}, {name:"photo", maxCount: 1}]), messageRoute);

  return app;
};

const app = initializeApp();

module.exports = app;
