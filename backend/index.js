// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import gmail from "./routes/gmail.js";

// const app = express();
// dotenv.config();

// app.use(cors({
//   origin: process.env.BASE_URL, 
//   credentials: true
// }));

// app.use(express.json());

// app.use("/backend/auth", gmail);

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
// port=process.env.PORT || 3000;

// app.listen(port, async () => {
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


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import gmail from "./routes/gmail.js";

const app = express();
dotenv.config();

// Configure CORS
app.use(cors({
  origin: 'https://kushagra-agrawal-portfolio.netlify.app', 
  credentials: true
}));

app.use(express.json());
app.use("/backend/auth", gmail);

// Error handling middleware
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

// Start server
const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
  } catch (err) {
    console.error(err);
    process.exit(1); 
  }
  console.log(`Server running on port ${port}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
