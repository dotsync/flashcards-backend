const express = require('express');
const router = express.Router();

const MOCK_FLASHCARDS = [
  {
    id: 1,
    createdAt: "2018-8-3 11:12:40",
    category: 'math',
    subject: 'addition',
    question: 'What is 1 + 2 ?',
    answer: '3',
    multipleChoice: ['2', '3', '4', '5']
  },
  {
    id: 2,
    createdAt: "2020-1-1 10:11:40",
    category: 'math',
    subject: 'divison',
    question: 'What is 5 / 5 ?',
    answer: '1',
    multipleChoice: ['.5', '10', '1', '2']
  },
  {
    id: 3,
    createdAt: "2016-8-3 11:12:40",
    category: 'math',
    subject: 'multiplication',
    question: 'What is 2 * 2 ?',
    answer: '4',
    multipleChoice: ['2', '3', '4', '5']
  },
  {
    id: 4,
    createdAt: "1990-1-1 10:11:40",
    category: 'math',
    subject: 'subtraction',
    question: 'What is 15 - 5 ?',
    answer: '10',
    multipleChoice: ['5', '10', '15', '20']
  }
];

// gets all flash cards
router.get('/list', (req, res) =>{
  res.send(MOCK_FLASHCARDS)
})

module.exports = router;
