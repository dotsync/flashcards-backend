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
  console.log('CLIENT SENDING REQUEST TO STORE FLASHCARD ON DB: req.body -->', req.body);
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
    console.log('DB IS RESPONDING TO REQUEST TO CLIENT', response);
  } catch (err) {
    console.log(err);
  }
};
// delete a flashcard from the list
const deleteFlashcard = async (req, res) => {
  // // check if id is object
  // let flashcard;
  // const flashcardId = req.params.id;
  if (typeof flashcardId === 'string') {
    console.log('deleteFlashcard:SERVER:req.params.id', req.params.id);
  }
  try {
    // // flashcard = await Flashcard.findById(req.params.id);
    // console.log('---REQPARAMS PARAM PARAM-----req', req.params);
    // console.log('---REQPARAMS PARAM PARAM-----req', typeof req.params.id);
    // console.log('This is the flash card i found using findById', flashcard);
    const response = await Flashcard.findByIdAndRemove(req.params.id);
    console.log('DB IS RESPONDING TO CLIENTS REQUEST TO DELETE', response);
    if (!response) { res.sendStatus(500).send(err); } else { res.sendStatus(200); }
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
