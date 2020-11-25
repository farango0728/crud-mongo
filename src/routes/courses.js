const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const courseSchema = require('../schemas/courses');
const validate = require('../middlewares/validateData');
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/courses')


router.get('/', getAll);
router.post('/', validate(courseSchema), createOne);
router.put('/:_id', validate(courseSchema), updateOne);
router.delete('/:_id', deleteOne);

module.exports = router;