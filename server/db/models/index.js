const User = require('./user');
const Bus = require('./bus');
const Station = require('./');
const db = require('../bd');

User.belongsToMany(Bus);
Station.blongsTo(User);
Station.belongsTo(Bus);
