const express = require('express');

const flashcardControllers = require('../controllers/flashcardControllers');

const router = express.Router();

// retrieve a list of all all flashcards
router.get('/list', flashcardControllers.getFlashcards);
// create a single flashcard and add it to the list
router.post('/list', flashcardControllers.createFlashcard);
// delete a single flashcard by finding its' id
router.delete('/list/:id', flashcardControllers.deleteFlashcard);

module.exports = router;
