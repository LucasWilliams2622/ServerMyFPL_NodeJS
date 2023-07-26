const ScheduleStudyService = require('./ScheduleStudyService');

const addNew = async (idSubject, shift, location, time, date, lesson) => {
    try {
        return await ScheduleStudyService.addNew(idSubject, shift, location, time, date, lesson);
    } catch (error) {
        console.log(error);
        return false;
    }
}
const getById = async (id) => {
    try {
        return await ScheduleStudyService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await ScheduleStudyService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await ScheduleStudyService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,idSubject, shift, location, time, date, lesson) => {
    try {
        return await ScheduleStudyService.updateById(id,idSubject, shift, location, time, date, lesson);
    } catch (error) {
        return false;
    }
}
const getByCurrentDay = async (currentDay) => {
    try {
        return await ScheduleStudyService.getByCurrentDay(currentDay);
    } catch (error) {
        return false;
    }
}

module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByCurrentDay
};