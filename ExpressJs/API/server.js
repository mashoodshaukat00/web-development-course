var express = require('express'); // npm install express
var app =  express();

// to get informaion
app.get('/', function(req, res){
  //  res.write('hello and good morning');
  //  res.end();
    res.send('hello from Jupitor');
});

// to insert data
//app.post();

// to update data
//res.put();

// delete data
//app.delete();

//server run
app.listen(3000);
