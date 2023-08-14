const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PhoneSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, require: true },//dia diem thi
    price: { type: Number, require: true },//dia diem thi
    quantity: { type: Number, require: true },//dia diem thi

});

module.exports = mongoose.models.Phone || mongoose.model('Phone', PhoneSchema);
