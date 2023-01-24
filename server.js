const app = require('./src/index')
require('dotenv').config()

const config = {
  port: process.env.PORT || 3000,
}

const server = app.listen(config.port, () => {
  console.log("Server started on port!!!", config.port);
});

module.exports = server
