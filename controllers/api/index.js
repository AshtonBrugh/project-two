const router = require('express').Router();

const userRoutes = require('./user-routes');
const resultRoutes = require('./result-routes');
const previousRoutes = require('./previous-routes');

router.use('/users', userRoutes);
router.use('/results', resultRoutes);
router.use('/previous', previousRoutes);

module.exports = router;