const SchedulesSubjectService = require('./SchedulesSubjectService');

const addSchedule = async (idMon, Ca, DiaDiem, NgayHoc) => {
    try {
        return await SchedulesSubjectService.addSchedule(idMon, Ca, DiaDiem, NgayHoc);
    } catch (error) {
        console.log(error);
        return false;
    }
}
const getById = async (id) => {
    try {
        return await SchedulesSubjectService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await SchedulesSubjectService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await SchedulesSubjectService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id, idMon, Ca, DiaDiem, NgayHoc) => {
    try {
        return await SchedulesSubjectService.updateById(id, idMon, Ca, DiaDiem, NgayHoc);
    } catch (error) {
        return false;
    }
}
const getByTitle = async (title) => {
    try {
        return await SchedulesSubjectService.getByTitle(title);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addSchedule, getById, getAll, deleteById,
    updateById, getByTitle,
};