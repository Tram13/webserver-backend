const express = require('express');
const SuggestionsController = require('../controllers/SuggestionsController');
const router = express.Router();

// suggestions/:suggestionID/delete
router.delete('/:suggestionID/delete', SuggestionsController.deleteSuggestionDelete);

// suggestions/create
router.post('/', SuggestionsController.createSuggestionPost);

// suggestions
router.get('/', SuggestionsController.suggestionsList);

module.exports = router;