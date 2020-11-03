/* eslint-disable no-console */
/* eslint-disable camelcase */

// // import flashcard model
// const mongoose = require('mongoose');
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
  console.log('Client sending request to store flashcard on DB: req.body :', req.body);
  const date = new Date();
  // pull data from client
  const {
    catagory, subject, question, answer,
  } = req.body;
  // create flashcard
  const createdFlashcard = new Flashcard({
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
    console.log('DB is responding to clients request to post flashcard', response);
  } catch (err) {
    console.log(err);
  }
};
// delete a flashcard from the list
const deleteFlashcard = async (req, res) => {
  try {
    const response = await Flashcard.findByIdAndRemove(req.params.id);
    console.log('DB is responding to clients request to delete flashcard', response);
    if (!response) { res.sendStatus(500).send({ message: ' Could not delete' }); } else { res.sendStatus(200); }
  } catch (err) {
    console.log('Error trying to delete flashcard by id', err);
  }
};

// export controllers to routes
module.exports = {
  getFlashcards,
  createFlashcard,
  deleteFlashcard,
};
