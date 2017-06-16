const Sequelize = require('sequelize');
const db = require('../db');

const Bus = db.define('bus', {

  line: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  stops: {
    // JSON only in postgres
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: []
    // type: Sequelize.ENUM('1') // set manu
    // this should be  array of stationName with the lat/lon
    // allowNull: false
  }


})

module.exports = Bus;
