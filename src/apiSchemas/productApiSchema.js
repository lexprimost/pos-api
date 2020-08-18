import Joi from "joi"

exports.createProductApiSchema = Joi.object().keys({
    name: Joi.string().required()
});

exports.getAllProductsApiSchema = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string()
});

exports.getProductByIdApiSchema = Joi.object().keys({
    id: Joi.string()
   
});