const router = require('express').Router();
const {
    addReaction, 
    getReactions,
    getSingleReaction,
     removeReaction,
 // 
} = require('../../controllers/reactionController');

router
    .route('/')
    .get(getReactions)
    .post(addReaction);
router
    .route('/:reactionId')
    .get(getSingleReaction)
    .delete(removeReaction);

module.exports = router;