// const Sequelize = require('sequelize');
// const db = require('./db');

// const Passenger = db.define('passenger', {
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
//   location: {
//     type: Sequelize.ARRAY(Sequelize.FLOAT),  // that's fine
//     allowNull: true // this will be set on every ride and then will be mendatory
//   },
//   destination: {
//     type: Sequelize.ARRAY(Sequelize.FLOAT),  // that's fine
//     allowNull: true // this will be set on every ride and then will be mendatory
//   }

// })

// module.exports = Passenger;


// // db.sync()
// // .then(function(){
// //   return Passenger.create({
// //     name: 'shon', email:'shon.elias@gmail.com',
// //     phone: '646-683-6415',
// //     location: [40.235133, -23.824581],
// //     destination: [45.879023, -37.824581 ]
// //   })
// // })
// // .then(function(){
// //   console.log('fine');
// // })
// // .catch(next);
