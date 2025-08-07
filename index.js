
require(`dotenv`).config()
const express =require(`express`);
const app= express()
const port =3000

app.get(`/` , (req , res) => {
    res.send(`hello ali i am here`)
})

app.get(`/login`, (req,res) => {
    res.send ("please login me ")
})

app.get(`/signup`,(req,res) => {
    res.send("please signup me")
})
app.get(`/password`,(req,res)=>{
    res.send("chai or code")
})

app.listen(process.env.PORT ,() => {
    console.log(`App listen on port ${port}`);
    
})