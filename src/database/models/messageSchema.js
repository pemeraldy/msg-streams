const mongoose = require("../dbConnection");

const { Schema } = mongoose;

const messageSchema = new Schema({
  audio: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    default: "",
  },
  thumbnail: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: new Date(),
  },
  tags: {
    type: Array,
  },
});

mongoose.model("messages", messageSchema);

module.exports = mongoose.model("messages");

