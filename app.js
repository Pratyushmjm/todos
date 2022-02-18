const express=require('express');
let items=[];
const bodyParser=require('body-parser');
const path=require('path');
const app=express();


app.set('view engine','ejs');//using ejs file in views folder

app.use(bodyParser.urlencoded({extended:true}));//using bodyparser
app.use(express.static("public"));

app.get("/",function(req,res){
    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day=today.toLocaleDateString("en-US",options);
    res.render("index",{changeofDay:day, newListItem:items});//index is an ejs file whereas changeofDay is declared in ejs file
// newitem is a variable in ejs file and item is decalred on the server
});

app.post("/",function(request,response){
var item=request.body.newItem;
// console.log(item);
items.push(item);
response.redirect("/"); 

});


app.listen(3000,function(){
    console.log("Server is started at the port 3000");
});