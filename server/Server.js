import express from "express";
import cors from "cors";
import db from "./config/db.js";
import dotenv from "dotenv";
import authRouts from './routes/authRouts.js'
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.usse('/auth', authRouts);

app.get('/', (req,res)=>{
   res.send("responce backend reuuning");
});


const PORT = process.env.PORT || 3000;

app.listen (PORT,()=>{
  console.log(`the server also connectes to ${PORT}`);
})