const ScheduleExamService = require('./ScheduleExamService');

const addSchedule = async (subject,location,shift,date) => {
    try {
        return await ScheduleExamService.addSchedule(subject, location, shift,date);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await ScheduleExamService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await ScheduleExamService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await ScheduleExamService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,subject,location,shift,date) => {
    try {
        return await ScheduleExamService.updateById(id,subject,location,shift,date);
    } catch (error) {
        return false;
    }
}
const getBysubject = async (subject) => {
    try {
        return await ScheduleExamService.getByTitle(subject);
    } catch (error) {
        return false;
    }
}
const getBy7Day = async (currentDay) => {
    try {
        return await ScheduleExamService.getBy7Day(currentDay);
    } catch (error) {
        return false;
    }
}
const getBy14Day = async (currentDay) => {
    try {
        return await ScheduleExamService.getBy14Day(currentDay);
    } catch (error) {
        return false;
    }
}
module.exports = {
    scheduleExam: addSchedule, getById, getAll, deleteById,
    updateById,getBysubject,getBy7Day,getBy14Day
};