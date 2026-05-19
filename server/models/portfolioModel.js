import db from '../config/db.js'

export const add_portfolio = (data,callback)=>{
    const sql = `INSERT INTO portfolio (image,discription,title,github_link,live_link) VALUES (?,?,?,?,?)`;
    
    db.query(sql,[data.image,data.discription,data.title,data.github_link,data.live_link],callback);
}
