/**
  * books.js
  * Soham Rajput
  * 301180583
  * Oct 27, 2021
  */

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
  Title: String,
  Price: Number,
  Author: String,
  Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
