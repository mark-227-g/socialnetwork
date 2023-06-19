const router = require('express').Router();
const {
  createThought,
  getAllThoughts,

} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getAllThoughts).post(createThought);

module.exports = router;