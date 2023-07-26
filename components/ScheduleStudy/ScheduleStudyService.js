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
        const SchedulesSubject = await ScheduleStudyModel.find({ date: currentDay});
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
const updateById = async (id,idSubject, shift, location, time, date, lesson) => {
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
    updateById, getByCurrentDay
}
