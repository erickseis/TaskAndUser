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

        const employee = await Task.findOne({ where: { finishDate, limitDate, late } })

        if (!employee) {
            return res.status(404).json({
                status: 'error',
                message: 'Complete'
            });
        } else if (employee.status === 'canceled') {   //active, completed, late, cancelled
            return res.status(400).json({
                status: 'error',
                message: 'Employee was cancelled'
            })
        } else if (employee.status === 'out') {
            return res.status(400).json({
                status: 'error',
                message: 'This employee is already out'
            })
        } else {
            await employee.update({ exitTime })



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