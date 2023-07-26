const schedulesModel = require('./SchedulesModel')

const addSchedule = async (subject, location, shift, date) => {
    try {
        const schedules = {
            subject, location, shift,date
        }
        const p = new schedulesModel(schedules);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new schedules error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return schedulesModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBysubject = async (subject) => {
    try {

        const schedules =await schedulesModel.find({ subject: { $regex: subject, $options: 'i' }, });
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
        return schedulesModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return schedulesModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, subject, location, shift, date) => {
    try {
        const schedules = await schedulesModel.findById(id)
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

module.exports = {
    addSchedule, getById, getAll, deleteById,
    updateById,getBysubject,
}
