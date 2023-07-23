const subsModel = require('./SubjectModel')

const addSubss = async (idMon,tenMon,phong,lop,ca,thoigian,giangvien,buoi,diadiem) => {
    try {
        const subs = {
            idMon,tenMon,phong,lop,ca,thoigian,giangvien,buoi,diadiem
        }
        const p = new subsModel(subs);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new Subjects error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return subsModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
// const getBytenmonhoc = async (tenmonhoc) => {
//     try {

//         const subs =await subsModel.find({ tenmonhoc: { $regex: tenmonhoc, $options: 'i' }, });
//         if (subs.length === 0) {
//             return false
//         }
//         return subs
//     } catch (error) {
//         console.log('error: ', error);
//         return false;
//     }
// }

const getAll = async () => {
    try {
        return subsModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return subsModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id,idMon,tenMon,phong,lop,ca,thoigian,giangvien,buoi,diadiem) => {
    try {
        const subs = await subsModel.findById(id)
        if (subs) {
            subs.idMon = idMon ? idMon : subs.idMon;
            subs.tenMon = tenMon ? tenMon : subs.tenMon;
            subs.phong = phong ? phong : subs.phong;
            subs.lop = lop ? lop : subs.lop;
            subs.ca = ca ? ca : subs.ca;
            subs.thoigian = thoigian ? thoigian : subs.thoigian;
            subs.giangvien = giangvien ? giangvien : subs.giangvien;
            subs.buoi = buoi ? buoi : subs.buoi;
            subs.diadiem = diadiem ? diadiem : subs.diadiem;
            await subs.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}


module.exports = {
    addSubss, getById, getAll, deleteById,
    updateById,
}
