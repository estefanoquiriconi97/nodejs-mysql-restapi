const pool = require('../db')

const indexController = {
  ping: async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
  },
};

module.exports = indexController;
