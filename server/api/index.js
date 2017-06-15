const router = require('express').Router();
module.exports = router;

router.use('/user', require('./user'));
router.use('/bus', require('./bus'));

router.use((req, res) => {
  res.status(404).send('Not found');
});
