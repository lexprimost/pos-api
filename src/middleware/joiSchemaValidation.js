import constants from "../constants"


const validateObjectSchema = (data, schema) => {
    const result = schema.validate(data, { convert: false });
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            }
        });
        console.log('joi validation=== ', errorDetails);
        return errorDetails;
    }
    return null;
}

exports.validateBody = (schema) => {
    return (req, res, next) => {
        const error = validateObjectSchema(req.body, schema); //null or error
        let response = { ...constants.defaultServerResponse };
        //if error exist , its mean there is error otherwise error is null
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}

exports.validateQueryParams = (schema) => {
    return (req, res, next) => {
        const error = validateObjectSchema(req.query, schema); //null or error
        let response = { ...constants.defaultServerResponse };
        //if error exist , its mean there is error otherwise error is null
        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }
        return next();
    }
}


