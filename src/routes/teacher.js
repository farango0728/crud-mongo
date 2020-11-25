const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const teacherSchema = require('../schemas/teachers');
const validate = require('../middlewares/validateData');
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/teacher')

router.get('/', getAll);
router.post('/', validate(teacherSchema), createOne);
router.put('/:_id', validate(teacherSchema), updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;