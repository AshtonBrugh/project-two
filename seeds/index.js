const seedUsers = require('./users-seeds');
const seedResults = require('./results-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('-----');
    await seedUsers();
    console.log('-----');
    await seedResults();

    process.exit(0);
};

seedAll();

