import mongoose from "mongoose"

export const connectToDB = async()=>{

    try{

        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB connected")
    }
    catch(error){

        console.log(`Error connecting DB: ${error}`)
    }
}