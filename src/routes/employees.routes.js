const express = require("express");

const {
  getEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employees.controller");

const router = express.Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

router.put("/employees", updateEmployee);

router.delete("/employees", deleteEmployee);

module.exports = router;
