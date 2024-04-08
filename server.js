import express from 'express';
import colors from 'colors';
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from './config/db.js';
// Configure env
dotenv.config()

// database config
connectDB();

// Rest object
const app = express()

// middlewares
// app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get("/",(req,res)=>{
   res.send({
    message:"Welcome to green delight"
   })
})

// PORT
const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
      console.log(`Server Running on PORT : ${PORT}`.bgCyan.white);
})