const mongoose = require('mongoose');

const { Schema } = mongoose;

const flashcardSchema = new Schema({
  flashcardId: { type: String },
  createdAt: { type: String },
  category: { type: String },
  subject: { type: String },
  question: { type: String },
  answer: { type: String },
  amountOfFlips: { type: String },
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
