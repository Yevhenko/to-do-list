/* eslint-disable object-curly-newline */
const express = require('express');

const { createNote, getAllNotes, getOneNote, updateNote, deleteNote } = require('../handlers');

const note = express.Router();

note.post('/note', async (req, res, next) => {
  try {
    const { body } = req;

    if (!body) res.status(404).send('Not found!');
    const response = await createNote(body);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

note.get('/note/:id', async (req, res, next) => {
  try {
    const { params } = req;
    const noteId = Number(params.id);

    if (!noteId) res.status(404).send('Not found!');
    const response = await getOneNote(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

note.get('/note', async (req, res, next) => {
  try {
    const response = await getAllNotes();

    res.json(response);
  } catch (error) {
    next(error);
  }
});

note.put('/note:id', async (req, res, next) => {
  try {
    const { body, params } = req;
    const noteId = Number(params.id);

    if (!noteId || !body) res.status(404).send('Not found');
    const response = await updateNote(body, params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

note.delete('/note:id', async (req, res, next) => {
  try {
    const { params } = req;
    const noteId = Number(params.id);

    if (!noteId) res.status(404).send('Not found');

    const response = await deleteNote(params);

    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = note;
