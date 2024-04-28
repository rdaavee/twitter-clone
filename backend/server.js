import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //to parse req.body in controller
app.use(express.urlencoded({ extended: true })); //to parse from data
app.use(cookieParser()); // to be able to get the cookies

app.use("/api/auth", authRoutes); //middleware
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectMongoDB();
});
