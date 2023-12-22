const pool = require("../db");

const employeesController = {

  getEmployees: async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
  },

  getEmployee : async (req, res) => {
    const employeeId = req.params.id;
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [employeeId])
    
    if(rows.length <= 0){
      return res.status(404).json({
        message: 'Employee not found'
      })
    }
    res.json(rows[0])
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
