const { Task } = require('../models/task.models')

//obtain task

const getTask = async (req, res, next) => {
    try {
        const task = await Task.findAll({
            where: { status: 'active' },
        });

        res.status(200).json({
            status: 'succes',
            data: { task },
        })

    } catch (error) {
        console.log(error)

    }
}



//create task

const newTask = async (req, res) => {
    try {
        const { title, userId, limitDate, startDate } = req.body;
        const newTask = await Task.create({ title, userId, limitDate, startDate })

        res.status(200).json({
            status: 'succes',
            data: { newTask },
        })

    } catch (error) {
        console.log(error)

    }

}


module.exports = {
    getTask,
    newTask
}