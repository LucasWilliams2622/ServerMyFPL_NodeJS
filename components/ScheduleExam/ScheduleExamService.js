const ScheduleExamModel = require('./ScheduleExamModel')

const addSchedule = async (subject, location, shift, date) => {
    try {
        const schedules = {
            subject, location, shift,date
        }
        const p = new ScheduleExamModel(schedules);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new schedules error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return ScheduleExamModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBysubject = async (subject) => {
    try {

        const schedules =await ScheduleExamModel.find({ subject: { $regex: subject, $options: 'i' }, });
        if (schedules.length === 0) {
            return false
        }
        return schedules
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getAll = async () => {
    try {
        return ScheduleExamModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return ScheduleExamModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, subject, location, shift, date) => {
    try {
        const schedules = await ScheduleExamModel.findById(id)
        if (schedules) {
            schedules.subject = subject ? subject : schedules.subject;
            schedules.location = location ? location : schedules.location;
            schedules.shift = shift ? shift : schedules.shift;
            schedules.date = date ? date : schedules.date;
            await schedules.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getBy7Day = async (currentDay) => {
    try {
        let yearOfCurrentDay = currentDay.slice(0, 4);
        let monthOfCurrentDay = currentDay.slice(6, 7);
        let dayOfCurrentDay = currentDay.slice(8, 10);
        console.log(dayOfCurrentDay);
        let next7Day = parseInt(dayOfCurrentDay) + 7;
        console.log("7 day", next7Day);
        let maxDate = 31;
        if (next7Day > 31) {
            next7Day === 31
            monthOfCurrentDay++
            if (monthOfCurrentDay < 10) {
                monthOfCurrentDay = "0" + monthOfCurrentDay;
                let the7DayAgo = yearOfCurrentDay + "-" + monthOfCurrentDay + "-" + 31
                console.log(the7DayAgo);

            } else {
                let the7DayAgo = yearOfCurrentDay + "-" + monthOfCurrentDay + "-" + 31
                console.log(the7DayAgo, "+++++++++++", monthOfCurrentDay);

            }

            return true

        } else {
            let the7DayAgo = yearOfCurrentDay + "-" + monthOfCurrentDay + "-"+next7Day
            console.log(the7DayAgo,"b");
            return false
        }

        // const startDate = currentDay + 'T00:00:00.000Z';
        // const endDate = month + '-31T23:59:59.999Z';
        // const transactions = await ScheduleStudyModel.find({
        //     createAt: {
        //         $gte: startDate,
        //         $lte: endDate,
        //     },
        // });
        // return transactions

        const SchedulesSubject = await ScheduleExamModel.find({ date: currentDay });
        if (SchedulesSubject.length === 0) {
            return false
        }
        return SchedulesSubject
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getBy14Day = async (currentDay) => {
    try {
        let yearOfCurrentDay = currentDay.slice(0, 4);
        let monthOfCurrentDay = currentDay.slice(6, 7);
        let dayOfCurrentDay = currentDay.slice(8, 10);
        console.log(dayOfCurrentDay);
        let next14Day = parseInt(dayOfCurrentDay) + 14;
        console.log("7 day", next14Day);
        let maxDate = 31;
        if (next14Day > 31) {
            next14Day === 31
            monthOfCurrentDay++
            if (monthOfCurrentDay < 10) {
                monthOfCurrentDay = "0" + monthOfCurrentDay;
                let the7DayAgo = yearOfCurrentDay + "-" + monthOfCurrentDay + "-" + 31
                console.log(the7DayAgo);

            } else {
                let the7DayAgo = yearOfCurrentDay + "-" + monthOfCurrentDay + "-" + 31
                console.log(the7DayAgo, "+++++++++++", monthOfCurrentDay);

            }

            return true

        } else {
            let the14DayAgo = yearOfCurrentDay + "-" + monthOfCurrentDay + "-"+next14Day
            console.log(the14DayAgo,"b");
            return false
        }

        // const startDate = currentDay + 'T00:00:00.000Z';
        // const endDate = month + '-31T23:59:59.999Z';
        // const transactions = await ScheduleStudyModel.find({
        //     createAt: {
        //         $gte: startDate,
        //         $lte: endDate,
        //     },
        // });
        // return transactions

        const SchedulesSubject = await ScheduleExamModel.find({ date: currentDay });
        if (SchedulesSubject.length === 0) {
            return false
        }
        return SchedulesSubject
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addSchedule, getById, getAll, deleteById,
    updateById,getBysubject,getBy7Day,getBy14Day
}
