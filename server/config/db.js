import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // THIS IS REQUIRED FOR RAILWAY PUBLIC NETWORK
  ssl: {
    rejectUnauthorized: false
  }
});

// Add this to log the exact error
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ DB Connection Error:", err.message); 
  } else {
    console.log("✅ Database connected successfully!");
    connection.release();
  }
});

const table = `CREATE TABLE IF NOT EXISTS users (
 id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
)`;
db.query(table,(req,res)=>{
    if(req){
        console.log('the table is created');
    }else{
        console.log('the table is not created', res.message);
    }
});
const portfolio_table = `CREATE TABLE IF NOT EXISTS portfolio (
 id INT AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(255),
    discription TEXT,
    title VARCHAR(255),
    github_link VARCHAR(255),
    live_link VARCHAR(255)
 )`;

 db.query(portfolio_table,(req,res)=>{
    if(req){
        console.log("the portfolio table also created");
    }else{
        console.log("the portfolio table do not created");
    }
 })
export default db;