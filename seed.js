var Promise = require('bluebird');
const db = require('./models/db');
const User = require('./models/user');
const Bus = require('./models/bus');
const Station = require('./models/station');



var data = {
  users: [
    { type: 'superAdmin', status: 'active', name: 'Shon', email: 'shon.elias@gmail.com', phone: '6466836415', password: 'password'},
    { type: 'admin', status: 'active', name: 'John', email: 'john@gmail.com', phone: '6464645555', password: 'password', stationId: 1},
    { type: 'driver', status: 'active', name: 'Ben', email: 'ben.elais@gmail.com', phone: '6466831234', password: 'password', stationId: 1},
    { type: 'driver', status: 'active', name: 'Jacob', email: 'jacob@gmail.com', phone: '6466832345', password: 'password', stationId: 2},
    { type: 'passenger', status: 'active', name: 'Roy', email: 'roy@gmail.com', phone: '6466833456', password: 'password', stationId: 2},
    { type: 'passenger', status: 'active', name: 'Yonathan', email: 'yonathan@gmail.com', phone: '6466834567', password: 'password', stationId: 1},
    { type: 'passenger', status: 'active', name: 'Omer', email: 'omer@gmail.com', phone: '6466833456', password: 'password', stationId: 1}
  ],
  buses: [
    {line: uptown, stops: [40.737264, -73.996789, 40.743595, -73.992188, 40.749834, -73.987577, 40.754727, -73.984068 ] },
    {line: downtown, stops: [40.756003, -73.987115, 40.751008, -73.990849, 40.744724, -73.995309,40.738534, -73.999885 ] }
  ],
  stations: [ {name: 'NYC Taxi'}, {name: 'Boston Taxi'}]
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
  const createBus = Promise.map(data.buses, function(bus){
    return Bus.create(bus);
  })
  return createBus;
})
.then(() => {
  console.log('Finished inserting data to your database');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});


