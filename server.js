const app = require('./src/index')
require('dotenv')


console.log(process.env.PORT)


const config = {
  port: process.env.PORT || 3000,
}

const server = app.listen(config.port, () => {
  console.log("Server started on port!!!", config.port);
});

module.exports = server
