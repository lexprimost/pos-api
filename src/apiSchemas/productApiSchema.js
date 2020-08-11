const Joi = require("joi")

exports.createProductApiSchema = Joi.object().keys({
    name: Joi.string().required()
})