const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// api/thoughts
router.route('/').get(getThoughts).post(addThought);

// CRUD methods for the thoughts route
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
