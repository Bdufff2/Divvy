const express = require('express');
const app = express();
const PORT = process.env.listen || 8080
app.get('/', function(req, res){
    console.log('Connected and listening on port ' + PORT)
    res.send('HELLOOOOO DUDES')
});

app.listen(PORT)