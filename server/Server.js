import express from "express";
import cors from "cors";
import db from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.listen (PORT,()=>{
  console.log(`the server also connectes to ${PORT}`);
})