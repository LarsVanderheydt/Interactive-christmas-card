const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CartSchema = new Schema({
    text: String,
    id: String,
    from: String,
    to: String,
    isActive: {
      type: Boolean,
      default: true
    },
    date: String,
    audioSettings: String
});
module.exports = mongoose.model('Cart', CartSchema);
