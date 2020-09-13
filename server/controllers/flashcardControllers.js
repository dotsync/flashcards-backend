const mockData = require('../../mock/data-files/dummies')
const Flashcard = require('.././models/flashcardSchema')

const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
    res.status('200')
  } catch (err) {
    console.log(err)
  }
};

module.exports = {
  getFlashcards,
}
