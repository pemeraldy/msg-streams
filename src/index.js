const express = require("express");
const path = require("path");

const { addMessage } = require("./controllers/messageController");
const extractUploadedFile = require("./middlewares/extractFiles");




const initializeApp = () => {
  const app = express();
  app.use(express.json());
  app.get("/", async (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, "./sample-page.html"));
  });

  app.post(
    "/message",
    extractUploadedFile,
    addMessage
  );

  return app;
};

const app = initializeApp();

module.exports = app;
