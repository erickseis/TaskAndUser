const express = require('express');
// const { body, validationResult } = require('express-validator')

//controllers
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller');

//Middlewares
const { userExists } = require('../middlewares/users.middlewares')
const { createPostValidators } = require('../middlewares/validators.middlewares')


const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.post('/', createPostValidators, createUser);

userRouter.patch('/:id', userExists, updateUser);

userRouter.delete('/:id', userExists, deleteUser);

module.exports = { userRouter };