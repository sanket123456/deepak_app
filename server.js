var express=require('express');
var app=express();
fs=require('fs');
var bodyparser=require('body-parser');
mymodule=require('./module');
app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("form.html",{root:__dirname});
    console.log("we are in the form");
});
app.post("/calculate",function(req,resp){
    data=mymodule.addition(req.body.num1,req.body.num2);
    resp.send("addition"+data);
});
app.listen(1126,function(){
    console.log("server is running on port number 1126");
})