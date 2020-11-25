const Joi = require('@hapi/joi');

const schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().required(),
});

module.exports = schema;