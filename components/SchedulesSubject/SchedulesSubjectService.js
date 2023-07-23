const SchedulesSubjectModel = require('./SchedulesSubjectModel')
//const SubjectsModel = require()

const addSchedule = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong) => {
    try {
        const SchedulesSubject = {
            idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong
        }
        //const mh = new 
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
const updateById = async (idMon, Ca, DiaDiem, Buoi, GiangVien, ThoiGian, TenMon, Phong) => {
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
            await SchedulesSubject.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addSchedule, getById, getAll, deleteById,
    updateById, getByTitle,
}
