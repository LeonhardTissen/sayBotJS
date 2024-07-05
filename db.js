const { Database } = require('sqlite3');

// Load the functions.db database
const db = new Database('functions.db');

// Create a table to store functions if it doesn't exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS functions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userid TEXT NOT NULL,
        trigger TEXT NOT NULL UNIQUE,
        response TEXT NOT NULL
    )`);
});

exports.db = db;
