var express = require('express');
var router = express.Router();
const scheController = require('../../components/SchedulesSubject/SchedulesSubjectController')

//http://localhost:3000/SchedulesSubject/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const SchedulesSubject = await scheController.getAll();
        if (SchedulesSubject) {
           // console.log("SchedulesSubject +>>>>>> ", SchedulesSubject);
            return res.status(200).json({ result: true, SchedulesSubject: SchedulesSubject, message: "Success" });
        }
        return res.status(400).json({ result: false, schedule: null, message: "Failed" });
    } catch (error) {
        console.log("500 >>>>> ", error);
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/SchedulesSubject/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const SchedulesSubject = await scheController.getById(id);
        if (SchedulesSubject) {
            return res.status(200).json({ result: true, SchedulesSubject: SchedulesSubject, message: "Success" });
        }
        return res.status(400).json({ result: false, SchedulesSubject: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/SchedulesSubject/api/get-by-current-day
router.get('/get-by-current-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const SchedulesSubject = await scheController.getById(id);
        if (SchedulesSubject) {
            return res.status(200).json({ result: true, SchedulesSubject: SchedulesSubject, message: "Success" });
        }
        return res.status(400).json({ result: false, SchedulesSubject: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});
//http://localhost:3000/SchedulesSubject/api/add-schedule
router.post('/add-schedule', async (req, res, next) => {
    try {
        const { idMon, Ca, DiaDiem, NgayHoc} = req.body;
        const SchedulesSubject = await scheController.addSchedule(idMon, Ca, DiaDiem, NgayHoc);
        if (SchedulesSubject) {
            return res.status(200).json({ result: true, SchedulesSubject: SchedulesSubject, message: "Add SchedulesSubject Success" });
        }
        return res.status(400).json({ result: false, SchedulesSubject: null, message: "Add SchedulesSubject Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/SchedulesSubject/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { idMon, Ca, DiaDiem, NgayHoc } = req.body;

        console.log(id);
        const SchedulesSubject = await scheController.updateById( id, idMon, Ca, DiaDiem, NgayHoc);
        if (SchedulesSubject) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/SchedulesSubject/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const SchedulesSubject = await scheController.deleteById(id);
        if (SchedulesSubject) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

module.exports = router;