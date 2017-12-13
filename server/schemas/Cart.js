const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CartSchema = new Schema({
    text: String,
    isActive: Boolean,
    id: String,
    from: String,
    sound: String,
    date: String
});
module.exports = mongoose.model('Cart', CartSchema);
