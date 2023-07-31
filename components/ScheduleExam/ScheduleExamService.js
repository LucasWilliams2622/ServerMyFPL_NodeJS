const ScheduleExamModel = require('./ScheduleExamModel')
const moment = require('moment')


const addSchedule = async (idSubject, location, shift, date,time) => {
    try {
        const scheduleExam = {idSubject, location, shift,date,time}
        const p = new ScheduleExamModel(scheduleExam);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new schedules error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return ScheduleExamModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBysubject = async (subject) => {
    try {

        const schedules =await ScheduleExamModel.find({ subject: { $regex: subject, $options: 'i' }, });
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
        return ScheduleExamModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return ScheduleExamModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, subject, location, shift, date) => {
    try {
        const schedules = await ScheduleExamModel.findById(id)
        if (schedules) {
            schedules.subject = subject ? subject : schedules.subject;
            schedules.location = location ? location : schedules.location;
            schedules.shift = shift ? shift : schedules.shift;
            schedules.date = date ? date : schedules.date;
            await schedules.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getBy7Day = async (currentDay) => {
    try {
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(startDate).add(7, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date ', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleExamModel.find({
                date: {
                    $gte: startDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getBy14Day = async (currentDay) => {
    try {
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(startDate).add(14, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleExamModel.find({
                date: {
                    $gte: startDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getBy30Day = async (currentDay) => {
    try {
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(startDate).add(30, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleExamModel.find({
                date: {
                    $gte: startDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getBy60Day = async (currentDay) => {
    try {
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(startDate).add(60, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleExamModel.find({
                date: {
                    $gte: startDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getBy90Day = async (currentDay) => {
    try {
        let startDate = moment(currentDay, "YYYY-MM-DD");
        let endDate = moment(startDate).add(90, 'days');
        if (endDate.date() > 31) {
            if (endDate.month() > 12) {
                endDate.add(1, 'years');
                endDate.add(1, 'months');
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');
                console.log(schedules.length);
                return schedules;
            } else {
                console.log(startDate, endDate);
                const schedules = await ScheduleExamModel.find({
                    date: {
                        $gte: startDate,
                        $lte: endDate,
                    },
                }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
                console.log(schedules.length);
                return schedules;
            }
        } else {
            const schedules = await ScheduleExamModel.find({
                date: {
                    $gte: startDate,
                    $lte: endDate,
                },
            }).populate('idSubject shift location time date lesson', 'nameSubject codeSubject instructor');;
            console.log(schedules.length);
            return schedules;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
module.exports = {
    addSchedule, getById, getAll, deleteById,
    updateById,getBysubject,getBy7Day,getBy14Day,getBy30Day,getBy60Day,getBy90Day
}
