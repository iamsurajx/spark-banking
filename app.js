require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT
const connDB = require('./config/connectDB') 
const routes = require('./routes/routes')
const app = express()
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {
        origin:["https://deploy-mern-lwhq.vercel.app"],
        methods:["POST", "GET"],
        credentials: true
    }
))

app.use(express.static(path.resolve(__dirname,"client","build")))

app.get("/", (req, res)=>{
    res.json("Hello");
})

app.use('',routes)
const startServer = async () =>{
    try {
        await connDB()
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log('error..')
    }
}
startServer()