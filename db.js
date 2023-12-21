const {createPool} = require('mysql2');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'p3*e-x3gs.&DpN4',
    port : 3306,
    database : 'companydb'
});

module.exports = pool;