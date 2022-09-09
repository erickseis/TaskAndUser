const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    host: 'localhost',
    username: 'postgres',
    password: '19772318',
    database: 'taskanduser',
    port: 5432,
    dialect: 'postgres',
    logging: false,
})

module.exports = { db, DataTypes }