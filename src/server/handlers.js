const { QueryTypes } = require('sequelize');
const { Note, Category, sequelize } = require('../db/models');

function errorHandler(err, req, res) {
  if (!err) return res.json('Everything is OK!');

  return res.status(500).json({ error: err.message });
}

async function createCategory(body) {
  try {
    const category = await Category.create({
      name: body.name,
    });

    return category;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function createNote(body) {
  try {
    console.log(body);
    const note = await Note.create({
      name: body.name,
      description: body.description,
      actual: body.actual,
      categoryId: body.categoryId,
    });

    return note;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getOneCategory(params) {
  try {
    const category = await Category.findOne({
      where: { id: params.id },
    });

    return category;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getOneNote(params) {
  try {
    const note = await Note.findOne({
      where: { id: params.id },
    });

    return note;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllCategories() {
  try {
    const category = await Category.findAll();

    return category;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllNotes() {
  try {
    const note = await sequelize.query('SELECT * FROM `notes` ORDER BY `actual`', {
      type: QueryTypes.SELECT,
    });

    return note;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateCategory(body, params) {
  try {
    await Category.update(
      {
        name: body.name,
      },
      {
        where: {
          id: params.id,
        },
      },
    );

    return 'category updated';
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function updateNote(body, params) {
  try {
    await Note.update(
      {
        name: body.name,
        description: body.description,
        actual: body.actual,
        categoryId: body.categoryId,
      },
      {
        where: {
          id: params.id,
        },
      },
    );

    return 'note updated';
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteCategory(params) {
  try {
    await Category.destroy({
      where: {
        id: params.id,
      },
    });

    return 'category deleted';
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteNote(params) {
  try {
    await Note.destroy({
      where: {
        id: params.id,
      },
    });

    return 'note deleted';
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  errorHandler,
  createCategory,
  createNote,
  getAllCategories,
  getAllNotes,
  getOneCategory,
  getOneNote,
  updateCategory,
  updateNote,
  deleteCategory,
  deleteNote,
};
