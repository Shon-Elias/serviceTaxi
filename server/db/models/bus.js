const Sequelize = require('sequelize');
const db = require('./db');

const Bus = db.define('bus', {

  line: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  path: {
    type: Sequelize.ENUM // set manu
    // type: Sequelize.ARRAY(Sequelize.JSON), // JSON only in postgres
    // this should be  array of stationName with the lat/lon
    // allowNull: false
  }


})

module.exports = Bus;
