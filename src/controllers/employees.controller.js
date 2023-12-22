const pool = require("../db");

const employeesController = {
  getEmployees: async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  },

  getEmployee: async (req, res) => {
    const employeeId = req.params.id;
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      employeeId,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    res.json(rows[0]);
  },

  createEmployee: async (req, res) => {
    console.log(req.body);
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name: name,
      salary: salary,
    });
  },

  deleteEmployee: async (req, res) => {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    res.sendStatus(204);
  },

  updateEmployee: async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  },
};

module.exports = employeesController;
