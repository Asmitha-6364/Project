const express=require('express')
const MongoClient=require('mongodb').MongoClient

const app=express()

app.use(express.json())
var database
const  query={}
app.get('/',(req,resp)=>{
    resp.send('Welcome to mongodb API')
})
app.get('/api/users',(req,resp)=>{
    database.collection('users').find({}).toArray((err,result) =>{
        if(err) throw err
        resp.send(result)
     })
})
app.listen(8080,()=>{
    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true} ,(error,result)=>{
        if(error) throw error
         database=result.db('logindata')
         console.log("connection successful!")
    })
})