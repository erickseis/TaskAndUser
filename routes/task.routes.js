const express = require('express');

//Controllers
const {
    getTask,
    newTask,
    updateTask,
    deleteTask,
    getTasksByStatus,

} = require('../controllers/task.controller');
//middlewares
const { taskExist } = require('../middlewares/task.middleware')

const taskRouter = express.Router();

taskRouter.get('/', getTask);
taskRouter.get("/:status", getTasksByStatus);
taskRouter.post('/', newTask);
taskRouter.patch("/:id", taskExist, updateTask);
taskRouter.delete("/:id", taskExist, deleteTask);

module.exports = { taskRouter };