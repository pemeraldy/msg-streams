const express = require('express')


const initializeApp = ()=> {
  const app = express()
  app.get('/', (req, res) => {
  
    return res.status(200).json({message: "Holla! 😄"})
  })
  
  return app
}


const app = initializeApp()

module.exports = app