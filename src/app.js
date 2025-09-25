// app.js

const express = require('express');
const app = express();
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/lists', require('./routes/todoList.routes'));
app.use('/items', require('./routes/todoItem.routes'));

// Route racine pour tester que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('API Todo Edacy en fonctionnement 🚀');
});

app.use(errorHandler);

module.exports = app;