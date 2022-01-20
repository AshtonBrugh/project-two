const { User } = require('../models/User');
 
const userData = [
    {
        username: 'AshtonBrugh',
        email: 'ashtonbrugh@gmail.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;