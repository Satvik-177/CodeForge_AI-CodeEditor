import express from "express"
import dotenv from "dotenv"
import { connectToDB } from "./config/db.js"

dotenv.config()

const port = process.env.PORT || 8001
const app = express()

app.get("/",(req,res)=>{
    return res.json({message:"Hello from auth service"})
})

app.listen(port,()=>{

    connectToDB()
    console.log(`Auth server started on port: ${port}`)
})