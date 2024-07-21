// require('dotenv').config({path : './env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.on("error" , (error)=>{
        console.log("Err:" , error);
        throw error
       })
       
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(` Server is running at port ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ",err);
})






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