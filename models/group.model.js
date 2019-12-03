import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let GroupSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
});

const GroupModel = mongoose.model('Group', GroupSchema);
export default GroupModel