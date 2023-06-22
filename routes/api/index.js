const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const reactionRoutes = require('./reactionRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
router.use('/reaction', reactionRoutes);
router.use('/friend',friendRoutes)


module.exports = router;