const router = require('express').Router();

const {
getThoughts,
getSingleThought,
addThought,
updateThought,
deleteThought,
addReaction,
removeReaction
} = require('../../controllers/thoughtController')

// api/thoughts
router
    .route('/')
    .get(getThoughts)
    .get(getSingleThought)
    .post(addThought)
    .put(updateThought)
    .delete(deleteThought);

    
// api/thoughts/:idthoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction)