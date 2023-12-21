const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const { HTTP_PORT } = process.env;

app.get('/ping', (req, res) => {
    res.send('pong');
})

app.listen(HTTP_PORT, () => {
  console.log(`Serving running on port ${HTTP_PORT}`);
});

app.get("/employees", (req, res) => {
  res.send("Obteniendo empleados");
});

app.post("/employees", (req, res) => {
  res.send("Creando empleado");
});

app.put("/employees", (req, res) => {
  res.send("Actualizando empleado");
});

app.delete("/employees", (req, res) => {
  res.send("Eliminando empleado");
});
