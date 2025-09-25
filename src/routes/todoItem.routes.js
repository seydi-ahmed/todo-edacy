// todoItem.routes.js

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/todoItem.controller');
const { getAllItems } = require('../controllers/todoItem.controller');

router.get('/', getAllItems);
router.post('/:listId', ctrl.addItem);
router.delete('/:id', ctrl.deleteItem);
router.patch('/:id/status', ctrl.updateItemStatus);

module.exports = router;