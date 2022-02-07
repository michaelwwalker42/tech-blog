const { User } = require('../models');

const userdata = [
  {
    username: 'GeorgeC',
    password: 'password123'
  },
  {
    username: 'curlupanddie',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

