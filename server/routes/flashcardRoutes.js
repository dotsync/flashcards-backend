const express = require('express');
const flashcardControllers = require('../controllers/flashcardControllers')
const router = express.Router();

// gets all flash cards
router.get('/list', flashcardControllers.getFlashcards);

module.exports = router
