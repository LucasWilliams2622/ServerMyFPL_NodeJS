const SchedulesSubjectModel = require('./SchedulesSubjectModel')
//const SubjectsModel = require()

const addSchedule = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        const SchedulesSubject = {
            idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay:formattedDate(Ngay)
        }
        const p = new SchedulesSubjectModel(SchedulesSubject);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new SchedulesSubject error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return SchedulesSubjectModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByTitle = async (title) => {
    try {
        const SchedulesSubject = await SchedulesSubjectModel.find({ title: { $regex: title, $options: 'i' }, });
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
        const res = await SchedulesSubjectModel.find()
        console.log('res>>>>>', res)
        return SchedulesSubjectModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return SchedulesSubjectModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong, Ngay) => {
    try {
        const SchedulesSubject = await SchedulesSubjectModel.findById(id)

        if (SchedulesSubject) {
            SchedulesSubject.idMon = idMon ? idMon : SchedulesSubject.idMon;
            SchedulesSubject.Ca = Ca ? Ca : SchedulesSubject.Ca;
            SchedulesSubject.Phong = Phong ? Phong : SchedulesSubject.Phong;
            SchedulesSubject.DiaDiem = DiaDiem ? DiaDiem : SchedulesSubject.DiaDiem;
            SchedulesSubject.GiangVien = GiangVien ? GiangVien : SchedulesSubject.GiangVien;
            SchedulesSubject.ThoiGian = ThoiGian ? ThoiGian : SchedulesSubject.ThoiGian;
            SchedulesSubject.TenMon = TenMon ? TenMon : SchedulesSubject.TenMon;
            SchedulesSubject.Buoi = Buoi ? Buoi : SchedulesSubject.Buoi;
            SchedulesSubject.Ngay = Ngay ? Ngay : SchedulesSubject.Ngay;
            await SchedulesSubject.save();
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
    updateById, getByTitle,getScheduleByCurrentDay
}
