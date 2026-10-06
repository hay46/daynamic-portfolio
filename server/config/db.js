import mysql from "mysql2/promise";

const isRemoteDatabase =
  process.env.MYSQL_HOST !== "localhost" &&
  process.env.MYSQL_HOST !== "127.0.0.1";

// Build the connection options object
const connectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306,
};

// ONLY add SSL if we are connecting to a remote database like Railway
if (isRemoteDatabase) {
  connectionOptions.ssl = { rejectUnauthorized: false };
}

// Create the pool with the final options
const db = mysql.createPool(connectionOptions);

export const initializeDatabase = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Users table is ready.");

    await db.query(`
      CREATE TABLE IF NOT EXISTS portfolio (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log("✅ Portfolio table is ready.");
  } catch (err) {
    console.error("❌ Error creating tables:", err.message);
    throw err;
  }
};

export default db;
