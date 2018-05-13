var mongoose = require('mongoose');

var foodSchema = mongoose.Schema({
    name: { type:String },
    description: { type:String } 
});

module.exports = mongoose.model('food', foodSchema);