const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const studentSchema = require('../schemas/students');
const validate = require('../middlewares/validateData');
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/students')

router.get('/', getAll);
router.post('/', validate(studentSchema),  createOne);
router.put('/:_id', validate(studentSchema), updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;