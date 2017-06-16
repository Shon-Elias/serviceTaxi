const router = require('express').Router();
const User = require('../db').model('user');
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next);
});



// return single user by Id
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
    res.json(user);
  })
  .catch(next);
});

// update account details
// route.put('/:id', (req, res, next) => {

// })
