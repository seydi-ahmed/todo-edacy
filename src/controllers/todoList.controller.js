// todoList.controller.js

const prisma = require('../prisma/client');

exports.getAllLists = async (req, res, next) => {
  try {
    const lists = await prisma.tODOList.findMany({ include: { items: true } });
    res.json({ success: true, data: lists });
  } catch (err) { next(err); }
};

exports.getListByName = async (req, res, next) => {
  try {
    const { titre } = req.params;
    const list = await prisma.tODOList.findFirst({ where: { titre }, include: { items: true } });
    if (!list) return res.status(404).json({ success: false, message: "Liste introuvable" });
    res.json({ success: true, data: list });
  } catch (err) { next(err); }
};

exports.createList = async (req, res, next) => {
  try {
    const { titre, status } = req.body;
    const newList = await prisma.tODOList.create({ data: { titre, status } });
    res.status(201).json({ success: true, data: newList });
  } catch (err) { next(err); }
};

exports.updateList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedList = await prisma.tODOList.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.json({ success: true, data: updatedList });
  } catch (err) { next(err); }
};

exports.deleteList = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.tODOList.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, message: "Liste supprimée" });
  } catch (err) { next(err); }
};

exports.getRecentLists = async (req, res, next) => {
  try {
    const lists = await prisma.tODOList.findMany({ orderBy: { updatedAt: 'desc' }, take: 5 });
    res.json({ success: true, data: lists });
  } catch (err) { next(err); }
};