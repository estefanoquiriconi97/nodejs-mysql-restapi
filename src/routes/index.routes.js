const express = require("express");
const pool = require('../db')

const router = express.Router();

router.get("/ping", async (req, res) => {
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
});

module.exports = router;
