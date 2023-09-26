const app= require("express")()
//ALTERNATIVE
// const express =require("express")
// const app =express()

app.get("/",(req,res)=>{
    // res.send("<h1>Hello i m from hompage </h1>")
    res.json({
        message: "start i am from json home pages nodemon",
        status:"student"
})
})
app.get("/contact",(req,res)=>{
    res.json({
        message: "start i am from json contact pages nodemon",
        status:"contact student"
})
})
app.get("/about",(req,res)=>{
    res.json({
        message: "start i am from json about pages nodemon",
        status:"about student"
})
})
app.listen(4000,(req,res)=>{
    console.log("node js started at port 4000")
})