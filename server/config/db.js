import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db =mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

db.connect((err)=>{
    if(err){
    console.log('the database is not connected', err.message);
    }else{
        console.log('the database also connected');
    }
});
const table = `CREATE TABLE IF NOT EXISTS users (
 id INT AUTO INCREMENT PRIMARY KEY,
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
})
export default db;