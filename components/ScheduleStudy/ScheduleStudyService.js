const ScheduleStudyModel = require('./ScheduleStudyModel')

const addNew = async (idSubject, shift, location, time, date, lesson) => {
    try {
        const SchedulesSubject = {
            idSubject, shift, location, time, date, lesson
        }
        //const mh = new 
        const p = new ScheduleStudyModel(SchedulesSubject);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new SchedulesSubject error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return ScheduleStudyModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByCurrentDay = async (currentDay) => {
    try {

        const startDate = currentDay + 'T00:00:00.000Z';
        const endDate = currentDay + 'T23:59:59.999Z';
        return await ScheduleStudyModel.find({
            date: {
                $gte: startDate,
                $lte: endDate,
            },
        }).populate('idSubject', 'nameSubject codeSubject instructor');
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

        const SchedulesSubject = await ScheduleStudyModel.find({ date: currentDay });
        if (SchedulesSubject.length === 0) {
            return false
        }
        return SchedulesSubject
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getAll = async () => {
    try {
        const res = await ScheduleStudyModel.find()
        console.log('res>>>>>', res)
        return ScheduleStudyModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return ScheduleStudyModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, idSubject, shift, location, time, date, lesson) => {
    try {
        const SchedulesSubject = await ScheduleStudyModel.findById(id)

        if (SchedulesSubject) {
            SchedulesSubject.idSubject = idSubject ? idSubject : SchedulesSubject.idSubject;
            SchedulesSubject.shift = shift ? shift : SchedulesSubject.shift;
            SchedulesSubject.location = location ? location : SchedulesSubject.location;
            SchedulesSubject.time = time ? time : SchedulesSubject.time;
            SchedulesSubject.date = date ? date : SchedulesSubject.date;
            SchedulesSubject.lesson = lesson ? lesson : SchedulesSubject.lesson;
            await SchedulesSubject.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addNew, getById, getAll, deleteById,
    updateById, getByCurrentDay, getBy7Day
}
