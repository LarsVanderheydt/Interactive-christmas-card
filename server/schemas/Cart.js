const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CartSchema = new Schema({
    text: String,
    isActive: Boolean,
    id: String,
    from: String
});
module.exports = mongoose.model('Cart', CartSchema);
