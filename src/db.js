const {createPool} = require("mysql2/promise");

module.exports = createPool({
    host: 'localhost',
    user: 'root',
    password: 'p3*e-x3gs.&DpN4',
    port : 3306,
    database : 'companydb'
});