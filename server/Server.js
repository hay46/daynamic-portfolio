const express =require('express');
const cors = require('cors');
const db = require ('./config/db');
const dotenv =require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;


app.listen (PORT,()=>{
  console.log(`the server also connectes to ${PORT}`);
})