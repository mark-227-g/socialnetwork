const router = require('express').Router();
const {
    addReaction, 
    getReactions,
    getSingleReaction,
 // removeReaction,
 // 
} = require('../../controllers/reactionController');

router
    .route('/')
    .get(getReactions);
router
    .route('/:reactionId')
    .get(getSingleReaction);

router
    .route('/thought/:thoughtId/:reactionId')
    .post(addReaction)
    .delete(removeReaction);
 // .post(addReaction);
//  .delete(removeReaction);

module.exports = router;