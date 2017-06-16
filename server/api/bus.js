const router = require('express').Router();
const Bus = require('../db').model('bus');
module.exports = router;

router.get('/', (req, res, next) => {
  Bus.findAll()
    .then(buses => res.json(buses))
    .catch(next);
});


// return single bus by Id
router.get('/:id', (req, res, next) => {
  Bus.findById(req.params.id)
  .then(bus => {
    res.json(bus);
  })
  .catch(next);
});
