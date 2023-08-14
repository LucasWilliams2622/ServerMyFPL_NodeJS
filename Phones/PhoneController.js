    const PhoneService = require('./PhoneService')

    const getAll = async () => {
        try {
            return await PhoneService.getAll();
        } catch (error) {
            return false;
        }
    }


    const addVDV = async (id, name, price, quantity) => {
        try {
            return await PhoneService.addVDV(id, name, price, quantity);
        } catch (error) {
            return false;
        }
    }

    module.exports = {
        getAll,addVDV
    }