 //require('dotenv').config({path : './env'}) 
// This above code will run with es module problem a type is set to modules
import "./config/dns.js";

import dotenv from "dotenv"
dotenv.config({path: "./.env"});


import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";
import express from "express"
 const app = express()

import connectDB  from "./db/index.js";



connectDB()
 
/* 

can connect like this also :===>>>
 (async()=>{
  

    try 
    {
   await  mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)/

   app.on("error", (error)=>{
    console.log("Err:", error);
    throw error ; 
   } )
    
   app.listen (process.env.PORT , () => {
   console.log(`app is running on the port ${process.env.PORT}`);
    
   })

    }
    catch (error)
    {
 console.log("Error:" , error)
 throw err
    }

})()
    */
   