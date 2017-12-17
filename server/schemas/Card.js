const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CardSchema = new Schema({
    text: String,
    id: String,
    from: String,
    to: String,
    isActive: {
      type: Boolean,
      default: true
    },
    date: String,
    audioSettings: String,
    headColors: String
});
module.exports = mongoose.model('Card', CardSchema);
