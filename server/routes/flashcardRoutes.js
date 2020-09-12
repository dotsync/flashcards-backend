const express = require('express');
const router = express.Router();
const mockData = require('../../mock/data-files/dummies')

// gets all flash cards
router.get('/list', (req, res) =>{
  let flashcards = mockData.flashcards
  res.status(200).send(flashcards);
});

module.exports = router
