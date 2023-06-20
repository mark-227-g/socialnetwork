const router = require('express').Router();
const {
  createThought,
  getAllThoughts, 
  getThoughtById,
  updateThought,
  deleteThought,

} = require('../../controllers/thoughtController');

router
  .route('/')
  .post(createThought)
  .get(getAllThoughts);

// /api/thought
router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


module.exports = router;