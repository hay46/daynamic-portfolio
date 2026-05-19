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
// const table = `CREATE TABLE IF NOT EXISTS users (
//  id INT AUTO_INCREMENT PRIMARY KEY,
// name VARCHAR(255) NOT NULL,
// email VARCHAR(255) NOT NULL UNIQUE,
// password VARCHAR(255) NOT NULL
// )`;
// db.query(table,(req,res)=>{
//     if(req){
//         console.log('the table is created');
//     }else{
//         console.log('the table is not created', res.message);
//     }
// });
// const portfolio_table = `CREATE TABLE IS NOT EXIST portfolio (
//  id INT AUTO_INCREMENT PRIMARY KEY,
//     image VARCHAR(255),
//     discription TEXT,
//     title VARCHAR(255),
//     github_link VARCHAR(255),
//     live_link VARCHAR(255)
//  )`;

//  db.query(portfolio_table,(req,res)=>{
//     if(req){
//         console.log("the portfolio table also created");
//     }else{
//         console.log("the portfolio table do not created");
//     }
//  })
export default db;