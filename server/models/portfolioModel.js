import db from '../config/db.js';

// Add new portfolio
export const add_portfolio = (data, callback) => {

    if (!data) {
        return callback(new Error('Data is undefined'));
    }

      const sql = `
        INSERT INTO portfolio
        (image, discription, title, github_link, live_link)
        VALUES (?, ?, ?, ?, ?)
    `;

     db.query(
        sql,
        [
            data.image,
            data.discription,
            data.title,
            data.github_link,
            data.live_link
        ],
        callback
    );
};
// Get all portfolios
export const get_all_retrive = (callback) => {
    const sql = `SELECT * FROM portfolio`;
    db.query(sql, callback);
};

// Get portfolio by ID
export const get_by_id = (id, callback) => {
    const sql = `SELECT * FROM portfolio WHERE id = ?`;
    db.query(sql, [id], callback);
};

// Update portfolio
export const updatPortfolio = (id, data, callback) => {
    if (!data) {
        return callback(new Error('Data is undefined'));
    }

    const sql = `
        UPDATE portfolio
        SET image = ?,
            discription = ?,
            title = ?,
            github_link = ?,
            live_link = ?
        WHERE id = ?
    `;

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
};
// Delete portfolio
export const deletPortfolio = (id, callback) => {
    const sql = `DELETE FROM portfolio WHERE id = ?`;
    db.query(sql, [id], callback);
};