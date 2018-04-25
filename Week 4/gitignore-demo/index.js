const express = require('express'),
      app = express(),
      config = require('./config');

app.listen(8080, ()=>{console.log("Server running on port 8080\nPress CTRL + C to stop.")})