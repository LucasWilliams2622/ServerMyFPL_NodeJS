const scheduleService = require('./SchedulesService');

const addSchedule = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        console.log('<><><><><><><>');
        return await scheduleService.addSchedule(idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay);
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
const updateById = async (id,idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        return await scheduleService.updateById(id,idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay);
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
const getScheduleByCurrentDay = async (start_date, end_date) => {
    try {
        return await SchedulesSubjectService.getScheduleByCurrentDay(start_date, end_date);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
};
module.exports = {
     addSchedule, getById, getAll, deleteById,
    updateById,getBysubject,getScheduleByCurrentDay
};