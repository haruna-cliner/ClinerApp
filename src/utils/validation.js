export const validate = (schema, values) => {
    return Joi.validate(schema, values);
};
