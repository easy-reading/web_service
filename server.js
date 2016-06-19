var express=require("express");
var bodyParser=require("body-parser");
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var server=app.listen(process.env.PORT, process.env.IP,function(){
   console.log("listening on port %s:%s..",process.env.IP,server.address().port); 
});

var routes=require("./routes/routes.js")(app);