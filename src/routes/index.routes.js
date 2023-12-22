const express = require("express");
const {ping} = require('../controllers/index.controller');

const router = express.Router();

router.get("/ping", ping);

module.exports = router;
