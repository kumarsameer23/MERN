const {model, Schema} = require('../connection');

const mySchema = new Schema({
    name: String,
    DateOfBirth: { type : Date, required: true },
    phone: { type: String, required: true },
    address: String,
});

module.exports = model('userDetails', mySchema);