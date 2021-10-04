const express = require('express');
const app = express();

// Settings
// Si no se nos asigna un puerto por defecto por el sistema operativo, entonces tomaremos el puerto 3000
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/employees'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
