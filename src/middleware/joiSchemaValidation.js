const Joi = require("joi");
const productApiSchema = require('../apiSchemas/productApiSchema');
const constants = require('../constants');


const validateObjectShema = (data) => {
    const result = productApiSchema.createProductApiSchema.validate(data, { convert:false });
    if (result.error){
        const errorDetails = result.error.details.map(value => {
            return {
                error:value.message,
                path:value.path
            }
        });
         console.log('joi validation=== ', errorDetails);
        return errorDetails;
    }
    return null;
   
    
}

exports.validateBody = () => {
    return (req, res, next) => {
       const error = validateObjectShema(req.body);
       let response = {...constants.defaultServerResponse};
       //if error exist , its mean there is erro otherwise error is null
       if(error){
        response.body = error;
        response.message = constants.requestValidationMessage.BAD_REQUEST;
        return res.status(response.status).send(response);
       }
       return next();
    }
}

