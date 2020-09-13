const mongoose = require('mongoose');

const { Schema } = mongoose;

const flashcardSchema = new Schema({
  flashcardId: { type: Number, required: true },
  createdAt: { type: String, required: true },
  catagory: { type: String, required: true },
  subject: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  amountOfFlips: { type: Number, required: true },
});

module.exports = mongoose.model('Flashcard', flashcardSchema);
