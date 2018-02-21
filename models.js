const Sequelize = require('sequelize');
const sequelize = new Sequelize('mining', 'root', '1234', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    logging: false,
});

const User = sequelize.define('User', {
    name: Sequelize.STRING, //varchar 255
});

module.exports = { Sequelize, sequelize, User };
