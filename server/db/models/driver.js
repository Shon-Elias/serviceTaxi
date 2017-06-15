// const Sequelize = require('sequelize');
// const db = require('./db');
// const Passenger = require('./passenger')

// const Driver = db.define('driver', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   email: {
//     type: Sequelize.STRING,
//     unique: true,
//     allowNull: false,
//     validate: {
//       isEmail: true
//     }
//   },
//   phone: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   // location: {
//   //   type: Sequelize.ARRAY(Sequelize.FLOAT),  // that's fine
//   //   allowNull: false
//   // },
//   onDrive: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//     defaultValue: false
//   },

//   isAdmin: {
//     type: Sequelize.BOOLEAN,
//     defaultValue: false
//     // allowNull: false,
//   },

//   isSuperAdmin: {
//     type: Sequelize.BOOLEAN,
//     defaultValue: false
//     // allowNull: false,
//   }


// })

// module.exports = Driver;
