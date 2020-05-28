const express = require('express');
const SuggestionsController = require('../controllers/SuggestionsController');
const router = express.Router();

// suggestions/:suggestionID/delete
router.delete('/:suggestionID', SuggestionsController.deleteSuggestionDelete);

// suggestions/:suggestionID
router.patch('/:suggestionID', SuggestionsController.updateSuggestionPatch);

// suggestions
router.post('/', SuggestionsController.createSuggestionPost);

// suggestions
router.get('/', SuggestionsController.suggestionsList);

module.exports = router;