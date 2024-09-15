const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend

} = require('../../controllers/userControllers')

// api/users
router.route('/').get(getUsers).post(createUser);

// CRUD methods for user with a singleId!
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// api/users/:userId/freinds/:friendId
router.route('/:userId/friends/:friendsId').post(addFriend).delete(deleteFriend)

module.exports = router;