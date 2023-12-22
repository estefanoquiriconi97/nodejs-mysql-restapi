const express = require("express");

const {
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employees.controller");

const router = express.Router();

router.get("/employees", getEmployee);

router.post("/employees", createEmployee);

router.put("/employees", updateEmployee);

router.delete("/employees", deleteEmployee);

module.exports = router;
