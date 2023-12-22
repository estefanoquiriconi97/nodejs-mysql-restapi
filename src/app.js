const express = require("express");
const indexRoutes = require("./routes/index.routes");
const employeesRoutes = require("./routes/employees.routes");

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

module.exports = app;
