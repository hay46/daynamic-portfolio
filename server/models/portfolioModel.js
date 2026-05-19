import db from '../config/db.js'

export const add_portfolio = (data,callback)=>{
    const sql = `INSERT INTO portfolio (image,discription,title,github_link,live_link) VALUES (?,?,?,?,?)`;
    
    db.query(sql,[data.image,data.discription,data.title,data.github_link,data.live_link],callback);
};

export const get_all_retrive = (callback)=>{
    const sql = `SELECT * FROM portfolio`;
    db.query(sql,callback);
};

export const get_by_id = (id,callback)=>{
    const sql = `SELECT * FROM portfolio WHERE id =?`;
    db.query(sql,[id],callback);

};
 export const updatPortfolio = (id,data,callback)=>{
    const sql = `UPDATE * FROM portfolio AS image =?,discription =?,title =?,github_link =?,live_link =?, WHERE id =?`;
    db.query(
        sql,
        [
        data.image,
        data.discription,
        data.title,
        data.github_link,
        data.live_link,
        id
        ],
        callback
    );
 }

export const deletPortfolio = (id, callback)=>{
    const sql = `DELET FROM portfolio WHERE id = ?`;
    db.query(sql,[id],callback);
}