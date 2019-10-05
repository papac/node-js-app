const Joi = require('@hapi/joi');

const Schema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  description: Joi.string().max(500).required()
});

module.exports = (req, res, next) => {
  const {
    error
  } = Schema.validate(req.body);

  if (__helper.isUndefined(error)) {
    return next();
  }

  throw new Error('Error of user data validation: ' + error.message);
}
