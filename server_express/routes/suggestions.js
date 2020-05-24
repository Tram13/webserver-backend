const express = require('express');
const SuggestionsController = require('../controllers/SuggestionsController');
const router = express.Router();

// suggestions/create
router.post('/create', SuggestionsController.createSuggestionPost);

// suggestions/:suggestionID/delete
router.delete('/:suggestionID/delete', SuggestionsController.deleteSuggestionDelete);

// suggestions
router.get('/', SuggestionsController.suggestionsList);

module.exports = router;