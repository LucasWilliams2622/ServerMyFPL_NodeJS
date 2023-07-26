const newsService = require('./NewsService');

const addNew = async (title, content,author, date,image) => {
    try {
        return await newsService.addNew(title, content,author, date,image);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await newsService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await newsService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await newsService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,title,content,author,date) => {
    try {
        return await newsService.updateById(id,title,content,author,date);
    } catch (error) {
        return false;
    }
}
const getByTitle = async (title) => {
    try {
        return await newsService.getByTitle(title);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByTitle,
};