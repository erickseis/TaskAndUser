const express = require('express');

//Routers
const { userRouter } = require('./routes/user.routes')
const { taskRouter } = require('./routes/task.routes')

const app = express();

//enable incoming JSON data
app.use(express.json())

//Endpoints
app.use('/api/v1/users', userRouter)
app.use('/api/v1/task', taskRouter)

module.exports = { app }