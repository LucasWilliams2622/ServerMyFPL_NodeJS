const SchedulesSubjectService = require('./SchedulesSubjectService');

const addSchedule = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        console.log('====idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay===', idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay);
        return await SchedulesSubjectService.addSchedule(idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay);
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
const updateById = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        return await SchedulesSubjectService.updateById(idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay);
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
    updateById, getByTitle, getScheduleByCurrentDay,
};