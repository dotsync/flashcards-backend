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
  // connect to db
  // create flashcard
  try {
    // save flashcard to db
  } catch (err) {
    console.log(err)
  }
  // close connection to db
  // respond to client
}

// export controllers to routes
module.exports = {
  getFlashcards,
  createFlashcard,
}
/* example data
{
  flashcard_id: {type: String},
  createdAt: {type: String},
  category: {type: String},
  subject: {type: String},
  question: {type: String},
  answer: {type: String},
  amountOfFlips: {type: String}
}
*/
