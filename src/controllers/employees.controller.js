const pool = require("../db");

const employeesController = {
  getEmployees: async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM employee");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong",
      });
    }
  },

  getEmployee: async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
        req.params.id,
      ]);

      if (rows.length <= 0) {
        return res.status(404).json({
          message: "Employee not found",
        });
      }
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong",
      });
    }
  },

  createEmployee: async (req, res) => {
    const { name, salary } = req.body;
    try {
      const [rows] = await pool.query(
        "INSERT INTO employee (name, salary) VALUES (?, ?)",
        [name, salary]
      );
      res.send({
        id: rows.insertId,
        name: name,
        salary: salary,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong",
      });
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
        req.params.id,
      ]);
      if (result.affectedRows <= 0) {
        return res.status(404).json({
          message: "Employee not found",
        });
      }
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong",
      });
    }
  },

  updateEmployee: async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;

    try {
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
    } catch (error) {
      return res.status(500).json({
        message: "Something goes wrong",
      });
    }
  },
};

module.exports = employeesController;
