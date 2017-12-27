var express = require('express')
var app = express()

// Build Your Route Here
app.get('/', function( req, resp){
<<<<<<< HEAD
  resp.send('Hello, World!')
=======
  resp.send('Hello World!')
>>>>>>> cf60ac719b5075431011ce9a7a432244963e5117

})

module.exports = app
