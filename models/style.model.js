const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StyleSchema = new Schema({
    name: {type: String, required: true},
    abv: {type: String , required: true},
    ibu:{type: String , required: true},
    pair:{type: String , required: true},
    info: {type:String,required: true},
    group:{type:String, required: true}
});



module.exports = mongoose.model('Style', StyleSchema);