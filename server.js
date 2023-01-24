const  mongoose = require('mongoose');
const app = require('./src/index')
require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
}

let client
const initializeDB = async ()=>{
  client  =  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log(err));
}


const server = app.listen(config.port, () => {
  initializeDB();
  console.log("Server started on port", config.port);
});



module.exports = server
