/* eslint-disable no-console */
/* eslint-disable camelcase */

// import flashcard model
const Flashcard = require('../models/flashcardSchema');

// get a list of all flashcards from the db
const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
    res.status('200');
  } catch (err) {
    console.log(err);
  }
};
// create a flashcard and store it on the server
const createFlashcard = async (req, res) => {
  console.log('CLIENT SENDING REQUEST TO STORE FLASHCARD ON DB: req.body -->', req.body);
  const date = new Date();
  // pull data from client
  const {
    catagory, subject, question, answer,
  } = req.body;
  // create flashcard
  const createdFlashcard = new Flashcard({
    flashcardId: 999999,
    createdAt: date,
    catagory,
    subject,
    question,
    answer,
    amountOfFlips: 0,
  });
  try {
    // save flashcard to db
    const response = await createdFlashcard.save();
    res.json(response);
    console.log('DB IS RESPONDING TO REQUEST TO CLIENT', response);
  } catch (err) {
    console.log(err);
  }
};

// export controllers to routes
module.exports = {
  getFlashcards,
  createFlashcard,
};
