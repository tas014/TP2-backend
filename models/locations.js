var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pruebaSchema = new Schema({
    id:{type: String},
    lat:{type: String},
    long:{type: String},
    quality:{type: String},
    convenience:{type: String}
});

module.exports = mongoose.model('Prueba', pruebaSchema,'astronomy_activator')