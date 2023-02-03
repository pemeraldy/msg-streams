const mongoose = require("../dbConnection");

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

mongoose.model("users", UserSchema);

module.exports = mongoose.model("users");
