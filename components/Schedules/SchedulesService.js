const schedulesModel = require('./SchedulesModel')

const addSchedule = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        const schedules = {
            idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay:formattedDate(Ngay)
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

        const schedules = await schedulesModel.find({ subject: { $regex: subject, $options: 'i' }, });
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
        console.log('=====>>>><<<<', );
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
const updateById = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        const schedules = await schedulesModel.findById(id)
        if (schedules) {
            schedules.idMon = idMon ? idMon : schedules.idMon;
            schedules.Ca = Ca ? Ca : schedules.Ca;
            schedules.Phong = Phong ? Phong : schedules.Phong;
            schedules.DiaDiem = DiaDiem ? DiaDiem : schedules.DiaDiem;
            schedules.GiangVien = GiangVien ? GiangVien : schedules.GiangVien;
            schedules.ThoiGian = ThoiGian ? ThoiGian : schedules.ThoiGian;
            schedules.TenMon = TenMon ? TenMon : schedules.TenMon;
            schedules.Buoi = Buoi ? Buoi : schedules.Buoi;
            schedules.Ngay = Ngay ? Ngay : schedules.Ngay;
            await schedules.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getScheduleByCurrentDay = async (start_date, end_date) => {
    try {
        let startDate = new Date();
        let endDate = new Date();

        if (start_date) startDate =  formattedDate(start_date)
        if (end_date) endDate = formattedDate(end_date)
        let filterCondition = { $gte: startDate, $lte: endDate }
        if(!start_date || !end_date) filterCondition={$gte: startDate}
        const schedules = await SchedulesSubjectModel.find({
            Ngay: filterCondition
        });
        return schedules;
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
};

const formattedDate = (day) => {
    let ddMM = day.split('/')
    console.log('>>>>>>ddmm', ddMM);
    day = ddMM[1] + '/' + ddMM[0] + '/' + ddMM[2];
    const specificDate = new Date(day + '');
    return specificDate;
}

module.exports = {
    addSchedule, getById, getAll, deleteById,
    updateById, getBysubject,getScheduleByCurrentDay
}
