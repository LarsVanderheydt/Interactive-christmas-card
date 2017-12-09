const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CartSchema = new Schema({
    text: String,
    isActive: Boolean
});
module.exports = mongoose.model('Cart', CartSchema);
