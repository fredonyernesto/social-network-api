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
router
    .route('/')
    .get(getUsers)
    .get(getSingleUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

    
// api/users/:userId/freinds/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)