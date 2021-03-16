const express = require('express');

const {
  createCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require('../handlers');

const category = express.Router();

category.post('/category', async (req, res, next) => {
  try {
    const { body } = req;

    if (!body) res.status(404).send('Not found!');
    const response = await createCategory(body);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

category.get('/category:id', async (req, res, next) => {
  try {
    const { params } = req;
    const noteId = Number(params.id);

    if (!noteId) res.status(404).send('Not found!');
    const response = await getOneCategory(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

category.get('/category', async (req, res, next) => {
  try {
    const response = await getAllCategories();

    res.json(response);
  } catch (error) {
    next(error);
  }
});

category.put('/category:id', async (req, res, next) => {
  try {
    const { body, params } = req;
    const noteId = Number(params.id);

    if (!noteId || !body) res.status(404).send('Not found');
    const response = await updateCategory(body, params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

category.delete('/category:id', async (req, res, next) => {
  try {
    const { params } = req;
    const noteId = Number(params.id);

    if (!noteId) res.status(404).send('Not found');

    const response = await deleteCategory(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = category;
