const express = require('express');
const app = express();
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
//app.use(logger);

app.use('/lists', require('./routes/todoList.routes'));
app.use('/items', require('./routes/todoItem.routes'));

app.use(errorHandler);

module.exports = app;