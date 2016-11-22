var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined'))

app.get("/", function(req, res){
    res.send("okay");
})

app.get("/userExemple", function (req,res) {

    var jsonData = "{\"photo\": \"https://sergiupopovici.files.wordpress.com/2012/10/serenade.jpg\", \"username\": \"testNode\"}";

    res.send(jsonData);
})

app.listen(8000);