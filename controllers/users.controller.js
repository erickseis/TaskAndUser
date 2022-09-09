const { User } = require('../models/user.model');

//Obtain user

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: { status: 'active' },
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

module.exports = {
    getAllUsers,
    createUser
}