const express = require('express');
const bodyParser = require('body-parser');
const rutas = require('./modules/routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Usar las rutas definidas en routes.js
app.use('/api', rutas);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});