import express from "express"
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
connectDB()
const app=express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.json({
        message:"Server is running"
    })
})
app.use("/api/auth", authRoutes);

app.listen(PORT,()=>{
    console.log("Server running")
})