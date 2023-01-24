const express = require("express");
const user = require("./database/models/userSchema");

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

const initializeApp =  () => {
  const app = express();
  app.get("/", async (req, res) => {
    await saveUser()
    return res.status(200).json({ message: "Holla! 😄" });
  });
  return app;
};

const app = initializeApp();

module.exports = app;
