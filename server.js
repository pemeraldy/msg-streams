const initializeDB = require("./src/database/dbConnection");
const app = require('./src/index')
require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
}

const server = app.listen(config.port, () => {
  initializeDB();
  console.log("Server started on pot", config.port);
});


module.exports = server
