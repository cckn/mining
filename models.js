const Sequelize = require('sequelize');
const dbConfig = require('./config/db.json');

const sequelize = new Sequelize(
    dbConfig.dbName,
    dbConfig.id,
    dbConfig.password,
    {
        dialect: dbConfig.dialect,
        host: dbConfig.host,
        port: dbConfig.port,
        logging: dbConfig.logging,
    }
);

const User = sequelize.define('User', {
    name: Sequelize.STRING, //varchar 255
});

const Bans = sequelize.define('Bans', {
    champId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    tier: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    count: {
        type: Sequelize.INTEGER,
    },
});

module.exports = { Sequelize, sequelize, User, Bans };
