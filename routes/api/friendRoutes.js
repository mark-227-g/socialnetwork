const router = require('express').Router();
const {
addFriend,
removeFriend,
}= require('../../controllers/friendController');

router
    .route('/:userId')
    .post(addFriend)
    .delete(removeFriend);

module.exports= router;
