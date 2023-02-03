const message = require("./database/models/messageSchema");

const messageControllers = {
  addMessage: async (req, res) => {
    try {
      if (req.files) {
        const { audio, photo } = req.files;
        // console.log("FILEs", audio[0].path, photo[0].path, audio, photo);
        const audioResult = await uploadAudio(audio[0].path, audio[0].originalname);
        const photoResult = await uploadImage(photo[0].path, photo[0].originalname);
        console.log(audioResult.secure_url, photoResult.secure_url);
        deleteFileInServer(audio[0].path);
        deleteFileInServer(audio[0].path);
      }
      res.status(200).json({ msg: "Test" });
    } catch (error) {
      res.status(500);
    }
  },
};

module.exports = messageControllers;
