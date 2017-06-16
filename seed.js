var Promise = require('bluebird');
const blue = require('chalk').blue;
const db = require('./server/db/db');
const User = require('./server/db/models').User;
const Bus = require('./server/db/models').Bus;
const Station = require('./server/db/models').Station;
const userBus = require('./server/db/models').userBus;

// const Bus = require('./models/bus');
// const Station = require('./models/station');



var data = {
  users: [
    { role: 'superAdmin', status: 'active', name: 'Shon', email: 'shon.elias@gmail.com', phone: '6466836415', password: 'password'},
    { role: 'admin', status: 'active', name: 'John', email: 'john@gmail.com', phone: '6464645555', password: 'password', stationId: 1},
    { role: 'driver', status: 'active', name: 'Ben', email: 'ben.elais@gmail.com', phone: '6466831234', password: 'password', stationId: 1},
    { role: 'driver', status: 'active', name: 'Jacob', email: 'jacob@gmail.com', phone: '6466832345', password: 'password', stationId: 2},
    { role: 'passenger', status: 'active', name: 'Roy', email: 'roy@gmail.com', phone: '6466833456', password: 'password', stationId: 2},
    { role: 'passenger', status: 'active', name: 'Yonathan', email: 'yonathan@gmail.com', phone: '6466834567', password: 'password', stationId: 1},
    { role: 'passenger', status: 'active', name: 'Omer', email: 'omer@gmail.com', phone: '6466833456', password: 'password', stationId: 1}
  ],
  buses: [
    {line: 'uptown', stops: [ { st14: [40.737264, -73.996789]}, { st24: [40.743595, -73.992188]}, { st34: [40.749834, -73.987577]}, { st42: [40.754727, -73.984068]} ] },
    {line: 'downtown', stops: [ { st42: [40.756003, -73.987115]}, { st34: [40.751008, -73.990849]}, { st24: [40.744724, -73.995309]}, { st14: [40.738534, -73.999885]} ] }
  ],
  stations: [ {name: 'NYC Taxi'}, {name: 'Boston Taxi'}],
  userBuses: [
    { userId: 4, busId: 1 },
    { userId: 5, busId: 1 },
    { userId: 6, busId: 1 },
    { userId: 7, busId: 1 }
  ]

}




db.sync({force: true})
.then(function(){
  const createStation = Promise.map(data.stations, function(station){
    return Station.create(station);
  })
    return createStation;
})
.then(function(){
  console.log('Finished inserting stations');
  const createUser = Promise.map(data.users, function(user){
    return User.create(user);
  })
    return createUser;
})
.then(() =>{
  console.log('Finished inserting users');
  console.log(blue(data.buses));
  const createBus = Promise.map(data.buses, function(bus){
      console.log(blue(bus));

    return Bus.create(bus);
  })
  return createBus;
})
.then(() =>{
  console.log('Finished inserting Buses');
  const createUserBus = Promise.map(data.userBuses, function(userbus){
      // console.log(blue(userus));

    return userBus.create(userbus);
  })
  return createUserBus;
})
.then(() => {
  console.log('Finished inserting data to your database');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});


