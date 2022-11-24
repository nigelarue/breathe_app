const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sessionsRoutes = require('./sessionsRoutes');

router.use('/users', userRoutes);
router.use('/sessions', sessionsRoutes);

module.exports = router;
