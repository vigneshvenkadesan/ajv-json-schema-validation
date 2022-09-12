const ajvInstance = require('./ajv-instance');

const schema = {
  type: 'object',
  properties: {
    name: { type: 'object',  properties: {
      firstName: { type: 'string', minLength: 3 },
      lastName: { type: 'string', minLength: 3 }
    }},
    dependents: {type: 'object',  properties: {
      dep1: { type: 'object',  properties: {
        firstName: { type: 'string', minLength: 3 },
        lastName: { type: 'string', minLength: 3 }
      }},
      dep2: { type: 'object',  properties: {
        firstName: { type: 'string', minLength: 3 },
        lastName: { type: 'string', minLength: 3 }
      }}
      }},
    email: { type: 'string', format: 'email' },
    dob: { type: 'string'},
    countryCode: {
      type: 'string',
      enum: ['US', 'CA'],
    },
  },
  required: ['name', 'email', 'dob', 'countryCode','dep1'],
};

module.exports = ajvInstance.compile(schema);

// https://json-schema.org/understanding-json-schema/reference/string.html#dates-and-times
// https://github.com/ajv-validator/ajv/issues/242
// https://github.com/ajv-validator/ajv/issues/65
// https://ajv.js.org/options.html

// https://ajv.js.org/guide/formats.html
