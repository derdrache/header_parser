var express = require("express");
var app = express();



app.get("/", function(req, res){
    var ip = req.headers["x-forwarded-for"];
    var sprache = req.acceptsLanguages();
    var software = req.headers["user-agent"];
    
   res.json({
       
    ip: ip,
    language: sprache,
    software: software
       
   });
   
});



app.listen((process.env.PORT||8080|| 5000), function(){
    console.log("roger, we are online...");
})