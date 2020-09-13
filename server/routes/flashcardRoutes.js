const express = require('express');
const flashcardControllers = require('../controllers/flashcardControllers')
const router = express.Router();

// retrieve a list of all all flash cards
router.get('/list', flashcardControllers.getFlashcards);
// create a single flash card and add it to the list
router.post('/list', flashcardControllers.createFlashcard);

module.exports = router
