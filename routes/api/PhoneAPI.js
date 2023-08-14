var express = require('express');
var router = express.Router();
const PhoneController = require('../../Phones/PhoneController')

//http://localhost:3000/Phones/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const Phones = await PhoneController.getAll();
        console.log("======>", Phones);
        if (Phones) {
            return res.status(200).json({ result: true, Phones: Phones, message: "Success" });
        }
        return res.status(400).json({ result: false, Phones: null, message: "Failed" });
    } catch (error) {
        console.log("500 >>>>> ", error);
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});


//http://localhost:3000/Phones/api/add-phones
router.post('/add-phones', async (req, res, next) => {
    try {
        const { id, name, price, quantity} = req.body;
        const Phones = await PhoneController.addVDV(id,name, price, quantity);
        if (Phones) {
            return res.status(200).json({ result: true, Phones: Phones, message: "Thêm VDV thành công" });
        }
        return res.status(400).json({ result: false, Phones: null, message: "Thêm VDV thất bại" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

module.exports = router;