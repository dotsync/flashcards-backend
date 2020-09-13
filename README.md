# Flashcards

*Flashcards* is a single page application that allows the user to **create**, **store**, and **share** flashcards for *learning*.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies

### `npm start`

<!-- Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. -->


## Flashcards-backend was created with these technologies:
*some may not be listed*

* [Mocha](https://mochajs.org/) - Testing framework
* [Chai](https://www.chaijs.com/) - Testing library
* [Express](https://expressjs.com/) - Server (client)
* [Mongoose](https://mongoosejs.com/) - Server (backend)
* [Node](https://nodejs.org/) - Engine
* [Mongodb](https://docs.mongodb.com/) - database

## Contributing

Please read [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Sergei Liddell** - *Initial work* - [dotsync](https://github.com/dotsync)

### API
# Flashcard API
### List Flashcards

`GET /flashcards/list`
Retrieves the list of flashcards.

Parameters

| Parameter | Type    | Description                                               |
| --------- | ------- | --------------------------------------------------------- |
| count     | integer | Specifies how many results per page to return. Default 10 |

Response

`Status: 200 OK `

```json
[
  {
    "_id": "5f5e320aba1c26e4ee9b4291",
    "flashcardId": "1",
    "createdAt": "Sun Sep 13 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
    "category": "Code",
    "subject": "Commonly asked JavaScript Interview Questions",
    "question": "What is JavaScript(JS)?",
    "answer": "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
    "amountOfFlips": "0"
  },
  {
    "_id": "5f5e320aba1c26e4ee9b4292",
    "flashcardId": "2",
    "createdAt": "Sun Sep 13 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
    "category": "Code",
    "subject": "Commonly asked JavaScript Interview Questions",
    "question": "What are the features of JavaScript?",
    "answer": "JavaScript is a lightweight, interpreted programming language. JavaScript is designed for creating network-centric applications. JavaScript is complementary to and integrated with Java. JavaScript is complementary to and integrated with HTML. JavaScript is open and cross-platform.",
    "amountOfFlips": "0"
  },
  {
    "_id": "5f5e320aba1c26e4ee9b4293",
    "flashcardId": "3",
    "createdAt": "Sun Sep 13 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
    "category": "Code",
    "subject": "Commonly asked JavaScript Interview Questions",
    "question": "What are the advantages of JavaScript?",
    "answer": "Less server interaction? You can validate user input before sending the page off to the server. Immediate feedback to the visitors? They don’t have to wait for a page reload to see if they have forgotten to enter something. Increased interactivity? You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard",
    "amountOfFlips": "0"
  },
  {
    "_id": "5f5e320aba1c26e4ee9b4294",
    "flashcardId": "4",
    "createdAt": "Sun Sep 13 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
    "category": "Code",
    "subject": "Commonly asked JavaScript Interview Questions",
    "question": "Why is javascript called Richer Interface?",
    "answer": "You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors.",
    "amountOfFlips": "0"
  },
	// ...
]
```



### Flashcard Information

Returns all flashcard level information for a specified flashcard id.

`GET /flashcards/:flashcardId`

Parameters

| Parameter   | Type    | Description                          |
| ----------  | ------- | ------------------------------------ |
| flashcardId | integer | Required ID of the Flashcard requested |

Response

`Status: 200 OK `

```json
  {
    "_id": "5f5e320aba1c26e4ee9b42a6",
    "flashcardId": "22",
    "createdAt": "Sun Sep 13 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
    "category": "Code",
    "subject": "Commonly asked JavaScript Interview Questions",
    "question": "What are JavaScript Data Types",
    "answer": "Number, String, Boolean, Object, Undefined",
    "amountOfFlips": "0"
  },
```
