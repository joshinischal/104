const app= require("express")()
//ALTERNATIVE
// const express =require("express")
// const app =express()

app.get("/",(req,res)=>{
    // res.send("<h1>Hello i m from hompage </h1>")
    res.json({
        message: "i am from json home pages"
})
})
app.get("/contact",(req,res)=>{
    res.send("Hello i m from contactpage")
})
app.get("/about",(req,res)=>{
    res.send("Hello i m from aboutpage")
})
app.listen(3000,(req,res)=>{
    console.log("node js started at port 3000")
})