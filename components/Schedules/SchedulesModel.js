const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schedulesSchema = new Schema({
    id: { type: ObjectId },
    subject: { type: String, require: true },
    location: { type: String, require: true },
    shift: { type: String, require: true },
    date: { type: Date, default: Date.now }
    
});

module.exports = mongoose.models.schedules || mongoose.model('schedules', schedulesSchema);
