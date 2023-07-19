const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SchedulesSubjectSchema = new Schema({
    id: { type: ObjectId },
    idMon: { type: String, require: true },
    Ca: { type: String, require: true },
    DiaDiem: {type: String, require: true},
    NgayHoc: { type: Date, default: Date.now }
    
});

module.exports = mongoose.models.SchedulesSubject|| mongoose.model('SchedulesSubject', SchedulesSubjectSchema);
