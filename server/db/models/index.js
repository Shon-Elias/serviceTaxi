const User = require('./user');
const Bus = require('./bus');
const Station = require('./station');
const userBus = require('./userBus');
const db = require('../db');

User.belongsToMany(Bus, {through: 'userBuses'});
Station.belongsTo(User);
Station.belongsTo(Bus);


module.exports = {
  db,
  User,
  Bus,
  Station,
  userBus
};
