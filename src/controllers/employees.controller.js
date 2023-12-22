const employeesController = {
  getEmployee: (req, res) => {
    res.send("Obteniendo empleados");
  },

  createEmployee: (req, res) => {
    res.send("Creando empleado");
  },

  updateEmployee: (req, res) => {
    res.send("Actualizando empleado");
  },

  deleteEmployee: (req, res) => {
    res.send("Eliminando empleado");
  },
};

module.exports = employeesController;
