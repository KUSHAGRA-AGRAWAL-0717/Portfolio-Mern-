import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import route from "./routes/auth.js"
const app=express()
dotenv.config();


//error handler or error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });





app.listen(4400,async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL);
       console.log("mongodb connected")
    }catch(err){
        throw err
    }
    console.log("connected to the backend")
})

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})
app.use(express.json())

//middlewares
app.use("/backend/auth", route);