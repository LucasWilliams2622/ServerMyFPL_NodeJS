const categoryModel = require('./CategoryModel')

const addNew = async (name) => {
    try {
        const news = {
            name
        }
        const p = new categoryModel(news);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new news error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return categoryModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByTitle = async (title) => {
    try {

        const news = await categoryModel.find({ title: { $regex: title, $options: 'i' }, });
        if (news.length === 0) {
            return false
        }
        return news
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getAll = async (createAt) => {
    try {
        return categoryModel.find().skip(0).sort({content:-1})
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return categoryModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, name) => {
    try {
        const news = await categoryModel.findById(id)
        if (news) {
            news.name = name ? name : news.name;
            await news.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addNew, getById, getAll, deleteById,
    updateById, getByTitle,
}
