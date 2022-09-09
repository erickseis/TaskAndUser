const { User } = require('./user.model');
const { Task } = require('./task.models');

const initModels = () => {
    //1 --- M
    User.hasMany(Task, { foreignKey: 'user_id' });
    Task.belongsTo(User);
};

module.exports = { initModels }