const {createPool} = require("mysql2/promise");
const dotenv = require('dotenv');
dotenv.config();

const { 
    DB_HOST,
    DB_USER,
    DB_PORT,
    DB_DATABASE,
    DB_PASSWORD
 } = process.env;

module.exports = createPool({
    host: DB_HOST,
    user: DB_USER,
    port : DB_PORT,
    database : DB_DATABASE,
    password: DB_PASSWORD
});