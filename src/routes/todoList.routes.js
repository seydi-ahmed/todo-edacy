// todoList.routes.js

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/todoList.controller');

router.get('/', ctrl.getAllLists);
router.get('/recent', ctrl.getRecentLists);
router.get('/:titre', ctrl.getListByName);
router.post('/', ctrl.createList);
router.put('/:id', ctrl.updateList);
router.patch('/:id', ctrl.updateList);
router.delete('/:id', ctrl.deleteList);

module.exports = router;