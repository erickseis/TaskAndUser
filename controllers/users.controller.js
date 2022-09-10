const { Task } = require('../models/task.models');
const { User } = require('../models/user.model');

//Obtain user

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: { status: 'active' },
            include: [
                {
                    model: Task,
                }
            ]
        })

        res.status(200).json({
            status: 'succes',
            data: {
                users,
            }
        })
    } catch (error) {
        console.log(error);
    }
}
//created user

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });

        //201 > succes and resource has been created
        res.status(200).json({
            status: 'succes',
            data: { newUser },
        })
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    try {
        const { name, email, status } = req.body;
        const { user } = req;

        await user.update({ name, email, status })
        res.status(200).json({
            status: 'success',
            data: { user },
        });


    } catch (error) {
        console.log(error)
    }

}
const deleteUser = async (req, res) => {
    try {
        const { user } = req;


        //  Soft delete
        await user.update({ status: 'cancelled' });

        res.status(204).json({ status: 'success' });
    } catch (error) {
        console.log(error);
    }
};



module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}