// const Sequelize = require('sequelize');
const db = require('../db');

const userBus = db.define('userBuses', {});

module.exports = userBus;
