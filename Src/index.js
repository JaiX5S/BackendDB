// require('dotenv').config({path: './env'})

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";


import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})


connectDB()

  .then(() => { 
    append.listen(process.env.PORT || 8000, () => {
      console.log('Server is running on port 8000 : ${process.env.PORT}');
      
  })
})
  .catch((err) => {
    console.log("MONGODB connection is failed !!!", err);
  })


//const app = express()

// function connectDB() { }
// () () this is called if es functions ,that function execute instantly
// ( ()=>{} ) = it is a arrow function .

/*
(async () => {
  try {
    await mongoose.connect('${Process.env.MONGODB_URI}/${DB_NAME}')
    app.on("Error", (error) => {
      console.log("Error", error);
      throw err
    })
    app.listen(process.env.PORT,() => {
      console.log('App is listing on port ${process.env.PORT}');
    })


  } catch (error) {
    console.error("Error", error)
    throw err
  }
}) ()

*/


