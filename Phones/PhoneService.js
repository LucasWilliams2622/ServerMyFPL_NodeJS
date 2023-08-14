const PhoneModel = require('./PhoneModel')
const moment = require('moment')

const getAll = async () => {
    try {
        return PhoneModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}


const addVDV = async ( id,name, price, quantity) => {
    try {
        const Phones = { id,name, price, quantity}
        const p = new PhoneModel(Phones);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new VDV error: ', error);
        return false;
    }
}

module.exports = {
    getAll,addVDV
}