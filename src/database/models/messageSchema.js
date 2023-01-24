import mongoose from "../dbConnection";

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
  },
  thumbnail: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date()
  },
  tags: {
    type: Array,
  },
});

mongoose.model("messages", messageSchema);

module.exports = mongoose.model("messages");

