const express = require('express');

//Controllers
const { getTask, newTask } = require('../controllers/task.controller');

const taskRouter = express.Router();

taskRouter.get('/', getTask);

taskRouter.post('/', newTask);

module.exports = { taskRouter };