var express = require('express');
var router = express.Router();
const scheduleExamController = require('../../components/ScheduleExam/ScheduleExamController')


// //http://localhost:3000/Schedules/api/get-all
// router.get('/get-all', async (req, res, next) => {
//     try {
//         const Schedules = await scheduleController.getAll();
//         if (Schedules) {
//            // console.log("Schedules +>>>>>> ", Schedules);
//             return res.status(200).json({ result: true, Schedules: Schedules, message: "Success" });
//         }
//         return res.status(400).json({ result: false, schedule: null, message: "Failed" });
//     } catch (error) {
//         console.log("500 >>>>> ", error);
//         return res.status(500).json({ result: false, message: 'Error System' })
//     }
// });

// //http://localhost:3000/Schedules/api/get-by-id
// router.get('/get-by-id', async (req, res, next) => {
//     try {
//         const { id } = req.query;
//         const Schedules = await scheduleController.getById(id);
//         if (Schedules) {
//             return res.status(200).json({ result: true, Schedules: Schedules, message: "Success" });
//         }
//         return res.status(400).json({ result: false, Schedules: null, message: "Failed" });
//     } catch (error) {
//         return res.status(500).json({ result: false, message: 'Error System' })
//     }
// });

// //http://localhost:3000/Schedules/api/add-schedule
// router.post('/add-schedule', async (req, res, next) => {
//     try {
//         const { subject, location, shift, date} = req.body;
//         const Schedules = await scheduleController.addSchedule(subject, location, shift, date);
//         if (Schedules) {
//             return res.status(200).json({ result: true, Schedules: Schedules, message: "Add Schedules Success" });
//         }
//         return res.status(400).json({ result: false, Schedules: null, message: "Add Schedules Failed" });
//     } catch (error) {
//         return res.status(500).json({ result: false, message: 'Error System' })
//     }
// });

// //http://localhost:3000/Schedules/api/update-by-id
// router.put('/update-by-id', async (req, res, next) => {
//     try {
//         const { id } = req.query;
//         const { subject, location, shift, date } = req.body;

//         console.log(id);
//         const Schedules = await scheduleController.updateById( id, subject, location, shift, date);
//         if (Schedules) {
//             return res.status(200).json({ result: true, message: "Success" });
//         }
//         return res.status(400).json({ result: false,message: "Failed" });
//     } catch (error) {
//         return res.status(500).json({ result: false, message: 'Error System' })
//     }
// });

// //http://localhost:3000/Schedules/api/delete-by-id
// router.delete('/delete-by-id', async (req, res, next) => {
//     try {
//         const { id } = req.query;
//         console.log(id);
//         const Schedules = await scheduleController.deleteById(id);
//         if (Schedules) {
//             return res.status(200).json({ result: true, message: "Success" });
//         }
//         return res.status(400).json({ result: false,message: "Failed" });
//     } catch (error) {
//         return res.status(500).json({ result: false, message: 'Error System' })
//     }
// });

//http://localhost:3000/scheduleExam/api/get-all
router.get('/get-all', async (req, res, next) => {
    try {
        const scheduleExam = await scheduleExamController.getAll();
        console.log("======>", scheduleExam);
        if (scheduleExam) {
            return res.status(200).json({ result: true, scheduleExam: scheduleExam, message: "Success" });
        }
        return res.status(400).json({ result: false, schedule: null, message: "Failed" });
    } catch (error) {
        console.log("500 >>>>> ", error);
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleExam/api/get-by-id
router.get('/get-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const scheduleExam = await scheduleExamController.getById(id);
        if (scheduleExam) {
            return res.status(200).json({ result: true, scheduleExam: scheduleExam, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleExam: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleExam/api/get-by-current-day
router.get('/get-by-current-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const scheduleExam = await scheduleExamController.getByCurrentDay(currentDay);
        if (scheduleExam) {
            return res.status(200).json({ result: true, scheduleExam: scheduleExam, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleExam: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleExam/api/get-by-7-day
router.get('/get-by-7-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const scheduleExam = await scheduleExamController.getBy7Day(currentDay);
        if (scheduleExam) {
            return res.status(200).json({ result: true, scheduleExam: scheduleExam, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleExam: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleExam/api/get-by-14-day
router.get('/get-by-14-day', async (req, res, next) => {
    try {
        const { currentDay } = req.query;
        const scheduleExam = await scheduleExamController.getBy14Day(currentDay);
        if (scheduleExam) {
            return res.status(200).json({ result: true, scheduleExam: scheduleExam, message: "Success" });
        }
        return res.status(400).json({ result: false, scheduleExam: null, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleExam/api/add-new
router.post('/add-schedule-exam', async (req, res, next) => {
    try {
        const { idSubject, location, shift, date } = req.body;
        const scheduleExam = await scheduleExamController.scheduleExam(idSubject,location,shift,date);
        if (scheduleExam) {
            return res.status(200).json({ result: true, scheduleExam: scheduleExam, message: "Add scheduleExam Success" });
        }
        return res.status(400).json({ result: false, scheduleExam: null, message: "Add scheduleExam Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleExam/api/update-by-id
router.put('/update-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        const { idSubject, location, shift, date } = req.body;

        console.log(id);
        const scheduleExam = await scheduleExamController.updateById(id,idSubject,location,shift,date);
        if (scheduleExam) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});

//http://localhost:3000/scheduleExam/api/delete-by-id
router.delete('/delete-by-id', async (req, res, next) => {
    try {
        const { id } = req.query;
        console.log(id);
        const scheduleExam = await scheduleExamController.deleteById(id);
        if (scheduleExam) {
            return res.status(200).json({ result: true, message: "Success" });
        }
        return res.status(400).json({ result: false, message: "Failed" });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error System' })
    }
});


module.exports = router;