const router = require('express').Router();
const {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(findAllUsers).post(createUser);

router
  .route('/:userId')
  .get(findUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;