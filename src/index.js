const express = require("express");
const user = require("./database/models/userSchema");
const message = require('./database/models/messageSchema')

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
  console.log(error)
}
};


const messageRoute = async (req, res) => {
  try {
    const result = await message.create({
      audio: "https://cloudn234xxd.com",
      title: "the convenant of promise 2",
      author: "Pst. Ayo Ajani",
    }); 
    res.status(200).json({ message: result });

  } catch (error) {

    console.log(error);
    res.status(500)
  }
}


const initializeApp =  () => {
  const app = express();
  app.get("/", async (req, res) => {
    await saveUser()
    return res.status(200).json({ message: "Holla! 😄" });
  });
  app.use('/message', [messageRoute])
  return app;
};

const app = initializeApp();

module.exports = app;
