const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const flashcardSchema = new Schema({
  flashcard_id: {type: String},
  createdAt: {type: String},
  category: {type: String},
  subject: {type: String},
  question: {type: String},
  answer: {type: String}
})

module.exports = mongoose.model('Flashcard', flashcardSchema);
