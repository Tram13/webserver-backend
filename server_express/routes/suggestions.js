const express = require('express');
const SuggestionsController = require('../controllers/SuggestionsController');
const router = express.Router();

// suggestions/all
router.get('/all', SuggestionsController.suggestionsList);

// suggestions/create
router.post('/create', SuggestionsController.createSuggestionPost);

// suggestions/:suggestionID/delete
router.delete('/:suggestionID/delete', SuggestionsController.deleteSuggestionDelete);

// suggestions
router.get('/', SuggestionsController.info);

module.exports = router;