// require('dotenv').config({path : './env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()






// or instead write this code in another folder


/*
import express from 'express'

const app = express()
const port = process.env.PORT
;(async ()=>{
    try {
       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error" , (error)=>{
        console.log("Err:" , error);
        throw error
       })

       app.listen(port , ()=>{
        console.log(`App is listning on port ${port}`);
        
       })
    } catch (error) {
        console.log("Error : ", error);
        throw error     
    }

})()
*/