const express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send({'id':'111'});
});

app.listen(2000);

console.log('server running at localhost:2000');