# 11-Note-Taker [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Week 11 of Columbia Engineering Coding Bootcamp challenges us to create the back-end server code that can be used to write and save notes. Using Express.js and using a JSON file to store and retrieve note data.

The application's front end was provided to us.

As directed, see the deployed application here at Heroku:

https://c-11-note-taker.herokuapp.com/

Notes have three attributes:

* id
* title
* text

id is unique and assigned at note creation, as the next consecutive integer beyond the maximum id. For example, if 4 is the maximum id, a new note will be assigned 5 for the id.

## Installation

```sh
git clone https://github.com/chrispobrien/11-Note-Taker.git
```

This creates the folder 11-Note-Taker within which you will find the project files. Issue these commands to initialize the node package manager and download dependencies:

```sh
cd 11-Note-Taker
npm init -y
npm install
```

## Usage

[![Note Taker][screenshot]](./public/assets/images/screenshot.png)

To run the unit tests:
```sh
npm run test
```

When all tests pass, simply run server.js:

```sh
npm start
```

When run locally, use http://localhost:3001/ to access the landing page. Click on the button labeled "Get Started" and add, you can view existing notes, add new notes, and delete notes.

## Credits

The front-end was provided by the bootcamp. The back-end is my solution to this homework challenge.

## License

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- MARKDOWN LINKS & IMAGES -->
[screenshot]: ./public/assets/images/screenshot.png