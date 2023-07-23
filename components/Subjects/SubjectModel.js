const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SubsSchema = new Schema({
    id: { type: ObjectId },
    idMon:{type: String, require : true},
    tenMon: { type: String, require: true },
    phong:{type : String, require : true},
    ca :{type:String, require: true},
    thoigian:{type: Date, default: Date.now},
    giangvien: { type: String, require: true },
    buoi:{type:String, require:true},
    diadiem:{type:String,require:true},


});

module.exports = mongoose.models.subjects || mongoose.model('subjects', SubsSchema);