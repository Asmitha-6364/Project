const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb://localhost:27017/logindata");

connect.then(()=>{
    console.log("database connected");
})
.catch(()=>{
    console.log("error");
});

const EmploySchema=new mongoose.Schema({
    employName:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true,
    },
    years:{
        type:String,
        required:true,
    }
});

const collection =new mongoose.model("employee",EmploySchema);

module.exports=collection;