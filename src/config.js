const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb://localhost:27017/logindata");

connect.then(()=>{
    console.log("database connected");
})
.catch(()=>{
    console.log("error");
});

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const collection =new mongoose.model("users",LoginSchema);

module.exports=collection;

