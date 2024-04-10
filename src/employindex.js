const express=require('express');
 const path=require("path");
 const bcrypt=require("bcrypt");
const collection=require("./employee");

 const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

 app.set('view engine','ejs');

app.post("/myaccount",async(req,res)=>{
    const data={
        employName:req.body.username,
        contact:req.body.contact,
        email:req.body.email
    } 

    const existingUser=await collection.findOne({name: data.name});
    if(existingUser){
        res.send("User already exists.Please choose a different username.");
    }
    else{
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    }
});

 const port=5000;
 app.listen(port,()=>{
    console.log(`server running at port: ${port}`);
 })