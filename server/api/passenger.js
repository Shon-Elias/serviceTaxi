const express = require('express');
const routes = express.Router();
const Passenger = require('../models').Passenger;

const blue = require('chalk').blue;


// Creating a new user
Passenger.post('/', (req, res, next) => {
  Passenger.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
});




name, email, phone
