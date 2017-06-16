const Sequelize = require('sequelize');
const db = require('../db');

const Station = db.define('station', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Station;
