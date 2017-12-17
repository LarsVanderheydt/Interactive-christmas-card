const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var SoundSchema = new Schema({
    isActive: Boolean,
    id: String,
    sound: String,
    date: String
});
module.exports = mongoose.model('Sound', SoundSchema);
