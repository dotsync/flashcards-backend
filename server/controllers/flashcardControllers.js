// import mock data
const mockData = require('../../mock/data-files/dummies')

// import flashcard model
const Flashcard = require('.././models/flashcardSchema')

// get a list of all flashcards from the db
const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
    res.status('200')
  } catch (err) {
    console.log(err)
  }
};
// create a flashcard and store it on the server
const createFlashcard = async (req, res) => {
  // pull data from client
  const { flashcard_id, createdAt, category, subject, question, answer, amountOfFlips } = req.body
  // create flashcard
  const createdFlashcard = new Flashcard({
    flashcard_id,
    createdAt,
    category,
    subject,
    question,
    answer,
    amountOfFlips,
  })
  try {
    // save flashcard to db
    const response = await createdFlashcard.save();
    res.json(response)
  } catch (err) {
    console.log(err)
  }
}

// export controllers to routes
module.exports = {
  getFlashcards,
  createFlashcard,
}
