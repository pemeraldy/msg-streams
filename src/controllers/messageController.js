const { uploadAudio, uploadImage } = require("../utils/cloudinaryHandler");

const message = require("../database/models/messageSchema");

const messageControllers = {
  addMessage: async (req, res) => {
    const { title, author } = req.body;
    try {
      if (req.files) {
        const { audio, photo } = req.files;
        const { secure_url: audioUrl } = await uploadAudio(audio[0].path, audio[0].originalname);
        const { secure_url: imgUrl } = await uploadImage(photo[0].path, photo[0].originalname);
        await message.create({
          title,
          author,
          image: imgUrl,
          audio: audioUrl
        });        
      }

      res.status(200).json({ msg: "Files upload successful" });
    } catch (error) {
      res.status(500);
    }
  },
};

module.exports = messageControllers;
