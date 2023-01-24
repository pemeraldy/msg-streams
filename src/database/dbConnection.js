const mongoose = require('mongoose')
require('dotenv').config()

const initializeDB =  () => {
   mongoose
    .connect(process.env.MONGO_URI)
    .then((e) => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log('ERRORR::::',err));
};

module.exports = initializeDB
