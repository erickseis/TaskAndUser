const express = require('express');

//Controllers
const { getTask, newTask } = require('../controllers/task.controller');

const userRouter = express.Router();

userRouter.get('/', getTask);

userRouter.post('/', newTask);

module.exports = { userRouter };