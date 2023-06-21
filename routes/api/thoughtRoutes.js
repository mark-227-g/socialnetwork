const router = require('express').Router();
const {
  createThought,
  getAllThoughts, 
  getThoughtById,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,

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

// add and remove reactions
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;