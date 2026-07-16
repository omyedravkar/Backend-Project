 //require('dotenv').config({path : './env'}) 
// This above code will run with es module problem a type is set to modules
import "./config/dns.js";

import dotenv from "dotenv"
dotenv.config({path: "./.env"});


import mongoose from "mongoose";

import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB  from "./db/index.js";

import { app } from "./app.js"; 

connectDB()
//it returns promises a async function 
.then(()=>{
   app.listen(process.env.PORT || 8000 , ()=>{
      console.log(`Server is running on the port ${process.env.PORT}`);
   })
})
.catch((err)=>{
 console.log("Failed to connect to monogoDB :",err );
})
 
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
   