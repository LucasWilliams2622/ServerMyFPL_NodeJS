var express = require('express');
var router = express.Router();
const scheduleController = require('../../components/Schedules/SchedulesController')

//http://localhost:3000/Schedules/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        console.log('=======<><><><><><>', );
        const Schedules = await scheduleController.getAll();
        if (Schedules) {
           // console.log("Schedules +>>>>>> ", Schedules);
            return res.status(200).json({ result: true, Schedules: Schedules, message: "Success" });
        }
        return res.status(400).json({ result: false, schedule: null, message: "Failed" });
    } catch (error) {
        console.log("500 >>>>> ", error);
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/Schedules/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const Schedules = await scheduleController.getById(id);
        if (Schedules) {
            return res.status(200).json({ result: true, Schedules: Schedules, message: "Success" });
        }
        return res.status(400).json({ result: false, Schedules: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/Schedules/api/get-by-current-day?start_date=26/07/2023&end_date=30/07/2023
router.get('/get-by-current-day', async (req, res, next) => {
    try {
        const { start_date, end_date } = req.query;
        const Schedules = await scheController.getScheduleByCurrentDay(start_date, end_date);
        if (Schedules) {
            return res.status(200).json({ result: true, Schedules: Schedules, message: "Success" });
        }
        return res.status(400).json({ result: false, Schedules: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/Schedules/api/add-schedule
router.post('/add-schedule', async (req, res, next) => {
    try {
        const { idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay} = req.body;
        const Schedules = await scheduleController.addSchedule(idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay);
        if (Schedules) {
            return res.status(200).json({ result: true, Schedules: Schedules, message: "Add Schedules Success" });
        }
        return res.status(400).json({ result: false, Schedules: null, message: "Add Schedules Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/Schedules/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay } = req.body;

        console.log(id);
        const Schedules = await scheduleController.updateById( idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay);
        if (Schedules) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/Schedules/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const Schedules = await scheduleController.deleteById(id);
        if (Schedules) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false,message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

module.exports = router;