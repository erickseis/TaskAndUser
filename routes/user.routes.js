const express = require('express');

//controllers
const { getAllUsers, createUser } = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.post('/', createUser)


module.exports = { userRouter };