const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const user = require("./database/models/userSchema");
const message = require("./database/models/messageSchema");
const {uploadAudio, deleteFileInServer} = require('./utils/cloudinaryHandler')
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
    if(req.file){
      const {path} = req.file
      console.log("FILE",req.file);
      
      await uploadAudio(path,'new-audio1');
      deleteFileInServer(path)
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

  app.post("/message", upload.single("audio"), messageRoute);

  return app;
};

const app = initializeApp();

module.exports = app;
