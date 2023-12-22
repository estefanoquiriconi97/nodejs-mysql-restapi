const express = require("express");

const indexRoutes = require('./routes/index.routes')
const employeesRoutes = require('./routes/employees.routes');

const app = express();

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
