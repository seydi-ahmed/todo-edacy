// todoItem.controller.js

const prisma = require('../prisma/client');

exports.addItem = async (req, res, next) => {
  try {
    const { listId } = req.params;
    const { libelle, status } = req.body;
    const newItem = await prisma.tODOItem.create({
      data: { libelle, status, listId: parseInt(listId) }
    });
    res.status(201).json({ success: true, data: newItem });
  } catch (err) { next(err); }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.tODOItem.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, message: "Item supprimé" });
  } catch (err) { next(err); }
};

exports.updateItemStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedItem = await prisma.tODOItem.update({
      where: { id: parseInt(id) },
      data: { status }
    });
    res.json({ success: true, data: updatedItem });
  } catch (err) { next(err); }
};

exports.getAllItems = async (req, res, next) => {
  try {
    const items = await prisma.tODOItem.findMany();
    res.json({ success: true, data: items });
  } catch (error) {
    next(error);
  }
};