const mockData = require('../../mock/data-files/dummies')

const getFlashcards = (req, res) => {
  let flashcards = mockData.flashcards
  res.status(200).send(flashcards);
}

module.exports = {
  getFlashcards
}
