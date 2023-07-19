const SchedulesSubjectModel = require('./SchedulesSubjectModel')
//const SubjectsModel = require()

const addSchedule = async (idMon, Ca, DiaDiem, NgayHoc) => {
    try {
        const SchedulesSubject = {
            idMon, Ca, DiaDiem, NgayHoc
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
        const SchedulesSubject =await SchedulesSubjectModel.find({ title: { $regex: title, $options: 'i' }, });
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
const updateById = async (id, idMon, Ca, DiaDiem, NgayHoc) => {
    try {
        const SchedulesSubject = await SchedulesSubjectModel.findById(id)
        
        if (SchedulesSubject) {
            SchedulesSubject.idMon = idMon ? idMon : SchedulesSubject.idMon;
            SchedulesSubject.Ca = Ca ? Ca : SchedulesSubject.Ca;
            SchedulesSubject.DiaDiem = DiaDiem ? DiaDiem : SchedulesSubject.DiaDiem;
            SchedulesSubject.NgayHoc = NgayHoc ? NgayHoc : SchedulesSubject.NgayHoc;
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
    updateById,getByTitle,
}
