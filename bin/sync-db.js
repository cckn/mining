const models = require('../src/models/models.js');

module.exports = () => {
    const options = {
        // force: process.env.NODE_ENV === 'test' ? true : false,
        force: true,
    };
    return models.sequelize.sync(options);
};
