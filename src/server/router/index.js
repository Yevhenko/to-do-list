const express = require('express');

const note = require('./note');
const category = require('./category');
const { errorHandler } = require('../handlers');

const router = express.Router();

router.use(category);
router.use(note);
router.use(errorHandler);

module.exports = router;
