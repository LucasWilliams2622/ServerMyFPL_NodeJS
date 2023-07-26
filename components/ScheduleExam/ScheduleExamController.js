const scheduleService = require('./SchedulesService');

const addSchedule = async (subject,location,shift,date) => {
    try {
        return await scheduleService.addSchedule(subject, location, shift,date);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await scheduleService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await scheduleService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await scheduleService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,subject,location,shift,date) => {
    try {
        return await scheduleService.updateById(id,subject,location,shift,date);
    } catch (error) {
        return false;
    }
}
const getBysubject = async (subject) => {
    try {
        return await scheduleService.getByTitle(subject);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew: addSchedule, getById, getAll, deleteById,
    updateById,getBysubject,
};