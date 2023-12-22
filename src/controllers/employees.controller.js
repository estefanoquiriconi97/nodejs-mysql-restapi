const pool = require("../db");

const employeesController = {
  getEmployee: (req, res) => {
    res.send("Obteniendo empleados");
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

  updateEmployee: (req, res) => {
    res.send("Actualizando empleado");
  },

  deleteEmployee: (req, res) => {
    res.send("Eliminando empleado");
  },
};

module.exports = employeesController;
