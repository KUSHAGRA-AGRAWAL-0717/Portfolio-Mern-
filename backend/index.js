// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import gmail from "./routes/gmail.js";
// const app = express();
// dotenv.config();

// app.use((err, req, res, next) => {
//   const errorStatus = err.status || 500;
//   const errorMessage = err.message || "Something went wrong!";
//   return res.status(errorStatus).json({
//     success: false,
//     status: errorStatus,
//     message: errorMessage,
//     stack: err.stack,
//   });
// });

// app.listen(4400, async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("mongodb connected");
//   } catch (err) {
//     throw err;
//   }
//   console.log("connected to the backend");
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("mongodb disconnected");
// });
// app.use(express.json());

// app.use("/backend/auth", gmail);



import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import gmail from "./routes/gmail.js";

const app = express();
dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));

app.use(express.json());

app.use("/backend/auth", gmail);

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

app.listen(4400, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
  } catch (err) {
    throw err;
  }
  console.log("connected to the backend");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
