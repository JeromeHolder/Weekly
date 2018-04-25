const express = require('express'), app = express();

app.get('/users/:username', (req, res) => {res.send(req.params.username);});

app.listen(8080, () => {console.log("Server running on port 8080\nCTRL + C to stop.")})