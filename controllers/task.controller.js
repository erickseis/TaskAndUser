const { Task } = require('../models/task.models')

//obtain task

const getTask = async (req, res, next) => {
    const task = await Task.findAll();

    res.status(200).json({
        status: 'succes',
        data: { task },
    })
}



//create task