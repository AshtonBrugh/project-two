const { User } = require('../models');
 
const userData = [
    {
        username: 'AshtonBrugh',
        email: 'ashtonbrugh@gmail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;