const express = require('express');
const routes = express.Router();
const Driver = require('../models').Driver;

const blue = require('chalk').blue;


// Creating a new driver user
Driver.post('/', (req, res, next) => {
  Driver.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  });
});




name, email, phone
