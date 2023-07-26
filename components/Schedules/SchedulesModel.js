const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schedulesSchema = new Schema({
    id: { type: ObjectId },
    idMon: { type: ObjectId, ref:"subjects" },
    TenMon: { type: String, require: true },
    Phong: { type: String, require: true },
    Buoi: { type: String, require: true },
    Ca: { type: Number, require: true },
    DiaDiem: {type: String, require: true},
    ThoiGian: { type: Date, require: true},
    Ngay: { type: Date, require: true},
    
});

module.exports = mongoose.models.schedules || mongoose.model('schedules', schedulesSchema);
